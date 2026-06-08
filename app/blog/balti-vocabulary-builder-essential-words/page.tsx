import { generateMetadata } from "@/lib/metadata"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"

export const metadata = generateMetadata(
  "Balti Vocabulary Builder: Essential Words by Category",
  "Build your Balti vocabulary systematically with organized word lists across categories. Includes numbers, colors, family, food, and more with pronunciation guides.",
  {
    keywords: [
      "Balti vocabulary",
      "Balti words",
      "vocabulary list",
      "vocabulary builder",
      "learn Balti words",
    ],
  },
)

const article = ARTICLES["balti-vocabulary-builder-essential-words"]

export default function VocabularyBuilderPage() {
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
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Building Vocabulary Systematically</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Effective vocabulary learning requires systematic organization and consistent repetition. Rather than randomly learning isolated words, this guide organizes essential Balti vocabulary into meaningful categories that reflect real-world communication needs. Each category builds on fundamental concepts and progresses toward more complex vocabulary.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Numbers ( گنتی)</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Numbers are foundational for any language learner. Master these essential numerical terms:
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 mb-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2">English</th>
                  <th className="text-left py-2 px-2">Balti</th>
                  <th className="text-left py-2 px-2">Pronunciation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { en: "One", balti: "چھک", pron: "chik" },
                  { en: "Two", balti: "نیس", pron: "nis" },
                  { en: "Three", balti: "غسم", pron: "gsum" },
                  { en: "Four", balti: "ژی", pron: "zhi" },
                  { en: "Five", balti: "ڈنگ", pron: "dang" },
                  { en: "Ten", balti: "بچو", pron: "bcu" },
                  { en: "Twenty", balti: "نیسبچو", pron: "nis-bcu" },
                  { en: "Hundred", balti: "برگیا", pron: "brgya" },
                  { en: "Thousand", balti: "چھوڈ", pron: "chod" },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-border/50">
                    <td className="py-2 px-2">{item.en}</td>
                    <td className="py-2 px-2 font-semibold">{item.balti}</td>
                    <td className="py-2 px-2 text-foreground/70">{item.pron}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Colors (رنگ)</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Color words are useful for describing objects and observations. Learn these basic colors:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              { en: "Red", balti: "مرگو", pron: "margu" },
              { en: "Blue", balti: "نیلو", pron: "nilu" },
              { en: "Green", balti: "یاڑو", pron: "yardu" },
              { en: "Yellow", balti: "سرپو", pron: "sarpu" },
              { en: "Black", balti: "نگپو", pron: "nagpu" },
              { en: "White", balti: "کاری", pron: "kari" },
            ].map((item, idx) => (
              <div key={idx} className="bg-primary/5 rounded-lg p-4">
                <p className="font-semibold text-sm mb-1">{item.en}</p>
                <p className="text-foreground/80 font-medium">{item.balti}</p>
                <p className="text-xs text-foreground/60">{item.pron}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Family Relations (کُل ‌دیں)</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Family vocabulary is essential for personal conversations and relationship building:
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 mb-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2">English</th>
                  <th className="text-left py-2 px-2">Balti</th>
                  <th className="text-left py-2 px-2">Pronunciation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { en: "Mother", balti: "آما", pron: "ama" },
                  { en: "Father", balti: "آپا", pron: "apa" },
                  { en: "Sister", balti: "مچھی", pron: "machi" },
                  { en: "Brother", balti: "پو", pron: "pu" },
                  { en: "Son", balti: "بسو", pron: "basu" },
                  { en: "Daughter", balti: "بسکی", pron: "baski" },
                  { en: "Grandmother", balti: "چھیمو", pron: "chimu" },
                  { en: "Grandfather", balti: "پومو", pron: "pumu" },
                  { en: "Cousin", balti: "پیمو", pron: "paimu" },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-border/50">
                    <td className="py-2 px-2">{item.en}</td>
                    <td className="py-2 px-2 font-semibold">{item.balti}</td>
                    <td className="py-2 px-2 text-foreground/70">{item.pron}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Food & Dining (کھانہ)</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Food vocabulary is practical for dining experiences and cultural exploration:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {[
              { en: "Bread", balti: "اڈ", pron: "ad" },
              { en: "Rice", balti: "باسوں", pron: "basun" },
              { en: "Meat", balti: "شا", pron: "sha" },
              { en: "Vegetable", balti: "منگو", pron: "mangu" },
              { en: "Fruit", balti: "کھیل", pron: "khel" },
              { en: "Water", balti: "چھو", pron: "chu" },
              { en: "Milk", balti: "ومو", pron: "omo" },
              { en: "Tea", balti: "چھاے", pron: "chay" },
              { en: "Salt", balti: "تسا", pron: "tsa" },
              { en: "Sugar", balti: "دی", pron: "di" },
              { en: "Oil", balti: "مین", pron: "men" },
              { en: "Butter", balti: "مار", pron: "mar" },
            ].map((item, idx) => (
              <div key={idx} className="bg-primary/5 rounded-lg p-3">
                <p className="font-semibold text-sm mb-1">{item.en}</p>
                <p className="text-foreground/80 font-medium text-sm">{item.balti}</p>
                <p className="text-xs text-foreground/60">{item.pron}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Home & Daily Objects (ختھ)</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Learn vocabulary for common household items and living spaces:
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 mb-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2">English</th>
                  <th className="text-left py-2 px-2">Balti</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { en: "House", balti: "ختھ" },
                  { en: "Room", balti: "کھپ" },
                  { en: "Door", balti: "سگو" },
                  { en: "Window", balti: "چھھات" },
                  { en: "Bed", balti: "تھولمو" },
                  { en: "Table", balti: "میز" },
                  { en: "Chair", balti: "کھورسی" },
                  { en: "Fire/Stove", balti: "مے" },
                  { en: "Lamp", balti: "گوتھ" },
                  { en: "Pot", balti: "گھومب" },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-border/50">
                    <td className="py-2 px-2">{item.en}</td>
                    <td className="py-2 px-2 font-semibold">{item.balti}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Nature & Animals (سپالو)</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Expand your vocabulary with natural world and animal terms:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {[
              { en: "Mountain", balti: "کھنگ" },
              { en: "Water", balti: "چھو" },
              { en: "Fire", balti: "می" },
              { en: "Sun", balti: "نیما" },
              { en: "Moon", balti: "دالا" },
              { en: "Star", balti: "کھاربی" },
              { en: "Tree", balti: "شینگ" },
              { en: "Flower", balti: "می" },
              { en: "Bird", balti: "چھولی" },
              { en: "Dog", balti: "کھی" },
              { en: "Cat", balti: "کھیم" },
              { en: "Horse", balti: "رتا" },
            ].map((item, idx) => (
              <div key={idx} className="bg-primary/5 rounded-lg p-3">
                <p className="font-semibold text-sm mb-1">{item.en}</p>
                <p className="text-foreground/80 font-medium text-sm">{item.balti}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Vocabulary Learning Tips</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Maximize your vocabulary learning with these proven techniques:
          </p>
          
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <h3 className="font-semibold text-green-900 dark:text-green-200 mb-1">Spaced Repetition</h3>
              <p className="text-sm text-foreground/80">Review words at increasing intervals (1 day, 3 days, 7 days, 2 weeks) to move them into long-term memory.</p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Contextual Learning</h3>
              <p className="text-sm text-foreground/80">Learn words in phrases and sentences rather than isolation to understand usage and cultural context.</p>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
              <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-1">Immersion</h3>
              <p className="text-sm text-foreground/80">Practice using new vocabulary in conversations, writing, and real-world scenarios to solidify learning.</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
              <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-1">Mnemonic Techniques</h3>
              <p className="text-sm text-foreground/80">Create mental associations, visual images, or word connections to remember vocabulary more effectively.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <p className="text-foreground/80 leading-relaxed">
            Systematic vocabulary building is the foundation of language fluency. By organizing words into meaningful categories and using proven learning techniques, you&apos;ll steadily expand your Balti vocabulary. Start with high-frequency words, practice consistently, and gradually build toward more specialized vocabulary in your areas of interest.
          </p>
        </div>
      </section>
    </BlogArticleLayout>
  )
}
