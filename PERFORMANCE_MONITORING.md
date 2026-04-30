# OpenBalti Performance Monitoring & Optimization

## Overview
This guide covers performance monitoring, caching strategies, and optimization techniques for OpenBalti.

## 1. Caching Strategy

### CacheService Implementation
**File:** `/lib/cache-service.ts`

### Caching Architecture
```
Memory Cache (Development)
     ↓
  Redis Cache (Optional)
     ↓
Database
```

### Usage Examples

#### Get or Fetch (Recommended Pattern)
```typescript
import { CacheService } from "@/lib/cache-service"

// Get a word with automatic caching
const word = await CacheService.getOrFetch(
  CacheService.keys.word(wordId),
  async () => {
    return await Word.findById(wordId).lean()
  },
  CacheService.ttl.medium // 30 minutes
)
```

#### Manual Caching
```typescript
// Get from cache
const cached = await CacheService.get("my-key")

// Set in cache
await CacheService.set("my-key", myData, 3600)

// Delete from cache
await CacheService.delete("my-key")

// Clear pattern
await CacheService.clearPattern("word:")
```

### Cache Keys Reference
```typescript
CacheService.keys.word(id)              // Single word
CacheService.keys.wordDetail(id)        // Word with details
CacheService.keys.wordVariants(id)      // Word variants
CacheService.keys.wordOfDay()           // Today's featured word
CacheService.keys.trendingSearches(7)   // Last 7 days
CacheService.keys.user(id)              // User profile
CacheService.keys.userContributions(id) // User's words
CacheService.keys.leaderboard()         // Top contributors
CacheService.keys.wordCount()           // Total words
```

### TTL (Time-To-Live) Values
```typescript
CacheService.ttl.short    // 5 minutes
CacheService.ttl.medium   // 30 minutes
CacheService.ttl.long     // 1 hour
CacheService.ttl.veryLong // 24 hours
```

### What to Cache

**High Priority (Cache Aggressively)**
- Word of the Day (24 hours)
- Leaderboard data (1 hour)
- Total word count (1 hour)
- User profiles (30 minutes)

**Medium Priority (Cache with Medium TTL)**
- Word details (30 minutes)
- Search results (5-15 minutes)
- Trending searches (1 hour)
- Category lists (1 hour)

**Low Priority (Cache or Skip)**
- User-specific data (10-15 minutes)
- Comments (cache minimally, update frequently)
- Notifications (don't cache, frequent updates)

### Invalidation Strategy

```typescript
// When a word is updated
await CacheService.invalidateWord(wordId)

// When a user's profile changes
await CacheService.invalidateUser(userId)

// When leaderboard changes
await CacheService.delete(CacheService.keys.leaderboard())

// When word count changes
await CacheService.delete(CacheService.keys.wordCount())
```

### Redis Integration (Optional)

To enable Redis caching:

1. Set environment variable:
```bash
REDIS_URL=redis://localhost:6379
```

2. Install Redis client:
```bash
npm install redis
```

3. The CacheService will automatically use Redis when available.

## 2. Query Performance Monitoring

### QueryMonitoring Implementation
**File:** `/lib/query-monitoring.ts`

### Usage

#### Track Query Performance
```typescript
import { trackQuery, getQueryStats } from "@/lib/query-monitoring"

// In your API route
const startTime = performance.now()
const result = await Word.find({}).lean()
const duration = Math.round(performance.now() - startTime)

trackQuery("Word", "find", duration)
```

#### Get Performance Stats
```typescript
const stats = getQueryStats()
console.log(`Average query duration: ${stats.averageDuration}ms`)
console.log(`Slow queries: ${stats.slowQueriesCount}`)

if (stats.slowestQuery) {
  console.log(`Slowest: ${stats.slowestQuery.query} (${stats.slowestQuery.duration}ms)`)
}
```

#### Analyze Slow Queries
```typescript
const slowQueries = getSlowQueries(10)
for (const query of slowQueries) {
  console.log(`${query.collection}.${query.operation}: ${query.duration}ms`)
}
```

#### Get Statistics by Collection
```typescript
const avgDurations = getAverageDurationByCollection()
// Output: { Word: 15, User: 8, Comment: 22 }
```

### API Route for Monitoring Dashboard

**POST `/api/admin/performance/stats`**
```json
{
  "success": true,
  "data": {
    "stats": {
      "totalQueries": 156,
      "averageDuration": 23,
      "slowQueryThreshold": 100,
      "slowQueriesCount": 5
    },
    "slowQueries": [
      {
        "collection": "Word",
        "operation": "aggregate",
        "duration": 245,
        "timestamp": "2026-04-08T10:00:00Z"
      }
    ],
    "byCollection": {
      "Word": 28,
      "User": 12,
      "Comment": 35
    }
  }
}
```

## 3. Web Vitals Monitoring

### Core Web Vitals
- **LCP** (Largest Contentful Paint) - < 2.5s
- **FID** (First Input Delay) - < 100ms
- **CLS** (Cumulative Layout Shift) - < 0.1
- **INP** (Interaction to Next Paint) - < 200ms

### Implementation
**File:** `/hooks/use-web-vitals.ts`

The web vitals hook is already implemented. Verify it sends data to analytics:

```typescript
import { useWebVitals } from "@/hooks/use-web-vitals"

export default function RootLayout() {
  useWebVitals((metric) => {
    console.log(metric.name, metric.value)
    // Send to analytics service
    gtag("event", "web_vital", {
      event_category: "web_vital",
      value: Math.round(metric.value),
      event_label: metric.name,
    })
  })

  return (/* ... */)
}
```

### Monitoring Dashboard Creation

**Create `/app/admin/performance/page.tsx`:**
```jsx
"use client"

import { useEffect, useState } from "react"
import { getQueryStats, getSlowQueries } from "@/lib/query-monitoring"

export default function PerformanceDashboard() {
  const [stats, setStats] = useState(null)
  const [slowQueries, setSlowQueries] = useState([])

  useEffect(() => {
    // Fetch stats every 30 seconds
    const interval = setInterval(() => {
      setStats(getQueryStats())
      setSlowQueries(getSlowQueries())
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  if (!stats) return <div>Loading...</div>

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Performance Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-card rounded-lg">
          <div className="text-muted-foreground">Total Queries</div>
          <div className="text-2xl font-bold">{stats.totalQueries}</div>
        </div>
        <div className="p-4 bg-card rounded-lg">
          <div className="text-muted-foreground">Avg Duration</div>
          <div className="text-2xl font-bold">{stats.averageDuration}ms</div>
        </div>
        <div className="p-4 bg-card rounded-lg">
          <div className="text-muted-foreground">Slow Queries</div>
          <div className="text-2xl font-bold">{stats.slowQueriesCount}</div>
        </div>
        <div className="p-4 bg-card rounded-lg">
          <div className="text-muted-foreground">Threshold</div>
          <div className="text-2xl font-bold">{stats.slowQueryThreshold}ms</div>
        </div>
      </div>

      {/* Slow Queries Table */}
      <div className="bg-card rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Slowest Queries</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Collection</th>
              <th className="text-left p-2">Operation</th>
              <th className="text-left p-2">Duration</th>
              <th className="text-left p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {slowQueries.map((q, i) => (
              <tr key={i} className="border-b">
                <td className="p-2">{q.collection}</td>
                <td className="p-2">{q.operation}</td>
                <td className="p-2">{q.duration}ms</td>
                <td className="p-2">{new Date(q.timestamp).toLocaleTimeString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```

## 4. Image Optimization

### Next.js Image Component
```jsx
import Image from "next/image"

// Good - optimized
<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority // For above-fold images
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
/>

// Bad - unoptimized
<img src="/hero.jpg" alt="Hero image" />
```

### Lazy Loading Non-Critical Images
```jsx
<Image
  src="/icon.jpg"
  alt="Icon"
  width={100}
  height={100}
  loading="lazy"
/>
```

### Responsive Images with srcSet
```jsx
<Image
  src="/word.jpg"
  alt="Word illustration"
  width={400}
  height={300}
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  responsive
/>
```

## 5. Database Index Strategy

### Essential Indexes

```typescript
// Word model indexes
wordSchema.index({ english: 1 })              // For English searches
wordSchema.index({ balti: 1 })                // For Balti searches
wordSchema.index({ createdAt: -1 })           // For sorting
wordSchema.index({ dialect: 1 })              // For filtering
wordSchema.index({ createdBy: 1 })            // For user's words
wordSchema.index({ difficultyLevel: 1 })      // For difficulty filter
wordSchema.index({ dialect: 1, createdAt: -1 }) // Compound for filtering + sorting

// Notification model indexes
notificationSchema.index({ userId: 1, isRead: 1, createdAt: -1 })
notificationSchema.index({ userId: 1, createdAt: -1 })

// Word History indexes
wordHistorySchema.index({ wordId: 1, createdAt: -1 })
```

### Index Creation

Use the provided indexing utility:
```bash
curl -X POST http://localhost:3000/api/admin/setup-indexes
```

## 6. Performance Optimization Checklist

### Database
- [x] Create proper indexes (via setup-indexes API)
- [x] Implement pagination on large queries
- [x] Use `.lean()` for read-only queries
- [x] Use `.populate()` for relationships instead of N+1
- [ ] Monitor slow query logs
- [ ] Optimize regex queries

### Caching
- [x] Implement CacheService
- [x] Cache high-traffic data
- [x] Set appropriate TTLs
- [ ] Implement Redis in production
- [ ] Monitor cache hit rates

### Frontend
- [ ] Lazy load images with `loading="lazy"`
- [ ] Use `priority` for above-fold images
- [ ] Implement code splitting for large components
- [ ] Optimize bundle size
- [ ] Monitor Core Web Vitals

### Monitoring
- [x] Query performance tracking
- [x] Web Vitals collection
- [ ] Create performance dashboard
- [ ] Set up alerts for slow queries
- [ ] Monitor memory usage

## 7. Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Avg Query Duration | < 50ms | TBD |
| LCP | < 2.5s | TBD |
| FID | < 100ms | TBD |
| CLS | < 0.1 | TBD |
| Page Load | < 3s | TBD |
| Cache Hit Rate | > 70% | N/A |

## 8. Monitoring Tools

- **Vercel Analytics** - Core Web Vitals (included)
- **Google PageSpeed Insights** - Performance audits
- **WebPageTest** - Detailed analysis
- **Lighthouse** - Local audits
- **MongoDB Atlas** - Query profiler
- **New Relic** - APM (optional)

## 9. Implementation Priority

1. **Phase 1 (Immediate)**
   - Set up query monitoring
   - Implement caching for high-traffic data
   - Create performance dashboard

2. **Phase 2 (This Week)**
   - Optimize images (add priority/lazy loading)
   - Create indexes
   - Monitor Web Vitals

3. **Phase 3 (This Month)**
   - Implement Redis caching
   - Code splitting for components
   - Performance alerts

4. **Phase 4 (Ongoing)**
   - Continuous monitoring
   - Regular audits
   - Optimization improvements
