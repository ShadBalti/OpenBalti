import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"

export const metadata = generateMetadata(
  "Getting Started with Balti: A Beginner's Guide",
  "Your comprehensive guide to starting your Balti language learning journey. Learn pronunciation, basic grammar, and essential phrases.",
  { keywords: ["Balti beginner", "learn Balti", "Balti pronunciation", "beginner guide"] },
)

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <Link href="/blog" className="text-primary hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Getting Started with Balti: A Beginner's Guide</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>January 15, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2>Introduction: Why Learn Balti?</h2>
            <p>
              Balti is more than just a language—it's a key to understanding the rich culture of Baltistan. Whether
              you're reconnecting with your heritage, interested in linguistics, or simply passionate about preserving
              endangered languages, learning Balti offers a rewarding journey. This guide will help you take your first
              steps.
            </p>
          </section>

          <section>
            <h2>Part 1: Understanding the Balti Script</h2>
            <p>
              Historically, Balti was written using "Yige," a variant of classical Tibetan script. However, due to
              historical and political changes, modern Balti is typically written using a modified Perso-Arabic script
              called "Nastaliq" or in Latin characters. For this guide, we'll focus on the Latin transliteration system,
              which is most accessible to beginners.
            </p>
            <h3>Key Characters and Sounds</h3>
            <p>Balti uses most Latin characters with some special diacritical marks:</p>
            <ul>
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

          <section>
            <h2>Part 2: Pronunciation Essentials</h2>
            <p>
              Balti pronunciation is relatively straightforward once you understand a few key principles. Unlike
              English, Balti is mostly phonetic—words are pronounced as they are written.
            </p>
            <h3>Consonants</h3>
            <table className="min-w-full my-6">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Letter</th>
                  <th className="text-left py-2">Sound</th>
                  <th className="text-left py-2">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">ch</td>
                  <td>As in "chat"</td>
                  <td>chho (tea)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">sh</td>
                  <td>As in "ship"</td>
                  <td>shalma (garlic)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">zh</td>
                  <td>As in "measure"</td>
                  <td>zhimu (mother)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">ng</td>
                  <td>As in "ring"</td>
                  <td>ngonpa (long time ago)</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Part 3: Your First Words</h2>
            <p>
              Start with these essential words and phrases. Practice pronunciation out loud—hearing and speaking is
              crucial in language learning.
            </p>
            <h3>Greetings</h3>
            <ul>
              <li>
                <strong>Julley</strong> - Hello / Goodbye
              </li>
              <li>
                <strong>Skad kyid-po yin pe?</strong> - How are you?
              </li>
              <li>
                <strong>Ngas kyid-po yin</strong> - I'm well
              </li>
              <li>
                <strong>Tashi delek</strong> - Good luck / Greetings (formal)
              </li>
            </ul>
            <h3>Essential Words</h3>
            <ul>
              <li>
                <strong>Ngas</strong> - I
              </li>
              <li>
                <strong>Khyod</strong> - You
              </li>
              <li>
                <strong>Pha</strong> - Father
              </li>
              <li>
                <strong>Zhimu</strong> - Mother
              </li>
              <li>
                <strong>Chho</strong> - Tea
              </li>
              <li>
                <strong>Kha-la</strong> - Food
              </li>
            </ul>
          </section>

          <section>
            <h2>Part 4: Basic Grammar Concepts</h2>
            <p>
              Balti has some key grammatical features that differ from English. Understanding these early will
              accelerate your learning.
            </p>
            <h3>Sentence Structure</h3>
            <p>
              Balti follows a Subject-Object-Verb (SOV) word order, unlike English's Subject-Verb-Object (SVO). For
              example:
            </p>
            <ul>
              <li>
                <strong>English:</strong> "I drink tea" (I-drink-tea)
              </li>
              <li>
                <strong>Balti:</strong> "Ngas chho thuung-ngo" (I-tea-drink)
              </li>
            </ul>
            <h3>Verb Conjugation</h3>
            <p>Verbs in Balti change based on tense and the subject. Let's look at the verb "to go" (dhrug):</p>
            <ul>
              <li>
                <strong>Ngas dhrug-ngo</strong> - I go
              </li>
              <li>
                <strong>Khyod dhrug-ngo</strong> - You go
              </li>
              <li>
                <strong>Kho dhrug-ngo</strong> - He/She goes
              </li>
            </ul>
          </section>

          <section>
            <h2>Part 5: Your Learning Strategy</h2>
            <h3>Recommended Steps</h3>
            <ol>
              <li>
                <strong>Week 1:</strong> Master pronunciation and practice the alphabet. Spend 15-20 minutes daily.
              </li>
              <li>
                <strong>Week 2-3:</strong> Learn greetings and basic courtesy phrases. Start listening to Balti
                speakers.
              </li>
              <li>
                <strong>Week 4+:</strong> Expand vocabulary and practice basic conversations.
              </li>
            </ol>
            <h3>Learning Resources</h3>
            <ul>
              <li>Use the OpenBalti Dictionary to look up words and hear pronunciations</li>
              <li>Practice with native speakers if possible—join our community</li>
              <li>Listen to Balti music and folk songs for immersion</li>
              <li>Keep a learning journal of new words and phrases</li>
              <li>Join our Learn section for structured lessons</li>
            </ul>
          </section>

          <section>
            <h2>Conclusion: Taking the Next Steps</h2>
            <p>
              Learning Balti is a journey of cultural connection and linguistic discovery. Don't be discouraged if
              progress feels slow at first—every word you learn contributes to preserving a beautiful language. Start
              small, stay consistent, and most importantly, enjoy the process of learning.
            </p>
            <p>
              Ready to dive deeper? Explore our Learn section for detailed grammar lessons, cultural insights, and
              community resources. Happy learning!
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </main>
  )
}
