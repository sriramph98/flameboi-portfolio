'use client'
import NavBar from '../navbar'
import { Container } from '../ui/Container'
import { MobileSocials } from '../ui/MobileSocials'
import { Socials } from '../ui/Socials'

interface BaseLayoutProps {
  children: React.ReactNode
  nav?: React.ReactNode
}

export function BaseLayout({ children, nav }: BaseLayoutProps) {
  return (
    <div className="h-screen flex flex-col overflow-hidden relative">
      <Container>
        <header className='flex-none shrink-0 py-4 relative z-[10]'>
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="logo">Flameboi</h1>
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

      <main className="flex-1 flex flex-col overflow-hidden -mx-4 sm:-mx-6 md:-mx-8 relative z-[1]">
        {children}
      </main>
    </div>
  )
} 