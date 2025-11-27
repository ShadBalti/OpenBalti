"use client"

import Link from "next/link"
import { BookOpen, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative px-4 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
          <Globe className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-300">Preserving Cultural Heritage</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-pretty">
          Preserve & Celebrate the{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Balti Language
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          OpenBalti is a free, community-driven digital dictionary dedicated to preserving the Balti language—a living
          cultural treasure spoken in Baltistan for centuries.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/dictionary"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            <BookOpen className="h-5 w-5" />
            Explore Dictionary
          </Link>
          <Link
            href="#why-choose"
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-700 transition-all duration-200"
          >
            Learn More
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 py-8 border-t border-gray-700">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-400">5,000+</div>
            <p className="text-sm text-gray-400">Words Documented</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-400">2,000+</div>
            <p className="text-sm text-gray-400">Community Members</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-400">50+</div>
            <p className="text-sm text-gray-400">Contributors</p>
          </div>
        </div>
      </div>
    </section>
  )
}
