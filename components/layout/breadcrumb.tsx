"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  className?: string
}

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: "Home",
      href: "/",
      current: pathname === "/",
    },
  ]

  let currentPath = ""
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === segments.length - 1

    const labelMap: Record<string, string> = {
      dictionary: "Dictionary",
      learn: "Learn",
      blog: "Blog",
      resources: "Resources",
      about: "About",
      "get-started": "Getting Started",
      faq: "FAQ",
      contact: "Contact",
      contribute: "Contribute",
      contributors: "Contributors",
      profile: "Profile",
      settings: "Settings",
      favorites: "Favorites",
      leaderboard: "Leaderboard",
      "learning-roadmap": "Learning Roadmap",
      activity: "Activity",
      review: "Review",
      "success-stories": "Success Stories",
      grammar: "Grammar",
      phrases: "Phrases",
      culture: "Culture",
      dialects: "Dialects",
      "pronunciation-guide": "Pronunciation Guide",
      script: "Script",
      greetings: "Greetings",
      emotions: "Emotions",
      shopping: "Shopping",
      "complete-grammar": "Complete Grammar",
      festivals: "Festivals",
      "family-customs": "Family Customs",
      "traditional-foods": "Traditional Foods",
      "balti-cap": "Balti Cap",
      skardu: "Skardu Dialect",
      khaplu: "Khaplu Dialect",
      kargil: "Kargil Dialect",
      "chorbat-nubra": "Chorbat Nubra Dialect",
    }

    const label = labelMap[segment] || formatSegment(segment)

    breadcrumbs.push({
      label,
      href: currentPath,
      current: isLast,
    })
  })

  return breadcrumbs
}

function formatSegment(segment: string): string {
  return segment
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const pathname = usePathname()
  const breadcrumbs = items || generateBreadcrumbsFromPath(pathname)

  // Hide breadcrumbs on home page
  if (breadcrumbs.length <= 1) {
    return null
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-2 text-sm py-4 px-4 md:px-0", className)}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
            )}
            {item.current ? (
              <span
                className="text-foreground font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "text-primary hover:text-primary/80 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                )}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
