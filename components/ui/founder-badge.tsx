import { Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface FounderBadgeProps {
  className?: string
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
}

export function FounderBadge({ className, showLabel = true, size = "md" }: FounderBadgeProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  if (showLabel) {
    return (
      <Badge
        className={cn("bg-gradient-to-r from-amber-500 to-yellow-300 text-black font-medium text-xs py-0.5", className)}
      >
        <Crown className={cn("mr-1", sizeClasses[size])} />
        Founder & Owner
      </Badge>
    )
  }

  return <Crown className={cn("text-amber-500", sizeClasses[size], className)} aria-label="Founder and Owner" />
}
