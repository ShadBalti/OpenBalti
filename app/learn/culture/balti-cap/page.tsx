import { generateMetadata } from "@/lib/metadata"
import LearnContinue from "@/components/LearnContinue"

export const metadata = generateMetadata(
  "The History of the Balti Cap (Natt) | OpenBalti",
  "Discover the history, craftsmanship, and cultural significance of the traditional Balti cap (Natt) worn with pride across Baltistan.",
  { keywords: ["Balti cap", "Natt", "Balti tradition"] },
)

export default function BaltiCapPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">The Balti Cap (Natt)</h1>
        <p className="text-xl text-gray-300 mb-6">A Symbol of Identity and Heritage</p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
          "Wear a Natt, and you carry the history of mountains on your head."
        </blockquote>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">What is the Natt?</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The <strong>Natt</strong> is the traditional cap worn by Balti men, particularly in formal and everyday
          contexts across Baltistan. It's a cylindrical or slightly tapered hat, typically made of wool in dark colors
          (black, brown, dark grey), though some variations exist. The Natt is not merely an accessory — it's a powerful
          symbol of Balti identity, heritage, and cultural pride.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Historical Origins</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The origins of the Balti cap are deeply rooted in the region's history. Scholars believe the design has
          Central Asian influences, reflecting Baltistan's position along ancient trade routes. The cap style shows
          similarities to headwear worn in Tibet, Afghanistan, and Central Asia, suggesting centuries of cultural
          exchange and adaptation to mountain climate. The wool construction reflects practical needs — keeping wearers
          warm in Baltistan's high-altitude, cold climate.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Craftsmanship & Design</h3>
        <p className="text-gray-300 mb-4">Making a traditional Natt is a skilled craft:</p>
        <ul className="space-y-3 text-gray-300 list-disc pl-6 mb-6">
          <li>
            <strong>Material:</strong> Hand-carded wool, often from local sheep, is the primary material
          </li>
          <li>
            <strong>Felting Process:</strong> Wool is wetted and felted through traditional methods that can take days,
            creating a dense, water-resistant fabric
          </li>
          <li>
            <strong>Shaping:</strong> The felt is molded into the characteristic cap shape by hand or over wooden forms
          </li>
          <li>
            <strong>Details:</strong> Some Natts feature embroidered trim, decorative stitching, or fabric bands
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Social Significance</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The Natt carries deep social meaning in Balti culture. Wearing it signals respect for tradition, connection to
          Baltistan, and often formal or official status. Elders and community leaders often wear distinctive Natts that
          mark their position. Young men don the cap as a symbol of coming of age and assumption of adult roles in the
          community.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Modern Status</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          In contemporary Baltistan, while Western-style clothing is increasingly common, the Natt remains important for
          formal occasions, religious gatherings, and cultural events. It's worn with traditional robes (Chapkan) during
          weddings, Eid celebrations, and official ceremonies. Among diaspora communities, the Natt has become an even
          more potent symbol of Balti identity and cultural pride, worn to assert connection to homeland and heritage.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-blue-400">Preserving the Craft</h3>
        <p className="text-gray-300 leading-relaxed">
          Like many traditional crafts, Natt-making is increasingly rare as younger generations pursue other
          professions. However, artisans continue the tradition, and efforts are underway to preserve the knowledge and
          technique. Wearing and supporting traditional Natt makers is one way to honor this important aspect of Balti
          cultural heritage.
        </p>
      </section>

      <LearnContinue
        title="Explore More Culture"
        links={[
          { label: "Traditional Foods", href: "/learn/culture/traditional-foods" },
          { label: "Back to Culture →", href: "/learn/culture", variant: "secondary" },
        ]}
      />
    </main>
  )
}
