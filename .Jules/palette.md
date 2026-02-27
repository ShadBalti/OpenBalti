## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search UX & Focus Management]
**Learning:** Implementing 'Clear' functionality in search inputs requires not just resetting state, but also returning focus to the input element to maintain a seamless keyboard/screen-reader experience. Furthermore, enhancing search suggestions with listbox roles and aria-autocomplete properties significantly improves the discoverability of the interface for assistive technologies.
**Action:** Use a React `useRef` to programmatically focus the search input after a clear action and always implement `aria-controls`, `aria-expanded`, and `aria-autocomplete` for search inputs with dropdown suggestions.
