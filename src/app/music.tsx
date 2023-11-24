import Image from 'next/image';
import MusicList from './db/musicList.json';

export default function Music() {
  return (
    <>
      <div className='flex overflow-x-auto hide-scrollbar'>
        {MusicList.map((track) => (
          <div key={track.id} className='flex-shrink-0 mr-4 space-y-8'>
            <div className='w-64 h-64 inline-flex items-center p-8 bg-neutral-200'>
              <Image 
                className='object-contain'
                src={track.imageUrl}
                width={340}
                height={340}
                alt="Album Cover"
              />
            </div>
            <div>
              <div className='flex items-center space-x-1'>
                <p>{track.trackName}</p>
                <p>by</p>
                <p>{track.artistName}</p>
              </div>
              <div className='flex items-center space-x-1'>
                <p>Listen now on</p>
                <p>{track.platform}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
