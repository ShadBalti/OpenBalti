"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Trophy, Medal } from "lucide-react"
import Link from "next/link"

interface User {
  _id: string
  name: string
  image?: string
  role?: string
  bio?: string
  badges?: string[]
  contributionStats?: {
    wordsAdded: number
    wordsEdited: number
    wordsReviewed: number
    total: number
  }
  recentActivityCount?: number
  createdAt: string
}

interface LeaderboardsProps {
  limit?: number
}

const timeframes = [
  { value: "today", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" },
  { value: "all", label: "All Time" },
]

export default function CommunityLeaderboards({ limit = 10 }: LeaderboardsProps) {
  const [activeTab, setActiveTab] = useState("all")
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLeaderboard()
  }, [activeTab])

  const fetchLeaderboard = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `/api/leaderboard?timeframe=${activeTab}&limit=${limit}`
      )
      const result = await response.json()
      if (result.success) {
        setUsers(result.data)
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error)
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

  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-orange-600" />
      default:
        return <span className="text-sm font-bold text-muted-foreground w-5 text-right">#{rank}</span>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Community Leaderboards</CardTitle>
        <CardDescription>Top contributors by timeframe</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            {timeframes.map((tf) => (
              <TabsTrigger key={tf.value} value={tf.value} className="text-xs sm:text-sm">
                {tf.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {timeframes.map((timeframe) => (
            <TabsContent key={timeframe.value} value={timeframe.value}>
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              ) : users.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">No contributors in this timeframe</p>
              ) : (
                <div className="space-y-3">
                  {users.map((user, idx) => (
                    <Link key={user._id} href={`/users/${user._id}`}>
                      <div className="p-4 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="flex items-center gap-3 flex-shrink-0">
                            {getMedalIcon(idx + 1)}
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name} />
                              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                            </Avatar>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-semibold text-sm">{user.name}</h4>
                              {user.role && (
                                <Badge variant="secondary" className="text-xs">
                                  {user.role}
                                </Badge>
                              )}
                            </div>
                            {user.bio && (
                              <p className="text-xs text-muted-foreground truncate mt-1">
                                {user.bio}
                              </p>
                            )}

                            {/* Badges */}
                            {user.badges && user.badges.length > 0 && (
                              <div className="flex gap-1 mt-2 flex-wrap">
                                {user.badges.slice(0, 3).map((badge) => (
                                  <Badge key={badge} variant="outline" className="text-xs">
                                    {badge}
                                  </Badge>
                                ))}
                                {user.badges.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{user.badges.length - 3}
                                  </Badge>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Stats */}
                          <div className="text-right flex-shrink-0">
                            {activeTab === "all" && user.contributionStats ? (
                              <>
                                <p className="text-sm font-bold">
                                  {user.contributionStats.total}
                                </p>
                                <p className="text-xs text-muted-foreground">contributions</p>
                              </>
                            ) : activeTab !== "all" && user.recentActivityCount !== undefined ? (
                              <>
                                <p className="text-sm font-bold">{user.recentActivityCount}</p>
                                <p className="text-xs text-muted-foreground">this period</p>
                              </>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
