"use client"

import { useEffect } from "react"

/**
 * Hook to track Web Vitals (LCP, FID, CLS, TTFB, INP)
 * Sends metrics to Google Analytics
 */
export function useWebVitals() {
  useEffect(() => {
    // Import web-vitals library dynamically
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB, getINP }) => {
      getCLS(sendMetric)
      getFID(sendMetric)
      getFCP(sendMetric)
      getLCP(sendMetric)
      getTTFB(sendMetric)
      // INP (Interaction to Next Paint) - newer metric replacing FID
      if (getINP) getINP(sendMetric)
    })
  }, [])
}

function sendMetric(metric: any) {
  // Determine if metric is "good" (within Web Vitals thresholds)
  const isGood = isWebVitalGood(metric.name, metric.value)
  
  // Send to Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(metric.name === "CLS" ? metric.delta * 1000 : metric.delta),
      non_interaction: true,
      metric_status: isGood ? "good" : "needs_improvement",
    })

    // Log to console in development with thresholds
    if (process.env.NODE_ENV === "development") {
      const threshold = getWebVitalThreshold(metric.name)
      const status = isGood ? "✅ GOOD" : "⚠️ NEEDS IMPROVEMENT"
      console.log(
        `[Web Vitals] ${metric.name}: ${Math.round(metric.delta)}ms (threshold: ${threshold}ms) ${status}`
      )
    }
  }

  // Send to your custom analytics endpoint
  if (typeof window !== "undefined") {
    navigator.sendBeacon("/api/analytics/metrics", JSON.stringify({
      name: metric.name,
      value: Math.round(metric.delta),
      delta: metric.delta,
      id: metric.id,
      timestamp: metric.startTime,
      rating: metric.rating || "none",
    }))
  }
}

// Web Vitals thresholds (in ms)
function getWebVitalThreshold(metricName: string): number {
  const thresholds: Record<string, number> = {
    LCP: 2500,  // Largest Contentful Paint
    FID: 100,   // First Input Delay
    INP: 200,   // Interaction to Next Paint
    CLS: 0.1,   // Cumulative Layout Shift (unitless)
    FCP: 1800,  // First Contentful Paint
    TTFB: 800,  // Time to First Byte
  }
  return thresholds[metricName] || 0
}

// Check if metric meets "good" threshold
function isWebVitalGood(metricName: string, value: number): boolean {
  const thresholds = {
    LCP: 2500,
    FID: 100,
    INP: 200,
    CLS: 0.1,
    FCP: 1800,
    TTFB: 800,
  }
  return value <= (thresholds[metricName as keyof typeof thresholds] || Infinity)
}

export default useWebVitals
