import Link from "next/link"
import { BookOpen, Users, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden" aria-label="Hero section">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-primary/5 to-transparent"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
        <div className="absolute -bottom-20 left-0 w-96 h-96 bg-accent-2/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} aria-hidden="true"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent-3/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} aria-hidden="true"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="text-gradient animate-gradient-shift bg-gradient-to-r from-primary via-accent-2 to-primary">Preserve & Learn</span>
              <br />
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">the <span className="relative inline-block">
                <span className="text-primary">Balti Language</span>
                <span className="absolute -inset-1 bg-accent-3/20 rounded-lg blur -z-10 animate-pulse"></span>
              </span></span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Join a global community preserving one of the world's most ancient Tibetan dialects through an open-source,
            community-driven dictionary.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/dictionary"
              className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden"
              aria-label="Explore the Balti dictionary"
            >
              <span className="relative z-10">Explore Dictionary</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true"></span>
            </Link>
            <Link
              href="/contribute"
              className="group relative px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 border border-secondary/50 hover:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden"
              aria-label="Contribute to OpenBalti"
            >
              <span className="relative z-10">Contribute Today</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true"></span>
            </Link>
          </div>

          <div className="pt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <div className="group flex items-center gap-3 hover:text-primary transition-all duration-300 cursor-default hover:scale-110">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Globe className="h-5 w-5 text-primary group-hover:animate-spin-slow" aria-hidden="true" />
              </div>
              <span className="font-medium">Open Source</span>
            </div>
            <div className="group flex items-center gap-3 hover:text-primary transition-all duration-300 cursor-default hover:scale-110">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Users className="h-5 w-5 text-primary group-hover:animate-bounce" aria-hidden="true" />
              </div>
              <span className="font-medium">Community Driven</span>
            </div>
            <div className="group flex items-center gap-3 hover:text-primary transition-all duration-300 cursor-default hover:scale-110">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <BookOpen className="h-5 w-5 text-primary group-hover:animate-float" aria-hidden="true" />
              </div>
              <span className="font-medium">Free Forever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
