import { NextResponse } from "next/server";

import { getMarketItems, getReleasesByCategory } from "@/lib/sanity";
import { CATEGORY_TABLE_MAP } from "@/app/lib/constants";

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

    if (table === "Market") {
      const data = await getMarketItems();
      return NextResponse.json(data);
    }

    const category = Object.keys(CATEGORY_TABLE_MAP).find(
      (key) => CATEGORY_TABLE_MAP[key] === table
    );

    if (!category) {
      return NextResponse.json({ error: "Unknown table" }, { status: 400 });
    }

    const data = await getReleasesByCategory(category);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
