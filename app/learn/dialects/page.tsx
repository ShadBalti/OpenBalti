import { generateMetadata } from "@/lib/metadata"
import { getKeywordsFor } from "@/lib/seoKeywords"
import Link from "next/link"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "Balti Dialects | Learn Balti Language | OpenBalti",
  "Explore the regional dialects of the Balti language spoken across Baltistan and Ladakh. Learn how pronunciation, vocabulary, and accent vary between Skardu, Khaplu, Shigar, Rondu, Kharmang, Chorbat, and Kargil.",
  { keywords: getKeywordsFor("learn/dialectal") },
)

export default function DialectsPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Balti Dialects & Regional Variations</h1>
        <p className="text-xl text-gray-300 mb-6">
          Discover how Balti sounds, words, and accents vary across the mountains — from Skardu to Kargil, Khaplu to
          Nubra.
        </p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto mb-8">
          "While all Baltis understand one another, every valley has its own melody."
        </blockquote>
      </section>

      {/* Overview Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">A Language with Many Voices</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          The Balti language, a member of the <strong>Tibetic language family</strong>, is characterized by several
          regional variations or dialects. While these dialects are generally considered{" "}
          <strong>mutually intelligible</strong>, they exhibit observable differences in <em>phonology, accent,</em> and{" "}
          <em>vocabulary</em>.
        </p>
      </section>

      {/* Dialectal Divisions Overview */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Major Dialectal Divisions</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The Balti language encompasses <strong>four principal dialects</strong> reflecting regional linguistic nuances
          and variations between valleys and even villages:
        </p>
        <ul className="space-y-4 text-gray-300 list-disc pl-6">
          <li>
            <strong>Eastern Dialect:</strong> Predominantly spoken in the <em>Chorbat and Nubra Valley</em> regions of
            Ladakh.
          </li>
          <li>
            <strong>Central Dialect:</strong> Found in the <em>Khaplu Valley</em>.
          </li>
          <li>
            <strong>Western Dialects:</strong> Spoken across <em>Skardu, Shigar,</em> and <em>Rondu</em>. The{" "}
            <strong>Skardu dialect</strong> is often considered the
            <em> prestige dialect</em> of Balti.
          </li>
          <li>
            <strong>Southern Dialect:</strong> Prevalent in <em>Upper Kharmang</em> and <em>Kargil</em> in Ladakh.
          </li>
        </ul>
        <p className="text-gray-400 text-sm mt-4">
          The Khaplu and Skardu dialects are very similar overall, with accent being the main point of difference.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-blue-400">Explore Individual Dialects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {[
            {
              title: "The Khaplu Dialect",
              subtitle: "Unique Sounds and Vocabulary",
              desc: "Discover the linguistic richness of the Khaplu dialect, known for preserving ancient Tibetan phonological features.",
              link: "/learn/dialects/khaplu",
            },
            {
              title: "The Skardu Dialect",
              subtitle: "The Standard Prestige Accent",
              desc: "Explore the dialect considered the standard and prestige form of Balti, spoken across the western valleys.",
              link: "/learn/dialects/skardu",
            },
            {
              title: "Chorbat & Nubra Valley",
              subtitle: "Eastern Balti Variations",
              desc: "Learn about the Eastern dialect spoken in Chorbat and Nubra Valley regions with their unique characteristics.",
              link: "/learn/dialects/chorbat-nubra",
            },
            {
              title: "The Kargil Dialect",
              subtitle: "Understanding Southern Balti",
              desc: "Explore the southern dialect of Kargil and Upper Kharmang regions with their distinctive features.",
              link: "/learn/dialects/kargil",
            },
          ].map(({ title, subtitle, desc, link }) => (
            <Link
              href={link}
              key={link}
              className="bg-gray-800 hover:bg-gray-750 rounded-2xl p-6 shadow-lg transition group"
            >
              <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-400">{title}</h3>
              <p className="text-sm text-blue-400 mb-3">{subtitle}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              <p className="text-blue-500 mt-4 text-sm font-medium">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="text-center py-20 px-6 bg-gray-950">
        <h2 className="text-3xl font-semibold mb-4">The Beauty of Variation</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Each dialect of Balti reflects centuries of cultural evolution — a voice shaped by mountains, valleys, and
          shared identity. Learning these variations helps preserve not only words, but the spirit of Baltistan itself.
        </p>
      </section>

      <LearnContinue
        title="Keep Exploring"
        links={[
          { label: "Culture & Traditions", href: "/learn/culture" },
          { label: "Common Phrases →", href: "/learn/phrases", variant: "secondary" },
        ]}
      />
    </main>
  )
}
