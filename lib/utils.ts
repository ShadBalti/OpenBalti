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
 * Converts a word to a URL-friendly slug format using URL encoding.
 * Preserves special characters like apostrophes, commas, slashes, etc.
 * Example: "To Be" -> "to%20be", "Don't" -> "don%27t", "C/C++" -> "c%2fc%2b%2b"
 *
 * @param {string} word - The word to convert to slug format
 * @returns {string} The URL-encoded slug
 */
export function wordToSlug(word: string): string {
  return encodeURIComponent(word.toLowerCase().trim())
}

/**
 * Converts a slug back to the original word format.
 * Decodes URL-encoded characters.
 * Example: "to%20be" -> "to be", "don%27t" -> "don't"
 *
 * @param {string} slug - The slug to convert
 * @returns {string} The decoded word
 */
export function slugToWord(slug: string): string {
  return decodeURIComponent(slug)
}
