"use client"

import Link from "next/link"
import { BookOpen, Users, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-gradient">Preserve & Learn</span>
            <br />
            the <span className="text-blue-500">Balti Language</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join a global community preserving one of the world's most ancient Tibetan dialects through an open-source,
            community-driven dictionary.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/dictionary"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Explore Dictionary
            </Link>
            <Link
              href="/contribute"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition-all hover:scale-105 border border-gray-600 hover:border-gray-500"
            >
              Contribute Today
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-500" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span>Community Driven</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-500" />
              <span>Free Forever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
