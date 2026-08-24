# WARDOGS Site Skeleton Design

**Goal:** Rebrand the AnvilWiki demo into a WARDOGS wiki at `wardogs-game.wiki` and establish the first page-matrix navigation skeleton without writing substantive article content.

## Scope

- Replace the demo game configuration and visitor-facing English/Japanese UI copy with WARDOGS copy.
- Replace the demo navigation categories (`bosses`, `items`, `codes`) with `release`, `guides`, `mechanics`, `weapons`, `vehicles`, and `updates`.
- Create route-valid draft-free MDX shells for the first 11 P0-A pages from the page matrix, plus category directories required by the content loader.
- Make the homepage link to all six hubs and the first priority pages.
- Point site URL/canonical configuration at `https://wardogs-game.wiki` and use the supplied `public/favicon_io` assets.
- Remove old Anvil Quest demo content and visitor-facing references so no old game name is rendered or indexed.

## Non-goals

- No article research or substantive gameplay claims are added to the MDX shells.
- The AnvilWiki template documentation/landing area remains project documentation and is not rebranded as game content.
- No React/Vue/Svelte runtime, database, server API, or new dependency is introduced.

## Architecture

The existing Astro Content Layer remains the source of article routes. Navigation keys in `src/config/navigation.ts`, locale labels in `src/locales/*.json`, and content directories under `src/content/wiki/<locale>/` remain synchronized. The homepage continues to be JSON-driven through the existing `HomePage.astro` component; only its config data changes.

## Acceptance criteria

1. `pnpm check-config`, `pnpm check-content`, and `pnpm build` pass.
2. `rg -n -i 'anvil quest' src public` returns no visitor-facing game content matches; template documentation references outside the game site may remain.
3. The six navigation hubs and the first 11 page-shell routes have valid internal links.
4. `site.domain` is `wardogs-game.wiki`, and generated canonical URLs use HTTPS.
5. Favicon and manifest references resolve to files under `public/favicon_io`.
