'use client';

import { CardList } from '@/app/components/ui/CardList';
import { Container } from '@/app/components/ui/Container';
import { PageTransition } from '@/app/components/ui/PageTransition';
import { SkeletonLoader } from '@/app/components/ui/SkeletonLoader';
import useSWR from 'swr';

interface MarketItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string | null;
  link: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MarketPage() {
  const { data: marketItems, error } = useSWR<MarketItem[]>(
    '/api/airtable?table=Market',
    fetcher,
    {
      refreshInterval: 5000,
      revalidateOnFocus: true,
      dedupingInterval: 1000
    }
  );

  if (error) return <div>Failed to load</div>;
  if (!marketItems) {
    return (
      <PageTransition>
        <div className="flex-1 flex flex-col">
          <Container>
            <SkeletonLoader />
          </Container>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="flex-1 flex flex-col">
        <Container>
          <CardList 
            items={marketItems.map(item => {
              let link = item.link || '#';
              if (link !== '#' && !link.startsWith('http://') && !link.startsWith('https://')) {
                link = `https://${link}`;
              }

              return {
                title: item.title || '',
                subtitle: item.price || 'Free',
                link: link,
                image: item.image || undefined
              };
            })} 
            isMarketplace={true}
            showListenButton={false}
          />
        </Container>
      </div>
    </PageTransition>
  );
}
