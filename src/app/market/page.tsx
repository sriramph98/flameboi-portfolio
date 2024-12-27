import { Container } from '../components/ui/Container'
import { PageTransition } from '../components/ui/PageTransition'

export default function MarketPage() {
  return (
    <PageTransition>
      <Container>
        <div className="flex items-center justify-center h-full">
          <h2 className="text-2xl">Coming Soon</h2>
        </div>
      </Container>
    </PageTransition>
  )
}
