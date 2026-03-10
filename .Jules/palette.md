## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search Focus Management]
**Learning:** When clearing search queries via an 'X' button, focus must be returned to the input field to prevent it from being lost, which is critical for keyboard and screen reader accessibility.
**Action:** Use a React `useRef` to target the search input and call `.focus()` immediately after clearing the query state.
