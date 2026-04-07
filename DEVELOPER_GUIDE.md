# OpenBalti Developer Quick Start Guide

## Getting Started with Implemented Improvements

This guide helps developers quickly adopt the improvements from the comprehensive audit.

---

## 1. Performance Optimization (5 minutes)

### Initialize Database Indexes
```bash
# Call the setup endpoint (in dev console or with curl)
curl http://localhost:3000/api/admin/setup-indexes
```

**What it does:**
- Creates compound index on `english` and `balti` fields
- Creates index on `createdAt` for sorting
- Enables faster search and pagination

### Verify Pagination
Dictionary page now loads 50 words initially instead of all.
- Browse to `/dictionary`
- Check pagination controls at bottom
- Load more words as needed

---

## 2. Error Handling (10 minutes)

### Use Error Utilities in Your API Routes
```typescript
import { apiErrorHandler, ApiError } from "@/lib/api-error-handler"
import { withRetry } from "@/lib/retry-utils"

// In your API route
try {
  // Your code here
} catch (error) {
  return apiErrorHandler(error)
}

// Or use retry logic
const result = await withRetry(async () => {
  return await dbConnect()
}, { maxAttempts: 4 })
```

### Check Error Boundaries
Error boundaries are now in place for:
- `/dictionary` → `app/dictionary/error.tsx`
- `/words/[word]` → `app/words/error.tsx`

Test by triggering errors in development.

---

## 3. SEO Enhancements (5 minutes)

### Use New Schema Components
```typescript
import { ContributorStructuredData, ArticleStructuredData } from "@/components/structured-data"

// In your component
<ContributorStructuredData 
  name="User Name"
  image="/avatar.jpg"
  bio="User biography"
  url="https://openbalti.com/contributors/123"
/>
```

### Verify robots.txt
- Check `public/robots.txt` is being served
- Verify sitemap URL is correct

---

## 4. Design System (5 minutes)

### Use New Color Tokens
```tsx
// OLD - Don't use hardcoded colors
<div className="bg-blue-600 text-white">Bad</div>

// NEW - Use design tokens
<div className="bg-primary text-primary-foreground">Good</div>

// New semantic colors
<div className="bg-success">Success message</div>
<div className="bg-warning">Warning message</div>
<div className="bg-info">Info message</div>
```

### Add Custom Colors
Define in `app/globals.css`:
```css
:root {
  --custom-color: 220 90% 50%;
}
```

Use in Tailwind:
```tsx
<div className="text-[hsl(var(--custom-color))]">Custom</div>
```

---

## 5. Form Validation (10 minutes)

### Use Form Validation Helpers
```typescript
import { validateEmail, validateURL, createErrorMessage } from "@/lib/form-validation"

// Validate individual fields
const emailError = validateEmail(email)
if (emailError) {
  // Show error to user
}

// Create custom validators
const customValidator = (value: string) => {
  if (value.length < 3) return "Must be at least 3 characters"
  return null
}
```

### Add Required Attributes to Forms
```tsx
// Already done in components/word-form.tsx
<Input
  required
  aria-required="true"
  aria-describedby={errors.field ? "field-error" : undefined}
/>
{errors.field && <p id="field-error" role="alert">{errors.field}</p>}
```

---

## 6. Performance Monitoring (15 minutes)

### Enable Web Vitals Tracking
Already enabled in `app/layout.tsx`. Metrics are automatically sent to:
- Google Analytics 4 (if gtag is configured)
- Custom `/api/analytics/metrics` endpoint

### Check Metrics
```typescript
// Web Vitals are logged to console in development
// Look for: [Web Vitals] LCP, FID, INP, CLS, FCP, TTFB
```

### Set Up Monitoring Dashboard
1. Connect your monitoring service (Datadog, New Relic, LogRocket)
2. Update `/api/analytics/metrics/route.ts` to send to your service
3. Create dashboard with metrics

**Key thresholds:**
- LCP: 2500ms (good)
- FID: 100ms (good)
- INP: 200ms (good)
- CLS: 0.1 (good)

---

## 7. Caching Strategy (10 minutes)

### Use Cache API
```typescript
import { cacheService } from "@/lib/cache-service"

// Cache a query result
const words = await cacheService.get("popular_words", async () => {
  return await Word.find().sort({ viewCount: -1 }).limit(50)
}, 3600) // 1 hour TTL

// Invalidate cache when data changes
await cacheService.invalidate("popular_words")
```

### Cache Control API
```typescript
// API automatically returns cache headers
GET /api/words/cache-control?type=popular
// Returns: Cache-Control: public, max-age=3600, s-maxage=3600
```

---

## 8. Community Features (20 minutes)

### Create Notifications
```typescript
import { NotificationService } from "@/lib/notification-service"

// Send notification
await NotificationService.createNotification({
  userId: "user_id",
  type: "contribution_feedback",
  relatedItemId: "word_id",
  message: "Your contribution was approved!",
})
```

### Get User Notifications
```typescript
const notifications = await NotificationService.getNotifications(userId, { 
  unreadOnly: true 
})
```

---

## 9. Dictionary Features (15 minutes)

### Phonetic Search
```typescript
import { phoneticSearch, calculatePhoneticSimilarity } from "@/lib/phonetic-search"

// Find words with phonetic matching
const results = await phoneticSearch("balti", 0.7) // 70% similarity threshold

// Check similarity score
const score = calculatePhoneticSimilarity("cat", "kat")
console.log(score) // 0.95 (95% similar)
```

### Search History
```typescript
import { SearchHistoryManager } from "@/lib/search-history"

// Add to history
SearchHistoryManager.addToHistory("balti word search")

// Get history
const history = SearchHistoryManager.getHistory(10) // Last 10 searches

// Clear history
SearchHistoryManager.clearHistory()
```

---

## 10. Quick Testing Checklist

- [ ] Database indexes created
- [ ] Pagination working on `/dictionary`
- [ ] Error boundaries rendering on errors
- [ ] Web Vitals logged to console
- [ ] Form validation messages showing
- [ ] Design tokens applied to new components
- [ ] Cache headers on API responses
- [ ] SEO schema in HTML head

---

## Common Issues & Solutions

### Issue: Database indexes not created
**Solution:**
```bash
curl http://localhost:3000/api/admin/setup-indexes
```

### Issue: Web Vitals not logging
**Solution:** Check console in development, metrics require actual user interaction

### Issue: Cache not working
**Solution:** Verify `lib/cache-service.ts` is imported correctly

### Issue: Form validation not showing
**Solution:** Ensure `aria-describedby` points to error element ID

---

## File Structure Reference

```
lib/
├── api-error-handler.ts      # Error utilities
├── retry-utils.ts             # Retry logic
├── db-indexes.ts              # Database indexing
├── notification-service.ts    # Notifications
├── phonetic-search.ts         # Fuzzy search
├── search-history.ts          # Search history
├── form-validation.ts         # Form validation
├── cache-service.ts           # Caching
└── query-monitoring.ts        # Query monitoring

app/api/
├── words/
│   ├── paginated/            # Pagination API
│   ├── cache-control/        # Cache API
│   └── word-of-day/          # Word of day
├── admin/setup-indexes/      # Index setup
├── notifications/            # Notifications API
└── analytics/metrics/        # Analytics API

models/
├── Notification.ts           # Notification model
└── ReviewFeedback.ts        # Review feedback model

hooks/
└── use-web-vitals.ts        # Web Vitals tracking

components/
└── empty-state.tsx          # Empty state component
```

---

## Next: Read Full Guides

For detailed implementation:
- **Performance**: `PERFORMANCE_FIXES.md`
- **Errors**: `ERROR_HANDLING_GUIDE.md`
- **SEO**: `SEO_IMPROVEMENTS.md`
- **Design**: `DESIGN_SYSTEM_AUDIT.md`
- **Community**: `COMMUNITY_FEATURES.md`
- **Dictionary**: `DICTIONARY_FEATURES.md`
- **UX**: `UX_ACCESSIBILITY_GUIDE.md`
- **Monitoring**: `PERFORMANCE_MONITORING.md`
- **Status**: `IMPLEMENTATION_STATUS.md`

---

## Support

Questions? Check:
1. The specific feature guide
2. Code comments in the implementation files
3. Test files for usage examples
4. API routes for endpoint documentation
