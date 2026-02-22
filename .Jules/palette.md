## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search Accessibility and Focus Management]
**Learning:** In complex search interfaces with autocomplete suggestions, simply adding ARIA labels is insufficient. Proper focus management—specifically returning focus to the input after clearing the query—significantly improves keyboard navigation. Additionally, linking the input to the suggestions list using `aria-controls`, `aria-expanded`, and `aria-haspopup` is critical for a robust screen reader experience.
**Action:** Always implement a `useRef` on search inputs to programmatically return focus after 'clear' actions, and ensure autocomplete containers use `role="listbox"` with `role="option"` items linked via relationship attributes.
