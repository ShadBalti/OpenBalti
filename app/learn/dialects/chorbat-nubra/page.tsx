import { generateMetadata } from "@/lib/metadata"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "Chorbat & Nubra Valley Dialect | OpenBalti",
  "Explore the Eastern Balti dialect spoken in Chorbat and Nubra Valley regions with their unique phonological characteristics.",
  { keywords: ["Chorbat dialect", "Nubra Valley", "Eastern Balti"] },
)

export default function ChorbatNubraDialectPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Chorbat & Nubra Valley Dialect</h1>
        <p className="text-xl text-gray-300 mb-6">Eastern Balti Variations</p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
          "The Eastern dialect carries the spirit of Ladakh's high valleys, with sounds shaped by altitude and
          geography."
        </blockquote>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">The Eastern Dialect</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The Eastern dialect of Balti is predominantly spoken in the <strong>Chorbat and Nubra Valley</strong>
          regions of Ladakh, India. This dialect occupies a unique geographic and linguistic position, representing a
          bridge between the western Baltistan dialects (Skardu, Khaplu) and the southern Kargil dialect. Despite
          geographic isolation in the Ladakh region, speakers maintain high mutual intelligibility with other Balti
          dialect speakers.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Geographic Context</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Chorbat and Nubra Valley are situated in the eastern reaches of Ladakh, separated from the main Baltistan
          heartland by the Karakoram range. Despite this geographic isolation, the dialect shows features bridging it
          with both Khaplu (Central) and Kargil (Southern) dialects, suggesting historical migration and cultural
          exchange patterns.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Phonological Features</h3>
        <p className="text-gray-300 mb-4">
          The Eastern dialect shares characteristics with both Central and Western dialects:
        </p>
        <ul className="space-y-3 text-gray-300 list-disc pl-6 mb-6">
          <li>
            Uses <strong>oma</strong> for milk (like Khaplu and Kargil, not like Skardu's <em>ona</em>)
          </li>
          <li>
            Shows <strong>braq</strong> for mountain (closer to Khaplu conservatism)
          </li>
          <li>
            Uses <strong>yan</strong> for "you" (like Khaplu, not the <em>yang</em> of Skardu)
          </li>
          <li>Pronunciation patterns show influences from both Eastern and Central dialect features</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Cultural & Social Context</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The Chorbat and Nubra Valley communities maintain strong cultural ties with both Baltistan and Kargil. The
          dialect reflects this position as a linguistic bridge, with borrowings and influences from Ladakhi, Hindi, and
          Urdu more prominent than in the western dialects due to greater contact with non-Balti communities in Ladakh.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Language Preservation Challenges</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Like other minority language communities, Chorbat and Nubra Valley Balti speakers face pressure from dominant
          regional languages. The younger generation increasingly uses Ladakhi and Hindi in daily life, making the
          preservation of the Eastern Balti dialect an important cultural priority. Recording and documenting this
          dialect variant is crucial for linguistic and cultural heritage preservation.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Learning the Eastern Dialect</h3>
        <p className="text-gray-300 leading-relaxed">
          If you're interested in the full spectrum of Balti dialects, the Eastern variant offers unique insights into
          how the language adapts to different geographic and cultural contexts. Listening to Eastern dialect speakers
          will expose you to vocabulary and pronunciation patterns not found in the more standardized Skardu or Khaplu
          forms.
        </p>
      </section>

      <LearnContinue
        title="Explore Other Dialects"
        links={[
          { label: "Kargil Dialect", href: "/learn/dialects/kargil" },
          { label: "Back to Dialects →", href: "/learn/dialects", variant: "secondary" },
        ]}
      />
    </main>
  )
}
