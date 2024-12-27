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
    let link = record.get('Link') || '#';
    if (link !== '#' && !link.startsWith('http://') && !link.startsWith('https://')) {
      link = `https://${link}`;
    }

    return {
      title: record.get('Title'),
      description: record.get('Description'),
      platform: record.get('Platform'),
      link: link,
      image: record.get('Image')?.[0]?.url
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {items.length > 0 ? (
            items.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                subtitle={`${item.description || ''} • ${item.platform}`}
                href={item.link}
                image={item.image}
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