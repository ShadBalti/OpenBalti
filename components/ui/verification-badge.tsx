import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface VerificationBadgeProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function VerificationBadge({ className, size = "md" }: VerificationBadgeProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  return (
    <CheckCircle
      className={cn("text-blue-500 fill-blue-500", sizeClasses[size], className)}
      aria-label="Verified account"
    />
  )
}
