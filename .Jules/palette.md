## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search Focus Management & Suggestions A11y]
**Learning:** In search interfaces with clear-buttons, users expect focus to return to the input immediately after clearing. Furthermore, search suggestions require explicit ARIA roles (listbox, option) and state (aria-selected, aria-expanded) to be properly announced by screen readers.
**Action:** Always implement focus management when providing 'clear' functionality for inputs and ensure dropdown suggestions follow ARIA best practices for listboxes.
