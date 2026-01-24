import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"

export const metadata = generateMetadata(
  "Why the Balti Language Matters: Preserving Cultural Identity",
  "Explore why preserving the Balti language is crucial for maintaining cultural identity, preventing linguistic loss, and honoring the heritage of Baltistan communities worldwide.",
  { keywords: ["language preservation", "Balti culture", "endangered languages", "cultural identity"] },
)

export default function WhyBaltiMattersPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-lg p-8 md:p-12 mb-8 border border-primary/20">
          <Link href="/blog" className="text-primary hover:underline mb-6 inline-block text-sm font-medium">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Why the Balti Language Matters: Preserving Cultural Identity
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm md:text-base">
            <span>📅 January 10, 2025</span>
            <span>•</span>
            <span>⏱️ 8 min read</span>
            <span>•</span>
            <span>🌍 Language Preservation</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-primary">
          <section className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h2 className="text-2xl font-bold mb-4">🚨 The Crisis of Linguistic Diversity</h2>
            <p className="text-foreground/85 mb-4">
              Every two weeks, a language dies somewhere in the world. By 2100, linguists estimate that half of the
              world's 7,000 languages will be extinct. The Balti language, spoken by approximately 100,000 people in the
              Baltistan region of the Karakoram, stands at a critical juncture. Yet this language is far more than just
              words and grammar—it is a living archive of history, culture, and identity.
            </p>
          </section>

          <section>
            <h2>Language as a Gateway to History</h2>
            <p>
              The Balti language carries within it centuries of Himalayan and Central Asian history. Words in Balti
              reveal trade routes, cultural influences from Tibet, Persia, and South Asia, and the migration patterns of
              ancient peoples. When a language dies, we lose access to how our ancestors understood the world, their
              values, and their relationships with the natural environment.
            </p>
            <p>
              Consider the Balti proverbs and idioms. They encode wisdom about living in one of the world's harshest
              environments, lessons about resilience, community cooperation, and sustainable resource management. This
              knowledge, accumulated over generations, cannot be fully translated into English or other dominant
              languages without losing its essence.
            </p>
          </section>

          <section>
            <h2>Cultural Identity and Community Cohesion</h2>
            <p>
              For Balti speakers scattered across Baltistan, Pakistan, India, and diaspora communities worldwide, the
              language is the primary symbol of group identity. It connects individuals to their heritage, their family,
              and their sense of belonging to a larger community. Language is how culture is transmitted, preserved, and
              celebrated.
            </p>
            <p>
              The pressure of globalization and the dominance of English, Urdu, and other languages has led many young
              Baltis to abandon their native language. A 2023 survey indicated that only 45% of Balti children under 15
              are fluent speakers of their heritage language. This intergenerational linguistic divide threatens not
              just the language itself, but the cohesion of Balti communities.
            </p>
          </section>

          <section>
            <h2>The Unique Linguistic Features of Balti</h2>
            <p>
              Balti is linguistically fascinating. It is a Sino-Tibetan language with influences from Persian, Arabic,
              and Sanskrit. Its phonological system, grammatical structure, and vocabulary offer insights into
              historical migrations and contact between civilizations. For linguists studying language evolution,
              contact linguistics, and historical reconstruction, Balti is an invaluable resource.
            </p>
            <p>
              The language also contains unique concepts and expressions that simply don't exist in English or other
              major languages. These untranslatable words often express ideas about nature, community, or spiritual
              concepts that are central to Balti worldview.
            </p>
          </section>

          <section>
            <h2>The Role of Technology in Language Preservation</h2>
            <p>
              Digital platforms like OpenBalti are crucial in the fight to preserve endangered languages. By creating
              accessible dictionaries, learning resources, and digital archives, we ensure that the Balti language is
              available to anyone interested in learning it, regardless of geographic location or access to native
              speakers.
            </p>
            <p>
              Technology also provides opportunities for innovation. Balti speakers can use social media, podcasts, and
              digital content creation to keep the language alive and relevant to younger generations, blending
              tradition with modernity.
            </p>
          </section>

          <section className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h2 className="text-2xl font-bold mb-4">💡 What Can We Do?</h2>
            <p className="text-foreground/85 mb-4 font-medium">Language preservation requires action at multiple levels:</p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <span><strong>Learn and Teach:</strong> If you're Balti, pass the language to your children. If you're not, learn about and support endangered languages.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <span><strong>Support Documentation:</strong> Contribute to projects like OpenBalti that create accessible learning materials.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <span><strong>Advocate for Education:</strong> Support policies that include Balti in school curricula in Baltistan.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <span><strong>Celebrate Culture:</strong> Participate in cultural events, consume Balti music and media, and share it with others.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <span><strong>Fund Research:</strong> Support academic research into Balti linguistics and history.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2>Conclusion: A Living Legacy</h2>
            <p>
              The Balti language is not merely a historical artifact—it is a living, breathing part of human
              civilization. Its preservation matters for cultural diversity, historical understanding, and the dignity
              of Balti communities. In supporting the Balti language, we support the rights of indigenous peoples to
              maintain their identity and pass their heritage to future generations.
            </p>
            <p>
              The question is not whether we can afford to preserve endangered languages like Balti. It's whether we can
              afford not to.
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-border">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold mb-2">Continue Your Balti Learning Journey</h3>
            <p className="text-muted-foreground mb-4">Interested in learning Balti? Start with our getting started guide or explore the dictionary.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog/getting-started-with-balti" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition">
                Getting Started Guide
              </Link>
              <Link href="/dictionary" className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary/10 transition">
                Browse Dictionary
              </Link>
            </div>
          </div>
          <Link href="/blog" className="text-primary hover:underline font-medium">
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </main>
  )
}
