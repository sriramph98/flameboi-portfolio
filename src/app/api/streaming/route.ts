import { NextResponse } from "next/server";

export async function GET() {
  try {
    const Airtable = require("airtable");

    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      throw new Error("Missing Airtable environment variables");
    }

    const base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY,
    }).base(process.env.AIRTABLE_BASE_ID);

    const records = await base("Streaming")
      .select({
        view: "Grid view",
      })
      .all();

    const streamingLinks = records.map((record: any) => ({
      platform: record.get("Platform"),
      url: record.get("URL").startsWith("http")
        ? record.get("URL")
        : `https://${record.get("URL")}`,
    }));

    return NextResponse.json(streamingLinks);
  } catch (error) {
    console.error("Error fetching streaming links:", error);
    return NextResponse.json([], { status: 500 });
  }
}
