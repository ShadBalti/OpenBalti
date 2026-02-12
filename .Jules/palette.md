## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search Input Accessibility & Focus]
**Learning:** In search interfaces with autocomplete and clear buttons, the keyboard focus is often lost when the clear button is clicked. Additionally, without proper ARIA attributes, screen readers may not announce the presence or state of the suggestion list.
**Action:** Always use `useRef` to return focus to the search input after clearing. Implement `aria-autocomplete="list"`, `aria-expanded`, `role="listbox"`, and `role="option"` to create a robust accessible search experience.
