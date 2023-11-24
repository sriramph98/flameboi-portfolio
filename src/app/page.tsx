import { FadeIn, SlideInBottom } from './animations/animation';
import NavBar from './components/navbar';
import SubNav from './components/subNav';
import Music from './music';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        {/* Other head elements like title, meta tags can also go here */}
      </Head>

<div className='flex flex-col justify-between h-screen p-8'>
        <div className='h-48'>
          <h1 className='logo'>FLAMEBOI</h1>
          <h1 className='bio'>Independant Creative Artist</h1>
        </div>

        <div className='flex-grow space-y-4'>
          <NavBar/>
          <SubNav/>
        </div>

        <div className='flex-grow'><Music/></div>

        <footer className='flex justify-between items-center'>
          <div>
            <a href="https://www.instagram.com" className="inline-block mr-4">Instagram</a>
            <a href="https://www.spotify.com" className="inline-block mr-4">Spotify</a>
            <a href="https://www.youtube.com" className="inline-block mr-4">YouTube</a>
            <a href="https://www.discord.com" className="inline-block mr-4">Discord</a>
            <a href="https://www.apple.com/music" className="inline-block mr-4">Apple Music</a>
          </div>
          <p>designed by sriramph</p>
        </footer>
      </div>


      
    </>
  );
}