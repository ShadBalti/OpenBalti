## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search Focus & Interactive Feedback]
**Learning:** In search-heavy interfaces, clearing a query often leaves the user's focus in a "dead" state if the button disappears or if focus isn't managed. Programmatically returning focus to the search input after clearing ensures a seamless experience for keyboard and screen reader users. Additionally, providing immediate visual feedback (spinners) for search-related async tasks (like saving presets) prevents UI flickering and duplicate actions.
**Action:** Always use a `ref` on search inputs to restore focus after 'clear' actions. Use granular loading states for all secondary async actions (saving, deleting) to maintain interface stability.
