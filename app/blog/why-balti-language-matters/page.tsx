import { generateMetadata } from "@/lib/metadata"
import Image from "next/image"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"

export const metadata = generateMetadata(
  "Why the Balti Language Matters: Preserving Cultural Identity",
  "Explore why preserving the Balti language is crucial for maintaining cultural identity, preventing linguistic loss, and honoring the heritage of Baltistan communities worldwide.",
  { keywords: ["language preservation", "Balti culture", "endangered languages", "cultural identity"] },
)

const article = ARTICLES["why-balti-language-matters"]

export default function WhyBaltiMattersPage() {
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
        <h2>The Crisis of Linguistic Diversity</h2>
        <p>
          Every two weeks, a language dies somewhere in the world. By 2100, linguists estimate that half of the
          world&apos;s 7,000 languages will be extinct. The Balti language, spoken by approximately 100,000 people in the
          Baltistan region of the Karakoram, stands at a critical juncture. Yet this language is far more than just
          words and grammar—it is a living archive of history, culture, and identity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 p-6 bg-secondary/30 rounded-lg border border-secondary">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">7,000</div>
            <div className="text-sm text-muted-foreground">Languages Today</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50%</div>
            <div className="text-sm text-muted-foreground">May Vanish by 2100</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">2 weeks</div>
            <div className="text-sm text-muted-foreground">One Language Dies</div>
          </div>
        </div>

        <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src="/images/blog/language-loss.jpg"
            alt="Visual representation of endangered languages around the world"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section>
        <h2>Language as a Gateway to History</h2>

        <div className="relative w-full h-[320px] rounded-lg overflow-hidden mb-6 shadow-lg">
          <Image
            src="/images/blog/ancient-trade-routes.jpg"
            alt="Historical trade routes through Baltistan connecting civilizations"
            fill
            className="object-cover"
          />
        </div>

        <p>
          The Balti language carries within it centuries of Himalayan and Central Asian history. Words in Balti
          reveal trade routes, cultural influences from Tibet, Persia, and South Asia, and the migration patterns of
          ancient peoples. When a language dies, we lose access to how our ancestors understood the world, their
          values, and their relationships with the natural environment.
        </p>
        <p>
          Consider the Balti proverbs and idioms. They encode wisdom about living in one of the world&apos;s harshest
          environments, lessons about resilience, community cooperation, and sustainable resource management. This
          knowledge, accumulated over generations, cannot be fully translated into English or other dominant
          languages without losing its essence.
        </p>

        <blockquote className="border-l-4 border-primary bg-primary/5 p-6 my-8 rounded-r-lg italic">
          <p className="text-lg mb-2">
            &quot;When a language dies, we lose more than words. We lose entire ways of thinking, unique perspectives
            on existence, and irreplaceable cultural knowledge.&quot;
          </p>
          <footer className="text-sm text-muted-foreground not-italic">
            — Linguistic Anthropology Research
          </footer>
        </blockquote>
      </section>

      <section>
        <h2>Cultural Identity and Community Cohesion</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="relative h-[280px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/blog/balti-elders.jpg"
              alt="Balti elders sharing stories and wisdom with younger generation"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
              Intergenerational Knowledge Transfer
            </div>
          </div>
          <div className="relative h-[280px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/blog/balti-youth.jpg"
              alt="Young Balti people learning their heritage language"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
              Youth Engagement in Language Learning
            </div>
          </div>
        </div>

        <p>
          For Balti speakers scattered across Baltistan, Pakistan, India, and diaspora communities worldwide, the
          language is the primary symbol of group identity. It connects individuals to their heritage, their family,
          and their sense of belonging to a larger community. Language is how culture is transmitted, preserved, and
          celebrated.
        </p>

        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-lg p-6 my-6">
          <h3 className="font-bold text-lg mb-2">The Intergenerational Gap</h3>
          <p className="text-base mb-3">
            The pressure of globalization and the dominance of English, Urdu, and other languages has led many young
            Baltis to abandon their native language. A 2023 survey indicated that only <strong>45% of Balti children 
            under 15</strong> are fluent speakers of their heritage language.
          </p>
          <p className="text-sm text-muted-foreground m-0">
            This intergenerational linguistic divide threatens not just the language itself, but the cohesion of 
            Balti communities.
          </p>
        </div>
      </section>

      <section>
        <h2>The Unique Linguistic Features of Balti</h2>

        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-6 shadow-lg">
          <Image
            src="/images/blog/linguistic-tree.jpg"
            alt="Linguistic family tree showing Balti's connections to other languages"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Balti is linguistically fascinating. It is a Sino-Tibetan language with influences from Persian, Arabic,
          and Sanskrit. Its phonological system, grammatical structure, and vocabulary offer insights into
          historical migrations and contact between civilizations. For linguists studying language evolution,
          contact linguistics, and historical reconstruction, Balti is an invaluable resource.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          {[
            { lang: "Tibetan", influence: "Base Structure" },
            { lang: "Persian", influence: "Vocabulary" },
            { lang: "Arabic", influence: "Religious Terms" },
            { lang: "Sanskrit", influence: "Cultural Words" },
          ].map((item) => (
            <div key={item.lang} className="bg-secondary/50 border border-secondary rounded-lg p-4 text-center">
              <div className="font-bold text-sm mb-1">{item.lang}</div>
              <div className="text-xs text-muted-foreground">{item.influence}</div>
            </div>
          ))}
        </div>

        <p>
          The language also contains unique concepts and expressions that simply don&apos;t exist in English or other
          major languages. These untranslatable words often express ideas about nature, community, or spiritual
          concepts that are central to Balti worldview.
        </p>
      </section>

      <section>
        <h2>The Role of Technology in Language Preservation</h2>

        <div className="relative w-full h-[320px] rounded-lg overflow-hidden mb-6 shadow-lg">
          <Image
            src="/images/blog/digital-preservation.jpg"
            alt="Digital tools and technology being used to preserve the Balti language"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Digital platforms like OpenBalti are crucial in the fight to preserve endangered languages. By creating
          accessible dictionaries, learning resources, and digital archives, we ensure that the Balti language is
          available to anyone interested in learning it, regardless of geographic location or access to native
          speakers.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-lg p-6 my-6">
          <h3 className="font-bold text-lg mb-4">Digital Preservation Tools</h3>
          <ul className="space-y-3">
            {[
              "Online dictionaries with audio pronunciations",
              "Mobile apps for on-the-go learning",
              "Social media content in Balti language",
              "Digital archives of traditional stories and songs",
              "Video tutorials and interactive lessons",
              "Community forums for language practice",
            ].map((tool, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-primary">→</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>

        <p>
          Technology also provides opportunities for innovation. Balti speakers can use social media, podcasts, and
          digital content creation to keep the language alive and relevant to younger generations, blending
          tradition with modernity.
        </p>
      </section>

      <section>
        <h2>What Can We Do?</h2>
        <p>Language preservation requires action at multiple levels. Here&apos;s how you can contribute:</p>

        <div className="space-y-4 my-6">
          {[
            {
              title: "Learn and Teach",
              desc: "If you're Balti, pass the language to your children. If you're not, learn about and support endangered languages.",
            },
            {
              title: "Support Documentation",
              desc: "Contribute to projects like OpenBalti that create accessible learning materials.",
            },
            {
              title: "Engage with Communities",
              desc: "Connect with Balti speakers, listen to their stories, and amplify their voices.",
            },
            {
              title: "Advocate for Inclusion",
              desc: "Support education policies that protect minority languages in schools.",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-secondary/30 rounded-lg border border-secondary">
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>A Living Legacy</h2>
        <p>
          The Balti language is not a relic of the past—it&apos;s a living, evolving expression of identity and culture.
          Every speaker who uses Balti, every learner who studies it, and every community member who passes it to the
          next generation is a guardian of this linguistic and cultural heritage.
        </p>
        <p>
          The question is not whether we can preserve the Balti language. The question is whether we will. And the
          answer lies with each of us.
        </p>
      </section>
    </BlogArticleLayout>
  )
}
