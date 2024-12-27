import type { Metadata } from 'next'
import { Inter_Tight, Unbounded } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({ 
  subsets: ['latin'],
  display: 'swap',
})

const unbounded = Unbounded({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flameboi',
  description: 'Independant Creative Artist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={interTight.className}>
        <div className='flex flex-col min-h-screen p-4 sm:p-6 md:p-8'>
          {children}
        </div>
      </body>
    </html>
  )
}
