'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CATEGORIES } from '../lib/constants';

export default function WorkNav() {
    const pathname = usePathname();
    
    return (
        <nav className="flex flex-wrap gap-4 sm:gap-6 md:gap-8" aria-label="Work categories">
            {CATEGORIES.map((category) => (
                <Link 
                    key={category.path}
                    href={category.path}
                    className={pathname === category.path ? "subNavActive" : "subNavInActive"}
                    aria-current={pathname === category.path ? 'page' : undefined}
                >
                    {category.name}
                </Link>
            ))}
        </nav>
    )
}
  