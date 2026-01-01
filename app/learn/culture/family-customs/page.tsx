import { generateMetadata } from "@/lib/metadata"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "Balti Family & Social Customs | OpenBalti",
  "Understand the importance of family, hospitality, and social customs that form the foundation of Balti society and values.",
  { keywords: ["Balti family", "Baltistan customs", "Balti society"] },
)

export default function FamilyCustomsPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Family & Social Customs</h1>
        <p className="text-xl text-gray-300 mb-6">Bonds That Define Balti Society</p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
          "The family is the heart of Balti society — the source of identity, support, and cultural continuity."
        </blockquote>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">The Centrality of Family</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          In Balti culture, the family (Khana or Pariwar) is the primary social unit. Extended family bonds are strong,
          and decisions affecting individuals are often made collectively. Respect for elders, care for young members,
          and maintenance of family honor are core values that guide behavior and relationships.
        </p>

        <h3 className="text-xl font-semibold mb-6 text-blue-400">Family Structure</h3>

        <div className="bg-gray-800 p-6 rounded-lg space-y-4 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-2">Patriarchal Organization</h4>
            <p className="text-gray-300">
              Traditional Balti families follow a patriarchal structure where the eldest male (often the father or
              grandfather) holds significant authority in household decisions. However, mothers and older women exercise
              considerable influence, particularly in matters concerning family welfare and younger members.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-2">Extended Family Networks</h4>
            <p className="text-gray-300">
              The extended family (grandparents, aunts, uncles, cousins) often lives in close proximity and maintains
              strong emotional and economic ties. Multi-generational households are common, with grandparents playing
              important roles in child-rearing and knowledge transmission.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-2">Lineage Importance</h4>
            <p className="text-gray-300">
              Family lineage (Khandan) carries social significance. Family names and genealogical connections matter in
              establishing identity and social standing. Many families can trace their lineage back generations and take
              pride in their ancestral history.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-6 text-blue-400">Key Social Customs</h3>

        <div className="space-y-8">
          {[
            {
              name: "Respect for Elders",
              desc: "Elders are highly respected and treated with deference. Standing when they enter, allowing them to speak first, seeking their counsel on important matters, and caring for them in old age are fundamental expectations.",
              language: "Special respectful forms of address exist in Balti language for elders",
            },
            {
              name: "Hospitality (Mehmaan-Navazi)",
              desc: "Hospitality is not just politeness but a sacred duty. Guests are treated with exceptional care and generosity. Offering food, tea, and a place to rest are the minimum hospitality extends include making guests feel valued and heard.",
              language: "Hosts often say 'Ghar Mein Bas' (Make the home yours) to welcome guests",
            },
            {
              name: "Neighborhood Solidarity",
              desc: "In addition to family, neighborhood (Muhalla) bonds are strong. Neighbors assist with life events, share resources, provide mutual support, and maintain collective responsibility for community welfare.",
              language: "Community gatherings are held for celebrations and problem-solving",
            },
            {
              name: "Gender Roles & Expectations",
              desc: "Traditional gender roles assign men as primary providers and women as household managers and child-rearers. However, women's roles in maintaining family stability and social networks are highly valued. Modern Baltistan shows increasing gender flexibility, especially in urban areas and among younger generations.",
              language: "Language reflects traditional gender roles, though this is evolving",
            },
          ].map(({ name, desc, language }) => (
            <div key={name} className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">{name}</h4>
              <p className="text-gray-300 mb-3">{desc}</p>
              <p className="text-gray-400 text-sm italic">
                <strong>In language:</strong> {language}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 text-blue-400 mt-12">Rites of Passage</h3>

        <div className="space-y-6">
          {[
            {
              milestone: "Birth & Circumcision",
              desc: "Birth is celebrated with family gatherings. Male children are typically circumcised in an Islamic ceremony (Khitna) that brings together extended family and community.",
            },
            {
              milestone: "Coming of Age",
              desc: "Youth (particularly boys) transition to adult status through adolescence, often marked by taking on more responsibilities and participating in community affairs.",
            },
            {
              milestone: "Marriage",
              desc: "Marriage is a major life event that bonds families and establishes new social units. The wedding process involves multiple ceremonies and extended celebration.",
            },
            {
              milestone: "Parenthood",
              desc: "Becoming a parent, especially the birth of the first child, marks a significant status change in Balti society.",
            },
            {
              milestone: "Elderhood",
              desc: "Moving into older age brings increased respect and authority. Elders are honored as repositories of wisdom and experience.",
            },
          ].map(({ milestone, desc }) => (
            <div key={milestone} className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-2">{milestone}</h4>
              <p className="text-gray-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 text-blue-400 mt-12">Modern Changes</h3>

        <div className="bg-gray-800 p-6 rounded-lg space-y-4">
          <p className="text-gray-300">
            Contemporary Baltistan experiences gradual social change. Urbanization, education, and globalization
            influence family structure and customs. Younger generations, while maintaining respect for traditions, are
            negotiating new relationships, educational opportunities, and career paths. Urban Balti families show more
            nuclear structure, though extended family ties remain important.
          </p>
          <p className="text-gray-300">
            Understanding both traditional values and modern adaptations is important for appreciating contemporary
            Balti society and language use.
          </p>
        </div>
      </section>

      <LearnContinue
        title="Explore More"
        links={[
          { label: "Balti Phrases", href: "/learn/phrases" },
          { label: "Back to Culture →", href: "/learn/culture", variant: "secondary" },
        ]}
      />
    </main>
  )
}
