import type { Metadata } from "next"
import { generateMetadata as generatePageMetadata } from "@/lib/metadata"
import WordsPage from "@/components/words-page"
import { Suspense } from "react"
import {
  DictionaryStructuredData,
  BreadcrumbListStructuredData,
  CourseStructuredData,
  WebsiteStructuredData,
} from "@/components/structured-data"
import { WordsPageSkeleton } from "@/components/skeletons/words-page-skeleton"
import Word from "@/models/Word"
import type { IWord } from "@/models/Word"
import dbConnect from "@/lib/mongodb"
import { wordToSlug } from "@/lib/utils"

export const metadata: Metadata = generatePageMetadata(
  "Balti Dictionary - Search 5000+ Words | English-Balti Translation Tool & Language Preservation",
  "Comprehensive Balti-English dictionary with verified words, pronunciations, examples, and cultural context. Search by dialect, difficulty, and category. Contribute to preserving the Balti language - a living Tibetan dialect spoken in Baltistan.",
  {
    keywords: [
      "Balti dictionary",
      "Balti language translator",
      "English to Balti translation tool",
      "Balti vocabulary search",
      "Balti words and meanings",
      "Balti language preservation project",
      "Balti dialect dictionary",
      "Skardu Balti words",
      "Khaplu Balti dialect",
      "Balti language learning resource",
      "Balti-English dictionary search",
      "Balti word definitions and pronunciations",
      "endangered Balti language",
      "Tibetan dialect preservation",
      "Baltistan language dictionary",
      "Balti phrase translation",
      "learn Balti language online",
      "Balti language examples",
    ],
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    canonical: "https://openbalti.com/dictionary",
    openGraph: {
      type: "website",
      url: "https://openbalti.com/dictionary",
      title: "OpenBalti Dictionary - Comprehensive Balti-English Translation",
      description: "Browse thousands of Balti words with English translations, pronunciations, and examples. Contribute to language preservation.",
      images: [
        {
          url: "/android-chrome-512x512.png",
          width: 1200,
          height: 630,
          alt: "OpenBalti Dictionary - Browse and preserve the Balti language",
          type: "image/png",
        },
      ],
      siteName: "OpenBalti",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "OpenBalti Dictionary - Balti-English Translation",
      description: "Browse thousands of Balti words with translations, pronunciations, and examples",
      images: ["/android-chrome-512x512.png"],
      creator: "@openbalti",
      site: "@openbalti",
    },
    alternates: {
      canonical: "https://openbalti.com/dictionary",
    },
  },
)

async function getInitialWords() {
  try {
    await dbConnect()
    // Fetch only first page of words (50 words) instead of all
    // The client-side component will handle pagination and additional word fetching
    const words = await Word.find({})
      .sort({ createdAt: -1 })
      .limit(50)
      .lean()
    return words ? words.map((word: IWord) => JSON.parse(JSON.stringify(word))) : []
  } catch (error) {
    console.error("Error fetching words:", error)
    return []
  }
}

async function getTotalWordCount() {
  try {
    await dbConnect()
    // Get total count separately for pagination metadata
    const count = await Word.countDocuments({})
    return count
  } catch (error) {
    console.error("Error counting words:", error)
    return 0
  }
}

export default async function DictionaryPage() {
  const [initialWords, totalWords] = await Promise.all([
    getInitialWords(),
    getTotalWordCount(),
  ])
  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container py-8 md:py-16">
          <div className="mx-auto max-w-5xl space-y-8">
            {/* Enhanced Header Section */}
            <div className="space-y-4 text-center">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
                  Explore the Balti Language
                </span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-primary via-primary to-blue-500 bg-clip-text text-transparent">
                  OpenBalti Dictionary
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Discover {totalWords.toLocaleString()} carefully documented Balti words with English translations, 
                pronunciations, and cultural context. Search by dialect, difficulty, and category to find exactly what you need.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{totalWords.toLocaleString()}</span>
                  <span className="text-muted-foreground">Words</span>
                </div>
                <div className="h-5 w-px bg-border"></div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Community Driven</span>
                  <span className="text-muted-foreground">Preservation</span>
                </div>
                <div className="h-5 w-px bg-border"></div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Always Free</span>
                  <span className="text-muted-foreground">Open Source</span>
                </div>
              </div>
            </div>

          {/* Server-rendered word list for SEO - crawlable without JavaScript */}
          {initialWords.length > 0 && (
            <section className="sr-only" aria-labelledby="seo-word-list">
              <h2 id="seo-word-list">Featured Dictionary Words</h2>
              <ul>
                {initialWords.map((word: any) => (
                  <li key={word._id?.toString()}>
                    <a href={`/words/${wordToSlug(word.english)}`}>
                      {word.balti} - {word.english}
                      {word.phonetic && ` (${word.phonetic})`}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <Suspense fallback={<WordsPageSkeleton />}>
            <WordsPage initialWords={initialWords} totalWords={totalWords} />
          </Suspense>
        </div>
      </div>
    </div>

      <DictionaryStructuredData url="/dictionary" wordCount={totalWords} />
      <BreadcrumbListStructuredData path={["Home", "Dictionary"]} />
      <CourseStructuredData />
      <WebsiteStructuredData />
      
      {/* Structured data for featured words - organized by samples for better SEO coverage */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "OpenBalti Dictionary - Comprehensive Balti-English Translation",
            description: `Comprehensive Balti-English dictionary with ${totalWords} verified words and translations. Search, filter, and explore the Balti language.`,
            url: "https://openbalti.com/dictionary",
            numberOfItems: totalWords,
            inLanguage: ["en", "bal"],
            mainEntity: {
              "@type": "DefinedTermSet",
              numberOfTerms: totalWords,
              // Include featured words for better SEO coverage
              hasPart: initialWords.map((word: any) => ({
                "@type": "DefinedTerm",
                name: word.balti,
                description: word.english,
                url: `https://openbalti.com/words/${wordToSlug(word.english)}`,
                inLanguage: ["en", "bal"],
                ...(word.phonetic && { pronunciation: word.phonetic }),
                ...(word.partOfSpeech && { termCode: word.partOfSpeech }),
                ...(word.dialects && { dialect: Array.isArray(word.dialects) ? word.dialects.join(", ") : word.dialects }),
                ...(word.examples && { example: Array.isArray(word.examples) ? word.examples[0] : word.examples }),
              })),
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://openbalti.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Dictionary",
                  item: "https://openbalti.com/dictionary",
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}
