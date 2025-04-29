"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { X } from "lucide-react"
import { calculateProfileCompletion } from "@/lib/profile-completion"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProfileCompletionReminderProps {
  threshold?: number // Minimum percentage to show the reminder
}

export function ProfileCompletionReminder({ threshold = 70 }: ProfileCompletionReminderProps) {
  const { data: session } = useSession()
  const [dismissed, setDismissed] = useState(false)
  const [completion, setCompletion] = useState<{ percentage: number } | null>(null)

  useEffect(() => {
    // Check if the reminder was dismissed in the last 7 days
    const lastDismissed = localStorage.getItem("profileReminderDismissed")
    if (lastDismissed) {
      const dismissedDate = new Date(lastDismissed)
      const now = new Date()
      const daysSinceDismissed = Math.floor((now.getTime() - dismissedDate.getTime()) / (1000 * 3600 * 24))

      if (daysSinceDismissed < 7) {
        setDismissed(true)
        return
      }
    }

    // Calculate profile completion if user is logged in
    if (session?.user) {
      const result = calculateProfileCompletion(session.user)
      setCompletion(result)
    }
  }, [session])

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem("profileReminderDismissed", new Date().toISOString())
  }

  // Don't show if:
  // - User is not logged in
  // - Reminder was dismissed
  // - Profile completion is above threshold
  // - Completion couldn't be calculated
  if (!session?.user || dismissed || !completion || completion.percentage >= threshold) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700 z-50">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">Complete Your Profile</h3>
        <button onClick={handleDismiss} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-500 dark:text-gray-400">Profile completion</span>
          <span className="text-sm font-medium">{completion.percentage}%</span>
        </div>
        <Progress value={completion.percentage} className="h-2" />
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        Complete your profile to help others learn more about you and your contributions to OpenBalti.
      </p>

      <Button asChild size="sm" className="w-full">
        <Link href="/settings">Complete Now</Link>
      </Button>
    </div>
  )
}
