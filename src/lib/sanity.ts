import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";

export interface StreamingOption {
  platform: string;
  url: string;
}

export interface Release {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string | null;
  link: string;
  streamingOptions: StreamingOption[];
}

export async function getReleasesByCategory(category: string): Promise<Release[]> {
  try {
    const releases = await client.fetch(
      `*[_type == "release" && category == $category] | order(sortOrder asc, title asc){
        _id,
        title,
        description,
        price,
        image,
        link,
        streamingOptions
      }`,
      { category }
    );

    return releases.map((release: any) => ({
      id: release._id,
      title: release.title || "",
      description: release.description || "",
      price: release.price || "Free",
      image: release.image ? urlForImage(release.image).width(1200).url() : null,
      link: release.link || "#",
      streamingOptions: release.streamingOptions || [],
    }));
  } catch (error) {
    console.error("Sanity error fetching category:", category, error);
    return [];
  }
}

export interface MarketItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string | null;
  link: string;
}

export async function getMarketItems(): Promise<MarketItem[]> {
  try {
    const items = await client.fetch(
      `*[_type == "marketItem"] | order(sortOrder asc, title asc){ _id, title, description, price, image, link }`
    );

    return items.map((item: any) => ({
      id: item._id,
      title: item.title || "",
      description: item.description || "",
      price: item.price || "Free",
      image: item.image ? urlForImage(item.image).width(1200).url() : null,
      link: item.link || "#",
    }));
  } catch (error) {
    console.error("Sanity error fetching market items:", error);
    return [];
  }
}

export interface Social {
  id: string;
  platform: string;
  url: string;
}

export async function getSocials(): Promise<Social[]> {
  try {
    const socials = await client.fetch(
      `*[_type == "social"] | order(sortOrder asc, platform asc){ _id, platform, url }`
    );

    return socials.map((social: any) => ({
      id: social._id,
      platform: social.platform,
      url: social.platform === "Email" ? `mailto:${social.url}` : social.url || "",
    }));
  } catch (error) {
    console.error("Sanity error fetching socials:", error);
    return [];
  }
}
