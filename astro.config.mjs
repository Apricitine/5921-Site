import { defineConfig } from "astro/config";

// integrations
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";
/* import storyblok from '@storyblok/astro'; */


// https://astro.build/config
export default defineConfig({
  site: "https://blockheads-5921.vercel.app",
  output: "server",
  integrations: [partytown(), mdx(),
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
  ],
  adapter: vercel()
});