'use client'
import { AnimatePresence, motion } from 'framer-motion'
import {
    FaAmazon,
    FaApple,
    FaSoundcloud,
    FaSpotify,
    FaYoutube
} from 'react-icons/fa'

interface StreamingOption {
  platform: string
  url: string
}

interface StreamingMenuProps {
  isOpen: boolean
  onClose: () => void
  options: StreamingOption[]
}

const PLATFORM_ICONS = {
  'Spotify': FaSpotify,
  'Apple Music': FaApple,
  'YouTube': FaYoutube,
  'SoundCloud': FaSoundcloud,
  'Amazon Music': FaAmazon,
}

export function StreamingMenu({ isOpen, onClose, options }: StreamingMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="fixed inset-0 bg-black/50 z-40"
          />
          
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-full left-0 mb-2 bg-white rounded-2xl p-4 shadow-xl z-50 w-[200px]"
          >
            <div className="space-y-2">
              {options.map((option) => {
                const Icon = PLATFORM_ICONS[option.platform as keyof typeof PLATFORM_ICONS]
                return (
                  <a
                    key={option.platform}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-3 rounded-full hover:bg-neutral-100 transition-colors flex items-center gap-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      const url = option.url.startsWith('http') ? option.url : `https://${option.url}`;
                      window.open(url, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    {Icon && <Icon className="text-xl" />}
                    {option.platform}
                  </a>
                )
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 