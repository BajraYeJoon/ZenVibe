import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "bg-img-1": "url('/img-1.png')",
        "bg-img-2": "url('/img-2.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2": "url('/pattern-bg.png')",
      },
      colors: {
        primary: "#c095e4",
        accentLight: "#fcedf2",
        highlightLight: "#ffd1d4",
        accentDark: "#ffb7c5",
        highlightDark: "#ffa0c5",
        black: "#1a1a1a",
        subtitlePrimary: "#555",
        subtitleAccent: "#777",
        subtitleHighlight: "#999",
        link: "#c095e4",
        linkHover: "#fcedf2",
      },
    },
  },
  plugins: [],
};
export default config;
