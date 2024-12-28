'use client'

import { FaApple, FaDiscord, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const SOCIAL_LINKS = [
  { platform: 'Instagram', url: 'https://instagram.com/flameboi', icon: FaInstagram },
  { platform: 'Spotify', url: 'https://open.spotify.com/artist/flameboi', icon: FaSpotify },
  { platform: 'YouTube', url: 'https://youtube.com/@flameboi', icon: FaYoutube },
  { platform: 'Discord', url: 'https://discord.gg/flameboi', icon: FaDiscord },
  { platform: 'Apple Music', url: 'https://music.apple.com/artist/flameboi', icon: FaApple },
  { platform: 'Email', url: 'mailto:contact@flameboi.com', icon: MdEmail },
]

export function ClientSocials() {
  return (
    <div className='flex flex-col gap-3'>
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          >
            <Icon className="text-xl" />
            {social.platform}
          </a>
        )
      })}
    </div>
  )
} 