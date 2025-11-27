"use client"

import { Search, Users, Lightbulb, MessageCircle, Trophy, BookMarked } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Live Search",
    description: "Fast, intelligent search with tag-based filtering to find exactly what you need.",
  },
  {
    icon: Users,
    title: "Community Powered",
    description: "Every word is reviewed and validated by our global community of Balti speakers.",
  },
  {
    icon: Lightbulb,
    title: "Learn & Explore",
    description: "Discover cultural context, usage examples, and pronunciation guides for each word.",
  },
  {
    icon: MessageCircle,
    title: "Active Feedback",
    description: "Rate words as helpful, trusted, or needing review to improve the dictionary.",
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    description: "See top contributors and celebrate those preserving our language.",
  },
  {
    icon: BookMarked,
    title: "Favorites System",
    description: "Save your favorite words and build personalized learning lists.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to learn, contribute, and preserve the Balti language.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-6 bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700 hover:border-blue-500/50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-4 inline-flex p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
