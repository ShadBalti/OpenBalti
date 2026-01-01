import { generateMetadata } from "@/lib/metadata"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "Balti Greetings and Etiquette for Travelers | OpenBalti",
  "Learn essential Balti greetings, polite forms, and cultural etiquette for meeting speakers and showing respect.",
  { keywords: ["Balti greetings", "Balti etiquette", "Balti culture"] },
)

export default function GreetingsPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Greetings & Etiquette for Travelers</h1>
        <p className="text-xl text-gray-300 mb-6">Make the right impression with Balti speakers</p>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">Essential Greetings</h2>

        <div className="space-y-8">
          {[
            {
              balti: "ཇུ་ཕོ། (Joo-pho!)",
              eng: "Hello!",
              note: "Casual, friendly greeting used anytime",
            },
            {
              balti: "ཁང་གི་ཡོད་པས། (Khang gi yod-pas?)",
              eng: "How are you?",
              note: "Polite inquiry about someone's well-being",
            },
            {
              balti: "ང་བདེ་ཡིན། (Nga de yin)",
              eng: "I'm fine.",
              note: "Standard response to 'how are you?'",
            },
            {
              balti: "དགོང་དག་བཀྲ་ཤིས། (Gong dag tashi)",
              eng: "Good evening / Goodbye.",
              note: "Used as farewell or evening greeting",
            },
          ].map(({ balti, eng, note }) => (
            <div key={balti} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-lg font-semibold mb-2">{balti}</p>
              <p className="text-gray-300 italic mb-2">{eng}</p>
              <p className="text-gray-400 text-sm">{note}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-blue-400 mt-12">Introductions</h2>

        <div className="space-y-8">
          {[
            {
              balti: "ཁྱེད་རང་གི་མིང་ག་རེ་རེད། (Khyed-rang gi ming ga-re red?)",
              eng: "What's your name?",
              note: "Formal way to ask someone's name",
            },
            {
              balti: "ང་གི་མིང་ཤད་ཡིན། (Nga gi ming Shad yin)",
              eng: "My name is Shad.",
              note: "How to introduce yourself",
            },
            {
              balti: "ང་དགའ་པོ་ཡིན། (Nga ga-po yin)",
              eng: "I'm pleased to meet you.",
              note: "Polite expression of good feelings upon meeting",
            },
          ].map(({ balti, eng, note }) => (
            <div key={balti} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-lg font-semibold mb-2">{balti}</p>
              <p className="text-gray-300 italic mb-2">{eng}</p>
              <p className="text-gray-400 text-sm">{note}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-blue-400 mt-12">Cultural Etiquette Tips</h2>

        <div className="bg-gray-800 p-6 rounded-lg space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Respect Through Language</h3>
            <p className="text-gray-300">
              Balti speakers deeply value respect and politeness. Using the formal address "Khyed-rang" (you) instead of
              casual forms shows cultural awareness and respect.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Hospitality Importance</h3>
            <p className="text-gray-300">
              Balti culture is known for exceptional hospitality. When offered tea or food, accepting gracefully (even
              if just a small amount) is appreciated as a sign of respect.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Religious Sensitivity</h3>
            <p className="text-gray-300">
              Most Baltis are Muslim. Showing respect for prayer times, dietary practices, and religious observances is
              important for building positive relationships.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Gender Considerations</h3>
            <p className="text-gray-300">
              In traditional settings, some gender-separated spaces are respected. It's polite to wait for guidance on
              seating and interaction from your Balti hosts.
            </p>
          </div>
        </div>
      </section>

      <LearnContinue
        title="Next Phrase Guide"
        links={[
          { label: "Shopping & Bargaining", href: "/learn/phrases/shopping" },
          { label: "Back to Phrases →", href: "/learn/phrases", variant: "secondary" },
        ]}
      />
    </main>
  )
}
