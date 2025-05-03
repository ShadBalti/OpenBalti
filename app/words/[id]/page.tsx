import { Suspense } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import WordDetail from "@/components/word-detail-page"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

interface WordPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: WordPageProps): Promise<Metadata> {
  try {
    await dbConnect()
    const word = await Word.findById(params.id).lean()

    if (!word) {
      return {
        title: "Word Not Found",
        description: "The requested word could not be found in the OpenBalti Dictionary.",
      }
    }

    return {
      title: `${word.balti} - OpenBalti Dictionary`,
      description: `Learn about the Balti word "${word.balti}" meaning "${word.english}" in the OpenBalti Dictionary.`,
      openGraph: {
        title: `${word.balti} - OpenBalti Dictionary`,
        description: `Learn about the Balti word "${word.balti}" meaning "${word.english}" in the OpenBalti Dictionary.`,
        type: "article",
      },
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Word Details - OpenBalti Dictionary",
      description: "Explore detailed information about Balti words in the OpenBalti Dictionary.",
    }
  }
}

export default async function WordPage({ params }: WordPageProps) {
  try {
    await dbConnect()
    const word = await Word.findById(params.id).populate("createdBy", "name image").lean()

    if (!word) {
      notFound()
    }

    return (
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <Suspense fallback={<WordDetailSkeleton />}>
            <WordDetail word={JSON.parse(JSON.stringify(word))} />
          </Suspense>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error fetching word:", error)
    notFound()
  }
}

function WordDetailSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Skeleton className="h-40 w-full" />
      <div className="space-y-2">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-24 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-24 w-full" />
      </div>
    </div>
  )
}
