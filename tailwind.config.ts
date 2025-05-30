import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        highlight: "var(--highlight)",
        separator: "var(--separator)",
        primary: "var(--primary)",
        caption: "var(--caption)",
      },
      fontSize: {
        h1: "3.5rem",
        h2: "1.875rem",
        h3: "1.5rem",
        h4: "1.25rem",
        h5: "1.125rem",
        h6: "1rem",
      },
      borderRadius: {
        outer: "0.75rem",
        inner: "0.375rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
