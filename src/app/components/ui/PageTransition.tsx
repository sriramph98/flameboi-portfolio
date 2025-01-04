'use client'

import { AnimatePresence, motion } from "framer-motion"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ 
          opacity: 0,
          filter: 'blur(10px)',
          y: 20
        }}
        animate={{ 
          opacity: 1,
          filter: 'blur(0px)',
          y: 0
        }}
        exit={{ 
          opacity: 0,
          filter: 'blur(10px)',
          y: 20
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
        style={{
          willChange: 'transform'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
} 