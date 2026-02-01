'use client'

import { Shield, Zap, Globe, BookOpen, Users, Award } from 'lucide-react'

export interface TrustSignal {
  icon: React.ReactNode
  label: string
  description: string
}

const defaultSignals: TrustSignal[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    label: 'Secure & Safe',
    description: 'HTTPS encrypted, privacy-focused platform',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    label: 'Expert Verified',
    description: 'All content reviewed by linguists',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    label: 'Globally Trusted',
    description: 'Used by universities and organizations',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    label: 'Academic Rigor',
    description: 'Follows scholarly linguistic standards',
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: 'Community Driven',
    description: 'Native speakers and experts collaborate',
  },
  {
    icon: <Award className="w-6 h-6" />,
    label: 'Quality Assured',
    description: 'Rigorous peer-review process',
  },
]

interface TrustBadgesProps {
  signals?: TrustSignal[]
  layout?: 'grid' | 'horizontal' | 'minimal'
}

export function TrustBadges({ signals = defaultSignals, layout = 'grid' }: TrustBadgesProps) {
  if (layout === 'minimal') {
    return (
      <div className="flex flex-wrap gap-3">
        {signals.map((signal) => (
          <div
            key={signal.label}
            className="inline-flex items-center gap-2 px-3 py-1 bg-accent/50 rounded-full border border-border/50 text-sm"
          >
            <div className="text-primary">{signal.icon}</div>
            <span className="font-medium text-xs">{signal.label}</span>
          </div>
        ))}
      </div>
    )
  }

  if (layout === 'horizontal') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {signals.map((signal) => (
          <div
            key={signal.label}
            className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-accent/30 transition-colors"
          >
            <div className="text-primary mb-2">{signal.icon}</div>
            <p className="font-semibold text-sm mb-1">{signal.label}</p>
            <p className="text-xs text-muted-foreground">{signal.description}</p>
          </div>
        ))}
      </div>
    )
  }

  // Grid layout (default)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {signals.map((signal) => (
        <div
          key={signal.label}
          className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
        >
          <div className="flex items-start gap-3">
            <div className="text-primary flex-shrink-0">{signal.icon}</div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold mb-1">{signal.label}</h3>
              <p className="text-sm text-muted-foreground">{signal.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function TrustSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Trust OpenBalti</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          We are committed to academic excellence, community participation, and cultural authenticity in everything we do.
        </p>
        <TrustBadges layout="horizontal" />
      </div>
    </section>
  )
}
