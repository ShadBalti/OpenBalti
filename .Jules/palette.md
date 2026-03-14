## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search Focus Management]
**Learning:** When providing a 'clear' button for a search input, accessibility and UX are significantly improved by programmatically returning focus to the input field after clearing. This allows users to immediately resume typing or navigating without manual re-focusing.
**Action:** Implement a `useRef` for search inputs and call `.focus()` in the clear button's `onClick` handler. Ensure the clear button has `type="button"` and a descriptive `aria-label`.
