# Template audit

Audit date: 2026-08-23

## Architecture

- Framework: Astro 5 static output; content: MDX/content layer; styling: Tailwind CSS; search: Pagefind; deployment: Cloudflare Pages.
- English public routes are generated from `src/pages` and `src/content/wiki/en`.
- Site configuration is in `src/config`, UI translations in `src/locales`, and navigation in `src/config/navigation.ts`.

## Rebrand and indexing checks

- Visitor-facing English pages contain WARDOGS branding and `https://wardogs-game.wiki`; no old game name or old domain was found in the public HTML.
- The template landing/docs tree remains in source as reference material, but landing navigation is disabled, the routes are noindex, and they are excluded from sitemap and Pagefind.
- Japanese fallback routes remain buildable for compatibility, but are noindex and excluded from sitemap/Pagefind until a complete Japanese content pass is approved.
- Demo Giscus values were cleared from `wrangler.toml`; comments therefore remain disabled by default.
- CI gate fallback domains were updated to `https://wardogs-game.wiki`.

## Verification commands

`npm run build`, Astro check, Vitest, ESLint, `check-content`, `check-config`, `check-links`, and `check-sitemap` were run after the final fixes. Results are recorded in `qa-report.md`.
