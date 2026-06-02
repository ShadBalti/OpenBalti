export {}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }

  // eslint-disable-next-line no-var
  var mongoose:
    | {
        conn: typeof import("mongoose") | null
        promise: Promise<typeof import("mongoose")> | null
      }
    | undefined

  // eslint-disable-next-line no-var
  var mongooseListenersAdded: boolean | undefined
}
