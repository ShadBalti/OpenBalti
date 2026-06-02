"use client"

import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import CommunityHeroStats from "@/components/community/community-hero-stats"

// Prevent static prerendering - this page uses dynamic data fetching
export const dynamic = "force-dynamic"
import LiveFeed from "@/components/community/live-feed"
import TrendingContent from "@/components/community/trending-content"
import CommunityLeaderboards from "@/components/community/community-leaderboards"
import ContributionActions from "@/components/community/contribution-actions"
import ShareWidget from "@/components/community/share-widget"
import WordOfDay from "@/components/word-of-day"
import WordActivitySection from "@/components/community/word-activity-section"
import JoinUsers from "@/components/community/join-users"

/**
 * Community Page - Showcases community activity, engagement, and leaderboards
 */
export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container py-8 md:py-12">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-8 border-b border-border pb-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Community Hub</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Together We Thrive
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Join thousands of contributors preserving and growing the Balti language. 
                See live activity, trending contributions, and celebrate our community&apos;s achievements.
              </p>
            </div>

            {/* Hero Stats */}
            <Suspense
              fallback={
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-40 w-full" />
                    ))}
                  </div>
                </div>
              }
            >
              <CommunityHeroStats />
            </Suspense>
          </div>

          {/* Join Users Section */}
          <Suspense fallback={<Skeleton className="h-96 w-full" />}>
            <JoinUsers limit={12} />
          </Suspense>

          {/* Word of the Day */}
          <Suspense fallback={<Skeleton className="h-96 w-full" />}>
            <div className="max-w-2xl">
              <WordOfDay compact={true} />
            </div>
          </Suspense>

          {/* Main Content Grid */}
          <div className="border-t border-border pt-8">
            <h2 className="text-3xl font-bold mb-8">Community Highlights</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

              {/* Word Activity */}
              <Suspense
                fallback={
                  <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-24 w-full" />
                    ))}
                  </div>
                }
              >
                <WordActivitySection limit={10} timeframe="week" />
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
          <div className="border-t border-border pt-12 mt-8">
            <div className="rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/30 p-8 md:p-16 text-center space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Ready to Make an Impact?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join our community of language enthusiasts and contribute to preserving Balti 
                  language and culture for generations to come.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contribute"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30"
                >
                  Start Contributing
                </a>
                <a
                  href="/community/members"
                  className="px-8 py-3 bg-card border border-border rounded-lg font-medium hover:border-primary/50 hover:shadow-md transition-all"
                >
                  View All Members
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
