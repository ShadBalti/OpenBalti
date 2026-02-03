"use client"

import { WordCard } from "@/components/word-card"
import { Card, CardContent } from "@/components/ui/card"
import { SearchX } from "lucide-react"
import type { IWord } from "@/models/Word"

interface WordsGridProps {
  words: IWord[]
  isLoading?: boolean
  onWordClick?: (word: IWord) => void
}

export function WordsGrid({ words, isLoading, onWordClick }: WordsGridProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="pt-6 space-y-4">
              <div className="h-6 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-1/2" />
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded w-full" />
                <div className="h-3 bg-muted rounded w-5/6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (!words || words.length === 0) {
    return (
      <Card className="border-dashed">
        <CardContent className="py-12 text-center">
          <SearchX className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
          <h3 className="text-lg font-semibold mb-2">No words found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria or browse by category</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {words.map((word) => (
        <div
          key={word._id}
          onClick={() => onWordClick?.(word)}
          className="cursor-pointer"
        >
          <WordCard word={word} />
        </div>
      ))}
    </div>
  )
}
