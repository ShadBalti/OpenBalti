import type { Metadata } from "next"
import { generateMetadata as generatePageMetadata } from "@/lib/metadata"
import { notFound } from "next/navigation"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DefinedTermStructuredData, BreadcrumbListStructuredData } from "@/components/structured-data"
import { ArrowLeft } from "lucide-react"

interface PageProps {
  params: {
    id: string
  }
}

async function getWord(id: string) {
  try {
    await dbConnect()
    const word = await Word.findById(id).lean()
    return word
  } catch (error) {
    console.error("Error fetching word:", error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const word = await getWord(params.id)

  if (!word) {
    return {
      title: "Word Not Found",
    }
  }

  return generatePageMetadata(
    `${word.baltiWord} | OpenBalti Dictionary`,
    `Learn the Balti word "${word.baltiWord}" - English translation: ${word.englishTranslation}. Includes pronunciation, definition, and examples.`,
    {
      keywords: [word.baltiWord, word.englishTranslation, "Balti language", "definition", "translation"],
      overrides: {
        alternates: {
          canonical: `https://openbalti.com/dictionary/entries/${word._id}`,
        },
      },
    },
  )
}

export default async function WordDetailPage({ params }: PageProps) {
  const word = await getWord(params.id)

  if (!word) {
    notFound()
  }

  return (
    <>
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <Link href="/dictionary/entries">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Entries
            </Button>
          </Link>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Balti Word</p>
            <h1 className="text-5xl font-bold text-blue-500">{word.baltiWord}</h1>
            <p className="text-2xl text-muted-foreground">{word.englishTranslation}</p>
          </div>

          {word.pronunciation && (
            <Card>
              <CardHeader>
                <CardTitle>Pronunciation</CardTitle>
              </CardHeader>
              <CardContent className="text-lg font-mono">{word.pronunciation}</CardContent>
            </Card>
          )}

          {word.definition && (
            <Card>
              <CardHeader>
                <CardTitle>Definition</CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-relaxed">{word.definition}</CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {word.categories && word.categories.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {word.categories.map((cat: string) => (
                    <span
                      key={cat}
                      className="inline-block bg-blue-500/20 text-blue-500 px-3 py-1 rounded-full text-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </CardContent>
              </Card>
            )}

            {word.difficultyLevel && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Difficulty</CardTitle>
                </CardHeader>
                <CardContent className="capitalize text-lg">{word.difficultyLevel}</CardContent>
              </Card>
            )}
          </div>

          {word.exampleSentences && word.exampleSentences.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {word.exampleSentences.map((example: any, idx: number) => (
                  <div key={idx} className="border-b pb-4 last:border-b-0">
                    <p className="font-medium text-blue-500 mb-2">{example.balti}</p>
                    <p className="text-muted-foreground">{example.english}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {word.culturalContext && (
            <Card>
              <CardHeader>
                <CardTitle>Cultural Context</CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-relaxed">{word.culturalContext}</CardContent>
            </Card>
          )}
        </div>
      </div>

      <DefinedTermStructuredData
        word={word.baltiWord}
        definition={word.definition || word.englishTranslation}
        url={`/dictionary/entries/${word._id}`}
      />
      <BreadcrumbListStructuredData path={["Home", "Dictionary", "Entries", word.baltiWord]} />
    </>
  )
}
