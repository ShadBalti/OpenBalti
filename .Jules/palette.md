## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Advanced Search Accessibility & Focus]
**Learning:** Implementing the WAI-ARIA combobox pattern requires careful coordination of `role="combobox"`, `aria-autocomplete`, `aria-expanded`, and `aria-controls`. Additionally, returning focus to the input field after clearing a search query (using `useRef`) significantly improves the experience for keyboard and screen reader users.
**Action:** For all search or autocomplete components, use the `useId` hook for robust ARIA linking and ensure programmatic focus management for 'clear' actions.
