## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-20 - [Enhanced Search UX & Accessibility]
**Learning:** A standard search input requires more than just a placeholder to be accessible. Implementing the WAI-ARIA Combobox pattern (aria-autocomplete, aria-expanded, aria-controls, role="listbox", role="option") and providing programmatic focus management when clearing the search significantly improves the experience for screen reader and keyboard users.
**Action:** In search components with suggestions, use a React `useRef` to return focus to the input after clearing, and implement the full ARIA suite for listbox-style autocomplete.
