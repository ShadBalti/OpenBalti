import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"

export const metadata = generateMetadata(
  "Balti Learning Resources - Guides, Tools & Community",
  "Comprehensive collection of learning resources for Balti language including guides, tools, books, audio files, and community connections.",
  { keywords: ["Balti resources", "learning materials", "language tools", "community"] },
)

export default function ResourcesPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Resources</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of tools, guides, and community resources to support your Balti language learning
            journey.
          </p>
        </section>

        {/* Dictionary Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Dictionary & Reference</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">OpenBalti Dictionary</h3>
              <p className="text-muted-foreground mb-4">
                Browse our extensive collection of over 500 Balti words with English translations, pronunciations, and
                cultural context.
              </p>
              <Link href="/dictionary" className="text-primary hover:underline font-medium">
                Access Dictionary →
              </Link>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Word Details & History</h3>
              <p className="text-muted-foreground mb-4">
                Click on any word in the dictionary to view detailed information, pronunciation, examples, contributor credits, and editing history.
              </p>
              <Link href="/dictionary" className="text-primary hover:underline font-medium">
                Browse Dictionary →
              </Link>
            </div>
          </div>
        </section>

        {/* Learning Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Learning Guides</h2>
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <Link href="/blog/getting-started-with-balti" className="group">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">Getting Started with Balti</h3>
                <p className="text-muted-foreground">
                  Your comprehensive beginner's guide covering pronunciation, basic grammar, and first phrases.
                </p>
              </Link>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <Link href="/learn/script" className="group">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">Balti Script & Writing System</h3>
                <p className="text-muted-foreground">
                  Learn about historical Tibetan script (Yige) and modern Perso-Arabic/Latin transliteration systems.
                </p>
              </Link>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <Link href="/learn/grammar" className="group">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">Grammar Fundamentals</h3>
                <p className="text-muted-foreground">
                  Master the core grammar structures including nouns, verbs, adjectives, and sentence construction.
                </p>
              </Link>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <Link href="/learn/dialects" className="group">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">Balti Dialects Deep Dive</h3>
                <p className="text-muted-foreground">
                  Understand regional variations across Skardu, Khaplu, Kargil, and Nubra Valley dialects.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Cultural Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Cultural Learning</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Culture & Traditions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/learn/culture/balti-cap" className="hover:text-primary">
                    The Balti Cap (Natt)
                  </Link>
                </li>
                <li>
                  <Link href="/learn/culture/traditional-foods" className="hover:text-primary">
                    Traditional Foods & Cuisine
                  </Link>
                </li>
                <li>
                  <Link href="/learn/culture/festivals" className="hover:text-primary">
                    Festivals & Celebrations
                  </Link>
                </li>
                <li>
                  <Link href="/learn/culture/family-customs" className="hover:text-primary">
                    Family & Social Customs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Phrases for Real Life</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/learn/phrases/greetings" className="hover:text-primary">
                    Greetings & Etiquette
                  </Link>
                </li>
                <li>
                  <Link href="/learn/phrases/shopping" className="hover:text-primary">
                    Shopping & Bargaining
                  </Link>
                </li>
                <li>
                  <Link href="/learn/phrases/emotions" className="hover:text-primary">
                    Expressing Emotions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Community & Support</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Connect with Community</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Join fellow learners and native speakers to practice and share knowledge.
              </p>
              <Link href="/contributors" className="text-primary hover:underline text-sm font-medium">
                View Contributors →
              </Link>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Contribute</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Add words, corrections, and examples to help build the dictionary together.
              </p>
              <Link href="/contribute" className="text-primary hover:underline text-sm font-medium">
                Start Contributing →
              </Link>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Have questions or suggestions? We'd love to hear from you.
              </p>
              <Link href="/contact" className="text-primary hover:underline text-sm font-medium">
                Contact Us →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold group-open:text-primary">How long does it take to learn Balti?</summary>
              <p className="text-muted-foreground mt-4">
                Learning timeframes vary, but with consistent practice (15-30 minutes daily), you can start basic
                conversations within 2-3 months. Reaching fluency typically requires 1-2 years of dedicated study.
              </p>
            </details>
            <details className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold group-open:text-primary">
                What's the best way to practice pronunciation?
              </summary>
              <p className="text-muted-foreground mt-4">
                Hearing native speakers is key. Use the OpenBalti Dictionary to listen to pronunciations, watch Balti
                videos, listen to traditional music, and if possible, practice with native speakers in our community.
              </p>
            </details>
            <details className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold group-open:text-primary">
                Should I learn the historical Yige script or modern Perso-Arabic?
              </summary>
              <p className="text-muted-foreground mt-4">
                For beginners, Latin transliteration is most accessible. However, learning some Yige script is valuable
                for understanding historical texts. Our script guide covers both systems.
              </p>
            </details>
            <details className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold group-open:text-primary">
                Can I contribute even if I'm not a native speaker?
              </summary>
              <p className="text-muted-foreground mt-4">
                Learners, linguists, and anyone interested in Balti can contribute. All contributions are reviewed by
                native speakers and language experts before being added.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-muted-foreground mb-6">
            Begin your Balti journey today with our comprehensive resources and supportive community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog/getting-started-with-balti"
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90"
            >
              Read Getting Started Guide
            </Link>
            <Link
              href="/dictionary"
              className="inline-block bg-background border border-border px-6 py-2 rounded-lg hover:border-primary"
            >
              Browse Dictionary
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
