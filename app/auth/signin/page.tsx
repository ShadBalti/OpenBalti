import { Suspense } from "react"
import type { Metadata } from "next"
import SignInForm from "@/components/auth/signin-form"
import { generateMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateMetadata(
  "Sign In",
  "Sign in to your OpenBalti account to contribute to the dictionary.",
)

export default function SignInPage() {
  return (
    <div className="container flex h-[calc(100vh-8rem)] items-center justify-center py-8 md:py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Sign in to your account to continue</p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <SignInForm />
        </Suspense>
      </div>
    </div>
  )
}
