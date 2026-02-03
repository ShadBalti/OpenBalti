'use client'

import { Star, Users, TrendingUp, Award } from 'lucide-react'
import Image from 'next/image'

export interface Testimonial {
  id: string
  name: string
  role: string
  organization: string
  avatar: string
  quote: string
  rating?: number
}

export interface StatItem {
  label: string
  value: string | number
  icon: React.ReactNode
  description?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  title?: string
  layout?: 'carousel' | 'grid'
}

export function Testimonials({ testimonials, title = 'What Our Community Says', layout = 'grid' }: TestimonialsProps) {
  if (layout === 'carousel') {
    return (
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
      {testimonial.rating && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
      )}
      <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role} at {testimonial.organization}
          </p>
        </div>
      </div>
    </div>
  )
}

interface StatsProps {
  stats: StatItem[]
  title?: string
  subtitle?: string
}

export function Stats({ stats, title, subtitle }: StatsProps) {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && <h2 className="text-3xl font-bold mb-2 text-center">{title}</h2>}
        {subtitle && <p className="text-center text-muted-foreground mb-8">{subtitle}</p>}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3 mx-auto">
                <div className="text-primary">{stat.icon}</div>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              {stat.description && (
                <p className="text-xs text-muted-foreground/70 mt-1">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface ExpertEndorsementsProps {
  endorsements: Array<{
    id: string
    name: string
    title: string
    organization: string
    endorsement: string
    avatar: string
  }>
}

export function ExpertEndorsements({ endorsements }: ExpertEndorsementsProps) {
  return (
    <section className="py-12 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center">Expert Endorsements</h2>
        <p className="text-center text-muted-foreground mb-8">Recognized by leading experts in linguistics and cultural preservation</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {endorsements.map((endorsement) => (
            <div key={endorsement.id} className="bg-background border border-border rounded-lg p-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={endorsement.avatar}
                    alt={endorsement.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{endorsement.name}</p>
                  <p className="text-sm text-muted-foreground">{endorsement.title}</p>
                  <p className="text-xs text-muted-foreground/70">{endorsement.organization}</p>
                </div>
              </div>
              <p className="text-sm italic text-muted-foreground">"{endorsement.endorsement}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
