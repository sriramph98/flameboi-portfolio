import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cardBG: "#f4f4f4",
      },
      dropShadow: {
        custom: [
          "0 2.76726px 2.21381px rgba(0, 0, 0, 0.03)",
          "0 6.6501px 5.32008px rgba(0, 0, 0, 0.04)",
          "0 12.52155px 10.01724px rgba(0, 0, 0, 0.05)",
          "0 22.33631px 17.86905px rgba(0, 0, 0, 0.07)",
          "0 41.77761px 33.42209px rgba(0, 0, 0, 0.08)",
          "0 100px 80px rgba(0, 0, 0, 0.11)",
        ],
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
        logo: ["var(--font-unifraktur)", "serif"],
      },
      animation: {
        "scroll-text": "scroll-text 10s linear infinite",
      },
      keyframes: {
        "scroll-text": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

export default config;
