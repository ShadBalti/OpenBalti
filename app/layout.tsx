import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SkipLink } from "@/components/layout/skip-link"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav"
import { baseMetadata } from "@/lib/metadata"
import { OrganizationStructuredData } from "@/components/structured-data"
import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from "@/components/auth/session-provider"
import { GoogleAnalytics } from "@/components/analytics"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })

export const metadata: Metadata = baseMetadata

/**
 * The root layout for the entire application.
 * Includes proper metadata, structured data, fonts, and theming for comprehensive SEO.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Google Analytics */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5655217642954931"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-site-verification" content="6qYt2H85MUvuaHNGAZKRY87nANOkZ7hRfCgPcs6EOKY" />
        <GoogleAnalytics />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col pb-16 md:pb-0`}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
            <SkipLink />
            <div className="relative min-h-screen flex flex-col">
              <Suspense fallback={<div className="h-16 border-b"></div>}>
                <Header />
              </Suspense>
              <Breadcrumb />
              <main id="main-content" className="flex-1" tabIndex={-1}>
                {children}
              </main>
              <Footer />
              <MobileBottomNav />
            </div>
            <Toaster />
            <OrganizationStructuredData />
          </ThemeProvider>
        </SessionProvider>
        <Analytics />
      </body>
    </html>
  )
}
