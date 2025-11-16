import { ThumbsUp, Shield, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeedbackStats {
  useful: number
  trusted: number
  needsReview: number
}

interface FeedbackBadgesProps {
  feedbackStats?: FeedbackStats
  size?: "sm" | "md" | "lg"
  showLabels?: boolean
}

/**
 * Renders a set of badges to visually represent community feedback on a word.
 * It displays counts for 'useful', 'trusted', and 'needs review' feedback,
 * highlighting the most frequent feedback type.
 *
 * @param {FeedbackBadgesProps} props - The component props.
 * @param {FeedbackStats} [props.feedbackStats={ useful: 0, trusted: 0, needsReview: 0 }] - An object containing the counts for each feedback type.
 * @param {"sm" | "md" | "lg"} [props.size="md"] - The size of the badges.
 * @param {boolean} [props.showLabels=false] - Whether to show text labels next to the feedback counts.
 * @returns {JSX.Element} The rendered feedback badges or a "No feedback yet" message.
 */
export default function FeedbackBadges({
  feedbackStats = { useful: 0, trusted: 0, needsReview: 0 },
  size = "md",
  showLabels = false,
}: FeedbackBadgesProps) {
  const totalFeedback = feedbackStats.useful + feedbackStats.trusted + feedbackStats.needsReview

  if (totalFeedback === 0) {
    return <span className="text-xs text-muted-foreground">No feedback yet</span>
  }

  // Determine which badge to show prominently
  const highestType = Object.entries(feedbackStats).reduce(
    (highest, [key, value]) => {
      if (value > highest.value) {
        return { type: key, value }
      }
      return highest
    },
    { type: "", value: -1 },
  )

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  const badgeClasses = {
    useful: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    trusted: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    needsReview: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  }

  const renderBadge = (type: string, count: number, isHighest: boolean) => {
    if (count === 0) return null

    const iconClass = cn(iconSizes[size], "mr-1")

    const badgeClass = cn(
      "inline-flex items-center rounded-full px-2 py-1",
      textSizes[size],
      badgeClasses[type as keyof typeof badgeClasses],
      isHighest ? "font-medium" : "opacity-80",
    )

    return (
      <span className={badgeClass}>
        {type === "useful" && <ThumbsUp className={iconClass} />}
        {type === "trusted" && <Shield className={iconClass} />}
        {type === "needsReview" && <AlertTriangle className={iconClass} />}
        {showLabels ? (
          <span>
            {type === "useful" && "Useful"}
            {type === "trusted" && "Trusted"}
            {type === "needsReview" && "Needs Review"}
            <span className="ml-1 font-normal">({count})</span>
          </span>
        ) : (
          count
        )}
      </span>
    )
  }

  return (
    <div className="flex flex-wrap gap-1">
      {feedbackStats.useful > 0 && renderBadge("useful", feedbackStats.useful, highestType.type === "useful")}
      {feedbackStats.trusted > 0 && renderBadge("trusted", feedbackStats.trusted, highestType.type === "trusted")}
      {feedbackStats.needsReview > 0 &&
        renderBadge("needsReview", feedbackStats.needsReview, highestType.type === "needsReview")}
    </div>
  )
}
