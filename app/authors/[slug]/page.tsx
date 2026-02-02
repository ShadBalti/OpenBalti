import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, ArrowRight, BookOpen } from 'lucide-react'
import { getAuthor, getAllAuthors } from '@/lib/authors'
import { AuthorBio } from '@/components/author-bio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const authors = getAllAuthors()
  return authors.map((author) => ({
    slug: author.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const author = getAuthor(params.slug)

  if (!author) {
    return {
      title: 'Author Not Found',
      description: 'The author profile you are looking for does not exist.',
    }
  }

  return {
    title: `${author.name} - OpenBalti Author`,
    description: author.bio,
    openGraph: {
      title: `${author.name} - OpenBalti Author`,
      description: author.bio,
      type: 'profile',
      url: `/authors/${author.slug}`,
      images: [
        {
          url: author.image,
          width: 400,
          height: 400,
          alt: author.name,
        },
      ],
    },
    alternates: {
      canonical: `/authors/${author.slug}`,
    },
  }
}

export default function AuthorPage({ params }: Props) {
  const author = getAuthor(params.slug)

  if (!author) {
    notFound()
  }

  // Sample articles for this author (in production, this would be fetched from database)
  const authorArticles = [
    {
      slug: "getting-started-with-balti",
      title: "Getting Started with Balti: A Beginner's Guide",
      category: "Learning",
      date: "January 15, 2025",
      excerpt: "Learn the fundamentals of Balti language with this comprehensive beginner's guide.",
      readTime: "8 min read",
    },
    {
      slug: "why-balti-language-matters",
      title: "Why the Balti Language Matters: Preserving Cultural Identity",
      category: "Culture",
      date: "January 10, 2025",
      excerpt: "Explore why preserving the Balti language is crucial for maintaining cultural identity.",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
          <a href="/" className="hover:text-foreground">Home</a>
          <span>/</span>
          <a href="/authors" className="hover:text-foreground">Authors</a>
          <span>/</span>
          <span className="text-foreground">{author.name}</span>
        </nav>

        {/* Author Bio Full */}
        <AuthorBio author={author} variant="full" />

        {/* Articles by this author */}
        {authorArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Articles by {author.name.split(' ')[0]}</h2>
            <div className="space-y-6">
              {authorArticles.map((article) => (
                <article key={article.slug} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <Link href={`/blog/${article.slug}`}>
                        <h3 className="text-xl font-semibold hover:text-primary transition-colors">{article.title}</h3>
                      </Link>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Badge variant="outline">{article.category}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`}>
                    <Button variant="ghost" size="sm" className="gap-1">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
