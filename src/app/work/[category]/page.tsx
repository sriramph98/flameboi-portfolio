import { getTracksByCategory } from '@/lib/airtable';
import { notFound } from 'next/navigation';
import TrackList from '../../components/TrackList';
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

  try {
    const tracks = await getTracksByCategory(params.category);
    
    if (!tracks || tracks.length === 0) {
      console.log('No tracks found or error occurred');
      // Handle empty state
      return <div>No tracks found</div>;
    }

    const content = (
      <TrackList tracks={tracks} />
    );

    return <PageTransition>{content}</PageTransition>;
  } catch (error) {
    console.error('Error fetching tracks:', error);
    return <div>Error loading tracks</div>;
  }
}

export function generateStaticParams() {
  return [
    { category: 'music' },
    { category: 'mixing' },
    { category: 'editing' }
  ]
} 