import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { generateMetadata } from "@/lib/metadata"
import { LeaderboardTable } from "@/components/leaderboard-table"
import ErrorBoundary from "@/components/error-boundary"

export const metadata = generateMetadata("Leaderboard", "See the top contributors to the OpenBalti dictionary project.")

/**
 * Renders the leaderboard page, which displays a ranked list of top contributors.
 * It uses the `LeaderboardTable` component to fetch and display the data,
 * with a suspense fallback for loading states and an error boundary to handle potential errors.
 *
 * @returns {JSX.Element} The rendered leaderboard page.
 */
export default function LeaderboardPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Leaderboard</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Celebrating our top contributors to the Balti language preservation project
          </p>
        </div>

        <ErrorBoundary
          fallback={
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
              <p className="text-muted-foreground mb-6">
                We're having trouble loading the leaderboard. Please try again later.
              </p>
              <a href="/leaderboard" className="bg-primary text-white px-4 py-2 rounded-md inline-block">
                Try Again
              </a>
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="space-y-4">
                {[...Array(10)].map((_, i) => (
                  <Skeleton key={i} className="h-20 w-full" />
                ))}
              </div>
            }
          >
            <LeaderboardTable limit={100} showBadges={true} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}
