'use client'
import { Unbounded } from 'next/font/google'
import NavBar from '../navbar'
import { Container } from '../ui/Container'
import { MobileSocials } from '../ui/MobileSocials'
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
    <div className="h-screen flex flex-col overflow-hidden">
      <Container>
        <header className='flex-none shrink-0 py-4'>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className={`logo ${unbounded.className}`}>FLAMEBOI</h1>
              <h1 className='bio font-medium text-black/80'>Independent Creative Artist</h1>
            </div>
            <div className="mt-1 md:hidden">
              <MobileSocials />
            </div>
            <div className="mt-1 hidden md:block">
              <Socials />
            </div>
          </div>
          <div className="space-y-1">
            <NavBar/>
            {nav}
          </div>
        </header>
      </Container>

      <main className="flex-1 flex flex-col overflow-hidden -mx-4 sm:-mx-6 md:-mx-8">
        {children}
      </main>
    </div>
  )
} 