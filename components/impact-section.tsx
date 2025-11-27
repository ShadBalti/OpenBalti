"use client"

import { Suspense } from "react"
import CommunityStats from "@/components/community-stats"

export function ImpactSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Community Impact</h2>
          <p className="text-lg text-muted-foreground">
            Real numbers showing how we're preserving the Balti language together.
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-12">Loading community stats...</div>}>
          <CommunityStats className="max-w-4xl mx-auto" />
        </Suspense>
      </div>
    </section>
  )
}
