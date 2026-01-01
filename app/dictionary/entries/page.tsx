import type { Metadata } from "next"
import { generateMetadata as generatePageMetadata } from "@/lib/metadata"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BreadcrumbListStructuredData } from "@/components/structured-data"

export const metadata: Metadata = generatePageMetadata(
  "Dictionary Entries | OpenBalti",
  "Browse complete Balti dictionary entries with detailed definitions, pronunciations, examples, and cultural context.",
  {
    keywords: [
      "Balti dictionary entries",
      "complete word list",
      "Balti definitions",
      "detailed translations",
      "Balti language reference",
    ],
  },
)

async function getAllWords() {
  try {
    await dbConnect()
    const words = await Word.find({}).sort({ baltiWord: 1 }).limit(500).lean()
    return words || []
  } catch (error) {
    console.error("Error fetching words:", error)
    return []
  }
}

export default async function DictionaryEntriesPage() {
  const words = await getAllWords()

  return (
    <>
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Complete <span className="text-blue-500">Dictionary Entries</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Browse all {words.length} documented Balti words with complete definitions, pronunciations, and cultural
              context
            </p>
          </div>

          <div className="grid gap-4 md:gap-6">
            {words.length > 0 ? (
              words.map((word: any) => (
                <Link key={word._id} href={`/dictionary/entries/${word._id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-500">{word.baltiWord}</CardTitle>
                      <CardDescription className="text-base">{word.englishTranslation}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {word.definition && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Definition</p>
                          <p className="text-sm">{word.definition}</p>
                        </div>
                      )}
                      {word.categories && word.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {word.categories.map((cat: string) => (
                            <span
                              key={cat}
                              className="inline-block bg-blue-500/20 text-blue-500 text-xs px-2 py-1 rounded"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-12">Loading dictionary entries...</p>
            )}
          </div>
        </div>
      </div>

      <BreadcrumbListStructuredData path={["Home", "Dictionary", "Entries"]} />
    </>
  )
}
