# WARDOGS pre-launch QA report

Audit date: 2026-08-23

## Scope and result

- 165 generated Astro HTML outputs were built; 164 routable outputs plus the 404 document returned HTTP 200 in production preview.
- 66 sitemap URLs were checked and all returned HTTP 200.
- English public pages, legal pages, hubs, articles, tag pages, recent, 404, Japanese fallback routes, and disabled landing/docs routes were inspected.
- P0: none found.
- P1: five confirmed issues fixed (demo comments configuration, template landing indexing/navigation, Japanese fallback indexing, Pagefind indexing of noindex pages, CI old-domain defaults).

## Remaining P2 / manual checks

1. Several planned keyword intents still need source-backed articles (modes/maps/factions, economy/objectives, loadouts/mortar, controls/settings, patch-note clusters). No unsupported facts were added.
2. Utility/legal pages have short SEO titles/descriptions by design and are not keyword landing pages; review if a strict 40–60/140–160 rule is required for those pages too.
3. External Steam, BULKHEAD, Discord, YouTube, and Reddit links could not be live-tested because outbound network requests are blocked in this environment.
4. A browser renderer was unavailable, so desktop/390px/360px/768px screenshots require one manual visual pass. Static responsive checks found no overflow-prone layout rule.
5. `trailingSlash: 'never'` intentionally makes slash-suffixed variants 404; verify the production host preserves this routing policy.
6. Japanese fallback generation still logs missing-entry warnings; this is non-blocking while those routes remain noindex.

## Build and checks

- `npm run build`: passed; 165 pages generated.
- `astro check`: passed with 0 errors/warnings/hints.
- `vitest run`: 12 files, 97 tests passed.
- `eslint src tests`: passed.
- `check-content`: 32 MDX files clean.
- `check-config`: passed.
- `check-links`: 6,273 internal links across 165 pages passed.
- `check-sitemap`: 66/66 URLs passed against production preview.
- Pagefind indexes 21 English article pages only (Japanese/noindex/landing excluded).

## TDH and keyword table (English content pages)

Counts are a visible-main-text heuristic used to detect missing or excessive use, not a target density.

| Route | Target keyword | Title / Description chars | H1 | Count / words / density |
|---|---|---:|---|---:|
| `/` | WARDOGS Wiki | 54 / 151 | WARDOGS Wiki | 2 / 711 / 0.56% |
| `/guides` | WARDOGS guide | 21 / 82 | Guides | 2 / 104 / 3.85% |
| `/guides/beginner-guide` | WARDOGS beginner guide | 59 / 145 | WARDOGS Guide: How to Start Your First Match | 1 / 1351 / 0.22% |
| `/guides/gameplay` | WARDOGS gameplay | 56 / 154 | WARDOGS Gameplay: Control Zone & Cash | 4 / 1172 / 0.68% |
| `/guides/what-is-wardogs` | what is WARDOGS | 52 / 157 | What Is WARDOGS? 100-Player FPS Guide | 12 / 1407 / 2.56% |
| `/mechanics` | WARDOGS mechanics | 24 / 79 | Mechanics | 0 / 99 / 0% |
| `/mechanics/building-and-destruction` | WARDOGS building and destruction | 55 / 144 | WARDOGS Building and Destruction Tactics | 8 / 1174 / 2.73% |
| `/mechanics/progression-guide` | WARDOGS cash economy | 60 / 153 | WARDOGS Progression Guide: XP Tracks and Cash | 0 / 1125 / 0% |
| `/mechanics/roles-guide` | WARDOGS medic and revive guide | 55 / 153 | WARDOGS Roles Guide: Medic & Support | 0 / 1169 / 0% |
| `/release` | WARDOGS release | 35 / 86 | Release | 2 / 275 / 1.45% |
| `/release/beta` | WARDOGS beta | 53 / 146 | WARDOGS Beta Dates and Playtest Status | 12 / 1007 / 2.38% |
| `/release/early-access` | WARDOGS early access | 54 / 148 | WARDOGS Early Access: Scope & Price | 11 / 1082 / 3.05% |
| `/release/platforms` | WARDOGS PS5 and Xbox | 58 / 158 | WARDOGS PS5 and Xbox Console Release Status | 2 / 983 / 0.81% |
| `/release/playtest` | WARDOGS playtest | 57 / 143 | WARDOGS Playtest Signup & Steam Access | 8 / 1059 / 1.51% |
| `/release/price` | WARDOGS price | 57 / 155 | WARDOGS Price, Editions & Early Access | 2 / 1049 / 0.38% |
| `/release/release-date` | WARDOGS release date | 58 / 149 | WARDOGS Release Date and Steam Early Access | 3 / 1054 / 0.85% |
| `/release/steam` | WARDOGS Steam | 58 / 145 | WARDOGS Steam Store, Playtest, and PC Guide | 10 / 1046 / 1.91% |
| `/release/system-requirements` | WARDOGS system requirements | 59 / 147 | WARDOGS System Requirements for PC and Steam | 3 / 1011 / 0.89% |
| `/updates/server-status` | WARDOGS server status | 54 / 156 | WARDOGS Server Status and Access Checks | 2 / 884 / 0.68% |
| `/vehicles/vehicles-list` | WARDOGS vehicles list | 52 / 160 | WARDOGS Vehicles List: Roles and Uses | 4 / 1310 / 0.92% |
| `/vehicles/helicopter-guide` | WARDOGS helicopter guide | 50 / 155 | WARDOGS Helicopter Guide: Transport | 3 / 1263 / 0.71% |
| `/vehicles/tank-guide` | WARDOGS tank guide | 56 / 146 | WARDOGS Tank Guide: Artillery & Armor | 3 / 1297 / 0.69% |
| `/weapons/ammo-guide` | WARDOGS ammo guide | 54 / 148 | WARDOGS Ammo Guide: Calibers and Supply | 3 / 1251 / 0.72% |
| `/weapons/attachments-guide` | WARDOGS attachments guide | 55 / 153 | WARDOGS Attachments Guide: Optics | 2 / 1149 / 0.52% |
| `/weapons/equipment-guide` | WARDOGS equipment guide | 54 / 154 | WARDOGS Equipment Guide: Gear and Roles | 3 / 1129 / 0.80% |

Hub and utility TDH: `/mechanics` (24/79, H1 Mechanics), `/release` (35/86, H1 Release & Access), `/updates` (34/77, H1 Updates & Fixes), `/vehicles` (23/63, H1 Vehicles), `/weapons` (22/66, H1 Weapons), `/about` (20/23), `/contact` (22/25), `/copyright` (24/27), `/faq` (33/53), `/privacy-policy` (29/32), `/recent` (29/52), `/tags` (23/29), and `/terms-of-service` (31/34). Tag detail pages use the same index template and all 32 sitemap tag routes returned 200; they are navigation/filter pages rather than separate keyword articles.

Utility/legal titles are intentionally shorter than article TDH limits and were not mechanically padded. The main cannibalization risk is the broad `WARDOGS guide` cluster; hub, beginner, and explainer pages have distinct intent but should retain clear internal anchors.

## Conclusion

No P0/P1 blocker remains in the verified local build. The site is **修复后上线** provided the owner performs the two environment-dependent checks: live external links and browser screenshots at desktop, 390px, 360px, and 768px.
