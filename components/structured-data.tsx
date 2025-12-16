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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: name,
    description: description,
    url: url,
    keywords: baseMetadata.keywords?.join(", "),
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
    sameAs: ["https://twitter.com/openbalti", "https://github.com/ShadBalti/openbalti"],
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
