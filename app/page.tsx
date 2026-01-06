import type { Metadata } from "next"
import { Suspense } from "react"
import { HomeCardsSection } from "@/components/home-cards-section"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ImpactSection } from "@/components/impact-section"
import { CTASection } from "@/components/cta-section"
import Link from "next/link"

export const metadata: Metadata = {
  title: "OpenBalti – Free Balti to English Dictionary & Language Learning",
  description:
    "Explore the OpenBalti free dictionary for Balti language learning. Search thousands of Balti words, learn pronunciation, phrases, grammar, and contribute to preserving this endangered Tibetan dialect spoken in Baltistan and Ladakh.",
  keywords: [
    "Balti dictionary",
    "Balti language",
    "learn Balti",
    "Tibetan dialect",
    "English Balti translation",
    "language learning",
    "Balti phrases",
    "Balti grammar",
  ],
  openGraph: {
    title: "OpenBalti – Preserve & Learn the Balti Language",
    description:
      "Join our community in preserving the ancient Balti language through an open-source, free dictionary. Learn phrases, grammar, culture, and dialects.",
    type: "website",
    url: "https://openbalti.com",
  },
  alternates: {
    canonical: "https://openbalti.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
}

/**
 * Homepage with hero section, features, community impact, and navigation cards.
 * Optimized for SEO with semantic structure, proper heading hierarchy, and rich structured data.
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

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Discover articles about Balti language learning, cultural preservation, and community stories.
          </p>
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Link
              href="/blog/getting-started-with-balti"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold mb-2 hover:text-primary">Getting Started with Balti</h3>
              <p className="text-sm text-muted-foreground">
                A beginner's guide to Balti pronunciation, script, and essential phrases.
              </p>
            </Link>
            <Link
              href="/blog"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold mb-2 hover:text-primary">Why Balti Language Matters</h3>
              <p className="text-sm text-muted-foreground">
                Explore why preserving Balti is crucial for maintaining cultural identity.
              </p>
            </Link>
            <Link
              href="/blog"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold mb-2 hover:text-primary">Balti Dialects Explained</h3>
              <p className="text-sm text-muted-foreground">
                Deep dive into regional variations across Skardu, Khaplu, Kargil, and Nubra.
              </p>
            </Link>
          </div>
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Read All Articles
          </Link>
        </div>
      </section>

      <ImpactSection />

      <CTASection />
    </>
  )
}
