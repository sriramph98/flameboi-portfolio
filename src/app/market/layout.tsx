import { BaseLayout } from '../components/layouts/BaseLayout'

export default function MarketLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <BaseLayout>
            {children}
        </BaseLayout>
    )
} 