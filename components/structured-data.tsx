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

export function OrganizationStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.vercel.app"

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
