# OpenBalti Community Features Implementation Guide

## Overview
This document describes the implementation of community features including notifications, review feedback system, reputation badges, and discussion threading.

## 1. Notification System

### Architecture
The notification system is built on MongoDB and follows a pub-sub pattern with persistent storage.

**Models:**
- `Notification` - Stores all notification records
- `ReviewFeedback` - Stores structured review feedback for contributions

**Service:**
- `NotificationService` - Handles all notification operations (create, retrieve, mark as read, etc.)

### API Endpoints

#### GET `/api/notifications`
Fetch notifications for the authenticated user.

**Query Parameters:**
- `limit` (optional, default: 20) - Number of notifications to return
- `skip` (optional, default: 0) - Number of notifications to skip (for pagination)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "notification_id",
      "userId": "user_id",
      "type": "review_feedback",
      "title": "Contribution Approved!",
      "message": "Your contribution has been approved",
      "isRead": false,
      "createdAt": "2026-04-08T10:00:00Z",
      "updatedAt": "2026-04-08T10:00:00Z"
    }
  ],
  "total": 25,
  "unreadCount": 5
}
```

#### PUT `/api/notifications`
Mark all notifications as read for the authenticated user.

**Response:**
```json
{
  "success": true,
  "message": "All notifications marked as read"
}
```

#### PUT `/api/notifications/[id]`
Mark a specific notification as read.

**Response:**
```json
{
  "success": true,
  "data": { /* updated notification */ }
}
```

#### DELETE `/api/notifications/[id]`
Delete a specific notification.

**Response:**
```json
{
  "success": true,
  "message": "Notification deleted"
}
```

### Notification Types

| Type | Trigger | Use Case |
|------|---------|----------|
| `review_feedback` | When a moderator reviews a contribution | User feedback on submissions |
| `contribution_approved` | When a contribution is accepted | Milestone notification |
| `contribution_rejected` | When a contribution is rejected | User needs to revise |
| `comment_reply` | When someone replies to user's comment | Discussion engagement |
| `badge_earned` | When user earns a badge | Gamification/milestone |

### Using the Notification Service

```typescript
import { NotificationService } from "@/lib/notification-service"

// Create a notification
await NotificationService.create(
  userId,
  "review_feedback",
  "Contribution Approved!",
  "Your contribution has been accepted",
  {
    relatedId: wordId,
    relatedType: "word",
    data: { status: "approved" }
  }
)

// Get user's notifications
const { notifications, total, unreadCount } = await NotificationService.getUserNotifications(userId)

// Mark as read
await NotificationService.markAsRead(notificationId)

// Notify about review
await NotificationService.notifyReviewFeedback(
  userId,
  wordTitle,
  "approved",
  feedbackMessage,
  wordId
)

// Notify about badge earned
await NotificationService.notifyBadgeEarned(
  userId,
  "Expert Contributor",
  "You've made 50 verified contributions!"
)
```

## 2. Review Feedback System

### ReviewFeedback Model

**Fields:**
- `wordId` - Reference to the word being reviewed
- `submissionId` - Reference to the user's submission
- `reviewerId` - ID of the moderator providing feedback
- `status` - One of: pending, approved, rejected, needs_revision
- `feedback` - Detailed feedback text
- `categories` - Structured ratings (1-5):
  - `accuracy` - Is the translation accurate?
  - `completeness` - Does it have all necessary fields?
  - `culturalContext` - Is cultural context included?
  - `sourcing` - Are sources properly cited?
- `suggestions` - Array of improvement suggestions
- `requiredRevisions` - Array of mandatory changes
- `revisionDeadline` - When revisions must be completed

### API Route for Reviews

**POST `/api/words/[wordId]/reviews`** (Admin only)
```json
{
  "feedback": "Great contribution!",
  "categories": {
    "accuracy": 5,
    "completeness": 4,
    "culturalContext": 5,
    "sourcing": 4
  },
  "suggestions": ["Consider adding more examples"],
  "status": "approved"
}
```

**GET `/api/words/[wordId]/reviews`**
Fetch all reviews for a word.

### Review Workflow

1. User submits a word contribution
2. Moderator reviews and provides structured feedback
3. System creates `ReviewFeedback` document
4. System sends notification to user
5. If `needs_revision`, user has until `revisionDeadline` to submit updated version
6. Process repeats until `approved` or `rejected`

## 3. Reputation & Badges System

### Reputation Tiers

Users earn reputation points based on contributions:

| Action | Points |
|--------|--------|
| Word contribution approved | +10 |
| High-quality translation | +5 |
| Useful comment | +2 |
| Helpful review feedback | +5 |
| Comment flagged as spam | -5 |

### Badge System

**Planned Badges:**

| Badge | Requirement | Description |
|-------|-------------|-------------|
| First Contributor | 1 approved word | Welcome to the community |
| Expert Contributor | 50 approved words | Trusted contributor |
| Cultural Keeper | 100 approved words with cultural notes | Deep cultural knowledge |
| Community Helper | 25 helpful comment reactions | Active community member |
| Reviewer | 10 high-quality reviews | Trusted moderator |
| Founder | Team member status | Project founder |
| Verified Speaker | Native speaker verification | Authentic language expertise |

### Badge Display

Badges appear in:
- User profiles (`components/profile/user-profile.tsx`)
- Comment sections next to username
- Leaderboard highlights
- Contribution cards

**Example implementation:**
```jsx
<div className="flex items-center gap-2">
  <Avatar>
    <AvatarImage src={user.image} />
  </Avatar>
  <div>
    <div className="font-medium">{user.name}</div>
    <div className="flex gap-1">
      {user.badges?.map(badge => (
        <BadgeIcon key={badge} badge={badge} title={badgeDescriptions[badge]} />
      ))}
    </div>
  </div>
</div>
```

## 4. Comment Threading (Replies)

### Enhanced Comment Model

Update the Comment model to support replies:

```typescript
interface Comment {
  _id: string
  wordId: string
  userId: ObjectId
  content: string
  parentCommentId?: ObjectId  // For replies
  replyCount: number
  upvotes: ObjectId[]
  downvotes: ObjectId[]
  isDeleted: boolean
  createdAt: Date
  updatedAt: Date
}
```

### Comment Threading Implementation

#### API Routes

**GET `/api/words/[wordId]/comments`**
```json
{
  "success": true,
  "data": [
    {
      "_id": "comment1",
      "content": "Great word!",
      "userId": { "name": "User A" },
      "replyCount": 2,
      "upvotes": [],
      "replies": [
        {
          "_id": "reply1",
          "content": "I agree!",
          "userId": { "name": "User B" },
          "upvotes": 1,
          "parentCommentId": "comment1"
        }
      ],
      "createdAt": "2026-04-08T10:00:00Z"
    }
  ]
}
```

**POST `/api/words/[wordId]/comments/[commentId]/replies`**
```json
{
  "content": "I agree with your comment!",
  "parentCommentId": "comment1"
}
```

**PUT `/api/comments/[commentId]/vote`**
```json
{
  "type": "upvote" | "downvote"
}
```

**DELETE `/api/comments/[commentId]`**
Soft-delete a comment (mark as deleted but keep for threading context).

### UI Components

**CommentThread Component**
```jsx
<CommentThread
  comment={comment}
  wordId={wordId}
  onReplySubmit={handleReplySubmit}
  onVote={handleVote}
/>
```

**ReplyForm Component**
```jsx
<ReplyForm
  parentCommentId={parentCommentId}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
/>
```

## 5. Integration Points

### When to Send Notifications

#### Contribution Workflow
```typescript
// After word is approved by moderator
await NotificationService.notifyReviewFeedback(
  submitter.id,
  word.english,
  "approved",
  "Your contribution meets all quality standards",
  word._id
)

// Award badge if applicable
if (approvedCount === 50) {
  await NotificationService.notifyBadgeEarned(
    submitter.id,
    "Expert Contributor",
    "You've reached 50 approved contributions!"
  )
}
```

#### Comment Replies
```typescript
// When someone replies to a comment
const originalCommenter = await User.findById(comment.userId)
await NotificationService.notifyCommentReply(
  originalCommenter._id,
  replier.name,
  word.english,
  reply._id
)
```

### Trigger Points in Existing Code

1. **Word Approval** - `app/api/words/[wordId]/approve`
   - Send `contribution_approved` notification
   - Update user reputation
   - Check for badge achievements

2. **Word Rejection** - `app/api/words/[wordId]/reject`
   - Send `review_feedback` notification with rejection reason
   - Store feedback in `ReviewFeedback` model

3. **Comment Submission** - `app/api/words/[wordId]/comments`
   - If replying to comment, send notification to original commenter
   - Store `parentCommentId` for threading

## 6. Testing Notifications

### Local Development

Test with this API call:
```bash
# Get notifications
curl http://localhost:3000/api/notifications \
  -H "Authorization: Bearer YOUR_SESSION_TOKEN"

# Mark all as read
curl -X PUT http://localhost:3000/api/notifications \
  -H "Authorization: Bearer YOUR_SESSION_TOKEN"

# Mark specific as read
curl -X PUT http://localhost:3000/api/notifications/NOTIFICATION_ID \
  -H "Authorization: Bearer YOUR_SESSION_TOKEN"
```

### Database Verification

```javascript
// Check notifications were created
db.notifications.find({ userId: ObjectId("USER_ID") }).pretty()

// Check review feedback
db.reviewfeedbacks.find({ status: "approved" }).pretty()

// Count unread notifications
db.notifications.countDocuments({ userId: ObjectId("USER_ID"), isRead: false })
```

## 7. Performance Considerations

### Indexing
All models have proper indexes:
- `Notification`: `{ userId: 1, isRead: 1, createdAt: -1 }`
- `ReviewFeedback`: `{ wordId: 1, status: 1, createdAt: -1 }`

### Pagination
- Default limit: 20 notifications per request
- Use `skip` parameter for pagination
- Frontend should implement infinite scroll or pagination UI

### Caching
Consider adding Redis caching for:
- User's unread notification count
- Recent notifications (24 hours)
- Badge list per user

```typescript
// Cache unread count
const unreadKey = `notifications:unread:${userId}`
const cached = await redis.get(unreadKey)
if (!cached) {
  const count = await Notification.countDocuments({ userId, isRead: false })
  await redis.setex(unreadKey, 3600, count) // Cache for 1 hour
}
```

## 8. Future Enhancements

1. **Email Notifications** - Send email summaries of important notifications
2. **Push Notifications** - Browser push notifications for real-time alerts
3. **Notification Preferences** - Let users configure which notifications they receive
4. **Notification Grouping** - Group similar notifications (e.g., "5 new reviews")
5. **Notification Search** - Allow users to search notification history
6. **Notification Analytics** - Track notification engagement rates

## 9. Implementation Checklist

- [x] Create `Notification` model
- [x] Create `ReviewFeedback` model
- [x] Implement `NotificationService`
- [x] Create notification API routes
- [ ] Create notification UI component
- [ ] Implement notification bell icon in header
- [ ] Add notification preferences page
- [ ] Integrate notifications into review workflow
- [ ] Integrate notifications into comment system
- [ ] Create badge display components
- [ ] Implement reputation tracking
- [ ] Add notification tests
- [ ] Performance optimization & caching
- [ ] Documentation for contributors

