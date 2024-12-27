'use client'
import { Track } from './ui/Track'

interface TrackData {
  id: string
  trackName: string
  artistName: string
  platform: string
  imageUrl: string
}

interface TrackListProps {
  tracks: TrackData[]
}

export default function TrackList({ tracks }: TrackListProps) {
  return (
    <section 
      className='flex overflow-x-auto hide-scrollbar gap-4 sm:gap-6 md:gap-8' 
      aria-label="Track list"
    >
      {tracks.map((item) => (
        <Track
          key={item.id}
          trackName={item.trackName}
          artistName={item.artistName}
          platform={item.platform}
          imageUrl={item.imageUrl}
        />
      ))}
    </section>
  )
} 