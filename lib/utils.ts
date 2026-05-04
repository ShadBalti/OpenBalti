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
 * Handles spaces, special characters, and normalizes the string.
 * Example: "To Be" -> "to-be", "Don't" -> "dont"
 *
 * @param {string} word - The word to convert to slug format
 * @returns {string} The normalized slug
 */
export function wordToSlug(word: string): string {
  return word
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading/trailing whitespace
    .replace(/\s+/g, "-") // Replace one or more spaces with single hyphen
    .replace(/[^\w-]/g, "") // Remove all non-word characters except hyphens
    .replace(/-+/g, "-") // Replace multiple consecutive hyphens with single hyphen
}

/**
 * Converts a slug back to a search-friendly format.
 * Replaces hyphens with spaces for database queries.
 * Example: "to-be" -> "to be"
 *
 * @param {string} slug - The slug to convert
 * @returns {string} The normalized search word
 */
export function slugToWord(slug: string): string {
  return slug
    .replace(/-/g, " ") // Replace hyphens with spaces
    .trim() // Remove leading/trailing spaces
    .replace(/\s+/g, " ") // Normalize multiple spaces to single space
}
