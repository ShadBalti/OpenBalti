/**
 * @module seoKeywords
 * @description This module centralizes Search Engine Optimization (SEO) keywords for different pages of the application.
 * It provides a structured way to manage and retrieve keywords, ensuring that each page has relevant metadata to improve search engine rankings.
 */

/**
 * @typedef { "/" | "learn" | "learn/phrases" | "learn/script" | "learn/dialectal" | "learn/grammar" | "blog"} PageKey
 * @description Represents the unique identifiers for pages that have a dedicated set of SEO keywords.
 */
export type PageKey = "/" | "learn" | "learn/phrases" | "learn/script" | "learn/dialectal" | "learn/grammar" | "blog"

/**
 * @const {Record<PageKey, string[]>} PAGE_KEYWORDS
 * @description A dictionary mapping each `PageKey` to an array of SEO-optimized keywords.
 * This structure allows for easy maintenance and retrieval of keywords for specific pages.
 */
export const PAGE_KEYWORDS: Record<PageKey, string[]> = {
  "/": [
    "Balti language",
    "Balti dictionary online",
    "Balti translator",
    "Balti to English translation",
    "English to Balti translator",
    "Balti words meaning",
    "Balti vocabulary",
    "learn Balti language",
    "Balti grammar guide",
    "Balti phrases for beginners",
    "Balti script",
    "Balti writing system",
    "Baltistan language",
    "Balti culture",
    "Balti language app",
    "Balti to Urdu translation",
    "language preservation project",
    "Balti language revival",
    "Tibetan dialects",
    "Balti and Tibetan connection",
    "digital Balti dictionary",
    "Balti translation tool",
    "endangered languages Pakistan",
    "learn Balti script",
    "Balti language learning resources",
    "Balti heritage",
    "online language tool",
    "dictionary for Balti words",
    "support Balti language preservation",
    "Balti dialects variations",
    "Baltistan tourism language guide",
    "Balti vocabulary flashcards",
    "Balti community portal",
  ],

  learn: [
    "learn Balti language online",
    "Balti language lessons for beginners",
    "how to speak Balti fluently",
    "Balti language course free",
    "Balti language and culture Baltistan",
    "Balti writing system and grammar",
    "Balti language resources 2025",
    "learn Balti vocabulary everyday",
    "Balti language preservation initiative",
    "Balti language for travellers",
  ],

  "learn/phrases": [
    "common Balti phrases for travel",
    "Balti greetings and expressions",
    "everyday Balti sentences with translation",
    "Balti phrases for beginners",
    "essential Balti conversation guide",
    "Balti travel phrases Baltistan",
    "Balti phrases with pronunciation audio",
    "quick Balti expressions list",
    "learn Balti phrases online",
    "Balti conversation practice phrases",
  ],

  "learn/script": [
    "Balti script Yige tutorial",
    "how to read Balti writing system",
    "Balti Tibetan script history",
    "Balti alphabet Perso-Arabic and Yige",
    "learn Balti writing for beginners",
    "Balti script revival initiative",
    "Balti Yige script letters and sounds",
    "Balti script online course",
    "Balti writing system explained",
    "Balti script practice workbook",
  ],

  "learn/dialectal": [
    "Balti dialects variation Skardu Khaplu",
    "regional Balti accents Baltistan Ladakh",
    "Balti dialectal differences vocabulary",
    "choose right Balti dialect tutorial",
    "Balti dialect guide for learners",
    "how Balti dialects differ in pronunciation",
    "Balti dialect map of Baltistan",
    "Balti dialect examples table",
    "Balti dialect vs standard Balti",
    "Balti dialect study resources",
  ],

  "learn/grammar": [
    "Balti grammar rules explained",
    "Balti sentence structure SOV",
    "Balti noun verb case system",
    "learn Balti grammar for beginners",
    "Balti verb tense markers tutorial",
    "Balti morphological features overview",
    "Balti grammar practice exercises",
    "Balti grammar for intermediate learners",
    "Balti language structure guide",
    "Balti grammar online lessons",
  ],

  blog: [
    "Balti language blog",
    "language learning articles",
    "cultural preservation resources",
    "Balti language guides",
    "language learning tips",
    "Balti language news",
    "endangered language preservation",
    "language learning insights",
    "Balti community stories",
    "linguistic research articles",
    "heritage language learning",
    "Balti dialect explanations",
    "language preservation initiatives",
    "Balti culture articles",
  ],
}

/**
 * Retrieves the SEO keywords for a given page.
 *
 * @param {PageKey} page - The unique identifier of the page for which to retrieve keywords.
 * @returns {string[]} An array of keywords for the specified page. Returns an empty array if the page key is not found.
 */
export function getKeywordsFor(page: PageKey): string[] {
  return PAGE_KEYWORDS[page] ?? []
}
