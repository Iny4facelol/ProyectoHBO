import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://iny4facelol.github.io/ProyectoHBO/',
  base: '/ProyectoHBO',
  integrations: [tailwind()]
});