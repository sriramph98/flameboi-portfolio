'use client'
import { motion } from "framer-motion"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        filter: 'blur(20px)',
        scale: 0.8
      }}
      animate={{ 
        opacity: 1,
        filter: 'blur(0px)',
        scale: 1
      }}
      exit={{ 
        opacity: 0,
        filter: 'blur(20px)',
        scale: 0.8
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  )
} 