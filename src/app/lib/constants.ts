export const CATEGORIES = [
  { name: "Music", path: "/work/music" },
  { name: "Mixing", path: "/work/mixing" },
  { name: "Editing", path: "/work/editing" },
] as const;

export const CATEGORY_TABLE_MAP: Record<string, string> = {
  music: "Music",
  mixing: "Mixing",
  editing: "Editing",
};

export const VALID_CATEGORIES = Object.keys(CATEGORY_TABLE_MAP);

export const PLATFORMS = {
  SPOTIFY: "Spotify",
  YOUTUBE: "YouTube",
  APPLE_MUSIC: "Apple Music",
} as const;
