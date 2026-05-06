"use client"

import { useState, useEffect } from "react"
import { format, formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, BookOpen, MessageSquare, Check, PenTool } from "lucide-react"
import Link from "next/link"

interface UserActivity {
  _id: string
  action: "create" | "update" | "delete" | "review"
  wordBalti?: string
  wordEnglish?: string
  details?: string
  createdAt: string
}

interface UserActivitySectionProps {
  userId: string
  limit?: number
}

const actionConfig = {
  create: {
    label: "Added",
    icon: PenTool,
    bgColor: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-700 dark:text-green-400",
  },
  update: {
    label: "Updated",
    icon: BookOpen,
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-700 dark:text-blue-400",
  },
  delete: {
    label: "Removed",
    icon: MessageSquare,
    bgColor: "bg-red-100 dark:bg-red-900/30",
    textColor: "text-red-700 dark:text-red-400",
  },
  review: {
    label: "Reviewed",
    icon: Check,
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-700 dark:text-purple-400",
  },
}

export default function UserActivitySection({ userId, limit = 20 }: UserActivitySectionProps) {
  const [activities, setActivities] = useState<UserActivity[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    fetchUserActivity()
  }, [userId, activeTab])

  const fetchUserActivity = async () => {
    try {
      setLoading(true)
      const actionFilter = activeTab === "all" ? "" : `&action=${activeTab}`
      const response = await fetch(
        `/api/community/user-activity?userId=${userId}&limit=${limit}${actionFilter}`
      )
      const result = await response.json()
      if (result.success) {
        setActivities(result.data)
      }
    } catch (error) {
      console.error("Error fetching user activity:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredActivities = activeTab === "all" 
    ? activities 
    : activities.filter(a => a.action === activeTab)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity History</CardTitle>
        <CardDescription>Recent contributions to the OpenBalti dictionary</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
            <TabsTrigger value="create" className="text-xs">Added</TabsTrigger>
            <TabsTrigger value="update" className="text-xs">Updated</TabsTrigger>
            <TabsTrigger value="delete" className="text-xs">Removed</TabsTrigger>
            <TabsTrigger value="review" className="text-xs">Reviewed</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-3">
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : filteredActivities.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No activities in this period</p>
            ) : (
              filteredActivities.map((activity) => {
                const config = actionConfig[activity.action]
                const Icon = config.icon
                return (
                  <div
                    key={activity._id}
                    className={`p-4 rounded-lg border border-transparent ${config.bgColor}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg flex-shrink-0 ${config.bgColor}`}>
                        <Icon className={`h-4 w-4 ${config.textColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="secondary" className="text-xs">
                            {config.label}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(activity.createdAt), {
                              addSuffix: true,
                            })}
                          </span>
                        </div>
                        <p className="font-semibold text-sm mt-2">
                          {activity.wordBalti || activity.wordEnglish || "Unknown word"}
                        </p>
                        {activity.wordEnglish && (
                          <p className="text-xs text-muted-foreground">
                            {activity.wordEnglish}
                          </p>
                        )}
                        {activity.details && (
                          <p className="text-xs text-muted-foreground mt-1">{activity.details}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
