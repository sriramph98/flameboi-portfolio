'use client'
import Image from 'next/image'
import { Card } from './Card'

interface TrackProps {
  trackName: string
  artistName: string
  platform: string
  imageUrl: string
}

export function Track({ trackName, artistName, platform, imageUrl }: TrackProps) {
  return (
    <div className='flex-shrink-0 space-y-2'>
      <Card className='aspect-square w-[calc(min(60vh,24rem))]'>
        <Image 
          className='object-contain'
          src={imageUrl}
          width={1024}
          height={1024}
          alt={`${trackName} by ${artistName}`}
          priority
        />
      </Card>
      <TrackInfo 
        trackName={trackName}
        artistName={artistName}
        platform={platform}
      />
    </div>
  )
}

function TrackInfo({ trackName, artistName, platform }: Omit<TrackProps, 'imageUrl'>) {
  return (
    <div className='space-y-1 sm:space-y-2'>
      <div className='flex flex-wrap items-center gap-x-1'>
        <p className='titlePlatform text-sm sm:text-base'>{trackName}</p>
        <p className='text-sm sm:text-base'>by</p>
        <p className='text-sm sm:text-base'>{artistName}</p>
      </div>
      <div className='flex flex-wrap items-center gap-x-1'>
        <p className='text-sm sm:text-base'>Listen now on</p>
        <p className='titlePlatform text-sm sm:text-base'>{platform}</p>
      </div>
    </div>
  )
} 