import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Calendar, ArrowRight, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = generateMetadata(
  "Balti Language Blog - Articles, Guides & Cultural Insights",
  "Discover in-depth articles on Balti language preservation, learning guides, cultural traditions, and community stories. Expert insights and practical tips for learners.",
  {
    keywords: [
      "Balti blog",
      "language learning articles",
      "cultural preservation",
      "Balti guides",
      "language tips",
      "Balti language news",
    ],
  },
)

export default function BlogPage() {
  const articles = [
    {
      slug: "getting-started-with-balti",
      title: "Getting Started with Balti: A Beginner's Guide",
      category: "Learning",
      date: "January 15, 2025",
      excerpt:
        "Learn the fundamentals of Balti language with this comprehensive beginner's guide covering pronunciation, basic grammar, essential phrases, and practical learning strategies.",
      readTime: "8 min read",
      keywords: "Balti for beginners, learn Balti, Balti pronunciation, beginner guide",
    },
    {
      slug: "why-balti-language-matters",
      title: "Why the Balti Language Matters: Preserving Cultural Identity",
      category: "Culture",
      date: "January 10, 2025",
      excerpt:
        "Explore why preserving the Balti language is crucial for maintaining cultural identity, preventing linguistic loss, and honoring the heritage of Baltistan communities worldwide.",
      readTime: "6 min read",
      keywords: "language preservation, Balti culture, endangered languages, cultural identity",
    },
    {
      slug: "balti-dialects-explained",
      title: "Understanding Balti Dialects: A Complete Overview",
      category: "Linguistics",
      date: "January 5, 2025",
      excerpt:
        "Deep dive into the regional variations of Balti language across Skardu, Khaplu, Kargil, and Nubra Valley. Learn what makes each dialect unique and how to identify them.",
      readTime: "10 min read",
      keywords: "Balti dialects, regional variations, Skardu, Khaplu, Kargil, Nubra",
    },
    {
      slug: "traditional-crafts-balti-culture",
      title: "Traditional Crafts: The Living Art of Baltistan",
      category: "Culture",
      date: "December 28, 2024",
      excerpt:
        "Discover the intricate traditional crafts of Baltistan including carpet weaving, woodcarving, embroidery, and metalwork that tell stories of heritage and artistic excellence.",
      readTime: "7 min read",
      keywords: "Balti crafts, traditional arts, carpet weaving, Baltistan culture",
    },
    {
      slug: "community-spotlight",
      title: "Community Spotlight: Native Speakers Preserving Balti",
      category: "Community",
      date: "December 20, 2024",
      excerpt:
        "Meet passionate community members who are dedicating their time and expertise to teach and preserve the Balti language for future generations through various initiatives.",
      readTime: "5 min read",
      keywords: "community, native speakers, language preservation, Balti community",
    },
    {
      slug: "learning-balti-with-music",
      title: "Learning Balti Through Music and Folk Songs",
      category: "Learning",
      date: "December 15, 2024",
      excerpt:
        "Music is a powerful way to learn any language. Explore traditional Balti songs, folk melodies, and how they can help you master the language naturally and enjoyably.",
      readTime: "6 min read",
      keywords: "Balti music, folk songs, language learning through music, cultural immersion",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/15 via-background to-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 px-3 py-1 rounded-full">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Blog & Resources</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">OpenBalti Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Stories, insights, and guides about preserving the Balti language and celebrating our shared cultural
            heritage. Learn from experts and community members dedicated to keeping this beautiful language alive.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div
                className={`h-1 ${
                  article.category === "Learning"
                    ? "bg-blue-500"
                    : article.category === "Culture"
                      ? "bg-amber-500"
                      : article.category === "Linguistics"
                        ? "bg-purple-500"
                        : "bg-green-500"
                }`}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 gap-2">
                  <Badge
                    variant="secondary"
                    className={`${
                      article.category === "Learning"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        : article.category === "Culture"
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                          : article.category === "Linguistics"
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    }`}
                  >
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <time dateTime={article.date} className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </time>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all font-medium text-sm"
                  >
                    Read <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Category Browse Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {[
              { name: "Learning", color: "blue" },
              { name: "Culture", color: "amber" },
              { name: "Linguistics", color: "purple" },
              { name: "Community", color: "green" },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/blog?category=${category.name.toLowerCase()}`}
                className={`p-4 bg-card border border-border rounded-lg hover:border-${category.color}-500/50 transition-colors group`}
              >
                <h3 className="font-semibold group-hover:text-primary transition-colors">{category.name}</h3>
                <p className="text-sm text-muted-foreground">Explore {category.name.toLowerCase()} articles</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Want to Contribute?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Have insights or stories about the Balti language? We'd love to hear from you. Share your knowledge with our
            community.
          </p>
          <Button asChild>
            <Link href="/contribute">Get Started Contributing</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
