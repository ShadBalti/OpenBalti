import { generateMetadata } from "@/lib/metadata"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"

export const metadata = generateMetadata(
  "Balti Language Idioms, Expressions & Slang Guide | Native Speakers",
  "Master native Balti with idioms, cultural expressions, colloquial phrases, and modern slang used by native speakers with cultural context.",
  {
    keywords: [
      "Balti idioms",
      "Balti expressions",
      "Balti slang",
      "native speakers",
      "Balti colloquialisms",
    ],
  },
)

const article = ARTICLES["balti-idioms-expressions-slang-guide"]

export default function IdiomsGuidePage() {
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
          <h2 className="text-2xl font-bold mb-4">Understanding Idiomatic Language</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Idioms, expressions, and slang represent the heart of how native speakers actually communicate. While formal grammar and vocabulary provide the foundation, idioms reveal the cultural soul of a language. This guide introduces you to authentic Balti expressions that will help you understand and communicate like a true insider.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Common Balti Idioms & Their Meanings</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Master these authentic idioms used by native Balti speakers in everyday conversation:
          </p>
          
          <div className="space-y-4">
            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">چھو کو جیسا ہونا (Chu ko jeisa hona)</h3>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Literal meaning:</strong> &quot;To be like water&quot;
              </p>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Actual meaning:</strong> To be adaptable, flexible, or go with the flow
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Usage:</strong> &quot;اس شخص کو دیکھو، وہ چھو کو جیسا ہے—ہر جگہ خوش رہتا ہے&quot;
              </p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">دل میں آگ ہونا (Dil mein aag hona)</h3>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Literal meaning:</strong> &quot;To have fire in the heart&quot;
              </p>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Actual meaning:</strong> To have passion, determination, or anger
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Usage:</strong> &quot;اس لڑکے کو دیکھو، اس کے دل میں آگ ہے—وہ اپنے خوابوں کے لیے لڑ رہا ہے&quot;
              </p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">ہاتھ پھیلانا (Hath phehlana)</h3>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Literal meaning:</strong> &quot;To stretch out hands&quot;
              </p>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Actual meaning:</strong> To beg, ask for help, or welcome someone
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Usage:</strong> Context determines the specific meaning in conversation
              </p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">زبان کاٹ لینا (Zuban kat lena)</h3>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Literal meaning:</strong> &quot;To cut off the tongue&quot;
              </p>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Actual meaning:</strong> To silence someone, make them quiet, or command their respect
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Usage:</strong> Often used humorously when someone is told to be quiet
              </p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">سونے کی بات ہونا (Sone ki bat hona)</h3>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Literal meaning:</strong> &quot;To be a golden thing&quot;
              </p>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Actual meaning:</strong> To be valuable, precious, or worth preserving
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Usage:</strong> &quot;اس نصیحت کو سنو، یہ سونے کی بات ہے&quot;</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Colloquial vs. Formal Speech</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Balti, like all languages, has different registers. Understanding when to use formal versus colloquial speech is crucial for authentic communication:
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 mb-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2">Situation</th>
                  <th className="text-left py-2 px-2">Formal Balti</th>
                  <th className="text-left py-2 px-2">Colloquial Balti</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-2">Greeting an elder</td>
                  <td className="py-2 px-2">السلام و علیکم</td>
                  <td className="py-2 px-2">سلام!</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-2">Asking permission</td>
                  <td className="py-2 px-2">کیا میں جا سکتا ہوں؟</td>
                  <td className="py-2 px-2">میں جا سکتا ہوں؟</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-2">Offering something</td>
                  <td className="py-2 px-2">براہ مہربانی قبول کریں</td>
                  <td className="py-2 px-2">لے لو، کھا لو</td>
                </tr>
                <tr>
                  <td className="py-2 px-2">Disagreeing</td>
                  <td className="py-2 px-2">میں اس سے متفق نہیں ہوں</td>
                  <td className="py-2 px-2">یہ غلط ہے</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Modern Balti Slang & Young Speakers</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Contemporary Balti has absorbed modern influences. Here are expressions popular with younger speakers:
          </p>
          
          <div className="space-y-3">
            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-1">خطرناک (Khatra-nak)</h3>
              <p className="text-sm text-foreground/80">Literally: &quot;dangerous&quot; — Used to mean &quot;awesome&quot; or &quot;cool&quot; by young people</p>
            </div>

            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-1">بہت ذیادہ (Bahut zyada)</h3>
              <p className="text-sm text-foreground/80">Meaning: &quot;too much&quot; — Used to express exaggeration or emphasis, similar to English &quot;no way!&quot;</p>
            </div>

            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-1">دیکھ تو (Dekh to)</h3>
              <p className="text-sm text-foreground/80">Meaning: &quot;just look&quot; — Used conversationally to draw attention to something interesting</p>
            </div>

            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-1">خیر ہے (Khair hai)</h3>
              <p className="text-sm text-foreground/80">Meaning: &quot;it&apos;s okay&quot; — Used to dismiss concerns or agree casually</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Cultural Expressions & Values</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Many Balti expressions reflect cultural values and worldview. Understanding these reveals deeper cultural insights:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded">
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Hospitality & Welcome</h3>
              <p className="text-sm text-foreground/80 mb-2">&quot;اپنا گھر سمجھو&quot; (Apna ghar samjho)</p>
              <p className="text-sm text-foreground/70">Literally: &quot;Consider it your own house&quot; — Reflects the strong culture of hospitality in Baltistan</p>
            </div>

            <div className="border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded">
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Respect for Elders</h3>
              <p className="text-sm text-foreground/80 mb-2">&quot;بزرگ کی عزت کریں&quot; (Buzurg ki izzat karen)</p>
              <p className="text-sm text-foreground/70">Emphasizes the respect given to elderly family members in traditional Balti society</p>
            </div>

            <div className="border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded">
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Community & Family</h3>
              <p className="text-sm text-foreground/80 mb-2">&quot;پورا کُل ایک ہے&quot; (Pura kul ek hai)</p>
              <p className="text-sm text-foreground/70">Literally: &quot;The whole family is one&quot; — Reflects strong community bonds</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Tips for Using Idioms Authentically</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Using idioms correctly is an art. Follow these guidelines:
          </p>
          
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <h3 className="font-semibold text-green-900 dark:text-green-200 mb-1">Start Conservative</h3>
              <p className="text-sm text-foreground/80">Use idioms you&apos;ve heard native speakers use multiple times in similar contexts</p>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <h3 className="font-semibold text-green-900 dark:text-green-200 mb-1">Understand Context</h3>
              <p className="text-sm text-foreground/80">Pay attention to when, where, and with whom native speakers use specific idioms</p>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <h3 className="font-semibold text-green-900 dark:text-green-200 mb-1">Listen to Native Speakers</h3>
              <p className="text-sm text-foreground/80">Immerse yourself in authentic Balti content to absorb idioms naturally</p>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <h3 className="font-semibold text-green-900 dark:text-green-200 mb-1">Ask for Clarification</h3>
              <p className="text-sm text-foreground/80">Don&apos;t hesitate to ask native speakers to explain idioms and their usage</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <p className="text-foreground/80 leading-relaxed">
            Idiomatic language brings your Balti to life and connects you authentically with native speakers. While mastering idioms takes time, the effort is worthwhile. Start by listening to and recognizing idioms, then gradually incorporate them into your own speech. Remember that cultural understanding and respectful usage matter as much as correct pronunciation—idioms carry the values and personality of Balti culture within them.
          </p>
        </div>
      </section>
    </BlogArticleLayout>
  )
}
