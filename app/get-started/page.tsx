import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"

export const metadata = generateMetadata(
  "Get Started Learning Balti - Your First Steps",
  "Begin your Balti language journey. From zero to first words in one comprehensive getting started guide with curated resources.",
  { keywords: ["get started", "first steps", "beginner guide", "how to learn Balti"] },
)

export default function GetStartedPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Started Learning Balti</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your complete guide to taking the first steps into the Balti language, with everything you need to begin
            speaking within weeks.
          </p>
        </section>

        {/* 5-Minute Quick Start */}
        <section className="mb-16 bg-primary/10 border border-primary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">5-Minute Quick Start</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-2">Learn to Say "Hello"</h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Julley</strong> (pronounced "joo-lay") means both "Hello" and
                  "Goodbye". This is your first word in Balti!
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-2">Master "How Are You?"</h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Skad kyid-po yin pe?</strong> This polite greeting shows respect
                  and opens doors in Balti culture.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-2">Say "I'm Well"</h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Ngas kyid-po yin</strong> is the natural response.
                  Congratulations—you can have your first exchange!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Path */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Your Step-by-Step Path</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📖</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Step 1: Understand the Sounds (Week 1)</h3>
                  <p className="text-muted-foreground mb-4">
                    Balti is mostly phonetic—once you learn how to pronounce it, reading becomes natural.
                  </p>
                  <Link href="/learn/pronunciation-guide" className="text-primary hover:underline font-medium text-sm">
                    Read Pronunciation Guide →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🗣️</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Step 2: Learn Essential Phrases (Weeks 1-2)</h3>
                  <p className="text-muted-foreground mb-4">
                    Master greetings, basic courtesies, and the most common words before diving into grammar.
                  </p>
                  <Link href="/learn/phrases/greetings" className="text-primary hover:underline font-medium text-sm">
                    Learn Essential Phrases →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🧱</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Step 3: Understand Grammar Basics (Weeks 2-4)</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn the fundamental structures that make Balti sentences work. Don't be intimidated—it's logical!
                  </p>
                  <Link href="/learn/complete-grammar" className="text-primary hover:underline font-medium text-sm">
                    Master Grammar Fundamentals →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📚</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Step 4: Expand Your Vocabulary (Ongoing)</h3>
                  <p className="text-muted-foreground mb-4">
                    Use the OpenBalti Dictionary to learn new words in context. Aim for 5-10 new words per day.
                  </p>
                  <Link href="/dictionary" className="text-primary hover:underline font-medium text-sm">
                    Browse Dictionary →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🎯</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Step 5: Practice Speaking (Ongoing)</h3>
                  <p className="text-muted-foreground mb-4">
                    Find language partners in our community or practice with native speakers. Speaking is the fastest
                    path to fluency.
                  </p>
                  <Link href="/contributors" className="text-primary hover:underline font-medium text-sm">
                    Join the Community →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">First Month</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Balti pronunciation and alphabet</li>
                <li>✓ 50-100 essential vocabulary words</li>
                <li>✓ Basic greetings and courtesies</li>
                <li>✓ Introduction to verb conjugation</li>
                <li>✓ How to introduce yourself</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">3-6 Months</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ 200+ vocabulary words</li>
                <li>✓ Comfortable with present/past tenses</li>
                <li>✓ Ability to ask basic questions</li>
                <li>✓ Understanding of Balti dialects</li>
                <li>✓ Hold simple 5-minute conversations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Essential Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Tools You'll Need</h2>
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div className="flex gap-4">
              <div className="text-2xl">📱</div>
              <div>
                <h3 className="font-semibold">OpenBalti Dictionary</h3>
                <p className="text-muted-foreground text-sm">
                  The most comprehensive free Balti-English dictionary with audio pronunciations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">📖</div>
              <div>
                <h3 className="font-semibold">Learning Resources</h3>
                <p className="text-muted-foreground text-sm">
                  Guides on pronunciation, grammar, culture, and phrases—all organized by proficiency level.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">👥</div>
              <div>
                <h3 className="font-semibold">Community</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with native speakers and other learners for practice and support.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🎵</div>
              <div>
                <h3 className="font-semibold">Music & Media</h3>
                <p className="text-muted-foreground text-sm">
                  Immerse yourself in Balti culture through folk songs, stories, and cultural traditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Common Questions</h2>
          <div className="space-y-4">
            <details className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold group-open:text-primary">
                How much time should I dedicate daily?
              </summary>
              <p className="text-muted-foreground mt-4">
                Start with 15-20 minutes daily. As you progress, you can increase to 30-45 minutes. Consistency is more
                important than duration.
              </p>
            </details>
            <details className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold group-open:text-primary">
                Do I need to learn the historical script?
              </summary>
              <p className="text-muted-foreground mt-4">
                No, not initially. Start with Latin transliteration for easy learning, then explore the historical
                Tibetan script (Yige) once you have a foundation.
              </p>
            </details>
            <details className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold group-open:text-primary">
                What if I make mistakes while speaking?
              </summary>
              <p className="text-muted-foreground mt-4">
                Mistakes are part of learning! Native speakers appreciate the effort and are usually very patient and
                helpful. Embrace the learning process.
              </p>
            </details>
            <details className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold group-open:text-primary">How do I find conversation partners?</summary>
              <p className="text-muted-foreground mt-4">
                Visit our Contributors and Community sections. We're building a global network of learners and native
                speakers eager to help.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            The best time to start learning Balti was yesterday. The second best time is now. Let's preserve this
            beautiful language together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/learn/pronunciation-guide"
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90"
            >
              Start with Pronunciation
            </Link>
            <Link
              href="/learning-roadmap"
              className="inline-block bg-background border border-border px-6 py-2 rounded-lg hover:border-primary"
            >
              View Full Roadmap
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
