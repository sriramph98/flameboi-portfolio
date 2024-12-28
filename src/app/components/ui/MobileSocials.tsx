'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FaAt } from 'react-icons/fa'
import { ClientSocials } from './ClientSocials'

export function MobileSocials() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative z-[100]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors relative z-[100] font-semibold"
      >
        <FaAt className="text-lg" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[90]"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute right-0 top-full mt-2 bg-white rounded-xl p-4 shadow-xl z-[100] min-w-[200px]"
              onClick={(e) => e.stopPropagation()}
            >
              <ClientSocials />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 