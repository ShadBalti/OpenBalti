import { generateMetadata } from "@/lib/metadata"
import Image from "next/image"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"

export const metadata = generateMetadata(
  "Getting Started with Balti: A Beginner's Guide",
  "Your comprehensive guide to starting your Balti language learning journey. Learn pronunciation, basic grammar, and essential phrases.",
  {
    keywords: ["Balti beginner", "learn Balti", "Balti pronunciation", "beginner guide"],
  },
)

const article = ARTICLES["getting-started-with-balti"]

export default function GettingStartedPage() {
  return (
    <BlogArticleLayout
      slug={article.slug}
      title={article.title}
      excerpt={article.excerpt}
      date={article.date}
      readTime={article.readTime}
      category={article.category}
      author={article.author}
      heroImage={article.heroImage}
      relatedArticles={article.relatedArticles}
    >
      {/* Introduction */}
      <section id="intro">
        <h2>Introduction: Why Learn Balti?</h2>

        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-6 shadow-lg">
          <Image
            src="/images/blog/balti-community.jpg"
            alt="Balti community gathering showcasing cultural heritage"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Balti is more than just a language—it&apos;s a key to understanding the rich culture of Baltistan. Whether
          you&apos;re reconnecting with your heritage, interested in linguistics, or simply passionate about preserving
          endangered languages, learning Balti offers a rewarding journey. This comprehensive guide will help you
          take your first steps with confidence and enthusiasm.
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg p-6 my-6" role="note">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-300 m-0">
            💡 <strong>Pro Tip:</strong> Learning Balti helps preserve a language spoken by over 100,000 people.
            Every word you learn contributes to cultural preservation!
          </p>
        </div>
      </section>

      {/* Script Section */}
      <section id="script">
        <h2>Part 1: Understanding the Balti Script</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/blog/tibetan-script.jpg"
              alt="Traditional Tibetan Yige script used historically for Balti"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
              Traditional Yige (Tibetan) Script
            </div>
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/blog/nastaliq-script.jpg"
              alt="Modern Perso-Arabic Nastaliq script for Balti"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
              Modern Nastaliq Script
            </div>
          </div>
        </div>

        <p>
          Historically, Balti was written using &quot;Yige,&quot; a variant of classical Tibetan script. However, due to
          historical and political changes, modern Balti is typically written using a modified Perso-Arabic script
          called &quot;Nastaliq&quot; or in Latin characters. For this guide, we&apos;ll focus on the Latin transliteration system,
          which is most accessible to beginners.
        </p>
        <h3>Key Characters and Sounds</h3>
        <p>Balti uses most Latin characters with some special diacritical marks:</p>
        <ul>
          <li>
            <strong>ā, ē, ī, ō, ū</strong> — long vowels (pronounced twice as long as short vowels)
          </li>
          <li>
            <strong>a, e, i, o, u</strong> — short vowels
          </li>
          <li>
            <strong>ch, sh, zh</strong> — digraphs (two letters making one sound)
          </li>
          <li>
            <strong>ng</strong> — nasal sound as in &quot;ring&quot;
          </li>
        </ul>
      </section>

      {/* Pronunciation Section */}
      <section id="pronunciation">
        <h2>Part 2: Pronunciation Essentials</h2>

        <div className="relative w-full h-[280px] rounded-lg overflow-hidden mb-6 shadow-lg">
          <Image
            src="/images/blog/pronunciation-guide.jpg"
            alt="Person learning Balti pronunciation with native speaker"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Balti pronunciation is relatively straightforward once you understand a few key principles. Unlike
          English, Balti is mostly phonetic—words are pronounced as they are written. This makes it easier for
          beginners to develop correct pronunciation habits from the start.
        </p>
        <h3>Consonants</h3>
        <div className="overflow-x-auto mb-6 -mx-4 sm:mx-0">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-secondary/50 border-b-2 border-border">
                <th className="text-left py-3 px-4 font-semibold">Letter</th>
                <th className="text-left py-3 px-4 font-semibold">Sound</th>
                <th className="text-left py-3 px-4 font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                { letter: "ch", sound: 'As in "chat"', example: "chho (tea)" },
                { letter: "sh", sound: 'As in "ship"', example: "shalma (garlic)" },
                { letter: "zh", sound: 'As in "measure"', example: "zhimu (mother)" },
                { letter: "ng", sound: 'As in "ring"', example: "ngonpa (long time ago)" },
              ].map((row, idx) => (
                <tr key={row.letter} className={`border-b border-border hover:bg-secondary/30 transition-colors ${idx % 2 === 0 ? 'bg-secondary/10' : ''}`}>
                  <td className="py-3 px-4">
                    <code className="bg-secondary px-2 py-1 rounded text-primary font-mono">{row.letter}</code>
                  </td>
                  <td className="py-3 px-4">{row.sound}</td>
                  <td className="py-3 px-4">
                    <strong>{row.example}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* First Words Section */}
      <section id="words">
        <h2>Part 3: Your First Words</h2>

        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-6 shadow-lg">
          <Image
            src="/images/blog/balti-greeting.jpg"
            alt="Traditional Balti greeting between community members"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Start with these essential words and phrases. Practice pronunciation out loud—hearing and speaking is
          crucial in language learning. Don&apos;t worry about perfect pronunciation at first; your accent will improve
          with practice.
        </p>

        <h3>Greetings</h3>
        <div className="space-y-4 mb-8 bg-green-50 dark:bg-green-950/10 p-6 rounded-lg border border-green-200 dark:border-green-900/30">
          {[
            { balti: "Julley", english: "Hello / Goodbye" },
            { balti: "Skad kyid-po yin pe?", english: "How are you?" },
            { balti: "Ngas kyid-po yin", english: "I'm well" },
            { balti: "Tashi delek", english: "Good luck / Greetings (formal)" },
          ].map((phrase) => (
            <div key={phrase.balti} className="flex flex-col sm:flex-row sm:items-center gap-2">
              <strong className="text-green-900 dark:text-green-300 font-mono text-lg">{phrase.balti}</strong>
              <span className="text-muted-foreground">— {phrase.english}</span>
            </div>
          ))}
        </div>

        <h3>Essential Words</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            ["Ngas", "I", "/images/icons/person.svg"],
            ["Khyod", "You", "/images/icons/people.svg"],
            ["Pha", "Father", "/images/icons/father.svg"],
            ["Zhimu", "Mother", "/images/icons/mother.svg"],
            ["Chho", "Tea", "/images/icons/tea.svg"],
            ["Kha-la", "Food", "/images/icons/food.svg"],
          ].map(([word, meaning, icon]) => (
            <div
              key={word}
              className="p-4 bg-secondary/50 rounded-lg border border-secondary hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-8 h-8 opacity-60">
                  <Image
                    src={icon as string}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="font-semibold text-primary text-lg font-mono">{word}</div>
              </div>
              <div className="text-sm text-muted-foreground pl-11">{meaning}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Grammar Section */}
      <section id="grammar">
        <h2>Part 4: Basic Grammar Concepts</h2>

        <div className="relative w-full h-[280px] rounded-lg overflow-hidden mb-6 shadow-lg">
          <Image
            src="/images/blog/grammar-study.jpg"
            alt="Student studying Balti grammar with books and notes"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Balti has some key grammatical features that differ from English. Understanding these early will
          accelerate your learning and help you construct meaningful sentences.
        </p>
        <h3>Sentence Structure</h3>
        <p>
          Balti follows a Subject-Object-Verb (SOV) word order, unlike English&apos;s Subject-Verb-Object (SVO). For
          example:
        </p>
        <div className="bg-amber-50 dark:bg-amber-950/10 p-6 rounded-lg border-l-4 border-amber-500 mb-6">
          <div className="space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wide text-amber-700 dark:text-amber-400 mb-1">English (SVO)</div>
              <div className="font-mono text-amber-900 dark:text-amber-300">&quot;I drink tea&quot;</div>
              <div className="text-sm text-muted-foreground mt-1">(Subject - Verb - Object)</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-amber-700 dark:text-amber-400 mb-1">Balti (SOV)</div>
              <div className="font-mono text-amber-900 dark:text-amber-300">&quot;Ngas chho thuung-ngo&quot;</div>
              <div className="text-sm text-muted-foreground mt-1">(Subject - Object - Verb)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Strategy */}
      <section id="strategy">
        <h2>Part 5: Your Learning Strategy</h2>

        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-6 shadow-lg">
          <Image
            src="/images/blog/learning-path.jpg"
            alt="Illustrated path showing progression in language learning journey"
            fill
            className="object-cover"
          />
        </div>

        <h3>Recommended Learning Path</h3>
        <ol className="space-y-6 mb-8">
          {[
            {
              week: "Week 1",
              title: "Master Pronunciation",
              desc: "Spend 15-20 minutes daily on pronunciation and alphabet. Practice out loud.",
            },
            {
              week: "Week 2-3",
              title: "Learn Greetings",
              desc: "Focus on basic courtesy phrases and start listening to native speakers.",
            },
            {
              week: "Week 4+",
              title: "Build Vocabulary",
              desc: "Expand vocabulary and practice basic conversations with native speakers.",
            },
          ].map((step, idx) => (
            <li key={idx} className="flex gap-4 p-4 bg-secondary/30 rounded-lg border border-secondary hover:border-primary/50 transition-colors">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                {idx + 1}
              </span>
              <div className="flex-1">
                <div className="font-bold text-lg mb-1">
                  {step.week}: {step.title}
                </div>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Conclusion */}
      <section id="conclusion">
        <h2>Taking the Next Steps</h2>
        <p>
          Congratulations on taking the first step in your Balti language journey! Remember, language learning is a
          marathon, not a sprint. The consistent practice you invest now will pay dividends as you progress. Join our
          community of learners, practice with native speakers, and immerse yourself in Balti culture through music,
          literature, and conversations.
        </p>
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
          <h3 className="font-semibold mb-2">Keep Learning</h3>
          <p className="text-sm text-muted-foreground">
            Explore our other guides on dialects, grammar, and cultural topics to deepen your understanding of this
            beautiful language.
          </p>
        </div>
      </section>
    </BlogArticleLayout>
  )
}
