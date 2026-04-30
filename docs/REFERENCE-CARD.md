# OpenBalti Enhancement Plan - Reference Card

Quick lookup for components, utilities, and documentation.

---

## Components at a Glance

### 1. Breadcrumb Navigation
**File**: `/components/layout/breadcrumb.tsx`
```tsx
<Breadcrumb /> // Auto from URL
<Breadcrumb items={customItems} /> // Custom breadcrumbs
```
**Use Cases**: All secondary pages, search results, word details
**Props**: `items?`, `className?`

### 2. Mobile Bottom Navigation  
**File**: `/components/layout/mobile-bottom-nav.tsx`
```tsx
<MobileBottomNav />
```
**Use Cases**: Already in layout - mobile devices only
**Auto Items**: Home, Dictionary, Learn, Saved, Profile

### 3. Optimized Image
**File**: `/components/optimized-image.tsx`
```tsx
<OptimizedImage src="/img.jpg" alt="..." priority sizes="..." />
```
**Use Cases**: Hero images, product images, thumbnails
**Benefits**: Adaptive quality, lazy loading, responsive sizing

### 4. Responsive Grid
**File**: `/components/responsive-container.tsx`
```tsx
<ResponsiveGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
  {items.map(item => <Card>{item}</Card>)}
</ResponsiveGrid>
```
**Breakpoints**: mobile (xs-sm), tablet (md), desktop (lg+)

### 5. Responsive Container
**File**: `/components/responsive-container.tsx`
```tsx
<ResponsiveContainer size="lg" padding="md">
  {children}
</ResponsiveContainer>
```
**Sizes**: sm, md, lg, xl, full
**Padding**: none, sm, md, lg

### 6. Stack Layout
**File**: `/components/responsive-container.tsx`
```tsx
<Stack direction="vertical" gap="md" align="center">
  {children}
</Stack>
```
**Direction**: vertical, horizontal, auto
**Align**: start, center, end, stretch

### 7. FAQ Structured Data
**File**: `/components/faq-structured-data.tsx`
```tsx
<FAQStructuredData items={faqItems} />
```
**Schema**: Google FAQPage schema
**Items**: Array of { question, answer }

---

## Utilities & Hooks

### Performance Utils
**File**: `/lib/performance-utils.ts`

```tsx
// Reporting
reportWebVitals(metric) // Send to GA4

// Images
heroImageProps // Ready-made props for hero images
responsiveImageSizes // Pre-defined sizes

// Connection
getConnectionSpeed() // Returns 'slow' | 'normal' | 'fast'
getOptimalImageQuality() // Returns 60-90 based on connection

// Helpers
debounce(fn, wait) // Debounce function calls
useIntersectionObserver(ref, callback) // Lazy loading
```

### Web Vitals Hook
**File**: `/hooks/use-web-vitals.ts`

```tsx
useWebVitals() // Call in root component once
```
Tracks: LCP, FID, CLS, TTFB, INP
Sends to: Google Analytics 4

---

## Core Files Modified

### 1. Layout (`/app/layout.tsx`)
```tsx
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav"

// In return:
<Breadcrumb /> // Add after header
<MobileBottomNav /> // Add before footer
```

### 2. Global Styles (`/app/globals.css`)
Added:
- High-contrast focus indicators
- Screen reader utilities (.sr-only)
- Reduced motion support
- High contrast mode support

### 3. Tailwind Config (`/tailwind.config.ts`)
Added:
- Responsive breakpoints (xs-2xl)
- Typography scale
- Spacing system
- Touch action utilities

---

## Design System Quick Reference

### Colors
| Type | Color | Usage |
|------|-------|-------|
| Primary | Blue (#3B82F6) | Links, CTAs |
| Success | Green (#10B981) | Verified, completed |
| Warning | Amber (#F59E0B) | Attention needed |
| Error | Red (#EF4444) | Errors, destructive |
| Info | Cyan (#06B6D4) | Tips, information |

### Typography
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 48px | 700 | 1.2 |
| H2 | 36px | 700 | 1.25 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.5 |

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px (default)
- lg: 24px
- xl: 32px
- 2xl: 40px

### Breakpoints
- xs: 0px (mobile)
- sm: 640px (landscape phone)
- md: 768px (tablet)
- lg: 1024px (desktop)
- xl: 1280px (large)
- 2xl: 1536px (extra large)

---

## Documentation Map

| Need | Document | Section |
|------|----------|---------|
| Quick start | QUICK-START.md | Top |
| Components | QUICK-START.md | Common Tasks |
| Design | DESIGN-SYSTEM.md | All |
| Code examples | IMPLEMENTATION-GUIDE.md | All |
| Tasks | IMPLEMENTATION-CHECKLIST.md | Phases |
| Strategy | UI-UX-SEO-ENHANCEMENT-PLAN.md | All |
| Real scenarios | SCENARIO-EXAMPLES.md | All |
| Overview | IMPLEMENTATION-SUMMARY.md | All |

---

## Implementation Phases

| Phase | Duration | Key Tasks |
|-------|----------|-----------|
| 1: Navigation | Week 1 | Breadcrumbs, mobile nav |
| 2: Accessibility | Week 2 | Focus indicators, WCAG |
| 3: SEO | Week 3 | Schema, meta tags |
| 4: Performance | Weeks 4-5 | Web Vitals, images |
| 5: Mobile | Week 6 | Responsive components |
| 6: Design | Weeks 7-8 | Visual consistency |

---

## Success Metrics

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Core Web Vitals
- LCP: < 2.5s
- INP: < 200ms
- CLS: < 0.1
- TTFB: < 600ms

### Business Metrics
- Session duration: +50-210%
- Bounce rate: < 35%
- Organic traffic: +300-620% (6-12 months)
- Keyword rankings: Top 5 for primary terms

---

## Common Implementation Patterns

### Pattern 1: Responsive Grid List
```tsx
import { ResponsiveGrid } from "@/components/responsive-container"

<ResponsiveGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
  {items.map(item => (
    <Card key={item.id}>{item.content}</Card>
  ))}
</ResponsiveGrid>
```

### Pattern 2: Hero Image
```tsx
import { OptimizedImage } from "@/components/optimized-image"

<OptimizedImage
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority
  sizes="(max-width: 640px) 100vw, 1200px"
/>
```

### Pattern 3: Accessible Form
```tsx
<div className="space-y-4">
  <label htmlFor="input" className="block font-medium">
    Label
  </label>
  <input
    id="input"
    type="text"
    className="focus:ring-2 focus:ring-primary"
    aria-invalid={error}
    aria-describedby={error ? "error-msg" : undefined}
  />
  {error && (
    <p id="error-msg" className="text-red-500" role="alert">
      {error}
    </p>
  )}
</div>
```

### Pattern 4: Breadcrumb Navigation
```tsx
import { Breadcrumb } from "@/components/layout/breadcrumb"

<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Dictionary", href: "/dictionary" },
  { label: "Word", href: "/words/example", current: true }
]} />
```

### Pattern 5: Stack Layout
```tsx
import { Stack } from "@/components/responsive-container"

<Stack direction="vertical" gap="lg" align="center">
  <h1>Title</h1>
  <p>Content</p>
  <button>Action</button>
</Stack>
```

---

## Accessibility Checklist (Quick)

- [ ] Heading hierarchy (h1 → h2 → h3)
- [ ] Color contrast 4.5:1 minimum
- [ ] Focus indicators visible (ring-2)
- [ ] Form labels properly associated
- [ ] Alt text on all images
- [ ] Keyboard navigation working
- [ ] Mobile touch targets 44px+
- [ ] Screen reader tested
- [ ] ARIA labels where needed

---

## Testing Commands

```bash
# Build test
npm run build

# Lighthouse audit
npm run lighthouse

# Type checking
npm run type-check

# Format check
npm run format:check
```

---

## File Locations Quick Ref

| Item | Location |
|------|----------|
| Breadcrumb | `/components/layout/breadcrumb.tsx` |
| Mobile Nav | `/components/layout/mobile-bottom-nav.tsx` |
| Optimized Image | `/components/optimized-image.tsx` |
| Responsive Layouts | `/components/responsive-container.tsx` |
| FAQ Schema | `/components/faq-structured-data.tsx` |
| Performance Utils | `/lib/performance-utils.ts` |
| Web Vitals Hook | `/hooks/use-web-vitals.ts` |
| Global Styles | `/app/globals.css` |
| Tailwind Config | `/tailwind.config.ts` |
| Layout | `/app/layout.tsx` |

---

## Props Quick Reference

### ResponsiveGrid
- `columns`: { mobile?, tablet?, desktop? }
- `gap`: "sm" | "md" | "lg"
- `className`: string

### ResponsiveContainer
- `size`: "sm" | "md" | "lg" | "xl" | "full"
- `padding`: "none" | "sm" | "md" | "lg"
- `className`: string

### OptimizedImage
- `src`: string (required)
- `alt`: string (required)
- `width`: number
- `height`: number
- `priority`: boolean
- `sizes`: string
- `objectFit`: "cover" | "contain" | "fill"

### Breadcrumb
- `items`: BreadcrumbItem[]
- `className`: string

### Stack
- `direction`: "vertical" | "horizontal" | "auto"
- `gap`: "xs" | "sm" | "md" | "lg"
- `align`: "start" | "center" | "end" | "stretch"
- `justify`: "start" | "center" | "between" | "around"

---

## Performance Optimization Checklist

- [ ] Images optimized with OptimizedImage
- [ ] Web Vitals tracking implemented
- [ ] Heavy components lazy-loaded
- [ ] Fonts optimized (display: swap)
- [ ] Core Web Vitals < targets
- [ ] Lighthouse 90+ scores
- [ ] Mobile performance tested
- [ ] Bundle size optimized

---

## SEO Checklist

- [ ] Meta tags all pages
- [ ] Schema markup implemented
- [ ] Breadcrumb navigation added
- [ ] Internal links optimized
- [ ] Images have alt text
- [ ] Heading hierarchy correct
- [ ] Core Web Vitals optimized
- [ ] Mobile friendly verified
- [ ] Sitemap created
- [ ] Robots.txt configured

---

## Mobile Optimization Checklist

- [ ] Touch targets 44px+
- [ ] Text readable (16px minimum)
- [ ] Responsive grid working
- [ ] Bottom nav showing
- [ ] Images optimized
- [ ] Forms touch-friendly
- [ ] Scrolling smooth
- [ ] No horizontal overflow
- [ ] Buttons have enough spacing
- [ ] Font sizes responsive

---

## Accessibility Checklist (Extended)

- [ ] WCAG 2.1 AA compliance
- [ ] Color contrast verified
- [ ] Focus indicators visible
- [ ] Keyboard navigation complete
- [ ] Screen reader tested
- [ ] Form labels present
- [ ] Error messages clear
- [ ] Reduced motion respected
- [ ] Touch targets adequate
- [ ] Semantic HTML used

---

## Quick Tips

1. **Always use ResponsiveGrid for lists** - not CSS media queries
2. **Use OptimizedImage for all images** - not img tags
3. **Add priority to hero images only** - not all images
4. **Include sizes prop for responsive images** - for better LCP
5. **Use Breadcrumb auto-generation** - simpler than custom items
6. **Test keyboard navigation** - Tab through entire page
7. **Check mobile at 375px width** - iPhone 12 size
8. **Monitor Web Vitals regularly** - use Google Analytics
9. **Keep animations short** - 200-300ms maximum
10. **Use semantic HTML** - buttons, links, sections

---

**Last Updated**: January 2025
**Status**: Ready for Reference

Need more details? See full documentation in `/docs/`
