import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import node from '@astrojs/node';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://mamaquefactura.com/",
  integrations: [tailwind(), icon()],
  // coment to build in local
  output: "server",
  adapter: cloudflare()
  // adapter: node({ mode: 'standalone' }),
});