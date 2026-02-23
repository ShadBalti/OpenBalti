## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2024-05-15 - [Search Accessibility & Focus Management]
**Learning:** Search inputs with 'clear' buttons need careful focus management; clearing the input should programmatically return focus to it to maintain the user's context. Furthermore, autocomplete suggestions must implement full ARIA `listbox` and `option` roles, along with `aria-autocomplete` and `aria-expanded` on the input, to be fully accessible to screen reader users.
**Action:** When implementing or enhancing search components, always use a `useRef` to manage focus after clear actions and ensure the suggestions dropdown follows the ARIA `combobox` pattern.
