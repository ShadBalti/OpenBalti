import { generateMetadata } from "@/lib/metadata"
import { getKeywordsFor } from "@/lib/seoKeywords"
import Link from "next/link"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "Common Balti Phrases | Learn Balti | OpenBalti",
  "Explore useful Balti phrases guides including greetings, shopping tips, and emotional expressions with English translations.",
  { keywords: getKeywordsFor("learn/phrases") },
)

/**
 * Renders the page dedicated to teaching common Balti phrases.
 * The page is organized into categories such as greetings, travel, and emotions,
 * providing both the Balti phrase and its English translation.
 *
 * @returns {JSX.Element} The rendered phrases information page.
 */
export default function PhrasesPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Common Balti Phrases</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Learn how to speak like a native! These guides help you greet, travel, shop, and connect with others in
          everyday Balti.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Phrases Matter</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Phrases are the bridge between words and conversation. By learning expressions used in daily life, you'll
          quickly feel more confident speaking Balti in real situations.
        </p>
      </section>

      {/* Category: Phrase Guides */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-blue-400">Phrase Guides & Learning Resources</h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {[
            {
              icon: "👋",
              title: "Greetings & Etiquette",
              subtitle: "For Travelers",
              desc: "Master essential greetings, polite forms, and cultural etiquette for meeting Balti speakers and showing respect.",
              link: "/learn/phrases/greetings",
            },
            {
              icon: "🛍️",
              title: "Shopping & Bargaining",
              subtitle: "A Practical Guide",
              desc: "Learn the vocabulary and phrases for shopping in Balti markets, asking prices, and polite bargaining.",
              link: "/learn/phrases/shopping",
            },
            {
              icon: "💖",
              title: "Expressing Emotions",
              subtitle: "Connect on a Deeper Level",
              desc: "Discover how to express feelings, happiness, sadness, and deeper emotional connections in Balti.",
              link: "/learn/phrases/emotions",
            },
          ].map(({ icon, title, subtitle, desc, link }) => (
            <Link
              href={link}
              key={link}
              className="bg-gray-800 hover:bg-gray-750 rounded-2xl p-6 shadow-lg transition group"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-400">{title}</h3>
              <p className="text-sm text-blue-400 mb-3">{subtitle}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              <p className="text-blue-500 mt-4 text-sm font-medium">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Cultural Insight */}
      <section className="relative text-center py-20 px-6 bg-gray-950">
        <div
          className="absolute inset-0 bg-[url('/images/skardu-valley.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Cultural Insight</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Balti communication is full of warmth and humility. When you speak Balti, you're not just using words —
            you're sharing the respect, kindness, and deep human connection that defines Baltistan.
          </p>
        </div>
      </section>

      <LearnContinue
        title="Keep Exploring"
        links={[
          { label: "Balti Grammar", href: "/learn/grammar" },
          { label: "Balti Script →", href: "/learn/script", variant: "secondary" },
        ]}
      />
    </main>
  )
}
