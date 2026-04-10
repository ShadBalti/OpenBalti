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
import dbConnect from "@/lib/mongodb"

export const metadata: Metadata = generatePageMetadata(
  "Dictionary | OpenBalti - Balti-English Translation & Language Preservation",
  "Comprehensive Balti-English dictionary with thousands of verified words. Search, filter by dialect, difficulty, and contribute to language preservation. Access definitions, pronunciations, examples, and cultural context.",
  {
    keywords: [
      "Balti dictionary",
      "Balti translator",
      "English to Balti translation",
      "Balti vocabulary",
      "Balti words",
      "Balti language preservation",
      "Balti dialect translation",
      "Skardu Balti",
      "Khaplu Balti",
      "Balti language learning",
      "search Balti language",
      "Balti word meanings",
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
          url: "https://openbalti.com/og-dictionary.jpg",
          width: 1200,
          height: 630,
          alt: "OpenBalti Dictionary - Browse and preserve the Balti language",
          type: "image/jpeg",
        },
      ],
      siteName: "OpenBalti",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "OpenBalti Dictionary - Balti-English Translation",
      description: "Browse thousands of Balti words with translations, pronunciations, and examples",
      images: ["https://openbalti.com/og-dictionary.jpg"],
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
    return words ? words.map(word => JSON.parse(JSON.stringify(word))) : []
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
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              <span className="text-blue-500">OpenBalti </span>Dictionary
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Comprehensive Balti-English dictionary with {totalWords.toLocaleString()} words. Search, filter, and explore the language.
            </p>
          </div>

          {/* Server-rendered word list for SEO - crawlable without JavaScript */}
          {initialWords.length > 0 && (
            <section className="sr-only" aria-labelledby="seo-word-list">
              <h2 id="seo-word-list">Featured Dictionary Words</h2>
              <ul>
                {initialWords.map((word) => (
                  <li key={word._id?.toString()}>
                    <a href={`/words/${word.english.toLowerCase().replace(/\s+/g, '-')}`}>
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
              hasPart: initialWords.map((word) => ({
                "@type": "DefinedTerm",
                name: word.balti,
                description: word.english,
                url: `https://openbalti.com/words/${word.english.toLowerCase().replace(/\s+/g, '-')}`,
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
