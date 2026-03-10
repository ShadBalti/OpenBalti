## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2026-02-18 - [Search Suggestion Interaction & Accessibility]
**Learning:** In search interfaces with autocomplete, users expect the suggestions dropdown to close when clicking outside or when clearing the search. Additionally, icon-only buttons for clearing search or deleting items must have `type="button"` and `aria-label` to be accessible and prevent form submission.
**Action:** Always implement a 'click outside' listener for dropdowns/suggestions and ensure all icon-only buttons have descriptive ARIA labels and explicit types. Ensure focus management (e.g., returning focus to input after clear) for a smoother experience.
