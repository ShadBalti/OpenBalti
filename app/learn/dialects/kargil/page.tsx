import { generateMetadata } from "@/lib/metadata"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "Understanding the Kargil Dialect | OpenBalti",
  "Explore the Kargil dialect, the Southern form of Balti spoken in Upper Kharmang and Kargil regions of Ladakh.",
  { keywords: ["Kargil dialect", "Southern Balti", "Upper Kharmang"] },
)

export default function KargilDialectPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">The Kargil Dialect</h1>
        <p className="text-xl text-gray-300 mb-6">Understanding Southern Balti</p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
          "The Kargil dialect speaks with the voice of Ladakh's southern hills, carrying centuries of trade route
          echoes."
        </blockquote>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">The Southern Dialect</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The Kargil dialect represents the <strong>southern variety</strong> of Balti, spoken in
          <em>Upper Kharmang</em> and the <em>Kargil</em> region of Ladakh, India. This dialect occupies a distinct
          linguistic position, showing some shared features with other dialects while maintaining its own unique
          characteristics shaped by geography, trade history, and cultural contact with neighboring Ladakhi and Drokpa
          communities.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Geographic & Historical Context</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Kargil is historically significant as a major trade hub on ancient Silk Route branches, giving the dialect
          unique exposure to multiple language influences. The speakers of Kargil Balti have maintained distinct
          cultural practices and a sense of linguistic identity that sets them apart, even as they remain mutually
          intelligible with speakers from Skardu, Khaplu, and other valleys.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Distinctive Phonological Features</h3>
        <p className="text-gray-300 mb-4">The Kargil dialect exhibits some unique features in its consonant systems:</p>
        <ul className="space-y-3 text-gray-300 list-disc pl-6 mb-6">
          <li>
            Uses <strong>juq</strong> instead of <em>yuq</em> for "keep" — showing a j/y distinction
          </li>
          <li>
            Retains <strong>oma</strong> for milk (shared with Central and Eastern dialects)
          </li>
          <li>
            Shows <strong>braq</strong> for mountain (like Khaplu and Eastern dialects)
          </li>
          <li>
            Uses <strong>yan</strong> for "you" (shared with Khaplu and Eastern)
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Vocabulary & Loanwords</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Due to its position on historic trade routes and contact with Ladakhi and Drokpa speakers, the Kargil dialect
          contains more loanwords from Ladakhi and Drokpa than other Balti dialects. These linguistic borrowings reflect
          centuries of commercial and cultural interaction in the Kargil region, making it linguistically unique among
          Balti dialect variants.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Cultural Identity</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Kargil speakers maintain a strong sense of distinct cultural identity. Their unique traditions in music,
          cuisine, and social customs are reflected in dialect-specific vocabulary and expressions. The Kargil Balti
          community has a rich heritage of oral literature and poetry that showcases the poetic potential of their
          dialect variant.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Modern Language Situation</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Like all minority language communities, Kargil Balti speakers face challenges from dominant regional
          languages. However, the community's strong cultural identity and the historical significance of Kargil as a
          Balti center means efforts to preserve and document the dialect are particularly important. Audio recordings
          and written materials in Kargil Balti are valuable for linguistic research and community pride.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Learning Kargil Balti</h3>
        <p className="text-gray-300 leading-relaxed">
          Exploring the Kargil dialect offers insights into how Balti adapts across different historical and cultural
          contexts. The unique vocabulary and pronunciation patterns make it a fascinating variant to study,
          particularly if you're interested in understanding how trade and migration have shaped linguistic development
          across the Balti-speaking world.
        </p>
      </section>

      <LearnContinue
        title="Explore Other Dialects"
        links={[
          { label: "Chorbat & Nubra Valley", href: "/learn/dialects/chorbat-nubra" },
          { label: "Back to Dialects →", href: "/learn/dialects", variant: "secondary" },
        ]}
      />
    </main>
  )
}
