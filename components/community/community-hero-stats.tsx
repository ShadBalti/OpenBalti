"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Loader2, BookOpen, Users, ThumbsUp, Zap } from "lucide-react"

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
          <div key={i} className="h-32 bg-muted rounded-lg animate-pulse" />
        ))}
      </div>
    )
  }

  const statItems = [
    {
      icon: BookOpen,
      label: "Total Words",
      value: stats?.totalWords || 0,
      color: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      label: "Contributors",
      value: stats?.totalUsers || 0,
      color: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600",
    },
    {
      icon: Zap,
      label: "Added Today",
      value: stats?.wordsAddedToday || 0,
      color: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600",
    },
    {
      icon: ThumbsUp,
      label: "Active Today",
      value: stats?.activeUsersToday || 0,
      color: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {statItems.map((item, idx) => {
        const Icon = item.icon
        return (
          <Card key={idx} className={`p-6 ${item.color}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-3xl font-bold">{item.value.toLocaleString()}</p>
              </div>
              <Icon className={`h-6 w-6 ${item.iconColor}`} />
            </div>
          </Card>
        )
      })}
    </div>
  )
}
