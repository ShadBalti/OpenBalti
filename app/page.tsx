import WordsPage from "@/components/words-page"
import { Suspense } from "react"
import { DictionaryStructuredData } from "@/components/structured-data"
import { WordsPageSkeleton } from "@/components/skeletons/words-page-skeleton"
import { HomePageContent } from "@/components/HomePageContent"
export default function Home() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
         <h1 className="text-4xl sm:text-6xl font-bold mb-4"><span className="text-blue-500">OpenBalti </span>Dictionary</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Explore and contribute to the digital preservation of the Balti language
          </p>
        </div>
        <Suspense fallback={<WordsPageSkeleton />}>
          <WordsPage />
        </Suspense>
        <HomePageContent />
      </div>
      <DictionaryStructuredData url="/" />
    </div>
  )
}