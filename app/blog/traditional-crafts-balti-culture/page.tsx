import { generateMetadata } from "@/lib/metadata"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"

export const metadata = generateMetadata(
  "Traditional Crafts: The Living Art of Baltistan",
  "Discover the intricate traditional crafts of Baltistan including carpet weaving, woodcarving, embroidery, and metalwork that tell stories of heritage.",
  { keywords: ["Balti crafts", "traditional arts", "carpet weaving", "Baltistan culture", "handicrafts"] },
)

const article = ARTICLES["traditional-crafts-balti-culture"]

export default function TraditionalCraftsPage() {
  return (
    <BlogArticleLayout
      slug={article.slug}
      title={article.title}
      excerpt={article.excerpt}
      date={article.date}
      readTime={article.readTime}
      category={article.category}
      author={article.author}
      relatedArticles={article.relatedArticles}
    >
      <section>
        <h2>The Artistry of the Mountains</h2>
        <p>
          In the high valleys of Baltistan, where snow peaks touch the sky and life is shaped by rugged mountains,
          an extraordinary tradition of craftsmanship has flourished for centuries. These are not merely crafts—they
          are expressions of identity, connection to the land, and artistic genius developed in one of the world&apos;s
          most challenging environments.
        </p>
      </section>

      <section>
        <h2>Balti Carpet Weaving: The Signature Craft</h2>
        <p>
          Balti carpets are renowned throughout Central Asia for their intricate patterns, vibrant colors, and
          exceptional quality. Each carpet tells a story, weaving together the history, beliefs, and aesthetic
          values of the Balti people.
        </p>
        <h3>The Craft Process</h3>
        <p>
          Making a traditional Balti carpet is a labor-intensive process that can take months or years. First,
          craftspeople shear wool from local sheep, card it, and dye it using natural dyes derived from plants,
          minerals, and insects. The dyes—indigo for blue, madder root for red, pomegranate rind for yellow—have
          been used for generations and create colors of remarkable depth and durability.
        </p>
        <p>
          The loom itself is often a wooden frame, and the weaver sits before it, tying thousands of individual
          knots to create the design. In a single square inch, there might be 100 or more knots. A moderately-sized
          carpet contains over a million knots—each one placed by hand.
        </p>
        <h3>Symbolic Patterns</h3>
        <p>Balti carpet patterns aren&apos;t random. They incorporate symbols meaningful in Balti culture:</p>
        <ul>
          <li>
            <strong>Flowers and Plants:</strong> Represent fertility, growth, and connection to the earth
          </li>
          <li>
            <strong>Geometric Patterns:</strong> Often represent mountains, water, or spiritual concepts
          </li>
          <li>
            <strong>Animal Motifs:</strong> Snow leopards, ibex, and birds represent the wildlife of Baltistan
          </li>
          <li>
            <strong>Border Designs:</strong> Often depict the boundaries of the sacred or the protective enclosure
          </li>
        </ul>
        <p>
          Many families have signature patterns passed down through generations, making each carpet a unique piece
          of family history.
        </p>
      </section>

      <section>
        <h2>Woodcarving: Shaping the Sacred</h2>
        <p>
          Balti woodcarving represents another pinnacle of regional craftsmanship. Using local woods—walnut, birch,
          and juniper—artisans create everything from decorative boxes to intricate architectural elements.
        </p>
        <h3>Sacred and Functional Art</h3>
        <p>
          Carved wooden doors, windows, and beams adorn homes and religious structures. The designs often blend
          Islamic geometric patterns with indigenous Balti motifs, reflecting the region&apos;s cultural synthesis.
          Prayer boxes, furniture, and decorative objects showcase the extraordinary skill of Balti woodcarvers.
        </p>
        <p>
          What makes Balti woodcarving special is not just the technical skill, but the spiritual intention behind
          it. Many pieces are created as acts of devotion, with artisans spending months on a single door or box.
        </p>
      </section>

      <section>
        <h2>Embroidery and Textile Arts</h2>
        <p>
          Balti embroidery adorns clothing, headscarves, and household textiles. The craft requires steady hands and
          an eye for color harmony. Traditional designs feature floral motifs, geometric patterns, and often tell
          stories of love, family, and nature.
        </p>
        <p>
          Skilled embroiderers spend years mastering their craft, learning techniques that have been passed from mother
          to daughter for generations. The stitches are so fine and precise that some traditional pieces can take a year
          or more to complete.
        </p>
      </section>

      <section>
        <h2>Metalwork: Fire and Creativity</h2>
        <p>
          Balti metalworkers craft intricate items from copper, brass, and bronze. Decorative boxes, jewelry, and
          religious objects demonstrate their skill in working with fire and metal. The intricate inlay work—where
          pieces of different metals are combined to create designs—is particularly remarkable.
        </p>
        <p>
          Traditional Balti metalwork often features geometric Islamic patterns interwoven with nature-inspired designs.
          Each piece is hand-hammered and finished, making every item unique.
        </p>
      </section>

      <section>
        <h2>The Role of Crafts in Modern Baltistan</h2>
        <p>
          In a rapidly modernizing world, traditional crafts face challenges. Younger generations are drawn to more
          lucrative professions, and mass-produced goods are increasingly available at lower prices. Yet these crafts
          remain vital to Balti culture and economy.
        </p>
        <p>
          Fair-trade organizations and cultural initiatives are working to preserve these traditions by creating market
          opportunities for traditional artisans. Tourism and international interest in authentic crafts are helping new
          generations learn and appreciate their heritage.
        </p>
      </section>

      <section>
        <h2>Visiting Artisans and Supporting the Craft</h2>
        <p>
          If you travel to Baltistan, visiting craft workshops and markets is a meaningful way to engage with this
          cultural heritage. Purchasing authentic Balti crafts directly supports artisans and their families, helping
          ensure these traditions survive for future generations.
        </p>
        <p>
          Even if you can&apos;t visit in person, supporting Balti artisans through fair-trade organizations and
          cultural centers is a way to honor this remarkable tradition and contribute to the preservation of Balti
          cultural heritage.
        </p>
      </section>

      <section>
        <h2>A Living Heritage</h2>
        <p>
          The traditional crafts of Baltistan are far more than decorative objects. They are expressions of artistic
          vision, cultural values, and connection to the land. In every carpet knot, carved detail, embroidered stitch,
          and hammered metal piece, you can see centuries of tradition, skill, and love.
        </p>
        <p>
          These crafts deserve to be celebrated, preserved, and passed on to future generations. Through supporting
          artisans and learning about these traditions, we honor the rich cultural heritage of the Balti people.
        </p>
      </section>
    </BlogArticleLayout>
  )
}
