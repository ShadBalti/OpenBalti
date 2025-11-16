import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { IBadge } from "@/models/User"

interface BadgeDisplayProps {
  badge: IBadge
  size?: "sm" | "md" | "lg"
}

/**
 * Renders a single badge with an icon and a tooltip that reveals the badge's name and description on hover.
 * The size of the badge can be customized.
 *
 * @param {BadgeDisplayProps} props - The component props.
 * @param {IBadge} props.badge - The badge object containing its metadata (icon, name, description).
 * @param {"sm" | "md" | "lg"} [props.size="md"] - The size of the badge.
 * @returns {JSX.Element} The rendered badge component.
 */
export function BadgeDisplay({ badge, size = "md" }: BadgeDisplayProps) {
  const sizeClasses = {
    sm: "text-lg w-8 h-8",
    md: "text-2xl w-10 h-10",
    lg: "text-4xl w-12 h-12",
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`flex items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 border border-amber-200 dark:border-amber-800 cursor-help ${sizeClasses[size]}`}
          >
            <span>{badge.icon}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-semibold">{badge.name}</p>
            <p className="text-xs text-muted-foreground">{badge.description}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

interface BadgeGridProps {
  badges: IBadge[]
  size?: "sm" | "md" | "lg"
}

/**
 * Renders a grid of badges. If the user has no badges, it displays a message encouraging contribution.
 *
 * @param {BadgeGridProps} props - The component props.
 * @param {IBadge[]} props.badges - An array of badge objects to be displayed.
 * @param {"sm" | "md" | "lg"} [props.size="md"] - The size of the badges in the grid.
 * @returns {JSX.Element} The rendered grid of badges or a placeholder message.
 */
export function BadgeGrid({ badges, size = "md" }: BadgeGridProps) {
  if (badges.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No badges earned yet. Start contributing to unlock achievements!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
      {badges.map((badge) => (
        <BadgeDisplay key={badge.id} badge={badge} size={size} />
      ))}
    </div>
  )
}
