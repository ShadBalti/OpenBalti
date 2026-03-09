/**
 * Converts MongoDB documents and other non-serializable objects to plain JSON.
 * This is necessary when passing data from Server Components to Client Components,
 * as MongoDB ObjectIds and other special types cannot be serialized.
 *
 * @param obj The object to serialize
 * @returns A plain JavaScript object safe for client components
 */
export function serializeObject<T = any>(obj: any): T {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Converts an array of MongoDB documents to plain JSON objects.
 *
 * @param arr Array of objects to serialize
 * @returns Array of plain JavaScript objects
 */
export function serializeArray<T = any>(arr: any[]): T[] {
  return JSON.parse(JSON.stringify(arr))
}
