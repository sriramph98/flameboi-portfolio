import { Container } from '../components/ui/Container';
import { PageTransition } from '../components/ui/PageTransition';

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
  const Airtable = require('airtable');
  
  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
    throw new Error('Missing Airtable environment variables');
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
}

export default async function MarketPage() {
  const marketItems = await getMarketData();

  return (
    <PageTransition>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {marketItems.length > 0 ? (
            marketItems.map((item: MarketItem) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer"
              >
                <div className="aspect-square w-full bg-neutral-100 mb-4">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      Image
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium group-hover:opacity-70 transition-opacity">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 mt-1">{item.description}</p>
                  </div>
                  <span className="text-neutral-500">${item.price}</span>
                </div>
              </a>
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
