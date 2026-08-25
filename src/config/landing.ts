/**
 * Landing page configuration — text content for the project landing pages
 * at /landing (English). They introduce the AnvilWiki
 * template itself, NOT the demo game.
 *
 * This is separate from site.ts (which holds the DEMO GAME config).
 * The landing page represents the PROJECT, so its copy lives here.
 *
 * 👉 This file is NOT part of the "apply template" config layer — fork users
 *    don't need to touch it. It describes the AnvilWiki open-source project.
 */

/** Keep in sync with package.json "version" (used by the announcement bar). */
export const PROJECT_VERSION = '2.0.0';

export type LandingLocale = 'en';

interface ManualCopy {
  label: string;
  description: string;
}

export interface LandingContent {
  htmlLang: string;
  title: string;
  description: string;
  announcement: { text: string; href: string } | null;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    tertiaryCta: { label: string; href: string };
    installCommand: string;
    screenshotCaption: string;
    screenshotAlt: string;
    terminalLabel: string;
    copyLabel: string;
    copiedLabel: string;
  };
  socialProof: {
    lighthouse: { label: string; score: number }[];
    poweredBy: string;
  };
  features: { icon: string; title: string; description: string }[];
  compare: {
    title: string;
    subtitle: string;
    columns: string[];
    rows: { label: string; values: string[] }[];
  };
  showcase: {
    title: string;
    subtitle: string;
    points: string[];
    cta: { label: string; href: string };
    browserUrl: string;
    mobileCaption: string;
    articleAlt: string;
    mobileAlt: string;
  };
  builtWith: {
    title: string;
    subtitle: string;
    submitLabel: string;
    submitHref: string;
  };
  docsEntry: {
    title: string;
    cards: { icon: string; title: string; description: string; href: string }[];
    readLabel: string;
  };
  devGuide: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string; command: string; linkLabel: string; href: string }[];
    allDocs: { label: string; href: string };
  };
  handbook: {
    hubTitle: string;
    hubSubtitle: string;
    manuals: { learn: ManualCopy; dev: ManualCopy };
    chapterLabel: string;
    /** Chapter suffix (empty for English). */
    chapterSuffix: string;
    backToHub: string;
    prevLabel: string;
    nextLabel: string;
    editLabel: string;
    updatedLabel: string;
    readLabel: string;
    tldrLabel: string;
    /** Right-hand "On this page" heading TOC label. */
    onThisPageLabel: string;
    /** Left-hand manual-tree nav label (mobile <details> summary). */
    manualsLabel: string;
    /** The "whole job at a glance" checklist shown above the manuals on the hub. */
    roadmap: {
      title: string;
      hint: string;
      items: { label: string; time: string; href: string }[];
    };
    /** Label for the hub card / nav link opening a manual's own page. */
    openManualLabel: string;
    /** "N chapters" counter label on manual pages. */
    chaptersCountLabel: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  community: {
    title: string;
    subtitle: string;
    qrAlt: string;
    qrCaption: string;
    qrNote: string;
    buttonLabel: string;
    buttonAria: string;
    closeAria: string;
  };
  footer: { tagline: string; license: string; madeWith: string; author: string };
}

const RELEASES = 'https://github.com/PNGTRID/AnvilWiki/releases';
const SHOWCASE_DATA =
  'https://github.com/PNGTRID/AnvilWiki/blob/main/src/config/landing.ts';

/**
 * Community-built sites — locale-independent list shown by CommunitySites.astro.
 * To add your site, open a PR appending an entry here (README §Showcase explains).
 */
export const COMMUNITY_SITES: {
  name: string;
  url: string;
  game: string;
  /** Screenshot in public/images/showcase/sites/ (CLI-deleted on fork). */
  image: string;
  imageAltEn: string;
  descriptionEn: string;
}[] = [
  {
    name: 'Aniimo Wiki',
    url: 'https://aniimo.wiki/',
    game: 'Aniimo',
    image: '/images/showcase/sites/aniimo.jpg',
    imageAltEn: 'Screenshot of the Aniimo Wiki homepage',
    descriptionEn:
      'A community wiki for the Roblox anime game Aniimo — guides, tier lists, and fresh codes.',
  },
  {
    name: "No Man's Sky Wiki",
    url: 'https://nomanssky.wiki/',
    game: "No Man's Sky",
    image: '/images/showcase/sites/nomanssky.jpg',
    imageAltEn: "Screenshot of the No Man's Sky Wiki homepage",
    descriptionEn:
      'A wiki for the space sandbox classic No Man\'s Sky — mechanics references and update guides.',
  },
  {
    name: 'Steal an Egg Wiki',
    url: 'https://steal-anegg.wiki/',
    game: 'Steal an Egg',
    image: '/images/showcase/sites/steal-anegg.jpg',
    imageAltEn: 'Screenshot of the Steal an Egg Wiki homepage',
    descriptionEn:
      'A wiki for the Roblox hit Steal an Egg — pets, eggs, codes, and strategies.',
  },
];

const en: LandingContent = {
  htmlLang: 'en',
  title: 'AnvilWiki — Open-Source Game Wiki Template for Cloudflare',
  description:
    'An open-source game wiki template with an AI-native content workflow: pick the right game, generate pages by talking to your AI tool, codes pages stay fresh on autopilot. Lighthouse 4×100, free on Cloudflare, 100% ad revenue yours.',
  announcement: {
    text: `v${PROJECT_VERSION} is live — the content operating system: PR-gated content pipeline (keyword list → gates → draft PR), anvilwiki-ops 1.0 (multi-site + AI referral tracking), pnpm gen-covers og:image generation, and an affiliate suggestion slot. Zero breaking changes for forks.`,
    href: RELEASES,
  },
  hero: {
    badge: 'Open Source · MIT · Cloudflare Pages',
    title: 'Turn a trending game into a traffic site — in 24 hours, not weeks',
    subtitle:
      'AnvilWiki pairs an SEO-hardened game wiki template (Astro + Cloudflare Pages, Lighthouse 4×100, free unlimited bandwidth) with an AI-native content workflow that ships inside your repo: pick the right game, generate pages by just talking to your AI tool, codes pages stay fresh on autopilot. Every ad dollar is yours.',
    primaryCta: { label: 'Get Started', href: '#docs' },
    secondaryCta: { label: 'Star on GitHub', href: 'https://github.com/PNGTRID/AnvilWiki' },
    tertiaryCta: { label: 'Live Demo', href: '/' },
    installCommand: `git clone https://github.com/PNGTRID/AnvilWiki.git
cd anvilwiki
pnpm install && pnpm dev`,
    screenshotCaption: 'The live demo — a complete WARDOGS game wiki',
    screenshotAlt: 'AnvilWiki demo homepage — game wiki built with the template',
    terminalLabel: 'Terminal',
    copyLabel: 'Copy',
    copiedLabel: 'Copied!',
  },
  socialProof: {
    lighthouse: [
      { label: 'Performance', score: 100 },
      { label: 'Accessibility', score: 100 },
      { label: 'Best Practices', score: 100 },
      { label: 'SEO', score: 100 },
    ],
    poweredBy: 'Powered by Astro + Cloudflare Pages — free unlimited bandwidth',
  },
  features: [
    {
      icon: 'lucide:bot',
      title: 'AI-Native Content Workflow',
      description:
        'Agent skills ship inside the repo (.agent/skills/, Agent Skills open standard). Tell ZCode / Claude Code / Codex "write a boss guide from these notes" — you get a build-passing MDX page, auto-verified by schema + lint. No scripts to learn.',
    },
    {
      icon: 'lucide:crosshair',
      title: 'Game Selection Playbook',
      description:
        'The fork-user funnel most templates ignore: a 4-layer game-selection scoring model (demand validation via Trends + SERP gap check) plus a "first-day 10 pages" plan — because the 2-8 week window after a game blows up is where all the traffic lives.',
    },
    {
      icon: 'lucide:ticket',
      title: 'Codes Pages on Autopilot',
      description:
        'Structured codes frontmatter (status/expiry/source) auto-renders Active one-click-copy blocks + an Expired table that keeps long-tail "is X still working" traffic. A weekly audit workflow files an issue whenever pages go stale — freshness without you remembering.',
    },
    {
      icon: 'lucide:dollar-sign',
      title: '100% Your Revenue',
      description:
        'Built-in AdSense slots, sponsor card and affiliate CTA component — all env-gated, off by default. No platform cut, unlike hosted wiki farms that eat your earnings.',
    },
    {
      icon: 'lucide:zap',
      title: 'SEO Engineering + Blazing Fast',
      description:
        'Sitemap with lastmod, JSON-LD suite, hreflang, Quick Answer blocks for AI search, llms.txt — on top of Astro zero-JS and Lighthouse 4×100 out of the box.',
    },
    {
      icon: 'lucide:cloud',
      title: 'Free Forever',
      description:
        'Deploy to Cloudflare Pages with zero config: free unlimited bandwidth + global CDN + SSL. i18n built in (English at root, fallback so URLs never 404). No hosting bills, ever.',
    },
  ],
  compare: {
    title: 'Why AnvilWiki?',
    subtitle: 'How it compares to other options for game content sites.',
    columns: ['AnvilWiki', 'Fandom', 'Starlight', 'Next.js DIY'],
    rows: [
      {
        label: 'Best for',
        values: ['Game SEO content sites', 'Community wikis', 'Product docs', 'Custom apps'],
      },
      {
        label: 'AI content pipeline',
        values: ['Skills ship in repo', 'None', 'None', 'Build yourself'],
      },
      {
        label: 'Game selection guide',
        values: ['Funnel + first-day plan', 'None', 'None', 'None'],
      },
      {
        label: 'Ad revenue',
        values: ['100% yours', 'Platform-split', 'None', 'DIY'],
      },
      {
        label: 'Hosting cost',
        values: ['Free, unlimited BW', 'Free (hosted)', 'Pay your own', 'Pay your own'],
      },
      {
        label: 'SEO built-in',
        values: ['Full suite', 'Platform-controlled', 'Docs-focused', 'Build yourself'],
      },
      {
        label: 'Performance',
        values: ['Lighthouse 4×100', 'Medium', 'High', 'Varies'],
      },
      {
        label: 'You own it',
        values: ['Yes (MIT)', 'No', 'Yes', 'Yes'],
      },
    ],
  },
  showcase: {
    title: 'See it in action',
    subtitle:
      'A live demo built with AnvilWiki — a complete WARDOGS game wiki.',
    points: [
      'Real game wiki layout (Hero → QuickStart → content modules → CTA)',
      'Measured Lighthouse Performance 100 on a full content site',
      'Real i18n: English at root + Japanese prefixed, with fallback',
      'Working ad slots, search, comments — all env-gated, off by default',
    ],
    cta: { label: 'View live demo →', href: '/' },
    browserUrl: 'wardogs-game.wiki/guides/gameplay',
    mobileCaption: 'Mobile-first: clean first screen, scrollable tables, tap-to-copy codes.',
    articleAlt: 'Boss guide article — Quick Answer card and structured Boss Overview data card',
    mobileAlt: 'Mobile view of the demo homepage',
  },
  builtWith: {
    title: 'Built with AnvilWiki',
    subtitle:
      'Real sites launched by the community — from Roblox hits to Steam classics. Yours could be next.',
    submitLabel: 'Built a site? Submit yours →',
    submitHref: SHOWCASE_DATA,
  },
  docsEntry: {
    title: 'Get started in minutes',
    cards: [
      {
        icon: 'lucide:crosshair',
        title: 'Pick Your Game',
        description:
          'Which game is worth a wiki? A 4-layer selection funnel plus the first-day 10-pages plan.',
        href: '/landing/docs/pick-your-game',
      },
      {
        icon: 'lucide:rocket',
        title: 'Quick Start',
        description: 'Install the 6 tools and get your environment ready — once and for all.',
        href: '/landing/docs/install-tools',
      },
      {
        icon: 'lucide:palette',
        title: 'Apply Template',
        description: 'Fork the template and swap in your game — one guided command.',
        href: '/landing/docs/launch-your-site',
      },
      {
        icon: 'lucide:search',
        title: 'SEO Guide',
        description: 'How AnvilWiki handles sitemaps, JSON-LD, hreflang, and more.',
        href: 'https://github.com/PNGTRID/AnvilWiki/blob/main/docs/seo.md',
      },
    ],
    readLabel: 'Read',
  },
  devGuide: {
    title: 'How to use it — 5 steps',
    subtitle:
      'From fork to a live site in about 30 minutes. Every step ships with a full doc behind it.',
    steps: [
      {
        title: 'Fork & run locally',
        description:
          'Clone your fork and start the dev server — the WARDOGS wiki structure works out of the box.',
        command: 'pnpm install && pnpm dev',
        linkLabel: 'README',
        href: 'https://github.com/PNGTRID/AnvilWiki#readme',
      },
      {
        title: 'Make it yours',
        description:
          'One interactive CLI swaps game identity, theme color, locales and nav — and resets demo values (incl. wrangler.toml).',
        command: 'pnpm apply-template',
        linkLabel: 'apply-template.md',
        href: 'https://github.com/PNGTRID/AnvilWiki/blob/main/docs/apply-template.md',
      },
      {
        title: 'Write pages by chatting',
        description:
          'Open the repo in ZCode / Claude Code / Codex and just talk — agent skills ship inside the repo and the Zod schema gates every page.',
        command: '"write a boss guide from these notes"',
        linkLabel: 'content-format.md',
        href: 'https://github.com/PNGTRID/AnvilWiki/blob/main/docs/content-format.md',
      },
      {
        title: 'Deploy for free',
        description:
          'Push to GitHub and connect Cloudflare Pages — the Astro build is auto-detected; free unlimited bandwidth + global CDN.',
        command: 'pnpm build && git push',
        linkLabel: 'deployment.md',
        href: 'https://github.com/PNGTRID/AnvilWiki/blob/main/docs/deployment.md',
      },
      {
        title: 'Stay fresh',
        description:
          'A weekly audit workflow flags stale pages, codes skills keep redemption pages current, and upstream updates sync cleanly.',
        command: 'pnpm refresh-audit',
        linkLabel: 'staying-up-to-date.md',
        href: 'https://github.com/PNGTRID/AnvilWiki/blob/main/docs/staying-up-to-date.md',
      },
    ],
    allDocs: {
      label: 'Open the docs center — two hands-on manuals with copy-paste AI prompts',
      href: '/landing/docs',
    },
  },
  handbook: {
    hubTitle: 'AnvilWiki Docs',
    hubSubtitle:
      'Two separate hands-on manuals, written for complete beginners: the Learning Manual (11 chapters) walks you from game selection to a live, indexed, monetized wiki — then shows you how to templatize it, batch-produce inner pages to scale, and win rankings and AI citations with SEO; the Development Manual (7 chapters) covers customization and engineering. Every step is a SOP with copy-paste AI prompts.',
    manuals: {
      learn: {
        label: 'Learning Manual',
        description:
          '11 chapters, zero experience required: pick the right game, install the tools, launch your site, write 10 pages with AI on day one, get on Google, turn on ads, run a 30-minute weekly ops loop — then turn your first site into a template, batch-create dozens of traffic-entrance pages, and climb from indexed to ranking and AI-cited.',
      },
      dev: {
        label: 'Development Manual',
        description:
          '7 chapters for customizers and contributors: the change map, categories & locales, theme & homepage copy, feature switches, CI & security, syncing upstream or contributing back, and running ops through AI (anvilwiki-ops CLI + MCP).',
      },
    },
    chapterLabel: 'Chapter',
    chapterSuffix: '',
    backToHub: 'All docs',
    prevLabel: 'Previous',
    nextLabel: 'Next',
    editLabel: 'Edit on GitHub',
    updatedLabel: 'Updated',
    readLabel: 'Read chapter',
    tldrLabel: 'TL;DR',
    onThisPageLabel: 'On this page',
    manualsLabel: 'Manual contents',
    roadmap: {
      title: 'Building a game wiki: the whole job at a glance',
      hint: 'Ten jobs from zero to earning. Click any job to jump to the chapter that walks you through it step by step.',
      items: [
        { label: 'Pick the right game', time: '2 days', href: '/landing/docs/pick-your-game' },
        { label: 'Install the 6 tools', time: '30 min', href: '/landing/docs/install-tools' },
        { label: 'Turn the template into your site', time: '30 min', href: '/landing/docs/launch-your-site' },
        { label: 'Write the first 10 pages with AI', time: '1 day', href: '/landing/docs/first-10-pages' },
        { label: 'Put the site online (free hosting)', time: '15 min', href: '/landing/docs/put-site-online' },
        { label: 'Register with Google (GSC + sitemap)', time: '20 min', href: '/landing/docs/get-on-google' },
        { label: 'Buy and connect a domain', time: '30 min', href: '/landing/docs/put-site-online' },
        { label: 'Turn on ads (AdSense)', time: 'review: days', href: '/landing/docs/enable-ads' },
        { label: 'Weekly 30-min freshness loop', time: 'weekly', href: '/landing/docs/weekly-ops' },
        { label: 'Customize: categories, languages, theme', time: 'as needed', href: '/landing/docs/categories-and-locales' },
      ],
    },
    openManualLabel: 'Open this manual',
    chaptersCountLabel: 'chapters',
  },
  finalCta: {
    title: 'Ready to launch your game wiki?',
    subtitle: 'Fork, configure, deploy — all in 30 minutes, completely free.',
    primaryCta: { label: 'Get Started', href: '#docs' },
    secondaryCta: { label: 'Read the Docs', href: 'https://github.com/PNGTRID/AnvilWiki#readme' },
  },
  community: {
    title: 'Join the discussion',
    subtitle:
      'Questions about deploying your own wiki, feature ideas, or just want to chat about game content sites? Scan the QR code to add the maintainer on WeChat and join the group.',
    qrAlt: 'WeChat QR code — scan to add the maintainer and join the discussion group',
    qrCaption: 'Scan with WeChat',
    qrNote: 'WeChat group · English welcome',
    buttonLabel: 'Join the group',
    buttonAria: 'Open the WeChat group QR code',
    closeAria: 'Close QR code',
  },
  footer: {
    tagline: 'Open-source game wiki site template. Free, fast, beginner-friendly.',
    license: 'MIT License',
    madeWith: 'Built with Astro · Deployed on Cloudflare Pages',
    author: 'Open-sourced by 袁锐钦 (Yuan Ruiqin), lead of the PNGTRIBE team',
  },
};

export const landingContent: Record<LandingLocale, LandingContent> = { en };

/** English landing-page route. */
export const landingPath = (_locale: LandingLocale) => '/landing';
