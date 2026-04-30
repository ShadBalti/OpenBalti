import { notFound } from "next/navigation"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import WordDetail from "@/components/word-detail"
import type { Metadata } from "next"

interface WordPageProps {
  params: { id: string }
}

async function getWord(id: string) {
  try {
    await dbConnect()
    const word = await Word.findById(id)
    
    if (!word) {
      return null
    }
    
    return JSON.parse(JSON.stringify(word))
  } catch (error) {
    console.error("Error fetching word:", error)
    return null
  }
}

export async function generateMetadata({
  params,
}: WordPageProps): Promise<Metadata> {
  const word = await getWord(params.id)
  
  if (!word) {
    return {
      title: "Word Not Found | OpenBalti Dictionary",
      description: "The word you're looking for is not in the OpenBalti dictionary.",
    }
  }

  const title = `${word.balti} (${word.english}) | OpenBalti Dictionary`
  const description = `${word.english} - ${word.balti}. ${word.usageNotes || "Learn Balti words with pronunciations and examples."}`

  return {
    title,
    description,
    keywords: [word.english, word.balti, "Balti translation", "Balti dictionary"],
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function WordPage({ params }: WordPageProps) {
  const word = await getWord(params.id)

  if (!word) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Navigation */}
          <Link href="/dictionary">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dictionary
            </Button>
          </Link>

          {/* Word Detail */}
          <WordDetail word={word} showFullDetails={true} />
        </div>
      </div>
    </div>
  )
}
