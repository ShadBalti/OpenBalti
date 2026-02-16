## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search UX & Combobox Accessibility]
**Learning:** For search inputs with autocomplete dropdowns, implementing the Combobox pattern (role="combobox", aria-autocomplete="list", role="listbox", role="option") is essential for screen reader users. Additionally, returning focus to the input after clearing the query and closing the dropdown when clicking outside are critical micro-interactions for a polished search experience.
**Action:** When implementing or refining search components, ensure all ARIA autocomplete attributes are present, use a container ref for click-outside detection, and a specific input ref for focus management during clear operations.
