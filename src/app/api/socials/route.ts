import { NextResponse } from "next/server";

import { getSocials } from "@/lib/sanity";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

export async function GET() {
  const socials = await getSocials();
  return NextResponse.json(socials);
}
