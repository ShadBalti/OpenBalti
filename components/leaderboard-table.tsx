"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Loader2, Trophy, Medal } from "lucide-react"
import Link from "next/link"
import { BadgeDisplay } from "@/components/badge-display"
import type { IBadge } from "@/models/User"

interface LeaderboardUser {
  _id: string
  name: string
  image?: string
  role: string
  contributionStats: {
    wordsAdded: number
    wordsEdited: number
    wordsReviewed: number
    total: number
  }
  badges?: IBadge[]
}

interface LeaderboardTableProps {
  limit?: number
  showBadges?: boolean
}

/**
 * A component that fetches and displays a leaderboard of users based on their contribution scores.
 * It shows user rankings, avatars, names, roles, and total contributions.
 * It also includes visual indicators for top positions and can optionally display user badges.
 * The component handles its own loading and error states.
 *
 * @param {LeaderboardTableProps} props - The component props.
 * @param {number} [props.limit=50] - The maximum number of users to display on the leaderboard.
 * @param {boolean} [props.showBadges=true] - Whether to display a preview of users' earned badges.
 * @returns {JSX.Element} The rendered leaderboard table.
 */
export function LeaderboardTable({ limit = 50, showBadges = true }: LeaderboardTableProps) {
  const [users, setUsers] = useState<LeaderboardUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchLeaderboard()
  }, [limit])

  const fetchLeaderboard = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/leaderboard?limit=${limit}&sortBy=contributions`)

      if (!response.ok) {
        throw new Error("Failed to fetch leaderboard")
      }

      const result = await response.json()

      if (result.success) {
        setUsers(result.data)
      } else {
        setError(result.error || "Failed to load leaderboard")
      }
    } catch (err) {
      console.error("Error fetching leaderboard:", err)
      setError("Failed to load leaderboard. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
          <p className="text-muted-foreground">Loading leaderboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error</CardTitle>
          <CardDescription>{error}</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  if (users.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Contributors Yet</CardTitle>
          <CardDescription>Be the first to contribute to OpenBalti!</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  const getMedalIcon = (position: number) => {
    if (position === 1) return <Trophy className="h-5 w-5 text-yellow-500" />
    if (position === 2) return <Medal className="h-5 w-5 text-gray-400" />
    if (position === 3) return <Medal className="h-5 w-5 text-orange-600" />
    return <span className="text-muted-foreground font-semibold w-5 text-center">{position}</span>
  }

  return (
    <div className="space-y-2">
      {users.map((user, index) => (
        <Link key={user._id} href={`/users/${user._id}`}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8">{getMedalIcon(index + 1)}</div>

                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.image || ""} alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold truncate">{user.name}</p>
                    <Badge variant="outline" className="text-xs">
                      {user.role === "owner"
                        ? "Owner"
                        : user.role === "admin"
                          ? "Admin"
                          : user.role === "contributor"
                            ? "Contributor"
                            : "Member"}
                    </Badge>
                  </div>
                  {showBadges && user.badges && user.badges.length > 0 && (
                    <div className="flex gap-1 mt-2 flex-wrap">
                      {user.badges.slice(0, 3).map((badge) => (
                        <BadgeDisplay key={badge.id} badge={badge} size="sm" />
                      ))}
                      {user.badges.length > 3 && (
                        <div className="text-xs text-muted-foreground flex items-center">+{user.badges.length - 3}</div>
                      )}
                    </div>
                  )}
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold text-primary">{user.contributionStats.total}</p>
                  <p className="text-xs text-muted-foreground">contributions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
