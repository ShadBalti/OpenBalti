import type React from "react"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description: string
  action?: {
    label: string
    href?: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  className?: string
}

/**
 * EmptyState Component - Display when no content is available
 * Provides visual feedback and actionable next steps for users
 */
export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  secondaryAction,
  className = "",
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}>
      {Icon && <Icon className="h-12 w-12 text-muted-foreground mb-4" aria-hidden="true" />}

      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>

      <p className="text-sm text-muted-foreground mb-6 max-w-sm">{description}</p>

      <div className="flex gap-3">
        {action && (
          <Button asChild={!!action.href} onClick={action.onClick} className="gap-2">
            {action.href ? <a href={action.href}>{action.label}</a> : action.label}
          </Button>
        )}

        {secondaryAction && (
          <Button
            variant="outline"
            asChild={!!secondaryAction.href}
            onClick={secondaryAction.onClick}
            className="gap-2"
          >
            {secondaryAction.href ? (
              <a href={secondaryAction.href}>{secondaryAction.label}</a>
            ) : (
              secondaryAction.label
            )}
          </Button>
        )}
      </div>
    </div>
  )
}

export default EmptyState
