## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Focus Management in Search]
**Learning:** Cleared search inputs often lose focus, forcing keyboard and screen reader users to navigate back to the input. Returning focus programmatically after a "Clear" action significantly improves the interaction flow.
**Action:** Always use a `ref` to restore focus to a search input immediately after a user clicks a "Clear" or "Reset" button.
