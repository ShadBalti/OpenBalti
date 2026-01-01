import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"

export const metadata = generateMetadata(
  "Balti Language Blog - News, Guides & Cultural Insights",
  "Stay updated with the latest articles on Balti language preservation, learning tips, cultural insights, and community stories from OpenBalti.",
  { keywords: ["Balti blog", "language learning", "cultural preservation", "Balti news"] },
)

export default function BlogPage() {
  const articles = [
    {
      slug: "getting-started-with-balti",
      title: "Getting Started with Balti: A Beginner's Guide",
      category: "Learning",
      date: "January 15, 2025",
      excerpt:
        "Learn the fundamentals of Balti language with this comprehensive beginner's guide covering pronunciation, basic grammar, and first phrases.",
      readTime: "8 min read",
    },
    {
      slug: "why-balti-language-matters",
      title: "Why the Balti Language Matters: Preserving Cultural Identity",
      category: "Culture",
      date: "January 10, 2025",
      excerpt:
        "Explore why preserving the Balti language is crucial for maintaining cultural identity and preventing the loss of unique linguistic heritage.",
      readTime: "6 min read",
    },
    {
      slug: "balti-dialects-explained",
      title: "Understanding Balti Dialects: A Complete Overview",
      category: "Linguistics",
      date: "January 5, 2025",
      excerpt:
        "Deep dive into the regional variations of Balti language across Skardu, Khaplu, Kargil, and Nubra Valley. Learn what makes each unique.",
      readTime: "10 min read",
    },
    {
      slug: "traditional-crafts-balti-culture",
      title: "Traditional Crafts: The Living Art of Baltistan",
      category: "Culture",
      date: "December 28, 2024",
      excerpt:
        "Discover the intricate traditional crafts of Baltistan including carpet weaving, woodcarving, and embroidery that tell stories of heritage.",
      readTime: "7 min read",
    },
    {
      slug: "community-spotlight",
      title: "Community Spotlight: Native Speakers Preserving Balti",
      category: "Community",
      date: "December 20, 2024",
      excerpt:
        "Meet passionate community members who are dedicating their time to teach and preserve the Balti language for future generations.",
      readTime: "5 min read",
    },
    {
      slug: "learning-balti-with-music",
      title: "Learning Balti Through Music and Folk Songs",
      category: "Learning",
      date: "December 15, 2024",
      excerpt:
        "Music is a powerful way to learn any language. Explore traditional Balti songs and how they can help you master the language naturally.",
      readTime: "6 min read",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OpenBalti Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stories, insights, and guides about preserving the Balti language and celebrating our shared cultural
            heritage.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {article.category}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">{article.date}</span>
                <span className="text-sm text-muted-foreground">{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
