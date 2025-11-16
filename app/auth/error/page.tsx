"use client"

import { useSearchParams } from "next/navigation"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

/**
 * Renders a page to display authentication-related errors.
 * It reads the error type from the URL query parameters and shows a user-friendly message
 * corresponding to the specific error, such as invalid credentials or an unlinked OAuth account.
 *
 * @returns {JSX.Element} The rendered authentication error page.
 */
export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  let errorMessage = "An error occurred during authentication. Please try again."

  if (error === "CredentialsSignin") {
    errorMessage = "Invalid email or password. Please check your credentials and try again."
  } else if (error === "OAuthAccountNotLinked") {
    errorMessage = "This email is already associated with another account. Please sign in using your original provider."
  } else if (error === "OAuthSignin") {
    errorMessage = "Error signing in with the OAuth provider. Please try again."
  } else if (error === "AccessDenied") {
    errorMessage = "Access denied. You don't have permission to access this resource."
  }

  return (
    <div className="container flex h-[calc(100vh-8rem)] items-center justify-center py-8 md:py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Authentication Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/auth/signin">Try Again</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Go to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
