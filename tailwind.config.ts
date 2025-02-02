import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tan: {
          DEFAULT: '#FEEFDD'
        },
        brown: {
          DEFAULT: '#957964'
        },
        blue: {
          100: '#457EAC',
          200: '#2D5D7B'
        },
        gray: {
          DEFAULT: '#303036'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
