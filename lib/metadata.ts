import type { Metadata } from "next"
export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://openbalti.vercel.app"),
  title: {
    default: "OpenBalti Dictionary | Free Online Balti Language Resource",
    template: "%s | OpenBalti Dictionary",
  },
  description:
    "OpenBalti is a comprehensive and user-friendly online dictionary that helps you translate and learn the Balti language. Explore Balti to English and English to Balti translations, linguistic insights, and cultural context for language preservation.",
  keywords: [
    "Balti language",
    "Balti dictionary online",
    "learn Balti language",
    "Balti to English translation",
    "English to Balti translator",
    "Baltistan language",
    "language preservation project",
    "Tibetan dialects",
    "Balti script",
    "Balti culture",
    "online language tool",
    "dictionary for Balti words",
  ],
  authors: [{ name: "OpenBalti Team" }],
  creator: "OpenBalti Project",
  publisher: "OpenBalti Project",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://openbalti.vercel.app",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenBalti Dictionary",
    description:
      "OpenBalti is a comprehensive and user-friendly online dictionary that helps you translate and learn the Balti language.",
    images: ["/android-chrome-512x512.png"],
    creator: "@openbalti",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://openbalti.vercel.app",
    title: "OpenBalti Dictionary",
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
