# Quick Start: New UI/UX Components

## 5-Minute Overview

### What's New?
1. **Share Component** - Let users share articles on social media
2. **Blog Layout** - Professional blog post template
3. **Word Cards** - Beautiful dictionary word display
4. **Real Data** - Live community statistics

---

## Getting Started

### 1. Add Share Button to Any Page
```tsx
import { ShareArticle } from "@/components/share-article"

// In your page:
<ShareArticle
  title="Your Article Title"
  url={window.location.href}
/>
```

✓ Done! Users can now share on Twitter, Facebook, LinkedIn, email, and WhatsApp.

---

### 2. Use Blog Post Template
```tsx
import { BlogArticleLayout } from "@/components/blog-article-layout"

export default function MyBlogPost() {
  return (
    <BlogArticleLayout
      title="Learning Balti"
      excerpt="A guide to learning Balti language"
      date="January 15, 2025"
      readTime="8 min read"
      category="Learning"
      author={{
        name: "Dr. Fatima",
        role: "Linguist",
        bio: "Expert in language preservation"
      }}
    >
      <h2>Getting Started</h2>
      <p>Your content here...</p>
    </BlogArticleLayout>
  )
}
```

✓ Done! You now have a professional blog post layout with author info and sharing.

---

### 3. Display Words as Cards
```tsx
import { WordCard } from "@/components/word-card"
import { WordsGrid } from "@/components/words-grid"

// Show single word:
<WordCard word={wordData} />

// Show multiple words:
<WordsGrid words={allWords} />
```

✓ Done! Your words now display in beautiful cards with quick actions.

---

### 4. Check Real Community Stats
The community stats are already live! Just verify in your browser:
```
GET /api/stats/community
```

You should see real data like:
```json
{
  "totalWords": 5342,
  "totalUsers": 245,
  "topContributors": [...]
}
```

---

## Common Patterns

### Pattern 1: Blog Post with Sharing
```tsx
<BlogArticleLayout {...props}>
  <p>Your article content...</p>
</BlogArticleLayout>
```

### Pattern 2: Word Dictionary
```tsx
<WordsGrid
  words={searchResults}
  onWordClick={(w) => router.push(`/words/${w._id}`)}
/>
```

### Pattern 3: Share Button Only
```tsx
<ShareArticle
  title={title}
  url={url}
  showLabel={false}  // Just icon
/>
```

---

## What Each Component Does

| Component | Purpose | File |
|-----------|---------|------|
| `ShareArticle` | Share on social media | `/components/share-article.tsx` |
| `BlogArticleLayout` | Professional blog template | `/components/blog-article-layout.tsx` |
| `WordCard` | Single word display | `/components/word-card.tsx` |
| `WordsGrid` | Grid of word cards | `/components/words-grid.tsx` |

---

## Real Data Now Available

The impact section now pulls REAL data:
- Total words in dictionary
- Total active contributors
- Total feedback & comments
- Top contributors list
- Most active users

To use it in your page:
```tsx
import CommunityStats from "@/components/community-stats"

<CommunityStats />  // Automatically fetches & displays real data
```

---

## Testing the Components

### Test Share Button
1. Click share button on any page
2. Try each social platform (Twitter, Facebook, LinkedIn, etc.)
3. Verify link is copied correctly

### Test Word Card
1. Browse to `/dictionary`
2. Should see beautiful word cards
3. Click "Save" to favorite (requires login)
4. Click "Share" to share the word

### Test Blog Layout
1. Visit any blog post
2. See professional layout with author info
3. Click share button at top and bottom
4. See related articles at bottom

---

## Next Steps

1. Update blog post pages to use `BlogArticleLayout`
2. Replace word list with `WordCard` components
3. Add analytics to track shares
4. Test on mobile devices
5. Gather user feedback

---

## Troubleshooting

**Q: Share button not working?**
A: Check browser console for errors. Some browsers need `https:` for Web Share API.

**Q: Word cards not showing?**
A: Verify words data structure has required fields (english, balti, etc.)

**Q: Community stats showing blank?**
A: Check `/api/stats/community` endpoint is working in your browser console.

---

## Questions?

See detailed documentation:
- `/docs/UI-UX-IMPROVEMENTS.md` - Full feature list
- `/docs/COMPONENT-USAGE-GUIDE.md` - Complete API reference
- `/docs/UI-UX-IMPLEMENTATION-SUMMARY.md` - Overview of changes

---

**That's it! You're ready to use the new components.** 🚀
