import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Suspense } from "react"
import "./globals.css"

const GTM_ID = "GTM-M2B5VTBW"

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
      <head>
        {/* Google Tag Manager */}
        <Script
            id="gtm-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <Suspense fallback={null}>{children}</Suspense>
      <Analytics />
      </body>
      </html>
  )
}
