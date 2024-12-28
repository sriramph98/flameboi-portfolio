import { Card } from '@/app/components/ui/Card';
import { Container } from '@/app/components/ui/Container';
import { PageTransition } from '@/app/components/ui/PageTransition';
import { notFound } from 'next/navigation';

interface WorkItem {
  title: string;
  description?: string;
  platform: string;
  link: string;
  image?: string;
  streamingOptions?: Array<{ platform: string; url: string; }>;
}

interface AirtableRecord {
  id: string;
  get(field: string): any;
}

async function getWorkItems(category: string): Promise<WorkItem[]> {
  const Airtable = require('airtable');
  
  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
    throw new Error('Missing Airtable environment variables');
  }

  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
  }).base(process.env.AIRTABLE_BASE_ID);

  const tableMap: { [key: string]: string } = {
    music: 'Music',
    mixing: 'Mixing',
    editing: 'Editing'
  };

  const tableName = tableMap[category];
  if (!tableName) {
    return [];
  }

  const records = await base(tableName).select({
    view: 'Grid view'
  }).all();

  return records.map((record: AirtableRecord) => {
    const streamingOptions = [
      {
        platform: 'Spotify',
        url: `https://${record.get('Spotify')}` || '#'
      },
      {
        platform: 'Apple Music',
        url: `https://${record.get('Apple Music')}` || '#'
      },
      {
        platform: 'YouTube',
        url: `https://${record.get('YouTube')}` || '#'
      },
      {
        platform: 'SoundCloud',
        url: `https://${record.get('Sound Cloud')}` || '#'
      },
      {
        platform: 'Amazon Music',
        url: `https://${record.get('Amazon Music')}` || '#'
      }
   
    ].filter(option => option.url !== '#' && option.url !== 'https://undefined');

    return {
      title: record.get('Title'),
      description: record.get('Description'),
      platform: record.get('Platform'),
      link: record.get('Link') || '#',
      image: record.get('Image')?.[0]?.url,
      streamingOptions
    };
  });
}

// Validate category
function isValidCategory(category: string): boolean {
  return ['music', 'mixing', 'editing'].includes(category);
}

export default async function CategoryPage({ 
  params 
}: { 
  params: { category: string } 
}) {
  if (!isValidCategory(params.category)) {
    notFound();
  }

  const items = await getWorkItems(params.category);

  return (
    <PageTransition>
      <Container>
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 overflow-x-auto hide-scrollbar">
          {items.length > 0 ? (
            items.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                subtitle={item.description || ''}
                href={item.link}
                image={item.image}
                className="h-full flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-auto"
                isSquare={true}
                showListenButton={params.category !== 'editing'}
                streamingOptions={item.streamingOptions}
              />
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center h-64">
              <h2 className="text-2xl">No items available</h2>
            </div>
          )}
        </div>
      </Container>
    </PageTransition>
  )
}

export function generateStaticParams() {
  return [
    { category: 'music' },
    { category: 'mixing' },
    { category: 'editing' }
  ]
} 