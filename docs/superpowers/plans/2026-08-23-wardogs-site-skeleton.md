# WARDOGS Site Skeleton Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebrand the template for WARDOGS and create the first page-matrix navigation skeleton at `wardogs-game.wiki`.

**Architecture:** Keep Astro's existing static Content Layer and JSON-driven homepage. Replace the content-category configuration, locale copy, site metadata, and demo MDX with WARDOGS category/page shells; preserve the AnvilWiki project landing area.

**Tech Stack:** Astro 5, Content Layer `glob` loader, MDX, TypeScript, JSON locale files, Tailwind CSS, existing favicon assets.

**Spec:** `docs/superpowers/specs/2026-08-23-wardogs-site-skeleton-design.md`

## Global Constraints

- Keep the six navigation keys synchronized across config, locale overview labels, and content directories.
- Use only existing Astro components and no new framework runtime.
- Do not add substantive article claims; page shells may contain only a short scope placeholder.
- Use `https://wardogs-game.wiki` as the site URL/canonical base.
- Preserve AnvilWiki project documentation under `/landing`.

### Task 1: Replace game configuration and category navigation

**Files:**
- Modify: `src/config/site.ts`
- Modify: `src/config/navigation.ts`
- Modify: `src/i18n/routing.ts` only if locale labels need no structural change (leave locale list unchanged)

- [ ] Update site identity to WARDOGS, Steam, BULKHEAD, tactical all-out warfare FPS, official links, and domain.
- [ ] Replace navigation items with `release`, `guides`, `mechanics`, `weapons`, `vehicles`, `updates` and relevant Lucide icons.
- [ ] Keep paths equal to keys and preserve `isContentType: true`.

### Task 2: Replace locale and homepage content model data

**Files:**
- Modify: `src/locales/en.json`
- Modify: `src/locales/ja.json`

- [ ] Update site, nav, overview, home, FAQ, footer, and play-game copy to WARDOGS terminology.
- [ ] Remove Bosses/Items/Codes-specific labels and links.
- [ ] Make homepage cards and quick links point to the first P0-A routes and six hubs.

### Task 3: Create first page-matrix route shells

**Files:**
- Delete: `src/content/wiki/en/bosses/`, `src/content/wiki/en/items/`, `src/content/wiki/en/codes/`, and existing demo guide MDX; same for Japanese demo entries.
- Create: `src/content/wiki/en/<category>/*.mdx` for 11 P0-A pages and six hub directories.
- Create: matching `src/content/wiki/ja/<category>/` directories and translated shell frontmatter where required by locale consistency.

- [ ] Use valid schema frontmatter (`title`, `description`, `category`, `date`, `summary`, `draft: false`).
- [ ] Use the matrix URLs/slugs exactly: release-date, beta, playtest, early-access, steam, price, platforms, system-requirements, gameplay, server-status, plus guides homepage entry only via the existing category list.
- [ ] Keep body to a short “content framework placeholder” with no researched claims.

### Task 4: Replace favicon and metadata references

**Files:**
- Modify: `src/components/layout/BaseLayout.astro` (only if hard-coded favicon paths exist)
- Modify: `public/site.webmanifest` or equivalent generated/static manifest if present
- Verify: `public/favicon_io/*`

- [ ] Point all favicon sizes, Apple touch icon, ICO, and manifest icon entries at `public/favicon_io` assets.
- [ ] Remove references to old root favicon assets only when they are not needed by the template.

### Task 5: Validate navigation, residual names, links, and build

**Files:**
- No source changes expected unless validation identifies a direct issue.

- [ ] Run `pnpm check-config`.
- [ ] Run `pnpm check-content`.
- [ ] Run `pnpm build`.
- [ ] Run targeted `rg` checks for old game name, old category keys, wrong domain, and broken homepage links.
