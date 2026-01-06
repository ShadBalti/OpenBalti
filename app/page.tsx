import type { Metadata } from "next"
import { Suspense } from "react"
import { HomeCardsSection } from "@/components/home-cards-section"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ImpactSection } from "@/components/impact-section"
import { CTASection } from "@/components/cta-section"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
  const featuredBlogArticles = [
    {
      slug: "getting-started-with-balti",
      title: "Getting Started with Balti",
      excerpt: "A beginner's guide to Balti pronunciation, script, and essential phrases.",
      readTime: "8 min read",
      date: "January 15, 2025",
    },
    {
      slug: "why-balti-language-matters",
      title: "Why Balti Language Matters",
      excerpt: "Explore why preserving Balti is crucial for maintaining cultural identity.",
      readTime: "6 min read",
      date: "January 10, 2025",
    },
    {
      slug: "balti-dialects-explained",
      title: "Understanding Balti Dialects",
      excerpt: "Deep dive into regional variations across Skardu, Khaplu, Kargil, and Nubra.",
      readTime: "10 min read",
      date: "January 5, 2025",
    },
  ]

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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Dive into our collection of in-depth articles about Balti language preservation, learning guides, cultural
              traditions, and community stories from experts and native speakers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-10">
            {featuredBlogArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3 inline-block">
                    <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">Featured</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50 text-xs text-muted-foreground">
                    <time dateTime={article.date}>{article.date}</time>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary font-medium flex items-center justify-between transition-colors border-t border-border/50"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </article>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
            >
              <span>Learning Resources</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <ImpactSection />

      <CTASection />
    </>
  )
}
