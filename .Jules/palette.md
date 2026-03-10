## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search UX & Autocomplete Accessibility]
**Learning:** For search inputs with suggestions, focus management is as critical as labeling. Returning focus to the input after clearing the query prevents keyboard focus from becoming lost. Additionally, implementing `role="combobox"` and `role="listbox"` with appropriate `aria-expanded` and `aria-controls` states ensures that assistive technologies can correctly announce and navigate the interaction.
**Action:** When implementing search or autocomplete, use a React `ref` to programmatically restore focus to the input after clearing. Always link the input to its suggestions container using `aria-controls` and update `aria-expanded` dynamically based on visibility.
