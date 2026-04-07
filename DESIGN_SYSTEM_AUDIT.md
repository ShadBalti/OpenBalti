# OpenBalti Design System Audit & Unification Plan

## Overview
This document outlines the design system audit findings and provides a comprehensive plan for unifying the design system across the OpenBalti codebase.

## Current Design System

### Color Tokens (CSS Variables)
The design system uses CSS variables defined in `app/globals.css`:

**Light Mode**
- `--primary`: Blue 221.2° 83.2% 53.3%
- `--secondary`: Light Gray 210° 40% 96.1%
- `--accent`: Light Gray (same as secondary)
- `--destructive`: Red 0° 84.2% 60.2%
- `--muted`: Light Gray
- `--background`: White
- `--foreground`: Dark Blue-Gray

**Dark Mode**
- `--primary`: Lighter Blue 217.2° 91.2% 59.8%
- `--secondary`: Dark Gray 217.2° 32.6% 17.5%
- `--background`: Dark 222.2° 84% 4.9%
- `--foreground`: Off-White 210° 40% 98%

**New Semantic Tokens (Added)**
- `--success`: Green 132° 61% 41% (and light variant)
- `--warning`: Yellow/Orange 44° 100% 50% (and light variant)
- `--info`: Same as primary with light variant

## Issues Identified

### 1. Hardcoded Colors (48+ instances)
Hardcoded colors bypass the design system and make theme changes difficult:

#### Critical Components
- `components/LearnContinue.tsx` - `bg-blue-600` → should use `bg-primary`
- `components/word-of-day.tsx` - Multiple `text-blue-500`, `text-yellow-500`, `text-slate-*`
- `components/features-section.tsx` - `bg-blue-500/10`, `text-blue-500`
- `app/page.tsx` - `text-blue-500` in hero section

#### Status Badge Components
- `components/activity-log-list.tsx` - Green, blue, red, purple badges
- `components/category-status-badges.tsx` - Category-specific colors (purple, green, pink, blue, yellow, red, cyan)
- `components/feedback-badges.tsx` - Green and blue badges
- `components/review-page.tsx` - Yellow, green badges

#### Other Components
- `components/content-quality-checklist.tsx` - Green and red text
- `components/profile/user-profile.tsx` - Green, blue, purple profile stats
- `components/community-stats.tsx` - Green and blue stat boxes
- Blog components - Various blue, purple, green backgrounds

### 2. Contrast & Accessibility Issues
- Some hover states use low opacity (e.g., `bg-secondary/20`) which may not meet WCAG AA standards
- Need to audit focus states for sufficient contrast
- Some background-text color combinations need verification

### 3. Typography Inconsistencies
- Line-height varies without consistent pattern
- Font weights not standardized across similar elements
- Some small text (12px-13px) may not meet readability standards

### 4. Responsive Design Issues
- Fixed heights in some components (e.g., `h-[90vh]`, `h-[400px]`)
- Mobile layouts have inconsistent padding/spacing
- Tables don't properly stack on mobile screens
- Some forms have misaligned labels on narrow screens

## Implementation Plan

### Phase 1: Color System Unification (Priority: HIGH)

#### Step 1.1: Standardize Status/Intent Colors
Create a consistent color palette for status indicators:

```
Success (Green): hsl(132 61% 41%) → CSS class: `bg-success`, `text-success`
Warning (Yellow): hsl(44 100% 50%) → CSS class: `bg-warning`, `text-warning`
Info (Blue): hsl(221.2 83.2% 53.3%) → CSS class: `bg-info`, `text-info`
Error (Red): hsl(0 84.2% 60.2%) → CSS class: `bg-destructive`, `text-destructive`
```

#### Step 1.2: Category Color Mapping
Update category badges to use semantic colors:

**Recommended Mapping:**
- Culture → Primary (Blue)
- Nature → Success (Green)
- Family → Destructive/Pink (Red tones)
- Geography → Info (Blue)
- Commerce → Warning (Yellow)
- Animals → Destructive (Red)

Create a `lib/category-color-map.ts` utility:

```typescript
export const categoryColorMap: Record<string, string> = {
  culture: "bg-primary text-primary-foreground",
  nature: "bg-success text-white",
  family: "bg-destructive text-destructive-foreground",
  geography: "bg-info text-white",
  commerce: "bg-warning text-black",
  animals: "bg-destructive text-destructive-foreground",
}
```

#### Step 1.3: Activity Status Colors
Standardize activity log badges:

- Added → Success (Green)
- Updated → Info (Blue)
- Deleted → Destructive (Red)
- Reviewed → Warning (Yellow)

#### Step 1.4: Remove Hardcoded Colors
Replace hardcoded Tailwind color classes:

**File-by-file replacements:**

| File | Hardcoded | Replacement | Status |
|------|-----------|-------------|--------|
| `components/LearnContinue.tsx` | `bg-blue-600` | `bg-primary` | ✓ DONE |
| `components/LearnContinue.tsx` | `bg-blue-500` | `bg-primary/90` | ✓ DONE |
| `components/word-of-day.tsx` | `text-blue-500` | `text-primary` | TODO |
| `components/word-of-day.tsx` | `text-yellow-500` | `text-warning` | TODO |
| `components/word-of-day.tsx` | `text-slate-*` | `text-foreground` | TODO |
| `components/features-section.tsx` | `bg-blue-500/10` | `bg-primary/10` | TODO |
| `components/features-section.tsx` | `text-blue-500` | `text-primary` | TODO |
| `components/activity-log-list.tsx` | `bg-green-100` | `bg-success-light` | TODO |
| `components/activity-log-list.tsx` | `text-green-800` | `text-success` | TODO |
| Profile components | Multiple colors | Use semantic tokens | TODO |

### Phase 2: Accessibility & Contrast Audits (Priority: MEDIUM)

#### Step 2.1: WCAG Contrast Verification
- Run components through WebAIM contrast checker
- Fix insufficient contrast ratios (need 4.5:1 for normal text, 3:1 for large text)
- Test both light and dark modes

#### Step 2.2: Focus States
- Audit all interactive elements for visible focus indicators
- Ensure focus ring uses sufficient contrast
- Test with keyboard navigation

#### Step 2.3: Color Blind Friendly
- Verify no information is conveyed by color alone
- Add labels/icons to status badges beyond just color

### Phase 3: Typography Standardization (Priority: MEDIUM)

#### Step 3.1: Line Height Standards
Apply consistent line-height system:
- Body text: `leading-relaxed` (1.625)
- Headings: `leading-tight` (1.25)
- Small text: `leading-normal` (1.5)

#### Step 3.2: Font Size & Weight
Establish clear hierarchy:

| Element | Size | Weight | Class |
|---------|------|--------|-------|
| H1 | 2.25rem | 700 | `text-4xl font-bold` |
| H2 | 1.875rem | 700 | `text-3xl font-bold` |
| H3 | 1.5rem | 600 | `text-2xl font-semibold` |
| H4 | 1.25rem | 600 | `text-xl font-semibold` |
| Body | 1rem | 400 | `text-base font-normal` |
| Small | 0.875rem | 400 | `text-sm font-normal` |

Minimum size: 14px for body text (currently allowed down to 0.75rem)

### Phase 4: Responsive Design Fixes (Priority: MEDIUM)

#### Step 4.1: Mobile Layout Issues
- Fix mobile bottom nav overlap with `pb-16 md:pb-0` pattern
- Make mobile filter drawer responsive: `h-[calc(100vh-safe-area)]`
- Stack form labels properly on mobile

#### Step 4.2: Table Responsiveness
- Implement horizontal scroll with visible indicators on mobile
- Or stack table cells vertically on `sm` and below
- Ensure data remains readable

#### Step 4.3: Spacing Consistency
- Use consistent gap and margin scales (xs: 0.25rem, sm: 0.5rem, md: 1rem, lg: 1.5rem, xl: 2rem)
- Never mix margin + gap on same element
- Use responsive prefixes: `md:gap-6 lg:gap-8`

## Design Token Reference

### Using the Design System

**Instead of:**
```jsx
<button className="bg-blue-600 hover:bg-blue-500 text-white">
  Click Me
</button>
```

**Use:**
```jsx
<button className="bg-primary hover:bg-primary/90 text-primary-foreground">
  Click Me
</button>
```

**For status colors:**
```jsx
<span className="bg-success text-white">Success</span>
<span className="bg-warning text-black">Warning</span>
<span className="bg-destructive text-destructive-foreground">Error</span>
```

## Testing Checklist

- [ ] All hardcoded colors replaced
- [ ] Light mode contrast meets WCAG AA (4.5:1)
- [ ] Dark mode contrast meets WCAG AA (4.5:1)
- [ ] Focus states visible with 3:1+ contrast
- [ ] Mobile layouts responsive without horizontal scroll
- [ ] Forms accessible with keyboard navigation
- [ ] Typography hierarchy clear and readable
- [ ] Dark mode toggle works correctly
- [ ] No layout shifts on theme change

## Files to Update (Remaining)

1. `components/word-of-day.tsx` - 20+ hardcoded colors
2. `components/features-section.tsx` - Feature icons and backgrounds
3. `components/activity-log-list.tsx` - Activity badges
4. `components/category-status-badges.tsx` - Category colors
5. `components/profile/user-profile.tsx` - Profile stat colors
6. `components/review-page.tsx` - Review badges
7. `components/cta-section.tsx` - CTA button colors
8. `components/community-stats.tsx` - Stats box colors
9. `components/feedback-badges.tsx` - Feedback badge colors
10. Blog components - Multiple color references

## Success Metrics

- 100% of hardcoded colors removed (0 instances of `text-blue-*`, `bg-blue-*`, etc. except in design docs)
- WCAG AA contrast compliance across all UI states
- Consistent responsive behavior across all breakpoints
- No layout shifts on theme changes
- Design token usage in 100% of new components

## Resources

- [WCAG 2.1 Color Contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Tailwind CSS Color Customization](https://tailwindcss.com/docs/customizing-colors)
- [CSS Custom Properties (Variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
