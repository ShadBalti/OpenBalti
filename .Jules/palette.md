## 2025-05-14 - [Accessibility & Feedback in Forms]
**Learning:** Found a pattern where icon-only buttons (especially 'remove' buttons in Badges and Lists) and form inputs lacked necessary ARIA labels for screen reader accessibility. Additionally, asynchronous form submissions lacked visual loading feedback, which can lead to double-submissions and user confusion.
**Action:** When working with shadcn/ui components or custom forms, always verify that icon-only buttons have descriptive `aria-label` attributes and that submit buttons implement a loading state (spinner + disabled state) managed via a `try...finally` block in the parent component.

## 2025-05-15 - [Search UX & Focus Management]
**Learning:** In search interfaces with autocomplete suggestions, users benefit from immediate focus return after clearing a query and clear ARIA roles (`listbox`, `option`) for screen reader support. Additionally, `useCallback` functions used in `useEffect` must be defined before the hook to avoid hoisted-variable initialization errors in non-hoisted contexts.
**Action:** Implement `aria-autocomplete="list"` and `aria-expanded` on search inputs. Use a `ref` to programmatically return focus after clear actions. Always place stable function definitions (`useCallback`) above the effects that depend on them.
