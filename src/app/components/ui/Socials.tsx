interface Social {
  id: string;
  platform: string;
  url: string;
}

interface AirtableRecord {
  id: string;
  get(field: string): any;
}

async function getSocials(): Promise<Social[]> {
  try {
    const Airtable = require('airtable');
    
    if (!process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || !process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID) {
      console.warn('Missing Airtable environment variables');
      return [];
    }

    const base = new Airtable({
      apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
    }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

    const records = await base('Socials').select({
      view: 'Grid view'
    }).all();

    return records.map((record: AirtableRecord) => ({
      id: record.id,
      platform: record.get('Platform'),
      url: record.get('URL')
    }));
  } catch (error) {
    console.error('Error fetching socials:', error);
    return [];
  }
}

export const revalidate = 0

export async function Socials() {
  const socials = await getSocials();

  return (
    <div className='flex flex-wrap gap-4'>
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="socials"
        >
          {social.platform}
        </a>
      ))}
    </div>
  );
} 