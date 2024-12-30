'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BaseLayout } from '../components/layouts/BaseLayout'

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <BaseLayout
            nav={
                <div className='space-x-4'>
                    <Link 
                        href="/work/music" 
                        className={pathname === '/work/music' ? "subNavActive" : "subNavInActive"}
                    >
                        Music
                    </Link>
                    <Link 
                        href="/work/mixing" 
                        className={pathname === '/work/mixing' ? "subNavActive" : "subNavInActive"}
                    >
                        Mixing
                    </Link>
                </div>
            }
        >
            {children}
        </BaseLayout>
    )
} 