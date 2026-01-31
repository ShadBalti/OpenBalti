/**
 * Search Result Caching System
 * Implements an in-memory cache for search results with TTL (Time-To-Live) support
 * and automatic expiration to optimize repeated search queries.
 */

interface CacheEntry<T> {
  data: T
  timestamp: number
  ttl: number
}

interface CacheKey {
  query: string
  filters: Record<string, any>
  fuzzy: boolean
}

class SearchCache {
  private cache: Map<string, CacheEntry<any>> = new Map()
  private readonly defaultTTL = 5 * 60 * 1000 // 5 minutes in milliseconds
  private cleanupInterval: NodeJS.Timeout | null = null

  constructor() {
    // Start automatic cleanup every minute
    this.startCleanup()
  }

  /**
   * Generate a cache key from search parameters
   */
  private generateKey(key: CacheKey): string {
    return JSON.stringify({
      q: key.query,
      f: key.filters,
      z: key.fuzzy,
    })
  }

  /**
   * Get cached results if available and not expired
   */
  get<T>(key: CacheKey): T | null {
    const cacheKey = this.generateKey(key)
    const entry = this.cache.get(cacheKey)

    if (!entry) {
      return null
    }

    // Check if cache has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(cacheKey)
      return null
    }

    return entry.data as T
  }

  /**
   * Store results in cache
   */
  set<T>(key: CacheKey, data: T, ttl: number = this.defaultTTL): void {
    const cacheKey = this.generateKey(key)
    this.cache.set(cacheKey, {
      data,
      timestamp: Date.now(),
      ttl,
    })
  }

  /**
   * Clear specific cache entry
   */
  invalidate(key: CacheKey): void {
    const cacheKey = this.generateKey(key)
    this.cache.delete(cacheKey)
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear()
  }

  /**
   * Get cache statistics
   */
  getStats(): {
    size: number
    entries: Array<{ key: string; age: number }>
  } {
    const entries = Array.from(this.cache.entries()).map(([key, entry]) => ({
      key,
      age: Date.now() - entry.timestamp,
    }))

    return {
      size: this.cache.size,
      entries,
    }
  }

  /**
   * Start periodic cleanup of expired entries
   */
  private startCleanup(): void {
    this.cleanupInterval = setInterval(() => {
      const now = Date.now()
      let cleaned = 0

      for (const [key, entry] of this.cache.entries()) {
        if (now - entry.timestamp > entry.ttl) {
          this.cache.delete(key)
          cleaned++
        }
      }

      if (cleaned > 0) {
        console.log(`[SearchCache] Cleaned up ${cleaned} expired entries`)
      }
    }, 60000) // Run cleanup every minute
  }

  /**
   * Stop cleanup interval
   */
  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval)
    }
  }
}

// Export singleton instance
export const searchCache = new SearchCache()

export type { CacheKey }
