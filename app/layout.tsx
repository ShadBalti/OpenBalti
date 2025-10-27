import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SkipLink } from "@/components/layout/skip-link"
import { baseMetadata } from "@/lib/metadata"
import { OrganizationStructuredData } from "@/components/structured-data"
import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from "@/components/auth/session-provider"
import { GoogleAnalytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })

export const metadata: Metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5655217642954931"
     crossorigin="anonymous"></script>
        <meta name="google-site-verification" content="6qYt2H85MUvuaHNGAZKRY87nANOkZ7hRfCgPcs6EOKY" />
        <GoogleAnalytics />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <SkipLink />
            <div className="relative min-h-screen flex flex-col">
              <Suspense fallback={<div className="h-16 border-b"></div>}>
                <Header />
              </Suspense>
              <main id="main-content" className="flex-1" tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
            <OrganizationStructuredData />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
