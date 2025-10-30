// lib/seoKeywords.ts
export type PageKey =
  | "learn"
  | "learn/phrases"
  | "learn/script"
  | "learn/dialectal"
  | "learn/grammar";

export const PAGE_KEYWORDS: Record<PageKey, string[]> = {
  "learn": [
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
};

/**
 * Helper: return keywords for a page key
 */
export function getKeywordsFor(page: PageKey): string[] {
  return PAGE_KEYWORDS[page] ?? [];
}