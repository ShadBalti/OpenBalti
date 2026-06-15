import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility function that combines class names with support for conditional classes and Tailwind CSS class merging.
 * It uses `clsx` to handle conditional class names and `tailwind-merge` to intelligently merge Tailwind CSS classes,
 * preventing style conflicts.
 *
 * @param {...ClassValue[]} inputs - A list of class names. These can be strings, objects with boolean values, or arrays.
 * @returns {string} A single string of combined and merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a word to a URL-friendly slug format.
 * Lowercases the word, trims whitespace, and replaces runs of whitespace with single hyphens.
 * Example: "To Be" -> "to-be", "As if" -> "as-if", "Don't" -> "don't"
 *
 * @param {string} word - The word to convert to slug format
 * @returns {string} The URL-friendly slug
 */
export function wordToSlug(word: string): string {
  return encodeURIComponent(word.toLowerCase().trim().replace(/\s+/g, "-"))
}

/**
 * Converts a slug back to the original word format.
 * Decodes URL-encoded characters and converts hyphens back to spaces.
 * The result is used for a case-insensitive lookup, so casing does not matter.
 * Example: "as-if" -> "as if", "to-be" -> "to be", "don't" -> "don't"
 *
 * @param {string} slug - The slug to convert
 * @returns {string} The decoded word with spaces
 */
export function slugToWord(slug: string): string {
  return decodeURIComponent(slug).replace(/-/g, " ")
}
