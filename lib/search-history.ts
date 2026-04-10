/**
 * Search History Utilities
 * Manages user search history with localStorage (client-side) and optional server-side persistence
 */

export interface SearchHistoryItem {
  id: string
  query: string
  type: "english" | "balti" | "phonetic"
  timestamp: number
  resultCount?: number
}

const STORAGE_KEY = "openbalti_search_history"
const MAX_HISTORY_ITEMS = 20

/**
 * Get user's search history from localStorage
 */
export function getSearchHistory(): SearchHistoryItem[] {
  if (typeof window === "undefined") return []

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error("Error reading search history:", error)
    return []
  }
}

/**
 * Add a search to history
 */
export function addToSearchHistory(
  query: string,
  type: "english" | "balti" | "phonetic",
  resultCount?: number,
): SearchHistoryItem {
  if (typeof window === "undefined") throw new Error("Search history is client-side only")

  const history = getSearchHistory()

  // Remove duplicate if it exists
  const filtered = history.filter((item) => !(item.query === query && item.type === type))

  // Create new search item
  const newItem: SearchHistoryItem = {
    id: `${type}-${query}-${Date.now()}`,
    query,
    type,
    timestamp: Date.now(),
    resultCount,
  }

  // Add to beginning and limit to MAX_HISTORY_ITEMS
  const updated = [newItem, ...filtered].slice(0, MAX_HISTORY_ITEMS)

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  } catch (error) {
    console.error("Error saving search history:", error)
  }

  return newItem
}

/**
 * Clear all search history
 */
export function clearSearchHistory(): void {
  if (typeof window === "undefined") return

  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error("Error clearing search history:", error)
  }
}

/**
 * Remove a specific search from history
 */
export function removeFromSearchHistory(id: string): void {
  if (typeof window === "undefined") return

  try {
    const history = getSearchHistory()
    const updated = history.filter((item) => item.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  } catch (error) {
    console.error("Error removing search item:", error)
  }
}

/**
 * Get unique search queries grouped by type
 */
export function getUniqueQueries(): Record<string, string[]> {
  const history = getSearchHistory()
  const grouped: Record<string, string[]> = {
    english: [],
    balti: [],
    phonetic: [],
  }

  const seen = new Set<string>()

  for (const item of history) {
    const key = `${item.type}:${item.query}`
    if (!seen.has(key)) {
      seen.add(key)
      grouped[item.type].push(item.query)
    }
  }

  return grouped
}

/**
 * Get trending searches (most frequent recent searches)
 */
export function getTrendingSearches(days = 7): Array<{ query: string; count: number; type: string }> {
  const history = getSearchHistory()
  const cutoffTime = Date.now() - days * 24 * 60 * 60 * 1000

  const recent = history.filter((item) => item.timestamp > cutoffTime)

  const trending: Record<string, { query: string; count: number; type: string }> = {}

  for (const item of recent) {
    const key = `${item.type}:${item.query}`
    if (trending[key]) {
      trending[key].count++
    } else {
      trending[key] = {
        query: item.query,
        count: 1,
        type: item.type,
      }
    }
  }

  return Object.values(trending)
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)
}
