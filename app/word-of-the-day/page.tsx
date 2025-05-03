import type { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"
import PreviousWordsOfTheDay from "@/components/previous-words-of-the-day"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeftIcon } from "lucide-react"

export const metadata: Metadata = generateMetadata(
  "Word of the Day Archive",
  "Browse through previous Words of the Day from the OpenBalti Dictionary",
)

export default function WordOfTheDayArchivePage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/">
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tighter">Word of the Day Archive</h1>
        </div>

        <p className="text-muted-foreground">
          Browse through our collection of previous Words of the Day. Each day we feature a different Balti word to help
          you expand your vocabulary.
        </p>

        <PreviousWordsOfTheDay initialDays={14} />
      </div>
    </div>
  )
}
