import { defineConfig } from 'astro/config';
// import node from '@astrojs/node';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // if 使用 docker, 请将 adapter 切换到 node
  // adapter: node({
  //   mode: 'standalone'
  // }),
  integrations: [react(), tailwind()],
  markdown: {
    // Example: Switch to use prism for syntax highlighting in Markdown
    syntaxHighlight: 'prism'
  }
});