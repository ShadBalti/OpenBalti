import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { generateMetadata as generateHistoryMetadata } from "@/lib/metadata"
import WordHistory from "@/components/word-history"

export async function generateMetadata({ params }: { params: { id: string } }) {
  return generateHistoryMetadata("Word History", "View the complete history of changes for this word")
}

export default function WordHistoryPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <Suspense
          fallback={
            <div className="space-y-4">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-10 w-full max-w-md" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-10 w-full max-w-md" />
              <Skeleton className="h-64 w-full" />
            </div>
          }
        >
          <WordHistory wordId={params.id} />
        </Suspense>
      </div>
    </div>
  )
}
