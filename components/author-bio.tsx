'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, Globe, Linkedin, Twitter } from 'lucide-react'

export interface Author {
  id: string
  name: string
  slug: string
  title: string
  bio: string
  image: string
  expertise: string[]
  credentials: string[]
  email?: string
  website?: string
  twitter?: string
  linkedin?: string
  joinedDate: string
}

interface AuthorBioProps {
  author: Author
  variant?: 'full' | 'compact' | 'inline'
}

export function AuthorBio({ author, variant = 'compact' }: AuthorBioProps) {
  if (variant === 'inline') {
    return (
      <Link href={`/authors/${author.slug}`}>
        <div className="flex items-center gap-3 py-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate hover:underline">{author.name}</p>
            <p className="text-xs text-muted-foreground truncate">{author.title}</p>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'compact') {
    return (
      <div className="bg-accent/50 rounded-lg p-4 border border-border">
        <div className="flex gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <Link href={`/authors/${author.slug}`}>
              <h3 className="font-semibold hover:underline">{author.name}</h3>
            </Link>
            <p className="text-sm text-muted-foreground mb-2">{author.title}</p>
            <p className="text-sm line-clamp-2 mb-2">{author.bio}</p>
            <div className="flex gap-2">
              {author.twitter && (
                <a href={`https://twitter.com/${author.twitter}`} target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {author.linkedin && (
                <a href={author.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {author.website && (
                <a href={author.website} target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary">
                  <Globe className="w-4 h-4" />
                </a>
              )}
              {author.email && (
                <a href={`mailto:${author.email}`}
                  className="text-muted-foreground hover:text-primary">
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Full variant
  return (
    <div className="bg-background border border-border rounded-lg p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 mx-auto md:mx-0">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-1">{author.name}</h2>
          <p className="text-lg text-primary font-semibold mb-2">{author.title}</p>
          <p className="text-muted-foreground mb-4">{author.bio}</p>
          
          {author.expertise.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-semibold mb-2">Expertise</p>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((exp) => (
                  <span key={exp} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          )}

          {author.credentials.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-semibold mb-2">Credentials & Experience</p>
              <ul className="space-y-1">
                {author.credentials.map((cred) => (
                  <li key={cred} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-3">
            {author.twitter && (
              <a href={`https://twitter.com/${author.twitter}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition">
                <Twitter className="w-4 h-4" />
                Twitter
              </a>
            )}
            {author.linkedin && (
              <a href={author.linkedin} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            )}
            {author.website && (
              <a href={author.website} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition">
                <Globe className="w-4 h-4" />
                Website
              </a>
            )}
            {author.email && (
              <a href={`mailto:${author.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
