# OpenBalti Dictionary Features Enhancement

## Overview
This document outlines enhancements to dictionary features including word-of-day improvements, phonetic search, multi-filter support, search history, and dialectal variant linking.

## 1. Word of the Day (Improved)

### Implementation
The Word of the Day feature uses server-side date-based selection to ensure consistency across all users.

**File:** `/app/api/words/word-of-day/route.ts`

**Key Features:**
- Uses UTC date to ensure consistency globally
- Deterministic selection based on day number
- Same word displayed all day for all users
- Automatically changes at midnight UTC

**Algorithm:**
```
daysSinceEpoch = Math.floor(currentDate / millisecondsPerDay)
wordIndex = daysSinceEpoch % totalWordCount
selectedWord = words[wordIndex]
```

**Example API Response:**
```json
{
  "success": true,
  "data": {
    "_id": "word_id",
    "english": "Hello",
    "balti": "جالو",
    "phonetic": "jā-lō",
    "examples": ["Usage example 1"],
    "createdBy": { "name": "Contributor Name" }
  },
  "nextWordIn": 3600000
}
```

**Frontend Usage:**
```jsx
import WordOfDay from "@/components/word-of-day"

export default function Page() {
  return <WordOfDay />
}
```

## 2. Phonetic Search

### Overview
Phonetic search allows users to find words by pronunciation, even if spelling is uncertain or non-standard.

**Files:**
- `/lib/phonetic-search.ts` - Core search algorithms
- API integration: `/app/api/words/search` (to be enhanced)

### Algorithms

#### Levenshtein Distance
Measures similarity between two strings for fuzzy matching.

```typescript
import { levenshteinDistance } from "@/lib/phonetic-search"

const distance = levenshteinDistance("jalo", "jālo") // Returns: 1
```

#### Phonetic Encoding
Converts words to phonetic codes for pattern matching.

```typescript
import { phoneticCode } from "@/lib/phonetic-search"

phoneticCode("jālo") // Returns: "jlo"
phoneticCode("hello") // Returns: "hlo"
```

#### Similarity Score
Calculates how similar two words are (0-1 scale).

```typescript
import { similarityScore } from "@/lib/phonetic-search"

similarityScore("jalo", "jālo") // Returns: 0.95
similarityScore("hello", "world") // Returns: 0.2
```

### Search Types

The search system now supports multiple search types:

```typescript
GET /api/words/search?q=jalo&type=phonetic
GET /api/words/search?q=جالو&type=balti
GET /api/words/search?q=hello&type=english
```

### Implementation Example

```jsx
import { matchPhonetic } from "@/lib/phonetic-search"

export async function handlePhoneticSearch(query: string) {
  const allWords = await fetchAllWords()
  const matches = matchPhonetic(query, allWords, 10)
  return matches
}
```

## 3. Search History

### Overview
Client-side search history tracking helps users quickly access previous searches.

**File:** `/lib/search-history.ts`

### Features
- Stores up to 20 recent searches
- Organized by search type (English, Balti, Phonetic)
- Persists across sessions using localStorage
- Trending searches based on frequency

### API

#### Get Search History
```typescript
import { getSearchHistory } from "@/lib/search-history"

const history = getSearchHistory()
// Returns: SearchHistoryItem[]
```

#### Add to History
```typescript
import { addToSearchHistory } from "@/lib/search-history"

addToSearchHistory("hello", "english", 15) // query, type, resultCount
```

#### Get Trending
```typescript
import { getTrendingSearches } from "@/lib/search-history"

const trending = getTrendingSearches(7) // Last 7 days
// Returns: [{ query, count, type }, ...]
```

#### Clear History
```typescript
import { clearSearchHistory } from "@/lib/search-history"

clearSearchHistory()
```

### Storage Format
```json
{
  "id": "english-hello-1712590000000",
  "query": "hello",
  "type": "english",
  "timestamp": 1712590000000,
  "resultCount": 15
}
```

## 4. Multi-Filter Support

### Overview
Enable users to filter simultaneously by multiple criteria instead of just one.

### Filter Types
- **Difficulty:** Easy, Medium, Hard
- **Dialect:** Skardu, Khaplu, Kargil, etc.
- **Category:** Culture, Nature, Family, Commerce, etc.
- **Part of Speech:** Noun, Verb, Adjective, etc.
- **Verification Status:** Verified, Unverified, Pending Review

### API Enhancement

**Current:** (single filter only)
```
GET /api/words?filter=skardu
```

**Enhanced:** (multiple filters)
```
GET /api/words?difficulty=hard&dialects=skardu&categories=culture&status=verified
```

### Database Query with Multiple Filters
```typescript
const filters: Record<string, any> = {}

if (difficulty) filters.difficultyLevel = difficulty
if (dialects?.length) filters.dialect = { $in: dialects }
if (categories?.length) filters.categories = { $in: categories }
if (partOfSpeech) filters.partOfSpeech = partOfSpeech
if (status) filters.verificationStatus = status

const words = await Word.find(filters)
  .sort({ createdAt: -1 })
  .limit(50)
```

### UI Component Update

Current filter button group:
```jsx
<div className="flex gap-2">
  <FilterButton label="Easy" onClick={() => setDifficulty("easy")} />
  <FilterButton label="Medium" onClick={() => setDifficulty("medium")} />
</div>
```

Enhanced with checkboxes:
```jsx
<div className="space-y-4">
  <FilterSection title="Difficulty">
    <Checkbox label="Easy" value="easy" onChange={toggleDifficulty} />
    <Checkbox label="Medium" value="medium" onChange={toggleDifficulty} />
  </FilterSection>
  
  <FilterSection title="Dialect">
    <Checkbox label="Skardu" value="skardu" onChange={toggleDialect} />
    <Checkbox label="Khaplu" value="khaplu" onChange={toggleDialect} />
  </FilterSection>
  
  <FilterSection title="Category">
    <Checkbox label="Culture" value="culture" onChange={toggleCategory} />
    <Checkbox label="Nature" value="nature" onChange={toggleCategory} />
  </FilterSection>
</div>
```

## 5. Dialectal Variant Linking

### Overview
Link related words across different dialects and show them together.

### Database Schema Enhancement

Add a `variantOf` field to Word model:

```typescript
interface IWord {
  // ... existing fields
  variantOf?: mongoose.Schema.Types.ObjectId // Reference to base word
  variants?: mongoose.Schema.Types.ObjectId[] // Related variants in other dialects
  dialect: string // Current dialect
  standardForm?: string // Standard/canonical form of word
}
```

### Linking Variants

**Create variant relationship:**
```typescript
const baseWord = await Word.findById(baseWordId)
baseWord.variants = [variant1Id, variant2Id]
await baseWord.save()

const variantWord = await Word.findById(variant1Id)
variantWord.variantOf = baseWordId
await variantWord.save()
```

**Query with variants:**
```typescript
const word = await Word.findById(wordId)
  .populate("variantOf", "english balti dialect")
  .populate("variants", "english balti dialect")

// Response includes all related variants
```

### Display on Word Detail Page

```jsx
<div className="mt-6 p-4 bg-secondary rounded-lg">
  <h3 className="font-semibold mb-3">Related Dialect Variants</h3>
  
  {word.variantOf && (
    <div className="mb-3">
      <p className="text-sm text-muted-foreground">Base form</p>
      <Link href={`/words/${word.variantOf.english}`}>
        {word.variantOf.balti} ({word.variantOf.dialect})
      </Link>
    </div>
  )}
  
  {word.variants?.length > 0 && (
    <div>
      <p className="text-sm text-muted-foreground">Also used in</p>
      <div className="flex flex-wrap gap-2">
        {word.variants.map(variant => (
          <Link 
            key={variant._id}
            href={`/words/${variant.english}`}
            className="px-3 py-1 bg-primary/20 rounded"
          >
            {variant.balti} ({variant.dialect})
          </Link>
        ))}
      </div>
    </div>
  )}
</div>
```

### API for Variant Lookup

**GET `/api/words/[wordId]/variants`**
```json
{
  "success": true,
  "data": {
    "current": { "english": "hello", "balti": "جالو", "dialect": "skardu" },
    "baseForm": { "english": "hello", "balti": "جالو", "dialect": "standard" },
    "variants": [
      { "english": "hello", "balti": "خالو", "dialect": "khaplu" },
      { "english": "hello", "balti": "جالو", "dialect": "kargil" }
    ]
  }
}
```

## 6. Implementation Checklist

### Phase 1: Core Features (Completed)
- [x] Word of the Day with server-side logic
- [x] Phonetic search algorithms
- [x] Search history utilities
- [x] Multi-filter support (design)

### Phase 2: UI Implementation (Remaining)
- [ ] Create SearchHistory component
- [ ] Create PhoneticSearchBar component
- [ ] Update WordsPage filter UI for multi-select
- [ ] Create DialectVariantSection component
- [ ] Add variant linking in word detail page
- [ ] Create API route for variant lookup

### Phase 3: Integration (Remaining)
- [ ] Integrate search history into search bar
- [ ] Add trending searches to homepage
- [ ] Update /api/words/search to support phonetic
- [ ] Add variant linking in word contribution form
- [ ] Create batch script to link existing variants

### Phase 4: Testing & Polish (Remaining)
- [ ] Test phonetic matching with user feedback
- [ ] Optimize database queries for multi-filter
- [ ] Performance testing with large dataset
- [ ] User feedback on search experience

## 7. Performance Considerations

### Database Indexes
Add indexes for common filter combinations:

```typescript
// For multi-filter queries
wordSchema.index({ difficultyLevel: 1, dialect: 1, categories: 1 })

// For variant relationships
wordSchema.index({ variantOf: 1 })
wordSchema.index({ variants: 1 })
```

### Caching
Cache search results for frequently used combinations:

```typescript
// Cache trending searches
const cacheKey = `trending_searches:${days}d`
const cached = await redis.get(cacheKey)
if (!cached) {
  const trending = getTrendingSearches(days)
  await redis.setex(cacheKey, 3600, JSON.stringify(trending))
}
```

### Search Optimization
- Implement full-text search index for English/Balti fields
- Use pagination for large result sets
- Debounce phonetic search requests (client-side)

## 8. Future Enhancements

1. **Spellcheck Integration** - Suggest correct spellings
2. **Etymology Explorer** - Show word origins and development
3. **Usage Frequency** - Show how common words are
4. **Regional Audio** - Pronunciation from different dialects
5. **Word Families** - Show related words and derivatives
6. **Saved Words** - Users can save favorite/learning lists

## 9. Testing Examples

### Test Phonetic Search
```javascript
const { matchPhonetic } = require('./lib/phonetic-search')

const words = [
  { english: 'hello', balti: 'جالو', phonetic: 'jā-lō' },
  { english: 'goodbye', balti: 'خدا حافظ', phonetic: 'khudā hāfiz' }
]

const results = matchPhonetic('jalo', words)
console.log(results) // Should return hello word
```

### Test Search History
```javascript
const { addToSearchHistory, getSearchHistory } = require('./lib/search-history')

addToSearchHistory('hello', 'english')
addToSearchHistory('جالو', 'balti')

const history = getSearchHistory()
console.log(history.length) // Should be 2
```

