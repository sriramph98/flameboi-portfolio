'use client'
import { Unbounded } from 'next/font/google'
import NavBar from '../navbar'
import { Container } from '../ui/Container'
import { Socials } from '../ui/Socials'

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
    <div className="h-[100dvh] flex flex-col">
      <Container>
        <header className='flex-none space-y-6'>
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

      <main className='flex-1 -mx-4 sm:-mx-6 md:-mx-8 overflow-auto'>
        {children}
      </main>

      <Container>
        <footer className='flex-none py-4'>
          <Socials />
        </footer>
      </Container>
    </div>
  )
} 