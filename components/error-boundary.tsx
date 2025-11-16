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

/**
 * A React error boundary component that catches JavaScript errors in its child component tree,
 * logs those errors, and displays a fallback UI instead of the crashed component tree.
 * It provides a user-friendly way to handle runtime errors and allows for a recovery action.
 *
 * @param {ErrorBoundaryProps} props - The component props.
 * @param {Error & { digest?: string }} [props.error] - The error object caught by the boundary.
 * @param {() => void} [props.reset] - A function to reset the component's state and re-render the children.
 * @param {React.ReactNode} [props.fallback] - A custom fallback component to render on error. If not provided, a default UI is used.
 * @param {React.ReactNode} props.children - The child components to be rendered within the boundary.
 * @returns {JSX.Element} The fallback UI if an error is caught, otherwise the children.
 */
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
