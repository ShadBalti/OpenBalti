/**
 * Performance optimization utilities for Core Web Vitals
 */

/**
 * Report Web Vitals metrics to analytics
 * Tracks LCP, FID, CLS, TTFB, and more
 */
export function reportWebVitals(metric: any) {
  if (typeof window !== "undefined" && window.gtag) {
    const { name, delta, value, id } = metric

    window.gtag("event", name, {
      event_category: "Web Vitals",
      value: Math.round(name === "CLS" ? delta * 1000 : delta),
      event_label: id,
      non_interaction: true,
    })
  }

  // Optional: Send to custom analytics endpoint
  if (typeof window !== "undefined") {
    console.log("[Performance]", metric.name, metric.value)
  }
}

/**
 * Image loading strategy for Largest Contentful Paint (LCP)
 * Returns optimized next/image props for hero images
 */
export const heroImageProps = {
  priority: true,
  sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px",
  quality: 85,
  placeholder: "blur" as const,
}

/**
 * Common image sizes for responsive images
 */
export const responsiveImageSizes = {
  small: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
  medium: "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 600px",
  large: "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1000px",
  full: "100vw",
}

/**
 * Preload critical resources for better performance
 * Call this in useEffect or during app initialization
 */
export function preloadCriticalResources() {
  if (typeof window === "undefined") return

  // Preload fonts if using Google Fonts
  const link = document.createElement("link")
  link.rel = "preload"
  link.as = "style"
  link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  document.head.appendChild(link)
}

/**
 * Debounce utility for reducing function call frequency
 * Useful for resize, scroll, input events
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout

  return ((...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }) as T
}

/**
 * Intersection Observer helper for lazy loading
 * Triggers callback when element is visible
 */
export function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  options?: IntersectionObserverInit
) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      callback()
      observer.unobserve(entry.target)
    }
  }, options)

  if (ref.current) {
    observer.observe(ref.current)
  }

  return () => observer.disconnect()
}

/**
 * Measure and report interaction to next paint (INP)
 */
export function measureInteraction(name: string, startTime: number) {
  const duration = performance.now() - startTime

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "INP", {
      event_category: "Web Vitals",
      value: Math.round(duration),
      event_label: name,
    })
  }

  console.log(`[INP] ${name}: ${Math.round(duration)}ms`)
}

/**
 * Get current connection speed for adaptive loading
 */
export function getConnectionSpeed(): "slow" | "normal" | "fast" {
  if (typeof window === "undefined" || !("connection" in navigator)) {
    return "normal"
  }

  const connection = (navigator as any).connection
  const effectiveType = connection?.effectiveType

  if (effectiveType === "4g") return "fast"
  if (effectiveType === "3g") return "normal"
  return "slow"
}

/**
 * Adaptive image quality based on connection
 */
export function getOptimalImageQuality(): number {
  const speed = getConnectionSpeed()

  if (speed === "slow") return 60
  if (speed === "fast") return 90
  return 75
}

export default {
  reportWebVitals,
  heroImageProps,
  responsiveImageSizes,
  preloadCriticalResources,
  debounce,
  getConnectionSpeed,
  getOptimalImageQuality,
}
