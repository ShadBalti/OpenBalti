"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ExternalLink } from "lucide-react"

interface WordListProps {
  query?: string
  sort?: "alphabetical" | "recent" | "popular"
  limit?: number
  filter?: string
}

export default function WordList({ query = "", sort = "alphabetical", limit = 10, filter = "" }: WordListProps) {
  const [words, setWords] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWords = async () => {
      try {
        setLoading(true)
        const queryParams = new URLSearchParams()

        if (query) queryParams.append("q", query)
        if (sort) queryParams.append("sort", sort)
        if (limit) queryParams.append("limit", limit.toString())
        if (filter) queryParams.append("filter", filter)

        const response = await fetch(`/api/words?${queryParams.toString()}`)

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

    fetchWords()
  }, [query, sort, limit, filter])

  if (loading) {
    return (
      <div className="space-y-4">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-4 w-32" />
              </CardHeader>
              <CardContent className="pb-2">
                <Skeleton className="h-4 w-full" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-9 w-24" />
              </CardFooter>
            </Card>
          ))}
      </div>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{error}</p>
        </CardContent>
      </Card>
    )
  }

  if (words.length === 0) {
    return (
      <Card>
        <CardContent className="py-8">
          <p className="text-center text-muted-foreground">
            {query ? `No words found matching "${query}"` : "No words found"}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {words.map((word) => (
        <Card key={word._id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{word.balti}</CardTitle>
                <CardDescription>{word.english}</CardDescription>
              </div>
              {word.categories && word.categories.length > 0 && (
                <div className="flex flex-wrap gap-1 justify-end">
                  {word.categories.slice(0, 2).map((category: string) => (
                    <Badge key={category} variant="outline">
                      {category}
                    </Badge>
                  ))}
                  {word.categories.length > 2 && <Badge variant="outline">+{word.categories.length - 2}</Badge>}
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            {word.phonetic && <p className="text-sm text-muted-foreground italic">/{word.phonetic}/</p>}
          </CardContent>
          <CardFooter>
            <Button asChild size="sm" variant="ghost">
              <Link href={`/words/${word._id}`}>
                <ExternalLink className="mr-2 h-4 w-4" />
                View Details
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
