import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";

// https://astro.build/config
import storyblok from "@storyblok/astro";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  site: "https://blockheads-5921.vercel.app",
  integrations: [
    mdx(),
    sitemap(),
    partytown(),
    tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        docsPost: "storyblok/DocsPost",
        docsPostList: "storyblok/DocsPostList",
        page: "storyblok/Page",
      },
      apiOptions: {
        region: "us",
      },
    }),
  ],
});
