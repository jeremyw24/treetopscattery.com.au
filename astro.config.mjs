import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import partytown from '@astrojs/partytown';
// import vercelServerless from "@astrojs/vercel/serverless";
//import vercel from "@astrojs/vercel/serverless";

import netlify from "@astrojs/netlify/functions";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://treetopscattery.com.au',
  integrations: [tailwind(), react(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap()],
  output: "static",
  adapter: netlify()
});
