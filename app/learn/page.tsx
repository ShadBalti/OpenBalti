import { generateMetadata } from "@/lib/metadata"
import { getKeywordsFor } from "@/lib/seoKeywords"
import Link from "next/link"
import Image from "next/image"
import FAQSection from "@/components/FAQSection"

export const metadata = generateMetadata(
  "Learn Balti Language Online | OpenBalti – Balti Script, Grammar & Culture",
  "Master the Balti language with OpenBalti. Learn Balti script, grammar, common phrases, and expressions, and explore the rich culture and heritage of Baltistan. Start speaking Balti today!",
  { keywords: getKeywordsFor("learn") },
)

/**
 * Renders the main "Learn" page, which serves as a hub for all language learning resources.
 * It provides an introduction to the Balti language and links to detailed sections on script,
 * grammar, phrases, and dialects.
 *
 * @returns {JSX.Element} The rendered "Learn" page.
 */
export default function LearnPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="text-center py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/15 via-background to-primary/5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Learn Balti with <span className="text-primary">OpenBalti</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">Preserving our language through knowledge and technology.</p>
        <blockquote className="italic text-muted-foreground max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
          "Start your journey to learn the Balti language — from script and grammar to real expressions deeply rooted in
          the culture of Baltistan."
        </blockquote>
        <Link
          href="#categories"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition"
        >
          Start Learning →
        </Link>
      </section>

      {/* Quote Block */}
      <section className="text-center py-16 px-4 sm:px-6 lg:px-8">
        <blockquote className="max-w-2xl mx-auto border-l-4 border-primary pl-6 italic text-muted-foreground text-base md:text-lg leading-relaxed relative">
          "Every language carries a world within it — to learn Balti is to step into the soul of the mountains."
          <span className="block mt-4 text-primary font-semibold">— OpenBalti Community</span>
        </blockquote>
      </section>

      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Path to Learning Balti</h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Balti is one of the oldest surviving forms of the Tibetan language, with its own unique script, sounds, and
          grammar. Through OpenBalti, we aim to make it easy for learners to explore this heritage — step by step, from
          alphabets to fluent communication. You’ll not only learn how it’s spoken but also understand the stories and
          traditions interwoven with each word.
        </p>
      </section>

      {/* Lesson Categories Grid */}
      <section id="categories" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {[
          {
            icon: "✍️",
            title: "Balti Script (བལྟི)",
            desc: "Discover the original Tibetan-based Balti script and how each letter connects to sound and meaning.",
            link: "/learn/script",
          },
          {
            icon: "🗣️",
            title: "Pronunciation",
            desc: "Master the distinctive sounds of Balti with detailed guides on vowels, consonants, and regional variations.",
            link: "/learn/pronunciation-guide",
          },
          {
            icon: "🗺️",
            title: "Balti Dialects",
            desc: "Explore the regional variations and unique dialects of Balti spoken across Baltistan — each with its own tone and expression.",
            link: "/learn/dialects",
          },
          {
            icon: "🧱",
            title: "Grammar & Structure",
            desc: "Explore how Balti sentences are formed: nouns, verbs, tenses, and the natural rhythm of speech.",
            link: "/learn/grammar",
          },
          {
            icon: "💬",
            title: "Phrases & Usage",
            desc: "Practice common Balti expressions for greetings, travel, and emotions — with English translations.",
            link: "/learn/phrases",
          },
          {
            icon: "🏔️",
            title: "Culture & Heritage",
            desc: "Discover the traditions, customs, festivals, and cultural practices that shape the Balti people and their language.",
            link: "/learn/culture",
          },
        ].map(({ icon, title, desc, link }) => (
          <Link
            href={link}
            key={title}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
          >
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </Link>
        ))}
      </section>

      {/* Featured Lesson Section */}
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Lesson — Grammar Basics</h2>
          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Dive into the structure of Balti sentences — how subjects, verbs, and particles create balance and meaning.
            This lesson lays the foundation for understanding how Balti reflects thought and identity.
          </p>
          <Link
            href="/learn/grammar"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition"
          >
            Start Lesson →
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src="/balti-script.png"
            alt="Balti Script — Vowels & Consonants | OpenBalti"
            width={1200}
            height={700}
            priority
            className="rounded-lg shadow-lg object-contain"
          />
        </div>
      </section>

      {/* Comprehensive Learning Guides Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-secondary/30 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Comprehensive Learning Guides</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/learn/pronunciation-guide"
            className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
          >
            <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">Pronunciation Master Class</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Deep dive into Balti phonology with audio examples, stress patterns, and regional accent variations from
              expert linguists.
            </p>
            <span className="text-primary text-sm mt-4 inline-block group-hover:translate-x-1 transition-transform">Learn →</span>
          </Link>
          <Link
            href="/learn/complete-grammar"
            className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
          >
            <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">Complete Grammar Reference</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Master verb conjugation, word order, cases, and tenses with detailed explanations and practice sentences
              for every concept.
            </p>
            <span className="text-primary text-sm mt-4 inline-block group-hover:translate-x-1 transition-transform">Learn →</span>
          </Link>
          <Link href="/resources" className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 hover:shadow-md transition-all duration-300 group">
            <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">Learning Resources Hub</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Access all learning materials, community guides, FAQs, and connections with native speakers in one
              organized hub.
            </p>
            <span className="text-primary text-sm mt-4 inline-block group-hover:translate-x-1 transition-transform">Explore →</span>
          </Link>
        </div>
      </section>

      {/* Cultural Insight Section */}
      <section className="relative text-center py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50 overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Language Reflects Culture</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Every Balti word carries a story — of respect, kinship, and connection to the mountains and the divine.
            Through learning, we don't just preserve vocabulary; we sustain a living culture and worldview passed down
            through generations.
          </p>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">How You Can Learn & Contribute</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "📖",
              title: "Follow Lessons",
              desc: "Explore Balti step by step — from script to fluent expression, all in one place.",
            },
            {
              icon: "🧩",
              title: "Contribute Examples",
              desc: "Add real-world examples or cultural meanings to help enrich the learning experience.",
            },
            {
              icon: "🪶",
              title: "Share Knowledge",
              desc: "Share what you learn with others — your words might inspire someone to reconnect with their roots.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-card border border-border p-6 rounded-lg text-center hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-lg font-semibold mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ section */}
      <div className="mt-20">
        <FAQSection />
      </div>
    </main>
  )
}
