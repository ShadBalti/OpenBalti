## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search UX & Interaction Refinement]
**Learning:** Users expect search suggestions to be immediately actionable and accessible. Simply filling an input field upon clicking a suggestion adds friction; it should trigger the search action immediately. Furthermore, complex search components require robust ARIA attributes (role="listbox", role="option", aria-controls) to be truly inclusive.
**Action:** In search and autocomplete components, ensure that selecting a suggestion (via click or enter) immediately executes the search. Always implement proper listbox/combobox ARIA attributes and use focus management (returning focus to the input after clearing) to maintain a seamless flow for assistive technology users.
