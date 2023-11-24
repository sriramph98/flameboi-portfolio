import Image from 'next/image';
import image1 from '/public/thumbnails/170cm.png';

export default function Music() {
  return (
    <>
      <div className='flex overflow-x-auto'>

        <div>
          <div className='flex-shrink-0 mr-4 p-8 bg-slate-300 inline-block'>
            <Image
              src={image1}
              width={240}
              height={240}
              alt="Picture of the author"
            />
          </div>
          
          <div className='flex items-center space-x-2'>
            <p>Track Name</p>
            <p>by</p>
            <p>Artist Name</p>
          </div>
        </div>

      </div>
    </>
  );
}