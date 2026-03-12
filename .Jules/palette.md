## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search UX & Interaction Patterns]
**Learning:** In search interfaces, users expect selection (from suggestions) to be a terminal action. Requiring an extra "Search" click after selecting a suggestion adds unnecessary friction. Additionally, focus management after clearing a search query is essential for accessibility and fluidity.
**Action:** Implement immediate search on suggestion click and use React refs to restore focus after programmatic input clearing.
