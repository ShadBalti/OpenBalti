"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import { format, subDays, addDays } from "date-fns"

interface PreviousWordsOfTheDayProps {
  className?: string
  initialDays?: number
}

export function PreviousWordsOfTheDay({ className, initialDays = 7 }: PreviousWordsOfTheDayProps) {
  const [words, setWords] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [days] = useState(initialDays)

  const fetchWords = async (date: Date) => {
    try {
      setLoading(true)
      const formattedDate = format(date, "yyyy-MM-dd")
      const response = await fetch(`/api/words/word-of-the-day/history?days=${days}&startDate=${formattedDate}`)

      if (!response.ok) {
        throw new Error("Failed to fetch words")
      }

      const data = await response.json()
      setWords(data.words || [])
      setError(null)
    } catch (err) {
      console.error("Error fetching words:", err)
      setError("Failed to load words. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWords(startDate)
  }, [startDate, days])

  const handlePreviousWeek = () => {
    setStartDate((prevDate) => subDays(prevDate, days))
  }

  const handleNextWeek = () => {
    const newDate = addDays(startDate, days)
    const today = new Date()
    // Don't allow going beyond today
    if (newDate <= today) {
      setStartDate(newDate)
    }
  }

  const isNextDisabled = () => {
    const nextDate = addDays(startDate, days)
    const today = new Date()
    return nextDate > today
  }

  if (loading) {
    return (
      <div className={className}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Previous Words of the Day</h2>
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-10" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-5 w-24" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-12 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={className}>
        <Card>
          <CardHeader>
            <CardTitle>Previous Words of the Day</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{error}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => fetchWords(startDate)}>Try Again</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Previous Words of the Day</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={handlePreviousWeek} title="Previous week">
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Previous week</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextWeek}
            disabled={isNextDisabled()}
            title={isNextDisabled() ? "No more recent words" : "Next week"}
          >
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Next week</span>
          </Button>
        </div>
      </div>

      {words.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">No words found for this period.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {words.map((item) => (
            <Card key={item.date} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.word.balti}</CardTitle>
                  <Badge variant="outline">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {format(new Date(item.date), "MMM d, yyyy")}
                  </Badge>
                </div>
                <CardDescription>{item.word.english}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                {item.word.phonetic && (
                  <p className="text-sm text-muted-foreground italic mb-2">/{item.word.phonetic}/</p>
                )}

                {item.word.categories && item.word.categories.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.word.categories.slice(0, 3).map((category: string) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                    {item.word.categories.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{item.word.categories.length - 3}
                      </Badge>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild size="sm" variant="ghost" className="w-full">
                  <Link href={`/words/${item.word._id}`}>
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default PreviousWordsOfTheDay
