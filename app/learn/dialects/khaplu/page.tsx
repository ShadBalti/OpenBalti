import { generateMetadata } from "@/lib/metadata"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "The Khaplu Dialect: Unique Sounds and Vocabulary | OpenBalti",
  "Discover the linguistic richness of the Khaplu dialect, known for preserving ancient Tibetan phonological features and dorso-velar pronunciations.",
  { keywords: ["Khaplu dialect", "Balti language", "Tibetan phonology"] },
)

export default function KhapluDialectPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">The Khaplu Dialect</h1>
        <p className="text-xl text-gray-300 mb-6">Unique Sounds and Vocabulary</p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
          "The Khaplu dialect is a linguistic time capsule, preserving sounds that echo across centuries of Tibetan
          heritage."
        </blockquote>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">The Most Conservative Dialect</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The Khaplu dialect stands out among all Balti dialects and, remarkably, among all known Tibetic languages for
          its extraordinary <strong>linguistic conservatism</strong>. It uniquely preserves phonological features from
          Classical Tibetan that have been lost or altered in virtually every other Tibetic language variety.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Distinctive Phonological Features</h3>
        <p className="text-gray-300 mb-4">
          The most striking feature of Khaplu is its preservation of <strong>dorso-velar consonants</strong>:
        </p>
        <ul className="space-y-3 text-gray-300 list-disc pl-6 mb-6">
          <li>
            <strong>[kr-]</strong> cluster as in <em>kro</em> (wheat) — pronounced with the back of the tongue against
            the soft palate
          </li>
          <li>
            <strong>[khr-]</strong> cluster as in <em>khrag</em> (blood) — an aspirated dorso-velar
          </li>
          <li>
            <strong>[gr-]</strong> cluster as in <em>gri</em> (knife) — a voiced dorso-velar
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Vocabulary Variations</h3>
        <p className="text-gray-300 mb-4">Khaplu speakers use distinct vocabulary in certain contexts:</p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Milk:</strong> <em>oma</em> (shared with Central and Eastern dialects)
            </li>
            <li>
              <strong>Mountain:</strong> <em>braq</em> (distinguished from Western <em>blaq</em>)
            </li>
            <li>
              <strong>You (singular):</strong> <em>yan</em> (different from Western <em>yang</em>)
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Cultural Significance</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The preservation of these ancient features in Khaplu makes it invaluable for linguistic research. Scholars
          studying the historical development of Tibetic languages often turn to Khaplu as a window into earlier
          linguistic stages. For speakers, the Khaplu dialect carries a sense of cultural pride and connection to
          pre-modern Tibetan civilization.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Learning Khaplu</h3>
        <p className="text-gray-300 leading-relaxed">
          If you're learning Balti and encounter Khaplu speakers, listen carefully to these distinctive pronunciations.
          The dorso-velar sounds may feel unfamiliar at first, but they represent authentic connections to the
          language's ancient roots. Many linguists argue that studying Khaplu provides the most authentic understanding
          of Balti's historical development.
        </p>
      </section>

      <LearnContinue
        title="Explore Other Dialects"
        links={[
          { label: "Skardu Dialect", href: "/learn/dialects/skardu" },
          { label: "Back to Dialects →", href: "/learn/dialects", variant: "secondary" },
        ]}
      />
    </main>
  )
}
