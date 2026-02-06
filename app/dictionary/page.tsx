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

export default async function DictionaryPage() {
  const initialWords = await getInitialWords()
  
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

          
          <Suspense fallback={<WordsPageSkeleton />}>
            <WordsPage initialWords={initialWords} />
          </Suspense>
        </div>
      </div>

      <DictionaryStructuredData url="/dictionary" />
      <BreadcrumbListStructuredData path={["Home", "Dictionary"]} />
      <CourseStructuredData />
      <WebsiteStructuredData />
    </>
  )
}