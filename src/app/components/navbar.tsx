'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();
    const isWorkActive = pathname?.startsWith('/work');

    return (
        <div className="flex space-x-8">
            <Link href="/work" className={isWorkActive ? "navActive" : "navInActive"}>
                Work
            </Link>
            <Link href="/market" className={!isWorkActive ? "navActive" : "navInActive"}>
                Marketplace
            </Link>
        </div>
    )
}
  