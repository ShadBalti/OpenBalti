# Quick Start - Feature Improvements

## New Components to Use

### 1. Profile Stats Dashboard
Perfect for user profile pages showing contributions and achievements.

```tsx
import ProfileStatsDashboard from "@/components/profile/profile-stats-dashboard"

<ProfileStatsDashboard user={userData} />
```
**Shows:** Words added/edited/reviewed, achievement progress, contribution breakdown

---

### 2. Notification Center
Add to header, sidebar, or dedicated notifications page.

```tsx
// Compact (5 notifications, for header)
import NotificationCenter from "@/components/notification-center"
<NotificationCenter compact={true} limit={5} />

// Full (all notifications, for dedicated page)
<NotificationCenter compact={false} />
```
**Features:** Comment alerts, badge achievements, feedback, approvals, mentions

---

### 3. Moderation Queue
For moderators to review pending submissions.

```tsx
import ModerationQueue from "@/components/moderation-queue"
<ModerationQueue limit={10} statusFilter="pending" />
```
**Requires:** User role must be "moderator" or "admin"

---

### 4. Badge Calculator
Calculate earned badges for any user automatically.

```tsx
import { calculateUserBadges, calculateBadgeProgress } from "@/lib/badge-calculator"

const badges = calculateUserBadges(user)
const progress = calculateBadgeProgress(user)

// badges contains: [{ id, name, description, icon, type, unlockedAt }]
// progress contains: [{ badge, progress, maxProgress, isUnlocked }]
```

---

## Enhanced Components

### Word Detail Component
Now supports tabbed interface and full details mode:

```tsx
<WordDetail 
  word={wordData} 
  showFullDetails={true}  // Enable expanded view
  onClose={() => {}}
/>
```

### Word Form Component
Now shows form completion percentage:

```tsx
<WordForm
  initialData={null}
  onSubmit={handleSubmit}
  isSubmitting={isLoading}
/>
```
Form automatically calculates and displays completion status.

### Word of Day Component
Enhanced styling with better presentation:

```tsx
<WordOfDay compact={false} />
```

### User Profile Component
Now automatically calculates and displays badges:

```tsx
<UserProfile userId={userId} />
```
Badges are automatically populated from contribution stats.

---

## API Endpoints to Implement

### Notifications API
```
GET    /api/notifications?limit=20
GET    /api/notifications/[id]
PATCH  /api/notifications/[id]        # Mark as read
DELETE /api/notifications/[id]        # Delete
```

### Moderation API
```
GET    /api/moderation/queue?status=pending&limit=10
POST   /api/moderation/[id]/approve
POST   /api/moderation/[id]/reject
```

---

## Database Schema Extensions Needed

### Notifications Collection
```typescript
interface Notification {
  _id: ObjectId
  userId: ObjectId
  type: "comment" | "feedback" | "badge" | "review" | "mention"
  title: string
  description: string
  relatedTo?: string
  relatedId?: ObjectId
  isRead: boolean
  createdAt: Date
  actionUrl?: string
}
```

### Moderation Queue (Submissions)
```typescript
interface Submission {
  _id: ObjectId
  type: "word_add" | "word_edit" | "comment" | "feedback"
  content: any
  submittedBy: ObjectId
  status: "pending" | "approved" | "rejected"
  createdAt: Date
  reviewedBy?: ObjectId
  reviewedAt?: Date
  feedback?: string
  flagCount?: number
}
```

---

## CSS Classes Used

All components use standard Tailwind CSS with these utilities:
- `bg-gradient-to-br` - Gradient backgrounds
- `hover:shadow-lg` - Hover effects
- `border-primary/20` - Themed borders
- `gap-*` - Spacing between elements
- `rounded-lg` - Border radius
- `text-sm/xs` - Text sizing
- `animate-spin` - Loading states

No custom CSS required - all styled with Tailwind!

---

## Icon Library (lucide-react)

All components use these icons:
- `Bell` - Notifications
- `Award` - Achievements/Badges
- `CheckCircle2` - Approve/Success
- `XCircle` - Reject/Error
- `AlertCircle` - Warning/Moderation
- `Trash2` - Delete
- `TrendingUp` - Growth
- `BarChart3` - Analytics
- `Target` - Progress/Goals

---

## Form Validation Example

Word Form now tracks completion:
- **Required fields** (2): Balti word, English translation
- **Recommended fields** (4): Phonetic, dialect, usage notes, etymology
- **Completion %**: Calculated in real-time
- **Min to submit**: All required fields must be filled

---

## Accessibility Features

All new components include:
- ✓ ARIA labels and descriptions
- ✓ Keyboard navigation
- ✓ Screen reader support
- ✓ Color-independent status indicators
- ✓ Proper semantic HTML
- ✓ Focus management

---

## Testing Checklist

When implementing these features:

- [ ] Badge calculation works for users with 0, 1, 10, 50, 100 contributions
- [ ] Notifications appear in real-time
- [ ] Moderation queue correctly filters by status
- [ ] Form completion percentage updates as you type
- [ ] Word detail tabs switch correctly
- [ ] Profile stats display for users with no contributions
- [ ] All components render on mobile
- [ ] Keyboard navigation works
- [ ] No console errors

---

## Common Issues & Solutions

**Q: Badges not showing?**
A: Ensure `calculateUserBadges()` is called when fetching user data

**Q: Notifications not loading?**
A: Check `/api/notifications` endpoint is implemented and returns `{ success: true, data: [] }`

**Q: Moderation queue empty?**
A: Verify user role is "moderator" or "admin"

**Q: Form completion stuck at 0%?**
A: Clear browser cache and refresh - state updates are real-time

---

## Performance Tips

1. **Lazy load notifications**: Only fetch when user opens notification center
2. **Cache badge progress**: Calculate once per session
3. **Paginate moderation queue**: Use limit parameter
4. **Compress icons**: Use SVG-optimized lucide-react icons
5. **Defer non-critical stats**: Load detailed profile stats after initial page load
