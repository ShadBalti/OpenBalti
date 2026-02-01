/**
 * Search Suggestions System
 * Provides placeholder suggestions to guide users and improve search discoverability
 */

export interface SearchSuggestion {
  text: string
  category?: string
  hint?: string
  icon?: string
}

/**
 * Popular and trending search suggestions
 * These are displayed as placeholders to guide users
 */
export const popularSearchSuggestions: SearchSuggestion[] = [
  {
    text: "khoro",
    category: "Food",
    hint: "Traditional Balti bread",
    icon: "🥖",
  },
  {
    text: "phitak",
    category: "Family",
    hint: "Mother in Balti",
    icon: "👨‍👩‍👧",
  },
  {
    text: "tso",
    category: "Nature",
    hint: "Mountain peak",
    icon: "⛰️",
  },
  {
    text: "yak",
    category: "Animals",
    hint: "A sturdy highland animal",
    icon: "🐄",
  },
  {
    text: "nubra",
    category: "Geography",
    hint: "Dialect region",
    icon: "🗺️",
  },
  {
    text: "brogil",
    category: "Geography",
    hint: "Mountain valley",
    icon: "🏔️",
  },
  {
    text: "momo",
    category: "Food",
    hint: "Traditional dumplings",
    icon: "🥟",
  },
  {
    text: "gonpa",
    category: "Culture",
    hint: "Buddhist monastery",
    icon: "🏛️",
  },
  {
    text: "thangka",
    category: "Culture",
    hint: "Traditional art form",
    icon: "🎨",
  },
  {
    text: "lo",
    category: "Common",
    hint: "Year or season",
    icon: "📅",
  },
]

/**
 * Get random search suggestions for empty state
 */
export function getRandomSuggestions(
  count: number = 3,
  suggestions: SearchSuggestion[] = popularSearchSuggestions
): SearchSuggestion[] {
  const shuffled = [...suggestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

/**
 * Get suggestions by category
 */
export function getSuggestionsByCategory(
  category: string,
  suggestions: SearchSuggestion[] = popularSearchSuggestions
): SearchSuggestion[] {
  return suggestions.filter((s) => s.category?.toLowerCase() === category.toLowerCase())
}

/**
 * Filter suggestions based on input
 */
export function filterSuggestions(
  input: string,
  suggestions: SearchSuggestion[] = popularSearchSuggestions
): SearchSuggestion[] {
  if (!input.trim()) {
    return getRandomSuggestions(5)
  }

  const lowerInput = input.toLowerCase()
  return suggestions.filter(
    (s) =>
      s.text.toLowerCase().includes(lowerInput) ||
      s.category?.toLowerCase().includes(lowerInput) ||
      s.hint?.toLowerCase().includes(lowerInput)
  )
}

/**
 * Get trending searches based on time
 * Can be connected to analytics data
 */
export function getTrendingSuggestions(
  suggestions: SearchSuggestion[] = popularSearchSuggestions
): SearchSuggestion[] {
  // Return top suggestions, in real implementation would come from analytics
  return suggestions.slice(0, 5)
}

/**
 * Get placeholder text for empty search
 */
export function getSearchPlaceholder(): string {
  const placeholders = [
    "Search for a word (e.g., khoro, yak, momo)",
    "Try searching: tso, phitak, nubra",
    "What word are you looking for?",
    "Search the Balti dictionary",
    "Discover Balti words",
  ]

  return placeholders[Math.floor(Math.random() * placeholders.length)]
}

/**
 * Get category-based search suggestions
 */
export const suggestionCategories = {
  food: ["khoro", "momo", "butter", "tea", "chang"],
  family: ["phitak", "father", "brother", "sister", "children"],
  nature: ["tso", "mountain", "river", "stone", "sky"],
  animals: ["yak", "horse", "sheep", "goat", "bird"],
  geography: ["nubra", "skardu", "kargil", "khaplu", "valley"],
  culture: ["gonpa", "thangka", "prayer", "festival", "tradition"],
  verbs: ["chung", "lang", "tok", "thang", "zer"],
  common: ["lo", "name", "good", "water", "food"],
}

/**
 * Get all categories
 */
export function getAllCategories(): string[] {
  return Object.keys(suggestionCategories)
}

/**
 * Get suggestions for a specific category
 */
export function getCategorySuggestions(category: keyof typeof suggestionCategories): string[] {
  return suggestionCategories[category] || []
}
