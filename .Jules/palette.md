## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2026-02-26 - [Search Suggestions & Focus Management]
**Learning:** In search components with dropdown suggestions, relying solely on input focus can cause the dropdown to disappear before a click on a suggestion is registered. Additionally, the dictionary page can fail silently if database connections aren't correctly imported in server components, leading to a poor initial user experience.
**Action:** Implement a small `setTimeout` (e.g., 200ms) in the `onBlur` handler of search inputs to allow for suggestion clicks. Always ensure `dbConnect` is explicitly imported and called in Next.js server components that access the database.
