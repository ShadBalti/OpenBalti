"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Share2Icon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface WordOfTheDayProps {
  className?: string
}

export function WordOfTheDay({ className }: WordOfTheDayProps) {
  const [word, setWord] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWordOfTheDay = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/words/word-of-the-day")

        if (!response.ok) {
          throw new Error("Failed to fetch word of the day")
        }

        const data = await response.json()
        setWord(data.word)
        setError(null)
      } catch (err) {
        console.error("Error fetching word of the day:", err)
        setError("Failed to load word of the day. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchWordOfTheDay()
  }, [])

  const handleShare = async () => {
    if (!word) return

    const shareData = {
      title: `Word of the Day: ${word.balti}`,
      text: `Today's Balti word: ${word.balti} - ${word.english}`,
      url: `${window.location.origin}/words/${word._id}`,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`)
        alert("Link copied to clipboard!")
      }
    } catch (err) {
      console.error("Error sharing:", err)
    }
  }

  if (loading) {
    return (
      <Card className={cn("overflow-hidden", className)}>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between">
            <Skeleton className="h-7 w-40" />
            <Skeleton className="h-6 w-32" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-24" />
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-24" />
        </CardFooter>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className={cn("overflow-hidden", className)}>
        <CardHeader>
          <CardTitle>Word of the Day</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{error}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </CardFooter>
      </Card>
    )
  }

  if (!word) {
    return null
  }

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            Word of the Day
            <Badge variant="outline" className="ml-2">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {new Date().toLocaleDateString()}
            </Badge>
          </CardTitle>
        </div>
        <CardDescription>Discover a new Balti word every day</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold">{word.balti}</h3>
            <p className="text-lg text-muted-foreground">{word.english}</p>
            {word.phonetic && <p className="text-sm text-muted-foreground italic">/{word.phonetic}/</p>}
          </div>

          {word.categories && word.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {word.categories.map((category: string) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
          )}

          {word.example && (
            <div className="rounded-md bg-muted p-3">
              <p className="italic text-sm">&ldquo;{word.example}&rdquo;</p>
            </div>
          )}

          {word.createdBy && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Avatar className="h-6 w-6">
                <AvatarImage src={word.createdBy.image || ""} alt={word.createdBy.name || "User"} />
                <AvatarFallback>{(word.createdBy.name || "U").charAt(0)}</AvatarFallback>
              </Avatar>
              <span>
                Added by {word.createdBy.name || "Anonymous"}
                {word.createdAt && <> · {formatDistanceToNow(new Date(word.createdAt), { addSuffix: true })}</>}
              </span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-4">
        <Button variant="outline" size="sm" onClick={handleShare}>
          <Share2Icon className="mr-2 h-4 w-4" />
          Share
        </Button>
        <Button asChild size="sm">
          <Link href={`/words/${word._id}`}>
            <ExternalLinkIcon className="mr-2 h-4 w-4" />
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default WordOfTheDay
