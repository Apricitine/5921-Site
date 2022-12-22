import { defineConfig } from "astro/config";

// https://astro.build/config
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import storyblok from '@storyblok/astro';


// https://astro.build/config
export default defineConfig({
  site: "https://blockheads-5921.vercel.app",
  integrations: [
    partytown(),
    tailwind(),
    storyblok({
      accessToken: process.env.STORYBLOK_TOKEN,
      apiOptions: {
        region: "us"
      }
      components: {
        docsPost: 'storyblok/DocsPost',
        docsPostList: 'storyblok/DocsPostLight',
        page: 'storyblok/Page',
      }
    })
  ],
});
