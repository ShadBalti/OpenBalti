"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, TrendingUp, Flame } from "lucide-react"
import Link from "next/link"

interface TrendingWord {
  _id: string
  balti: string
  english: string
  categories?: string[]
  feedbackStats?: {
    useful: number
    trusted: number
  }
  trendScore: number
  createdAt: string
}

interface TopContributor {
  _id: string
  contributionCount: number
  userInfo?: {
    name: string
    image?: string
    role?: string
  }
}

interface TrendingData {
  trendingWords: TrendingWord[]
  topContributors: TopContributor[]
  mostSearched: TrendingWord[]
  timeframe: string
}

interface TrendingContentProps {
  limit?: number
}

export default function TrendingContent({ limit = 8 }: TrendingContentProps) {
  const [data, setData] = useState<TrendingData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeframe, setTimeframe] = useState("7d")

  useEffect(() => {
    fetchTrendingData()
  }, [timeframe])

  const fetchTrendingData = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `/api/community/trending?timeframe=${timeframe}&limit=${limit}`
      )
      const result = await response.json()
      if (result.success) {
        setData(result.data)
      }
    } catch (error) {
      console.error("[v0] Trending data fetch error:", error)
    } finally {
      setLoading(false)
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  const timeframeLabel = {
    "7d": "Last 7 days",
    "30d": "Last 30 days",
    all: "All time",
  }[timeframe] || "Last 7 days"

  return (
    <div className="space-y-6">
      {/* Trending Words */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              <div>
                <CardTitle>Trending Words</CardTitle>
                <CardDescription>{timeframeLabel}</CardDescription>
              </div>
            </div>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="all">All time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          ) : data?.trendingWords && data.trendingWords.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.trendingWords.map((word, idx) => (
                <Link key={word._id} href={`/words/${word.balti}`}>
                  <div className="p-4 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-primary">#{idx + 1}</span>
                      {word.trendScore > 0 && (
                        <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                          +{Math.round(word.trendScore)} trend
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground">{word.balti}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{word.english}</p>
                    <div className="flex flex-wrap gap-2">
                      {word.categories?.slice(0, 2).map((cat) => (
                        <Badge key={cat} variant="secondary" className="text-xs">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-8">No trending words yet</p>
          )}
        </CardContent>
      </Card>

      {/* Top Contributors */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            <div>
              <CardTitle>Top Contributors</CardTitle>
              <CardDescription>Most active this week</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          ) : data?.topContributors && data.topContributors.length > 0 ? (
            <div className="space-y-3">
              {data.topContributors.map((contributor, idx) => (
                <div key={contributor._id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-muted-foreground w-6">#{idx + 1}</span>
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={contributor.userInfo?.image || "/placeholder.svg"}
                        alt={contributor.userInfo?.name || "User"}
                      />
                      <AvatarFallback>
                        {getInitials(contributor.userInfo?.name || "U")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">
                        {contributor.userInfo?.name || "Unknown"}
                      </p>
                      {contributor.userInfo?.role && (
                        <p className="text-xs text-muted-foreground">{contributor.userInfo.role}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{contributor.contributionCount}</p>
                    <p className="text-xs text-muted-foreground">contributions</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-8">No contributors yet</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
