"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Loader2, BookOpen, Users, ThumbsUp, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

interface CommunityStats {
  totalWords: number
  totalUsers: number
  wordsAddedToday: number
  activeUsersToday: number
}

export default function CommunityHeroStats() {
  const [stats, setStats] = useState<CommunityStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/stats/community")
      const result = await response.json()
      if (result.success) {
        setStats(result.data)
      }
    } catch (error) {
      console.error("Error fetching stats:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-40 bg-muted rounded-lg animate-pulse" />
        ))}
      </div>
    )
  }

  const statItems = [
    {
      icon: BookOpen,
      label: "Total Words",
      value: stats?.totalWords || 0,
      bgGradient: "from-blue-500/10 to-blue-600/5",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Users,
      label: "Contributors",
      value: stats?.totalUsers || 0,
      bgGradient: "from-green-500/10 to-green-600/5",
      borderColor: "border-green-200 dark:border-green-800",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: Zap,
      label: "Added Today",
      value: stats?.wordsAddedToday || 0,
      bgGradient: "from-orange-500/10 to-orange-600/5",
      borderColor: "border-orange-200 dark:border-orange-800",
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: ThumbsUp,
      label: "Active Today",
      value: stats?.activeUsersToday || 0,
      bgGradient: "from-purple-500/10 to-purple-600/5",
      borderColor: "border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {statItems.map((item, idx) => {
          const Icon = item.icon
          return (
            <Card
              key={idx}
              className={`bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">{item.label}</p>
                    <p className="text-3xl md:text-4xl font-bold tracking-tight">
                      {item.value.toLocaleString()}
                    </p>
                  </div>
                  <div className={`p-2 rounded-lg ${item.iconBg}`}>
                    <Icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                  <TrendingUp className="h-3 w-3" />
                  <span>Growing daily</span>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Quick CTA Below Stats */}
      <div className="bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/20 rounded-lg p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="font-semibold text-foreground">Be Part of Something Meaningful</p>
          <p className="text-sm text-muted-foreground max-w-md">
            Join thousands of contributors preserving the Balti language and culture
          </p>
        </div>
        <Link
          href="/contribute"
          className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all whitespace-nowrap"
        >
          Contribute Now
        </Link>
      </div>
    </div>
  )
}
