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
  const Airtable = require('airtable');
  
  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
    throw new Error('Missing Airtable environment variables');
  }

  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
  }).base(process.env.AIRTABLE_BASE_ID);

  const records = await base('Socials').select({
    view: 'Grid view'
  }).all();

  return records.map((record: AirtableRecord) => ({
    id: record.id,
    platform: record.get('Platform'),
    url: record.get('URL')
  }));
}

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