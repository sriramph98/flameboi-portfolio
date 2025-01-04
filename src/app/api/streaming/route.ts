import { NextResponse } from "next/server";

interface StreamingLink {
  platform: string;
  url: string;
}

export async function GET() {
  try {
    const Airtable = require("airtable");

    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      return NextResponse.json(
        { error: "Missing environment variables" },
        { status: 500 }
      );
    }

    const base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY,
    }).base(process.env.AIRTABLE_BASE_ID);

    const records = await base("Streaming")
      .select({
        view: "Grid view",
      })
      .all();

    const streamingLinks: StreamingLink[] = records.map((record: any) => ({
      platform: record.get("Platform") || "",
      url: record.get("URL")?.startsWith("http")
        ? record.get("URL")
        : `https://${record.get("URL") || ""}`,
    }));

    return NextResponse.json(streamingLinks);
  } catch (error) {
    console.error("Error fetching streaming links:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";
export const revalidate = 0;
