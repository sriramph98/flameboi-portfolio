'use client';

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function SkeletonLoader() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6 py-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {[...Array(8)].map((_, i) => (
        <motion.div 
          key={i} 
          variants={item}
          className="relative flex flex-col items-center mx-auto max-w-[400px] w-full"
        >
          <div className="animate-pulse w-full">
            <div className="aspect-square w-full bg-neutral-100 mb-2 rounded-lg" />
            <div className="p-2 space-y-3">
              <div className="flex justify-between items-center">
                <div className="h-6 bg-neutral-100 rounded w-2/3" />
                <div className="h-8 bg-neutral-100 rounded-full w-24" />
              </div>
              <div className="h-4 bg-neutral-100 rounded w-1/2" />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
} 