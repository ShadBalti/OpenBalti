"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, XCircle, AlertCircle, Loader2 } from "lucide-react"
import { format } from "date-fns"

interface SubmissionToReview {
  id: string
  type: "word_add" | "word_edit" | "comment" | "feedback"
  content: any
  submittedBy: {
    name: string
    id: string
  }
  status: "pending" | "approved" | "rejected"
  createdAt: string
  flagCount?: number
}

interface ModerationQueueProps {
  limit?: number
  statusFilter?: "pending" | "all"
}

/**
 * Render a moderation UI for moderators and admins to review and act on queued submissions.
 *
 * The component fetches submissions filtered by `statusFilter` (limited by `limit`), displays submission
 * details and content, provides a per-submission feedback textarea, and exposes Approve/Reject actions
 * that remove the submission from the list on success.
 *
 * @param limit - Maximum number of submissions to fetch and display. Defaults to `10`.
 * @param statusFilter - Submission status to filter the queue by. Defaults to `"pending"`.
 * @returns The moderation queue UI when the current user is a moderator or admin; `null` otherwise.
 */
export default function ModerationQueue({ limit = 10, statusFilter = "pending" }: ModerationQueueProps) {
  const { data: session } = useSession()
  const [submissions, setSubmissions] = useState<SubmissionToReview[]>([])
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [feedbackText, setFeedbackText] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    if (session?.user?.role === "moderator" || session?.user?.role === "admin") {
      fetchSubmissions()
    }
  }, [session?.user?.role, statusFilter])

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/moderation/queue?status=${statusFilter}&limit=${limit}`)
      const result = await response.json()

      if (result.success) {
        setSubmissions(result.data)
      }
    } catch (error) {
      console.error("Error fetching submissions:", error)
    } finally {
      setLoading(false)
    }
  }

  const approveSubmission = async (submissionId: string) => {
    try {
      setActionLoading(submissionId)
      const response = await fetch(`/api/moderation/${submissionId}/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feedback: feedbackText[submissionId] || "",
        }),
      })

      const result = await response.json()
      if (result.success) {
        setSubmissions(submissions.filter(s => s.id !== submissionId))
        setFeedbackText(prev => {
          delete prev[submissionId]
          return prev
        })
      }
    } catch (error) {
      console.error("Error approving submission:", error)
    } finally {
      setActionLoading(null)
    }
  }

  const rejectSubmission = async (submissionId: string) => {
    try {
      setActionLoading(submissionId)
      const response = await fetch(`/api/moderation/${submissionId}/reject`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reason: feedbackText[submissionId] || "Does not meet quality standards",
        }),
      })

      const result = await response.json()
      if (result.success) {
        setSubmissions(submissions.filter(s => s.id !== submissionId))
        setFeedbackText(prev => {
          delete prev[submissionId]
          return prev
        })
      }
    } catch (error) {
      console.error("Error rejecting submission:", error)
    } finally {
      setActionLoading(null)
    }
  }

  if (session?.user?.role !== "moderator" && session?.user?.role !== "admin") {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          Moderation Queue
        </CardTitle>
        <CardDescription>
          Review and approve submissions to maintain quality
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
          </div>
        ) : submissions.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">No submissions to review</p>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="border rounded-lg p-4 space-y-3 bg-secondary/30"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="capitalize">
                        {submission.type.replace("_", " ")}
                      </Badge>
                      {submission.flagCount && submission.flagCount > 0 && (
                        <Badge variant="destructive" className="gap-1">
                          <AlertCircle className="h-3 w-3" aria-hidden="true" />
                          {submission.flagCount} flags
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      By <span className="font-medium">{submission.submittedBy.name}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(submission.createdAt), "PPpp")}
                    </p>
                  </div>
                </div>

                <div className="bg-background p-3 rounded text-sm max-h-48 overflow-y-auto">
                  <pre className="whitespace-pre-wrap break-words font-mono text-xs">
                    {JSON.stringify(submission.content, null, 2)}
                  </pre>
                </div>

                <Textarea
                  placeholder="Add feedback or reason for rejection..."
                  value={feedbackText[submission.id] || ""}
                  onChange={(e) =>
                    setFeedbackText(prev => ({
                      ...prev,
                      [submission.id]: e.target.value,
                    }))
                  }
                  className="text-sm"
                  rows={2}
                />

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => approveSubmission(submission.id)}
                    disabled={actionLoading === submission.id}
                    className="gap-2"
                  >
                    {actionLoading === submission.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    )}
                    Approve
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => rejectSubmission(submission.id)}
                    disabled={actionLoading === submission.id}
                    className="gap-2"
                  >
                    {actionLoading === submission.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    ) : (
                      <XCircle className="h-4 w-4" aria-hidden="true" />
                    )}
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
