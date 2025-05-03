import type React from "react"
import "./globals.css"

export const metadata = {
  title: "OpenBalti Dictionary",
  description: "Explore and contribute to the digital preservation of the Balti language",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
