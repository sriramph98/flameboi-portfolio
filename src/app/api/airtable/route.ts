import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const table = searchParams.get("table");

    if (!table) {
      return NextResponse.json(
        { error: "Table name is required" },
        { status: 400 }
      );
    }

    const Airtable = require("airtable");
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE_ID
    );

    const records = await base(table)
      .select({
        view: "Grid view",
      })
      .all();

    const data = records.map((record: any) => ({
      title: record.get("Title") || "",
      description: record.get("Description") || "",
      platform: record.get("Platform") || "",
      link: record.get("Link") || "#",
      image: record.get("Image")?.[0]?.url || "",
      streamingOptions: [
        "Spotify",
        "Apple Music",
        "YouTube",
        "SoundCloud",
        "Amazon Music",
      ]
        .map((platform) => ({
          platform,
          url: record.get(platform) || "",
        }))
        .filter((option) => option.url !== "")
        .map((option) => ({
          ...option,
          url: option.url.startsWith("http")
            ? option.url
            : `https://${option.url}`,
        })),
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
