import { generateMetadata } from "@/lib/metadata"
import { ARTICLES, ALL_ARTICLES } from "@/lib/blog-articles"
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

// Centralized category colors
export const categoryColors: Record<string, string> = {
  Learning: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Culture: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Linguistics: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  Community: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
}

export const categoryBorderColors: Record<string, string> = {
  Learning: "bg-blue-500",
  Culture: "bg-amber-500",
  Linguistics: "bg-purple-500",
  Community: "bg-green-500",
}

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const selectedCategory = params.category?.toLowerCase()
  // Map articles from configuration to display format with read time
  const articles = ALL_ARTICLES.map((article) => ({
    slug: article.slug,
    title: article.title,
    category: article.category,
    date: article.date,
    excerpt: article.excerpt,
    readTime: article.readTime,
    keywords: article.keywords,
  }))

  const categories = [
    { name: "Learning", color: "blue" },
    { name: "Culture", color: "amber" },
    { name: "Linguistics", color: "purple" },
    { name: "Community", color: "green" },
  ]

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category.toLowerCase() === selectedCategory)
    : articles

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

      {/* Category Filter */}
      <section className="sticky top-16 z-40 py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Filter:</span>
            <Link
              href="/blog"
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                !selectedCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              All Articles
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/blog?category=${cat.name.toLowerCase()}`}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat.name.toLowerCase()
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">No articles found in this category.</p>
            <Link href="/blog" className="text-primary hover:underline font-medium">
              View all articles →
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col"
            >
              <div className={`h-1 ${categoryBorderColors[article.category]}`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3 gap-2">
                  <Badge
                    variant="secondary"
                    className={categoryColors[article.category]}
                  >
                    {article.category}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border gap-2">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all font-medium text-sm group"
                  >
                    Read <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
          </div>
        )}
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
