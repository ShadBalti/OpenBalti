import ReviewPage from "@/components/review-page"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { generateMetadata } from "@/lib/metadata"
import { DictionaryStructuredData } from "@/components/structured-data"

export const metadata = generateMetadata(
  "Review Dictionary",
  "Help improve the OpenBalti dictionary by reviewing and editing entries for accuracy and completeness.",
)

/**
 * Renders the dictionary review page, which provides a comprehensive interface for moderators and administrators
 * to review, edit, and manage dictionary entries.
 * The core functionality is encapsulated within the `ReviewPage` component.
 *
 * @returns {JSX.Element} The rendered review page.
 */
export default function Review() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Review Dictionary</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Help improve the OpenBalti dictionary by reviewing and editing entries
          </p>
        </div>
        <Suspense
          fallback={
            <div className="space-y-4">
              <Skeleton className="h-10 w-full max-w-md" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          }
        >
          <ReviewPage />
        </Suspense>
      </div>
      <DictionaryStructuredData
        url="/review"
        name="OpenBalti Dictionary Review"
        description="Review and improve the OpenBalti dictionary entries for accuracy and completeness."
      />
    </div>
  )
}
