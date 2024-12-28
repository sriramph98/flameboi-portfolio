import { Card } from '@/app/components/ui/Card';
import { Container } from '@/app/components/ui/Container';
import { PageTransition } from '@/app/components/ui/PageTransition';

// Add interface for market items
interface MarketItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
  link: string;
}

// Add type for Airtable record
interface AirtableRecord {
  id: string;
  get(field: string): any;
}

async function getMarketData(): Promise<MarketItem[]> {
  try {
    const Airtable = require('airtable');
    
    if (!process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || !process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID) {
      console.warn('Missing Airtable environment variables');
      return [];
    }

    const base = new Airtable({
      apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
    }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

    const records = await base('Market').select({
      view: 'Grid view'
    }).all();

    return records.map((record: AirtableRecord) => {
      let link = record.get('Link') || '#';
      // Ensure the link starts with http:// or https://
      if (link !== '#' && !link.startsWith('http://') && !link.startsWith('https://')) {
        link = `https://${link}`;
      }

      return {
        id: record.id,
        title: record.get('Title'),
        description: record.get('Description'),
        price: record.get('Price'),
        image: record.get('Image')?.[0]?.url,
        link: link
      };
    });
  } catch (error) {
    console.error('Error fetching market data:', error);
    return [];
  }
}

export const revalidate = 0

export default async function MarketPage() {
  const marketItems = await getMarketData();

  return (
    <PageTransition>
      <Container>
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 overflow-x-auto hide-scrollbar">
          {marketItems.length > 0 ? (
            marketItems.map((item: MarketItem) => (
              <Card
                key={item.id}
                title={item.title}
                subtitle={`${item.description} • ${item.price}`}
                href={item.link}
                image={item.image}
                className="h-full flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-auto"
                isSquare={true}
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
