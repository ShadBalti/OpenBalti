"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Award, Target } from "lucide-react"
import type { IUser } from "@/models/User"
import { calculateBadgeProgress } from "@/lib/badge-calculator"

interface ProfileStatsDashboardProps {
  user: IUser
}

/**
 * Renders a user profile statistics dashboard showing contribution counts, per-category progress bars, badge achievement progress, and a contribution breakdown.
 *
 * Uses `user.contributionStats` when available; otherwise treats all counts as zero. Badge progress is derived from `calculateBadgeProgress(user)`.
 *
 * @param user - The user whose contribution and badge statistics will be displayed.
 * @returns A React element containing the profile statistics dashboard.
 */
export default function ProfileStatsDashboard({ user }: ProfileStatsDashboardProps) {
  const stats = user.contributionStats || {
    wordsAdded: 0,
    wordsEdited: 0,
    wordsReviewed: 0,
  }

  const totalContributions = stats.wordsAdded + stats.wordsEdited + stats.wordsReviewed
  const badgeProgress = calculateBadgeProgress(user)

  return (
    <div className="space-y-4">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-primary/20">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Words Added</p>
                <TrendingUp className="h-4 w-4 text-green-500" aria-hidden="true" />
              </div>
              <p className="text-3xl font-bold text-primary">{stats.wordsAdded}</p>
              <Progress value={(stats.wordsAdded / 100) * 100} className="h-1" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-500/20">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Words Edited</p>
                <BarChart3 className="h-4 w-4 text-blue-500" aria-hidden="true" />
              </div>
              <p className="text-3xl font-bold text-blue-600">{stats.wordsEdited}</p>
              <Progress value={(stats.wordsEdited / 50) * 100} className="h-1" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-500/20">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Words Reviewed</p>
                <Award className="h-4 w-4 text-purple-500" aria-hidden="true" />
              </div>
              <p className="text-3xl font-bold text-purple-600">{stats.wordsReviewed}</p>
              <Progress value={(stats.wordsReviewed / 30) * 100} className="h-1" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Badge Progress Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Target className="h-5 w-5" aria-hidden="true" />
            Achievement Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {badgeProgress.map((progress) => (
              <div key={progress.badge.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{progress.badge.icon}</span>
                    <div>
                      <p className="text-sm font-medium">{progress.badge.name}</p>
                      <p className="text-xs text-muted-foreground">{progress.badge.description}</p>
                    </div>
                  </div>
                  {progress.isUnlocked ? (
                    <Badge className="bg-green-500/20 text-green-700 border-0">Unlocked</Badge>
                  ) : (
                    <Badge variant="outline" className="text-xs">
                      {progress.progress}/{progress.maxProgress}
                    </Badge>
                  )}
                </div>
                <Progress
                  value={(progress.progress / progress.maxProgress) * 100}
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contribution Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Contribution Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Contributions</span>
              <span className="text-xl font-bold">{totalContributions}</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Added ({Math.round((stats.wordsAdded / totalContributions) * 100)}%)</span>
                <span className="font-medium">{stats.wordsAdded}</span>
              </div>
              <Progress
                value={(stats.wordsAdded / totalContributions) * 100 || 0}
                className="h-2"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Edited ({Math.round((stats.wordsEdited / totalContributions) * 100)}%)</span>
                <span className="font-medium">{stats.wordsEdited}</span>
              </div>
              <Progress
                value={(stats.wordsEdited / totalContributions) * 100 || 0}
                className="h-2"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Reviewed ({Math.round((stats.wordsReviewed / totalContributions) * 100)}%)</span>
                <span className="font-medium">{stats.wordsReviewed}</span>
              </div>
              <Progress
                value={(stats.wordsReviewed / totalContributions) * 100 || 0}
                className="h-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
