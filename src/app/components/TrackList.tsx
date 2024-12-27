'use client'
import { Track } from './ui/Track'

interface TrackData {
  id: string
  trackName: string
  artistName: string
  platform: string
  imageUrl: string | null
}

interface TrackListProps {
  tracks: TrackData[]
}

export default function TrackList({ tracks }: TrackListProps) {
  return (
    <section 
      className='h-full flex overflow-x-auto hide-scrollbar'
      aria-label="Track list"
    >
      <div className='flex min-w-full px-4 sm:px-6 md:px-8 sm:gap-6 md:gap-8 items-center'>
        {tracks.map((item) => (
          <div 
            key={item.id} 
            className='max-sm:flex-none max-sm:w-full max-sm:h-full max-sm:flex max-sm:items-center max-sm:justify-center max-sm:snap-center'
          >
            <Track
              trackName={item.trackName}
              artistName={item.artistName}
              platform={item.platform}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  )
} 