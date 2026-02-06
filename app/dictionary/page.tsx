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

      <DictionaryStructuredData url="/dictionary" wordCount={totalWords} />
      <BreadcrumbListStructuredData path={["Home", "Dictionary"]} />
      <CourseStructuredData />
      <WebsiteStructuredData />
    </>
  )
}
