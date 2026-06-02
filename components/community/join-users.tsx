"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Loader2, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

interface User {
  _id: string
  name: string
  image?: string
  role?: string
  contributionStats?: {
    total: number
  }
}

interface JoinUsersProps {
  limit?: number
}

export default function JoinUsers({ limit = 12 }: JoinUsersProps) {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [totalUsers, setTotalUsers] = useState(0)

  useEffect(() => {
    fetchActiveUsers()
  }, [])

  const fetchActiveUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/users?limit=${limit}&sortBy=contributions`)
      const result = await response.json()
      if (result.success) {
        setUsers(result.data.users || [])
        setTotalUsers(result.data.total || result.data.users?.length || 0)
      }
    } catch (error) {
      console.error("[v0] Failed to fetch active users:", error)
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
      .slice(0, 2)
  }

  if (loading) {
    return (
      <Card className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
            <p className="text-sm text-muted-foreground">Loading community members...</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-8 border border-border">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Join Our Community</h2>
          </div>
          <p className="text-muted-foreground">
            Meet {totalUsers.toLocaleString()} contributors making a difference in preserving the Balti language
          </p>
        </div>

        {/* Active Members Grid */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {users.map((user) => (
              <Link
                key={user._id}
                href={`/profile/${user._id}`}
                className="group"
              >
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div className="relative">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                      <AvatarImage src={user.image} alt={user.name} />
                      <AvatarFallback className="bg-primary/10">
                        {getInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                    {user.role === "admin" && (
                      <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1">
                        <span className="text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">
                      {user.name}
                    </p>
                    {user.contributionStats?.total && (
                      <p className="text-xs text-muted-foreground">
                        {user.contributionStats.total} contributions
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="font-semibold text-foreground">Join {totalUsers.toLocaleString()} contributors</p>
            <p className="text-sm text-muted-foreground">
              Help preserve and grow the Balti language community
            </p>
          </div>
          <Link
            href="/contribute"
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all whitespace-nowrap"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/community/members"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
          >
            View all community members
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Card>
  )
}
