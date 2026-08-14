// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: deployed as a fully static site to Cloudflare Pages.
// No SSR / server endpoints — every route is prerendered so the edge
// cache hit rate is ~100% and Cloudflare serves the whole site from cache.
//
// No client framework (React/Vue/Solid) is included: all interactivity
// (mobile menu, scroll-reveal, contact form, project filter) is vanilla JS,
// so the shipped JS is ~2 KB instead of a ~200 KB runtime.

const SITE = 'https://mahavirvataliya.github.io';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // 'static' is the default, but made explicit so the deploy target is unambiguous.
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: {
    // Emit /projects/foo/index.html instead of /projects/foo.html.
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
