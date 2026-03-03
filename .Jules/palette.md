## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search Autocomplete Accessibility]
**Learning:** For complex search components with autocomplete suggestions, using `aria-autocomplete="list"`, `aria-expanded`, and `aria-controls` on the input, along with `role="listbox"` and `role="option"` for the suggestions, significantly improves the experience for screen reader users by providing context about the dynamic content.
**Action:** Always link search inputs to their suggestion containers using unique IDs (generated via `useId`) and appropriate ARIA roles to ensure the UI is fully perceivable and navigable via assistive technology.
