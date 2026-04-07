"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw, ChevronLeft } from "lucide-react"

export default function WordError({
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
            <h1 className="text-3xl font-bold tracking-tight">Word Not Available</h1>
            <p className="text-muted-foreground">
              We couldn&apos;t load this word. It may not exist or there was a temporary error.
            </p>
          </div>

          <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 max-w-md text-left">
            <p className="text-sm font-mono text-destructive/80 break-words">
              {error.message || "Word loading failed"}
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
              onClick={() => router.back()}
              variant="outline"
              size="lg"
              className="sm:w-auto"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>

          <div className="border-t pt-6 max-w-md">
            <p className="text-sm text-muted-foreground mb-3">
              What you can try:
            </p>
            <ul className="text-sm text-left space-y-2 text-muted-foreground">
              <li>• Check the URL spelling</li>
              <li>• Search for the word in the dictionary</li>
              <li>• Clear your browser cache</li>
              <li>• Try again in a few moments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
