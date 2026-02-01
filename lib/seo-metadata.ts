import type { Metadata } from 'next'

export interface SEOMetadataOptions {
  title: string
  description: string
  keywords?: string[]
  author?: string
  datePublished?: string
  dateModified?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  canonicalUrl?: string
}

/**
 * Generate comprehensive metadata object with all SEO enhancements
 */
export function generateSEOMetadata(options: SEOMetadataOptions): Metadata {
  const {
    title,
    description,
    keywords = [],
    author,
    datePublished,
    dateModified,
    image,
    url = 'https://openbalti.com',
    type = 'website',
    canonicalUrl,
  } = options

  // Ensure title is optimized (60 characters max)
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title

  // Ensure description is optimized (160 characters max)
  const optimizedDescription =
    description.length > 160 ? description.substring(0, 157) + '...' : description

  return {
    title: optimizedTitle,
    description: optimizedDescription,
    keywords: keywords,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title: optimizedTitle,
      description: optimizedDescription,
      url: canonicalUrl || url,
      siteName: 'OpenBalti',
      type: type,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
      publishedTime: datePublished,
      modifiedTime: dateModified,
    },
    twitter: {
      card: 'summary_large_image',
      title: optimizedTitle,
      description: optimizedDescription,
      images: image ? [image] : undefined,
    },
    alternates: {
      canonical: canonicalUrl || url,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  }
}

/**
 * Generate schema.org structured data for articles
 */
export function generateArticleSchema(options: {
  title: string
  description: string
  content: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    image: options.image,
    author: {
      '@type': 'Person',
      name: options.author,
    },
    datePublished: options.datePublished,
    dateModified: options.dateModified || options.datePublished,
    articleBody: options.content,
  }
}

/**
 * Generate schema.org structured data for FAQPage
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate schema.org structured data for dictionary word
 */
export function generateWordSchema(options: {
  word: string
  definition: string
  language: string
  partOfSpeech?: string
  pronunciation?: string
  examples?: string[]
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: options.word,
    description: options.definition,
    inLanguage: options.language,
    disambiguatingDescription: options.partOfSpeech,
    pronunciation: options.pronunciation,
    example: options.examples,
    url: options.url,
  }
}

/**
 * Generate schema.org structured data for organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OpenBalti',
    url: 'https://openbalti.com',
    logo: 'https://openbalti.com/logo.png',
    description:
      'Free, comprehensive Balti language dictionary and learning platform dedicated to preserving an endangered Tibetan dialect.',
    sameAs: [
      'https://twitter.com/openbalti',
      'https://www.linkedin.com/company/openbalti',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@openbalti.com',
    },
  }
}

/**
 * Generate meta descriptions with keyword optimization
 */
export function generateMetaDescription(
  baseDescription: string,
  keywords: string[],
  maxLength: number = 160
): string {
  let description = baseDescription

  // Try to include primary keyword naturally if not already present
  if (keywords.length > 0 && !description.toLowerCase().includes(keywords[0].toLowerCase())) {
    const insertPoint = Math.min(80, description.length)
    description = description.substring(0, insertPoint) + ' ' + keywords[0] + ' ' + description.substring(insertPoint)
  }

  // Truncate to max length
  if (description.length > maxLength) {
    description = description.substring(0, maxLength - 3) + '...'
  }

  return description
}

/**
 * Extract main keyword from title for SEO focus
 */
export function extractPrimaryKeyword(title: string): string {
  // Remove common words
  const commonWords = [
    'the',
    'a',
    'an',
    'and',
    'or',
    'but',
    'in',
    'on',
    'at',
    'to',
    'for',
    'of',
    'with',
  ]
  const words = title.toLowerCase().split(' ').filter((w) => !commonWords.includes(w))
  return words[0] || title
}

/**
 * Generate target keywords for a page
 */
export function generateTargetKeywords(
  primaryKeyword: string,
  secondaryKeywords: string[] = []
): string[] {
  return [primaryKeyword, ...secondaryKeywords]
}
