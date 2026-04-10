/**
 * Configuration for retry behavior
 */
export interface RetryConfig {
  /** Maximum number of retry attempts */
  maxAttempts: number
  /** Initial delay in milliseconds */
  initialDelayMs: number
  /** Maximum delay in milliseconds */
  maxDelayMs: number
  /** Multiplier for exponential backoff */
  backoffMultiplier: number
  /** Whether to add random jitter to delays */
  useJitter: boolean
  /** Function to determine if an error is retryable */
  isRetryable?: (error: unknown) => boolean
}

/**
 * Default retry configuration
 * - 3 attempts (initial + 2 retries)
 * - 1s initial delay
 * - 10s max delay
 * - 2x exponential backoff
 * - Includes jitter to prevent thundering herd
 */
export const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxAttempts: 3,
  initialDelayMs: 1000,
  maxDelayMs: 10000,
  backoffMultiplier: 2,
  useJitter: true,
}

/**
 * Determines if an error should be retried
 * Retryable errors:
 * - Network timeouts
 * - 429 Too Many Requests
 * - 503 Service Unavailable
 * - 504 Gateway Timeout
 * - ECONNREFUSED, ECONNRESET, ETIMEDOUT
 */
export function isNetworkError(error: unknown): boolean {
  if (error instanceof Error) {
    const message = error.message.toLowerCase()
    return (
      message.includes("timeout") ||
      message.includes("econnrefused") ||
      message.includes("econnreset") ||
      message.includes("etimedout") ||
      message.includes("network") ||
      message.includes("failed to fetch")
    )
  }
  return false
}

/**
 * Determines if an HTTP status code is retryable
 */
export function isRetryableStatusCode(statusCode: number): boolean {
  return [408, 429, 500, 502, 503, 504].includes(statusCode)
}

/**
 * Calculates delay for next retry with exponential backoff and optional jitter
 * 
 * Formula: min(initialDelay * (backoffMultiplier ^ attemptNumber), maxDelay)
 * With jitter: delay * (0.5 + random(0, 1))
 * 
 * @param attempt - Current attempt number (0-indexed)
 * @param config - Retry configuration
 * @returns Delay in milliseconds
 */
export function calculateBackoffDelay(attempt: number, config: RetryConfig): number {
  // Calculate exponential backoff
  const exponentialDelay = config.initialDelayMs * Math.pow(config.backoffMultiplier, attempt)
  const cappedDelay = Math.min(exponentialDelay, config.maxDelayMs)

  // Add jitter if enabled
  if (config.useJitter) {
    const jitter = Math.random() * 0.5 + 0.5 // Random between 0.5 and 1.5
    return Math.round(cappedDelay * jitter)
  }

  return Math.round(cappedDelay)
}

/**
 * Executes an async function with automatic retry on failure
 * 
 * @example
 * ```typescript
 * const result = await retryAsync(
 *   () => fetch('/api/data'),
 *   { maxAttempts: 3, initialDelayMs: 1000 }
 * )
 * ```
 */
export async function retryAsync<T>(
  fn: () => Promise<T>,
  config: Partial<RetryConfig> = {},
): Promise<T> {
  const finalConfig = { ...DEFAULT_RETRY_CONFIG, ...config }
  let lastError: unknown

  for (let attempt = 0; attempt < finalConfig.maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error

      // Check if error is retryable
      const retryable =
        finalConfig.isRetryable?.(error) ?? isNetworkError(error)

      if (!retryable || attempt === finalConfig.maxAttempts - 1) {
        throw error
      }

      // Calculate delay and wait
      const delay = calculateBackoffDelay(attempt, finalConfig)
      console.log(
        `[Retry] Attempt ${attempt + 1} failed, retrying in ${delay}ms...`,
      )
      await sleep(delay)
    }
  }

  throw lastError
}

/**
 * Utility to sleep for a given number of milliseconds
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Wrapper for fetch with automatic retry
 * 
 * @example
 * ```typescript
 * const response = await fetchWithRetry('/api/words', {
 *   maxAttempts: 3,
 *   initialDelayMs: 500
 * })
 * ```
 */
export async function fetchWithRetry(
  url: string,
  options: RequestInit & { retryConfig?: Partial<RetryConfig> } = {},
): Promise<Response> {
  const { retryConfig, ...fetchOptions } = options

  return retryAsync(
    async () => {
      const response = await fetch(url, fetchOptions)

      // Treat certain status codes as retryable errors
      if (!response.ok && isRetryableStatusCode(response.status)) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return response
    },
    retryConfig,
  )
}

/**
 * Circuit breaker pattern for handling cascading failures
 * Opens when error rate exceeds threshold within a time window
 */
export class CircuitBreaker {
  private failureCount = 0
  private lastResetTime = Date.now()
  private state: "closed" | "open" | "half-open" = "closed"

  constructor(
    private readonly failureThreshold: number = 5,
    private readonly resetTimeMs: number = 60000, // 1 minute
  ) {}

  /**
   * Records a successful call, resets failure count
   */
  recordSuccess(): void {
    this.failureCount = 0
    this.state = "closed"
  }

  /**
   * Records a failed call, may open the circuit
   */
  recordFailure(): void {
    this.failureCount++

    if (this.failureCount >= this.failureThreshold) {
      this.state = "open"
      this.lastResetTime = Date.now()
    }
  }

  /**
   * Checks if circuit is open (requests should fail immediately)
   */
  isOpen(): boolean {
    if (this.state === "open") {
      // Check if enough time has passed to try half-open state
      if (Date.now() - this.lastResetTime > this.resetTimeMs) {
        this.state = "half-open"
        this.failureCount = 0
        return false
      }
      return true
    }
    return false
  }

  /**
   * Gets current circuit state
   */
  getState(): "closed" | "open" | "half-open" {
    return this.state
  }

  /**
   * Resets the circuit breaker
   */
  reset(): void {
    this.failureCount = 0
    this.state = "closed"
    this.lastResetTime = Date.now()
  }
}

/**
 * Executes a function with circuit breaker protection
 */
export async function executeWithCircuitBreaker<T>(
  fn: () => Promise<T>,
  breaker: CircuitBreaker,
): Promise<T> {
  if (breaker.isOpen()) {
    throw new Error("Circuit breaker is open - service temporarily unavailable")
  }

  try {
    const result = await fn()
    breaker.recordSuccess()
    return result
  } catch (error) {
    breaker.recordFailure()
    throw error
  }
}
