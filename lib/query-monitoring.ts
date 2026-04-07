/**
 * Query Performance Monitoring
 * Tracks database query performance and logs slow queries
 */

interface QueryMetrics {
  query: string
  duration: number
  timestamp: Date
  collection: string
  operation: string
  isSlow: boolean
}

interface PerformanceStats {
  totalQueries: number
  averageDuration: number
  slowestQuery: QueryMetrics | null
  slowQueryThreshold: number
  slowQueriesCount: number
}

class QueryMonitor {
  private metrics: QueryMetrics[] = []
  private slowQueryThreshold: number = 100 // milliseconds
  private maxMetricsSize: number = 1000 // Keep last 1000 queries

  /**
   * Log a query's performance
   */
  logQuery(
    query: string,
    duration: number,
    collection: string,
    operation: string = "unknown",
  ): void {
    const isSlow = duration > this.slowQueryThreshold

    const metric: QueryMetrics = {
      query: this.sanitizeQuery(query),
      duration,
      timestamp: new Date(),
      collection,
      operation,
      isSlow,
    }

    this.metrics.push(metric)

    // Keep metrics array size under control
    if (this.metrics.length > this.maxMetricsSize) {
      this.metrics.shift()
    }

    // Log slow queries
    if (isSlow) {
      console.warn(`SLOW QUERY [${duration}ms]: ${collection}.${operation}`)
      console.warn(`Query: ${metric.query}`)
    }
  }

  /**
   * Get performance statistics
   */
  getStats(): PerformanceStats {
    if (this.metrics.length === 0) {
      return {
        totalQueries: 0,
        averageDuration: 0,
        slowestQuery: null,
        slowQueryThreshold: this.slowQueryThreshold,
        slowQueriesCount: 0,
      }
    }

    const slowQueries = this.metrics.filter((m) => m.isSlow)
    const totalDuration = this.metrics.reduce((sum, m) => sum + m.duration, 0)
    const slowestQuery = this.metrics.reduce((prev, current) =>
      current.duration > prev.duration ? current : prev,
    )

    return {
      totalQueries: this.metrics.length,
      averageDuration: Math.round(totalDuration / this.metrics.length),
      slowestQuery,
      slowQueryThreshold: this.slowQueryThreshold,
      slowQueriesCount: slowQueries.length,
    }
  }

  /**
   * Get slow queries
   */
  getSlowQueries(limit: number = 10): QueryMetrics[] {
    return this.metrics
      .filter((m) => m.isSlow)
      .sort((a, b) => b.duration - a.duration)
      .slice(0, limit)
  }

  /**
   * Get queries by collection
   */
  getQueriesByCollection(collection: string): QueryMetrics[] {
    return this.metrics.filter((m) => m.collection === collection)
  }

  /**
   * Get queries by operation
   */
  getQueriesByOperation(operation: string): QueryMetrics[] {
    return this.metrics.filter((m) => m.operation === operation)
  }

  /**
   * Get average duration by collection
   */
  getAverageDurationByCollection(): Record<string, number> {
    const byCollection: Record<string, QueryMetrics[]> = {}

    for (const metric of this.metrics) {
      if (!byCollection[metric.collection]) {
        byCollection[metric.collection] = []
      }
      byCollection[metric.collection].push(metric)
    }

    const averages: Record<string, number> = {}
    for (const [collection, queries] of Object.entries(byCollection)) {
      const totalDuration = queries.reduce((sum, q) => sum + q.duration, 0)
      averages[collection] = Math.round(totalDuration / queries.length)
    }

    return averages
  }

  /**
   * Reset metrics
   */
  reset(): void {
    this.metrics = []
  }

  /**
   * Sanitize query string for logging
   */
  private sanitizeQuery(query: string): string {
    // Remove sensitive data from query logs
    return query
      .replace(/password[^,}]*/gi, "password: ***")
      .replace(/email[^,}]*/gi, "email: ***")
      .substring(0, 200) // Limit length
  }

  /**
   * Export metrics as JSON
   */
  exportMetrics(): string {
    return JSON.stringify(
      {
        stats: this.getStats(),
        slowQueries: this.getSlowQueries(),
        byCollection: this.getAverageDurationByCollection(),
      },
      null,
      2,
    )
  }
}

// Global monitor instance
const queryMonitor = new QueryMonitor()

/**
 * Middleware to monitor MongoDB queries
 * Add to mongoose connection setup
 */
export function setupQueryMonitoring(): void {
  if (typeof global !== "undefined" && !global.queryMonitoringSetup) {
    // This would integrate with Mongoose to intercept queries
    // For now, we provide the interface for manual logging
    global.queryMonitoringSetup = true
  }
}

/**
 * Track a query execution
 */
export function trackQuery(
  collection: string,
  operation: string,
  duration: number,
  query?: string,
): void {
  queryMonitor.logQuery(query || operation, duration, collection, operation)
}

/**
 * Get monitoring stats
 */
export function getQueryStats(): PerformanceStats {
  return queryMonitor.getStats()
}

/**
 * Get slow queries
 */
export function getSlowQueries(limit?: number): QueryMetrics[] {
  return queryMonitor.getSlowQueries(limit)
}

/**
 * Get average duration by collection
 */
export function getAverageDurationByCollection(): Record<string, number> {
  return queryMonitor.getAverageDurationByCollection()
}

/**
 * Reset monitoring
 */
export function resetQueryMonitoring(): void {
  queryMonitor.reset()
}

/**
 * Export metrics
 */
export function exportQueryMetrics(): string {
  return queryMonitor.exportMetrics()
}

// Global declaration
declare global {
  var queryMonitoringSetup: boolean
}

export default queryMonitor
