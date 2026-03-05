## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search Focus Management & Accessibility]
**Learning:** In search interfaces with clear buttons, removing the search query without returning focus to the input field breaks the user's flow and is an accessibility hurdle for keyboard and screen reader users. Additionally, icon-only buttons in search and presets lack context without ARIA labels.
**Action:** Always implement a React `useRef` for search inputs to programmatically return focus after clearing, and ensure all utility buttons (clear, delete, etc.) have descriptive `aria-label` and explicit `type="button"`.
