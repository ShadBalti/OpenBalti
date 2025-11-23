import type { Metadata } from "next";
import { getKeywordsFor } from "@/lib/seoKeywords";

/**
 * @const {Metadata} baseMetadata
 * @description Serves as the base metadata configuration for the entire application.
 * It includes default values for titles, descriptions, SEO keywords, social media cards (Twitter/OpenGraph),
 * and other essential metadata fields to ensure consistent branding and SEO performance.
 * This object is extended by the `generateMetadata` function for page-specific overrides.
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.com"),
  title: {
    default: "OpenBalti Dictionary | Free Online Balti Language Resource",
    template: "%s | OpenBalti Dictionary",
  },
  description:
    "OpenBalti is a fast, accurate Balti–English dictionary to translate, learn, and preserve the Balti language. Explore meanings, cultural context, and more.",
  keywords: [
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
]
  authors: [{ name: "OpenBalti Team" }],
  creator: "OpenBalti Project",
  publisher: "OpenBalti Project",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://openbalti.com",
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
    images: ["/android-chrome-512x512.png"],
    creator: "@openbalti",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://openbalti.com",
    title: "OpenBalti Dictionary | Free Online Balti Language Resource",
    description:
      "OpenBalti is a comprehensive and user-friendly online dictionary that helps you translate and learn the Balti language.",
    siteName: "OpenBalti Dictionary",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "OpenBalti Dictionary",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
  options?: {
    keywords?: string[]
    overrides?: Partial<Metadata>
  }
): Metadata {
  const { keywords = [], overrides = {} } = options || {}

  return {
    ...baseMetadata,
    title,
    description: description || baseMetadata.description,
    keywords: [...baseMetadata.keywords!, ...keywords],
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description: description || baseMetadata.openGraph?.description,
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description: description || baseMetadata.twitter?.description,
    },
    ...overrides,
  }
}