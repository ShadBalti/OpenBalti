# Error Handling & Recovery Guide

## Overview

Comprehensive error handling system with automatic retry logic, circuit breakers, and user-friendly error messages.

## Architecture

### Components

1. **API Error Handler** (`lib/api-error-handler.ts`)
   - Standardized error codes and messages
   - HTTP status code mapping
   - Error logging with severity levels
   - User-friendly vs internal error messages

2. **Retry Logic** (`lib/retry-utils.ts`)
   - Exponential backoff with jitter
   - Network error detection
   - Circuit breaker pattern
   - Configurable retry policies

3. **Error Boundaries**
   - Global error handler (`app/error.tsx`)
   - Route-specific boundaries (`app/dictionary/error.tsx`, `app/words/error.tsx`)
   - Client-side error recovery

## Usage

### API Error Handler

#### Creating Error Responses

```typescript
import { createErrorResponse, ErrorCode } from "@/lib/api-error-handler"

export async function GET(request: NextRequest) {
  try {
    // ... your code
  } catch (error) {
    return createErrorResponse(
      ErrorCode.INTERNAL_SERVER_ERROR,
      "Failed to fetch data",
      error
    )
  }
}
```

#### Available Error Codes

- `BAD_REQUEST` (400)
- `UNAUTHORIZED` (401)
- `FORBIDDEN` (403)
- `NOT_FOUND` (404)
- `CONFLICT` (409)
- `UNPROCESSABLE_ENTITY` (422)
- `INTERNAL_SERVER_ERROR` (500)
- `SERVICE_UNAVAILABLE` (503)
- `DATABASE_ERROR` (500)
- `TIMEOUT` (504)
- `VALIDATION_ERROR` (422)
- `AUTHENTICATION_ERROR` (401)
- `AUTHORIZATION_ERROR` (403)

#### Handling Unknown Errors

```typescript
import { handleUnknownError } from "@/lib/api-error-handler"

try {
  // ... code
} catch (error) {
  return handleUnknownError(error, "Fetching user profile", requestId)
}
```

### Retry Utilities

#### Retrying Async Functions

```typescript
import { retryAsync } from "@/lib/retry-utils"

const data = await retryAsync(
  () => fetch("/api/data"),
  {
    maxAttempts: 3,
    initialDelayMs: 1000,
    maxDelayMs: 10000,
    backoffMultiplier: 2
  }
)
```

#### Fetch with Retry

```typescript
import { fetchWithRetry } from "@/lib/retry-utils"

const response = await fetchWithRetry("/api/words", {
  retryConfig: {
    maxAttempts: 3,
    initialDelayMs: 500
  }
})
```

#### Circuit Breaker Pattern

```typescript
import { CircuitBreaker, executeWithCircuitBreaker } from "@/lib/retry-utils"

// Create circuit breaker (fails after 5 errors within 60 seconds)
const breaker = new CircuitBreaker(5, 60000)

try {
  const result = await executeWithCircuitBreaker(
    () => externalService.call(),
    breaker
  )
} catch (error) {
  if (error.message.includes("Circuit breaker is open")) {
    // Service is temporarily unavailable, use fallback
    return getCachedData()
  }
}
```

## Implementation Patterns

### Pattern 1: API Endpoint with Error Handling

```typescript
import { NextRequest, NextResponse } from "next/server"
import { 
  createErrorResponse, 
  ErrorCode, 
  validateRequestData 
} from "@/lib/api-error-handler"
import { retryAsync } from "@/lib/retry-utils"

export async function POST(request: NextRequest) {
  try {
    // 1. Validate input
    const body = await request.json()
    const validation = validateRequestData(body, ["name", "email"])
    
    if (!validation.valid) {
      return createErrorResponse(
        ErrorCode.VALIDATION_ERROR,
        validation.error
      )
    }

    // 2. Retry database operations
    const user = await retryAsync(
      () => User.create(body),
      { maxAttempts: 3 }
    )

    return NextResponse.json({ success: true, data: user })
  } catch (error) {
    // 3. Handle errors gracefully
    if (error instanceof Error) {
      if (error.message.includes("duplicate")) {
        return createErrorResponse(
          ErrorCode.CONFLICT,
          "User with this email already exists"
        )
      }
    }
    return handleUnknownError(error, "Creating user")
  }
}
```

### Pattern 2: Client-Side API Calls with Retry

```typescript
"use client"

import { useState } from "react"
import { fetchWithRetry } from "@/lib/retry-utils"
import { useToast } from "@/hooks/use-toast"

export function UserForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(data: any) {
    setLoading(true)
    try {
      const response = await fetchWithRetry("/api/users", {
        method: "POST",
        body: JSON.stringify(data),
        retryConfig: { maxAttempts: 3 }
      })

      if (!response.ok) {
        const error = await response.json()
        toast({
          title: "Error",
          description: error.error?.message || "Something went wrong",
          variant: "destructive"
        })
        return
      }

      const result = await response.json()
      toast({
        title: "Success",
        description: "User created successfully"
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create user. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    // Form JSX
  )
}
```

### Pattern 3: Route-Specific Error Boundary

Every critical route should have an `error.tsx` file:

```typescript
// app/[critical-route]/error.tsx

"use client"

import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="container py-12">
      <div className="text-center space-y-4">
        <AlertTriangle className="h-12 w-12 text-red-500 mx-auto" />
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  )
}
```

## Error Messages

### User-Facing Messages
Keep brief and actionable:

```typescript
✓ "Try again in a few moments"
✓ "Check your internet connection"
✓ "Invalid email format"
✗ "SQLException: Connection pool exhausted"
✗ "MongoNetworkTimeoutError"
```

### Developer Messages
Log detailed information for debugging:

```typescript
logError({
  code: "DATABASE_ERROR",
  message: "Failed to fetch user",
  details: {
    name: "MongoError",
    stack: "...",
    query: "db.users.findOne(...)"
  }
})
```

## Monitoring & Debugging

### Log Levels

- **INFO**: Normal operation, useful for tracking
- **WARNING**: Unexpected behavior, but handled gracefully
- **ERROR**: Something failed, needs attention
- **CRITICAL**: System failure, needs immediate action

### Example Log Outputs

```
ℹ️  [2024-01-15T10:30:45.123Z] VALIDATION_ERROR: Missing required field: email

⚠️  [2024-01-15T10:30:46.456Z] BAD_REQUEST: Rate limit approaching

❌ [2024-01-15T10:30:47.789Z] DATABASE_ERROR: Connection timeout

🚨 [2024-01-15T10:30:48.012Z] SERVICE_UNAVAILABLE: External service down
```

## Best Practices

### 1. Always Validate Input
```typescript
const validation = validateRequestData(body, ["required", "fields"])
if (!validation.valid) return createErrorResponse(...)
```

### 2. Use Specific Error Codes
```typescript
// Good
return createErrorResponse(ErrorCode.NOT_FOUND)

// Avoid
return NextResponse.json({ error: "not found" }, { status: 404 })
```

### 3. Retry Transient Errors
```typescript
// Network calls should retry
const data = await retryAsync(() => fetch(...))

// Database operations should retry
const user = await retryAsync(() => User.create(...))
```

### 4. Provide Fallback Data
```typescript
try {
  return await fetchFreshData()
} catch (error) {
  // Use cached data when API fails
  return getCachedData()
}
```

### 5. Log with Context
```typescript
// Good
console.error("Failed to fetch user profile:", { userId, error })

// Avoid
console.error("Error")
```

### 6. Handle Rate Limiting
```typescript
import { createRateLimitError } from "@/lib/api-error-handler"

if (requests > LIMIT) {
  return createRateLimitError(60) // Retry after 60 seconds
}
```

## Testing Error Handling

### Test Retry Logic
```typescript
// Fails twice, succeeds on third attempt
let attempts = 0
const result = await retryAsync(
  () => {
    attempts++
    if (attempts < 3) throw new Error("Fail")
    return "Success"
  },
  { maxAttempts: 3 }
)
expect(result).toBe("Success")
expect(attempts).toBe(3)
```

### Test Circuit Breaker
```typescript
const breaker = new CircuitBreaker(2, 1000)

// First two failures
breaker.recordFailure()
breaker.recordFailure()
expect(breaker.isOpen()).toBe(true)

// After reset window
await sleep(1100)
expect(breaker.isOpen()).toBe(false)
```

## Common Error Scenarios

### Database Connection Timeout
```
Error: MongoDB connection timeout
→ Retry with exponential backoff
→ After 3 attempts, show "Service temporarily unavailable"
→ Log to error tracking service
```

### Network Timeout
```
Error: Fetch timeout
→ Retry with circuit breaker
→ If circuit open, use cached data
→ Show "Check your internet connection"
```

### Invalid Input
```
Error: Validation failed
→ Don't retry (not a transient error)
→ Return specific validation errors
→ Show actionable message to user
```

### Rate Limiting
```
Error: 429 Too Many Requests
→ Retry with exponential backoff
→ Set Retry-After header
→ Show "Too many requests, try again later"
```

## Future Improvements

1. Integrate with error tracking service (Sentry, Rollbar)
2. Add metrics collection for error rates
3. Implement circuit breaker for external APIs
4. Add distributed tracing for debugging
5. Create admin dashboard for error monitoring
