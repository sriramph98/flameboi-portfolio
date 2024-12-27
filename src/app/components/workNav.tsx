'use client'
import { motion } from "motion/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CATEGORIES } from '../lib/constants';

export default function WorkNav() {
    const pathname = usePathname();
    
    // Check if current path is root or /work to default to music
    const isActiveLink = (path: string) => {
        if (path === '/work/music') {
            return pathname === '/work/music' || pathname === '/work' || pathname === '/';
        }
        return pathname === path;
    };
    
    return (
        <nav className="flex flex-wrap gap-4 sm:gap-6 md:gap-8" aria-label="Work categories">
            {CATEGORIES.map((category) => (
                <motion.div
                    key={category.path}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link 
                        href={category.path}
                        className={isActiveLink(category.path) ? "subNavActive" : "subNavInActive"}
                        aria-current={isActiveLink(category.path) ? 'page' : undefined}
                    >
                        {category.name}
                    </Link>
                </motion.div>
            ))}
        </nav>
    )
}
  