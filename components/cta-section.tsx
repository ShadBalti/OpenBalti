import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section
      className="py-16 md:py-32 bg-gradient-to-br from-primary/25 via-transparent to-accent-2/15 border-y border-primary/30 relative overflow-hidden"
      aria-label="Call to action section"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-2/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} aria-hidden="true"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/40 rounded-full hover:bg-primary/20 transition-colors duration-300 group">
            <Sparkles className="h-4 w-4 text-primary group-hover:animate-spin-slow" aria-hidden="true" />
            <span className="text-sm text-primary font-semibold">Get Started Today</span>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Ready to <span className="text-gradient">Preserve Balti?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a native speaker, student, researcher, or language enthusiast, your contribution matters.
              Start exploring the dictionary today or submit new words to help us grow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link
              href="/dictionary"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden"
            >
              <span className="relative z-10">Browse Dictionary</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true"></span>
            </Link>
            <Link
              href="/contribute"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 border border-secondary/50 hover:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden"
            >
              <span className="relative z-10">Contribute Now</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
