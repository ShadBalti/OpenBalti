"use client"

import { Search, Users, Lightbulb, MessageCircle, Trophy, BookMarked, Globe, Shield, Zap, History } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Intelligent Live Search",
    description:
      "Experience fast, smart search with advanced filtering by category, difficulty level, and dialect. Find exactly what you need with instant autocomplete suggestions and fuzzy matching for similar words.",
  },
  {
    icon: Users,
    title: "Community-Powered Content",
    description:
      "Every word is contributed, reviewed, and validated by our global community of native Balti speakers, linguists, and language enthusiasts. Join hundreds of contributors preserving our linguistic heritage.",
  },
  {
    icon: Lightbulb,
    title: "Rich Learning Resources",
    description:
      "Go beyond simple translations with comprehensive usage examples, cultural context, pronunciation guides, and detailed grammatical information for each word entry.",
  },
  {
    icon: MessageCircle,
    title: "Interactive Feedback System",
    description:
      "Rate entries as helpful, trusted, or needing review. Leave comments, suggest improvements, and help maintain accuracy through our community moderation system.",
  },
  {
    icon: Trophy,
    title: "Contributor Leaderboard",
    description:
      "Celebrate top contributors who are making a difference in language preservation. Earn recognition for your contributions and track your impact on the community.",
  },
  {
    icon: BookMarked,
    title: "Personal Favorites & Lists",
    description:
      "Save words to your favorites, create custom learning lists, and track your vocabulary progress. Build your personalized Balti vocabulary library.",
  },
  {
    icon: Globe,
    title: "Multiple Dialects Supported",
    description:
      "Explore regional variations from Skardu, Khaplu, Shigar, Rondu, Kharmang, and Kargil. Understand how Balti varies across different valleys and communities.",
  },
  {
    icon: Shield,
    title: "Verified & Trustworthy",
    description:
      "Our review system ensures accuracy and reliability. Words go through community verification, with clear indicators for verified, pending, and disputed entries.",
  },
  {
    icon: Zap,
    title: "Fast & Accessible",
    description:
      "Optimized for speed on any device. Works offline for saved words, supports screen readers, and follows accessibility best practices for inclusive learning.",
  },
  {
    icon: History,
    title: "Edit History & Transparency",
    description:
      "Track changes to any word with full edit history. See who contributed, what changed, and when — maintaining complete transparency in our collaborative dictionary.",
  },
]

export function FeaturesSection() {
  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Platform Features
          </span>
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to Learn, Contribute & Preserve
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            OpenBalti combines powerful technology with community collaboration to create the most comprehensive Balti
            language resource. Whether you're learning, teaching, or contributing, we have the tools you need.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="group p-6 bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700 hover:border-blue-500/50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-4 inline-flex p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Join thousands of users already using OpenBalti to preserve and learn the Balti language.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dictionary"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Search className="w-4 h-4" />
              Explore Dictionary
            </a>
            <a
              href="/learn"
              className="inline-flex items-center gap-2 bg-transparent border border-primary/50 text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              <BookMarked className="w-4 h-4" />
              Start Learning
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
