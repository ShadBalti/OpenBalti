import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import WordDetail from "@/components/word-detail"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    await dbConnect()
    const word = await Word.findOne({ slug: params.slug })

    if (!word) {
      return {
        title: "Word Not Found",
        description: "The word you are looking for does not exist.",
      }
    }

    return {
      title: `${word.balti} - OpenBalti Dictionary`,
      description: `${word.balti} (${word.english}) - Learn about this Balti word with examples, etymology, and cultural context.`,
      openGraph: {
        title: `${word.balti} - OpenBalti Dictionary`,
        description: `${word.balti} (${word.english})`,
      },
    }
  } catch (error) {
    return {
      title: "OpenBalti Dictionary",
      description: "Explore the Balti language dictionary",
    }
  }
}

async function getWord(slug: string) {
  try {
    await dbConnect()
    const word = await Word.findOne({ slug }).lean()
    return word
  } catch (error) {
    console.error(`Error fetching word with slug ${slug}:`, error)
    return null
  }
}

export default async function WordPage({ params }: { params: { slug: string } }) {
  const word = await getWord(params.slug)

  if (!word) {
    notFound()
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <Suspense
          fallback={
            <div className="space-y-4">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-10 w-full max-w-md" />
              <Skeleton className="h-64 w-full" />
            </div>
          }
        >
          <WordDetail word={word as any} />
        </Suspense>
      </div>
    </div>
  )
}
