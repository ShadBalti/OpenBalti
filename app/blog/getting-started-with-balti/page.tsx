import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Clock, User, Calendar, ArrowRight, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = generateMetadata(
  "Getting Started with Balti: A Beginner's Guide",
  "Your comprehensive guide to starting your Balti language learning journey. Learn pronunciation, basic grammar, and essential phrases.",
  { keywords: ["Balti beginner", "learn Balti", "Balti pronunciation", "beginner guide"] },
)

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background to-background">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/blog" className="text-primary hover:underline">
              Blog
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Getting Started</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Getting Started with Balti: A Beginner's Guide
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="h-4 w-4" />
              <time dateTime="2025-01-15">January 15, 2025</time>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <User className="h-4 w-4" />
              <span>By OpenBalti Team</span>
            </div>
          </div>
        </header>

        <aside className="bg-secondary/30 border border-secondary/50 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#intro" className="text-primary hover:underline">
                Introduction: Why Learn Balti?
              </a>
            </li>
            <li>
              <a href="#script" className="text-primary hover:underline">
                Understanding the Balti Script
              </a>
            </li>
            <li>
              <a href="#pronunciation" className="text-primary hover:underline">
                Pronunciation Essentials
              </a>
            </li>
            <li>
              <a href="#words" className="text-primary hover:underline">
                Your First Words
              </a>
            </li>
            <li>
              <a href="#grammar" className="text-primary hover:underline">
                Basic Grammar Concepts
              </a>
            </li>
            <li>
              <a href="#strategy" className="text-primary hover:underline">
                Your Learning Strategy
              </a>
            </li>
            <li>
              <a href="#conclusion" className="text-primary hover:underline">
                Taking the Next Steps
              </a>
            </li>
          </ul>
        </aside>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
          <section id="intro">
            <h2 className="text-3xl font-bold mb-4">Introduction: Why Learn Balti?</h2>
            <p className="text-lg leading-relaxed text-foreground/90">
              Balti is more than just a language—it's a key to understanding the rich culture of Baltistan. Whether
              you're reconnecting with your heritage, interested in linguistics, or simply passionate about preserving
              endangered languages, learning Balti offers a rewarding journey. This comprehensive guide will help you
              take your first steps with confidence and enthusiasm.
            </p>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-6 my-6">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-300">
                💡 <strong>Pro Tip:</strong> Learning Balti helps preserve a language spoken by over 100,000 people.
                Every word you learn contributes to cultural preservation!
              </p>
            </div>
          </section>

          <section id="script">
            <h2 className="text-3xl font-bold mb-4">Part 1: Understanding the Balti Script</h2>
            <p className="text-base leading-relaxed">
              Historically, Balti was written using "Yige," a variant of classical Tibetan script. However, due to
              historical and political changes, modern Balti is typically written using a modified Perso-Arabic script
              called "Nastaliq" or in Latin characters. For this guide, we'll focus on the Latin transliteration system,
              which is most accessible to beginners.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Key Characters and Sounds</h3>
            <p className="mb-4">Balti uses most Latin characters with some special diacritical marks:</p>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>ā, ē, ī, ō, ū</strong> = long vowels (pronounced twice as long as short vowels)
              </li>
              <li>
                <strong>a, e, i, o, u</strong> = short vowels
              </li>
              <li>
                <strong>ch, sh, zh</strong> = digraphs (two letters making one sound)
              </li>
              <li>
                <strong>ng</strong> = nasal sound as in "ring"
              </li>
            </ul>
          </section>

          <section id="pronunciation">
            <h2 className="text-3xl font-bold mb-4">Part 2: Pronunciation Essentials</h2>
            <p className="text-base leading-relaxed mb-6">
              Balti pronunciation is relatively straightforward once you understand a few key principles. Unlike
              English, Balti is mostly phonetic—words are pronounced as they are written. This makes it easier for
              beginners to develop correct pronunciation habits from the start.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Consonants</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-semibold">Letter</th>
                    <th className="text-left py-3 px-4 font-semibold">Sound</th>
                    <th className="text-left py-3 px-4 font-semibold">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-secondary/30">
                    <td className="py-3 px-4">
                      <code className="bg-secondary px-2 py-1 rounded">ch</code>
                    </td>
                    <td className="py-3 px-4">As in "chat"</td>
                    <td className="py-3 px-4">
                      <strong>chho</strong> (tea)
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary/30">
                    <td className="py-3 px-4">
                      <code className="bg-secondary px-2 py-1 rounded">sh</code>
                    </td>
                    <td className="py-3 px-4">As in "ship"</td>
                    <td className="py-3 px-4">
                      <strong>shalma</strong> (garlic)
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary/30">
                    <td className="py-3 px-4">
                      <code className="bg-secondary px-2 py-1 rounded">zh</code>
                    </td>
                    <td className="py-3 px-4">As in "measure"</td>
                    <td className="py-3 px-4">
                      <strong>zhimu</strong> (mother)
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="py-3 px-4">
                      <code className="bg-secondary px-2 py-1 rounded">ng</code>
                    </td>
                    <td className="py-3 px-4">As in "ring"</td>
                    <td className="py-3 px-4">
                      <strong>ngonpa</strong> (long time ago)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="words">
            <h2 className="text-3xl font-bold mb-4">Part 3: Your First Words</h2>
            <p className="text-base leading-relaxed mb-6">
              Start with these essential words and phrases. Practice pronunciation out loud—hearing and speaking is
              crucial in language learning. Don't worry about perfect pronunciation at first; your accent will improve
              with practice.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-4">Greetings</h3>
            <div className="space-y-3 mb-8 bg-green-50 dark:bg-green-950/10 p-6 rounded-lg border border-green-200 dark:border-green-900/30">
              <div>
                <strong className="text-green-900 dark:text-green-300">Julley</strong> - Hello / Goodbye
              </div>
              <div>
                <strong className="text-green-900 dark:text-green-300">Skad kyid-po yin pe?</strong> - How are you?
              </div>
              <div>
                <strong className="text-green-900 dark:text-green-300">Ngas kyid-po yin</strong> - I'm well
              </div>
              <div>
                <strong className="text-green-900 dark:text-green-300">Tashi delek</strong> - Good luck / Greetings
                (formal)
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-4">Essential Words</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                ["Ngas", "I"],
                ["Khyod", "You"],
                ["Pha", "Father"],
                ["Zhimu", "Mother"],
                ["Chho", "Tea"],
                ["Kha-la", "Food"],
              ].map(([word, meaning]) => (
                <div
                  key={word}
                  className="p-4 bg-secondary/50 rounded-lg border border-secondary hover:border-primary/50 transition-colors"
                >
                  <div className="font-semibold text-primary">{word}</div>
                  <div className="text-sm text-muted-foreground">{meaning}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="grammar">
            <h2 className="text-3xl font-bold mb-4">Part 4: Basic Grammar Concepts</h2>
            <p className="text-base leading-relaxed mb-6">
              Balti has some key grammatical features that differ from English. Understanding these early will
              accelerate your learning and help you construct meaningful sentences.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Sentence Structure</h3>
            <p className="mb-4">
              Balti follows a Subject-Object-Verb (SOV) word order, unlike English's Subject-Verb-Object (SVO). For
              example:
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/10 p-6 rounded-lg border border-amber-200 dark:border-amber-900/30 mb-6">
              <div className="space-y-3">
                <div>
                  <strong className="text-amber-900 dark:text-amber-300">English:</strong> "I drink tea" (I-drink-tea)
                </div>
                <div>
                  <strong className="text-amber-900 dark:text-amber-300">Balti:</strong> "Ngas chho thuung-ngo"
                  (I-tea-drink)
                </div>
              </div>
            </div>
          </section>

          <section id="strategy">
            <h2 className="text-3xl font-bold mb-4">Part 5: Your Learning Strategy</h2>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Recommended Learning Path</h3>
            <ol className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="font-bold text-lg text-primary">1.</span>
                <div>
                  <strong>Week 1: Master Pronunciation</strong>
                  <p className="text-sm text-muted-foreground">
                    Spend 15-20 minutes daily on pronunciation and alphabet. Practice out loud.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-primary">2.</span>
                <div>
                  <strong>Week 2-3: Learn Greetings</strong>
                  <p className="text-sm text-muted-foreground">
                    Focus on basic courtesy phrases and start listening to native speakers.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-primary">3.</span>
                <div>
                  <strong>Week 4+: Build Vocabulary</strong>
                  <p className="text-sm text-muted-foreground">
                    Expand vocabulary and practice basic conversations with native speakers.
                  </p>
                </div>
              </li>
            </ol>

            <h3 className="text-2xl font-semibold mt-6 mb-4">Essential Resources</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Use the OpenBalti Dictionary to look up words and hear pronunciations</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Practice with native speakers—join our growing community</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Listen to Balti music and folk songs for immersion and cultural understanding</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Keep a learning journal of new words and phrases you discover</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Explore our Learn section for structured lessons and cultural insights</span>
              </li>
            </ul>
          </section>

          <section id="conclusion">
            <h2 className="text-3xl font-bold mb-4">Conclusion: Taking the Next Steps</h2>
            <p className="text-base leading-relaxed mb-6">
              Learning Balti is a journey of cultural connection and linguistic discovery. Don't be discouraged if
              progress feels slow at first—every word you learn contributes to preserving a beautiful language. Start
              small, stay consistent, and most importantly, enjoy the process of learning.
            </p>
            <p className="text-base leading-relaxed">
              Ready to dive deeper? Explore our Learn section for detailed grammar lessons, cultural insights, and
              community resources. Connect with other learners, share your progress, and be part of a global community
              dedicated to keeping the Balti language alive.
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-border space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <Link href="/blog" className="text-primary hover:underline flex items-center gap-2">
              ← Back to Blog
            </Link>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                Share Article
              </Button>
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-6 text-center space-y-3">
            <h3 className="font-semibold text-lg">Ready to Learn More?</h3>
            <p className="text-muted-foreground">Explore our complete learning resources and community.</p>
            <div className="flex gap-2 justify-center flex-wrap">
              <Button asChild variant="default">
                <Link href="/learn">Explore Learning Guides</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dictionary">Browse Dictionary</Link>
              </Button>
            </div>
          </div>
        </footer>
      </article>
    </main>
  )
}
