/**
 * Site configuration — the single source of truth for game-specific metadata.
 *
 * 👉 APPLY TEMPLATE: Change every field here when building a new game wiki.
 * This is part of the CONFIG LAYER — framework code reads from here, never the reverse.
 */

export interface SiteConfig {
  /** Full site name, used in <title> suffix and Organization JSON-LD. */
  name: string;
  /** Short name for PWA manifest and mobile logo. e.g. "AQ Wiki" */
  shortName: string;
  /** Site description for Organization JSON-LD and og:site_name. */
  description: string;
  /** Search keywords used as the default meta keywords value. */
  keywords: string;
  /** Domain without protocol or trailing slash. */
  domain: string;
  /** Hero tagline shown under the site title. */
  tagline: string;
  /** Copyright / legal disclaimer line shown in footer. */
  legalNotice: string;
  social: {
    /** Official game website URL (the game itself, not the wiki). */
    official: string;
    steam?: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
    reddit?: string;
  };
  /**
   * Canonical URLs about the GAME (Steam page, official site, Wikipedia entry…).
   * Emitted as Organization JSON-LD `sameAs` — helps Google / AI engines link
   * this wiki to the game's knowledge-graph entity.
   */
  sameAs?: string[];
  game: {
    /** Full game name. */
    name: string;
    /** Platform: "Roblox" | "Steam" | "Epic Games" | "Mobile" | ... */
    platform: string;
    /** Developer / studio name. */
    developer: string;
    /** Publisher name, when distinct from the developer. */
    publisher?: string;
    /** Genre description. */
    genre: string;
    /** ISO release date (optional). */
    releaseDate?: string;
  };
  /**
   * Dimensions of the default OG/Twitter share image (public/images/hero.webp).
   * Emitted as og:image:width / og:image:height so social crawlers can render
   * the share card without downloading the image first.
   */
  ogImageWidth: number;
  ogImageHeight: number;
  /** Default author name for articles without an explicit `author` in frontmatter (E-E-A-T signal). */
  defaultAuthor?: string;
}

export const site: SiteConfig = {
  name: 'WARDOGS Wiki',
  shortName: 'WARDOGS Wiki',
  description:
    'WARDOGS Wiki with beginner guides, weapons, vehicles, loadouts, cash economy tips, Control Zone tactics, progression help, and large-scale teamplay strategies.',
  keywords: 'WARDOGS, Steam, wiki, guides, weapons, vehicles, loadouts, cash, Control Zone, roles',
  domain: 'wardogs-game.wiki',
  tagline:
    '100-player tactical FPS with three teams, persistent cash, vehicles, destruction, building, and Control Zone warfare.',
  legalNotice:
    'WARDOGS Wiki is an independent fan-made community site. Not affiliated with or endorsed by BULKHEAD or Team17.',
  social: {
    official: 'https://bulkhead.com/games/wardogs/',
    steam: 'https://store.steampowered.com/app/1867240/WARDOGS/',
    discord: 'https://discord.gg/TxKKdspkCp',
    youtube: 'https://www.youtube.com/watch?v=hVtmnaUCpuQ',
    reddit: 'https://www.reddit.com/r/WarDogs/',
  },
  // 👉 APPLY TEMPLATE: point these at the game's real canonical pages.
  sameAs: [
    'https://store.steampowered.com/app/1867240/WARDOGS/',
    'https://bulkhead.com/games/wardogs/',
    'https://www.team17.com/games/wardogs',
    'https://www.reddit.com/r/WarDogs/',
  ],
  game: {
    name: 'WARDOGS',
    platform: 'Steam',
    developer: 'BULKHEAD',
    publisher: 'Team17',
    genre: 'Tactical All-Out Warfare FPS',
    releaseDate: '2026-09-10',
  },
  // hero.webp is 1200×630 (the recommended OG share aspect ratio).
  ogImageWidth: 1200,
  ogImageHeight: 630,
};

/** Absolute site URL (no trailing slash). Falls back to the Astro `site` config. */
export const siteUrl: string = (process.env.SITE_URL || `https://${site.domain}`).replace(
  /\/$/,
  '',
);
