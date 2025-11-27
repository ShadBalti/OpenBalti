"use client"

import CommunityStats from "@/components/community-stats"

export function StatsSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-gray-900/50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
          <p className="text-gray-400 text-lg">Real progress in preserving the Balti language, one word at a time</p>
        </div>

        <CommunityStats />
      </div>
    </section>
  )
}
