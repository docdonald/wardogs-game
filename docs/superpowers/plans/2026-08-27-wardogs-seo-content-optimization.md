# WARDOGS SEO Content Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve the WARDOGS site's search-intent entry points, source/status presentation, first-paint video behavior, tag index quality, and repository branding without adding unverified game facts.

**Architecture:** Keep Astro 5 static output, Content Layer MDX, and JSON-driven homepage copy. Add optional article status metadata to the existing schema and render it in the shared article shell; use the existing lazy YouTube facade for poster-first playback; make tag indexing decisions at the route/layout boundary so sitemap and robots signals remain consistent.

**Tech Stack:** Astro 5, TypeScript, MDX Content Layer, Tailwind CSS, Astro Image, Pagefind, Vitest, pnpm.

**Spec:** `docs/superpowers/specs/2026-08-27-wardogs-seo-content-optimization-design.md`

## Global Constraints

- Do not introduce React, Vue, Svelte, a server adapter, or new runtime dependencies.
- UI copy must remain in `src/locales/en.json`; components must not hardcode game-specific facts.
- Keep the primary homepage H1 `WARDOGS Wiki`, the `/` URL, canonical generation, and existing content routes unchanged.
- Do not invent dates, prices, platforms, roles, characters, item stats, codes, or access claims.
- Tag pages with fewer than two published articles are noindex and excluded from sitemap; they remain reachable for navigation.
- Hero YouTube iframe is created only after an explicit user activation.
- Run `pnpm build`, `pnpm check-content`, `pnpm check-links`, `pnpm typecheck`, and `pnpm test` after implementation.

### Task 1: Capture homepage metadata and navigation contract

**Files:**
- Modify: `src/locales/en.json` (`home.meta`, `home.popular`, `home.start`, `home.explore`)
- Modify: `src/components/header/SiteHeader.astro`
- Modify: `src/components/sidebar/WikiSidebar.astro`
- Test: `tests/wardogs-home-content.test.ts`

**Interfaces:**
- Consumes the existing `ui.nav`, `home.popular.quickLinks`, and `NAVIGATION_CONFIG` values.
- Produces real links to `/release/playtest`, `/release/beta`, `/release/download-preload`, `/release/system-requirements`, `/mechanics/factions`, `/guides/maps`, `/weapons`, and `/vehicles` without changing category keys.

- [ ] Step 1: Update the failing homepage-content assertions for the approved 60-character title, description intent terms, and four access quick links.
- [ ] Step 2: Run `pnpm vitest run tests/wardogs-home-content.test.ts` and confirm the old metadata assertion fails.
- [ ] Step 3: Update `src/locales/en.json` while preserving existing WARDOGS facts and all current card labels; put Playtest, Beta, Download, and System Requirements in the priority links and add existing Factions/Maps/database destinations to the start/explore modules where they replace no existing facts.
- [ ] Step 4: Add a compact, data-driven “Key routes” group to the desktop and mobile header only if the route labels already exist in locale JSON; add matching curated links to the sidebar before dynamic article groups, all using `localizePath`.
- [ ] Step 5: Run the focused test and `pnpm check-config`; expected result is PASS with no navigation/content-key mismatch.
- [ ] Step 6: Commit the homepage and navigation changes with `git add src/locales/en.json src/components/header/SiteHeader.astro src/components/sidebar/WikiSidebar.astro tests/wardogs-home-content.test.ts && git commit -m "feat: sharpen WARDOGS search entry points"`.

### Task 2: Add optional source/status metadata to articles

**Files:**
- Modify: `src/content.config.ts`
- Modify: `src/components/article/ArticlePage.astro`
- Modify: `src/locales/en.json` (`shared` labels)
- Test: `tests/content-utils.test.ts` or a new `tests/article-status.test.ts`

**Interfaces:**
- Consumes optional frontmatter strings `status`, `lastVerified`, `primarySource`, and `nextAction`.
- Produces an accessible status grid in the shared article header only when values exist; no old MDX file requires immediate edits.

- [ ] Step 1: Add a failing unit assertion for the normalized status label set and an article shell marker `data-article-status`.
- [ ] Step 2: Run the focused test and confirm it fails because the schema/markup does not yet expose status metadata.
- [ ] Step 3: Add optional bounded strings to the Content Layer schema and add localized labels `currentStatus`, `lastVerified`, `primarySource`, and `nextAction`.
- [ ] Step 4: Render the status grid immediately after the article header metadata, escaping all values through Astro’s normal text rendering; render only non-empty fields and link `primarySource`/`nextAction` only when frontmatter provides valid URLs.
- [ ] Step 5: Add status metadata only to pages whose existing frontmatter already contains a directly supported status/source fact; leave all other pages unchanged rather than inferring values.
- [ ] Step 6: Run `pnpm vitest run tests/article-status.test.ts tests/content-utils.test.ts`, `pnpm check-content`, and `pnpm typecheck`; expected result is PASS.
- [ ] Step 7: Commit with `git add src/content.config.ts src/components/article/ArticlePage.astro src/locales/en.json tests && git commit -m "feat: show source-aware article status"`.

### Task 3: Make Hero playback poster-first

**Files:**
- Modify: `src/components/home/HomePage.astro`
- Modify: `src/components/home/VideoSection.astro`
- Modify: `src/components/video/LazyYouTube.astro` only if the shared facade needs a small prop addition
- Test: `tests/wardogs-home-content.test.ts`, `tests/wardogs-visual-style.test.ts`

**Interfaces:**
- Consumes `home.hero.videoId` and the existing `LazyYouTube` component.
- Produces one poster/button facade in the Hero and inserts a YouTube iframe only after click/keyboard activation.

- [ ] Step 1: Add a failing assertion that the Hero source does not contain a second background `<iframe>` and that the Hero uses the shared facade.
- [ ] Step 2: Run the focused visual/home tests and confirm the assertion fails against the current background iframe.
- [ ] Step 3: Remove the background iframe/poster duplication from `HomePage.astro`; retain a decorative poster layer only when it can be a plain image, or use the shared facade as the sole video surface.
- [ ] Step 4: Ensure `VideoSection` keeps dimensions and the square-corner/border classes from the existing theme while delegating playback to `LazyYouTube`.
- [ ] Step 5: Run focused tests and inspect generated HTML for no eager YouTube iframe; run `pnpm build` to ensure the client script remains valid.
- [ ] Step 6: Commit with `git add src/components/home/HomePage.astro src/components/home/VideoSection.astro src/components/video/LazyYouTube.astro tests && git commit -m "perf: defer hero video until activation"`.

### Task 4: Consolidate low-value Tag indexing

**Files:**
- Modify: `src/pages/tags/[tag].astro`
- Modify: `src/components/article/TagListPage.astro`
- Modify: `astro.config.ts`
- Test: `tests/tags.test.ts`

**Interfaces:**
- Consumes published tag counts from `getEntriesByTag` and the existing sitemap `noindexPaths` filter.
- Produces `noindex` for tag pages with fewer than two published articles and keeps multi-article tags indexable.

- [ ] Step 1: Add failing tests for the tag indexability threshold and the `noindex` prop passed to `LocaleLayout`.
- [ ] Step 2: Run `pnpm vitest run tests/tags.test.ts` and verify failure.
- [ ] Step 3: Compute `const indexable = entries.length >= 2` in the tag page and pass `noindex={!indexable}`; add `robots`/canonical behavior only through `LocaleLayout`.
- [ ] Step 4: Update static path generation or sitemap filtering so single-article tag paths are excluded from sitemap without removing their reachable HTML route.
- [ ] Step 5: Run focused tests, `pnpm build`, and `pnpm check-sitemap`; expected result is noindex tag pages absent from sitemap and multi-article tags present.
- [ ] Step 6: Commit with `git add src/pages/tags/[tag].astro src/components/article/TagListPage.astro astro.config.ts tests/tags.test.ts && git commit -m "seo: noindex thin tag aggregations"`.

### Task 5: Clean template package metadata and verify

**Files:**
- Modify: `package.json`
- Modify: `qa-report.md`

**Interfaces:**
- Consumes the confirmed site identity in `src/config/site.ts` and repository URL supplied by the owner.
- Produces WARDOGS-specific package metadata without changing runtime site behavior.

- [ ] Step 1: Update package name, description, homepage, repository, bugs, and keyword metadata to the WARDOGS project values; do not expose secrets or environment values.
- [ ] Step 2: Run `pnpm test`, `pnpm lint`, `pnpm typecheck`, `pnpm check-content`, `pnpm check-links`, `pnpm build`, and `pnpm check-sitemap`.
- [ ] Step 3: Inspect `dist` for the new homepage title, no eager Hero iframe, noindex thin tags, WARDOGS branding, and absence of public AnvilWiki metadata.
- [ ] Step 4: Run `git diff --check` and record command outputs plus remaining manual browser checks in `qa-report.md`.
- [ ] Step 5: Commit with `git add package.json qa-report.md && git commit -m "chore: align package metadata with WARDOGS"`.

## Self-review checklist

- [ ] The title change preserves the existing homepage topic words and H1.
- [ ] No new game facts are introduced; optional status data comes only from frontmatter.
- [ ] Existing category keys and URLs remain unchanged.
- [ ] Thin tags are noindex and absent from sitemap while remaining reachable.
- [ ] Hero video remains keyboard accessible and click-to-play.
- [ ] All required build/check commands are run after the final change.
