import { Suspense } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import WordHistory from "@/components/word-history"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

interface WordHistoryPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: WordHistoryPageProps): Promise<Metadata> {
  try {
    await dbConnect()
    const word = await Word.findById(params.id).lean()

    if (!word) {
      return {
        title: "Word History Not Found",
        description: "The requested word history could not be found in the OpenBalti Dictionary.",
      }
    }

    return {
      title: `History of "${word.balti}" - OpenBalti Dictionary`,
      description: `View the complete history of changes for the Balti word "${word.balti}" in the OpenBalti Dictionary.`,
      openGraph: {
        title: `History of "${word.balti}" - OpenBalti Dictionary`,
        description: `View the complete history of changes for the Balti word "${word.balti}" in the OpenBalti Dictionary.`,
        type: "article",
      },
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Word History - OpenBalti Dictionary",
      description: "Explore the history of changes for words in the OpenBalti Dictionary.",
    }
  }
}

export default async function WordHistoryPage({ params }: WordHistoryPageProps) {
  try {
    await dbConnect()
    const word = await Word.findById(params.id).lean()

    if (!word) {
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
            <WordHistory wordId={params.id} />
          </Suspense>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error fetching word:", error)
    notFound()
  }
}
