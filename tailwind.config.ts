import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "1": "1",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        rounded: ["var(--font-nunito)"], // This allows us to use both font-nunito and font-rounded classes
      },
      colors: {
        "ukraine-red": "#ff0000",
        "ukraine-black": "#000000",
      },
    },
  },
  plugins: [],
};

export default config;
