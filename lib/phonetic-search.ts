/**
 * Phonetic Search Utilities
 * Provides fuzzy/phonetic matching for word searches
 * Useful for users searching by pronunciation even if spelling is unclear
 */

/**
 * Calculate Levenshtein distance between two strings
 * Used to find similar-sounding words
 */
export function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length
  const len2 = str2.length
  const matrix: number[][] = []

  for (let i = 0; i <= len2; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= len1; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= len2; i++) {
    for (let j = 1; j <= len1; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1, // deletion
        )
      }
    }
  }

  return matrix[len2][len1]
}

/**
 * Calculate similarity score between two strings (0-1)
 */
export function similarityScore(str1: string, str2: string): number {
  const maxLength = Math.max(str1.length, str2.length)
  if (maxLength === 0) return 1 // Both strings are empty

  const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase())
  return 1 - distance / maxLength
}

/**
 * Simple phonetic encoding (Metaphone-like)
 * Converts words to phonetic codes for matching
 */
export function phoneticCode(word: string): string {
  if (!word) return ""

  let code = word.toLowerCase()

  // Balti-specific phonetic rules
  const rules: Record<string, string> = {
    // Vowel normalization
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
    ä: "a",
    ö: "o",
    ü: "u",

    // Common consonant patterns
    ch: "c",
    sh: "s",
    th: "t",
    ph: "f",
    gh: "g",

    // Doubled consonants
    ll: "l",
    mm: "m",
    nn: "n",
    tt: "t",
    ss: "s",
  }

  // Apply phonetic rules
  for (const [pattern, replacement] of Object.entries(rules)) {
    code = code.replace(new RegExp(pattern, "g"), replacement)
  }

  // Remove less significant characters
  code = code.replace(/[hs]/g, "")

  return code
}

/**
 * Find phonetically similar words
 */
export function findPhoneticMatches(
  query: string,
  words: Array<{ english?: string; balti?: string; phonetic?: string }>,
  threshold = 0.7,
): Array<{
  word: string
  score: number
  type: "english" | "balti" | "phonetic"
}> {
  const results: Array<{ word: string; score: number; type: "english" | "balti" | "phonetic" }> = []

  const queryCode = phoneticCode(query)

  for (const wordObj of words) {
    // Check English phonetic match
    if (wordObj.english) {
      const score = similarityScore(queryCode, phoneticCode(wordObj.english))
      if (score >= threshold) {
        results.push({
          word: wordObj.english,
          score,
          type: "english",
        })
      }
    }

    // Check Balti phonetic match
    if (wordObj.balti) {
      const score = similarityScore(queryCode, phoneticCode(wordObj.balti))
      if (score >= threshold) {
        results.push({
          word: wordObj.balti,
          score,
          type: "balti",
        })
      }
    }

    // Check direct phonetic field if available
    if (wordObj.phonetic) {
      const score = similarityScore(query.toLowerCase(), wordObj.phonetic.toLowerCase())
      if (score >= threshold) {
        results.push({
          word: wordObj.phonetic,
          score,
          type: "phonetic",
        })
      }
    }
  }

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score)
}

/**
 * Match words by phonetic similarity to query
 * Returns unique words sorted by relevance
 */
export function matchPhonetic(
  query: string,
  words: Array<{ english?: string; balti?: string; phonetic?: string; _id?: string }>,
  limit = 10,
): typeof words {
  const matches = findPhoneticMatches(query, words, 0.6)

  // Group by word ID to avoid duplicates
  const seen = new Set<string>()
  const unique = []

  for (const match of matches) {
    const wordObj = words.find(
      (w) => w.english === match.word || w.balti === match.word || w.phonetic === match.word,
    )

    if (wordObj && wordObj._id && !seen.has(wordObj._id.toString())) {
      seen.add(wordObj._id.toString())
      unique.push(wordObj)
    }
  }

  return unique.slice(0, limit)
}
