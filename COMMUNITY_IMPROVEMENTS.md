# Community Page Improvements & Fixes

## Overview
Comprehensive improvements to the Community Page including fixed data display, enhanced activity tracking, and better user experience.

## Fixes Applied

### 1. API Data Field Corrections
**Issue**: APIs were using incorrect field names (`userId` instead of `user`) causing no data to display.

**Fixed:**
- `/api/community/live-feed/route.ts` - Changed lookup from `userId` to `user` field
- `/api/community/trending/route.ts` - Fixed aggregation pipeline to use correct `user` field
- `/api/leaderboard/route.ts` - Updated activity lookup to use `user` instead of `userId`
- `/api/community/user-stats/route.ts` - Corrected field reference in aggregation

**Result**: All APIs now properly retrieve and display data from the ActivityLog collection.

### 2. Live Activity Feed
**Component**: `components/community/live-feed.tsx`
- Displays real-time activities with user information
- Color-coded action badges (Added=Green, Updated=Blue, Removed=Red, Reviewed=Purple)
- Pagination support for browsing activity history
- Action filtering (all, create, update, delete, review)
- Proper user avatar and role display

### 3. Community Leaderboards
**Component**: `components/community/community-leaderboards.tsx`
- Four timeframe tabs: Today, This Week, This Month, All Time
- Medal rankings (Gold #1, Silver #2, Bronze #3)
- Real activity counting per timeframe
- User badges and bio display
- Correct contribution stats calculation

### 4. Trending Content
**Component**: `components/community/trending-content.tsx`
- Trending words ranked by feedback scores
- Top contributors this week
- Timeframe selector (7d, 30d, all-time)
- Real trend calculation based on feedback data
- Most searched words when available

### 5. Share Community Widget
**Component**: `components/community/share-widget.tsx`

**Improvements**:
- Production URL support via `NEXT_PUBLIC_SITE_URL` environment variable
- Fallback to current window location when env var unavailable
- WhatsApp sharing with message
- Facebook sharing with quote
- Copy link to clipboard with visual feedback
- Safe window access using useEffect (fixes SSR issues)

**Usage**:
```bash
# Add environment variable for production
NEXT_PUBLIC_SITE_URL=https://openbalti.example.com
```

## New Features

### 1. User Activity Tracking
**Component**: `components/community/user-activity-section.tsx`
**API**: `/api/community/user-activity/route.ts`

Features:
- Displays user's contribution history by action type
- Filterable tabs (All, Added, Updated, Removed, Reviewed)
- Shows word Balti/English and contribution details
- Pagination support
- Real-time activity tracking

### 2. Word Activity Monitoring
**Component**: `components/community/word-activity-section.tsx`
**API**: `/api/community/word-activity/route.ts`

Features:
- Shows recently modified words in dictionary
- Displays all contributors for each word
- Shows feedback statistics (useful votes, review requests)
- Timeframe filtering (Today, Week, Month, All)
- Links to word detail pages

### 3. Enhanced Community Stats
**Component**: `components/community/community-hero-stats.tsx`
**API**: Enhanced `/api/stats/community/route.ts`

Metrics:
- Total words in dictionary
- Total community contributors
- Words added today
- Active users today

## Activity Logging System

### Existing Infrastructure
The `lib/activity-logger.ts` utility is already implemented and includes:
- Automatic activity logging for all word operations
- User statistics tracking
- Badge awarding system
- Word history recording

### How Activity is Logged
```typescript
import { logActivity } from "@/lib/activity-logger"

// Log a word creation
await logActivity({
  session: userSession,
  action: "create",
  wordId: newWord._id,
  wordBalti: newWord.balti,
  wordEnglish: newWord.english,
  details: "Word added to dictionary"
})
```

## Database Schema Notes

### ActivityLog Model
```typescript
{
  user: ObjectId (references User),
  action: "create" | "update" | "delete" | "review",
  wordId?: ObjectId,
  wordBalti?: string,
  wordEnglish?: string,
  details?: string,
  createdAt: Date,
  updatedAt: Date (added by timestamps: true)
}
```

**Important**: The field is `user` (not `userId`), which references the User collection.

## API Endpoints

### 1. `/api/community/live-feed`
Returns recent activities with user information.
**Query Params**: 
- `page` (default: 1)
- `limit` (default: 20, max: 100)
- `action` (optional: create, update, delete, review)

### 2. `/api/community/trending`
Returns trending words and top contributors.
**Query Params**:
- `timeframe` (7d, 30d, all)
- `limit` (default: 10, max: 50)

### 3. `/api/community/user-activity`
Returns specific user's activity history.
**Query Params**:
- `userId` (required)
- `action` (optional)
- `page` (default: 1)
- `limit` (default: 20)

### 4. `/api/community/word-activity`
Returns recently modified words with contributors.
**Query Params**:
- `timeframe` (today, week, month)
- `limit` (default: 15)

### 5. `/api/leaderboard`
Enhanced with timeframe filtering.
**Query Params**:
- `timeframe` (all, today, week, month)
- `limit` (default: 50)
- `page` (default: 1)
- `sortBy` (contributions, recent)

### 6. `/api/stats/community`
Enhanced with daily metrics.
**Returns**:
- Total words, users, feedback, comments
- Words added today
- Users joined today
- Active users today
- Approvals today

## Integration with User Profiles

The user activity component integrates seamlessly with existing user profile pages at `/users/[id]`.

**Usage**:
```tsx
import UserActivitySection from "@/components/community/user-activity-section"

<UserActivitySection userId={userId} limit={20} />
```

## Performance Considerations

1. **Pagination**: All endpoints support pagination to handle large datasets
2. **Lean Queries**: ActivityLog queries use `.lean()` for better performance
3. **Aggregation Pipeline**: Complex queries use MongoDB aggregation for efficiency
4. **Indexes**: ActivityLog has indexes on:
   - `user` + `createdAt`
   - `wordId`
   - `createdAt`

## Testing the Implementation

1. **Live Feed**: Navigate to `/community` and verify activities display
2. **Leaderboards**: Click different timeframe tabs to see updating data
3. **Trending**: Change timeframe selector to see trending words update
4. **User Activity**: Visit `/users/[id]` to see user activity section
5. **Word Activity**: Check community page word activity section
6. **Share**: Test WhatsApp, Facebook, and copy link functions

## Future Enhancements

Potential improvements:
- Real-time activity updates using WebSocket
- Activity filtering by category
- Advanced analytics dashboard
- Activity feed notifications
- Streak and milestone badges
- Activity export to CSV/PDF
- Heatmap showing contribution timeline

## Environment Variables Required

For production sharing:
```
NEXT_PUBLIC_SITE_URL=https://openbalti.example.com
```

## Notes

- All components use proper error handling and loading states
- Dark mode is fully supported
- Mobile responsive design
- Accessibility compliant (semantic HTML, ARIA labels)
- TypeScript fully typed for safety
