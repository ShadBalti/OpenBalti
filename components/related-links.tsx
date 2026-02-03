'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { InternalLink } from '@/lib/internal-links'

interface RelatedLinksProps {
  links: InternalLink[]
  title?: string
  variant?: 'grid' | 'list' | 'inline'
}

export function RelatedLinks({
  links,
  title = 'Related Resources',
  variant = 'grid',
}: RelatedLinksProps) {
  if (!links || links.length === 0) {
    return null
  }

  if (variant === 'inline') {
    return (
      <div className="space-y-2">
        {title && <h3 className="font-semibold text-sm mb-3">{title}</h3>}
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-primary hover:underline inline-flex items-center gap-1 group"
              >
                {link.label}
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (variant === 'list') {
    return (
      <div className="bg-muted/30 rounded-lg p-6">
        <h3 className="font-semibold mb-4">{title}</h3>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block p-3 bg-background rounded border border-border hover:border-primary/50 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium group-hover:text-primary transition-colors">
                      {link.label}
                    </h4>
                    {link.context && (
                      <p className="text-xs text-muted-foreground mt-1">{link.context}</p>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  // Grid variant
  return (
    <div>
      {title && <h3 className="font-semibold text-lg mb-4">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="flex flex-col h-full">
              <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                {link.label}
              </h4>
              {link.context && (
                <p className="text-xs text-muted-foreground mt-2 flex-1">{link.context}</p>
              )}
              <div className="inline-flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-3">
                <span className="text-sm font-medium">Explore</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

interface BreadcrumbLinksProps {
  links: { label: string; href: string }[]
}

export function BreadcrumbLinks({ links }: BreadcrumbLinksProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {links.map((link, index) => (
          <li key={link.href} className="flex items-center gap-2">
            <Link
              href={link.href}
              className="text-primary hover:underline"
            >
              {link.label}
            </Link>
            {index < links.length - 1 && (
              <span className="text-muted-foreground">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
