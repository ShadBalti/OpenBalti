## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search Focus and Accessibility Management]
**Learning:** Found that 'Clear Search' buttons often fail to return focus to the search input, causing keyboard users and screen readers to lose their place. Additionally, icon-only buttons in complex search components (like filter removal badges and preset deletion buttons) frequently lack `aria-label` and `type="button"`, which can lead to accessibility gaps and unintended form submissions.
**Action:** Use a React `useRef` to programmatically return focus to the input element immediately after clearing a query. Always ensure icon-only buttons have descriptive `aria-label` attributes and explicit `type="button"` declarations.
