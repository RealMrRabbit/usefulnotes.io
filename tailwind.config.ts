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
        input: "var(--input)",
        button: "var(--button)",
        component: "var(--component)",
        text: {
          
          light: "var(--text-light)",
          dark: "var(--text-dark)"
        }
      },
      boxShadow: {
        default: '4px 4px 4px 0 #00000033'
      },
      borderRadius: {
        default: '5px'
      }
    },
  },
  plugins: [],
} satisfies Config;
