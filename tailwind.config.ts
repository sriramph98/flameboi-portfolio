import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cardBG': '#f4f4f4',
      },
      dropShadow: {
        custom: [
          '0 2.76726px 2.21381px rgba(0, 0, 0, 0.03)',
          '0 6.6501px 5.32008px rgba(0, 0, 0, 0.04)',
          '0 12.52155px 10.01724px rgba(0, 0, 0, 0.05)',
          '0 22.33631px 17.86905px rgba(0, 0, 0, 0.07)',
          '0 41.77761px 33.42209px rgba(0, 0, 0, 0.08)',
          '0 100px 80px rgba(0, 0, 0, 0.11)',
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
