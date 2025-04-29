"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { AlertTriangle } from "lucide-react"

interface ErrorBoundaryProps {
  error?: Error & { digest?: string }
  reset?: () => void
  fallback?: React.ReactNode
  children: React.ReactNode
}

// Export the component as a named export
export function ErrorBoundary({ error, reset, fallback, children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState<boolean>(!!error)

  useEffect(() => {
    if (error) {
      // Log the error to an error reporting service
      console.error("Application error:", error)
      setHasError(true)
    }
  }, [error])

  if (hasError) {
    if (fallback) {
      return <>{fallback}</>
    }

    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center p-6">
        <div className="space-y-4">
          <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto" />
          <h2 className="text-2xl font-bold tracking-tight">Something went wrong!</h2>
          <p className="text-muted-foreground">
            We apologize for the inconvenience. Please try again or contact support if the problem persists.
          </p>
          <div className="flex justify-center gap-2">
            {reset && (
              <Button
                onClick={() => {
                  setHasError(false)
                  reset()
                }}
              >
                Try again
              </Button>
            )}
            <Button variant="outline" asChild>
              <a href="/">Go to Home</a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

// Also export as default for backward compatibility
export default ErrorBoundary
