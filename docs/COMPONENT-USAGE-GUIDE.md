# Component Usage Guide

## Quick Reference for New UI Components

### ShareArticle Component
**File:** `/components/share-article.tsx`

Share content across social media platforms with one click.

```tsx
import { ShareArticle } from "@/components/share-article"

// Basic usage with label
<ShareArticle 
  title="Getting Started with Balti"
  url="https://openbalti.com/blog/getting-started"
/>

// Icon only (for compact spaces)
<ShareArticle
  title="Word: Balti"
  url="https://openbalti.com/words/balti"
  variant="outline"
  showLabel={false}
/>

// With description and custom size
<ShareArticle
  title="Learn Balti Language"
  url="https://openbalti.com/learning"
  description="Join thousands learning Balti language"
  size="lg"
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | Content to share |
| `url` | string | required | URL to share |
| `description` | string | optional | Additional context |
| `variant` | string | "outline" | Button variant (default, outline, ghost) |
| `size` | string | "default" | Button size (default, sm, lg) |
| `showLabel` | boolean | true | Show "Share" text or icon only |

**Supported Platforms:**
- Twitter
- Facebook
- LinkedIn
- Email
- WhatsApp
- Copy to clipboard (fallback)

---

### BlogArticleLayout Component
**File:** `/components/blog-article-layout.tsx`

Professional blog post template with author info and sharing.

```tsx
import { BlogArticleLayout } from "@/components/blog-article-layout"

export default function BlogPost() {
  return (
    <BlogArticleLayout
      title="Why Balti Language Matters"
      excerpt="Discover why preserving the Balti language is essential"
      date="January 15, 2025"
      readTime="8 min read"
      category="Culture"
      author={{
        name: "Dr. Fatima Khan",
        role: "Linguist & Researcher",
        image: "/avatars/fatima.jpg",
        bio: "Dr. Khan specializes in endangered Tibetic languages with 15 years of research.",
        link: "/authors/fatima-khan"
      }}
      relatedArticles={[
        {
          slug: "balti-dialects-explained",
          title: "Understanding Balti Dialects",
          category: "Linguistics"
        }
      ]}
    >
      {/* Your article content here */}
      <h2>Main Points</h2>
      <p>Content goes here...</p>
    </BlogArticleLayout>
  )
}
```

**Features:**
- Auto-generated breadcrumbs
- Author profile card
- Automatic share buttons
- Related articles section
- Professional typography
- Dark mode support

---

### WordCard Component
**File:** `/components/word-card.tsx`

Interactive card displaying a single dictionary word.

```tsx
import { WordCard } from "@/components/word-card"

<WordCard
  word={{
    _id: "123",
    english: "hello",
    balti: "ايلّو",
    pronunciation: "eye-loo",
    definition: "A greeting expression",
    difficultyLevel: "Beginner",
    categories: ["Greetings", "Common"],
    createdBy: {
      name: "Ali Hassan",
      image: "/avatars/ali.jpg"
    }
  }}
  isFavorite={false}
  onFavoriteToggle={(isFav) => console.log("Favorite toggled:", isFav)}
  onShare={() => console.log("Shared!")}
/>
```

**Word Object Structure:**
```tsx
interface IWord {
  _id: string
  english: string
  balti: string
  pronunciation?: string
  definition?: string
  difficultyLevel: "Beginner" | "Intermediate" | "Advanced"
  categories?: string[]
  createdBy: {
    name: string
    image?: string
  }
}
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `word` | IWord | required | Word data object |
| `isFavorite` | boolean | false | Whether word is favorited |
| `onFavoriteToggle` | function | optional | Callback when favorite toggled |
| `onShare` | function | optional | Callback when shared |

---

### WordsGrid Component
**File:** `/components/words-grid.tsx`

Grid layout for displaying multiple word cards.

```tsx
import { WordsGrid } from "@/components/words-grid"

<WordsGrid
  words={wordsList}
  isLoading={loading}
  onWordClick={(word) => {
    router.push(`/words/${word.english}`)
  }}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `words` | IWord[] | required | Array of words to display |
| `isLoading` | boolean | false | Show loading skeleton |
| `onWordClick` | function | optional | Click handler for word cards |

**States:**
- **Loading:** Shows 6 skeleton cards
- **Empty:** Shows friendly message
- **Loaded:** Displays word cards in responsive grid

---

## Integration Examples

### In a Blog Post Page
```tsx
import { BlogArticleLayout } from "@/components/blog-article-layout"

export default function LearningBalktiPage() {
  return (
    <BlogArticleLayout
      title="Learning Balti with Music"
      excerpt="Use traditional songs to master the language"
      date="January 10, 2025"
      readTime="7 min read"
      category="Learning"
      author={{
        name: "Aisha Siddiqui",
        role: "Music Educator",
        image: "/avatars/aisha.jpg",
        bio: "Aisha combines music education with language learning.",
        link: "/authors/aisha-siddiqui"
      }}
    >
      <h2>Traditional Balti Folk Songs</h2>
      <p>Music is one of the most effective ways to learn a new language...</p>
      
      <h2>Learning Method</h2>
      <p>Follow these steps to learn Balti through music...</p>
    </BlogArticleLayout>
  )
}
```

### In Dictionary Page
```tsx
import { WordsGrid } from "@/components/words-grid"
import { WordCard } from "@/components/word-card"

export default function DictionaryPage() {
  const [words, setWords] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <div>
      <h1>Balti Dictionary</h1>
      <WordsGrid
        words={words}
        isLoading={loading}
        onWordClick={(word) => {
          // Navigate to word detail
        }}
      />
    </div>
  )
}
```

### In Word Detail Page
```tsx
import { ShareArticle } from "@/components/share-article"

export default function WordDetailPage({ word }) {
  return (
    <div className="flex justify-between items-center">
      <h1>{word.english}</h1>
      <ShareArticle
        title={`${word.english} - ${word.balti}`}
        url={currentUrl}
        description={word.definition}
        showLabel={false}
      />
    </div>
  )
}
```

---

## Styling & Customization

All components use Tailwind CSS and can be customized through:

1. **Variant System:** Use `variant` prop for different styles
2. **Size Options:** Use `size` prop for responsive sizing
3. **CSS Classes:** Override with custom Tailwind classes
4. **Theme Integration:** Components respect dark mode automatically

---

## Accessibility Features

All components include:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Focus management
- Screen reader optimization

---

## Performance Tips

1. **Lazy Load Components:** Import only when needed
2. **Memoize Word Data:** Use React.memo for word lists
3. **Debounce Shares:** Prevent rapid share attempts
4. **Cache API Responses:** Store community stats responses
5. **Image Optimization:** Use Next.js Image component for avatars

---

## Common Issues & Solutions

**Issue:** Share button not working on mobile
**Solution:** Ensure you're handling both Web Share API and clipboard fallback

**Issue:** Author bio showing raw HTML
**Solution:** Sanitize author bio with `dangerouslySetInnerHTML` or use a markdown parser

**Issue:** Word card not responsive
**Solution:** Ensure parent container has proper width constraints

**Issue:** Images not loading in author avatars
**Solution:** Use fallback `AvatarFallback` component with initials
