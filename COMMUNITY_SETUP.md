# Community Page Setup Guide

## Quick Start

The Community Page is now fully functional with all improvements applied. Here's what has been enhanced:

## What's Working Now

### 1. Live Activity Feed
- Real-time display of user activities (words added, updated, reviewed)
- Color-coded action badges for easy scanning
- Pagination and filtering by action type
- User avatars and information

### 2. Community Leaderboards
- Top contributors ranked by timeframe
- Medal icons for top 3 positions
- Four views: Today, This Week, This Month, All Time
- Shows contribution counts and user badges

### 3. Trending Words
- Trending words based on feedback scores
- Top contributors for the week
- Adjustable timeframe selector
- Real calculation from actual community data

### 4. Share Functionality
- Share community page on WhatsApp
- Share on Facebook with auto-quoted text
- Copy shareable link to clipboard
- Support for production URLs via environment variable

### 5. User Activity Tracking
- View user contribution history
- Filter by action type (Added, Updated, Removed, Reviewed)
- Shows word details and timestamps
- Pagination for extensive activity histories

### 6. Word Activity Monitoring
- See recently modified words in the dictionary
- Discover all contributors for each word
- View feedback statistics
- Link directly to word detail pages

## Production Setup

### Setting Up Production URL for Sharing

To enable production URL sharing (instead of localhost), add this environment variable:

**Option 1: Vercel Environment**
1. Go to your Vercel project settings
2. Navigate to "Settings" → "Environment Variables"
3. Add new variable:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://yourdomain.com` (replace with your production URL)

**Option 2: Local .env.local**
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Example Values
```
# Development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Production
NEXT_PUBLIC_SITE_URL=https://openbalti.example.com
```

## Component Usage

### Using the Share Widget
```tsx
import ShareWidget from "@/components/community/share-widget"

<ShareWidget
  title="Join OpenBalti Community"
  description="Help preserve the Balti language"
  url="https://openbalti.example.com/community"
/>
```

### Using User Activity Section
```tsx
import UserActivitySection from "@/components/community/user-activity-section"

<UserActivitySection userId={userId} limit={20} />
```

### Using Word Activity Section
```tsx
import WordActivitySection from "@/components/community/word-activity-section"

<WordActivitySection limit={15} timeframe="week" />
```

## Data Requirements

For the Community Page to display data, your MongoDB database should contain:

### 1. Users Collection
Users should have:
- `_id` (ObjectId)
- `name` (string)
- `image` (URL, optional)
- `role` (string)
- `contributionStats` (object with wordsAdded, wordsEdited, wordsReviewed)
- `badges` (array, optional)

### 2. Words Collection
Words should have:
- `_id` (ObjectId)
- `balti` (string)
- `english` (string)
- `categories` (array, optional)
- `feedbackStats` (object with useful, trusted, needsReview counts)
- `createdAt` (Date)
- `updatedAt` (Date)

### 3. ActivityLog Collection
ActivityLog entries should be created whenever:
- A word is created
- A word is updated
- A word is deleted
- A word is reviewed/approved

Structure:
```javascript
{
  user: ObjectId,           // Reference to User
  action: "create|update|delete|review",
  wordId: ObjectId,         // Reference to Word
  wordBalti: string,        // The Balti word
  wordEnglish: string,      // The English translation
  details: string,          // Optional details
  createdAt: Date,
  updatedAt: Date
}
```

## Logging Activities

Activities are automatically logged through the `logActivity` utility. To use it in your API routes:

```typescript
import { logActivity } from "@/lib/activity-logger"

// In your word creation/update endpoint:
await logActivity({
  session: userSession,
  action: "create",
  wordId: newWord._id,
  wordBalti: newWord.balti,
  wordEnglish: newWord.english,
  details: "Word added by user"
})
```

## Testing the Community Page

1. **Navigate to Community Page**: Visit `/community`
2. **Check Live Feed**: Should show recent word activities
3. **Check Leaderboards**: Click tabs to see different timeframes
4. **Check Trending**: See trending words and top contributors
5. **Test Sharing**: Try WhatsApp, Facebook, and copy link functions
6. **Check User Profiles**: Visit `/users/[userId]` to see activity tracking

## Troubleshooting

### No Data Showing in Live Feed
- Check if ActivityLog collection has entries
- Verify `user` field references valid User IDs
- Check API response in browser console (DevTools)

### Leaderboards Empty
- Ensure User collection has `contributionStats` field
- Verify ActivityLog entries exist for the selected timeframe
- Check that dates are correct in ActivityLog

### Share Link Not Working
- Set `NEXT_PUBLIC_SITE_URL` environment variable
- Verify URL is accessible and valid
- Check browser console for errors

### Word Activity Not Showing
- Ensure Word collection has `createdAt` and `updatedAt` fields
- Verify ActivityLog has corresponding wordId entries
- Check that dates fall within selected timeframe

## API Endpoints Reference

All endpoints return JSON with the following structure:

```json
{
  "success": true|false,
  "data": {...},
  "pagination": {
    "total": number,
    "page": number,
    "limit": number,
    "pages": number
  }
}
```

### Available Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/community/live-feed` | GET | Recent activities with pagination |
| `/api/community/trending` | GET | Trending words and contributors |
| `/api/community/user-activity` | GET | Specific user's activity history |
| `/api/community/word-activity` | GET | Recently modified words |
| `/api/leaderboard` | GET | Ranked contributors by timeframe |
| `/api/stats/community` | GET | Overall community statistics |

## Performance Tips

1. **Pagination**: Use pagination for large datasets
2. **Timeframe Filtering**: Narrow date ranges for faster queries
3. **Indexes**: ActivityLog has indexes for common queries
4. **Lean Queries**: Use `.lean()` for read-only operations

## Next Steps

1. Add `NEXT_PUBLIC_SITE_URL` environment variable
2. Verify ActivityLog collection is being populated
3. Test different components and timeframes
4. Customize appearance in your Design Mode if needed
5. Monitor performance with large datasets

## Support

For issues or questions:
1. Check the `COMMUNITY_IMPROVEMENTS.md` file for detailed technical info
2. Review API responses in browser console
3. Verify database entries exist for expected data
4. Check that all required fields are present in collections
