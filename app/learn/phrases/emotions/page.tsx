import { generateMetadata } from "@/lib/metadata"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "Expressing Emotions in Balti | OpenBalti",
  "Discover how to express feelings, happiness, sadness, and deeper emotional connections in Balti.",
  { keywords: ["Balti emotions", "Balti feelings", "Balti expressions"] },
)

export default function EmotionsPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Expressing Emotions in Balti</h1>
        <p className="text-xl text-gray-300 mb-6">Connect on a Deeper Level</p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
          "Language is at its most beautiful when it expresses the full spectrum of human emotion."
        </blockquote>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">Positive Emotions</h2>

        <div className="space-y-8">
          {[
            {
              balti: "ང་འཇགས་པ་ཡིན། (Nga jagpa yin)",
              eng: "I'm happy.",
              note: "Expression of joy and contentment",
            },
            {
              balti: "ང་རབ་བཞིན་བདེ་པོ་ཡིན། (Nga rab-shin depo yin)",
              eng: "I'm feeling great!",
              note: "Strong expression of happiness",
            },
            {
              balti: "དེ་ངེད་ལ་དགའ་པོ་ཡིན། (De nged la ga-po yin)",
              eng: "We like that.",
              note: "Expressing pleasure about something",
            },
            {
              balti: "ཁྱེད་ཡིན་ན་ང་གདེང་སེང་། (Khyed yin na nga gdeng-seng)",
              eng: "Because of you, I'm proud/honored.",
              note: "Expressing gratitude and positive feeling toward someone",
            },
          ].map(({ balti, eng, note }) => (
            <div key={balti} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-lg font-semibold mb-2">{balti}</p>
              <p className="text-gray-300 italic mb-2">{eng}</p>
              <p className="text-gray-400 text-sm">{note}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-blue-400 mt-12">Difficult Emotions</h2>

        <div className="space-y-8">
          {[
            {
              balti: "ང་སྐྱོ་བ་ཡིན། (Nga skyo-wa yin)",
              eng: "I'm sad.",
              note: "Expression of sadness or melancholy",
            },
            {
              balti: "ང་ཁོང་ཁྲོ་ཡིན། (Nga khong khro yin)",
              eng: "I'm angry.",
              note: "Expression of anger or frustration",
            },
            {
              balti: "ང་མི་དེང་། (Nga mi deng)",
              eng: "I'm not comfortable / I don't like it.",
              note: "Polite way to express discomfort",
            },
            {
              balti: "ང་འཇགས་སྐུ་ཅིག་ཡིན། (Nga jag-sku chig yin)",
              eng: "I'm a bit worried/afraid.",
              note: "Expressing anxiety or concern",
            },
          ].map(({ balti, eng, note }) => (
            <div key={balti} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-lg font-semibold mb-2">{balti}</p>
              <p className="text-gray-300 italic mb-2">{eng}</p>
              <p className="text-gray-400 text-sm">{note}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-blue-400 mt-12">Deep Emotional Connections</h2>

        <div className="space-y-8">
          {[
            {
              balti: "ཁྱེད་ལ་ང་ལྷག་མེད། (Khyed la nga lhag med)",
              eng: "I love you.",
              note: "Deep expression of love and affection",
            },
            {
              balti: "ང་འདུག་གིས་འཛིན་ཡོད། (Nga dug gis dzin yod)",
              eng: "I miss you.",
              note: "Expression of longing for someone",
            },
            {
              balti: "ཁྱེད་གིས་ང་བསྐྱབ་པའི་དགའ་ཞིང་ཐུགས་རྗེ་ཡིན། (Khyed gis nga bskya ba'i ga zhing thug-rje yin)",
              eng: "I'm grateful and happy that you helped me.",
              note: "Expressing deep gratitude and appreciation",
            },
            {
              balti: "ང་ཁྱེད་དང་དུས་མཚུངས་སུ་ཡིན་ན་བདེ་པོ་ཡིན། (Nga khyed dang dus-tsung su yin na depo yin)",
              eng: "I'm happy when I'm with you.",
              note: "Expressing joy in someone's company",
            },
          ].map(({ balti, eng, note }) => (
            <div key={balti} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-lg font-semibold mb-2">{balti}</p>
              <p className="text-gray-300 italic mb-2">{eng}</p>
              <p className="text-gray-400 text-sm">{note}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-blue-400 mt-12">Emotional Nuance in Balti Culture</h2>

        <div className="bg-gray-800 p-6 rounded-lg space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Humility in Expression</h3>
            <p className="text-gray-300">
              Balti culture values humility and indirect expression of strong emotions. Dramatic expressions of emotion
              are less common than in some Western cultures — emotions are often communicated through subtle hints and
              shared understanding.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Community Over Individual</h3>
            <p className="text-gray-300">
              Emotions are often framed in relation to family, community, and shared experience rather than purely
              individual feelings. Speaking of "we feel" rather than just "I feel" reflects deeper cultural values.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Spiritual Dimension</h3>
            <p className="text-gray-300">
              In Balti Muslim culture, many emotional expressions have spiritual undertones. References to God's will
              and blessing frequently accompany expressions of joy, sorrow, or acceptance of fate.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Poetry & Music</h3>
            <p className="text-gray-300">
              Deep emotions in Balti culture are often expressed through traditional poetry and music rather than direct
              speech. Learning these art forms gives insight into the full emotional depth of the language.
            </p>
          </div>
        </div>
      </section>

      <LearnContinue
        title="Explore More"
        links={[
          { label: "Balti Culture", href: "/learn/culture" },
          { label: "Back to Phrases →", href: "/learn/phrases", variant: "secondary" },
        ]}
      />
    </main>
  )
}
