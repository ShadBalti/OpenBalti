## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search Suggestions Accessibility]
**Learning:** For search inputs that provide a dropdown list of suggestions, simply adding `aria-autocomplete` is insufficient for full screen reader support. It requires a complete `combobox` pattern including `role="combobox"`, `aria-expanded`, and `aria-controls` linked to a `role="listbox"` container using unique IDs (via `useId`).
**Action:** When implementing autocomplete or search suggestions, always use the `useId` hook to link the input to the suggestion container and ensure all relevant ARIA roles and states are applied.
