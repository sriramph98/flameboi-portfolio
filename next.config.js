/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v5.airtableusercontent.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        // Configure any Turbopack-specific rules here
      }
    }
  }
}

module.exports = nextConfig
