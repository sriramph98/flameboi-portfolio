import { notFound } from 'next/navigation';
import TrackList from '../../components/TrackList';

// Get data based on category
async function getData(category: string) {
  try {
    const data = await import(`./db/${category}List.json`);
    return data.default;
  } catch (error) {
    return null;
  }
}

export default async function WorkCategoryPage({ 
  params 
}: { 
  params: { category: string } 
}) {
  const data = await getData(params.category);
  
  if (!data) {
    notFound();
  }

  return <TrackList tracks={data} />;
}

export function generateStaticParams() {
  return [
    { category: 'music' },
    { category: 'mixing' },
    { category: 'editing' }
  ]
} 