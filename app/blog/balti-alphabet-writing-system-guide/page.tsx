import { generateMetadata } from "@/lib/metadata"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"

export const metadata = generateMetadata(
  "Balti Alphabet & Writing System: Complete Guide to Script",
  "Master the Balti alphabet and writing system. Learn Perso-Arabic orthography, letter shapes, diacritics, and writing conventions with practice worksheets.",
  {
    keywords: [
      "Balti alphabet",
      "Balti script",
      "writing system",
      "how to write Balti",
      "Balti orthography",
    ],
  },
)

const article = ARTICLES["balti-alphabet-writing-system-guide"]

export default function AlphabetGuidePage() {
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
          <h2 className="text-2xl font-bold mb-4">Understanding Balti Writing Systems</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            The Balti language has a fascinating writing history with multiple script systems used throughout different periods. Today, the standard orthography uses an adapted Perso-Arabic script, written from right to left, which is the most common representation of written Balti in educational and official contexts.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Historical Writing Systems</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Balti has been recorded in several script systems throughout history:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Tibetan Script (གུང་ཡིག)</h3>
              <p className="text-sm text-foreground/80">
                Traditionally used in religious texts and formal writings. Still used in some educational and academic contexts. Recognized for its elegant structure and cultural significance.
              </p>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">Perso-Arabic Script (نستعليق)</h3>
              <p className="text-sm text-foreground/80">
                The modern standard script used in contemporary Balti writing. Adapted to represent Balti phonetic features with specialized diacritical marks. Most commonly seen in modern publications and digital media.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
              <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">Latin Romanization</h3>
              <p className="text-sm text-foreground/80">
                Used for academic transliteration and international communication. Provides a phonemic representation that makes Balti accessible to non-native script readers.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Modern Balti Alphabet (Perso-Arabic)</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            The modern Balti alphabet consists of 32 base letters, with additional diacritical marks for vowel indication and special phonetic features. Here are the main consonants:
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 mb-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right py-2 px-2">Letter</th>
                  <th className="text-left py-2 px-2">Name</th>
                  <th className="text-left py-2 px-2">IPA Sound</th>
                  <th className="text-left py-2 px-2">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="text-right py-2 px-2 text-lg font-bold">ا</td>
                  <td className="py-2 px-2">Alif</td>
                  <td className="py-2 px-2">[ə], [a]</td>
                  <td className="py-2 px-2">ارو (apple)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="text-right py-2 px-2 text-lg font-bold">ب</td>
                  <td className="py-2 px-2">Ba</td>
                  <td className="py-2 px-2">[b]</td>
                  <td className="py-2 px-2">بالم (grain)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="text-right py-2 px-2 text-lg font-bold">پ</td>
                  <td className="py-2 px-2">Pa</td>
                  <td className="py-2 px-2">[p]</td>
                  <td className="py-2 px-2">پان (leaf)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="text-right py-2 px-2 text-lg font-bold">ت</td>
                  <td className="py-2 px-2">Ta</td>
                  <td className="py-2 px-2">[t]</td>
                  <td className="py-2 px-2">تال (place)</td>
                </tr>
                <tr>
                  <td className="text-right py-2 px-2 text-lg font-bold">د</td>
                  <td className="py-2 px-2">Da</td>
                  <td className="py-2 px-2">[d]</td>
                  <td className="py-2 px-2">دهو (person)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Vowel Diacritics</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            In Balti orthography, vowels are indicated through diacritical marks placed above or below consonant letters. Here are the main vowel diacritics:
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 mb-4">
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="font-semibold">Fatḥa (َ)</span>
                <span className="text-foreground/70">Represents [a] sound</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="font-semibold">Kasra (ِ)</span>
                <span className="text-foreground/70">Represents [i] sound</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="font-semibold">Ḍamma (ُ)</span>
                <span className="text-foreground/70">Represents [u] sound</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="font-semibold">Sukun (ْ)</span>
                <span className="text-foreground/70">Indicates no vowel</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Writing Conventions & Rules</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Proper Balti writing follows several conventions that ensure clarity and readability:
          </p>
          
          <div className="space-y-4">
            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Direction</h3>
              <p className="text-sm text-foreground/80">Balti is written from right to left, following the Perso-Arabic script tradition.</p>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Letter Joining</h3>
              <p className="text-sm text-foreground/80">Most consonants connect to the following letter, with distinct initial, medial, and final forms.</p>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Spacing</h3>
              <p className="text-sm text-foreground/80">Words are separated by clear spaces. Diacritics should always be placed correctly above or below letters.</p>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Punctuation</h3>
              <p className="text-sm text-foreground/80">Modern Balti writing uses standard punctuation marks similar to Latin script (periods, commas, question marks).</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Practice: Writing Your First Words</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Try writing these common Balti words in the Perso-Arabic script:
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6">
            <div className="space-y-3 text-sm">
              <div className="py-2 px-3 bg-background rounded">
                <p className="font-semibold mb-1">سلام (Salam)</p>
                <p className="text-foreground/70">Meaning: Hello, Peace</p>
              </div>
              <div className="py-2 px-3 bg-background rounded">
                <p className="font-semibold mb-1">شکریہ (Shukriya)</p>
                <p className="text-foreground/70">Meaning: Thank you</p>
              </div>
              <div className="py-2 px-3 bg-background rounded">
                <p className="font-semibold mb-1">ہاں (Haan)</p>
                <p className="text-foreground/70">Meaning: Yes</p>
              </div>
              <div className="py-2 px-3 bg-background rounded">
                <p className="font-semibold mb-1">نہیں (Nahi)</p>
                <p className="text-foreground/70">Meaning: No</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <p className="text-foreground/80 leading-relaxed">
            Learning the Balti alphabet and writing system opens doors to reading authentic materials and engaging with the written tradition of Balti culture. Start with the basic letters, practice vowel diacritics, and gradually build your writing skills through consistent practice. Remember that like any writing system, mastery comes with time and dedication.
          </p>
        </div>
      </section>
    </BlogArticleLayout>
  )
}
