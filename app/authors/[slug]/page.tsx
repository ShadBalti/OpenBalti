import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAuthor, getAllAuthors } from '@/lib/authors'
import { AuthorBio } from '@/components/author-bio'
import { ArticleList } from '@/components/article-list'

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
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Articles by {author.name.split(' ')[0]}</h2>
          <ArticleList filters={{ author: author.id }} limit={12} />
        </div>
      </div>
    </div>
  )
}
