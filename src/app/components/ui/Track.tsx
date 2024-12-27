'use client'
import { motion } from "motion/react"
import Image from 'next/image'
import { Card } from './Card'

interface TrackProps {
  trackName: string
  artistName: string
  platform: string
  imageUrl: string | null
}

export function Track({ trackName, artistName, platform, imageUrl }: TrackProps) {
  if (!imageUrl) {
    return null; // Don't render track without image
  }

  return (
    <div className='flex-shrink-0 space-y-1'>
      <Card className='aspect-square w-[calc(min(45vh,24rem))]'>
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
    <motion.div 
      className='space-y-1 sm:space-y-2 max-sm:text-center'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className='flex flex-wrap items-center max-sm:justify-center gap-x-1'>
        <p className='titlePlatform text-sm sm:text-base'>{trackName}</p>
        <p className='text-sm sm:text-base'>by</p>
        <p className='text-sm sm:text-base'>{artistName}</p>
      </div>
      <div className='flex flex-wrap items-center max-sm:justify-center gap-x-1'>
        <p className='text-sm sm:text-base'>Listen now on</p>
        <p className='titlePlatform text-sm sm:text-base'>{platform}</p>
      </div>
    </motion.div>
  )
} 