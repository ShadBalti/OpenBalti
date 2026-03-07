## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2026-03-07 - [Advanced Autocomplete Accessibility]
**Learning:** For complex search components with autocomplete, simple ARIA labels are insufficient. Assistive technologies require `aria-autocomplete="list"`, `aria-expanded`, and `aria-controls` on the input, along with `role="listbox"` and `role="option"` on the suggestions. Focus management (returning focus to the input after clearing) is also critical for a seamless keyboard experience.
**Action:** In search and autocomplete interfaces, always implement the full suite of ARIA attributes and ensure focus returns to the primary input after destructive or clearing actions.
