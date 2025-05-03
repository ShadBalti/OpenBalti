"use client"

import { useSearchParams } from "next/navigation"

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
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
          <h2 className="text-lg font-semibold">Authentication Error</h2>
          <p>{errorMessage}</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="/auth/signin" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Try Again
          </a>
          <a href="/" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
            Go to Home
          </a>
        </div>
      </div>
    </div>
  )
}
