## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search Focus & Interaction Polish]
**Learning:** Returning focus to the search input after clearing it programmatically (using a React `ref`) significantly improves the "flow" for power users and keyboard/screen reader accessibility. Additionally, adding `type="button"` to secondary icons inside forms/search components is a critical safety measure to prevent unintended form submissions.
**Action:** Always implement focus management for 'clear' buttons and ensure all icon-only buttons have explicit types and ARIA labels.
