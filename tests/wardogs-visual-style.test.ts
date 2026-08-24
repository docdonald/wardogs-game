import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const css = readFileSync(new URL('../src/styles/globals.css', import.meta.url), 'utf8');
const home = readFileSync(new URL('../src/components/home/HomePage.astro', import.meta.url), 'utf8');
const header = readFileSync(new URL('../src/components/header/SiteHeader.astro', import.meta.url), 'utf8');

describe('WARDOGS reference visual treatment', () => {
  it('defines layered card framing with corner accents', () => {
    expect(css).toMatch(/\.card\s*\{/);
    expect(css).toMatch(/\.card::before/);
    expect(css).toMatch(/\.card::after/);
    expect(css).toMatch(/box-shadow:\s*inset/);
  });

  it('applies the condensed display title class to the homepage hero title', () => {
    expect(home).toContain('display-title');
    expect(css).toMatch(/\.display-title\s*\{/);
    expect(css).toMatch(/Impact/);
    expect(css).toMatch(/font-stretch:\s*condensed/);
  });

  it('uses the favicon asset for the header brand mark', () => {
    expect(header).toContain('/favicon_io/android-chrome-192x192.png');
    expect(header).toContain('alt=""');
    expect(header).not.toContain('<Icon name="lucide:hammer" class="h-6 w-6 text-nav" />');
  });

  it('uses the official trailer as a muted looping hero background with a fallback', () => {
    expect(home).toContain('data-hero-video-background');
    expect(home).toContain('youtube-nocookie.com/embed/${hero.videoId}');
    expect(home).toContain('autoplay=1&mute=1');
    expect(home).toContain('loop=1');
    expect(home).toContain('i.ytimg.com/vi/${hero.videoId}/maxresdefault.jpg');
    expect(css).toMatch(/\.hero-field\s*\{/);
    expect(css).toMatch(/background-image:/);
  });

  it('keeps the hero copy overlay lighter so the official footage remains visible', () => {
    expect(css).toMatch(/hero-field__veil[\s\S]*0\.84/);
    expect(css).toMatch(/hero-field__veil[\s\S]*0\.66/);
    expect(css).toMatch(/hero-field__veil[\s\S]*0\.42/);
  });
});
