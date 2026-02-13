## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search UX & Accessibility Patterns]
**Learning:** For advanced search components with suggestions, implementing the full WAI-ARIA Combobox pattern (role="combobox", aria-autocomplete, etc.) is essential for screen reader users. Additionally, returning focus to the input after clearing or clicking outside significantly improves keyboard navigation flow.
**Action:** Always implement ARIA listbox roles for search suggestions and use refs to manage focus transitions between search controls and results.
