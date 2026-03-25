/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        vim: {
          blue: "#15549F",
          red: "#ED1C24",
        },
      },
      fontFamily: {
        "sf-pro": "SF Pro Display",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".wrapper": { width: "min(90%, 1440px)", "margin-inline": "auto" },
      });
    },
  ],
};
