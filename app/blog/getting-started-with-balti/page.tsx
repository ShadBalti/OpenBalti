import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"
import Image from "next/image"
import { Clock, User, Calendar, ArrowRight, Share2, BookOpen, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = generateMetadata(
  "Getting Started with Balti: A Beginner's Guide",
  "Your comprehensive guide to starting your Balti language learning journey. Learn pronunciation, basic grammar, and essential phrases.",
  {
    keywords: ["Balti beginner", "learn Balti", "Balti pronunciation", "beginner guide"],
  },
)

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background to-background">
      <article className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-primary hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-muted-foreground">/</li>
            <li>
              <Link href="/blog" className="text-primary hover:underline">
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-muted-foreground">/</li>
            <li className="text-muted-foreground" aria-current="page">
              Getting Started
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Getting Started with Balti: A Beginner's Guide
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-6 border-t border-border">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime="2025-01-15">January 15, 2025</time>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <User className="h-4 w-4" aria-hidden="true" />
              <span>OpenBalti Team</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src="/images/blog/balti-landscape.jpg"
            alt="Beautiful landscape of Baltistan with mountains and traditional architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-sm md:text-base font-medium">
              Begin your journey into the Balti language and culture
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Content */}
          <div className="min-w-0">
            {/* Table of Contents - Mobile */}
            <aside className="lg:hidden bg-secondary/30 border border-secondary/50 rounded-lg p-6 mb-12">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
                Table of Contents
              </h2>
              <nav aria-label="Table of contents">
                <ul className="space-y-2 text-sm">
                  <li><a href="#intro" className="text-primary hover:underline transition-colors">Introduction: Why Learn Balti?</a></li>
                  <li><a href="#script" className="text-primary hover:underline transition-colors">Understanding the Balti Script</a></li>
                  <li><a href="#pronunciation" className="text-primary hover:underline transition-colors">Pronunciation Essentials</a></li>
                  <li><a href="#words" className="text-primary hover:underline transition-colors">Your First Words</a></li>
                  <li><a href="#grammar" className="text-primary hover:underline transition-colors">Basic Grammar Concepts</a></li>
                  <li><a href="#strategy" className="text-primary hover:underline transition-colors">Your Learning Strategy</a></li>
                  <li><a href="#conclusion" className="text-primary hover:underline transition-colors">Taking the Next Steps</a></li>
                </ul>
              </nav>
            </aside>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
              {/* Introduction */}
              <section id="intro">
                <h2 className="text-3xl font-bold mb-6">Introduction: Why Learn Balti?</h2>
                
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/blog/balti-community.jpg"
                    alt="Balti community gathering showcasing cultural heritage"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-lg leading-relaxed text-foreground/90">
                  Balti is more than just a language—it's a key to understanding the rich culture of Baltistan. Whether
                  you're reconnecting with your heritage, interested in linguistics, or simply passionate about preserving
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
                <h2 className="text-3xl font-bold mb-6">Part 1: Understanding the Balti Script</h2>
                
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

                <p className="text-base leading-relaxed">
                  Historically, Balti was written using "Yige," a variant of classical Tibetan script. However, due to
                  historical and political changes, modern Balti is typically written using a modified Perso-Arabic script
                  called "Nastaliq" or in Latin characters. For this guide, we'll focus on the Latin transliteration system,
                  which is most accessible to beginners.
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">Key Characters and Sounds</h3>
                <p className="mb-4">Balti uses most Latin characters with some special diacritical marks:</p>
                <ul className="space-y-3 mb-6 list-disc pl-6">
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
                    <strong>ng</strong> — nasal sound as in "ring"
                  </li>
                </ul>
              </section>

              {/* Pronunciation Section */}
              <section id="pronunciation">
                <h2 className="text-3xl font-bold mb-6">Part 2: Pronunciation Essentials</h2>
                
                <div className="relative w-full h-[280px] rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/blog/pronunciation-guide.jpg"
                    alt="Person learning Balti pronunciation with native speaker"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-base leading-relaxed mb-6">
                  Balti pronunciation is relatively straightforward once you understand a few key principles. Unlike
                  English, Balti is mostly phonetic—words are pronounced as they are written. This makes it easier for
                  beginners to develop correct pronunciation habits from the start.
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">Consonants</h3>
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
                <h2 className="text-3xl font-bold mb-6">Part 3: Your First Words</h2>
                
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/blog/balti-greeting.jpg"
                    alt="Traditional Balti greeting between community members"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-base leading-relaxed mb-6">
                  Start with these essential words and phrases. Practice pronunciation out loud—hearing and speaking is
                  crucial in language learning. Don't worry about perfect pronunciation at first; your accent will improve
                  with practice.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Greetings</h3>
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

                <h3 className="text-2xl font-semibold mt-8 mb-4">Essential Words</h3>
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
                <h2 className="text-3xl font-bold mb-6">Part 4: Basic Grammar Concepts</h2>
                
                <div className="relative w-full h-[280px] rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/blog/grammar-study.jpg"
                    alt="Student studying Balti grammar with books and notes"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-base leading-relaxed mb-6">
                  Balti has some key grammatical features that differ from English. Understanding these early will
                  accelerate your learning and help you construct meaningful sentences.
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">Sentence Structure</h3>
                <p className="mb-4">
                  Balti follows a Subject-Object-Verb (SOV) word order, unlike English's Subject-Verb-Object (SVO). For
                  example:
                </p>
                <div className="bg-amber-50 dark:bg-amber-950/10 p-6 rounded-lg border-l-4 border-amber-500 mb-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-amber-700 dark:text-amber-400 mb-1">English (SVO)</div>
                      <div className="font-mono text-amber-900 dark:text-amber-300">"I drink tea"</div>
                      <div className="text-sm text-muted-foreground mt-1">(Subject - Verb - Object)</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-amber-700 dark:text-amber-400 mb-1">Balti (SOV)</div>
                      <div className="font-mono text-amber-900 dark:text-amber-300">"Ngas chho thuung-ngo"</div>
                      <div className="text-sm text-muted-foreground mt-1">(Subject - Object - Verb)</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Learning Strategy */}
              <section id="strategy">
                <h2 className="text-3xl font-bold mb-6">Part 5: Your Learning Strategy</h2>
                
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/blog/learning-path.jpg"
                    alt="Illustrated path showing progression in language learning journey"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Recommended Learning Path</h3>
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
                        <div className="font-bold text-lg mb-1">{step.week}: {step.title}</div>
                        <p className="text-sm text-muted-foreground m-0">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Essential Resources</h3>
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/blog/resources.jpg"
                    alt="Collection of Balti learning resources including books, apps, and community"
                    fill
                    className="object-cover"
                  />
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Use the OpenBalti Dictionary to look up words and hear pronunciations",
                    "Practice with native speakers—join our growing community",
                    "Listen to Balti music and folk songs for immersion and cultural understanding",
                    "Keep a learning journal of new words and phrases you discover",
                    "Explore our Learn section for structured lessons and cultural insights",
                  ].map((resource, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      <span className="flex-1">{resource}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Conclusion */}
              <section id="conclusion">
                <h2 className="text-3xl font-bold mb-6">Conclusion: Taking the Next Steps</h2>
                
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/blog/journey-ahead.jpg"
                    alt="Path leading into mountains symbolizing the learning journey ahead"
                    fill
                    className="object-cover"
                  />
                </div>

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

            {/* Article Footer */}
            <footer className="mt-16 pt-8 border-t border-border space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <Link href="/blog" className="text-primary hover:underline flex items-center gap-2 group">
                  <ArrowRight className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                  Back to Blog
                </Link>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" aria-hidden="true" />
                  Share Article
                </Button>
              </div>

              {/* CTA Section */}
              <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-xl p-8 text-center space-y-4 border border-primary/20 overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="/images/blog/pattern-background.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-2xl">Ready to Learn More?</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Explore our complete learning resources and join a thriving community of Balti language enthusiasts.
                  </p>
                  <div className="flex gap-3 justify-center flex-wrap pt-2">
                    <Button asChild size="lg">
                      <Link href="/learn" className="gap-2">
                        <BookOpen className="h-4 w-4" aria-hidden="true" />
                        Explore Learning Guides
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/dictionary">Browse Dictionary</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/community" className="gap-2">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        Join Community
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </footer>
          </div>

          {/* Sidebar - Desktop TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 space-y-6">
              <div className="bg-secondary/30 border border-secondary/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                  Table of Contents
                </h2>
                <nav aria-label="Table of contents">
                  <ul className="space-y-2 text-sm">
                    <li><a href="#intro" className="text-primary hover:underline transition-colors block py-1">Introduction</a></li>
                    <li><a href="#script" className="text-primary hover:underline transition-colors block py-1">Balti Script</a></li>
                    <li><a href="#pronunciation" className="text-primary hover:underline transition-colors block py-1">Pronunciation</a></li>
                    <li><a href="#words" className="text-primary hover:underline transition-colors block py-1">First Words</a></li>
                    <li><a href="#grammar" className="text-primary hover:underline transition-colors block py-1">Grammar Basics</a></li>
                    <li><a href="#strategy" className="text-primary hover:underline transition-colors block py-1">Learning Strategy</a></li>
                    <li><a href="#conclusion" className="text-primary hover:underline transition-colors block py-1">Next Steps</a></li>
                  </ul>
                </nav>
              </div>

              {/* Author Card */}
              <div className="bg-secondary/30 border border-secondary/50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10">
                    <Image
                      src="/images/team/openbalti-logo.png"
                      alt="OpenBalti Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">OpenBalti Team</h3>
                    <p className="text-xs text-muted-foreground">Language Preservationists</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dedicated to preserving and promoting the Balti language through education and community engagement.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}