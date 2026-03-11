import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://madridcannabisguide.com',
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    domains: ['res.cloudinary.com'],
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});