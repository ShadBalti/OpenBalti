import { NextResponse } from "next/server"

/**
 * Standardized error response types
 */
export enum ErrorCode {
  // 4xx Client Errors
  BAD_REQUEST = "BAD_REQUEST",
  UNAUTHORIZED = "UNAUTHORIZED",
  FORBIDDEN = "FORBIDDEN",
  NOT_FOUND = "NOT_FOUND",
  CONFLICT = "CONFLICT",
  UNPROCESSABLE_ENTITY = "UNPROCESSABLE_ENTITY",

  // 5xx Server Errors
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE",
  DATABASE_ERROR = "DATABASE_ERROR",
  TIMEOUT = "TIMEOUT",

  // Custom Errors
  VALIDATION_ERROR = "VALIDATION_ERROR",
  AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR",
  AUTHORIZATION_ERROR = "AUTHORIZATION_ERROR",
}

/**
 * Error severity levels for logging
 */
export enum ErrorSeverity {
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
  CRITICAL = "critical",
}

/**
 * Structure for API error responses
 */
export interface ApiError {
  code: ErrorCode
  message: string
  details?: unknown
  timestamp?: string
  requestId?: string
  severity?: ErrorSeverity
}

/**
 * Default error messages for each error code
 */
const ERROR_MESSAGES: Record<ErrorCode, string> = {
  [ErrorCode.BAD_REQUEST]: "The request was invalid or malformed.",
  [ErrorCode.UNAUTHORIZED]: "Authentication is required to access this resource.",
  [ErrorCode.FORBIDDEN]: "You do not have permission to access this resource.",
  [ErrorCode.NOT_FOUND]: "The requested resource was not found.",
  [ErrorCode.CONFLICT]: "The request conflicts with the current state of the resource.",
  [ErrorCode.UNPROCESSABLE_ENTITY]: "The request could not be processed due to semantic errors.",
  [ErrorCode.INTERNAL_SERVER_ERROR]: "An unexpected server error occurred. Please try again later.",
  [ErrorCode.SERVICE_UNAVAILABLE]: "The service is currently unavailable. Please try again later.",
  [ErrorCode.DATABASE_ERROR]: "A database error occurred. Please try again later.",
  [ErrorCode.TIMEOUT]: "The request took too long to complete. Please try again.",
  [ErrorCode.VALIDATION_ERROR]: "Validation failed for the provided data.",
  [ErrorCode.AUTHENTICATION_ERROR]: "Authentication failed. Please check your credentials.",
  [ErrorCode.AUTHORIZATION_ERROR]: "You are not authorized to perform this action.",
}

/**
 * HTTP status code mapping for error codes
 */
const ERROR_STATUS_CODES: Record<ErrorCode, number> = {
  [ErrorCode.BAD_REQUEST]: 400,
  [ErrorCode.UNAUTHORIZED]: 401,
  [ErrorCode.FORBIDDEN]: 403,
  [ErrorCode.NOT_FOUND]: 404,
  [ErrorCode.CONFLICT]: 409,
  [ErrorCode.UNPROCESSABLE_ENTITY]: 422,
  [ErrorCode.INTERNAL_SERVER_ERROR]: 500,
  [ErrorCode.SERVICE_UNAVAILABLE]: 503,
  [ErrorCode.DATABASE_ERROR]: 500,
  [ErrorCode.TIMEOUT]: 504,
  [ErrorCode.VALIDATION_ERROR]: 422,
  [ErrorCode.AUTHENTICATION_ERROR]: 401,
  [ErrorCode.AUTHORIZATION_ERROR]: 403,
}

/**
 * Creates a standardized API error response
 * 
 * @param code - The error code
 * @param message - Custom error message (uses default if not provided)
 * @param details - Additional error details for logging
 * @param requestId - Optional request ID for tracking
 * @returns NextResponse with proper status code and error format
 */
export function createErrorResponse(
  code: ErrorCode,
  message?: string,
  details?: unknown,
  requestId?: string,
  severity: ErrorSeverity = ErrorSeverity.ERROR,
) {
  const statusCode = ERROR_STATUS_CODES[code]
  const defaultMessage = ERROR_MESSAGES[code]
  const finalMessage = message || defaultMessage

  const error: ApiError = {
    code,
    message: finalMessage,
    timestamp: new Date().toISOString(),
    ...(requestId && { requestId }),
    ...(details !== undefined ? { details } : {}),
    severity,
  }

  // Log error with appropriate level
  logError(error, details)

  return NextResponse.json({ success: false, error }, { status: statusCode })
}

/**
 * Handles unknown errors and maps them to appropriate error codes
 */
export function handleUnknownError(
  error: unknown,
  context?: string,
  requestId?: string,
) {
  let code: ErrorCode = ErrorCode.INTERNAL_SERVER_ERROR
  let message = "An unexpected error occurred"
  let severity = ErrorSeverity.ERROR
  let details: unknown

  if (error instanceof Error) {
    message = error.message
    details = { name: error.name, stack: error.stack }

    // Map error types to codes
    if (error.name === "MongoError" || error.message.includes("MongoDB")) {
      code = ErrorCode.DATABASE_ERROR
      severity = ErrorSeverity.CRITICAL
    } else if (error.message.includes("timeout") || error.name === "TimeoutError") {
      code = ErrorCode.TIMEOUT
    } else if (error.message.includes("validation") || error.name === "ValidationError") {
      code = ErrorCode.VALIDATION_ERROR
    }
  }

  if (context) {
    message = `${message} (Context: ${context})`
  }

  return createErrorResponse(code, message, details, requestId, severity)
}

/**
 * Centralized error logging with severity levels
 */
function logError(error: ApiError, details?: unknown) {
  const timestamp = new Date().toISOString()
  const logMessage = `[${timestamp}] ${error.code}: ${error.message}`

  // Only log in development to avoid leaking sensitive information
  if (process.env.NODE_ENV !== "production") {
    switch (error.severity) {
      case ErrorSeverity.CRITICAL:
        console.error(`🚨 ${logMessage}`, details || "")
        break
      case ErrorSeverity.ERROR:
        console.error(`❌ ${logMessage}`, details || "")
        break
      case ErrorSeverity.WARNING:
        console.warn(`⚠️  ${logMessage}`, details || "")
        break
      case ErrorSeverity.INFO:
        console.log(`ℹ️  ${logMessage}`, details || "")
        break
    }
  } else {
    // In production, log only errors and critical issues without details
    if (error.severity === ErrorSeverity.CRITICAL || error.severity === ErrorSeverity.ERROR) {
      console.error(logMessage)
    }
    // TODO: Integrate with error tracking service (e.g., Sentry, DataDog)
  }
}

/**
 * Validates request data against a schema
 */
export function validateRequestData(
  data: unknown,
  requiredFields: string[],
): { valid: boolean; error?: string } {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Request body must be a valid JSON object" }
  }

  const obj = data as Record<string, unknown>
  for (const field of requiredFields) {
    if (!(field in obj) || obj[field] === undefined || obj[field] === null) {
      return { valid: false, error: `Missing required field: ${field}` }
    }
  }

  return { valid: true }
}

/**
 * Rate limit error response
 */
export function createRateLimitError(retryAfter?: number) {
  const response = createErrorResponse(
    ErrorCode.BAD_REQUEST,
    "Too many requests. Please try again later.",
  )

  if (retryAfter) {
    response.headers.set("Retry-After", retryAfter.toString())
  }

  return response
}

/**
 * Creates a user-friendly error response for client-side handling
 */
export function createClientErrorResponse(
  code: ErrorCode,
  userMessage: string,
  details?: unknown,
) {
  const statusCode = ERROR_STATUS_CODES[code]

  return NextResponse.json(
    {
      success: false,
      error: {
        code,
        message: userMessage,
        timestamp: new Date().toISOString(),
      },
    },
    { status: statusCode },
  )
}
