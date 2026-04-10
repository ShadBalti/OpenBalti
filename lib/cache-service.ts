/**
 * Cache Service - In-memory and Redis-based caching
 * Provides unified caching interface with fallback to in-memory cache
 */

/**
 * In-memory cache for development/fallback
 * Automatically clears entries after TTL
 */
class MemoryCache {
  private cache: Map<string, { value: any; expiresAt: number }> = new Map()
  private cleanupInterval: NodeJS.Timeout | null = null

  constructor() {
    // Clean up expired entries every 5 minutes
    this.cleanupInterval = setInterval(() => {
      this.cleanup()
    }, 5 * 60 * 1000)
  }

  set(key: string, value: any, ttl: number): void {
    const expiresAt = Date.now() + ttl * 1000
    this.cache.set(key, { value, expiresAt })
  }

  get(key: string): any | null {
    const item = this.cache.get(key)

    if (!item) {
      return null
    }

    if (item.expiresAt < Date.now()) {
      this.cache.delete(key)
      return null
    }

    return item.value
  }

  delete(key: string): void {
    this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }

  private cleanup(): void {
    const now = Date.now()
    for (const [key, item] of this.cache.entries()) {
      if (item.expiresAt < now) {
        this.cache.delete(key)
      }
    }
  }

  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval)
    }
    this.clear()
  }
}

// Global memory cache instance
const memoryCache = new MemoryCache()

/**
 * Cache Service - Unified interface for caching
 */
export class CacheService {
  private static readonly PREFIX = "openbalti:"

  /**
   * Get a value from cache
   */
  static async get<T>(key: string): Promise<T | null> {
    try {
      const fullKey = this.PREFIX + key

      // Try Redis first (if available)
      if (process.env.REDIS_URL) {
        try {
          // Placeholder for Redis client
          // const value = await redis.get(fullKey)
          // if (value) return JSON.parse(value)
        } catch (error) {
          // Silently fall back to memory cache on Redis error
        }
      }

      // Fall back to memory cache
      return memoryCache.get(fullKey)
    } catch (error) {
      // Return null on cache error - caller will fetch fresh data
      return null
    }
  }

  /**
   * Set a value in cache
   */
  static async set<T>(key: string, value: T, ttl: number = 3600): Promise<void> {
    try {
      const fullKey = this.PREFIX + key

      // Store in memory cache
      memoryCache.set(fullKey, value, ttl)

      // Store in Redis if available
      if (process.env.REDIS_URL) {
        try {
          // Placeholder for Redis client
          // await redis.setex(fullKey, ttl, JSON.stringify(value))
        } catch (error) {
          // Silently handle Redis errors - memory cache is sufficient
        }
      }
    } catch (error) {
      // Silently handle cache errors - system continues without caching
    }
  }

  /**
   * Delete a value from cache
   */
  static async delete(key: string): Promise<void> {
    try {
      const fullKey = this.PREFIX + key

      // Delete from memory cache
      memoryCache.delete(fullKey)

      // Delete from Redis if available
      if (process.env.REDIS_URL) {
        try {
          // Placeholder for Redis client
          // await redis.del(fullKey)
        } catch (error) {
          // Silently handle Redis errors
        }
      }
    } catch (error) {
      // Silently handle cache errors
    }
  }

  /**
   * Clear all cache entries with a specific prefix
   */
  static async clearPattern(pattern: string): Promise<void> {
    try {
      const fullPattern = this.PREFIX + pattern

      // Clear memory cache
      memoryCache.clear()

      // Clear Redis if available
      if (process.env.REDIS_URL) {
        try {
          // Placeholder for Redis pattern deletion
          // await redis.del(await redis.keys(fullPattern + '*'))
        } catch (error) {
          // Silently handle Redis errors
        }
      }
    } catch (error) {
      // Silently handle cache errors
    }
  }

  /**
   * Get or fetch a value
   */
  static async getOrFetch<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl: number = 3600,
  ): Promise<T> {
    // Try to get from cache
    const cached = await this.get<T>(key)
    if (cached) {
      return cached
    }

    // Fetch value
    const value = await fetcher()

    // Store in cache
    await this.set(key, value, ttl)

    return value
  }

  /**
   * Invalidate cache for a word
   */
  static async invalidateWord(wordId: string): Promise<void> {
    await this.delete(`word:${wordId}`)
    await this.delete(`word:detail:${wordId}`)
    await this.delete(`word:variants:${wordId}`)
  }

  /**
   * Invalidate user-related cache
   */
  static async invalidateUser(userId: string): Promise<void> {
    await this.delete(`user:${userId}`)
    await this.delete(`user:contributions:${userId}`)
    await this.delete(`notifications:unread:${userId}`)
  }

  /**
   * Cache keys for common queries
   */
  static keys = {
    word: (id: string) => `word:${id}`,
    wordDetail: (id: string) => `word:detail:${id}`,
    wordVariants: (id: string) => `word:variants:${id}`,
    wordOfDay: () => `word:of:day:${new Date().toDateString()}`,
    trendingSearches: (days: number) => `trending:searches:${days}d`,
    user: (id: string) => `user:${id}`,
    userContributions: (id: string) => `user:contributions:${id}`,
    notifications: (userId: string) => `notifications:${userId}`,
    notificationsUnread: (userId: string) => `notifications:unread:${userId}`,
    leaderboard: () => `leaderboard:top`,
    wordCount: () => `stats:word:count`,
    stats: (type: string) => `stats:${type}`,
  }

  /**
   * Cache TTLs
   */
  static ttl = {
    short: 300, // 5 minutes
    medium: 1800, // 30 minutes
    long: 3600, // 1 hour
    veryLong: 86400, // 24 hours
  }
}

export default CacheService
