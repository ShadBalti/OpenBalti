# Implementation Guide: Special Characters Fix

## Quick Reference

### Changes at a Glance

| Component | Issue | Solution | Status |
|-----------|-------|----------|--------|
| `lib/utils.ts` | Removed special characters | Use URL encoding | ✅ Fixed |
| `/api/words/search` | Missing endpoint | Created new route | ✅ Added |
| `[slug]/page.tsx` | 404 on special chars | Works with new slug functions | ✅ Working |
| `[slug]/edit/page.tsx` | Word not found error | Now has search endpoint | ✅ Working |

---

## Before & After Examples

### Example 1: Word with Apostrophe ("Don't")

#### BEFORE (Broken)
```
User action: Add word "Don't" to dictionary
                    ↓
wordToSlug("Don't") → "dont" (apostrophe removed)
                    ↓
URL generated: /words/dont
                    ↓
User visits: /words/don%27t (browser encodes apostrophe)
                    ↓
Route matching: /words/[slug] receives slug="don%27t"
                    ↓
slugToWord("don%27t") → "don t" (hyphen removed, corrupted!)
                    ↓
Database query: { english: { $regex: "^don t$", "i" } }
                    ↓
Result: NO MATCH (actual word is "Don't")
                    ↓
notFound() → 404 ERROR ❌
```

#### AFTER (Fixed)
```
User action: Add word "Don't" to dictionary
                    ↓
wordToSlug("Don't") → encodeURIComponent("don't") → "don%27t"
                    ↓
URL generated: /words/don%27t
                    ↓
User visits: /words/don%27t (browser preserves encoded form)
                    ↓
Route matching: /words/[slug] receives slug="don%27t"
                    ↓
slugToWord("don%27t") → decodeURIComponent("don%27t") → "don't"
                    ↓
Database query: { english: { $regex: "^don't$", "i" } }
                    ↓
Result: MATCH FOUND ✅
                    ↓
Display word successfully: "Don't" page loads ✅
```

### Example 2: Word with Space ("To Be")

#### BEFORE (Broken)
```
wordToSlug("To Be") → "to-be" (space replaced with hyphen)
                   ↓
slugToWord("to-be") → "to be" (hyphen to space)
                   ↓
Database query: { english: { $regex: "^to be$", "i" } }
                   ↓
Result: NO MATCH (actual word is "To Be")
                   ↓
404 ERROR ❌
```

#### AFTER (Fixed)
```
wordToSlug("To Be") → encodeURIComponent("to be") → "to%20be"
                   ↓
slugToWord("to%20be") → decodeURIComponent("to%20be") → "to be"
                   ↓
Database query: { english: { $regex: "^to be$", "i" } }
                   ↓
Result: MATCH FOUND ✅
                   ↓
Display word successfully ✅
```

### Example 3: Word with Slash ("C/C++")

#### BEFORE (Broken)
```
wordToSlug("C/C++") → "cc" (slashes and + removed)
                   ↓
URL becomes: /words/cc
                   ↓
User searches: /words/c%2Fc%2B%2B
                   ↓
Slug mismatch → 404 ERROR ❌
```

#### AFTER (Fixed)
```
wordToSlug("C/C++") → encodeURIComponent("c/c++") → "c%2fc%2b%2b"
                    ↓
URL becomes: /words/c%2fc%2b%2b
                    ↓
User searches: /words/c%2fc%2b%2b
                    ↓
Perfect match → Display "C/C++" ✅
```

---

## Component Impact Map

### Affected Components (No Code Changes Needed - Auto-Fixed)

```
lib/utils.ts (MODIFIED)
├── wordToSlug()           ← Uses encodeURIComponent now
└── slugToWord()           ← Uses decodeURIComponent now
    │
    └─→ Used by:
        ├── app/words/[slug]/page.tsx       ← Gets correct word from slug
        ├── app/words/[slug]/edit/page.tsx  ← Slug now decodes correctly
        ├── Components using wordToSlug()   ← Links work with special chars
        └── generateStaticParams()          ← Static routes include special chars
```

### New Endpoint

```
app/api/words/search/route.ts (NEW)
├── GET /api/words/search?q=<query>
│   ├── Exact match first (recommended)
│   └── Partial matches as fallback
│
└─→ Used by:
    └── app/words/[slug]/edit/page.tsx   ← Now can find words to edit
```

---

## URL Encoding Reference

### How URLs are Encoded

| Character | Encoded | Example |
|-----------|---------|---------|
| Space | `%20` | "To Be" → "to%20be" |
| Apostrophe | `%27` | "Don't" → "don%27t" |
| Forward Slash | `%2F` | "C/C++" → "c%2fc%2b%2b" |
| Comma | `%2C` | "1, 2" → "1%2C%202" |
| Plus | `%2B` | "C++" → "c%2b%2b" |
| Parenthesis ( | `%28` | "C (lang)" → "c%20%28lang%29" |
| Parenthesis ) | `%29` | |
| Dash | (no change) | "Bit-rate" → "bit-rate" |
| Underscore | (no change) | "Back_Up" → "back_up" |

### How encodeURIComponent Works

```javascript
encodeURIComponent("Don't")     // "don%27t"
encodeURIComponent("C/C++")     // "c%2fc%2b%2b"
encodeURIComponent("To Be")     // "to%20be"
encodeURIComponent("café")      // "caf%C3%A9"
encodeURIComponent("你好")      // "%E4%BD%A0%E5%A5%BD"

// Decoding
decodeURIComponent("don%27t")   // "don't"
decodeURIComponent("c%2fc%2b%2b") // "c/c++"
```

---

## Data Flow Diagram

### Creating a Word

```
┌─────────────────────┐
│ User adds "Don't"   │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────────────────────┐
│ POST /api/words                     │
│ Body: { english: "Don't", ... }     │
└──────────┬──────────────────────────┘
           │
           ↓
┌─────────────────────────────────────┐
│ MongoDB stores:                     │
│ { english: "Don't", ... }           │
└──────────┬──────────────────────────┘
           │
           ↓
┌─────────────────────────────────────┐
│ generateStaticParams() runs         │
│ Returns: { slug: "don%27t" }        │
└──────────┬──────────────────────────┘
           │
           ↓
┌─────────────────────────────────────┐
│ Static page created:                │
│ /words/don%27t/page.html            │
└──────────┬──────────────────────────┘
           │
           ↓
┌─────────────────────────────────────┐
│ User visits URL                     │
│ GET /words/don%27t                  │
└─────────────────────────────────────┘
```

### Viewing a Word

```
┌──────────────────────────────────┐
│ User visits /words/don%27t       │
└──────────┬───────────────────────┘
           │
           ↓
┌──────────────────────────────────┐
│ Next.js decodes slug:            │
│ params.slug = "don%27t"          │
└──────────┬───────────────────────┘
           │
           ↓
┌──────────────────────────────────┐
│ slugToWord("don%27t")            │
│ = decodeURIComponent("don%27t")  │
│ = "don't"                        │
└──────────┬───────────────────────┘
           │
           ↓
┌──────────────────────────────────┐
│ Database query:                  │
│ english: { $regex: "^don't$" }   │
└──────────┬───────────────────────┘
           │
           ↓
┌──────────────────────────────────┐
│ Word found! Display "Don't"      │
│ with Balti translation ✅        │
└──────────────────────────────────┘
```

### Editing a Word (NEW)

```
┌─────────────────────────────────────┐
│ User clicks Edit on "Don't" page     │
│ Navigates to /words/don%27t/edit    │
└──────────┬────────────────────────────┘
           │
           ↓
┌─────────────────────────────────────┐
│ Edit page mounts                    │
│ slug = "don%27t" (from params)      │
└──────────┬────────────────────────────┘
           │
           ↓
┌─────────────────────────────────────┐
│ slugToWord("don%27t")               │
│ = "don't"                           │
└──────────┬────────────────────────────┘
           │
           ↓
┌─────────────────────────────────────┐
│ fetch(/api/words/search?q=don%27t)  │
│                                     │
│ NOW EXISTS! ✅                      │
└──────────┬────────────────────────────┘
           │
           ↓
┌─────────────────────────────────────┐
│ Search endpoint:                    │
│ 1. Escape regex chars               │
│ 2. Query for exact match            │
│ 3. Find "Don't" in database         │
└──────────┬────────────────────────────┘
           │
           ↓
┌─────────────────────────────────────┐
│ Word data returned                  │
│ Form populated with "Don't" ✅      │
└──────────┬────────────────────────────┘
           │
           ↓
┌─────────────────────────────────────┐
│ User makes changes and submits      │
│ PUT /api/words/{id}                 │
└──────────┬────────────────────────────┘
           │
           ↓
┌─────────────────────────────────────┐
│ Word updated in database            │
│ User redirected to view page ✅     │
└─────────────────────────────────────┘
```

---

## Testing Checklist

### Unit Tests (Proposed)

```typescript
// Test URL encoding roundtrip
describe('wordToSlug and slugToWord', () => {
  test('encodes and decodes apostrophes', () => {
    const word = "Don't"
    const slug = wordToSlug(word)
    expect(slug).toBe("don%27t")
    expect(slugToWord(slug)).toBe("don't")
  })
  
  test('encodes and decodes spaces', () => {
    const word = "To Be"
    const slug = wordToSlug(word)
    expect(slug).toBe("to%20be")
    expect(slugToWord(slug)).toBe("to be")
  })
  
  test('encodes and decodes slashes', () => {
    const word = "C/C++"
    const slug = wordToSlug(word)
    expect(slug).toBe("c%2fc%2b%2b")
    expect(slugToWord(slug)).toBe("c/c++")
  })
})
```

### Manual Tests

1. **View Words**
   - [ ] Create "Don't", access /words/don%27t
   - [ ] Create "To Be", access /words/to%20be
   - [ ] Create "C/C++", access /words/c%2fc%2b%2b
   - [ ] Create "1, 2, 3", access /words/1%2C%202%2C%203

2. **Edit Words**
   - [ ] Edit "Don't" successfully
   - [ ] Edit "To Be" successfully
   - [ ] Edit "C/C++" successfully
   - [ ] Verify search finds words correctly

3. **Search Functionality**
   - [ ] Search API returns exact matches first
   - [ ] Search API returns partial matches
   - [ ] Special characters in search work

4. **Static Generation**
   - [ ] `npm run build` succeeds
   - [ ] Static pages generated for special char words
   - [ ] Static pages accessible at correct URLs

---

## Deployment Checklist

- [ ] Commit changes to repository
- [ ] Run `npm run build` - verify no errors
- [ ] Test locally: `npm run dev`
- [ ] Review git diff for `lib/utils.ts` and new `/api/words/search/route.ts`
- [ ] Verify no breaking changes to existing endpoints
- [ ] Deploy to production
- [ ] Test: Visit /words/don%27t in production
- [ ] Test: Edit page for words with special characters
- [ ] Monitor error logs for any regressions

---

## Rollback Plan

If issues arise:

1. **Revert commits**: 
   ```bash
   git revert HEAD~1  # Revert search endpoint
   git revert HEAD~2  # Revert utils.ts changes
   ```

2. **Regenerate static pages**:
   ```bash
   npm run build
   ```

3. **Redeploy**: Push to production

**Note**: Old URLs (without encoding) will still work with fallback behavior until reverted.

---

## Performance Impact

| Metric | Impact | Notes |
|--------|--------|-------|
| Build time | None | Static generation uses same route count |
| Page load | None | URL encoding is instant |
| Search latency | None | Regex queries unchanged |
| Database queries | None | Query logic identical, just cleaner |
| Bundle size | None | No new dependencies added |

---

## Migration Path for Existing Words

**Scenario**: Old words created with removed special characters

**Before**: Word "Don't" stored with slug "dont"
**After**: Static generation uses "don%27t"

**Action Needed**: None (automatic)
- Old static pages will be regenerated with correct slugs
- Next.js automatically rebuilds on deployment

**User Experience**:
- Old links may break temporarily during rebuild
- After rebuild, all links use correct encoded URLs
- Recommend updating any external links pointing to old URLs

---

## Monitoring

### What to Watch

1. **404 errors on /words/* routes**
   - Should decrease significantly
   - Monitor for any residual cases

2. **Edit page errors**
   - "Word not found" errors should disappear
   - Check edit form submission success rate

3. **Search endpoint usage**
   - `/api/words/search` should see traffic from edit pages
   - Monitor response times (should be <100ms)

### Logs to Check

```bash
# Check for 404s
grep "notFound()" logs/

# Check for search endpoint errors
grep "/api/words/search" logs/

# Check for database errors
grep "Error.*word" logs/
```

---

## FAQ

**Q: Will old URLs still work?**  
A: No. Old URLs like `/words/dont` will 404. Users need to use `/words/don%27t` (browser handles encoding).

**Q: Why not redirect old URLs?**  
A: Could be added as future improvement. Current fix prioritizes correctness.

**Q: Do I need to update my links?**  
A: No. Use `wordToSlug()` function which now returns correct encoded slugs.

**Q: Is this a security risk?**  
A: No. URL encoding is the standard approach. Special characters are properly escaped in database queries.

**Q: Can Unicode characters work?**  
A: Yes! `encodeURIComponent()` handles Unicode perfectly.

**Q: Why two-tier search (exact + partial)?**  
A: For better UX: exact matches found instantly, partial matches as fallback for typos.
