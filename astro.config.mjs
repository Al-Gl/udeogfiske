// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://udeogfiske.dk',
  // Redirects live in public/_redirects (single source of truth, served by
  // Cloudflare as proper 301s). Do NOT add a `redirects` block here as well —
  // the Cloudflare adapter would emit a second _redirects and Cloudflare
  // rejects duplicate path rules.
});
