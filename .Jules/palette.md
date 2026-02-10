## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search Interface Focus & Safety]
**Learning:** In complex search interfaces with multiple interactive elements like filters and presets, returning focus to the input after clearing is essential for maintaining keyboard flow. Additionally, explicitly setting `type="button"` on these elements is crucial to prevent accidental form submissions when nested within a search form.
**Action:** Always implement focus management with `useRef` when adding "clear" or similar interaction-resetting buttons, and ensure all icon-only buttons in forms have both an `aria-label` and `type="button"`.
