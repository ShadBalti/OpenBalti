"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sparkles, Volume2, Loader2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CategoryBadge, DifficultyBadge, DialectBadge } from "@/components/category-status-badges"
import type { IWord } from "@/models/Word"

interface WordOfDayProps {
  compact?: boolean
}

/**
 * Word of the Day Component - Displays a featured word with pronunciations,
 * translations, and example usages. Automatically refreshes at midnight.
 */
export default function WordOfDay({ compact = false }: WordOfDayProps) {
  const [word, setWord] = useState<IWord | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [timeUntilNext, setTimeUntilNext] = useState<string>("")

  useEffect(() => {
    fetchWordOfDay()
  }, [])

  useEffect(() => {
    if (!word) return

    // Update countdown timer every minute
    const interval = setInterval(() => {
      updateCountdown()
    }, 60000)

    updateCountdown()
    return () => clearInterval(interval)
  }, [word])

  const updateCountdown = () => {
    const now = new Date()
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const nextDay = new Date(today)
    nextDay.setDate(nextDay.getDate() + 1)

    const diff = nextDay.getTime() - now.getTime()
    const hours = Math.floor(diff / 3600000)
    const minutes = Math.floor((diff % 3600000) / 60000)

    setTimeUntilNext(`${hours}h ${minutes}m`)
  }

  const fetchWordOfDay = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/words/word-of-day")
      const result = await response.json()

      if (result.success) {
        setWord(result.data)
      }
    } catch (error) {
      console.error("Error fetching word of the day:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSpeak = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "ur" // Balti uses Urdu script in some regions
      speechSynthesis.cancel()
      speechSynthesis.speak(utterance)
    }
  }

  if (isLoading) {
    return (
      <Card className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
        </div>
      </Card>
    )
  }

  if (!word) {
    return null
  }

  const wordLink = `/words/${word.balti}`

  if (compact) {
    return (
      <Card className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                Word of the Day
              </span>
            </div>
            <Link href={wordLink} className="hover:opacity-80 transition-opacity">
              <div className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {word.balti}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                {word.english}
              </div>
            </Link>
            <div className="flex flex-wrap gap-2">
              {word.categories && word.categories.length > 0 && (
                <CategoryBadge category={word.categories[0]} size="sm" />
              )}
              {word.difficultyLevel && <DifficultyBadge level={word.difficultyLevel as any} />}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSpeak(word.balti)}
              title="Pronounce word"
              className="h-8 w-8"
            >
              <Volume2 className="h-4 w-4" />
            </Button>
            <Link href={wordLink}>
              <Button variant="default" size="sm">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 border border-blue-200 dark:border-blue-800">
      <div className="p-8 md:p-10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Word of the Day
          </span>
          {timeUntilNext && (
            <span className="ml-auto text-xs text-slate-500 dark:text-slate-400">
              Next in {timeUntilNext}
            </span>
          )}
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
              {word.balti}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
              {word.english}
            </p>
          </div>

          {/* Phonetic */}
          {word.phonetic && (
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <Volume2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Phonetic</div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white">{word.phonetic}</div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSpeak(word.balti)}
                className="ml-auto"
              >
                <Volume2 className="h-4 w-4 mr-2" />
                Pronounce
              </Button>
            </div>
          )}

          {/* Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Categories */}
            {word.categories && word.categories.length > 0 && (
              <div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">Categories</div>
                <div className="flex flex-wrap gap-2">
                  {word.categories.map((cat) => (
                    <CategoryBadge key={cat} category={cat} />
                  ))}
                </div>
              </div>
            )}

            {/* Difficulty */}
            {word.difficultyLevel && (
              <div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">Difficulty</div>
                <DifficultyBadge level={word.difficultyLevel as any} />
              </div>
            )}

            {/* Dialect */}
            {word.dialect && (
              <div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">Dialect</div>
                <DialectBadge dialect={word.dialect} />
              </div>
            )}
          </div>

          {/* Usage Notes */}
          {word.usageNotes && (
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">Usage Notes</div>
              <p className="text-slate-700 dark:text-slate-300">{word.usageNotes}</p>
            </div>
          )}

          {/* Examples */}
          {word.examples && word.examples.length > 0 && (
            <div className="space-y-3">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Examples</div>
              {word.examples.slice(0, 2).map((example, idx) => (
                <div key={idx} className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                    {example.balti}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {example.english}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Cultural Notes */}
          {word.culturalNotes && (
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase mb-2">Cultural Context</div>
              <p className="text-slate-700 dark:text-slate-300 text-sm">{word.culturalNotes}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => handleSpeak(word.balti)}
            >
              <Volume2 className="h-4 w-4 mr-2" />
              Listen
            </Button>
            <Link href={wordLink}>
              <Button>View Full Entry</Button>
            </Link>
          </div>
          {word.feedbackStats && (
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
              <div>✓ {word.feedbackStats.useful} found useful</div>
              <div>✓ {word.feedbackStats.trusted} trusted</div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
