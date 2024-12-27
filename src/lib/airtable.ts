import Airtable from "airtable";

// Add debug logging
console.log("Airtable Environment Check:", {
  hasKey: !!process.env.AIRTABLE_API_KEY,
  hasBaseId: !!process.env.AIRTABLE_BASE_ID,
  keyPrefix: process.env.AIRTABLE_API_KEY?.slice(0, 5),
  baseIdPrefix: process.env.AIRTABLE_BASE_ID?.slice(0, 5),
});

if (!process.env.AIRTABLE_API_KEY) {
  throw new Error("AIRTABLE_API_KEY is not defined");
}

if (!process.env.AIRTABLE_BASE_ID) {
  throw new Error("AIRTABLE_BASE_ID is not defined");
}

// Initialize Airtable client
const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

export async function getTracksByCategory(category: string) {
  try {
    const records = await airtable(category)
      .select({
        view: "Grid view",
      })
      .all();

    return records.map((record) => {
      const attachments = record.get("imageUrl") as
        | { url: string }[]
        | undefined;
      const imageUrl = attachments?.[0]?.url || null;

      return {
        id: record.id,
        trackName: record.get("trackName") as string,
        artistName: record.get("artistName") as string,
        platform: record.get("platform") as string,
        imageUrl,
      };
    });
  } catch (error) {
    console.error("Airtable Error Details:", {
      error,
      category,
      apiKey: process.env.AIRTABLE_API_KEY?.slice(0, 5) + "...",
      baseId: process.env.AIRTABLE_BASE_ID,
    });
    return [];
  }
}
