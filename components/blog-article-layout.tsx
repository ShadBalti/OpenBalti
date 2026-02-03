"use client"

import { ReactNode } from "react"
import { Calendar, Clock, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ShareArticle } from "@/components/share-article"
import Link from "next/link"

interface BlogArticleLayoutProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  author: {
    name: string
    role: string
    image?: string
    bio?: string
    link?: string
  }
  children: ReactNode
  relatedArticles?: Array<{
    slug: string
    title: string
    category: string
  }>
}

const categoryColors: Record<string, string> = {
  Learning:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  Culture:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800",
  Linguistics:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  Community:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
}

export function BlogArticleLayout({
  title,
  excerpt,
  date,
  readTime,
  category,
  author,
  children,
  relatedArticles,
}: BlogArticleLayoutProps) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : ""
  const categoryClass = categoryColors[category] || categoryColors.Learning

  return (
    <main className="min-h-screen bg-background">
      {/* Article Header */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Badge */}
        <div className="mb-6">
          <Badge variant="outline" className={`border ${categoryClass}`}>
            {category}
          </Badge>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>

        {/* Excerpt */}
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{excerpt}</p>

        {/* Meta Information */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-8 border-b border-border mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={author.image} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              {author.link ? (
                <Link href={author.link} className="font-semibold hover:text-primary transition-colors">
                  {author.name}
                </Link>
              ) : (
                <p className="font-semibold">{author.name}</p>
              )}
              <p className="text-sm text-muted-foreground">{author.role}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readTime}
            </span>
          </div>

          <div className="ml-auto">
            <ShareArticle title={title} url={currentUrl} description={excerpt} variant="outline" size="sm" />
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div className="prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:border-border">
            {children}
          </div>
        </div>

        {/* Author Bio */}
        {author.bio && (
          <div className="bg-secondary/50 rounded-lg p-6 mb-8 border border-border">
            <div className="flex gap-4">
              <Avatar className="h-16 w-16 flex-shrink-0">
                <AvatarImage src={author.image} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">About the Author</h3>
                <p className="font-medium text-primary mb-2">{author.name}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{author.bio}</p>
                {author.link && (
                  <Link href={author.link} className="text-sm text-primary hover:underline mt-3 inline-block">
                    View Profile →
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12 text-center">
          <h3 className="font-semibold mb-3">Found this helpful? Share it!</h3>
          <div className="flex justify-center">
            <ShareArticle title={title} url={currentUrl} description={excerpt} variant="default" />
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles && relatedArticles.length > 0 && (
          <div className="pt-8 border-t border-border">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="p-4 border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <Badge variant="outline" className="mb-2 text-xs">
                    {article.category}
                  </Badge>
                  <h4 className="font-semibold hover:text-primary transition-colors line-clamp-2">{article.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  )
}
