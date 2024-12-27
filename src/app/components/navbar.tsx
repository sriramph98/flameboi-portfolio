'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();
    
    // Check if current path is in work section
    const isWorkActive = pathname.includes('/work');
    
    return (
        <div className='space-x-8'>
            <Link 
                href="/work/music" 
                className={isWorkActive ? "navActive" : "navInActive"}
            >
                Work
            </Link>
            <Link 
                href="/market" 
                className={pathname === '/market' ? "navActive" : "navInActive"}
            >
                Marketplace
            </Link>
        </div>
    )
}
  