import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"

export const metadata = generateMetadata(
  "Balti Culture & Traditions | Learn About Baltistan | OpenBalti",
  "Explore the rich culture and traditions of Baltistan. Learn about the history of the Balti cap, traditional foods, festivals, and customs that define the Balti people.",
  { keywords: ["Balti culture", "Baltistan traditions", "Balti heritage"] },
)

export default function CulturePage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Balti Culture & Traditions</h1>
        <p className="text-xl text-gray-300 mb-6">Explore the rich heritage and customs of the Balti people</p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto mb-8">
          "Culture is the soul of a people — in every tradition, every food, every word lies a story passed down through
          generations."
        </blockquote>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Living Heritage</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Balti culture is a vibrant tapestry woven from centuries of mountain life, Islamic faith, Tibetan heritage,
          and the unique geographical position of Baltistan. To truly understand the language, you must understand the
          culture that shaped it.
        </p>
      </section>

      {/* Culture Articles Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-blue-400">Explore Balti Culture</h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {[
            {
              icon: "🎩",
              title: "The Balti Cap (Natt)",
              subtitle: "A Symbol of Identity",
              desc: "Discover the history, craftsmanship, and cultural significance of the traditional Balti cap worn with pride across Baltistan.",
              link: "/learn/culture/balti-cap",
            },
            {
              icon: "🍚",
              title: "Traditional Balti Foods",
              subtitle: "Flavors of the Mountains",
              desc: "Explore the distinctive dishes of Baltistan — from hearty breads to warming soups — and their place in Balti life and hospitality.",
              link: "/learn/culture/traditional-foods",
            },
            {
              icon: "🎉",
              title: "Festivals & Celebrations",
              subtitle: "Marking Sacred & Secular Time",
              desc: "Learn about the major festivals and celebrations that shape the Balti calendar and bring communities together throughout the year.",
              link: "/learn/culture/festivals",
            },
            {
              icon: "👨‍👩‍👧‍👦",
              title: "Family & Social Customs",
              subtitle: "Bonds That Bind",
              desc: "Understand the importance of family, hospitality, and social customs that form the foundation of Balti society and values.",
              link: "/learn/culture/family-customs",
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
          className="absolute inset-0 bg-[url('/images/baltistan-valley.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Why Culture Matters</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Language without culture is just grammar and vocabulary. By learning about Balti traditions, food,
            celebrations, and values, you gain the context that brings the language alive. You'll understand not just
            what Balti people say, but why they say it and what it means in their lives.
          </p>
        </div>
      </section>
    </main>
  )
}
