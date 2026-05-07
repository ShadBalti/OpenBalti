# Special Characters in Words - Issue Analysis & Solution

## Executive Summary

Fixed critical issues preventing words with spaces and special characters from being displayed or edited. The solution involved two key changes:

1. **URL Encoding Strategy**: Replaced character-removal with URL encoding (`encodeURIComponent`/`decodeURIComponent`)
2. **Missing Search Endpoint**: Created the missing `/api/words/search` endpoint used by the edit page

---

## Root Cause Analysis

### Issue 1: 404 Error on Words with Special Characters

**Problem**: Words like "Don't", "C/C++", "To Be", or "and/or" returned 404 errors when accessed.

**Root Cause - Character Removal in `wordToSlug` Function**:

```typescript
// OLD (BROKEN)
export function wordToSlug(word: string): string {
  return word
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")  // "Don't" → "don-t"
    .replace(/[^\w-]/g, "") // REMOVES apostrophes, slashes, etc!
    .replace(/-+/g, "-")
}
```

**Why This Failed**:
- The regex `/[^\w-]/g` matches any character that is NOT a word character or hyphen
- Word characters are: `[a-zA-Z0-9_]` only
- This stripped: apostrophes, commas, slashes, parentheses, etc.
- Example: "Don't" → "don-t" (apostrophe removed)
- Later lookup: "don-t" ≠ "don't" (original word)

**Impact Chain**:
1. User adds word "Don't" to dictionary
2. System creates slug: `wordToSlug("Don't")` → "dont"
3. Route created: `/words/dont`
4. User tries to access `/words/don%27t` (URL-encoded apostrophe)
5. Next.js routing matches different slug
6. `getWordByEnglish()` searches for "don t" instead of "don't"
7. Database query fails to find exact match
8. 404 error returned

---

### Issue 2: "Word not found" Error on Edit Page

**Problem**: Edit page throws "Word not found: the word you are trying to edit doesn't exist" error.

**Root Cause - Missing Search Endpoint**:

```typescript
// In app/words/[slug]/edit/page.tsx
const fetchWord = async () => {
  const searchWord = slugToWord(slug)
  // THIS ENDPOINT DIDN'T EXIST!
  const response = await fetch(`/api/words/search?q=${encodeURIComponent(searchWord)}`)
  ...
}
```

**Why This Failed**:
1. No route handler existed at `/api/words/search`
2. Endpoint returned 404
3. Edit page couldn't fetch the word data
4. User saw "Word not found" error

**Contributing Factor**:
- Even with the slug encoding fixed, the missing endpoint would still prevent edit functionality

---

## Solution Architecture

### Strategy 1: URL Encoding Instead of Character Removal

**New Implementation**:

```typescript
// NEW (WORKING)
export function wordToSlug(word: string): string {
  return encodeURIComponent(word.toLowerCase().trim())
}

export function slugToWord(slug: string): string {
  return decodeURIComponent(slug)
}
```

**Why This Works**:
- `encodeURIComponent()` is the browser/Node.js standard for URL encoding
- Preserves all special characters as percent-encoded sequences
- Reversible: encoding and decoding are perfect inverses
- Safe for URLs: produces valid, RFC 3986 compliant URLs

**Example Transformations**:
```
"Don't"        →  "don%27t"      (apostrophe as %27)
"C/C++"        →  "c%2fc%2b%2b"  (slash as %2F, plus as %2B)
"To Be"        →  "to%20be"      (space as %20)
"and/or"       →  "and%2for"     (slash preserved)
"1, 2, 3"      →  "1%2C%202%2C%203" (comma as %2C)
```

**Data Flow**:
```
User Word → (lowercase + trim) → URL encode → Browser URL path
Browser URL path → URL decode → Original word → Database query
```

### Strategy 2: Create Missing Search Endpoint

**New File**: `/app/api/words/search/route.ts`

```typescript
export async function GET(req: NextRequest) {
  const q = url.searchParams.get("q") // Get 'q' parameter
  const escapedQuery = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") // Escape regex chars
  
  // First try exact match (case-insensitive)
  const word = await Word.findOne({
    english: { $regex: new RegExp(`^${escapedQuery}$`, "i") }
  })
  
  // Fall back to partial matches if needed
  if (!word) {
    return await Word.find({
      english: { $regex: escapedQuery, $options: "i" }
    }).limit(10)
  }
}
```

**Why This Matters**:
- Edit page can now successfully fetch the word to edit
- Regex injection prevention: escapes special regex characters
- Two-tier search: exact match first, then partial matches
- Prevents database errors from special characters

---

## Technical Details

### URL Encoding in Next.js

**Key Points**:
1. **Next.js Automatic Decoding**: URL parameters in dynamic routes are automatically decoded
   ```typescript
   // URL: /words/don%27t
   // Automatically decoded to: params.slug = "don%27t" (literal string)
   // Then passed to slugToWord() which decodes: "don't"
   ```

2. **Safe for Database**: The decoded word is used directly in MongoDB queries
   ```typescript
   const searchWord = slugToWord("don%27t") // → "don't"
   const query = { english: { $regex: `^${escaped("don't")}$`, "i" } }
   // Matches database entries exactly
   ```

3. **SEO Friendly**: URL encoding is standard and doesn't harm SEO
   - Google understands URL-encoded characters
   - Readable in encoded form: `don%27t` clearly relates to the word

### Regex Escaping in Database Queries

**Critical for Special Characters**:
```typescript
// User searches for "C++"
const userInput = "C++"
const escaped = userInput.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
// Result: "C\\+\\+" - escapes the plus signs

// Now safe for regex without unintended pattern matching
const query = { english: { $regex: `^${escaped}$`, "i" } }
// Matches exactly "C++" not "C" (one or more times)
```

---

## Files Changed

### 1. `/lib/utils.ts` (MODIFIED)
**Changes**:
- Replaced `wordToSlug()` to use `encodeURIComponent()`
- Replaced `slugToWord()` to use `decodeURIComponent()`
- Simplified from 6 lines to 1 line per function

**Impact**:
- Affects: Word detail pages, edit pages, search results, static generation
- Benefits: All routes automatically support special characters

### 2. `/app/api/words/search/route.ts` (NEW FILE)
**Purpose**: Simple word search endpoint for edit page

**Endpoints**:
- `GET /api/words/search?q=<query>` → Returns matching words

**Query Logic**:
1. Exact match (case-insensitive) - preferred
2. Partial matches (up to 10 results) - fallback
3. Regex injection protection via character escaping

---

## Testing Strategy

### Test Cases for Special Characters

**1. Spaces**:
- Add word: "To Be"
- Access: `/words/to%20be` → Should display "To Be"
- Edit: Click edit → Should load word correctly

**2. Apostrophes**:
- Add word: "Don't"
- Access: `/words/don%27t` → Should display "Don't"
- Edit: Click edit → Should find word

**3. Slashes**:
- Add word: "C/C++"
- Access: `/words/c%2fc%2b%2b` → Should display "C/C++"
- Edit: Click edit → Should work

**4. Commas**:
- Add word: "1, 2, 3"
- Access: `/words/1%2C%202%2C%203` → Should display correctly
- Edit: Click edit → Should work

**5. Mixed Special Characters**:
- Add word: "can't/shouldn't"
- Access: `/words/can%27t%2fshouldn%27t` → Should work
- Edit: Click edit → Should work

### Expected Behavior After Fix

✅ Words with spaces are accessible without 404  
✅ Words with apostrophes work correctly  
✅ Words with slashes display properly  
✅ Edit page can find all words with special characters  
✅ Static generation includes all word types  
✅ Search endpoint returns exact matches first  

---

## Database Impact

**No schema changes required**: The encoding happens at the URL/slug layer, not the database layer.

```
Database storage: Unchanged
├─ balti: "ਅ" (original Balti)
├─ english: "Don't" (original English)
└─ Other fields: Unchanged

URL Layer: Encoded/Decoded
├─ URL slug: "don%27t" (encoded)
├─ Decoded: "don't" (passed to query)
└─ Database query: Searches for exact match "Don't"
```

---

## Backwards Compatibility

**Migration Path**:
- Old URLs (with removed characters) will break: `/words/dont` → 404
- New URLs use encoding: `/words/don%27t` → works
- Recommendation: Create redirect from old slugs to new encoded slugs for existing links

**Static Generation**:
The `generateStaticParams()` function automatically uses the new `wordToSlug()`:
```typescript
return words.map((word) => ({
  slug: wordToSlug(word.english), // Uses new encoding
}))
```
Re-running generation will create correct encoded routes.

---

## Performance Considerations

**Minimal Impact**:
- `encodeURIComponent()` and `decodeURIComponent()` are native JavaScript functions
- O(n) complexity where n = word length (typically 1-50 characters)
- No database query overhead increase
- Caching unaffected by encoding strategy

**Search Performance**:
- New search endpoint uses same MongoDB regex queries
- Exact match optimization: stops on first result
- Fallback to partial matches only when needed

---

## Security Implications

**SQL/NoSQL Injection Prevention**:
1. Input: URL slug (user-controlled)
2. Process: `decodeURIComponent()` to get original word
3. Sanitize: Escape regex special characters before MongoDB query
4. Query: Safe regex pattern constructed with escaped input

```typescript
const userInput = decodeURIComponent(slug)
const escaped = userInput.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
const query = { english: { $regex: `^${escaped}$`, "i" } }
// Injection-safe: special characters are escaped
```

**XSS Prevention**:
- URL encoding doesn't introduce XSS vectors
- React automatically escapes output
- Database content displayed as plain text

---

## Error Handling

**Scenarios Covered**:

1. **Invalid URL encoding**: Browser handles before reaching server
2. **Word not found**: Returns 404 from `/words/[slug]/page.tsx`
3. **Edit page - word not found**: Returns error toast to user
4. **Search endpoint error**: Returns error response with 500 status
5. **Database connection error**: Caught and reported to user

---

## Future Improvements

1. **Redirect old slugs**: Create middleware to redirect `/words/dont` → `/words/don%27t`
2. **URL slug preview**: Show users what the slug will be before creating a word
3. **Analytics**: Track which special characters appear most in words
4. **Display optimization**: Use word-break CSS for very long encoded URLs
5. **Search indexing**: Ensure encoded URLs are indexed by search engines

---

## Summary

This fix resolves the fundamental issue of treating special characters as "invalid" instead of "encodable". By using URL encoding—the industry standard for representing special characters in URLs—the application now properly supports:

- ✅ Spaces in compound words
- ✅ Apostrophes in contractions
- ✅ Slashes in technical terms
- ✅ Commas in lists
- ✅ Any Unicode character

The solution is simple, standard-compliant, backwards-compatible with database operations, and requires no schema changes.
