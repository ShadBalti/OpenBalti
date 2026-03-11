## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search UX & Focus Management]
**Learning:** In complex search interfaces with multiple interactive elements (clear buttons, filter badges, presets), icon-only buttons are frequently missing ARIA labels. Additionally, clearing a search query often leaves the user's focus in a disconnected state, which is jarring for keyboard and screen reader users.
**Action:** Always implement a `useRef` on the primary search input to programmatically return focus after a 'clear' action. Ensure all secondary icon-only buttons (like filter removal or preset deletion) have dynamic ARIA labels that include the context (e.g., "Remove [Category] filter").
