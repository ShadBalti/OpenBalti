import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { generateMetadata } from "@/lib/metadata"
import ContributorsList from "@/components/profile/contributors-list"
import ErrorBoundary from "@/components/error-boundary"

export const metadata = generateMetadata(
  "Contributors",
  "Discover the people contributing to the OpenBalti dictionary project.",
)

export default function ContributorsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contributors</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Meet the people helping to preserve and document the Balti language
          </p>
        </div>
        <ErrorBoundary
          fallback={
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
              <p className="text-muted-foreground mb-6">
                We're having trouble loading the contributors list. Please try again later.
              </p>
              <div className="flex justify-center">
                <a href="/contributors" className="bg-primary text-white px-4 py-2 rounded-md">
                  Try Again
                </a>
              </div>
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="space-y-4">
                <Skeleton className="h-10 w-full max-w-md" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="h-48 w-full" />
                  ))}
                </div>
              </div>
            }
          >
            <ContributorsList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}
