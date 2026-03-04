## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-14 - [Search Interface Accessibility]
**Learning:** Advanced search components with suggestions require specific ARIA roles (`listbox`, `option`) and properties (`aria-autocomplete`, `aria-expanded`) to be truly accessible to screen readers. Relying on visual-only cues for clearing search or managing presets leaves assistive technology users behind.
**Action:** Always implement `role="listbox"` on suggestion containers and `role="option"` with `aria-selected` on items. Use `useCallback` for data-fetching functions used in `useEffect` to satisfy linting rules and ensure stable component behavior.
