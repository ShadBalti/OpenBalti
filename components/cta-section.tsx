"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600/20 via-transparent to-cyan-600/20 border-y border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Get Started</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">Ready to Preserve Balti?</h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a native speaker, student, researcher, or language enthusiast, your contribution matters.
            Start exploring the dictionary today or submit new words to help us grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/dictionary"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Browse Dictionary
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contribute"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition-all hover:scale-105 border border-gray-600 hover:border-gray-500"
            >
              Contribute Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
