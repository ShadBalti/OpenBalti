import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { generateMetadata as generateUserMetadata } from "@/lib/metadata"
import UserProfile from "@/components/profile/user-profile"
import { ErrorBoundary } from "@/components/error-boundary"

export async function generateMetadata({ params }: { params: { id: string } }) {
  return generateUserMetadata("User Profile", "View contributor profile and statistics")
}

/**
 * Renders a specific user's public profile page.
 * It retrieves the user ID from the URL parameters and passes it to the `UserProfile` component,
 * which is responsible for fetching and displaying the user's data.
 * The page includes suspense and error boundaries to handle loading and error states gracefully.
 *
 * @param {{ params: { id: string } }} props - The component props, containing the dynamic route parameters.
 * @param {string} props.params.id - The ID of the user whose profile is to be displayed.
 * @returns {JSX.Element} The rendered user profile page.
 */
export default function UserProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <ErrorBoundary
          fallback={
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Error Loading Profile</h2>
              <p className="mb-4">We encountered a problem loading this user profile.</p>
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-20 w-20 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <Skeleton className="h-32 w-full" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                </div>
              </div>
            }
          >
            <UserProfile userId={params.id} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}