"use client"

import Link from "next/link"
import { Users, BookOpen } from "lucide-react"

export function CTASection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contribute CTA */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 p-8 hover:border-blue-400/60 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Help Preserve Balti</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Join our community of contributors. Add new words, suggest corrections, and help document this precious
                language.
              </p>
              <Link
                href="/contribute"
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Contribute Now
              </Link>
            </div>
          </div>

          {/* Learn CTA */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 p-8 hover:border-cyan-400/60 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-cyan-500/30 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Start Learning</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Begin your Balti language journey with our comprehensive learning resources, examples, and community
                support.
              </p>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
