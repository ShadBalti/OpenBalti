import { generateMetadata } from "@/lib/metadata"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "Traditional Balti Foods You Must Try | OpenBalti",
  "Explore the distinctive dishes of Baltistan — from hearty breads to warming soups — and their place in Balti life and hospitality.",
  { keywords: ["Balti food", "Baltistan cuisine", "traditional dishes"] },
)

export default function TraditionalFoodsPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Traditional Balti Foods</h1>
        <p className="text-xl text-gray-300 mb-6">You Must Try</p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
          "Food is love made visible — in Balti culture, every meal is an expression of warmth and belonging."
        </blockquote>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">Balti Cuisine: Food as Culture</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Balti cuisine is shaped by geography, climate, trade, and cultural heritage. High-altitude living demands
          hearty, warming foods that sustain through long winters. Islamic dietary practices shape preparation methods
          and ingredients. The cuisine reflects influences from Central Asia, Tibet, and the subcontinent, creating a
          unique culinary tradition.
        </p>

        <h3 className="text-xl font-semibold mb-6 text-blue-400">Essential Balti Dishes</h3>

        <div className="space-y-8">
          {[
            {
              name: "Skardu Apricot (Khuubani)",
              desc: "Skardu is world-famous for its apricots. Fresh in season, dried year-round, these apricots are sweet, nutrient-dense, and central to Balti cuisine. Eaten fresh, dried as snacks, or made into jams and pastes.",
              significance: "Represents the abundance of Balti valleys and is served with honor to guests",
            },
            {
              name: "Khichdi",
              desc: "A staple one-pot dish of rice and lentils cooked together with spices, sometimes with vegetables. Simple but deeply nourishing, it's eaten at home and in formal settings.",
              significance: "The comfort food of Baltistan — warm, filling, and economical",
            },
            {
              name: "Phiru (Bread)",
              desc: "Thick, hearty flatbread cooked in a traditional tandoor. The bread is fundamental to every meal, used to scoop up curries and eaten with butter and salt.",
              significance:
                "Bread-making is often a family ritual, with women gathering to prepare dough and bake together",
            },
            {
              name: "Baltis Meat Stew (Kora Mangsho)",
              desc: "A slow-cooked meat stew with aromatic spices, onions, and sometimes dried fruits. Often prepared during celebrations and special occasions.",
              significance: "Reserved for guests and special occasions, representing honor and generosity",
            },
          ].map(({ name, desc, significance }) => (
            <div key={name} className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">{name}</h4>
              <p className="text-gray-300 mb-3">{desc}</p>
              <p className="text-gray-400 text-sm italic">
                <strong>Cultural significance:</strong> {significance}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 text-blue-400 mt-12">Balti Hospitality & Food</h3>

        <div className="bg-gray-800 p-6 rounded-lg space-y-4">
          <p className="text-gray-300">
            In Balti culture, food is the primary expression of hospitality. Serving guests is a sacred duty. Even in
            times of scarcity, Baltis prepare the best food for visitors. Refusing offered food can be seen as insulting
            — accepting, even in small amounts, honors the host and the relationship.
          </p>

          <h4 className="text-lg font-semibold text-blue-400">Tea Culture</h4>
          <p className="text-gray-300">
            Tea (Chai) is central to Balti social life. Green tea or black tea is offered throughout the day. The ritual
            of tea-serving — with conversation, storytelling, and connection — is as important as the beverage itself.
            Sharing tea creates bonds and seals agreements.
          </p>

          <h4 className="text-lg font-semibold text-blue-400">Feast Traditions</h4>
          <p className="text-gray-300">
            Major celebrations involve communal feasts (Dastarkhwan). Weddings, Eid, and important life events are
            marked by elaborate meals prepared collectively. The feast is both nourishment and ceremony — marking
            transitions, honoring guests, and strengthening community bonds.
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-6 text-blue-400 mt-12">Dietary Practices</h3>

        <div className="space-y-4 text-gray-300">
          <p>
            Most Baltis are Muslim, so Islamic dietary practices are observed. Halal meat preparation is standard.
            During Ramadan, the month-long fast is followed by evening meals (Iftar) that are communal and celebratory.
            Pork is not consumed, and alcohol is absent from most celebrations (though historically barley beer had a
            place in pre-Islamic Balti culture).
          </p>
        </div>
      </section>

      <LearnContinue
        title="Explore More Culture"
        links={[
          { label: "Festivals & Celebrations", href: "/learn/culture/festivals" },
          { label: "Back to Culture →", href: "/learn/culture", variant: "secondary" },
        ]}
      />
    </main>
  )
}
