import type { Metadata } from "next"

// Base metadata that can be extended by individual pages
export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.vercel.app"),
  title: {
    default: "OpenBalti Dictionary",
    template: "%s | OpenBalti Dictionary",
  },
  description: "A comprehensive digital dictionary for the Balti language",
  keywords: [
    "Balti",
    "dictionary",
    "language",
    "translation",
    "linguistics",
    "Baltistan",
    "Tibetan",
    "language preservation",
    "Balti to English",
    "English to Balti",
    "Balti dictionary online",
    "learn Balti",
  ],
  authors: [{ name: "OpenBalti Team" }],
  creator: "OpenBalti Project",
  publisher: "OpenBalti Project",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenBalti Dictionary",
    description: "A comprehensive digital dictionary for the Balti language",
    images: ["/android-chrome-512x512.png"],
    creator: "@openbalti", // Change this if the handle is incorrect
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://openbalti.vercel.app",
    title: "OpenBalti Dictionary",
    description: "A comprehensive digital dictionary for the Balti language",
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
  twitter: {
    card: "summary_large_image",
    title: "OpenBalti Dictionary",
    description: "A comprehensive digital dictionary for the Balti language",
    images: ["android-chrome-512x512.png"],
    creator: "@openbalti",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

// Helper function to generate metadata for specific pages
export function generateMetadata(title: string, description?: string, overrides: Partial<Metadata> = {}): Metadata {
  return {
    ...baseMetadata,
    title,
    description: description || baseMetadata.description,
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
