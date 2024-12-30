import { CardList } from '@/app/components/ui/CardList';
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
  try {
    const Airtable = require('airtable');
    
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
        console.warn('Missing Airtable environment variables');
        return [];
      }
    }

    const base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY
    }).base(process.env.AIRTABLE_BASE_ID);

    const tableMap: { [key: string]: string } = {
      music: 'Music',
      mixing: 'Mixing'
    };

    const tableName = tableMap[category];
    if (!tableName) {
      return [];
    }

    const records = await base(tableName).select({
      view: 'Grid view'
    }).all();

    return records.map((record: AirtableRecord) => {
      const streamingOptions = ['Spotify', 'Apple Music', 'YouTube', 'SoundCloud', 'Amazon Music']
        .map(platform => ({
          platform,
          url: record.get(platform) || ''
        }))
        .filter(option => option.url !== '')
        .map(option => ({
          ...option,
          url: option.url.startsWith('http') ? option.url : `https://${option.url}`
        }));

      return {
        title: record.get('Title'),
        description: record.get('Description'),
        platform: record.get('Platform'),
        link: record.get('Link') || '#',
        image: record.get('Image')?.[0]?.url,
        streamingOptions
      };
    });
  } catch (error) {
    console.error('Error fetching work items:', error);
    return [];
  }
}

// Validate category
function isValidCategory(category: string): boolean {
  return ['music', 'mixing'].includes(category);
}

export const revalidate = 0

export default async function CategoryPage({ params }: { params: { category: string } }) {
  if (!isValidCategory(params.category)) {
    notFound();
  }

  const items = await getWorkItems(params.category);

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