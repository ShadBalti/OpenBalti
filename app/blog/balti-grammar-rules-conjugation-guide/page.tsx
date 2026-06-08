import { generateMetadata } from "@/lib/metadata"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"

export const metadata = generateMetadata(
  "Complete Balti Grammar Rules & Conjugation Guide | Master Verb Tenses",
  "Master Balti grammar with detailed verb conjugation patterns, noun declensions, agreement rules, and advanced structures. Comprehensive guide with practice exercises.",
  {
    keywords: [
      "Balti grammar",
      "verb conjugation",
      "grammar rules",
      "learn Balti grammar",
      "verb tenses",
      "noun declension",
    ],
  },
)

const article = ARTICLES["balti-grammar-rules-conjugation-guide"]

export default function GrammarGuidePage() {
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
          <h2 className="text-2xl font-bold mb-4">Introduction to Balti Grammar</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Balti grammar, like other Tibetic languages, follows an SOV (Subject-Object-Verb) word order and features a rich system of verbal conjugations, nominal declensions, and complex agreement patterns. Understanding these foundational structures is essential for intermediate learners seeking to achieve fluency.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Verb Conjugation Patterns</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Verbs in Balti are conjugated based on aspect, tense, mood, and subject agreement. The language distinguishes between perfective and imperfective aspects, present and past tenses, and indicative and subjunctive moods.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 mb-4">
            <h3 className="font-semibold mb-3">Present Tense Example: &apos;to go&apos; (གཞོང)</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2">Person</th>
                  <th className="text-left py-2 px-2">Balti Form</th>
                  <th className="text-left py-2 px-2">Transliteration</th>
                  <th className="text-left py-2 px-2">English</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-2">1st Singular</td>
                  <td className="py-2 px-2">ང་ གཞོང</td>
                  <td className="py-2 px-2">nga zhong</td>
                  <td className="py-2 px-2">I go</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-2">2nd Singular</td>
                  <td className="py-2 px-2">ཁྱོད་ གཞོང</td>
                  <td className="py-2 px-2">khyo zhong</td>
                  <td className="py-2 px-2">You go</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-2">3rd Singular</td>
                  <td className="py-2 px-2">ཁོ་ གཞོང</td>
                  <td className="py-2 px-2">kho zhong</td>
                  <td className="py-2 px-2">He/She/It goes</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-2">1st Plural</td>
                  <td className="py-2 px-2">ང་ ཚོ་ གཞོང</td>
                  <td className="py-2 px-2">nga tsho zhong</td>
                  <td className="py-2 px-2">We go</td>
                </tr>
                <tr>
                  <td className="py-2 px-2">2nd Plural</td>
                  <td className="py-2 px-2">ཁྱེད་ ཚོ་ གཞོང</td>
                  <td className="py-2 px-2">khye tsho zhong</td>
                  <td className="py-2 px-2">You all go</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Noun Declensions & Cases</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Balti nouns are declined for case, which indicates the grammatical relationship between the noun and other words in the sentence. The primary cases include nominative, ergative, genitive, dative, locative, and ablative.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 mb-4">
            <h3 className="font-semibold mb-3">Case System Example: &apos;book&apos; (དེབ)</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2">Case</th>
                  <th className="text-left py-2 px-2">Form</th>
                  <th className="text-left py-2 px-2">Function</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-2">Nominative</td>
                  <td className="py-2 px-2">དེབ</td>
                  <td className="py-2 px-2">Subject of sentence</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-2">Ergative</td>
                  <td className="py-2 px-2">དེབ་ས</td>
                  <td className="py-2 px-2">Agent of action</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-2">Genitive</td>
                  <td className="py-2 px-2">དེབ་གི</td>
                  <td className="py-2 px-2">Possession</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-2">Dative</td>
                  <td className="py-2 px-2">དེབ་ལ</td>
                  <td className="py-2 px-2">Indirect object</td>
                </tr>
                <tr>
                  <td className="py-2 px-2">Locative</td>
                  <td className="py-2 px-2">དེབ་གི་ནང་</td>
                  <td className="py-2 px-2">Location</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Common Grammar Mistakes & Solutions</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Learning grammar involves understanding not just the rules, but also the common mistakes learners make. Here are some typical errors and how to avoid them:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Mistake 1: Incorrect Word Order</h3>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Wrong:</strong> &apos;ང་ དེབ་ འདོད་ གཞོང&apos; (lit: I book want go)
              </p>
              <p className="text-sm text-foreground/80">
                <strong>Correct:</strong> &apos;ང་ དེབ་ འདོད་ པོ་ ཡིན&apos; (I book want am)
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Mistake 2: Verb-Subject Agreement</h3>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Wrong:</strong> &apos;ང་ གཞོང་པ&apos; (incorrect tense marking)
              </p>
              <p className="text-sm text-foreground/80">
                <strong>Correct:</strong> &apos;ང་ གཞོང་ ཡིན&apos; (correct agreement)
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Mistake 3: Case Marking Confusion</h3>
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Common Issue:</strong> Mixing ergative and nominative cases
              </p>
              <p className="text-sm text-foreground/80">
                <strong>Solution:</strong> Practice identifying which case is needed based on the sentence function
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Practice Exercises</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Master grammar through consistent practice. Try conjugating these verbs in different tenses and persons:
          </p>
          
          <div className="bg-primary/5 rounded-lg p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">1.</span>
                <span>Conjugate &apos;to read&apos; (ལྷག) in present, past, and future tenses for all persons</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">2.</span>
                <span>Decline the noun &apos;house&apos; (ཁང་པ) through all six cases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">3.</span>
                <span>Create sentences using ergative and nominative cases correctly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">4.</span>
                <span>Translate these English sentences to Balti using proper grammatical structures</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <p className="text-foreground/80 leading-relaxed">
            Balti grammar follows systematic patterns of verb conjugation, noun declension, and agreement rules. By mastering these foundational structures through consistent practice and careful attention to common mistakes, you&apos;ll significantly accelerate your progress toward fluency. Remember that grammar is not just about memorizing rules—it&apos;s about understanding how the language structures meaning and how words relate to each other in communication.
          </p>
        </div>
      </section>
    </BlogArticleLayout>
  )
}
