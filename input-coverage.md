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

## 2026-09-11 WARDOGS cash page refresh

| Input | Location or URL | Parse result | Disposition |
| --- | --- | --- | --- |
| User-provided cash-page brief and source audit | `/Users/tangxiaolv7/.codex/attachments/6ff08d9f-eedb-412e-8b4d-7f56992fb75c/pasted-text.txt` | One page brief, one primary keyword, equivalent wording, competitor/source notes, and unresolved beta payout warnings | Normalized into the existing cash article; no second route created |
| Existing canonical article | `src/content/wiki/en/mechanics/how-to-make-money.mdx` | Existing `mechanics` detail record with matching intent | Retained route and rewritten |
| Official WARDOGS overview | `https://www.team17.com/games/wardogs` | Current first-party mechanics and starting-balance claims | Primary source for the page |
| Official Season 1 changelog | `https://steamcommunity.com/app/1867240/announcements/` | Current price-change evidence | Used for the FOB price warning |
| PC Gamer cash guide | `https://www.pcgamer.com/games/fps/wardogs-money-farm/` | Closed-beta tactics and figures with an explicit Early Access disclaimer | Used only as scoped historical context |
| Reddit logistics discussion | `https://www.reddit.com/r/WarDogs/comments/1vxry7f/easy_money_making/` | Community observations about Huey, pallets, crates, and variable returns | Used as attributed field evidence, not fixed payout data |
| Steam money discussion | `https://steamcommunity.com/app/1867240/discussions/0/588436064418436011/` | Closed-playtest debate and player-reported high totals | FAQ context only; not a current rate |

### Normalized record

- `title`: WARDOGS Cash Guide — How to Make Money in WARDOGS Fast (2026)
- `slug`: `how-to-make-money` (existing canonical; route `/mechanics/how-to-make-money`)
- `primary_keyword`: `wardogs cash`
- `secondary_keywords`: `how to make money in wardogs`, `wardogs money guide`, `wardogs cash guide`
- `intent`: strategy / optimize persistent cash per life
- `page_family`: economy strategy detail
- `object_type`: Resource + Task + Choice
- `object_id`: `wardogs-cash-routes-season-1`
- `locale`: `en`; `platform`: Steam Early Access; `scope`: Season 1, verified 2026-09-11
- `status`: ready with payout-table gap

### Conflicts and gaps

- Beta payout figures conflict with the current Early Access scope. Resolution: `resolved_by_scope`; retain only as historical warnings and exclude them from current calculators.
- Community rankings conflict on whether building, transport, or logistics is fastest. Resolution: `resolved_editorial`; present routes by risk and access, not a universal ranking.
- `/cash` is not a supported route in the current category-first Astro router. Resolution: retain the existing canonical route to avoid a competing page or shared-router change.
- No local game session or reproducible live payout log was supplied. Exact current payouts, cash-per-minute values, and break-even tables remain intentionally unpublished.

The input is ready for content modeling with documented evidence gaps; no blocking gap affects the current article’s safe instructions.

## 2026-09-07 content expansion

- Added three source-backed English pages: `mechanics/monetization-and-pay-to-win`, `guides/solo-guide`, and `release/engine-and-performance`.
- Each page uses the official Steam or Team17 material already collected for this project, with an official image or video source shown in the article where available.
- Deferred topics such as detailed anti-cheat behavior, Twitch Drop rewards, named asset statistics, and numeric Compare fields remain outside this expansion because the collected sources do not publish those details.
