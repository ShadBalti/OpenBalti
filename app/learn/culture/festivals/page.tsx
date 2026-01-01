import { generateMetadata } from "@/lib/metadata"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "Balti Festivals & Celebrations | OpenBalti",
  "Learn about the major festivals and celebrations that shape the Balti calendar and bring communities together.",
  { keywords: ["Balti festivals", "Baltistan celebrations", "Balti traditions"] },
)

export default function FestivalsPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Balti Festivals & Celebrations</h1>
        <p className="text-xl text-gray-300 mb-6">Marking Sacred and Secular Time</p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
          "Festivals are the heartbeat of a culture — moments when identity is renewed and community bonds are
          strengthened."
        </blockquote>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">The Balti Calendar</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Balti celebrations blend Islamic observances (following the Islamic calendar) with cultural traditions and
          seasonal markers tied to mountain life. The year is punctuated by moments of gathering, reflection, renewal,
          and joyful celebration.
        </p>

        <h3 className="text-xl font-semibold mb-6 text-blue-400">Islamic Celebrations</h3>

        <div className="space-y-8">
          {[
            {
              name: "Eid-ul-Fitr",
              timing: "End of Ramadan",
              desc: "The three-day festival marking the end of Ramadan (the Islamic fasting month). Families gather after the predawn prayer to feast on special foods. New clothes are worn, children receive gifts (Eidi), and the atmosphere is joyful and celebratory.",
              traditions: "Community meals, family gatherings, prayers, exchange of gifts and sweets",
            },
            {
              name: "Eid-ul-Adha",
              timing: "2 months after Eid-ul-Fitr",
              desc: "The Festival of Sacrifice commemorates Prophet Ibrahim's willingness to sacrifice his son in obedience to God. Families sacrifice animals (usually sheep, goats, or cattle) and distribute meat to family, friends, and the poor.",
              traditions: "Animal sacrifice, feasting, family visits, prayer gatherings, charitable giving",
            },
            {
              name: "Islamic New Year (Hijri New Year)",
              timing: "First day of Muharram",
              desc: "Marks the Islamic calendar year. For Shia communities, the following month of Muharram is observed with special remembrance of Imam Hussain's martyrdom through Ashura observances.",
              traditions: "Prayers, reflection, community gatherings, special sermons",
            },
            {
              name: "Eid Milad-un-Nabi",
              timing: "12th of Rabi' al-awwal",
              desc: "Birthday celebration of Prophet Muhammad. Marked with special prayers, readings of the Prophet's life, and community meals.",
              traditions: "Religious gatherings, Naat (poetry) recitations, communal prayers and feasts",
            },
          ].map(({ name, timing, desc, traditions }) => (
            <div key={name} className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-400 mb-1">{name}</h4>
              <p className="text-sm text-gray-400 mb-3">
                <strong>When:</strong> {timing}
              </p>
              <p className="text-gray-300 mb-3">{desc}</p>
              <p className="text-gray-400 text-sm">
                <strong>Traditions:</strong> {traditions}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 text-blue-400 mt-12">Seasonal & Cultural Celebrations</h3>

        <div className="space-y-8">
          {[
            {
              name: "Weddings (Shaadis)",
              timing: "Year-round, often spring to fall",
              desc: "Balti weddings are elaborate multi-day affairs involving elaborate ceremonies, feasting, and community participation. Traditional music, dancing, and processions (with the groom riding a horse) are hallmarks.",
              traditions:
                "Mehendi (henna), Baraat (procession), Walima (feast), Qazi Nikah (marriage contract), extensive celebration",
            },
            {
              name: "Jashn-e-Skardu (Skardu Festival)",
              timing: "May-June",
              desc: "A cultural festival celebrating spring in the Skardu valley featuring cultural performances, sports competitions, handicraft displays, and food fairs. It showcases Balti heritage to locals and tourists.",
              traditions: "Cultural performances, polo matches, apricot fair, craft exhibitions, music and dance",
            },
            {
              name: "Spring Arrival Celebrations",
              timing: "March-April",
              desc: "With the end of harsh winters, communities celebrate the arrival of spring with new crops and renewed life. Local celebrations include music, gatherings, and preparation for the growing season.",
              traditions: "Community gatherings, traditional music, preparation of fields, celebrations of new growth",
            },
          ].map(({ name, timing, desc, traditions }) => (
            <div key={name} className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-400 mb-1">{name}</h4>
              <p className="text-sm text-gray-400 mb-3">
                <strong>When:</strong> {timing}
              </p>
              <p className="text-gray-300 mb-3">{desc}</p>
              <p className="text-gray-400 text-sm">
                <strong>Traditions:</strong> {traditions}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 text-blue-400 mt-12">The Role of Celebration</h3>

        <div className="bg-gray-800 p-6 rounded-lg space-y-4">
          <p className="text-gray-300">
            Celebrations in Balti culture serve multiple purposes: they mark the passage of time, strengthen community
            bonds, transmit cultural values, and provide moments of joy and connection. Music, food, dance, and
            gathering are all integral to maintaining cultural identity and community cohesion.
          </p>
          <p className="text-gray-300">
            The ability to speak about celebrations and understand their significance is an important part of language
            learning — it's through celebrations that a culture most vividly expresses its values, history, and
            identity.
          </p>
        </div>
      </section>

      <LearnContinue
        title="Explore More Culture"
        links={[
          { label: "Family & Social Customs", href: "/learn/culture/family-customs" },
          { label: "Back to Culture →", href: "/learn/culture", variant: "secondary" },
        ]}
      />
    </main>
  )
}
