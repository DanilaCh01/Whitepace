import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
  base: "/Whitepace/",
  plugins: [
    // Without Data
    ViteEjsPlugin(
      {},
      {
        ejs: {
          views: ['src/html'],
        },
      }
    ),
  ],
});
