/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
  },
  images: {
    domains: ['v5.airtableusercontent.com', 'dl.airtable.com'],
  },
  output: 'standalone'
}

module.exports = nextConfig
