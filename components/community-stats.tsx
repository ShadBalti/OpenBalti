"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThumbsUp, Shield, AlertTriangle, Users, BookOpen, MessageSquare, Loader2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"

interface CommunityStatsProps {
  className?: string
}

interface CommunityStats {
  totalWords: number
  totalUsers: number
  totalFeedback: number
  totalComments: number
  usefulWords: number
  trustedWords: number
  reviewWords: number
  topContributors: Array<{
    _id: string
    name: string
    image?: string
    wordCount: number
  }>
  mostActiveUsers: Array<{
    _id: string
    name: string
    image?: string
    activityCount: number
  }>
}

export default function CommunityStats({ className }: CommunityStatsProps) {
  const { toast } = useToast()
  const [stats, setStats] = useState<CommunityStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/stats/community")
      const result = await response.json()

      if (result.success) {
        setStats(result.data)
      } else {
        throw new Error(result.error || "Failed to fetch community statistics")
      }
    } catch (error) {
      console.error("Error fetching community stats:", error)
      toast({
        title: "Error",
        description: "Failed to load community statistics",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
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

  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Community Statistics</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    )
  }

  if (!stats) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Community Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center">Failed to load community statistics</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Community Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="flex flex-col items-center p-3 bg-muted rounded-md">
            <BookOpen className="h-6 w-6 mb-2 text-primary" />
            <span className="text-2xl font-bold">{stats.totalWords}</span>
            <span className="text-sm text-muted-foreground">Words</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-muted rounded-md">
            <Users className="h-6 w-6 mb-2 text-primary" />
            <span className="text-2xl font-bold">{stats.totalUsers}</span>
            <span className="text-sm text-muted-foreground">Contributors</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-muted rounded-md">
            <ThumbsUp className="h-6 w-6 mb-2 text-primary" />
            <span className="text-2xl font-bold">{stats.totalFeedback}</span>
            <span className="text-sm text-muted-foreground">Feedback</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-muted rounded-md">
            <MessageSquare className="h-6 w-6 mb-2 text-primary" />
            <span className="text-2xl font-bold">{stats.totalComments}</span>
            <span className="text-sm text-muted-foreground">Comments</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
            <ThumbsUp className="h-5 w-5 mr-3 text-green-600 dark:text-green-400" />
            <div>
              <span className="text-lg font-medium">{stats.usefulWords}</span>
              <p className="text-sm text-muted-foreground">Useful Words</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
            <Shield className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
            <div>
              <span className="text-lg font-medium">{stats.trustedWords}</span>
              <p className="text-sm text-muted-foreground">Trusted Words</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-amber-50 dark:bg-amber-900/20 rounded-md">
            <AlertTriangle className="h-5 w-5 mr-3 text-amber-600 dark:text-amber-400" />
            <div>
              <span className="text-lg font-medium">{stats.reviewWords}</span>
              <p className="text-sm text-muted-foreground">Words Needing Review</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Top Contributors</h3>
            <div className="space-y-3">
              {stats.topContributors.map((contributor) => (
                <div key={contributor._id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={contributor.image || "/placeholder.svg"} alt={contributor.name} />
                      <AvatarFallback>{getInitials(contributor.name)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{contributor.name}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm">{contributor.wordCount}</span>
                  </div>
                </div>
              ))}
              {stats.topContributors.length === 0 && (
                <p className="text-sm text-muted-foreground">No contributors yet</p>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Most Active Users</h3>
            <div className="space-y-3">
              {stats.mostActiveUsers.map((user) => (
                <div key={user._id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{user.name}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm">{user.activityCount}</span>
                  </div>
                </div>
              ))}
              {stats.mostActiveUsers.length === 0 && (
                <p className="text-sm text-muted-foreground">No active users yet</p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
