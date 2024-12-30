"use client";

import { useEffect, useState } from "react";
import {
  FaApple,
  FaDiscord,
  FaInstagram,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const PLATFORM_ICONS = {
  Instagram: FaInstagram,
  Spotify: FaSpotify,
  YouTube: FaYoutube,
  Discord: FaDiscord,
  "Apple Music": FaApple,
  Email: MdEmail,
} as const;

type Platform = keyof typeof PLATFORM_ICONS;

interface SocialLink {
  platform: Platform;
  url: string;
}

export function useSocialLinks() {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    async function fetchSocialLinks() {
      try {
        const response = await fetch("/api/socials");
        const data = await response.json();
        setSocialLinks(data.filter((social: SocialLink) => social.url));
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    }

    fetchSocialLinks();
  }, []);

  return { socialLinks, PLATFORM_ICONS };
}
