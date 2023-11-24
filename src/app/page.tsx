import { FadeIn, SlideInBottom } from './animations/animation';
import NavBar from './components/navbar';
import Work from './work';
import Market from './market';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        {/* Other head elements like title, meta tags can also go here */}
      </Head>

<div className='flex flex-col justify-between  h-screen p-8 '>
        <div className='h-48'>
          <h1 className='logo'>FLAMEBOI</h1>
          <h1 className='bio'>Independant Creative Artist</h1>
        </div>

        <div className='space-y-4'>  <NavBar/>
        
        

        <div className='flex-grow overflow-visible'><Work/></div>
</div>
        
        <footer className='flex  justify-between '>
          <div className='space-x-4'>
            <a href="https://www.instagram.com" className="socials">Instagram</a>
            <a href="https://www.spotify.com" className="socials">Spotify</a>
            <a href="https://www.youtube.com" className="socials">YouTube</a>
            <a href="https://www.discord.com" className="socials">Discord</a>
            <a href="https://www.apple.com/music" className="socials">Apple Music</a>
          </div>
          <p>designed by sriramph</p>
        </footer>
      </div>


      
    </>
  );
}