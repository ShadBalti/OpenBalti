import type { Metadata } from "next"
import { Suspense } from "react"
import { HomePageContent } from "@/components/HomePageContent"
import { HomeCardsSection } from "@/components/home-cards-section"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ImpactSection } from "@/components/impact-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "OpenBalti – Free Balti to English Dictionary",
  description:
    "Explore the OpenBalti free dictionary for Balti language learning. Search thousands of Balti words, learn pronunciation, and contribute to preserving this Tibetan dialect.",
  keywords: ["Balti dictionary", "Balti language", "Tibetan dialect", "English Balti translation", "language learning"],
  openGraph: {
    title: "OpenBalti – Preserve & Learn the Balti Language",
    description: "Join our community in preserving the ancient Balti language through an open-source, free dictionary.",
    type: "website",
  },
}

/**
 * Homepage with hero section, features, community impact, and navigation cards.
 * Optimized for SEO with semantic structure and proper heading hierarchy.
 */
export default function Home() {
  return (
    <>
      <HeroSection />

      <FeaturesSection />

      {/* Main content area with cards and details */}
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-5xl space-y-8">
          <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
            <HomeCardsSection />
          </Suspense>
        </div>
      </div>

      <ImpactSection />

      <CTASection />
    </>
  )
}
