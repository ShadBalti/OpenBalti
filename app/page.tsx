import { Suspense } from "react"
import { HomeCardsSection } from "@/components/home-cards-section"
import { HeroSection } from "@/components/hero-section"
import { FeaturesShowcase } from "@/components/features-showcase"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <Suspense fallback={<div className="py-24" />}>
        <HeroSection />
      </Suspense>

      {/* Main Navigation Cards */}
      <Suspense fallback={<div className="py-16" />}>
        <HomeCardsSection />
      </Suspense>

      {/* Features Showcase */}
      <Suspense fallback={<div className="py-24" />}>
        <FeaturesShowcase />
      </Suspense>

      {/* Community Stats */}
      <Suspense fallback={<div className="py-24" />}>
        <StatsSection />
      </Suspense>

      {/* Testimonials */}
      <Suspense fallback={<div className="py-24" />}>
        <TestimonialsSection />
      </Suspense>

      {/* Call-to-Action Sections */}
      <Suspense fallback={<div className="py-24" />}>
        <CTASection />
      </Suspense>
    </div>
  )
}
