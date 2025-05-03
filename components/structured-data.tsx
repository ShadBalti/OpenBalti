export function DictionaryStructuredData({
  url,
  name,
  description,
}: { url: string; name: string; description: string }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: name,
    url: `${process.env.NEXT_PUBLIC_APP_URL || ""}${url}`,
    description: description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${process.env.NEXT_PUBLIC_APP_URL || ""}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OpenBalti",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.vercel.app",
    logo: `${process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.vercel.app"}/logo.png`,
    description: "OpenBalti is a community-driven dictionary for the Balti language.",
    sameAs: ["https://github.com/openbalti/dictionary", "https://twitter.com/openbalti"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export default DictionaryStructuredData
