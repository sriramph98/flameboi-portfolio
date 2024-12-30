'use client'

import { useSocialLinks } from '@/app/hooks/useSocialLinks'

export function ClientSocials() {
  const { socialLinks, PLATFORM_ICONS } = useSocialLinks()

  return (
    <div className='flex flex-col gap-3'>
      {socialLinks.map((social) => {
        const Icon = PLATFORM_ICONS[social.platform]
        if (!Icon) return null
        return (
          <a
            key={social.platform}
            href={social.url}
            {...(social.platform !== 'Email' && {
              target: "_blank",
              rel: "noopener noreferrer"
            })}
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