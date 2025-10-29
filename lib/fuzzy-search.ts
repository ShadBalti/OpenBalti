// Levenshtein distance algorithm for fuzzy matching
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

// Calculate fuzzy match score (0-1, where 1 is perfect match)
export function calculateFuzzyScore(query: string, target: string): number {
  const distance = calculateLevenshteinDistance(query.toLowerCase(), target.toLowerCase())
  const maxLength = Math.max(query.length, target.length)
  return Math.max(0, 1 - distance / maxLength)
}

// Filter results by fuzzy matching threshold
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
