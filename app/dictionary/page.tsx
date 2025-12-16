import type { Metadata } from "next"
import { generateMetadata as generatePageMetadata } from "@/lib/metadata"
import WordsPage from "@/components/words-page"
import { Suspense } from "react"
import {
  DictionaryStructuredData,
  BreadcrumbListStructuredData,
  CourseStructuredData,
  WebsiteStructuredData,
} from "@/components/structured-data"
import { WordsPageSkeleton } from "@/components/skeletons/words-page-skeleton"
import { DictionaryQuickLinks } from "@/components/dictionary-quick-links"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

export const metadata: Metadata = generatePageMetadata(
  "Dictionary | OpenBalti",
  "Browse and search the OpenBalti dictionary. Explore Balti-English translations, word definitions, and contribute to language preservation.",
  {
    keywords: [
      "Balti dictionary",
      "Balti translator",
      "English to Balti translation",
      "Balti vocabulary",
      "Balti words",
      "search Balti language",
      "Balti word meanings",
    ],
  },
)

async function getInitialWords() {
  try {
    await dbConnect()
    const words = await Word.find({}).sort({ createdAt: -1 }).limit(50).lean()
    return words || []
  } catch (error) {
    console.error("Error fetching initial words:", error)
    return []
  }
}

async function getTotalWordsCount() {
  try {
    await dbConnect()
    const count = await Word.countDocuments({})
    return count || 0
  } catch (error) {
    console.error("Error counting words:", error)
    return 0
  }
}

async function getCategoriesWithCounts() {
  try {
    await dbConnect()
    const categories = await Word.aggregate([
      { $match: { categories: { $exists: true, $ne: [] } } },
      { $unwind: "$categories" },
      { $group: { _id: "$categories", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ])
    const result = Array.isArray(categories) ? categories : []
    return result.map((cat) => ({
      name: cat._id,
      count: cat.count,
      description: `Explore ${cat.count} words in the ${cat._id} category`,
    }))
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

async function getDifficultiesWithCounts() {
  try {
    await dbConnect()
    const difficulties = await Word.aggregate([
      { $match: { difficultyLevel: { $exists: true, $ne: "" } } },
      { $group: { _id: "$difficultyLevel", count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ])

    const result = Array.isArray(difficulties) ? difficulties : []

    const descriptions = {
      beginner: "Essential words for language beginners",
      intermediate: "Intermediate vocabulary for learners",
      advanced: "Advanced words for fluent speakers",
    }

    return result.map((diff) => ({
      name: diff._id,
      count: diff.count,
      description: descriptions[diff._id as keyof typeof descriptions] || "Words at this difficulty level",
    }))
  } catch (error) {
    console.error("Error fetching difficulties:", error)
    return []
  }
}

async function getDialectsWithCounts() {
  try {
    await dbConnect()
    const dialects = await Word.aggregate([
      { $match: { dialect: { $exists: true, $ne: "" } } },
      { $group: { _id: "$dialect", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ])
    const result = Array.isArray(dialects) ? dialects : []
    return result.map((dial) => ({
      name: dial._id,
      count: dial.count,
      description: `${dial.count} words`,
    }))
  } catch (error) {
    console.error("Error fetching dialects:", error)
    return []
  }
}

export default async function DictionaryPage() {
  const [initialWords, totalWords, categories, difficulties, dialects] = await Promise.all([
    getInitialWords(),
    getTotalWordsCount(),
    getCategoriesWithCounts(),
    getDifficultiesWithCounts(),
    getDialectsWithCounts(),
  ])

  return (
    <>
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              <span className="text-blue-500">OpenBalti </span>Dictionary
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Explore and contribute to the digital preservation of the Balti language
            </p>
          </div>

          <Suspense fallback={<div className="space-y-4" />}>
            <DictionaryQuickLinks
              categories={categories}
              difficulties={difficulties}
              dialects={dialects}
              totalWords={totalWords}
            />
          </Suspense>

          <Suspense fallback={<WordsPageSkeleton />}>
            <WordsPage initialWords={initialWords} />
          </Suspense>
        </div>
      </div>

      <DictionaryStructuredData url="/dictionary" wordCount={totalWords} />
      <BreadcrumbListStructuredData path={["Home", "Dictionary"]} />
      <CourseStructuredData />
      <WebsiteStructuredData />
    </>
  )
}
