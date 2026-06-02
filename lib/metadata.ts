import type { Metadata } from "next"
import { getKeywordsFor } from "@/lib/seoKeywords"

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.com"
const defaultOgImage = "/android-chrome-512x512.png"

function toAbsoluteUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) {
    return url
  }

  return new URL(url.startsWith("/") ? url : `/${url}`, siteUrl).toString()
}

const defaultRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
}

/**
 * @const {Metadata} baseMetadata
 * @description Serves as the base metadata configuration for the entire application.
 * It includes default values for titles, descriptions, SEO keywords, social media cards (Twitter/OpenGraph),
 * and other essential metadata fields to ensure consistent branding and SEO performance.
 * This object is extended by the `generateMetadata` function for page-specific overrides.
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "OpenBalti",
  title: {
    default: "OpenBalti Dictionary | Free Online Balti Language Resource",
    template: "%s | OpenBalti Dictionary",
  },
  description:
    "OpenBalti is a clean, modern Balti–English dictionary that helps you explore meanings, learn everyday phrases, and understand Balti culture while supporting language preservation.",
  keywords: [
    ...getKeywordsFor("/"),
    "Balti language",
    "Balti dictionary",
    "Balti translator",
    "English to Balti translation",
    "Balti to English translation",
    "Balti words meaning",
    "Balti vocabulary",
    "Learn Balti",
    "Balti grammar",
    "Balti phrases",
    "Balti script",
    "Balti writing system",
    "Baltistan language",
    "Balti culture",
    "Balti language preservation",
    "Balti heritage",
    "Endangered languages Pakistan",
    "Balti learning resources",
    "OpenBalti",
    "Digital Balti dictionary",
    "Language preservation project",
    "Balti word list A–Z",
    "Balti verbs",
    "Balti nouns",
    "Balti adjectives",
    "Balti new words",
  ],
  authors: [{ name: "OpenBalti Team", url: siteUrl }],
  creator: "OpenBalti Project",
  publisher: "OpenBalti Project",
  category: "education",
  robots: defaultRobots,
  alternates: {
    canonical: siteUrl,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenBalti Dictionary | Free Online Balti Language Resource",
    description:
      "OpenBalti is a comprehensive and user-friendly online dictionary that helps you translate and learn the Balti language.",
    images: [defaultOgImage],
    creator: "@openbalti",
    site: "@openbalti",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "OpenBalti Dictionary | Free Online Balti Language Resource",
    description:
      "OpenBalti is a comprehensive and user-friendly online dictionary that helps you translate and learn the Balti language.",
    siteName: "OpenBalti Dictionary",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "OpenBalti Dictionary",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

/**
 * Generates page-specific metadata by extending the `baseMetadata` object.
 * This allows for custom titles, descriptions, and keywords while maintaining consistent base settings.
 *
 * @param {string} title - The title for the specific page.
 * @param {string} [description] - A custom description for the page. If not provided, the default description from `baseMetadata` is used.
 * @param {object} [options] - Optional parameters for further customization.
 * @param {string[]} [options.keywords=[]] - An array of additional keywords to append to the base keywords.
 * @param {Partial<Metadata>} [options.overrides={}] - An object to deeply override any specific properties of the `baseMetadata`.
 * @returns {Metadata} A fully constructed metadata object for the page.
 */
export function generateMetadata(
  title: string,
  description?: string,
  options?: Partial<Metadata> & {
    keywords?: string[]
    canonical?: string
    overrides?: Partial<Metadata>
  }
): Metadata {
  const {
    keywords = [],
    canonical,
    overrides = {},
    openGraph: openGraphOverrides,
    twitter: twitterOverrides,
    alternates: alternatesOverrides,
    robots: robotsOverrides,
    ...metadataOverrides
  } = options || {}
  const {
    openGraph: overrideOpenGraph,
    twitter: overrideTwitter,
    alternates: overrideAlternates,
    robots: overrideRobots,
    ...remainingOverrides
  } = overrides
  const pageDescription = description || baseMetadata.description
  const canonicalUrl = canonical ? toAbsoluteUrl(canonical) : undefined
  const baseKeywords = Array.isArray(baseMetadata.keywords) ? baseMetadata.keywords : []
  const uniqueKeywords = Array.from(new Set([...baseKeywords, ...keywords].filter(Boolean)))

  const pageOpenGraph: Metadata["openGraph"] = {
    ...baseMetadata.openGraph,
    title,
    description: pageDescription || baseMetadata.openGraph?.description,
    ...(canonicalUrl ? { url: canonicalUrl } : { url: undefined }),
    ...(openGraphOverrides || {}),
    ...(overrideOpenGraph || {}),
  }

  const pageTwitter: Metadata["twitter"] = {
    ...baseMetadata.twitter,
    title,
    description: pageDescription || baseMetadata.twitter?.description,
    ...(twitterOverrides || {}),
    ...(overrideTwitter || {}),
  }

  return {
    metadataBase: baseMetadata.metadataBase,
    applicationName: baseMetadata.applicationName,
    authors: baseMetadata.authors,
    creator: baseMetadata.creator,
    publisher: baseMetadata.publisher,
    category: baseMetadata.category,
    formatDetection: baseMetadata.formatDetection,
    icons: baseMetadata.icons,
    manifest: baseMetadata.manifest,
    robots: {
      ...(defaultRobots as object),
      ...((robotsOverrides || {}) as object),
      ...((overrideRobots || {}) as object),
    },
    title,
    description: pageDescription,
    keywords: uniqueKeywords,
    openGraph: pageOpenGraph,
    twitter: pageTwitter,
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
          ...(alternatesOverrides || {}),
          ...(overrideAlternates || {}),
        }
      : {
          ...(alternatesOverrides || {}),
          ...(overrideAlternates || {}),
        },
    ...metadataOverrides,
    ...remainingOverrides,
  }
}

export function generateNoIndexMetadata(title: string, description?: string, canonical?: string): Metadata {
  return generateMetadata(title, description, {
    canonical,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  })
}
