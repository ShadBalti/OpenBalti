import { generateMetadata } from "@/lib/metadata"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"
import { CheckCircle2 } from "lucide-react"

export const metadata = generateMetadata(
  "Best Resources for Learning Balti Language 2025",
  "Discover the top apps, websites, books, courses, online teachers, and community platforms for learning Balti. Expert reviews and recommendations for every learning style.",
  {
    keywords: [
      "Balti learning resources",
      "Balti apps",
      "Balti language courses",
      "learn Balti online",
      "Balti study materials",
    ],
  },
)

const article = ARTICLES["best-resources-learning-balti-2025"]

interface Resource {
  name: string
  type: string
  rating: number
  pros: string[]
  cons: string[]
  bestFor: string
}

export default function BestResourcesPage() {
  const resources: Resource[] = [
    {
      name: "Balti Language Mobile App",
      type: "Mobile Application",
      rating: 4.8,
      pros: [
        "Interactive lessons with gamification",
        "Spaced repetition system for vocabulary",
        "Offline access to lessons",
        "Progress tracking and achievements",
      ],
      cons: ["Subscription required for advanced features", "Limited conversation practice"],
      bestFor: "Beginners and solo learners",
    },
    {
      name: "Balti Tutor Online Platform",
      type: "Online Tutoring",
      rating: 4.9,
      pros: [
        "One-on-one personalized instruction",
        "Flexible scheduling",
        "Native speaker instructors",
        "Customized curriculum",
      ],
      cons: ["Can be expensive", "Requires consistent time commitment"],
      bestFor: "Serious learners seeking personalized instruction",
    },
    {
      name: "Balti Language Community Forum",
      type: "Community & Support",
      rating: 4.5,
      pros: [
        "Free peer-to-peer learning",
        "Language exchange opportunities",
        "Cultural insights from native speakers",
        "Active and welcoming community",
      ],
      cons: ["Quality varies by contributor", "Requires self-discipline"],
      bestFor: "Social learners and cultural enthusiasts",
    },
    {
      name: "Balti Traditional Stories Library",
      type: "Media & Content",
      rating: 4.7,
      pros: [
        "Authentic native content",
        "Cultural and linguistic immersion",
        "Free or low-cost access",
        "Improves listening comprehension",
      ],
      cons: ["Can be challenging for beginners", "Limited learning structure"],
      bestFor: "Intermediate learners building listening skills",
    },
  ]

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
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Why Quality Resources Matter</h2>
        <p>
          Learning Balti has never been more accessible, with numerous high-quality resources available online and offline. However, not all resources are created equal. The right combination of tools can accelerate your progress dramatically, while poor-quality materials can waste time and create frustration.
        </p>
        <p>
          This guide reviews the best resources available in 2025, from apps and websites to tutors and community groups, helping you choose the perfect combination for your learning style and goals.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Best Mobile Apps for Balti Learning</h2>
        <p>
          Mobile apps make learning convenient, allowing you to study anywhere and anytime. These apps combine structured lessons with gamification to maintain motivation.
        </p>

        {resources
          .filter((r) => r.type === "Mobile Application")
          .map((resource) => (
            <div key={resource.name} className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{resource.name}</h3>
                  <p className="text-sm text-muted-foreground">Mobile Application</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-primary">{resource.rating}/5</div>
                  <p className="text-xs text-muted-foreground">User Rating</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-green-600 dark:text-green-400">Pros</h4>
                  <ul className="space-y-1">
                    {resource.pros.map((pro) => (
                      <li key={pro} className="text-sm flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-red-600 dark:text-red-400">Cons</h4>
                  <ul className="space-y-1">
                    {resource.cons.map((con) => (
                      <li key={con} className="text-sm flex gap-2">
                        <span className="text-red-600 dark:text-red-400 font-bold">-</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm">
                  <span className="font-semibold">Best for:</span> {resource.bestFor}
                </p>
              </div>
            </div>
          ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Online Tutoring Platforms</h2>
        <p>
          One-on-one instruction with native speakers provides personalized feedback and accelerates learning. These platforms connect you with qualified Balti teachers.
        </p>

        {resources
          .filter((r) => r.type === "Online Tutoring")
          .map((resource) => (
            <div key={resource.name} className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{resource.name}</h3>
                  <p className="text-sm text-muted-foreground">Online Tutoring Platform</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-primary">{resource.rating}/5</div>
                  <p className="text-xs text-muted-foreground">User Rating</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-green-600 dark:text-green-400">Pros</h4>
                  <ul className="space-y-1">
                    {resource.pros.map((pro) => (
                      <li key={pro} className="text-sm flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-red-600 dark:text-red-400">Cons</h4>
                  <ul className="space-y-1">
                    {resource.cons.map((con) => (
                      <li key={con} className="text-sm flex gap-2">
                        <span className="text-red-600 dark:text-red-400 font-bold">-</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm">
                  <span className="font-semibold">Best for:</span> {resource.bestFor}
                </p>
              </div>
            </div>
          ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Community Learning Platforms</h2>
        <p>
          Learning with others creates motivation and accountability. Community platforms offer peer support, language exchange, and authentic cultural connection.
        </p>

        {resources
          .filter((r) => r.type === "Community & Support")
          .map((resource) => (
            <div key={resource.name} className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{resource.name}</h3>
                  <p className="text-sm text-muted-foreground">Community Platform</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-primary">{resource.rating}/5</div>
                  <p className="text-xs text-muted-foreground">User Rating</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-green-600 dark:text-green-400">Pros</h4>
                  <ul className="space-y-1">
                    {resource.pros.map((pro) => (
                      <li key={pro} className="text-sm flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-red-600 dark:text-red-400">Cons</h4>
                  <ul className="space-y-1">
                    {resource.cons.map((con) => (
                      <li key={con} className="text-sm flex gap-2">
                        <span className="text-red-600 dark:text-red-400 font-bold">-</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm">
                  <span className="font-semibold">Best for:</span> {resource.bestFor}
                </p>
              </div>
            </div>
          ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Authentic Media & Content Resources</h2>
        <p>
          Learning from native content—music, videos, podcasts, and traditional stories—provides authentic immersion and cultural understanding.
        </p>

        {resources
          .filter((r) => r.type === "Media & Content")
          .map((resource) => (
            <div key={resource.name} className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{resource.name}</h3>
                  <p className="text-sm text-muted-foreground">Media & Content</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-primary">{resource.rating}/5</div>
                  <p className="text-xs text-muted-foreground">User Rating</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-green-600 dark:text-green-400">Pros</h4>
                  <ul className="space-y-1">
                    {resource.pros.map((pro) => (
                      <li key={pro} className="text-sm flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-red-600 dark:text-red-400">Cons</h4>
                  <ul className="space-y-1">
                    {resource.cons.map((con) => (
                      <li key={con} className="text-sm flex gap-2">
                        <span className="text-red-600 dark:text-red-400 font-bold">-</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm">
                  <span className="font-semibold">Best for:</span> {resource.bestFor}
                </p>
              </div>
            </div>
          ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Books and Reference Materials</h2>
        <p>
          Traditional learning materials remain invaluable for understanding grammar, building vocabulary, and having offline reference resources.
        </p>

        <div className="bg-secondary/50 border border-border rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="font-semibold min-w-fit">Grammar Reference:</span>
              <span>Comprehensive grammar guides covering all aspects of Balti syntax and morphology</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold min-w-fit">Vocabulary Books:</span>
              <span>Themed vocabulary lists for specialized domains like business, culture, and daily life</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold min-w-fit">Bilingual Dictionaries:</span>
              <span>English-Balti and Balti-English dictionaries with pronunciation guides</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold min-w-fit">Cultural Readers:</span>
              <span>Simplified Balti texts with cultural narratives and translation notes</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Creating Your Resource Strategy</h2>
        <p>
          The best approach combines multiple resources to cover all language skills. Here&apos;s how to build a comprehensive learning stack:
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Core Learning Tool (30%)</h3>
            <p className="text-sm mt-2">
              Choose one primary resource (app or tutoring platform) for structured learning and vocabulary building.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Speaking Practice (30%)</h3>
            <p className="text-sm mt-2">
              Dedicate 30% of your time to speaking with tutors, language exchange partners, or conversation groups.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Authentic Content (25%)</h3>
            <p className="text-sm mt-2">
              Immerse yourself in native Balti music, videos, podcasts, and traditional stories for cultural and listening skill development.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Reference & Review (15%)</h3>
            <p className="text-sm mt-2">
              Use books, dictionaries, and grammar references to clarify concepts and review material.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Recommended Learning Combinations</h2>
        <p>
          Here are proven resource combinations for different learner types:
        </p>

        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Self-Motivated Solo Learner</h3>
            <p className="text-sm">Mobile app + Language exchange community + Authentic media library</p>
          </div>

          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Serious Language Enthusiast</h3>
            <p className="text-sm">Online tutoring + Mobile app + Community groups + Authentic content + Reference books</p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 rounded-lg p-4">
            <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Budget-Conscious Learner</h3>
            <p className="text-sm">Free community platform + YouTube/podcast channels + Free language exchange apps</p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-4">
            <h3 className="font-semibold text-amber-900 dark:text-amber-300 mb-2">Fast-Track Accelerated Learning</h3>
            <p className="text-sm">Intensive tutoring (daily) + Grammar reference book + Daily immersion in native content</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Key Takeaways</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Use a combination of resources to address all language skills (listening, speaking, reading, writing)</li>
          <li>Start with one primary resource and gradually add complementary tools</li>
          <li>Prioritize speaking practice and authentic content immersion</li>
          <li>Join communities for accountability, motivation, and cultural connection</li>
          <li>Invest in quality over quantity—better to use a few excellent resources deeply than many mediocre ones</li>
          <li>Adapt your resource stack as your proficiency level advances</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Conclusion</h2>
        <p>
          With the wealth of resources available in 2025, there&apos;s never been a better time to learn Balti. The key is choosing resources that align with your learning style, goals, and lifestyle. Start with what excites you most, build good habits, and gradually expand your resource toolkit as you progress.
        </p>
        <p>
          Remember: consistency and passion matter more than having perfect resources. Pick your tools, commit to daily practice, and watch your Balti skills flourish.
        </p>
      </section>
    </BlogArticleLayout>
  )
}
