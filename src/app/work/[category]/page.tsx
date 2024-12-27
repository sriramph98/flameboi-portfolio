import { getTracksByCategory } from '@/lib/airtable';
import { notFound } from 'next/navigation';
import TrackList from '../../components/TrackList';
import { Container } from '../../components/ui/Container';
import { PageTransition } from '../../components/ui/PageTransition';

// Validate category
function isValidCategory(category: string): boolean {
  return ['music', 'mixing', 'editing'].includes(category);
}

export default async function WorkCategoryPage({ 
  params 
}: { 
  params: { category: string } 
}) {
  if (!isValidCategory(params.category)) {
    notFound();
  }

  const tracks = await getTracksByCategory(params.category);

  const content = tracks.length > 0 ? (
    <TrackList tracks={tracks} />
  ) : (
    <Container>
      <div className="flex items-center justify-center h-full">
        <h2 className="text-2xl">No tracks available</h2>
      </div>
    </Container>
  );

  return <PageTransition>{content}</PageTransition>;
}

export function generateStaticParams() {
  return [
    { category: 'music' },
    { category: 'mixing' },
    { category: 'editing' }
  ]
} 