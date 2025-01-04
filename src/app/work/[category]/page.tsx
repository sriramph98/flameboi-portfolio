'use client';
import { CardList } from '@/app/components/ui/CardList';
import { Container } from '@/app/components/ui/Container';
import { PageTransition } from '@/app/components/ui/PageTransition';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CategoryPage({ params }: { params: { category: string } }) {
  const router = useRouter();
  
  const { data: items, error } = useSWR(
    `/api/airtable?table=${params.category === 'music' ? 'Music' : 'Mixing'}`,
    fetcher,
    { 
      refreshInterval: 5000,
      revalidateOnFocus: true,
      dedupingInterval: 1000
    }
  );

  useEffect(() => {
    if (!['music', 'mixing'].includes(params.category)) {
      router.push('/work/music');
    }
  }, [params.category, router]);

  if (!['music', 'mixing'].includes(params.category)) {
    return null;
  }

  if (error) return <div>Failed to load</div>;
  if (!items) return <div>Loading...</div>;

  return (
    <PageTransition>
      <div className="flex-1 flex flex-col">
        <Container>
          <CardList 
            items={items} 
            showListenButton={true}
          />
        </Container>
      </div>
    </PageTransition>
  );
} 