import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import { Inter_Tight, UnifrakturMaguntia } from 'next/font/google'
import type { ReactElement } from 'react'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight'
})

const unifraktur = UnifrakturMaguntia({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unifraktur'
})

export const metadata: Metadata = {
  title: 'Flameboi',
  description: 'Independent Creative Artist',
  metadataBase: new URL('https://flameboi.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000'
      }
    ]
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Flameboi'
  },
  openGraph: {
    title: 'Flameboi',
    description: 'Independent Creative Artist',
    url: 'https://flameboi.com',
    siteName: 'Flameboi',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flameboi - Independent Creative Artist'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flameboi',
    description: 'Independent Creative Artist',
    images: ['/images/og-image.jpg'],
    creator: '@flameboi'
  }
}

export const viewport = {
  themeColor: 'white',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} ${unifraktur.variable} font-sans`}>
        <div className='flex flex-col min-h-screen blur-in'>
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}
