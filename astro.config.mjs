import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mhonline.com.my',
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
