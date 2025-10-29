import { isValidObjectId } from "mongoose"

/**
 * Converts Balti text to a URL-safe slug
 * Handles special characters and ensures uniqueness
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
}

/**
 * Generates a unique slug by appending a number if needed
 * Used when a slug already exists in the database
 */
export function generateUniqueSlug(baseSlug: string, existingSlugs: string[]): string {
  if (!existingSlugs.includes(baseSlug)) {
    return baseSlug
  }

  let counter = 2
  while (existingSlugs.includes(`${baseSlug}-${counter}`)) {
    counter++
  }

  return `${baseSlug}-${counter}`
}

/**
 * Validates if a string is a valid MongoDB ObjectId
 */
export function isValidMongoId(id: string): boolean {
  return isValidObjectId(id)
}

/**
 * Checks if a string is a slug (not a MongoDB ObjectId)
 */
export function isSlug(param: string): boolean {
  return !isValidMongoId(param)
}
