import type { Metadata } from "next"
import { notFound } from "next/navigation"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import WordHistory from "@/models/WordHistory"
import User from "@/models/User"
import { generateMetadata as generatePageMetadata } from "@/lib/metadata"
import WordDetailView from "@/components/word-detail-view"
import { WordStructuredData, BreadcrumbListStructuredData } from "@/components/structured-data"
import { Suspense } from "react"

interface WordPageProps {
  params: { word: string }
}

async function getWordByEnglish(englishWord: string) {
  try {
    await dbConnect()
    // Convert hyphens back to spaces for searching
    const searchWord = englishWord.replace(/-/g, " ")
    const word = await Word.findOne({
      english: { $regex: new RegExp(`^${searchWord.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}$`, "i") },
    }).lean()

    if (!word) return null

    // Populate creator and last editor info
    const creator = await User.findById(word.createdBy).select("name image bio isVerified isFounder").lean()
    const editor = word.updatedBy
      ? await User.findById(word.updatedBy).select("name image bio isVerified isFounder").lean()
      : null

    return {
      ...word,
      createdBy: creator,
      updatedBy: editor,
    }
  } catch (error) {
    console.error("Error fetching word:", error)
    return null
  }
}

async function getWordHistory(wordId: string) {
  try {
    await dbConnect()
    const history = await WordHistory.find({ wordId }).sort({ createdAt: -1 }).lean()

    // Enrich history with user info
    const enrichedHistory = await Promise.all(
      history.map(async (entry) => {
        const user = await User.findById(entry.userId).select("name image bio isVerified isFounder").lean()
        return {
          ...entry,
          user,
        }
      }),
    )

    return enrichedHistory
  } catch (error) {
    console.error("Error fetching word history:", error)
    return []
  }
}

export async function generateMetadata({ params }: WordPageProps): Promise<Metadata> {
  const word = await getWordByEnglish(params.word)

  if (!word) {
    return generatePageMetadata(
      "Word Not Found | OpenBalti",
      "The word you're looking for doesn't exist in our dictionary.",
    )
  }

  const description = `${word.english} - ${word.balti}. Learn the Balti translation, pronunciation, usage examples, cultural significance, and more. Contributed by ${
    (word.createdBy as any)?.name || "community members"
  }.`

  return generatePageMetadata(`${word.english} (${word.balti}) | OpenBalti Dictionary`, description, {
    keywords: [
      word.english,
      word.balti,
      "Balti translation",
      "Balti word",
      word.dialect ? `${word.dialect} dialect` : "Balti dialect",
      ...(word.categories || []),
      word.difficultyLevel,
    ],
    openGraph: {
      type: "article",
      title: `${word.english} - ${word.balti}`,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${word.english} - Balti Dictionary`,
        },
      ],
    },
  })
}

export default async function WordPage({ params }: WordPageProps) {
  const word = await getWordByEnglish(params.word)

  if (!word) {
    notFound()
  }

  const history = await getWordHistory(word._id?.toString() || "")

  return (
    <>
      <main className="container py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <Suspense fallback={<div className="animate-pulse h-96 bg-muted rounded-lg" />}>
            <WordDetailView word={word} history={history} />
          </Suspense>
        </div>
      </main>

      <WordStructuredData word={word} />
      <BreadcrumbListStructuredData path={["Home", "Dictionary", word.english]} />
    </>
  )
}

export async function generateStaticParams() {
  try {
    await dbConnect()
    const words = await Word.find({}).select("english").lean().limit(100)
    return words.map((word) => ({
      word: word.english.toLowerCase().replace(/\s+/g, "-"),
    }))
  } catch {
    return []
  }
}
