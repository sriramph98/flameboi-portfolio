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

    const records = await base("Socials")
      .select({
        view: "Grid view",
      })
      .all();

    const socials = records.map((record: any) => ({
      platform: record.get("Platform"),
      url:
        record.get("Platform") === "Email"
          ? `mailto:${record.get("URL")}`
          : record.get("URL") || "",
    }));

    return NextResponse.json(socials);
  } catch (error) {
    console.error("Error fetching social links:", error);
    return NextResponse.json([], { status: 500 });
  }
}
