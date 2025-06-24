// app/layout.tsx
import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jetsy - Transform Business Operations",
  description: "Modernize operations, enhance productivity, and accelerate growth with our intelligent automation platform.",
  keywords: "business automation, Kenya, operations, productivity, workflow, analytics, team collaboration",
  authors: [{ name: "Jetsy Team" }],
  creator: "Jetsy",
  publisher: "Jetsy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jet.co.ke'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jetsy - Transform Business Operations",
    description: "Modernize operations, enhance productivity, and accelerate growth with our intelligent automation platform.",
    url: "https://jet.co.ke",
    siteName: "Jetsy",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jetsy - Transform Business Operations",
    description: "Modernize operations, enhance productivity, and accelerate growth with our intelligent automation platform.",
    creator: "@jetsy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme-aware meta tags */}
        <meta name="theme-color" content="hsl(221, 83%, 53%)" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="hsl(217, 91%, 60%)" media="(prefers-color-scheme: dark)" />
        
        {/* Additional theme-aware colors */}
        <meta name="msapplication-navbutton-color" content="hsl(221, 83%, 53%)" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Favicon that works with both themes */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        
        {/* Apple touch icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}