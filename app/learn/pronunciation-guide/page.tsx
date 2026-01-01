import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(
  "Balti Pronunciation Guide - Master Sounds & Accents",
  "Complete guide to Balti pronunciation including vowels, consonants, stress patterns, and regional variations from expert linguists.",
  { keywords: ["Balti pronunciation", "phonology", "accent guide", "how to pronounce Balti"] },
)

export default function PronunciationGuidePage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Balti Pronunciation Guide</h1>
        <p className="text-xl text-gray-300 mb-6">Master the Sounds of Baltistan</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">The Sound System of Balti</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Balti pronunciation is relatively phonetic, meaning words are pronounced as they are written. This guide will
          help you master the distinctive sounds that make Balti unique among Tibetic languages.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Vowels</h3>
        <p className="text-gray-300 mb-4">
          Balti has both short and long vowels. Long vowels are marked with a macron (ā, ē, ī, ō, ū) and are held
          roughly twice as long as short vowels:
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6 overflow-x-auto">
          <table className="w-full text-gray-300">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2">Short</th>
                <th className="text-left py-2">Sound</th>
                <th className="text-left py-2">Long</th>
                <th className="text-left py-2">Sound</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 font-mono">a</td>
                <td>as in "cat"</td>
                <td className="font-mono">ā</td>
                <td>longer "a" sound</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 font-mono">e</td>
                <td>as in "bed"</td>
                <td className="font-mono">ē</td>
                <td>longer "e" sound</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 font-mono">i</td>
                <td>as in "bit"</td>
                <td className="font-mono">ī</td>
                <td>longer "i" sound</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 font-mono">o</td>
                <td>as in "boat"</td>
                <td className="font-mono">ō</td>
                <td>longer "o" sound</td>
              </tr>
              <tr>
                <td className="py-2 font-mono">u</td>
                <td>as in "book"</td>
                <td className="font-mono">ū</td>
                <td>longer "u" sound</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Consonants & Digraphs</h3>
        <p className="text-gray-300 mb-4">
          Most Balti consonants are similar to English. The key differences involve these special sounds:
        </p>
        <ul className="space-y-3 text-gray-300 list-disc pl-6 mb-6">
          <li>
            <strong>ch</strong> - Always pronounced as in "chat", never as in "cheese"
          </li>
          <li>
            <strong>sh</strong> - As in "ship"
          </li>
          <li>
            <strong>zh</strong> - As in "measure" or "vision"
          </li>
          <li>
            <strong>ng</strong> - Velar nasal, as in "ring" (never as "ng" at the start of a word)
          </li>
          <li>
            <strong>th</strong> - Aspirated, similar to English "th" in "think"
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Stress & Intonation</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Balti is not a tonal language like Mandarin Chinese, but it does have stress patterns. Generally, stress falls
          on the first syllable of a word, though this can vary in compound words and phrases. Native speakers
          distinguish meaning through stress and vowel quality rather than pitch.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Common Words to Practice</h3>
        <div className="bg-gray-800 rounded-lg p-6">
          <table className="w-full text-gray-300">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3 font-mono">Balti</td>
                <td className="py-3">English</td>
                <td className="py-3">Note</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 font-mono">chho</td>
                <td>tea</td>
                <td>Note the "ch" sound</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 font-mono">zhimu</td>
                <td>mother</td>
                <td>zh = "measure" sound</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 font-mono">ngonpa</td>
                <td>long time ago</td>
                <td>ng = nasal ending</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 font-mono">shalma</td>
                <td>garlic</td>
                <td>sh = "ship" sound</td>
              </tr>
              <tr>
                <td className="py-2 font-mono">thukpa</td>
                <td>soup</td>
                <td>th = "think" sound</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4 mt-8 text-blue-400">Regional Pronunciation Variations</h3>
        <p className="text-gray-300 mb-6">
          Different regions of Baltistan have subtle pronunciation variations. The Skardu dialect is often considered
          the prestige standard, while Khaplu, Kargil, and Nubra Valley varieties have distinct phonological features.
          Check our Dialects section for more details.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Practice Tips</h3>
        <ul className="space-y-3 text-gray-300 list-disc pl-6">
          <li>Listen repeatedly to native speakers through our dictionary audio</li>
          <li>Record yourself speaking and compare with native pronunciation</li>
          <li>Focus on vowel length—many meaning distinctions depend on this</li>
          <li>Practice digraphs (ch, sh, zh, ng) separately until they feel natural</li>
          <li>Immerse yourself in Balti music and songs to develop your ear</li>
        </ul>
      </section>
    </main>
  )
}
