'use client'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function NotFound() {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold">404</h2>
      <p>This page could not be found.</p>
      <Link href="/work/music" className="text-neutral-400 hover:text-black transition">
        Return Home
      </Link>
    </motion.div>
  )
} 