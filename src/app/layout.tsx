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
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Flameboi'
  },
  openGraph: {
    title: 'Flameboi',
    description: 'Independent Creative Artist',
    siteName: 'Flameboi',
    url: 'https://flameboi.com',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flameboi - Independent Creative Artist',
        type: 'image/jpeg'
      }
    ],
    locale: 'en_US',
    type: 'profile',
    firstName: 'Flameboi',
    username: 'flameboi',
    audio: [
      {
        url: '/audio/preview.mp3',
        type: 'audio/mpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flameboi',
    description: 'Independent Creative Artist',
    images: {
      url: '/images/og-image.jpg',
      alt: 'Flameboi - Independent Creative Artist',
      width: 1200,
      height: 600
    },
    creator: '@flameboi',
  },
  alternates: {
    canonical: 'https://flameboi.com',
    languages: {
      'en-US': 'https://flameboi.com',
    }
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
