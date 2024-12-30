import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import { Inter_Tight, UnifrakturMaguntia } from 'next/font/google'
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
}

export const viewport = {
  themeColor: 'white',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap"
          as="style"
        />
      </head>
      <body className={`${interTight.variable} ${unifraktur.variable} font-sans`}>
        <div className='flex flex-col min-h-screen blur-in'>
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}
