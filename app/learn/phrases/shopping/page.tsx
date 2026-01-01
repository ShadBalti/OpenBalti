import { generateMetadata } from "@/lib/metadata"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "Shopping and Bargaining in Balti: A Guide | OpenBalti",
  "Learn the vocabulary and phrases for shopping in Balti markets, asking prices, and polite bargaining.",
  { keywords: ["Balti shopping", "Balti bargaining", "Balti markets"] },
)

export default function ShoppingPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Shopping & Bargaining in Balti</h1>
        <p className="text-xl text-gray-300 mb-6">A Practical Guide</p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
          "In Balti markets, bargaining is an art form — a dance of respect, humor, and human connection."
        </blockquote>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">Essential Shopping Phrases</h2>

        <div className="space-y-8">
          {[
            {
              balti: "ག་དེ་ག་དེ་ག་གླེང་། (Ga de ga de ga-gleng?)",
              eng: "How much does this cost?",
              note: "Direct way to ask price",
            },
            {
              balti: "ཕ་གི་གོ་སྐོར་གི་འདུག (Pha gi go-skor gi dug)",
              eng: "This is expensive.",
              note: "Common phrase during bargaining",
            },
            {
              balti: "ལས་ཆུང་བའི་གོ་སྐོར་གི་འདུག (Las chung ba'i go-skor gi dug?)",
              eng: "Can you lower the price?",
              note: "Polite way to ask for discount",
            },
            {
              balti: "དེ་ག་གླེང་། (De ga-gleng?)",
              eng: "What is the final price?",
              note: "Asking for best offer",
            },
          ].map(({ balti, eng, note }) => (
            <div key={balti} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-lg font-semibold mb-2">{balti}</p>
              <p className="text-gray-300 italic mb-2">{eng}</p>
              <p className="text-gray-400 text-sm">{note}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-blue-400 mt-12">Items & Shopping Vocabulary</h2>

        <div className="bg-gray-800 p-6 rounded-lg space-y-3 mb-8">
          {[
            { balti: "འབྲས། (Dre)", eng: "Rice" },
            { balti: "ཏིལ། (Til)", eng: "Sesame" },
            { balti: "ཅུ། (Chu)", eng: "Water" },
            { balti: "མར། (Mar)", eng: "Butter" },
            { balti: "ཕྲུ་གུ། (Pru-gu)", eng: "Bread" },
            { balti: "སྲན། (Dren)", eng: "Fruit" },
            { balti: "ལྕགས། (Lchag)", eng: "Metal / Iron goods" },
            { balti: "ཁ་ལོག (Kha-log)", eng: "Cloth / Textiles" },
          ].map(({ balti, eng }) => (
            <div key={balti} className="flex justify-between">
              <span className="font-semibold">{balti}</span>
              <span className="text-gray-400">{eng}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-blue-400">The Art of Balti Bargaining</h2>

        <div className="bg-gray-800 p-6 rounded-lg space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">It's About Relationship</h3>
            <p className="text-gray-300">
              In Balti culture, bargaining is not confrontational. It's a social ritual that builds relationship. A
              seller who doesn't bargain might seem uninterested in you as a person.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Start Lower, Be Reasonable</h3>
            <p className="text-gray-300">
              Offering significantly less (30-40% off) is expected, but make it reasonable. Insulting low offers show
              disrespect to the shopkeeper's goods and livelihood.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Share Tea, Share Stories</h3>
            <p className="text-gray-300">
              Balti shopkeepers often invite customers for tea while negotiating. Accept this invitation — it's part of
              building the relationship that leads to good prices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Know When to Stop</h3>
            <p className="text-gray-300">
              If the shopkeeper seems firm on a price, it's usually their final offer. Pushing further can be seen as
              greedy. Accept gracefully and you'll earn respect.
            </p>
          </div>
        </div>
      </section>

      <LearnContinue
        title="Next Phrase Guide"
        links={[
          { label: "Expressing Emotions", href: "/learn/phrases/emotions" },
          { label: "Back to Phrases →", href: "/learn/phrases", variant: "secondary" },
        ]}
      />
    </main>
  )
}
