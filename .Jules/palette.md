## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-14 - [Search Accessibility & Refined Interaction]
**Learning:** Search components with dropdown suggestions require a combination of focus management (returning focus to input after clear), click-outside detection for better mobile/desktop UX, and specific ARIA attributes (`role="listbox"`, `role="option"`, `aria-selected`, `aria-autocomplete`) to ensure full accessibility and pass modern linting rules.
**Action:** When implementing or improving search bars, always use a container ref for click-outside logic and an input ref for focus management. Ensure all suggestion items are semantically correctly marked for screen readers.
