import type { Metadata } from "next";
import { getKeywordsFor } from "@/lib/seoKeywords";

export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.com"),
  title: {
    default: "OpenBalti Dictionary | Free Online Balti Language Resource",
    template: "%s | OpenBalti Dictionary",
  },
  description:
    "OpenBalti is a fast, accurate Balti–English dictionary to translate, learn, and preserve the Balti language. Explore meanings, cultural context, and more.",
  keywords: getKeywordsFor("/"),
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

// Helper function to generate metadata for specific pages
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