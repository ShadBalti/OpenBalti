import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"
import Image from "next/image"
import { Clock, User, Calendar, ArrowRight, Share2, BookOpen, MessageCircle, Globe, Users, TrendingDown, BookmarkCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = generateMetadata(
  "Why the Balti Language Matters: Preserving Cultural Identity",
  "Explore why preserving the Balti language is crucial for maintaining cultural identity, preventing linguistic loss, and honoring the heritage of Baltistan communities worldwide.", { keywords: ["language preservation", "Balti culture", "endangered languages", "cultural identity"] },
)

export default function WhyBaltiMattersPage() {
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
              Why Balti Matters
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Why the Balti Language Matters: Preserving Cultural Identity
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-6 border-t border-border">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime="2025-01-10">January 10, 2025</time>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span>Language Preservation</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src="/images/blog/cultural-heritage.jpg"
            alt="Balti cultural heritage and community preserving their language"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-lg md:text-xl font-semibold mb-2">
              Preserving Language, Protecting Identity
            </p>
            <p className="text-sm md:text-base opacity-90">
              Every language lost is a unique worldview that disappears forever
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
                  <li><a href="#crisis" className="text-primary hover:underline transition-colors">The Crisis of Linguistic Diversity</a></li>
                  <li><a href="#history" className="text-primary hover:underline transition-colors">Language as a Gateway to History</a></li>
                  <li><a href="#identity" className="text-primary hover:underline transition-colors">Cultural Identity and Community</a></li>
                  <li><a href="#features" className="text-primary hover:underline transition-colors">Unique Linguistic Features</a></li>
                  <li><a href="#technology" className="text-primary hover:underline transition-colors">Role of Technology</a></li>
                  <li><a href="#action" className="text-primary hover:underline transition-colors">What Can We Do?</a></li>
                  <li><a href="#conclusion" className="text-primary hover:underline transition-colors">A Living Legacy</a></li>
                </ul>
              </nav>
            </aside>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
              {/* Crisis Section */}
              <section id="crisis" className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 md:p-8 rounded-r-lg" role="alert">
                <div className="flex items-start gap-4 mb-4">
                  <TrendingDown className="h-8 w-8 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-0">The Crisis of Linguistic Diversity</h2>
                    <p className="text-foreground/85 mb-4">
                      Every two weeks, a language dies somewhere in the world. By 2100, linguists estimate that half of the
                      world's 7,000 languages will be extinct. The Balti language, spoken by approximately 100,000 people in the
                      Baltistan region of the Karakoram, stands at a critical juncture. Yet this language is far more than just
                      words and grammar—it is a living archive of history, culture, and identity.
                    </p>
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-amber-200 dark:border-amber-900">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-700 dark:text-amber-400">7,000</div>
                    <div className="text-sm text-muted-foreground">Languages Today</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-700 dark:text-amber-400">50%</div>
                    <div className="text-sm text-muted-foreground">May Vanish by 2100</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-700 dark:text-amber-400">2 weeks</div>
                    <div className="text-sm text-muted-foreground">One Language Dies</div>
                  </div>
                </div>
              </section>

              <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/blog/language-loss.jpg"
                  alt="Visual representation of endangered languages around the world"
                  fill
                  className="object-cover"
                />
              </div>

              {/* History Section */}
              <section id="history">
                <h2 className="text-3xl font-bold mb-6">Language as a Gateway to History</h2>
                
                <div className="relative w-full h-[320px] rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/blog/ancient-trade-routes.jpg"
                    alt="Historical trade routes through Baltistan connecting civilizations"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-base leading-relaxed mb-6">
                  The Balti language carries within it centuries of Himalayan and Central Asian history. Words in Balti
                  reveal trade routes, cultural influences from Tibet, Persia, and South Asia, and the migration patterns of
                  ancient peoples. When a language dies, we lose access to how our ancestors understood the world, their
                  values, and their relationships with the natural environment.
                </p>
                <p className="text-base leading-relaxed">
                  Consider the Balti proverbs and idioms. They encode wisdom about living in one of the world's harshest
                  environments, lessons about resilience, community cooperation, and sustainable resource management. This
                  knowledge, accumulated over generations, cannot be fully translated into English or other dominant
                  languages without losing its essence.
                </p>

                {/* Quote Box */}
                <blockquote className="border-l-4 border-primary bg-primary/5 p-6 my-8 rounded-r-lg italic">
                  <p className="text-lg mb-2">
                    "When a language dies, we lose more than words. We lose entire ways of thinking, unique perspectives
                    on existence, and irreplaceable cultural knowledge."
                  </p>
                  <footer className="text-sm text-muted-foreground not-italic">
                    — Linguistic Anthropology Research
                  </footer>
                </blockquote>
              </section>

              {/* Identity Section */}
              <section id="identity">
                <h2 className="text-3xl font-bold mb-6">Cultural Identity and Community Cohesion</h2>
                
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

                <p className="text-base leading-relaxed mb-6">
                  For Balti speakers scattered across Baltistan, Pakistan, India, and diaspora communities worldwide, the
                  language is the primary symbol of group identity. It connects individuals to their heritage, their family,
                  and their sense of belonging to a larger community. Language is how culture is transmitted, preserved, and
                  celebrated.
                </p>

                {/* Alarming Statistic */}
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-lg p-6 my-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-red-900 dark:text-red-300">The Intergenerational Gap</h3>
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
                  </div>
                </div>
              </section>

              {/* Linguistic Features Section */}
              <section id="features">
                <h2 className="text-3xl font-bold mb-6">The Unique Linguistic Features of Balti</h2>
                
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/blog/linguistic-tree.jpg"
                    alt="Linguistic family tree showing Balti's connections to other languages"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-base leading-relaxed mb-6">
                  Balti is linguistically fascinating. It is a Sino-Tibetan language with influences from Persian, Arabic,
                  and Sanskrit. Its phonological system, grammatical structure, and vocabulary offer insights into
                  historical migrations and contact between civilizations. For linguists studying language evolution,
                  contact linguistics, and historical reconstruction, Balti is an invaluable resource.
                </p>

                {/* Language Influences */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                  {[
                    { lang: "Tibetan", influence: "Base Structure", color: "bg-purple-100 dark:bg-purple-950/30 border-purple-300 dark:border-purple-800" },
                    { lang: "Persian", influence: "Vocabulary", color: "bg-blue-100 dark:bg-blue-950/30 border-blue-300 dark:border-blue-800" },
                    { lang: "Arabic", influence: "Religious Terms", color: "bg-green-100 dark:bg-green-950/30 border-green-300 dark:border-green-800" },
                    { lang: "Sanskrit", influence: "Cultural Words", color: "bg-orange-100 dark:bg-orange-950/30 border-orange-300 dark:border-orange-800" },
                  ].map((item) => (
                    <div key={item.lang} className={`${item.color} border rounded-lg p-4 text-center`}>
                      <div className="font-bold text-sm mb-1">{item.lang}</div>
                      <div className="text-xs text-muted-foreground">{item.influence}</div>
                    </div>
                  ))}
                </div>

                <p className="text-base leading-relaxed">
                  The language also contains unique concepts and expressions that simply don't exist in English or other
                  major languages. These untranslatable words often express ideas about nature, community, or spiritual
                  concepts that are central to Balti worldview.
                </p>
              </section>

              {/* Technology Section */}
              <section id="technology">
                <h2 className="text-3xl font-bold mb-6">The Role of Technology in Language Preservation</h2>
                
                <div className="relative w-full h-[320px] rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/blog/digital-preservation.jpg"
                    alt="Digital tools and technology being used to preserve the Balti language"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-base leading-relaxed mb-6">
                  Digital platforms like OpenBalti are crucial in the fight to preserve endangered languages. By creating
                  accessible dictionaries, learning resources, and digital archives, we ensure that the Balti language is
                  available to anyone interested in learning it, regardless of geographic location or access to native
                  speakers.
                </p>

                {/* Digital Tools */}
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-lg p-6 my-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <BookmarkCheck className="h-5 w-5" aria-hidden="true" />
                    Digital Preservation Tools
                  </h3>
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
                        <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-base leading-relaxed">
                  Technology also provides opportunities for innovation. Balti speakers can use social media, podcasts, and
                  digital content creation to keep the language alive and relevant to younger generations, blending
                  tradition with modernity.
                </p>
              </section>

              {/* Action Section */}
              <section id="action" className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-6 md:p-8 rounded-r-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-0 flex items-center gap-3">
                  <MessageCircle className="h-8 w-8 text-green-600 dark:text-green-400" aria-hidden="true" />
                  What Can We Do?
                </h2>
                <p className="text-foreground/85 mb-6 font-medium">
                  Language preservation requires action at multiple levels. Here's how you can contribute:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Learn and Teach",
                      desc: "If you're Balti, pass the language to your children. If you're not, learn about and support endangered languages.",
                      icon: "📚"
                    },
                    {
                      title: "Support Documentation",
                      desc: "Contribute to projects like OpenBalti that create accessible learning materials.",
                      icon: "📝"
                    },
                    {
                      title: "Advocate for Education",
                      desc: "Support policies that include Balti in school curricula in Baltistan.",
                      icon: "🎓"
                    },
                    {
                      title: "Celebrate Culture",
                      desc: "Participate in cultural events, consume Balti music and media, and share it with others.",
                      icon: "🎭"
                    },
                    {
                      title: "Fund Research",
                      desc: "Support academic research into Balti linguistics and history.",
                      icon: "🔬"
                    },
                  ].map((action, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-white dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-900/50 hover:shadow-md transition-shadow">
                      <span className="text-3xl flex-shrink-0" aria-hidden="true">{action.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-green-900 dark:text-green-300">{action.title}</h3>
                        <p className="text-sm text-foreground/80 m-0">{action.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/blog/community-action.jpg"
                  alt="Balti community members taking action to preserve their language"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Conclusion Section */}
              <section id="conclusion">
                <h2 className="text-3xl font-bold mb-6">Conclusion: A Living Legacy</h2>
                
                <div className="relative w-full h-[320px] rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/blog/future-generation.jpg"
                    alt="Young Balti children representing the future of the language"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-base leading-relaxed mb-6">
                  The Balti language is not merely a historical artifact—it is a living, breathing part of human
                  civilization. Its preservation matters for cultural diversity, historical understanding, and the dignity
                  of Balti communities. In supporting the Balti language, we support the rights of indigenous peoples to
                  maintain their identity and pass their heritage to future generations.
                </p>
                <p className="text-lg leading-relaxed font-medium text-primary">
                  The question is not whether we can afford to preserve endangered languages like Balti. It's whether we can
                  afford not to.
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

              {/* Related Articles */}
              <div className="bg-secondary/30 border border-secondary/50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                <div className="space-y-3">
                  <Link href="/blog/getting-started-with-balti" className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="font-medium text-primary">Getting Started with Balti: A Beginner's Guide</div>
                    <div className="text-sm text-muted-foreground">Learn the basics of Balti pronunciation and grammar</div>
                  </Link>
                  <Link href="/blog/balti-culture-traditions" className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="font-medium text-primary">Balti Culture and Traditions</div>
                    <div className="text-sm text-muted-foreground">Explore the rich cultural heritage of Baltistan</div>
                  </Link>
                </div>
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
                  <h3 className="font-semibold text-2xl mb-2">Continue Your Balti Learning Journey</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
                    Interested in learning Balti? Start with our getting started guide or explore the dictionary.
                  </p>
                  <div className="flex gap-3 justify-center flex-wrap pt-2">
                    <Button asChild size="lg">
                      <Link href="/blog/getting-started-with-balti" className="gap-2">
                        <BookOpen className="h-4 w-4" aria-hidden="true" />
                        Getting Started Guide
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/dictionary">Browse Dictionary</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/learn" className="gap-2">
                        Explore Lessons
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </footer>
          </div>

          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <div className="bg-secondary/30 border border-secondary/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                  Table of Contents
                </h2>
                <nav aria-label="Table of contents">
                  <ul className="space-y-2 text-sm">
                    <li><a href="#crisis" className="text-primary hover:underline transition-colors block py-1">Linguistic Crisis</a></li>
                    <li><a href="#history" className="text-primary hover:underline transition-colors block py-1">Gateway to History</a></li>
                    <li><a href="#identity" className="text-primary hover:underline transition-colors block py-1">Cultural Identity</a></li>
                    <li><a href="#features" className="text-primary hover:underline transition-colors block py-1">Linguistic Features</a></li>
                    <li><a href="#technology" className="text-primary hover:underline transition-colors block py-1">Technology's Role</a></li>
                    <li><a href="#action" className="text-primary hover:underline transition-colors block py-1">Take Action</a></li>
                    <li><a href="#conclusion" className="text-primary hover:underline transition-colors block py-1">Living Legacy</a></li>
                  </ul>
                </nav>
              </div>

              {/* Key Statistics */}
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  At Risk
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">100,000+</div>
                    <div className="text-muted-foreground">Balti Speakers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">45%</div>
                    <div className="text-muted-foreground">Youth Fluency Rate</div>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="bg-secondary/30 border border-secondary/50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Share This Article</h3>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="justify-start gap-2">
                    <Share2 className="h-4 w-4" aria-hidden="true" />
                    Share on Social Media
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}