import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'beth-ellen': ['var(--font-beth-ellen)'],
        'cedarville': ['var(--font-cedarville)'],
      },
    },
  },
  plugins: [],
}

export default config 