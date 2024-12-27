import WorkNav from '../components/workNav'

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="space-y-8">
            <WorkNav />
            {children}
        </div>
    )
} 