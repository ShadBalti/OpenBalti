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
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KNLNXHP2');</script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5655217642954931"
     crossorigin="anonymous"></script>
        <meta name="google-site-verification" content="6qYt2H85MUvuaHNGAZKRY87nANOkZ7hRfCgPcs6EOKY" />
        <GoogleAnalytics />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
       <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNLNXHP2"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
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
