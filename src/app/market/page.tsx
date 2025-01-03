import { CardList } from '@/app/components/ui/CardList';
import { Container } from '@/app/components/ui/Container';
import { PageTransition } from '@/app/components/ui/PageTransition';
import { Attachment } from 'airtable';

// Add interface for market items
interface MarketItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image?: Attachment;
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
        title: record.get('Title') || '',
        description: record.get('Description') || '',
        price: record.get('Price') || 'Free',
        image: record.get('Image')?.[0],
        link: link
      };
    });
  } catch (error) {
    console.error('Error fetching market data:', error);
    return [];
  }
}

export const revalidate = false

export default async function MarketPage() {
  const marketItems = await getMarketData();

  return (
    <PageTransition>
      <div className="flex-1 flex flex-col">
        <Container>
          <CardList 
            items={marketItems.map(item => ({
              title: item.title,
              subtitle: item.price,
              link: item.link,
              image: item.image?.url
            }))} 
            isMarketplace={true}
            showListenButton={false}
          />
        </Container>
      </div>
    </PageTransition>
  )
}
