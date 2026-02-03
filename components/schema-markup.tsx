import { generateArticleSchema, generateFAQSchema, generateWordSchema, generateOrganizationSchema } from '@/lib/seo-metadata'

/**
 * Article schema markup component
 */
export function ArticleSchema({
  title,
  description,
  content,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: {
  title: string
  description: string
  content: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
}) {
  const schema = generateArticleSchema({
    title,
    description,
    content,
    author,
    datePublished,
    dateModified,
    image,
    url,
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * FAQ schema markup component
 */
export function FAQSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  const schema = generateFAQSchema(faqs)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Word definition schema markup component
 */
export function WordSchema({
  word,
  definition,
  language,
  partOfSpeech,
  pronunciation,
  examples,
  url,
}: {
  word: string
  definition: string
  language: string
  partOfSpeech?: string
  pronunciation?: string
  examples?: string[]
  url: string
}) {
  const schema = generateWordSchema({
    word,
    definition,
    language,
    partOfSpeech,
    pronunciation,
    examples,
    url,
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Organization schema markup component
 */
export function OrganizationSchema() {
  const schema = generateOrganizationSchema()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Breadcrumb schema markup component
 */
export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
