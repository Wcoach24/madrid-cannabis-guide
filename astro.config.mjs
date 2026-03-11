import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://madridcannabisguide.com',
  output: 'static',
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
