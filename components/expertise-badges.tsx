'use client'

import { Shield, CheckCircle, Award, Zap } from 'lucide-react'

export interface ExpertiseBadge {
  icon: 'expert' | 'verified' | 'award' | 'lightning'
  label: string
  description: string
}

const BADGE_CONFIG: Record<string, { icon: React.ReactNode; color: string }> = {
  expert: { icon: <Shield className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
  verified: { icon: <CheckCircle className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
  award: { icon: <Award className="w-5 h-5" />, color: 'from-amber-500 to-orange-500' },
  lightning: { icon: <Zap className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
}

interface ExpertiseBadgesProps {
  badges: ExpertiseBadge[]
  layout?: 'grid' | 'flex'
}

export function ExpertiseBadges({ badges, layout = 'grid' }: ExpertiseBadgesProps) {
  return (
    <div className={layout === 'grid' ? 'grid grid-cols-2 md:grid-cols-4 gap-4' : 'flex flex-wrap gap-4'}>
      {badges.map((badge) => {
        const config = BADGE_CONFIG[badge.icon]
        return (
          <div
            key={badge.label}
            className="relative overflow-hidden rounded-lg bg-gradient-to-br p-4 text-white group hover:shadow-lg transition-shadow"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(59,130,246,0.9), rgba(34,211,238,0.9))`,
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                {config.icon}
                <span className="font-semibold text-sm">{badge.label}</span>
              </div>
              <p className="text-xs text-white/90">{badge.description}</p>
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </div>
        )
      })}
    </div>
  )
}

interface ExpertiseHeaderProps {
  title: string
  badges: ExpertiseBadge[]
}

export function ExpertiseHeader({ title, badges }: ExpertiseHeaderProps) {
  return (
    <section className="py-12 bg-gradient-to-r from-background via-primary/5 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground mb-8">
          Created by experts with years of experience and recognized credentials
        </p>
        <ExpertiseBadges badges={badges} />
      </div>
    </section>
  )
}
