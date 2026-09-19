# WARDOGS cash content model

## 2026-09-18 Patch 0.11 content model

| Primary keyword | Equivalent wording | Player job | Page family | Canonical target |
| --- | --- | --- | --- | --- |
| `wardogs community server browser` | `wardogs join by id`, `wardogs server id`, `join wardogs community server` | Find a Community Server and regroup with friends | Server-browser task guide | `/guides/community-server-browser` |
| `wardogs patch 0.11` | `wardogs server browser update`, `wardogs 5% cash bonus` | Understand the dated browser and economy changes | Official patch update | `/updates/patch-0-11` |

The two intents are distinct: the guide answers “how do I join?”, while the update page answers “what changed?”. Existing cash, community, server-status, official-news, patch-notes, beginner, and squad pages link to these canonical targets instead of competing with them.

### Supported primitives and relationships

- `Task`: open DEPLOY, select the browser, join by ID, regroup, and choose filters.
- `Resource`: Community Server end-of-match cash bonus and persistent personal cash.
- `Entity`: Community Server, Official Server, Server ID, squad, and Server Browser.
- `Version`: Patch 0.11, deployed after the September 14 maintenance window.
- Relationships: the patch `changes` the browser; Server ID `joins` a Community Server; Community Server `adds` the end-of-match cash bonus; the guide `links` to the patch and cash articles.

Audit date: 2026-09-11

## Canonical intent cluster

| Primary keyword | Equivalent wording | Player job | Page family | Canonical target |
| --- | --- | --- | --- | --- |
| `wardogs cash` | `how to make money in wardogs`, `wardogs money guide`, `wardogs cash guide` | Choose a safe, useful way to rebuild persistent cash | Economy strategy detail | `/mechanics/how-to-make-money` |

The existing article owns this intent. No `/cash` alias or second money page is added because the router only exposes category-first detail routes and the repository already has separate explainers for Persistent Cash, Hot Zone, Logistics, and Medic/Revive.

## Supported primitives and relationships

- `Resource`: persistent cash and each-life loadout budget.
- `Task`: create team value while preserving enough cash for another life.
- `Choice`: spotting, revives, objective play, transport, logistics, Hot Zone, or construction.
- `Location`: Control Zone, Hot Zone, FOB, and the route between spawn and objective.
- `Condition`: Season 1 Early Access scope, current vendor prices, squad support, and vehicle access.
- `Evidence`: official rules are primary; PC Gamer beta figures and Reddit/Steam observations are version-scoped community evidence.
- Relationships: cash `funds` loadouts; team actions `support` the objective; logistics `supplies` FOBs; Hot Zone `multiplies` official cash reward; loadout cost `reduces` persistent cash.

## Field-display ledger

| Field | Display decision |
| --- | --- |
| `primary_keyword` | Natural title, lead, and one FAQ heading; no SEO label |
| `secondary_keywords` | Natural equivalent wording in title/H2 and FAQ only |
| `summary` | Quick Answer card and metadata |
| `sources` | Inline links beside claims plus a visible Sources section |
| `version` / `updated date` | Article status strip and frontmatter |
| `conflicts` | Visible beta/current warning; resolved detail stays in this record |
| `media` | Existing official video and contextual image retained |
| `tags` | Existing economy, cash, objective, logistics, and roles taxonomy |

## Content rules

The page gives a direct answer within the first H2, uses a comparison table for route selection, and keeps current fixed values to the official `$10,000` starting balance and Hot Zone double-cash rule. Beta values are explicitly historical. No current cash-per-action ranking, exploit, or guaranteed profit claim is published.

Stress coverage: long title and H2, 1,200-word body, six-row table, five FAQ questions, inline image with alt text, optional video, multiple internal links, and omitted payout values. The built page must preserve wrapping and link resolution at narrow and wide layouts.
