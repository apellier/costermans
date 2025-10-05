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
        black: "#000000",
        white: "#FFFFFF", 
        forest: "#065C2B",
        deep: "#12321C",
        grasse: "#5BAF30",
        sun: "#EDED00",
        'warm-beige': "#F5F5DC",
        'forest-light': "#31862E",
      },
      fontFamily: {
        'breathing': ['Breathing', 'cursive'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;