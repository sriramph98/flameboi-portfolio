/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll-text': 'scroll-text 10s linear infinite',
      },
      keyframes: {
        'scroll-text': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      animationPlayState: ['hover'],
    },
  },
} 