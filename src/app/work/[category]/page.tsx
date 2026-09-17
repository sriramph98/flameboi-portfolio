'use client';

import { CardList } from '@/app/components/ui/CardList';
import { Container } from '@/app/components/ui/Container';
import { PageTransition } from '@/app/components/ui/PageTransition';
import { SkeletonLoader } from '@/app/components/ui/SkeletonLoader';
import { CATEGORY_TABLE_MAP, VALID_CATEGORIES } from '@/app/lib/constants';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CategoryPage({ params }: { params: { category: string } }) {
  const router = useRouter();
  const isValid = VALID_CATEGORIES.includes(params.category);
  const table = CATEGORY_TABLE_MAP[params.category];

  const { data: items, error } = useSWR(
    isValid ? `/api/airtable?table=${table}` : null,
    fetcher,
    {
      refreshInterval: 5000,
      revalidateOnFocus: true,
      dedupingInterval: 1000,
    }
  );

  useEffect(() => {
    if (!isValid) {
      router.push('/work/music');
    }
  }, [isValid, router]);

  if (!isValid) return null;

  if (error) return <div>Failed to load</div>;
  if (!items) {
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
          <CardList items={items} showListenButton={true} />
        </Container>
      </div>
    </PageTransition>
  );
}
