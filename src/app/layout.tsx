import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/navbar'



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
    
    <html lang="en">
      <body className={inter.className}>

      <div className='flex flex-col justify-between  h-screen p-8 '>
        <div className='h-48'>
          <h1 className='logo'>FLAMEBOI</h1>
          <h1 className='bio'>Independant Creative Artist</h1>
        </div>

        <div className='space-y-4'>  <NavBar/>
        <div>{children}</div>


        <footer className='flex  justify-between '>
          <div className='space-x-4'>
            <a href="https://www.instagram.com" className="socials">Instagram</a>
            <a href="https://www.spotify.com" className="socials">Spotify</a>
            <a href="https://www.youtube.com" className="socials">YouTube</a>
            <a href="https://www.discord.com" className="socials">Discord</a>
            <a href="https://www.apple.com/music" className="socials">Apple Music</a>
          </div>
          <p>designed + code by sriramph</p>
        </footer>
      

        
        </div>
</div>

      </body>
      
    </html>
  )
}
