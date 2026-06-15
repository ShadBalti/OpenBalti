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
      className="py-16 md:py-24 bg-gradient-to-b from-muted/50 via-background to-muted/50"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/30 rounded-full group hover:bg-primary/20 transition-colors">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Platform Features</span>
          </div>
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="block">Everything You Need</span>
            <span className="text-gradient">to Learn, Contribute & Preserve</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            OpenBalti combines powerful technology with community collaboration to create the most comprehensive Balti
            language resource. Whether you&apos;re learning, teaching, or contributing, we have the tools you need.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="group relative p-6 bg-gradient-to-br from-muted/50 to-muted/30 hover:from-primary/10 hover:to-muted/50 border border-border hover:border-primary/50 rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:animate-spin-slow" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
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
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Search className="w-4 h-4" />
              Explore Dictionary
            </a>
            <a
              href="/learn"
              className="inline-flex items-center gap-2 bg-transparent border border-primary/50 text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
