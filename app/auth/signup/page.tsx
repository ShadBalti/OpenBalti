import type { Metadata } from "next"
import SignUpForm from "@/components/auth/signup-form"
import { generateMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateMetadata(
  "Sign Up",
  "Create an OpenBalti account to contribute to the dictionary.",
)

/**
 * Renders the sign-up page for the application.
 * It provides a clean layout and displays the `SignUpForm` component, which handles the user registration logic.
 *
 * @returns {JSX.Element} The rendered sign-up page.
 */
export default function SignUpPage() {
  return (
    <div className="container flex h-[calc(100vh-8rem)] items-center justify-center py-8 md:py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Sign up to contribute to the OpenBalti dictionary</p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}
