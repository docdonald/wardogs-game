# WARDOGS cash route map

## 2026-09-18 Patch 0.11 routes

| Canonical URL | Route type | Locale / scope | Object ID | Intent / family | Breadcrumb parent | Status |
| --- | --- | --- | --- | --- | --- | --- |
| `/guides/community-server-browser` | English article detail | `en`; Patch 0.11 | `wardogs-community-server-browser` | Community browser / Server ID task guide | `/guides` → Guides | ready |
| `/updates/patch-0-11` | English article detail | `en`; Patch 0.11 | `wardogs-patch-0-11` | Official browser and economy update | `/updates` → Updates & Fixes | ready |

### Relationship decisions

- `/guides/community-server-browser` owns the exact DEPLOY → Server Browser → JOIN BY ID → LOOKUP path.
- `/updates/patch-0-11` owns the dated change list and links to the task guide.
- `/mechanics/how-to-make-money` owns the cash strategy and explains the 5% End of Match bonus without creating a second bonus page.

Audit date: 2026-09-11

| Canonical URL | Route type | Locale / scope | Object ID | Intent / family | Breadcrumb parent | Status |
| --- | --- | --- | --- | --- | --- | --- |
| `/mechanics/how-to-make-money` | English article detail | `en`; Season 1 Early Access | `wardogs-cash-routes-season-1` | `wardogs cash` / economy strategy detail | `/mechanics` → Mechanics | ready |

## Alias and relationship decisions

- `/cash`: not emitted; unsupported by the current category-first router and not needed because an existing canonical target owns the intent.
- `/mechanics/persistent-cash`: related explainer for how the Resource persists; linked as the next conceptual reference through the existing mechanics collection.
- `/mechanics/hot-zone`: related Location/Choice explainer; linked from the cash article.
- `/mechanics/logistics`: related Task/Choice explainer; linked from the cash article.
- `/mechanics/medic-revive`: related team-action explainer; linked from the cash article.
- `/mechanics/fob-guide`: related Location/Construction explainer; linked from the cash article.

## SEO and schema ownership

The article frontmatter owns title, description, summary, dates, version status, and primary source. `ArticlePage.astro` owns the canonical URL, Article JSON-LD, BreadcrumbList, and registered VideoObject. The article body owns factual links and the visible Sources section. No redirect or shared route change is required.
