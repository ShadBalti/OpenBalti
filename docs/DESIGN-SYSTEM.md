# OpenBalti Design System

## Overview

This document outlines the complete design system for OpenBalti, ensuring consistency, accessibility, and optimal user experience across all interfaces.

---

## 1. Color Palette

### Primary Colors
- **Primary**: `#3B82F6` (Blue) - Main actions, links, highlights
- **Primary-Foreground**: `#FEE2E2` (Light) - Text on primary
- **Secondary**: `#1E293B` (Dark Slate) - Secondary elements, backgrounds
- **Secondary-Foreground**: `#F1F5F9` (Light) - Text on secondary

### Semantic Colors
- **Success**: `#10B981` (Green) - Verified, completed, positive
- **Warning**: `#F59E0B` (Amber) - Attention needed, pending review
- **Destructive**: `#EF4444` (Red) - Errors, deletions, warnings
- **Info**: `#06B6D4` (Cyan) - Information, tips, helpful hints

### Neutral Colors
- **Background**: `#000000` (Black) - Page background
- **Foreground**: `#F8FAFC` (Light Blue-Gray) - Primary text
- **Muted**: `#334155` (Slate) - Secondary text, disabled states
- **Muted-Foreground**: `#A1A5B0` (Gray) - Tertiary text

---

## 2. Typography

### Font Stack
- **Heading Font**: Inter (weight: 600, 700)
- **Body Font**: Inter (weight: 400, 500)
- **Code Font**: Courier New, monospace

### Font Sizes & Line Heights

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | 3rem (48px) | 700 | 1.2 | Page titles, hero headings |
| H2 | 2.25rem (36px) | 700 | 1.25 | Major section headings |
| H3 | 1.875rem (30px) | 600 | 1.33 | Section subtitles |
| H4 | 1.5rem (24px) | 600 | 1.4 | Subsection titles |
| H5 | 1.25rem (20px) | 600 | 1.5 | Component titles |
| Body | 1rem (16px) | 400 | 1.6 | Main content |
| Small | 0.875rem (14px) | 400 | 1.5 | Secondary info, captions |
| Micro | 0.75rem (12px) | 400 | 1.4 | Labels, badges, hints |

### Typography Rules
- Always maintain minimum 14px font size for body text
- Maximum line length: 65-75 characters for optimal readability
- Use proper heading hierarchy (never skip levels: h1 → h2 → h3)
- Minimum line height: 1.4 for accessibility

---

## 3. Spacing Scale

Mobile-first spacing scale using Tailwind utilities:

```
xs:  0.25rem (4px)   - Minimal spacing
sm:  0.5rem  (8px)   - Small gaps
md:  1rem    (16px)  - Default spacing
lg:  1.5rem  (24px)  - Medium spacing
xl:  2rem    (32px)  - Large spacing
2xl: 2.5rem  (40px)  - Extra large
3xl: 3rem    (48px)  - Massive spacing
4xl: 4rem    (64px)  - Hero spacing
```

### Padding Guidelines
- **Mobile**: 1rem horizontal, 0.75rem vertical
- **Tablet**: 1.5rem horizontal, 1rem vertical
- **Desktop**: 2rem horizontal, 1.5rem vertical

---

## 4. Layout Patterns

### Mobile-First Breakpoints
- **xs**: 0px - Mobile phones
- **sm**: 640px - Landscape phones, tablets
- **md**: 768px - Tablets
- **lg**: 1024px - Desktops
- **xl**: 1280px - Large desktops
- **2xl**: 1536px - Extra large screens

### Responsive Patterns
- **1-column → 2-column**: Use `grid-cols-1 md:grid-cols-2`
- **1-column → 3-column**: Use `grid-cols-1 md:grid-cols-3 lg:grid-cols-3`
- **2-column → 3-column**: Use `grid-cols-2 md:grid-cols-3`

### Container Pattern
```tsx
<ResponsiveContainer size="lg" padding="md">
  {/* Content automatically scales and pads based on device */}
</ResponsiveContainer>
```

---

## 5. Component Guidelines

### Buttons
- **Primary Button**: Full-width on mobile, auto on desktop
- **Touch Target**: Minimum 48x48px (44x44px acceptable)
- **Focus Indicators**: 2px ring, high contrast
- **States**: Default, hover, active, disabled, focus

### Forms
- **Label**: Always present and associated with input
- **Input Height**: 44px+ for mobile touch targets
- **Spacing**: 1rem between form fields
- **Error Messages**: Red (#EF4444), always below field
- **Focus Indicators**: 2px primary color ring

### Cards
- **Padding**: 1rem mobile, 1.5rem desktop
- **Border Radius**: 8px (var(--radius))
- **Shadows**: Subtle elevation for depth
- **Hover States**: Slight scale/shadow increase

### Navigation
- **Desktop**: Horizontal header navigation
- **Mobile**: Bottom navigation bar (4-5 items)
- **Current Page**: Bold text + primary color

---

## 6. Accessibility Standards

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Body Text**: 4.5:1 minimum (AAA standard)
- **Large Text** (18px+): 3:1 minimum
- **UI Components**: 3:1 minimum

#### Focus Indicators
- Visible on all interactive elements
- 2px minimum thickness
- High contrast (primary color)
- Clear offset from element border

#### Typography
- Line height: 1.5 minimum for body text
- Letter spacing: 0.02em or greater
- Maximum 80 characters per line

#### Images & Icons
- All images have descriptive alt text
- Icons paired with text labels
- Decorative images marked as such

### Keyboard Navigation
- Tab order follows visual flow
- Skip links available on all pages
- No keyboard traps
- Focus visible at all times

---

## 7. Motion & Animation

### Animation Principles
- **Duration**: 200-300ms for UI interactions
- **Easing**: ease-out for entrances, ease-in for exits
- **Reduced Motion**: Respect `prefers-reduced-motion`

### Available Animations
- `fade-in`: 0.3s opacity transition
- `slide-in`: 0.3s slide up with fade
- `accordion-down/up`: Collapsible content

### Hover Effects
- 200ms transition on all interactive elements
- Scale: max 1.05x for subtle emphasis
- Color shift: Primary color opacity increase

---

## 8. Responsive Design Checklist

### Mobile (xs - sm)
- [ ] Full-width layouts (minus padding)
- [ ] Single column for lists/grids
- [ ] Bottom navigation for primary actions
- [ ] 44px+ touch targets
- [ ] Large, readable typography
- [ ] Vertical stack for forms

### Tablet (md)
- [ ] 2-3 column grids
- [ ] Optimized touch targets (40px+)
- [ ] Improved spacing utilization
- [ ] Optional sidebar navigation

### Desktop (lg - 2xl)
- [ ] 3+ column layouts
- [ ] Standard mouse interaction
- [ ] Sidebar for secondary navigation
- [ ] Advanced filtering/options

---

## 9. Component Usage Examples

### Responsive Grid
```tsx
<ResponsiveGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="md">
  {items.map(item => <Card key={item.id}>{item.content}</Card>)}
</ResponsiveGrid>
```

### Stack Layout
```tsx
<Stack direction="vertical" gap="lg" align="center">
  <Heading>Title</Heading>
  <Button>Action</Button>
</Stack>
```

### Optimized Image
```tsx
<OptimizedImage
  src="/image.jpg"
  alt="Descriptive alt text"
  sizes="(max-width: 640px) 100vw, 800px"
  priority={false}
/>
```

---

## 10. Brand Voice & Tone

### Visual Principles
- **Clean & Modern**: Minimal, functional design
- **Educational**: Clear visual hierarchy
- **Inclusive**: Accessible to all users
- **Cultural**: Respect for Balti language & heritage

### Copy Guidelines
- Clear, concise language
- Active voice preferred
- Inclusive terminology
- Localization-ready

---

## 11. Performance Metrics

### Lighthouse Targets
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

---

## 12. Dark Mode Implementation

All components support dark mode via Tailwind's `dark:` prefix:

```tsx
<div className="bg-white dark:bg-slate-900 text-black dark:text-white">
  Content
</div>
```

CSS variables automatically adapt based on `.dark` class on root element.

---

## Version History

- **v1.0** (January 2025): Initial design system documentation
- Future: Component Storybook, expanded guidelines

