## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search UX & Accessibility Patterns]
**Learning:** For interactive search components with suggestions, accessibility is greatly improved by using `role="listbox"` and `role="option"` (with `aria-selected`). Furthermore, programmatically returning focus to the search input after clearing the query via a dedicated button prevents focus loss, which is critical for keyboard and screen reader navigation flow.
**Action:** Always implement `useRef` on search inputs to manage focus when clearing or selecting suggestions, and ensure all listbox options have an explicit `aria-selected` state.
