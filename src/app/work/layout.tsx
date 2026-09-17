'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BaseLayout } from '../components/layouts/BaseLayout'
import { CATEGORIES } from '../lib/constants'

export default function WorkLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <BaseLayout
            nav={
                <div className='space-x-4'>
                    {CATEGORIES.map(({ name, path }) => (
                        <Link
                            key={path}
                            href={path}
                            className={pathname === path ? "subNavActive" : "subNavInActive"}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            }
        >
            {children}
        </BaseLayout>
    )
}
