"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"

export default function DictionaryError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="rounded-lg bg-destructive/10 p-4">
            <AlertTriangle className="h-12 w-12 text-destructive mx-auto" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dictionary Load Failed</h1>
            <p className="text-muted-foreground">
              We encountered an error while loading the dictionary. This is likely a temporary issue.
            </p>
          </div>

          <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 max-w-md text-left">
            <p className="text-sm font-mono text-destructive/80 break-words">
              {error.message || "Unknown error"}
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={reset}
              size="lg"
              className="sm:w-auto"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              size="lg"
              className="sm:w-auto"
            >
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </div>

          <div className="border-t pt-6 max-w-md">
            <p className="text-sm text-muted-foreground mb-3">
              If the problem persists, try these steps:
            </p>
            <ul className="text-sm text-left space-y-2 text-muted-foreground">
              <li>• Clear your browser cache and cookies</li>
              <li>• Disable browser extensions</li>
              <li>• Try again in a few minutes</li>
              <li>• Contact support if the issue continues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
