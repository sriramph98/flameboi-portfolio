declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AIRTABLE_API_KEY: string;
      AIRTABLE_BASE_ID: string;
    }
  }
}

export {};
