import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasAirtableKey: !!process.env.AIRTABLE_API_KEY,
    hasBaseId: !!process.env.AIRTABLE_BASE_ID,
    // Don't return actual values in production!
    keyPrefix: process.env.AIRTABLE_API_KEY?.slice(0, 5),
    baseIdPrefix: process.env.AIRTABLE_BASE_ID?.slice(0, 5),
  });
}
