import { baseMetadata } from "@/lib/metadata"

interface DictionaryStructuredDataProps {
  url: string
  name?: string
  description?: string
  wordCount?: number
}

export function DictionaryStructuredData({
  url,
  name = "OpenBalti Dictionary",
  description = baseMetadata.description as string,
  wordCount,
}: DictionaryStructuredDataProps) {
  /**
   * Generates JSON-LD structured data for a dictionary dataset.
   * This helps search engines understand the content as a structured dataset, which can improve SEO.
   *
   * @param {DictionaryStructuredDataProps} props - The component props.
   * @param {string} props.url - The canonical URL of the dictionary page.
   * @param {string} [props.name="OpenBalti Dictionary"] - The name of the dictionary.
   * @param {string} [props.description=baseMetadata.description] - A description of the dictionary.
   * @param {number} [props.wordCount] - The number of entries in the dictionary.
   * @returns {JSX.Element} A script tag containing the JSON-LD structured data.
   */
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.com"

  const keywords = Array.isArray(baseMetadata.keywords)
    ? baseMetadata.keywords.join(", ")
    : baseMetadata.keywords

  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: name,
    description: description,
    url: url,
    keywords,
    creator: {
      "@type": "Organization",
      name: "OpenBalti Project",
      url: baseUrl,
    },
    license: `${baseUrl}/license`,
    isAccessibleForFree: true,
    dateModified: new Date().toISOString(),
  }

  if (wordCount) {
    structuredData["size"] = `${wordCount} entries`
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

/**
 * Generates JSON-LD structured data for the OpenBalti organization.
 * This provides search engines with key information about the project, such as its name, logo, and social media profiles.
 *
 * @returns {JSX.Element} A script tag containing the JSON-LD structured data for the organization.
 */
export function OrganizationStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.com"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OpenBalti Project",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: ["https://twitter.com/openbalti", "https://github.com/ShadBalti/OpenBalti"],
    description: "A community-driven project dedicated to preserving and documenting the Balti language",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

/**
 * Generates JSON-LD structured data for the OpenBalti website.
 * This provides search engines with key information about the website, such as its name, description, and URL.
 *
 * @returns {JSX.Element} A script tag containing the JSON-LD structured data for the website.
 */
export function WebsiteStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.com"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OpenBalti",
    description: "A platform for preserving and documenting the Balti language",
    url: baseUrl,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

/**
 * Generates JSON-LD structured data for a breadcrumb list.
 * This helps search engines understand the navigation hierarchy of the website.
 *
 * @param {object} props - The component props.
 * @param {string[]} props.path - An array of breadcrumb items.
 * @returns {JSX.Element} A script tag containing the JSON-LD structured data for the breadcrumb list.
 */
export function BreadcrumbListStructuredData({ path }: { path: string[] }) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.com"

  const items = Array.isArray(path) ? path : []

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item,
      item: `${baseUrl}/${item.toLowerCase().replace(/ /g, "-")}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

/**
 * Generates JSON-LD structured data for a course (learning).
 * This provides search engines with information about a course related to the Balti language.
 *
 * @returns {JSX.Element} A script tag containing the JSON-LD structured data for the course.
 */
export function CourseStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.com"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Balti Language Course",
    description: "A comprehensive course to learn the Balti language",
    provider: {
      "@type": "Organization",
      name: "OpenBalti Project",
      url: baseUrl,
    },
    url: `${baseUrl}/course`,
    educationalAlignment: {
      "@type": "AlignmentObject",
      alignmentType: "educationalFramework",
      targetName: "Common European Framework of Reference for Languages",
      targetUrl: "https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages",
      targetDescription: "CEFR levels A1 to C2",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

/**
 * Generates JSON-LD structured data for a defined term (dictionary entry).
 * This provides search engines with detailed information about a specific dictionary entry.
 *
 * @param {string} term - The term (dictionary entry) name.
 * @param {string} definition - The definition of the term.
 * @param {string} url - The URL of the dictionary entry page.
 * @returns {JSX.Element} A script tag containing the JSON-LD structured data for the defined term.
 */
export function DefinedTermStructuredData(term: string, definition: string, url: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.com"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term,
    description: definition,
    inLanguage: "Balti",
    url: url,
    isPartOf: {
      "@type": "Dataset",
      name: "OpenBalti Dictionary",
      url: `${baseUrl}/dictionary`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function WordStructuredData({ word }: { word: any }) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.com"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: word.english,
    alternateName: word.balti,
    description: `${word.english} - ${word.balti}. ${word.usageNotes || word.etymology || "Balti language dictionary entry."}`,
    inLanguage: "Balti",
    url: `${baseUrl}/words/${word.english.toLowerCase().replace(/\s+/g, "-")}`,
    pronunciation: word.phonetic
      ? {
          "@type": "Thing",
          name: word.phonetic,
        }
      : undefined,
    isPartOf: {
      "@type": "Dataset",
      name: "OpenBalti Dictionary",
      url: `${baseUrl}/dictionary`,
    },
    author: word.createdBy
      ? {
          "@type": "Person",
          name: word.createdBy.name,
          url: `${baseUrl}/contributors/${word.createdBy._id}`,
        }
      : undefined,
    dateCreated: word.createdAt,
    dateModified: word.updatedAt,
    keywords: [...(word.categories || []), word.dialect, word.difficultyLevel].filter(Boolean).join(", "),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

/**
 * Generates JSON-LD structured data for a contributor/person.
 * This helps search engines understand contributor profiles and their role in the project.
 */
export function ContributorStructuredData({ 
  name, 
  image, 
  bio, 
  url 
}: { 
  name: string
  image?: string
  bio?: string
  url: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.com"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    ...(image && { image: image }),
    ...(bio && { description: bio }),
    url: url,
    affiliation: {
      "@type": "Organization",
      name: "OpenBalti Project",
      url: baseUrl,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

/**
 * Generates JSON-LD structured data for a comment.
 * This helps search engines understand user-generated content like comments and reviews.
 */
export function CommentStructuredData({
  text,
  author,
  dateCreated,
  url,
}: {
  text: string
  author: string
  dateCreated: string
  url: string
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Comment",
    text: text,
    author: {
      "@type": "Person",
      name: author,
    },
    dateCreated: dateCreated,
    url: url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

/**
 * Generates JSON-LD structured data for a leaderboard/ranking table.
 * This helps search engines understand ranking and competitive content.
 */
export function RankingTableStructuredData({
  name,
  description,
  url,
  itemCount,
}: {
  name: string
  description: string
  url: string
  itemCount: number
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Table",
    about: {
      "@type": "Thing",
      name: name,
      description: description,
    },
    url: url,
    numberOfRows: itemCount,
    audience: {
      "@type": "Audience",
      audienceType: "language learners, linguists, community members",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

/**
 * Generates JSON-LD structured data for a FAQ page.
 * This enables rich snippets in search results with expandable Q&A.
 */
export function FAQStructuredData({
  questions,
}: {
  questions: Array<{ question: string; answer: string }>
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

/**
 * Generates JSON-LD structured data for an article/blog post.
 * This helps search engines understand article metadata and improve ranking.
 */
export function ArticleStructuredData({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified: string
  image?: string
  url: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.com"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    author: {
      "@type": "Organization",
      name: author,
      url: baseUrl,
    },
    datePublished: datePublished,
    dateModified: dateModified,
    ...(image && { image: image }),
    url: url,
    publisher: {
      "@type": "Organization",
      name: "OpenBalti Project",
      url: baseUrl,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
