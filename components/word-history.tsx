"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Loader2, ChevronLeft, ChevronRight, Plus, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

interface WordHistoryProps {
  wordId: string
}

interface WordData {
  id: string
  balti: string
  english: string
  reviewStatus?: string
}

interface HistoryEntry {
  _id: string
  wordId: string
  balti: string
  english: string
  action: "create" | "update" | "delete"
  userId: string
  userName?: string
  userImage?: string
  details?: string
  createdAt: string
}

export default function WordHistory({ wordId }: WordHistoryProps) {
  const router = useRouter()
  const [word, setWord] = useState<WordData | null>(null)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchWordHistory()
  }, [wordId, page])

  // Improve error handling for API requests
  const fetchWordHistory = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/words/${wordId}/history?page=${page}`)

      if (!response.ok) {
        if (response.status === 401) {
          setError("Authentication required. Please sign in.")
          return
        } else if (response.status === 404) {
          setError("Word not found")
        } else {
          setError(`Failed to load word history: ${response.statusText}`)
        }
        return
      }

      const result = await response.json()

      if (result.success) {
        setWord(result.data.word)
        setHistory(result.data.history)
        setTotalPages(result.pagination.pages)
      } else {
        setError(result.error || "Failed to load word history")
      }
    } catch (error) {
      console.error("Error fetching word history:", error)
      setError("Failed to load word history. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMM d, yyyy 'at' h:mm a")
  }

  const getActionIcon = (action: string) => {
    switch (action) {
      case "create":
        return <Plus className="h-4 w-4" />
      case "update":
        return <Edit className="h-4 w-4" />
      case "delete":
        return <Trash2 className="h-4 w-4" />
      default:
        return null
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
      default:
        return <Badge>{action}</Badge>
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
          <p className="text-muted-foreground">Loading word history...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{error}</CardTitle>
          <CardDescription>
            {error === "Word not found"
              ? "The word you're looking for doesn't exist or has been removed."
              : "There was a problem loading the word history."}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="/">Back to Dictionary</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (!word) return null

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl">Word History</CardTitle>
              <CardDescription>View the complete history of changes for this word</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/">Back to Dictionary</Link>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="border p-4 rounded-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Balti</h3>
                <p className="text-lg font-medium">{word.balti}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">English</h3>
                <p className="text-lg">{word.english}</p>
              </div>
            </div>
            {word.reviewStatus && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Review Status</h3>
                <Badge
                  variant="outline"
                  className={
                    word.reviewStatus === "reviewed"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : word.reviewStatus === "flagged"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        : ""
                  }
                >
                  {word.reviewStatus === "reviewed"
                    ? "Reviewed"
                    : word.reviewStatus === "flagged"
                      ? "Needs Review"
                      : "Not Reviewed"}
                </Badge>
              </div>
            )}
          </div>

          {history.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No history records found for this word.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Change History</h3>
              <div className="space-y-4">
                {history.map((entry) => {
                  const initials = entry.userName
                    ? entry.userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                    : "U"

                  return (
                    <Card key={entry._id} className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={entry.userImage || ""} alt={entry.userName || "User"} />
                              <AvatarFallback>{initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-2">
                                <Link
                                  href={`/users/${entry.userId}`}
                                  className="font-medium hover:underline hover:text-primary"
                                >
                                  {entry.userName || "Unknown user"}
                                </Link>
                                {getActionBadge(entry.action)}
                              </div>
                              <p className="text-sm text-muted-foreground">{formatDate(entry.createdAt)}</p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Balti</h4>
                            <p>{entry.balti}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">English</h4>
                            <p>{entry.english}</p>
                          </div>
                        </div>
                        {entry.details && (
                          <div className="mt-3 pt-3 border-t">
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Details</h4>
                            <p className="text-sm">{entry.details}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
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
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
