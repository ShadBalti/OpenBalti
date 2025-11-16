"use client"

import Script from "next/script"

const GA_TRACKING_ID = "G-3L8DL3BQPD"

/**
 * A client-side component that injects the Google Analytics tracking script into the application.
 * It uses the `next/script` component for optimized script loading. This component should be included
 * in the root layout to ensure that page views are tracked across the entire site.
 *
 * @returns {JSX.Element} A fragment containing the Google Analytics script tags.
 */
export function GoogleAnalytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  )
}
