import { generateMetadata } from "@/lib/metadata"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "The Skardu Dialect: The Standard Prestige Accent | OpenBalti",
  "Explore the Skardu dialect, considered the prestige and standard form of Balti, spoken across western valleys of Baltistan.",
  { keywords: ["Skardu dialect", "prestige dialect", "Balti language"] },
)

export default function SkarduDialectPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">The Skardu Dialect</h1>
        <p className="text-xl text-gray-300 mb-6">The Standard Prestige Accent</p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
          "Skardu dialect sets the standard — polished, accessible, and the voice of Balti leadership."
        </blockquote>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">The Prestige Form of Balti</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The Skardu dialect is widely considered the <strong>prestige dialect</strong> of the Balti language. Spoken
          across Skardu, Shigar, and Rondu valleys, it has become the <em>de facto</em> standard for formal
          communication, education, and media in Baltistan. It's the dialect most likely to be used in official contexts
          and by speakers aiming for a more refined or educated tone.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Phonological Characteristics</h3>
        <p className="text-gray-300 mb-4">
          Unlike Khaplu, Skardu has undergone simplification of certain consonant clusters, particularly the
          dorso-velars:
        </p>
        <ul className="space-y-3 text-gray-300 list-disc pl-6 mb-6">
          <li>
            <strong>[tr-]</strong> instead of [kr-] — <em>tro</em> for wheat (retroflexed tongue-tip)
          </li>
          <li>
            <strong>[thr-]</strong> instead of [khr-] — <em>thrak</em> for blood
          </li>
          <li>
            <strong>[dr-]</strong> instead of [gr-] — <em>dri</em> for knife
          </li>
        </ul>
        <p className="text-gray-400 text-sm">
          These represent a sound shift where the back of the tongue (dorso-velar) shifted to a retroflex articulation
          at the hard palate.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Vocabulary & Usage</h3>
        <p className="text-gray-300 mb-4">Skardu dialect shows distinct vocabulary choices:</p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Milk:</strong> <em>ona</em> (unique to Western dialect)
            </li>
            <li>
              <strong>Mountain:</strong> <em>blaq</em> (simplified from older <em>braq</em>)
            </li>
            <li>
              <strong>You (singular):</strong> <em>yang</em> (with final -ng)
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Status & Influence</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          As the prestige dialect, Skardu exerts significant influence on how Balti is standardized in education and
          media. Younger speakers from other dialect regions often adopt Skardu features when speaking in formal
          settings or with speakers from outside their valley. This makes Skardu the most widely understood and
          accessible form of Balti across regions.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Learning Skardu</h3>
        <p className="text-gray-300 leading-relaxed">
          If you're beginning to learn Balti, starting with Skardu dialect is practical — it's the most documented, has
          the broadest acceptance across regions, and is the dialect most likely to be used in formal instruction.
          You'll find your Balti understood and appreciated across Baltistan when using Skardu forms.
        </p>
      </section>

      <LearnContinue
        title="Explore Other Dialects"
        links={[
          { label: "Khaplu Dialect", href: "/learn/dialects/khaplu" },
          { label: "Back to Dialects →", href: "/learn/dialects", variant: "secondary" },
        ]}
      />
    </main>
  )
}
