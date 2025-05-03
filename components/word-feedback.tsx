"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import { ThumbsUp, Shield, AlertTriangle, Loader2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface WordFeedbackProps {
  wordId: string
}

interface FeedbackStats {
  useful: number
  trusted: number
  needsReview: number
}

type FeedbackType = "useful" | "trusted" | "needsReview"

export default function WordFeedback({ wordId }: WordFeedbackProps) {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [stats, setStats] = useState<FeedbackStats>({ useful: 0, trusted: 0, needsReview: 0 })
  const [userFeedback, setUserFeedback] = useState<FeedbackType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchFeedback()
  }, [wordId])

  const fetchFeedback = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/words/${wordId}/feedback`)
      const result = await response.json()

      if (result.success) {
        setStats(result.data.stats)
        setUserFeedback(result.data.userFeedback)
      }
    } catch (error) {
      console.error("Error fetching feedback:", error)
      toast({
        title: "Error",
        description: "Failed to load feedback data",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleFeedback = async (type: FeedbackType) => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to provide feedback",
        variant: "destructive",
      })
      return
    }

    try {
      setIsSubmitting(true)
      const response = await fetch(`/api/words/${wordId}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type }),
      })

      const result = await response.json()

      if (result.success) {
        // Update local state based on the action
        if (result.action === "added") {
          setStats((prev) => ({
            ...prev,
            [type]: prev[type] + 1,
          }))
          setUserFeedback(type)
          toast({
            title: "Feedback submitted",
            description: `You marked this word as ${getFeedbackLabel(type).toLowerCase()}`,
          })
        } else if (result.action === "removed") {
          setStats((prev) => ({
            ...prev,
            [type]: prev[type] - 1,
          }))
          setUserFeedback(null)
          toast({
            title: "Feedback removed",
            description: `You removed your feedback for this word`,
          })
        } else if (result.action === "changed") {
          const oldType = userFeedback as FeedbackType
          setStats((prev) => ({
            ...prev,
            [oldType]: prev[oldType] - 1,
            [type]: prev[type] + 1,
          }))
          setUserFeedback(type)
          toast({
            title: "Feedback updated",
            description: `You changed your feedback to ${getFeedbackLabel(type).toLowerCase()}`,
          })
        }
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to submit feedback",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting feedback:", error)
      toast({
        title: "Error",
        description: "Failed to submit feedback",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFeedbackLabel = (type: FeedbackType): string => {
    switch (type) {
      case "useful":
        return "Useful"
      case "trusted":
        return "Trusted"
      case "needsReview":
        return "Needs Review"
      default:
        return ""
    }
  }

  const getFeedbackIcon = (type: FeedbackType) => {
    switch (type) {
      case "useful":
        return <ThumbsUp className="h-4 w-4" />
      case "trusted":
        return <Shield className="h-4 w-4" />
      case "needsReview":
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  const totalFeedback = stats.useful + stats.trusted + stats.needsReview

  const getProgressValue = (count: number): number => {
    if (totalFeedback === 0) return 0
    return (count / totalFeedback) * 100
  }

  if (isLoading) {
    return (
      <div className="flex justify-center py-4">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Community Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Button
              variant={userFeedback === "useful" ? "default" : "outline"}
              className="flex items-center gap-2"
              onClick={() => handleFeedback("useful")}
              disabled={isSubmitting}
            >
              {isSubmitting && userFeedback === "useful" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ThumbsUp className="h-4 w-4" />
              )}
              Useful
              <span className="ml-auto bg-primary-foreground text-primary rounded-full px-2 py-0.5 text-xs">
                {stats.useful}
              </span>
            </Button>

            <Button
              variant={userFeedback === "trusted" ? "default" : "outline"}
              className="flex items-center gap-2"
              onClick={() => handleFeedback("trusted")}
              disabled={isSubmitting}
            >
              {isSubmitting && userFeedback === "trusted" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Shield className="h-4 w-4" />
              )}
              Trusted
              <span className="ml-auto bg-primary-foreground text-primary rounded-full px-2 py-0.5 text-xs">
                {stats.trusted}
              </span>
            </Button>

            <Button
              variant={userFeedback === "needsReview" ? "default" : "outline"}
              className="flex items-center gap-2"
              onClick={() => handleFeedback("needsReview")}
              disabled={isSubmitting}
            >
              {isSubmitting && userFeedback === "needsReview" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <AlertTriangle className="h-4 w-4" />
              )}
              Needs Review
              <span className="ml-auto bg-primary-foreground text-primary rounded-full px-2 py-0.5 text-xs">
                {stats.needsReview}
              </span>
            </Button>
          </div>

          {totalFeedback > 0 && (
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <ThumbsUp className="h-3 w-3 mr-1 text-green-500" />
                    <span>Useful</span>
                  </div>
                  <span>{Math.round(getProgressValue(stats.useful))}%</span>
                </div>
                <Progress value={getProgressValue(stats.useful)} className="h-1.5" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <Shield className="h-3 w-3 mr-1 text-blue-500" />
                    <span>Trusted</span>
                  </div>
                  <span>{Math.round(getProgressValue(stats.trusted))}%</span>
                </div>
                <Progress value={getProgressValue(stats.trusted)} className="h-1.5" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                    <span>Needs Review</span>
                  </div>
                  <span>{Math.round(getProgressValue(stats.needsReview))}%</span>
                </div>
                <Progress value={getProgressValue(stats.needsReview)} className="h-1.5" />
              </div>
            </div>
          )}

          {!session && (
            <p className="text-xs text-muted-foreground text-center mt-2">Sign in to provide feedback on this word</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
