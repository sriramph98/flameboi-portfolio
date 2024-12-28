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
    
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      console.warn('Missing Airtable environment variables');
      return [];
    }

    const base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY
    }).base(process.env.AIRTABLE_BASE_ID);

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
      <div className="flex-1 flex flex-col">
        <Container>
          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory h-[calc(100vh-160px)] items-center gap-6">
            {marketItems.length > 0 ? (
              marketItems.map((item: MarketItem) => (
                <Card
                  key={item.id}
                  title={item.title}
                  subtitle={`${item.description} • ${item.price}`}
                  href={item.link}
                  image={item.image}
                  className="w-full md:w-[280px] flex-shrink-0 snap-center first:ml-6 last:mr-6 md:first:ml-0 md:last:mr-0"
                  isSquare={true}
                />
              ))
            ) : (
              <div className="col-span-full flex items-center justify-center h-64">
                <h2 className="text-2xl font-semibold">No items available</h2>
              </div>
            )}
          </div>
        </Container>
      </div>
    </PageTransition>
  )
}
