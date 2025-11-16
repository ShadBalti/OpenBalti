/**
 * Calculates the Levenshtein distance between two strings, which represents the number of single-character edits
 * (insertions, deletions, or substitutions) required to change one string into the other.
 * This is used for fuzzy string matching.
 *
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {number} The Levenshtein distance between the two strings.
 */
export function calculateLevenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length
  const len2 = str2.length
  const matrix: number[][] = Array(len2 + 1)
    .fill(null)
    .map(() => Array(len1 + 1).fill(0))

  for (let i = 0; i <= len1; i++) matrix[0][i] = i
  for (let j = 0; j <= len2; j++) matrix[j][0] = j

  for (let j = 1; j <= len2; j++) {
    for (let i = 1; i <= len1; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + indicator, // substitution
      )
    }
  }

  return matrix[len2][len1]
}

/**
 * Calculates a fuzzy match score between two strings, normalized to a range of 0 to 1.
 * A score of 1 indicates a perfect match, while a lower score indicates a greater distance.
 *
 * @param {string} query - The search query string.
 * @param {string} target - The target string to match against.
 * @returns {number} A score between 0 and 1 representing the similarity.
 */
export function calculateFuzzyScore(query: string, target: string): number {
  const distance = calculateLevenshteinDistance(query.toLowerCase(), target.toLowerCase())
  const maxLength = Math.max(query.length, target.length)
  return Math.max(0, 1 - distance / maxLength)
}

/**
 * Filters and sorts a list of items based on a fuzzy search query.
 * Each item is scored, and only items meeting the threshold are returned, sorted by relevance.
 *
 * @template T - The type of items in the array.
 * @param {T[]} items - The array of items to filter.
 * @param {string} query - The search query.
 * @param {(item: T) => string} getSearchText - A function that extracts the searchable text from an item.
 * @param {number} [threshold=0.6] - The minimum score (0-1) required to include an item in the results.
 * @returns {T[]} A new array containing the filtered and sorted items.
 */
export function fuzzyFilter<T>(items: T[], query: string, getSearchText: (item: T) => string, threshold = 0.6): T[] {
  if (!query) return items

  return items
    .map((item) => ({
      item,
      score: calculateFuzzyScore(query, getSearchText(item)),
    }))
    .filter(({ score }) => score >= threshold)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item)
}
