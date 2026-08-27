import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import en from '~/locales/en.json';
import { site } from '~/config/site';

const homePage = readFileSync(new URL('../src/components/home/HomePage.astro', import.meta.url), 'utf8');

describe('WARDOGS homepage research content', () => {
  it('uses the researched homepage SEO metadata', () => {
    expect(en.home.meta.title).toBe('WARDOGS Wiki — Beginner Guides, Weapons, Vehicles & Playtest');
    expect(en.home.meta.title.length).toBeLessThanOrEqual(60);
    expect(en.home.meta.description).toContain('Release Date');
    expect(en.home.meta.description).toContain('Playtest');
    expect(en.home.meta.description).toContain('Gameplay');
    expect(en.home.meta.description).toContain('Guides');
    expect(en.home.meta.description.length).toBeGreaterThanOrEqual(140);
    expect(en.home.meta.description.length).toBeLessThanOrEqual(160);
    expect(en.home.meta.keywords).toContain('Playtest');
  });

  it('uses the homepage keyword as the English Hero title', () => {
    expect(en.home.hero.title).toBe('WARDOGS Wiki');
  });

  it('keeps the trailer inside the right-hand Hero column', () => {
    const heroStart = homePage.indexOf('<section class="relative flex min-h-[52vh]');
    const heroEnd = homePage.indexOf('</section>', heroStart);
    const videoPosition = homePage.indexOf('<VideoSection', heroStart);

    expect(homePage).toContain('md:grid-cols-2');
    expect(videoPosition).toBeGreaterThan(heroStart);
    expect(videoPosition).toBeLessThan(heroEnd);
  });

  it('promotes access and database routes in priority links', () => {
    const links = en.home.popular.quickLinks.map((link: { href: string }) => link.href);
    expect(links).toEqual(expect.arrayContaining([
      '/release/playtest',
      '/release/beta',
      '/release/download-preload',
      '/release/system-requirements',
      '/mechanics/factions',
      '/guides/maps',
      '/weapons',
      '/vehicles',
    ]));
  });

  it('uses the researched official entities and release facts', () => {
    expect(site.social.official).toBe('https://bulkhead.com/games/wardogs/');
    expect(site.social.discord).toBe('https://discord.gg/TxKKdspkCp');
    expect(site.social.youtube).toBe('https://www.youtube.com/watch?v=hVtmnaUCpuQ');
    expect(site.social.reddit).toBe('https://www.reddit.com/r/WarDogs/');
    expect(site.game.publisher).toBe('Team17');
    expect(en.home.hero.stats).toEqual([
      'Early Access Sep 10, 2026',
      'Updated Aug 2026',
      '100-Player Battles',
      '3 Teams',
      '1M+ Steam Wishlists',
    ]);
  });

  it('uses the access and field-guide navigation labels', () => {
    expect(en.nav.access).toBe('Access');
    expect(en.nav.accessLinks).toHaveLength(4);
    expect(en.nav.accessLinks.map((link: { href: string }) => link.href)).toEqual([
      '/release/playtest',
      '/release/beta',
      '/release/download-preload',
      '/release/system-requirements',
    ]);
  });

  it('keeps the researched English homepage structure without codes', () => {
    expect(en.home.start.cards).toHaveLength(4);
    expect(en.home.aboutGame.paragraphs).toHaveLength(2);
    expect(en.home.finalCta.title).toBeTruthy();
    expect(JSON.stringify(en.home)).not.toMatch(/redeem|code/i);
  });

  it('exposes a source-aware current status block from researched facts', () => {
    expect(en.home.status).toEqual({
      badge: 'Current Status',
      title: 'What is happening now?',
      description: 'Release and access details from the latest collected official sources.',
      reviewed: 'Reviewed Aug 23, 2026',
      items: [
        {
          label: 'Early Access',
          value: 'September 10, 2026',
          detail: 'Steam launch date',
          href: '/release/release-date',
        },
        {
          label: 'Current access',
          value: 'Closed Beta ended',
          detail: 'Check official Playtest routes',
          href: '/release/beta',
        },
        {
          label: 'Launch platform',
          value: 'Windows PC / Steam',
          detail: 'Confirmed platform',
          href: '/release/platforms',
        },
        {
          label: 'Match format',
          value: 'Up to 100 players',
          detail: 'Three teams, one Control Zone',
          href: '/guides/what-is-wardogs',
        },
      ],
    });
  });

  it('sends the recent-pages browse link to the recent index', () => {
    expect(homePage).toContain("recentPath(locale)");
    expect(homePage).not.toContain('listPath(NAVIGATION_CONFIG[1]?.key ?? \'guides\', locale)');
  });
});
