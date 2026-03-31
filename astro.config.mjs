// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.vimecvalves.co.uk",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  output: "server",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [
    icon(),
    react(),
  ],
  image: {
    domains: ["images.ctfassets.net"],
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      warmup: {
        clientFiles: ["./src/**/*.astro", "./src/**/*.tsx"],
      },
    },
  },

  // adapter: netlify({
  //   imageCDN: false,
  //   includeFiles: ["public/_redirects"], // 👈 Must exist!
  // }),
  adapter: vercel(),
});
