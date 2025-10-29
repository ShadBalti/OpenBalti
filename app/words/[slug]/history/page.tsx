import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { generateMetadata as generateHistoryMetadata } from "@/lib/metadata"
import WordHistory from "@/components/word-history"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return generateHistoryMetadata("Word History", "View the complete history of changes for this word")
}

async function getWordId(slug: string) {
  try {
    await dbConnect()
    const word = await Word.findOne({ slug }).select("_id")
    return word?._id?.toString()
  } catch (error) {
    return null
  }
}

export default async function WordHistoryPage({ params }: { params: { slug: string } }) {
  const wordId = await getWordId(params.slug)

  if (!wordId) {
    notFound()
  }

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
          <WordHistory wordId={wordId} />
        </Suspense>
      </div>
    </div>
  )
}
