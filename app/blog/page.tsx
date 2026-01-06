import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"

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
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OpenBalti Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stories, insights, and guides about preserving the Balti language and celebrating our shared cultural
            heritage. Learn from experts and community members.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {article.category}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{article.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <time dateTime={article.date} className="text-sm text-muted-foreground">
                  {article.date}
                </time>
                <span className="text-sm text-muted-foreground">{article.readTime}</span>
              </div>
              <Link
                href={`/blog/${article.slug}`}
                className="inline-block mt-4 text-primary hover:underline font-medium"
              >
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20 max-w-4xl mx-auto rounded-lg my-8">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {["Learning", "Culture", "Linguistics", "Community"].map((category) => (
            <Link
              key={category}
              href={`/blog?category=${category.toLowerCase()}`}
              className="p-4 bg-card border border-border rounded hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold hover:text-primary">{category}</h3>
              <p className="text-sm text-muted-foreground">Explore {category.toLowerCase()} articles</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
