'use client'

import { useSocialLinks } from '@/app/hooks/useSocialLinks'

export function Socials({ className = '' }: { className?: string }) {
  const { socialLinks } = useSocialLinks()

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.platform}
          href={social.url}
          {...(social.platform !== 'Email' && {
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
          className="socials"
        >
          {social.platform}
        </a>
      ))}
    </div>
  )
}
