import { defineConfig } from "astro/config";

// integrations
import partytown from "@astrojs/partytown";
/* import storyblok from '@storyblok/astro'; */
import svelte from "@astrojs/svelte";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://blockheads-5921.vercel.app",
  output: "server",
  integrations: [partytown(),
  /*     storyblok({
      accessToken: process.env.STORYBLOK_TOKEN,
      apiOptions: {
        region: "us"
      },
      components: {
        docsPost: 'storyblok/DocsPost',
        docsPostList: 'storyblok/DocsPostLight',
        page: 'storyblok/Page',
      }
    }) */
  svelte()],
  adapter: vercel()
});