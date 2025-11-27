"use client"

import { Search, Users, Zap, Award, Globe, BookMarked } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Advanced Search",
    description: "Find Balti words instantly with intelligent search, filters by dialect, and usage examples.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by native speakers and language enthusiasts committed to language preservation.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed on all devices. Search results in milliseconds, not seconds.",
  },
  {
    icon: Award,
    title: "Expert Curated",
    description: "All submissions reviewed by language experts to ensure accuracy and cultural authenticity.",
  },
  {
    icon: Globe,
    title: "Accessible Anywhere",
    description: "Free, open-source platform available globally. No paywalls, no restrictions.",
  },
  {
    icon: BookMarked,
    title: "Rich Content",
    description: "Each word includes pronunciation guides, usage examples, and cultural context.",
  },
]

export function FeaturesShowcase() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose OpenBalti?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to learn, preserve, and celebrate the Balti language
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 transition-all duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
