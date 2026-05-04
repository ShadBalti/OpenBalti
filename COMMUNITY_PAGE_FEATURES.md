# OpenBalti Community Page - Features Overview

## Page Structure

```
/community
├── Hero Section
│   ├── Title & Description
│   └── Community Stats Cards (4 metrics)
│
├── Word of the Day (Compact)
│
├── Main Content Area (2-column layout)
│   ├── Left Column (2/3 width)
│   │   ├── Live Activity Feed
│   │   │   ├── Activity list with avatars
│   │   │   ├── Action badges (Added, Updated, Reviewed)
│   │   │   ├── Filter by action type
│   │   │   └── Pagination
│   │   │
│   │   └── Leaderboards (Tabbed)
│   │       ├── Today
│   │       ├── This Week
│   │       ├── This Month
│   │       ├── All Time
│   │       └── User cards with badges & stats
│   │
│   └── Right Column (1/3 width)
│       ├── Trending Content
│       │   ├── Trending Words (8 top words)
│       │   ├── Timeframe selector (7d/30d/all-time)
│       │   └── Top Contributors (8 users)
│       │
│       ├── Contribution Actions
│       │   ├── Add a Word
│       │   ├── Suggest Correction
│       │   ├── Comment
│       │   └── Invite Friend
│       │
│       └── Share Widget
│           ├── WhatsApp share
│           ├── Facebook share
│           ├── Copy link
│           └── Shareable URL
│
└── CTA Section
    └── "Ready to Make an Impact?" with contribution button
```

## Component Hierarchy

```
CommunityPage (RSC)
├── Suspense + CommunityHeroStats
│   └── Displays 4 key metrics
│
├── Suspense + WordOfDay (compact)
│
├── Suspense + LiveFeed
│   ├── Fetches /api/community/live-feed
│   ├── Shows activity cards
│   └── Pagination support
│
├── Suspense + CommunityLeaderboards
│   ├── Tabs (4 timeframes)
│   └── Fetches /api/leaderboard with timeframe
│
├── Suspense + TrendingContent
│   ├── Trending words section
│   │   └── Fetches /api/community/trending
│   └── Top contributors section
│
├── Suspense + ContributionActions
│   └── 4 action buttons
│
└── Suspense + ShareWidget
    └── Social sharing options
```

## API Endpoints

### Live Feed
```
GET /api/community/live-feed
Query params:
  - page: number (default: 1)
  - limit: number (max: 100, default: 20)
  - action: "create" | "update" | "review" | "all"

Response:
{
  success: boolean
  data: Activity[]
  pagination: { total, page, limit, pages }
}
```

### Trending
```
GET /api/community/trending
Query params:
  - timeframe: "7d" | "30d" | "all" (default: 7d)
  - limit: number (max: 50, default: 10)

Response:
{
  success: boolean
  data: {
    trendingWords: Word[]
    topContributors: User[]
    mostSearched: Word[]
    timeframe: string
  }
}
```

### User Stats
```
GET /api/community/user-stats
Query params:
  - userId: string (required)

Response:
{
  success: boolean
  data: {
    user: { name, email, image, role, createdAt }
    stats: { wordsAdded, wordsEdited, wordsReviewed, currentStreak, badges }
    recentContributions: Activity[]
  }
}
```

### Enhanced Leaderboard
```
GET /api/leaderboard
Query params:
  - timeframe: "today" | "week" | "month" | "all" (default: all)
  - limit: number (default: 50)
  - page: number (default: 1)
  - sortBy: "contributions" | "recent"

Response:
{
  success: boolean
  data: User[]
  pagination: { total, page, limit, pages }
}
```

### Enhanced Community Stats
```
GET /api/stats/community

Response:
{
  success: boolean
  data: {
    // Overall stats
    totalWords: number
    totalUsers: number
    totalFeedback: number
    totalComments: number
    usefulWords: number
    trustedWords: number
    reviewWords: number
    
    // Daily stats
    wordsAddedToday: number
    usersJoinedToday: number
    activeUsersToday: number
    approvalsToday: number
    
    // Lists
    topContributors: User[]
    mostActiveUsers: User[]
  }
}
```

## Data Displayed

### Live Feed
- User avatar & name
- Action badge (color-coded)
- Word name (Balti + English)
- Additional details
- Relative timestamp
- Pagination

### Trending Words
- Rank (#1, #2, #3, etc.)
- Word in Balti
- English translation
- Categories
- Trend score
- Link to full word entry

### Top Contributors
- Rank with medal icons
- User avatar
- User name & role
- Contribution count
- Link to user profile

### Leaderboards
- Rank (with medal icons for top 3)
- User avatar
- User name, role, bio
- Badges earned
- Contribution count (varies by timeframe)
- Link to profile

### Community Stats
- Total words (library size)
- Total contributors
- Words added today
- Active users today

## Color Scheme

- **Create actions**: Green (#22c55e)
- **Update actions**: Blue (#3b82f6)
- **Review actions**: Purple (#a855f7)
- **Trending**: Orange (#f97316)
- **Primary**: From theme (configurable)
- **Backgrounds**: Subtle colored overlays for each section

## Responsive Behavior

### Desktop (>1024px)
- 2-column layout (2/3 + 1/3)
- Full component visibility
- All cards displayed
- 4-column stat cards

### Tablet (768px-1024px)
- Responsive grid adjusts
- Components stack naturally
- Touch-friendly buttons
- 2-column stat cards

### Mobile (<768px)
- Single column layout
- Components stack vertically
- Touch-friendly navigation
- 2-column stat cards (may stack to 1)
- Horizontal scrolling for long content

## Real Data Sources

- **Activity Log**: ActivityLog collection in MongoDB
- **User Stats**: User model contributionStats fields
- **Words**: Word model with feedback statistics
- **Trending**: Calculated from recent activity
- **Leaderboards**: Aggregated from user contributions
- **Engagement**: Tracked via lastActivityAt and feedback timestamps

## No Mock Data

✓ All statistics are real
✓ All usernames are from actual database
✓ All activity timestamps are genuine
✓ Trending calculations use actual feedback scores
✓ Leaderboard rankings reflect true contributions
✓ No placeholder or fake entries anywhere

## Integration with Existing Code

- Uses existing UI components (Card, Badge, Avatar, Button, Tabs, etc.)
- Leverages existing Icon library (lucide-react)
- Works with existing NextAuth session system
- Follows existing code conventions and patterns
- Compatible with existing styling system
- Works with MongoDB document models already in place
