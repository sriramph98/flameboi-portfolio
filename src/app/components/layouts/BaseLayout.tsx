'use client'
import { Unbounded } from 'next/font/google'
import NavBar from '../navbar'
import { Container } from '../ui/Container'

const unbounded = Unbounded({ 
  subsets: ['latin'],
  display: 'swap',
})

interface BaseLayoutProps {
  children: React.ReactNode
  nav?: React.ReactNode
}

export function BaseLayout({ children, nav }: BaseLayoutProps) {
  return (
    <div className="h-screen flex flex-col">
      <Container>
        <header className='flex-none space-y-6 pt-4 sm:pt-6 md:pt-8'>
          <div>
            <h1 className={`logo ${unbounded.className}`}>FLAMEBOI</h1>
            <h1 className='bio'>Independant Creative Artist</h1>
          </div>
          <div className="space-y-2">
            <NavBar/>
            {nav}
          </div>
        </header>
      </Container>

      <main className='flex-1 overflow-hidden mt-12 -mx-4 sm:-mx-6 md:-mx-8'>
        {children}
      </main>

      <Container>
        <footer className='flex-none flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 pb-4 sm:pb-6 md:pb-8'>
          <div className='flex flex-wrap gap-4'>
            <a href="https://www.instagram.com" className="socials">Instagram</a>
            <a href="https://www.spotify.com" className="socials">Spotify</a>
            <a href="https://www.youtube.com" className="socials">YouTube</a>
            <a href="https://www.discord.com" className="socials">Discord</a>
            <a href="https://www.apple.com/music" className="socials">Apple Music</a>
          </div>
          <p className="text-sm">designed + code by sriramph</p>
        </footer>
      </Container>
    </div>
  )
} 