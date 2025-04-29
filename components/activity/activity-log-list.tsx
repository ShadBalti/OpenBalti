"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Loader2, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "react-toastify"

interface ActivityLog {
  _id: string
  user: {
    _id: string
    name: string
    email: string
  }
  action: "create" | "update" | "delete" | "review"
  wordId?: string
  wordBalti?: string
  wordEnglish?: string
  details?: string
  createdAt: string
}

interface ActivityLogListProps {
  userId?: string
  wordId?: string
  limit?: number
}

export default function ActivityLogList({ userId, wordId, limit = 10 }: ActivityLogListProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [logs, setLogs] = useState<ActivityLog[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [actionFilter, setActionFilter] = useState<string>("all")

  useEffect(() => {
    if (status === "unauthenticated") {
      toast.error("You need to be signed in to access the activity log.")
      router.push("/auth/signin?callbackUrl=/activity")
      return
    }

    if (status === "authenticated") {
      fetchLogs()
    }
  }, [status, page, actionFilter, userId, wordId, router])

  const fetchLogs = async () => {
    try {
      setLoading(true)

      // Build query parameters
      const params = new URLSearchParams()
      params.append("page", page.toString())
      params.append("limit", limit.toString())

      if (userId) params.append("userId", userId)
      if (wordId) params.append("wordId", wordId)
      if (actionFilter !== "all") params.append("action", actionFilter)

      const response = await fetch(`/api/activity?${params.toString()}`)

      if (!response.ok) {
        if (response.status === 401) {
          toast.error("Your session has expired. Please log in again.")
          router.push("/auth/signin?callbackUrl=/activity")
          return
        }
        toast.error(`Error: ${response.statusText || "Failed to fetch activity logs"}`)
        return
      }

      const result = await response.json()

      if (result.success) {
        setLogs(result.data)
        setTotalPages(result.pagination.pages)
      } else {
        toast.error(result.error || "Failed to fetch activity logs")
      }
    } catch (error) {
      console.error("Error fetching activity logs:", error)
      toast.error("Failed to fetch activity logs. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const getActionBadge = (action: string) => {
    switch (action) {
      case "create":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Added</Badge>
      case "update":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Updated</Badge>
      case "delete":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Deleted</Badge>
      case "review":
        return <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">Reviewed</Badge>
      default:
        return <Badge>{action}</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMM d, yyyy 'at' h:mm a")
  }

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h2 className="text-2xl font-bold">Activity Log</h2>
        <div className="flex gap-2">
          <Select value={actionFilter} onValueChange={setActionFilter}>
            <SelectTrigger className="w-[160px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by action" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Actions</SelectItem>
              <SelectItem value="create">Added Words</SelectItem>
              <SelectItem value="update">Updated Words</SelectItem>
              <SelectItem value="delete">Deleted Words</SelectItem>
              <SelectItem value="review">Review Actions</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="flex flex-col items-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
            <p className="text-muted-foreground">Loading activity logs...</p>
          </div>
        </div>
      ) : logs.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>No Activity Found</CardTitle>
            <CardDescription>
              {actionFilter !== "all"
                ? `No ${actionFilter} activities found.`
                : "No activities found with the current filters."}
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <>
          <div className="space-y-4">
            {logs.map((log) => (
              <Card key={log._id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {getActionBadge(log.action)}
                        <span className="text-sm text-muted-foreground">{formatDate(log.createdAt)}</span>
                      </div>
                      <CardTitle className="text-base">
                        {log.wordBalti && log.wordEnglish ? (
                          <>
                            <span className="font-medium">{log.wordBalti}</span> - {log.wordEnglish}
                          </>
                        ) : (
                          "Word details not available"
                        )}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex flex-col gap-2">
                    <div className="text-sm">
                      <span className="font-medium">User:</span> {log.user?.name || "Unknown user"}
                    </div>
                    {log.details && (
                      <div className="text-sm">
                        <span className="font-medium">Details:</span> {log.details}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={page === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
