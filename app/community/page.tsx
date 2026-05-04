"use client"

import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import CommunityHeroStats from "@/components/community/community-hero-stats"
import LiveFeed from "@/components/community/live-feed"
import TrendingContent from "@/components/community/trending-content"
import CommunityLeaderboards from "@/components/community/community-leaderboards"
import ContributionActions from "@/components/community/contribution-actions"
import ShareWidget from "@/components/community/share-widget"
import WordOfDay from "@/components/word-of-day"

/**
 * Community Page - Showcases community activity, engagement, and leaderboards
 */
export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container py-8 md:py-12">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Community
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Join thousands of contributors preserving and growing the Balti language. 
                See live activity, trending contributions, and celebrate our community&apos;s achievements.
              </p>
            </div>

            {/* Hero Stats */}
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-32 w-full" />
                  ))}
                </div>
              }
            >
              <CommunityHeroStats />
            </Suspense>
          </div>

          {/* Word of the Day */}
          <Suspense fallback={<Skeleton className="h-96 w-full" />}>
            <div className="max-w-2xl">
              <WordOfDay compact={true} />
            </div>
          </Suspense>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Live Feed + Leaderboards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Live Feed */}
              <Suspense
                fallback={
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <Skeleton key={i} className="h-24 w-full" />
                    ))}
                  </div>
                }
              >
                <LiveFeed limit={15} />
              </Suspense>

              {/* Leaderboards */}
              <Suspense
                fallback={
                  <div className="space-y-4">
                    {[...Array(8)].map((_, i) => (
                      <Skeleton key={i} className="h-20 w-full" />
                    ))}
                  </div>
                }
              >
                <CommunityLeaderboards limit={10} />
              </Suspense>
            </div>

            {/* Right Column: Trending + Actions */}
            <div className="space-y-6">
              {/* Trending Content */}
              <Suspense
                fallback={
                  <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-20 w-full" />
                    ))}
                  </div>
                }
              >
                <TrendingContent limit={8} />
              </Suspense>

              {/* Contribution Actions */}
              <Suspense fallback={<Skeleton className="h-48 w-full" />}>
                <ContributionActions />
              </Suspense>

              {/* Share Widget */}
              <Suspense fallback={<Skeleton className="h-48 w-full" />}>
                <ShareWidget
                  title="Join OpenBalti Community"
                  description="Help preserve the Balti language and connect with the community"
                />
              </Suspense>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-8 md:p-12 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Make an Impact?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our community of language enthusiasts and contribute to preserving Balti 
              language and culture for generations to come.
            </p>
            <a
              href="/contribute"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Start Contributing
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
