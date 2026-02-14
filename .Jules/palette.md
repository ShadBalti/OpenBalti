## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search UX & Accessibility]
**Learning:** For complex search components with autocomplete, implementing the ARIA combobox pattern (roles like `combobox`, `listbox`, `option`) and programmatic focus management (returning focus to the input after clearing or selecting) significantly improves the experience for keyboard and screen-reader users. Additionally, triggering search immediately upon suggestion selection reduces friction.
**Action:** Always implement `useRef` for search inputs to manage focus during interactions and ensure proper ARIA roles and states are maintained for suggestions dropdowns.
