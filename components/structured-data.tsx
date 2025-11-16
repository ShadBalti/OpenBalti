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
