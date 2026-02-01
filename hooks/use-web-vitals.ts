"use client"

import { useEffect } from "react"

/**
 * Hook to track Web Vitals (LCP, FID, CLS, TTFB, INP)
 * Sends metrics to Google Analytics
 */
export function useWebVitals() {
  useEffect(() => {
    // Import web-vitals library dynamically
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(sendMetric)
      getFID(sendMetric)
      getFCP(sendMetric)
      getLCP(sendMetric)
      getTTFB(sendMetric)
    })
  }, [])
}

function sendMetric(metric: any) {
  // Send to Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(metric.name === "CLS" ? metric.delta * 1000 : metric.delta),
      non_interaction: true,
    })

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("[Web Vitals]", metric.name, Math.round(metric.delta))
    }
  }
}

export default useWebVitals
