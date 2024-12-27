import { BaseLayout } from '../components/layouts/BaseLayout'
import WorkNav from '../components/workNav'

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <BaseLayout nav={<WorkNav />}>
            {children}
        </BaseLayout>
    )
} 