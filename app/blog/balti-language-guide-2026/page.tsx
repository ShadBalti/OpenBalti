import { generateMetadata } from "@/lib/metadata"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"

export const metadata = generateMetadata(
  "Comprehensive Balti Language Guide 2026",
  "An updated and comprehensive guide to the Balti language covering everything from basic alphabet and pronunciation to advanced grammar and contemporary usage.",
  {
    keywords: [
      "Balti language",
      "Balti vocabulary",
      "Balti grammar",
      "learn Balti",
      "Balti words",
      "Tibetic language",
      "endangered language",
    ],
  },
)

const article = ARTICLES["balti-language-guide-2026"]

export default function BaltiLanguageGuidePage() {
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
        <h2>Introduction: Your Comprehensive Balti Learning Resource</h2>
        <p>
          The Balti language is a living, evolving Tibetic language spoken by over 100,000 people across Baltistan,
          Kargil, Nubra Valley, and diaspora communities worldwide. This comprehensive guide brings together linguistic
          knowledge, practical vocabulary, and cultural context for learners and language enthusiasts. Whether you&apos;re
          beginning your journey or deepening your knowledge, this guide provides a foundation for understanding and
          appreciating Balti.
        </p>
      </section>

      <section>
        <h2>Part 1: Foundations - Alphabet and Phonetics</h2>

        <h3>The Balti Alphabet</h3>
        <p>
          Balti is most commonly written using a modified Perso-Arabic script called Nastaliq, though Latin
          transliteration is increasingly used, especially in educational materials and digital contexts. This guide
          primarily uses Latin transliteration for accessibility.
        </p>

        <h3>Key Phonetic Features</h3>
        <ul>
          <li><strong>Retroflex Consonants:</strong> Balti features retroflex sounds where the tongue curls back, creating distinct consonants</li>
          <li><strong>Vowel Length:</strong> The distinction between short and long vowels is phonemically significant</li>
          <li><strong>Aspiration:</strong> Many consonants can be aspirated or unaspirated, changing meaning</li>
          <li><strong>Nasal Sounds:</strong> The sound &quot;ng&quot; and nasal vowels are important in Balti phonology</li>
        </ul>

        <h3>Common Sound Examples</h3>
        <div className="bg-secondary/30 border border-secondary rounded-lg p-6 my-6 space-y-4">
          <div className="space-y-2">
            <div className="font-mono font-semibold text-primary">ch, sh, zh, ng</div>
            <p className="text-sm text-muted-foreground">Digraphs (two letters making one sound): &quot;chho&quot; (tea), &quot;shalma&quot; (garlic)</p>
          </div>
          <div className="space-y-2">
            <div className="font-mono font-semibold text-primary">Retroflex: ṭ, ḍ, ṇ</div>
            <p className="text-sm text-muted-foreground">Pronounced with tongue curled back against the hard palate</p>
          </div>
          <div className="space-y-2">
            <div className="font-mono font-semibold text-primary">Long Vowels: ā, ē, ī, ō, ū</div>
            <p className="text-sm text-muted-foreground">Pronounced roughly twice as long as their short counterparts</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Part 2: Essential Vocabulary by Theme</h2>

        <h3>Greetings and Social Expressions</h3>
        <div className="space-y-3 my-6">
          {[
            { balti: "Julley", english: "Hello / Goodbye (most common)" },
            { balti: "Tashi delek", english: "Greetings (formal, Tibetan influence)" },
            { balti: "Skad kyid-po yin pe?", english: "How are you?" },
            { balti: "Ngas kyid-po yin", english: "I'm well" },
            { balti: "Thugs che", english: "Thank you" },
            { balti: "Khyod la thugs che", english: "Thank you (formal)" },
          ].map((item) => (
            <div key={item.balti} className="flex justify-between items-start gap-4 p-3 bg-secondary/30 rounded-lg border border-secondary">
              <code className="font-mono font-semibold text-primary">{item.balti}</code>
              <span className="text-sm text-muted-foreground text-right flex-1">{item.english}</span>
            </div>
          ))}
        </div>

        <h3>Family and Kinship</h3>
        <div className="space-y-3 my-6">
          {[
            { balti: "Pha", english: "Father" },
            { balti: "Zhimu", english: "Mother" },
            { balti: "Pho", english: "Son" },
            { balti: "Bu-mo", english: "Daughter" },
            { balti: "Khyod", english: "Brother / Sister" },
            { balti: "Mi-tshan", english: "Name" },
          ].map((item) => (
            <div key={item.balti} className="flex justify-between items-start gap-4 p-3 bg-secondary/30 rounded-lg border border-secondary">
              <code className="font-mono font-semibold text-primary">{item.balti}</code>
              <span className="text-sm text-muted-foreground text-right flex-1">{item.english}</span>
            </div>
          ))}
        </div>

        <h3>Nature and Environment</h3>
        <div className="space-y-3 my-6">
          {[
            { balti: "Ri", english: "Mountain" },
            { balti: "Chu", english: "Water / River" },
            { balti: "Gyang", english: "Sky" },
            { balti: "Nyi-ma", english: "Sun" },
            { balti: "Da-wa", english: "Moon" },
            { balti: "Khyim", english: "House" },
            { balti: "Shing", english: "Tree / Wood" },
          ].map((item) => (
            <div key={item.balti} className="flex justify-between items-start gap-4 p-3 bg-secondary/30 rounded-lg border border-secondary">
              <code className="font-mono font-semibold text-primary">{item.balti}</code>
              <span className="text-sm text-muted-foreground text-right flex-1">{item.english}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Part 3: Grammar Essentials</h2>

        <h3>Sentence Structure: Subject-Object-Verb (SOV)</h3>
        <p>
          Unlike English which follows Subject-Verb-Object (SVO) order, Balti uses Subject-Object-Verb (SOV). This
          is a crucial structural feature to understand.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-lg p-6 my-6">
          <div className="space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wide text-blue-700 dark:text-blue-400 mb-1">English (SVO)</div>
              <div className="font-mono text-blue-900 dark:text-blue-300">&quot;I drink tea&quot;</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-blue-700 dark:text-blue-400 mb-1">Balti (SOV)</div>
              <div className="font-mono text-blue-900 dark:text-blue-300">&quot;Ngas chho thuung-ngo&quot;</div>
              <p className="text-sm text-muted-foreground mt-2">(I tea drink)</p>
            </div>
          </div>
        </div>

        <h3>Verbs and Tense</h3>
        <p>
          Balti verbs conjugate based on tense, aspect, and person. The verb system is complex, with distinctions between
          perfective and imperfective aspects affecting the verb form.
        </p>

        <h3>Honorifics and Politeness</h3>
        <p>
          Balti includes an elaborate system of honorifics—special forms used when addressing or referring to people of
          higher social status or to show respect. This is a distinctive feature of Tibetic languages and reflects the
          cultural values of Balti-speaking communities.
        </p>
      </section>

      <section>
        <h2>Part 4: Numbers and Counting</h2>

        <h3>Basic Numbers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          {[
            { balti: "chig", english: "One" },
            { balti: "nyis", english: "Two" },
            { balti: "gsum", english: "Three" },
            { balti: "bzhi", english: "Four" },
            { balti: "lnga", english: "Five" },
            { balti: "drug", english: "Six" },
            { balti: "bdun", english: "Seven" },
            { balti: "brgyad", english: "Eight" },
            { balti: "dgu", english: "Nine" },
            { balti: "bcu", english: "Ten" },
          ].map((item) => (
            <div key={item.balti} className="flex justify-between items-center gap-4 p-3 bg-secondary/30 rounded-lg border border-secondary">
              <code className="font-mono font-semibold text-primary">{item.balti}</code>
              <span className="text-sm text-muted-foreground">{item.english}</span>
            </div>
          ))}
        </div>

        <h3>Larger Numbers</h3>
        <div className="space-y-3 my-6">
          {[
            { balti: "bcu-phrag", english: "Twenty" },
            { balti: "khri", english: "Hundred" },
            { balti: "stong", english: "Thousand" },
          ].map((item) => (
            <div key={item.balti} className="flex justify-between items-start gap-4 p-3 bg-secondary/30 rounded-lg border border-secondary">
              <code className="font-mono font-semibold text-primary">{item.balti}</code>
              <span className="text-sm text-muted-foreground text-right flex-1">{item.english}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Part 5: Colors and Descriptions</h2>

        <div className="space-y-3 my-6">
          {[
            { balti: "dkar-po", english: "White" },
            { balti: "nag-po", english: "Black" },
            { balti: "dmar-po", english: "Red" },
            { balti: "sngon-po", english: "Blue" },
            { balti: "ser-po", english: "Yellow" },
            { balti: "ljo-bo", english: "Green" },
          ].map((item) => (
            <div key={item.balti} className="flex justify-between items-start gap-4 p-3 bg-secondary/30 rounded-lg border border-secondary">
              <code className="font-mono font-semibold text-primary">{item.balti}</code>
              <span className="text-sm text-muted-foreground text-right flex-1">{item.english}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Part 6: Real Conversation Examples</h2>

        <h3>A Simple Exchange</h3>
        <div className="bg-secondary/30 rounded-lg p-6 my-6 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Person A</p>
            <p className="font-mono text-primary">Julley! Skad kyid-po yin pe?</p>
            <p className="text-sm text-muted-foreground mt-1">Hello! How are you?</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Person B</p>
            <p className="font-mono text-primary">Ngas kyid-po yin. Khyod la thugs che.</p>
            <p className="text-sm text-muted-foreground mt-1">I&apos;m well. Thank you.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Part 7: Linguistic Context</h2>

        <h3>Language Family</h3>
        <p>
          Balti belongs to the Sino-Tibetan language family, specifically to the Tibetic group. It shares structural and
          lexical features with Tibetan, Ladakhi, and other Himalayan languages. This linguistic relationship reflects
          the historical and cultural connections between these regions.
        </p>

        <h3>Language Contact and Influence</h3>
        <p>
          Due to its geographic position and history, Balti has been influenced by several languages. Persian and Arabic
          have contributed vocabulary related to religion, administration, and trade. Urdu influence has increased due to
          political borders and education systems. Yet Balti remains distinctly Tibetic in its core grammar and
          phonology.
        </p>
      </section>

      <section>
        <h2>Part 8: Moving Forward in Your Learning</h2>

        <p>
          This guide provides foundational knowledge, but language learning is a continuous journey. The best way to
          deepen your understanding is through:
        </p>

        <ul>
          <li><strong>Immersion:</strong> Spend time with native speakers if possible</li>
          <li><strong>Music and Media:</strong> Engage with Balti songs, stories, and cultural content</li>
          <li><strong>Practice:</strong> Regular speaking and listening practice</li>
          <li><strong>Community:</strong> Connect with Balti language learning communities</li>
          <li><strong>Cultural Learning:</strong> Understand the culture alongside the language</li>
        </ul>

        <p>
          Remember: every word you learn contributes to preserving this language and honoring the heritage of the Balti
          people. Your learning journey is an act of cultural preservation.
        </p>
      </section>
    </BlogArticleLayout>
  )
}
