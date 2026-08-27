import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import en from '~/locales/en.json';

const home = readFileSync(
  new URL('../src/components/home/HomePage.astro', import.meta.url),
  'utf8',
);
const header = readFileSync(
  new URL('../src/components/header/SiteHeader.astro', import.meta.url),
  'utf8',
);
const indexPage = readFileSync(new URL('../src/pages/wiki.astro', import.meta.url), 'utf8');

describe('WARDOGS wiki discovery surfaces', () => {
  it('defines the Wiki Index copy in the English locale', () => {
    expect(en.nav.index).toBe('Wiki Index');
    expect(en.shared.wikiIndexTitle).toBe('WARDOGS Wiki Index');
    expect(en.shared.wikiIndexDescription).toContain('Browse every published page');
  });

  it('exposes the Wiki Index from desktop and mobile navigation', () => {
    expect(header).toContain("localizePath('/wiki', locale)");
    expect(header).toContain("{nav.index ?? 'Wiki Index'}");
  });

  it('renders homepage database, official updates, and evidence sections', () => {
    expect(home).toContain("getEntriesByCategory('updates', locale)");
    expect(home).toContain('home.database');
    expect(home).toContain('home.evidence');
    expect(home).toContain("localizePath('/wiki', locale)");
  });

  it('builds the index from published content and provides list structured data', () => {
    expect(indexPage).toContain('getEntriesByCategory');
    expect(indexPage).toContain('urlListJsonLd');
    expect(indexPage).toContain('simpleBreadcrumbJsonLd');
    expect(indexPage).toContain('shared.wikiIndexTitle');
  });
});
