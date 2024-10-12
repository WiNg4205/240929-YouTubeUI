import type { Config } from "tailwindcss";

const config: Config = {
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
        ytBtn: "#222222",
        ytBtnHover: "#3d3d3d",
        ytBtnHoverLight: "#272727",
        ytBorder: "#2e2e2e",
        ytBorderSideBar: "#3f3f3f",
        ytPlaceholder: "#888888",
        ytInput: "#121212",
      },
      fontFamily: {
        logo: ["var(--font-youtube-sans-semibold)"],
      },
      spacing: {
        "128": "32rem",
      }
    },
  },
  plugins: [],
};
export default config;
