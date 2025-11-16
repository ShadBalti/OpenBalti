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
