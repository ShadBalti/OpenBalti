"use client"

import { useState } from "react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ChevronDown, ChevronUp, AlertCircle } from "lucide-react"
import { calculateProfileCompletion } from "@/lib/profile-completion"
import { cn } from "@/lib/utils"

interface ProfileCompletionProps {
  user: any
  className?: string
}

export function ProfileCompletion({ user, className }: ProfileCompletionProps) {
  const [expanded, setExpanded] = useState(false)
  const { percentage, completedFields, incompleteFields, nextSteps } = calculateProfileCompletion(user)

  // Determine color based on completion percentage
  const getColorClass = () => {
    if (percentage < 40) return "text-red-500"
    if (percentage < 70) return "text-yellow-500"
    return "text-green-500"
  }

  // Determine progress bar color
  const getProgressColor = () => {
    if (percentage < 40) return "bg-red-500"
    if (percentage < 70) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Profile Completion</CardTitle>
          <span className={cn("text-lg font-bold", getColorClass())}>{percentage}%</span>
        </div>
        <Progress value={percentage} className={cn("h-2", getProgressColor())} />
        <CardDescription>
          {percentage === 100
            ? "Your profile is complete! Thank you for providing all your information."
            : `Complete your profile to help others learn more about you and your contributions.`}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-3">
        <Button
          variant="ghost"
          className="flex w-full items-center justify-between p-0 font-normal"
          onClick={() => setExpanded(!expanded)}
        >
          <span>{expanded ? "Hide details" : `${incompleteFields.length} items left to complete`}</span>
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>

        {expanded && (
          <div className="mt-4 space-y-4">
            {/* Completed fields */}
            {completedFields.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-medium text-muted-foreground">Completed</h4>
                <ul className="space-y-1">
                  {completedFields.map((field) => (
                    <li key={field} className="flex items-center text-sm">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      <span>{field}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Incomplete fields with next steps */}
            {nextSteps.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-medium text-muted-foreground">Next Steps</h4>
                <ul className="space-y-3">
                  {nextSteps.map((step) => (
                    <li key={step.field} className="flex items-start">
                      <AlertCircle className="mr-2 mt-0.5 h-4 w-4 text-amber-500" />
                      <div>
                        <p className="text-sm font-medium">{step.field}</p>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>

      {percentage < 100 && (
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/settings">Complete Your Profile</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
