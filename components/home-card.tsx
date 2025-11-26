"use client"

import type React from "react"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface HomeCardProps {
  href: string
  icon: React.ReactNode
  title: string
  subtitle: string
  ctaText: string
  ariaLabel?: string
}

/**
 * A reusable, accessible card component for homepage navigation.
 * Features hover scale, glow effect, and semantic HTML structure.
 *
 * @param {HomeCardProps} props - Card configuration
 * @returns {JSX.Element} The rendered card
 */
export function HomeCard({ href, icon, title, subtitle, ctaText, ariaLabel }: HomeCardProps) {
  return (
    <Link href={href} aria-label={ariaLabel || title}>
      <article
        className={cn(
          "group relative h-full overflow-hidden rounded-2xl",
          "border border-gray-700 dark:border-gray-600",
          "bg-gradient-to-br from-gray-900 to-gray-800",
          "p-8 transition-all duration-300",
          "hover:scale-105 hover:shadow-2xl",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
          "cursor-pointer",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0",
            "transition-all duration-300 group-hover:from-blue-500/10 group-hover:via-blue-500/20 group-hover:to-blue-500/10",
            "pointer-events-none",
          )}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div
            className={cn(
              "mb-6 inline-flex h-14 w-14 items-center justify-center",
              "rounded-xl bg-blue-500/10 text-blue-400",
              "transition-all duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-300",
            )}
            aria-hidden="true"
          >
            {icon}
          </div>

          {/* Title */}
          <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-blue-300">{title}</h3>

          {/* Subtitle */}
          <p className="mb-6 flex-grow text-gray-400 transition-colors group-hover:text-gray-300">{subtitle}</p>

          {/* CTA */}
          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-all group-hover:gap-3 group-hover:text-blue-300">
            {ctaText}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  )
}
