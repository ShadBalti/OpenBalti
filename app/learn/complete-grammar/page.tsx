import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(
  "Complete Balti Grammar Guide - Structure, Tenses & Cases",
  "Comprehensive grammar reference covering word order, verb conjugation, noun cases, and complex sentence structures in Balti.",
  { keywords: ["Balti grammar", "language structure", "verb conjugation", "grammar rules"] },
)

export default function CompleteGrammarPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Complete Balti Grammar Guide</h1>
        <p className="text-xl text-gray-300 mb-6">Master the Structure of Balti Language</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">Word Order: The Foundation</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The most important thing to understand about Balti grammar is its word order. Unlike English
          (Subject-Verb-Object), Balti follows a Subject-Object-Verb (SOV) pattern. This affects how you construct
          sentences:
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <p className="text-gray-300 mb-4">
            <strong>English:</strong> "I drink tea" (S-V-O)
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Balti:</strong> "Ngas chho thuung-ngo" (I-tea-drink, S-O-V)
          </p>
          <p className="text-gray-300 text-sm">Breaking it down: "ngas" (I) + "chho" (tea) + "thuung-ngo" (drink)</p>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Nouns & Cases</h3>
        <p className="text-gray-300 mb-4">
          Balti nouns don't change form based on case like some languages, but postpositions (particles after nouns)
          show grammatical relationships:
        </p>
        <ul className="space-y-3 text-gray-300 list-disc pl-6 mb-6">
          <li>
            <strong>Nominative (Subject):</strong> The base form: "kho" (he)
          </li>
          <li>
            <strong>Agentive:</strong> Uses postposition "-s" or "-kyis": "khos" (by him)
          </li>
          <li>
            <strong>Dative (To/For):</strong> "-la": "khola" (to him)
          </li>
          <li>
            <strong>Locative (At/In):</strong> "-na": "khona" (at him/there)
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Verb Conjugation</h3>
        <p className="text-gray-300 mb-4">
          Verbs in Balti conjugate based on the subject. Let's use "to go" (dhrug) as an example:
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6 overflow-x-auto">
          <table className="w-full text-gray-300">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3">Present Tense</td>
                <td className="py-3 font-mono">Balti</td>
                <td className="py-3">English</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">I go</td>
                <td className="py-2 font-mono">ngas dhrug-ngo</td>
                <td className="py-2">lit. "I go-I"</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">You go</td>
                <td className="py-2 font-mono">khyod dhrug-ngo</td>
                <td className="py-2">lit. "You go-you"</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">He/She goes</td>
                <td className="py-2 font-mono">kho dhrug-ngo</td>
                <td className="py-2">lit. "He/She go-he/she"</td>
              </tr>
              <tr>
                <td className="py-2">We go</td>
                <td className="py-2 font-mono">ngantso dhrug-ngo</td>
                <td className="py-2">lit. "We go-we"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Tenses</h3>
        <p className="text-gray-300 mb-4">
          Balti expresses tense through verb endings and auxiliary words. The main tenses are:
        </p>
        <ul className="space-y-3 text-gray-300 list-disc pl-6 mb-6">
          <li>
            <strong>Present:</strong> "-ngo" or "-no": "thuung-ngo" (I drink)
          </li>
          <li>
            <strong>Past:</strong> "-song" or "-tung": "thuung-song" (I drank)
          </li>
          <li>
            <strong>Future:</strong> "-gi-red" or "-go-red": "thuung-gi-red" (I will drink)
          </li>
          <li>
            <strong>Habitual:</strong> "-du": "thuung-du" (I usually/regularly drink)
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Adjectives</h3>
        <p className="text-gray-300 mb-6">
          Adjectives in Balti precede the noun they modify and don't change form based on gender or number. Example:
          "chhen-po khang" (big house) - the adjective "chhen-po" stays the same even if referring to multiple houses.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Negation</h3>
        <p className="text-gray-300 mb-4">
          To negate, use "ma" before the verb: "ngas chho ma-thuung-ngo" (I don't drink tea)
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Questions</h3>
        <p className="text-gray-300 mb-6">
          Form questions by using question particles. "Skad kyid-po yin pe?" (How are you?) - the "pe" at the end makes
          it a question. You can also simply raise your intonation at the end of a statement to ask a question.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Common Grammatical Patterns</h3>
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-blue-300 font-semibold mb-3">Possession</h4>
            <p className="text-gray-300 mb-3">
              Use the postposition "-po" (of): "khone po khang" (his house) - literally "his of house"
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-blue-300 font-semibold mb-3">Location</h4>
            <p className="text-gray-300 mb-3">
              Use postposition "-na" (in/at) or "-ro" (on): "khona" (in/at him), "table-ro" (on the table)
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-blue-300 font-semibold mb-3">Purpose/Direction</h4>
            <p className="text-gray-300 mb-3">Use "-la" or "-gir": "Skardo-la dhrug-song" (I went to Skardu)</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 mt-8 text-blue-400">Practice Sentences</h3>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="space-y-4 text-gray-300">
            <div>
              <p className="font-mono">Ngas kule-na yik-song</p>
              <p className="text-sm text-gray-400">I studied at school (literally: I school-at studied)</p>
            </div>
            <div>
              <p className="font-mono">Khone po phomo chhen-po yin</p>
              <p className="text-sm text-gray-400">His daughter is tall</p>
            </div>
            <div>
              <p className="font-mono">Ngas kha-la ma-go yin-pe?</p>
              <p className="text-sm text-gray-400">Don't I like/want the food? (question)</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
