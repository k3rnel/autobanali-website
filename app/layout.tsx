import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Autobanali.am - Professional Automobile Locksmith Services",
  description:
      "Professional automobile locksmith services available 24/7. Emergency lockouts, key programming, and security solutions in Texas.",

  // ✅ Added icons & manifest
  icons: {
    icon: [
      { url: "/images/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/images/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/favicon/favicon.ico",
    apple: [
      { url: "/images/favicon/apple-touch-icon.png", sizes: "180x180" },
    ],
  },

  appleWebApp: {
    title: "Autobanali",
  },

  manifest: "/images/favicon/site.webmanifest",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <Suspense fallback={null}>{children}</Suspense>
      <Analytics />
      </body>
      </html>
  )
}
