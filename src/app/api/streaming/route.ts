const streamingLinks = records.map((record: any) => ({
  platform: record.get("Platform"),
  url: record.get("URL").startsWith("http")
    ? record.get("URL")
    : `https://${record.get("URL")}`,
}));
