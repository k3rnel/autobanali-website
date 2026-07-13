import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Autobanali.am - Բանալիների վերականգնում և կրկնօրինակում",
  description:
      "Ավտոմեքենաների բանալիների պատրաստում, կրկնօրինակում և մասնագիտացված ծրագրավորում, դռների անվնաս բացում։ Ձեզ հարմար վայրում և 24/7 ռեժիմով՝ Երևանում և մարզերում։",
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
    title: "Autobanali.am",
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
