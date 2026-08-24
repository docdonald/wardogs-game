# Input coverage

Audit date: 2026-08-23

## Project inputs reviewed

- Astro 5 static site with Tailwind CSS, MDX/content layer, Pagefind, and Cloudflare Pages configuration.
- 21 English WARDOGS articles across release, guides, mechanics, weapons, vehicles, and updates.
- 11 Japanese fallback articles are still present in the repository, but are marked noindex because the requested public content is English-only.
- Official links and media are configured in `src/config/site.ts`; the homepage embeds the researched official video.
- No verified WARDOGS redemption-code source was found, so no codes page or fabricated code is present.

## Coverage limits

The current content pack covers the existing English MDX set and its linked hubs. Keyword intents without source-backed pages remain listed as content opportunities in `qa-report.md`; they were not filled with invented facts.
