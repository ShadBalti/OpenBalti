"use client"

import { useState, useEffect } from "react"
import { format, formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Activity {
  _id: string
  action: "create" | "update" | "delete" | "review"
  wordBalti?: string
  wordEnglish?: string
  details?: string
  createdAt: string
  user?: {
    _id: string
    name: string
    image?: string
    role?: string
  }
}

interface LiveFeedProps {
  limit?: number
}

const actionConfig = {
  create: {
    label: "Added",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-700 dark:text-green-400",
    badgeColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  update: {
    label: "Updated",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-700 dark:text-blue-400",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  delete: {
    label: "Removed",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    textColor: "text-red-700 dark:text-red-400",
    badgeColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  },
  review: {
    label: "Reviewed",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-700 dark:text-purple-400",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
}

export default function LiveFeed({ limit = 15 }: LiveFeedProps) {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [actionFilter, setActionFilter] = useState("all")

  useEffect(() => {
    fetchActivities()
  }, [page, actionFilter])

  const fetchActivities = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      params.append("page", page.toString())
      params.append("limit", limit.toString())
      if (actionFilter !== "all") params.append("action", actionFilter)

      const response = await fetch(`/api/community/live-feed?${params.toString()}`)
      const result = await response.json()

      if (result.success) {
        setActivities(result.data)
        setTotalPages(result.pagination.pages)
      }
    } catch (error) {
      console.error("[v0] Live feed fetch error:", error)
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

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Live Activity Feed</CardTitle>
            <CardDescription>Recent contributions and updates</CardDescription>
          </div>
          <Select value={actionFilter} onValueChange={(value) => {
            setActionFilter(value)
            setPage(1)
          }}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Actions</SelectItem>
              <SelectItem value="create">Added</SelectItem>
              <SelectItem value="update">Updated</SelectItem>
              <SelectItem value="review">Reviewed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : activities.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">No activities found</p>
        ) : (
          <>
            <div className="space-y-4">
              {activities.map((activity) => {
                const config = actionConfig[activity.action]
                return (
                  <div
                    key={activity._id}
                    className={`p-4 rounded-lg border ${config.bgColor}`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      {activity.user && (
                        <Avatar className="h-10 w-10 flex-shrink-0">
                          <AvatarImage
                            src={activity.user.image || "/placeholder.svg"}
                            alt={activity.user.name}
                          />
                          <AvatarFallback>{getInitials(activity.user.name)}</AvatarFallback>
                        </Avatar>
                      )}

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-medium text-sm">
                                {activity.user?.name || "Unknown"}
                              </span>
                              <Badge className={config.badgeColor} variant="secondary">
                                {config.label}
                              </Badge>
                            </div>
                            {activity.wordBalti && (
                              <div className="mt-2">
                                <p className="font-semibold text-sm">
                                  <span className="text-foreground">{activity.wordBalti}</span>
                                  {activity.wordEnglish && (
                                    <span className="text-muted-foreground ml-1">
                                      - {activity.wordEnglish}
                                    </span>
                                  )}
                                </p>
                              </div>
                            )}
                            {activity.details && (
                              <p className="text-xs text-muted-foreground mt-1">
                                {activity.details}
                              </p>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground flex-shrink-0">
                            {formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6 pt-4 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
