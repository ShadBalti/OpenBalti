import Link from "next/link"
import { BookOpen, Users, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden" aria-label="Hero section">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true"></div>
        <div
          className="absolute -bottom-20 left-0 w-96 h-96 bg-info/10 rounded-full blur-3xl"
          aria-hidden="true"
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-gradient">Preserve & Learn</span>
            <br />
            the <span className="text-primary">Balti Language</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join a global community preserving one of the world's most ancient Tibetan dialects through an open-source,
            community-driven dictionary.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/dictionary"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Explore the Balti dictionary"
            >
              Explore Dictionary
            </Link>
            <Link
              href="/contribute"
              className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full transition-all duration-200 hover:scale-105 border border-secondary/50 hover:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Contribute to OpenBalti"
            >
              Contribute Today
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
              <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
              <Users className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>Community Driven</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
              <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>Free Forever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
