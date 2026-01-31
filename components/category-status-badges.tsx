"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, HelpCircle, Zap } from "lucide-react"

interface CategoryBadgeProps {
  category: string
  variant?: "default" | "secondary" | "outline" | "destructive"
  size?: "sm" | "md"
}

interface StatusBadgeProps {
  status: "verified" | "community-feedback" | "needs-review" | "featured"
  label?: string
  count?: number
}

interface DifficultyBadgeProps {
  level: "beginner" | "intermediate" | "advanced"
}

/**
 * Category Badge - Displays category tags with consistent styling
 */
export function CategoryBadge({ category, variant = "secondary", size = "sm" }: CategoryBadgeProps) {
  const colorMap: Record<string, string> = {
    "food & drink": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 hover:bg-orange-200",
    culture: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:bg-purple-200",
    nature: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-200",
    family: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 hover:bg-pink-200",
    geography: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200",
    commerce: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 hover:bg-yellow-200",
    animals: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 hover:bg-red-200",
    verbs: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 hover:bg-indigo-200",
  }

  const categoryLower = category.toLowerCase()
  const colorClass = colorMap[categoryLower] || colorMap.culture

  return (
    <Badge
      variant={variant}
      className={`${colorClass} transition-colors ${size === "sm" ? "text-xs px-2.5 py-0.5" : "text-sm px-3 py-1"}`}
    >
      {category}
    </Badge>
  )
}

/**
 * Status Badge - Indicates verification status, feedback status, and featured content
 */
export function StatusBadge({ status, label, count }: StatusBadgeProps) {
  const statusConfig: Record<
    string,
    {
      icon: React.ReactNode
      label: string
      color: string
    }
  > = {
    verified: {
      icon: <CheckCircle2 className="h-3.5 w-3.5" />,
      label: "Verified",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    },
    "community-feedback": {
      icon: <Zap className="h-3.5 w-3.5" />,
      label: "Community Trusted",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    "needs-review": {
      icon: <AlertCircle className="h-3.5 w-3.5" />,
      label: "Needs Review",
      color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
    },
    featured: {
      icon: <HelpCircle className="h-3.5 w-3.5" />,
      label: "Featured",
      color: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200",
    },
  }

  const config = statusConfig[status]

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${config.color}`}>
      {config.icon}
      <span>{label || config.label}</span>
      {count !== undefined && <span className="ml-1 opacity-75">({count})</span>}
    </div>
  )
}

/**
 * Difficulty Badge - Shows word difficulty level with visual indicators
 */
export function DifficultyBadge({ level }: DifficultyBadgeProps) {
  const difficultyConfig: Record<
    string,
    {
      label: string
      color: string
      dots: number
    }
  > = {
    beginner: {
      label: "Beginner",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      dots: 1,
    },
    intermediate: {
      label: "Intermediate",
      color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      dots: 2,
    },
    advanced: {
      label: "Advanced",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      dots: 3,
    },
  }

  const config = difficultyConfig[level]

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${config.color}`}>
      <span>{config.label}</span>
      <div className="flex gap-0.5">
        {Array.from({ length: config.dots }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
        ))}
      </div>
    </div>
  )
}

/**
 * Dialect Badge - Displays regional dialect information
 */
export function DialectBadge({ dialect }: { dialect: string }) {
  const dialectMap: Record<string, string> = {
    skardu: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    khaplu: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    kargil: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    "chorbat-nubra":
      "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
  }

  const dialectLower = dialect.toLowerCase()
  const colorClass = dialectMap[dialectLower] || "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200"

  return (
    <Badge
      variant="secondary"
      className={`${colorClass} text-xs px-2.5 py-0.5 transition-colors hover:opacity-80`}
    >
      🗺️ {dialect}
    </Badge>
  )
}

interface MultiCategoryBadgesProps {
  categories: string[]
  maxDisplay?: number
  showMore?: boolean
}

/**
 * Multiple Category Badges - Displays multiple categories with overflow handling
 */
export function MultiCategoryBadges({ categories, maxDisplay = 3, showMore = true }: MultiCategoryBadgesProps) {
  const displayedCategories = categories.slice(0, maxDisplay)
  const remainingCount = Math.max(0, categories.length - maxDisplay)

  return (
    <div className="flex flex-wrap gap-2">
      {displayedCategories.map((category) => (
        <CategoryBadge key={category} category={category} size="sm" />
      ))}
      {showMore && remainingCount > 0 && (
        <Badge
          variant="outline"
          className="text-xs px-2.5 py-0.5 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
        >
          +{remainingCount} more
        </Badge>
      )}
    </div>
  )
}
