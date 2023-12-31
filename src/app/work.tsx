import Image from 'next/image';
import MusicList from './db/musicList.json';

export default function Work() {
  return (
    <>
<div className='space-y-8'>
<div className="space-x-8">
        <ul className="text-2xl inline-block subNavActive">Music </ul>
        <ul className="text-2xl inline-block subNavInActive">Mixing & Mastering </ul>
        <ul className="text-2xl inline-block subNavInActive">Editing </ul>
    </div>

      <div className='flex overflow-x-auto hide-scrollbar space-x-8'>
        {MusicList.map((track) => (
          <div key={track.id} className='flex-shrink-0  space-y-8'>
            <div className='w-96 h-96 inline-flex items-center p-8 bg-cardBG'>
              <Image 
                className='object-contain drop drop-shadow-custom '
                src={track.imageUrl}
                width={1024}
                height={1024}
                alt="Album Cover"
              />
            </div>
            <div>
              <div className='flex items-center space-x-1'>
                <p className='titlePlatform'>{track.trackName}</p>
                <p>by</p>
                <p>{track.artistName}</p>
              </div>
              <div className='flex items-center space-x-1'>
                <p>Listen now on</p>
                <p className='titlePlatform'>{track.platform}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
</div>

    </>
  );
}
