import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { generateMetadata } from "@/lib/metadata"
import ActivityLogList from "@/components/activity/activity-log-list"

export const metadata = generateMetadata(
  "Activity Log",
  "View the history of changes made to the OpenBalti dictionary.",
)

export default function ActivityPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Activity Log</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Track changes and contributions to the OpenBalti dictionary
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
          <ActivityLogList limit={20} />
        </Suspense>
      </div>
    </div>
  )
}
