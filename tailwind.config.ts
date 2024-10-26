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
        ACCENT:"#8F60F7",
      },
      fontFamily: {
        jakarta: "var(--font-jakarta-sans)"
      }
    },
  },
  plugins: [],
};
export default config;
