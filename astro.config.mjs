import { defineConfig } from "astro/config";
import qwikdev from "@qwikdev/astro";
import AstroPWA from "@vite-pwa/astro";
import aws from "astro-sst";
import { qwikReact } from "@builder.io/qwik-react/vite";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: aws(),
  vite: {
    plugins: [qwikReact()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  integrations: [
    qwikdev(),
    tailwind(),
    AstroPWA({
      registerType: "autoUpdate",
      devOptions: { enabled: false },
      workbox: {
        navigateFallback: "/index",
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        globDirectory: "dist",
      },
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Edsoma Reading App",
        short_name: "Edsoma Reading App",
        description: "Edsoma Reading App for Web",
        theme_color: "#ffffff",
        icons: [
          {
            src: "favicon.svg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicon.svg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
