import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen p-4 sm:p-6 md:p-8'>
          <header className='flex-none space-y-4'>
            <div>
              <h1 className='logo'>FLAMEBOI</h1>
              <h1 className='bio'>Independant Creative Artist</h1>
            </div>
            <NavBar/>
          </header>

          <main className='flex-1 flex flex-col'>
            {children}
          </main>

          <footer className='flex-none flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0'>
            <div className='flex flex-wrap gap-4'>
              <a href="https://www.instagram.com" className="socials">Instagram</a>
              <a href="https://www.spotify.com" className="socials">Spotify</a>
              <a href="https://www.youtube.com" className="socials">YouTube</a>
              <a href="https://www.discord.com" className="socials">Discord</a>
              <a href="https://www.apple.com/music" className="socials">Apple Music</a>
            </div>
            <p className="text-sm">designed + code by sriramph</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
