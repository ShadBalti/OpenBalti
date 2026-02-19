## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Improving Search Interaction & Accessibility]
**Learning:** In complex search components like `AdvancedSearch`, users expect instant feedback when selecting suggestions, and the interface should automatically close dropdowns when clicking outside. From an accessibility standpoint, maintaining combobox ARIA roles (`listbox`, `option`) and ensuring focus returns to the input after clearing are critical for a seamless experience.
**Action:** Always implement a 'click outside' listener for dropdowns, ensure suggestions trigger immediate actions, and use `useRef` to manage focus programmatically during interaction resets.
