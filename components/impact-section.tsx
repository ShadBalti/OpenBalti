import { Suspense } from "react"
import CommunityStats from "@/components/community-stats"

export function ImpactSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden" aria-label="Community impact section">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-3/10 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-success/10 border border-success/30">
            <span className="text-sm font-medium text-success">Making an Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Our Community Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real numbers showing how we&apos;re preserving the Balti language together. Every contribution counts.
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-12 animate-pulse">
          <div className="inline-block px-4 py-3 rounded-lg bg-muted/30 text-muted-foreground">Loading community stats...</div>
        </div>}>
          <CommunityStats className="max-w-4xl mx-auto" />
        </Suspense>
      </div>
    </section>
  )
}
