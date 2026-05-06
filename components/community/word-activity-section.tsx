"use client"

import { useState, useEffect } from "react"
import { formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Loader2, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"

interface WordActivity {
  _id: string
  balti: string
  english: string
  createdAt: string
  updatedAt: string
  categories?: string[]
  feedbackStats?: {
    useful: number
    trusted: number
    needsReview: number
  }
  contributors: Array<{
    userId: string
    name: string
    image?: string
    role?: string
    action: "create" | "update" | "review"
    timestamp: string
  }>
}

interface WordActivitySectionProps {
  limit?: number
  timeframe?: "today" | "week" | "month"
}

export default function WordActivitySection({ limit = 15, timeframe = "week" }: WordActivitySectionProps) {
  const [words, setWords] = useState<WordActivity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchWordActivity()
  }, [timeframe])

  const fetchWordActivity = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `/api/community/word-activity?timeframe=${timeframe}&limit=${limit}`
      )
      const result = await response.json()
      if (result.success) {
        setWords(result.data)
      }
    } catch (error) {
      console.error("Error fetching word activity:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Dictionary Activity</CardTitle>
            <CardDescription>New and updated words in the dictionary</CardDescription>
          </div>
          <BookOpen className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : words.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">No recent word activity</p>
        ) : (
          <div className="space-y-4">
            {words.map((word) => (
              <Link key={word._id} href={`/words/${word._id}`} className="block">
                <div className="p-4 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <h4 className="font-semibold text-sm">{word.balti}</h4>
                        {word.categories && word.categories.length > 0 && (
                          <Badge variant="secondary" className="text-xs">
                            {word.categories[0]}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{word.english}</p>

                      {/* Contributors */}
                      {word.contributors && word.contributors.length > 0 && (
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs font-medium text-muted-foreground">Contributors:</span>
                          <div className="flex gap-1">
                            {word.contributors.slice(0, 3).map((contributor, idx) => (
                              <div key={idx} className="flex items-center gap-1">
                                <Avatar className="h-5 w-5">
                                  <AvatarImage src={contributor.image || "/placeholder.svg"} />
                                  <AvatarFallback className="text-xs">
                                    {contributor.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-xs">{contributor.name}</span>
                              </div>
                            ))}
                            {word.contributors.length > 3 && (
                              <span className="text-xs text-muted-foreground">
                                +{word.contributors.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex-shrink-0 text-right">
                      {word.feedbackStats && (
                        <div className="text-xs space-y-1">
                          <div className="flex items-center gap-1 justify-end text-green-600">
                            <TrendingUp className="h-3 w-3" />
                            <span>{word.feedbackStats.useful} useful</span>
                          </div>
                          {word.feedbackStats.needsReview > 0 && (
                            <div className="text-orange-600">
                              {word.feedbackStats.needsReview} need review
                            </div>
                          )}
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">
                        {formatDistanceToNow(new Date(word.updatedAt || word.createdAt), {
                          addSuffix: true,
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
