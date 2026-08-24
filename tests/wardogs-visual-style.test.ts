import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const css = readFileSync(new URL('../src/styles/globals.css', import.meta.url), 'utf8');
const home = readFileSync(new URL('../src/components/home/HomePage.astro', import.meta.url), 'utf8');
const header = readFileSync(new URL('../src/components/header/SiteHeader.astro', import.meta.url), 'utf8');
const landingLayout = readFileSync(
  new URL('../src/components/landing/LandingLayout.astro', import.meta.url),
  'utf8',
);
const baseLayout = readFileSync(
  new URL('../src/components/layout/BaseLayout.astro', import.meta.url),
  'utf8',
);
const comments = readFileSync(
  new URL('../src/components/article/Comments.astro', import.meta.url),
  'utf8',
);
const videoSection = readFileSync(new URL('../src/components/home/VideoSection.astro', import.meta.url), 'utf8');

describe('WARDOGS reference visual treatment', () => {
  it('defines a single square card frame without inset accents', () => {
    expect(css).toMatch(/\.card\s*\{/);
    expect(css).toMatch(/\.card\s*\{[\s\S]*border-radius:\s*0/);
    expect(css).toMatch(/\.card\s*\{[\s\S]*box-shadow:\s*none/);
    expect(css).toMatch(/\.card::before[\s\S]*display:\s*none/);
    expect(css).toMatch(/\.card::after[\s\S]*display:\s*none/);
    expect(css).toMatch(/:is\(div, aside, details, ol, pre, li\)[\s\S]*border-radius:\s*0/);
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

  it('uses one fixed warm-black theme without a theme switcher', () => {
    expect(header).not.toContain('ThemeToggle');
    expect(landingLayout).not.toContain('ThemeToggle');
    expect(header).not.toContain("import SearchButton from './SearchButton.astro';");
    expect(header).not.toContain('<SearchButton');
    expect(header).not.toContain('data-open-search');
    expect(header).not.toContain('search-trigger');
    expect(baseLayout).toContain('<html lang={mainLocale} class="dark scroll-smooth">');
    expect(baseLayout).not.toContain("localStorage.getItem('theme')");
    expect(baseLayout).not.toContain('prefers-color-scheme');
    expect(baseLayout).toContain("getPropertyValue('--background')");
    expect(baseLayout).not.toContain("getPropertyValue('--brand-text')");
    expect(css).toMatch(/:root,\s*\.dark\s*\{[\s\S]*--background:\s*28 14% 7%/);
    expect(css).not.toContain('.black');
    expect(css).not.toMatch(/color-scheme:\s*light/);
    expect(comments).toContain('data-theme="dark_dimmed"');
    expect(comments).not.toContain("? 'light'");
  });

  it('injects one consent-aware GA tag from the environment', () => {
    expect(baseLayout).toContain(
      "const gaId = env.PUBLIC_GA_ID ?? env.NEXT_PUBLIC_GA_ID;",
    );
    expect(baseLayout).toMatch(
      /<head>[\s\S]*?\{gaId && \([\s\S]*googletagmanager\.com\/gtag\/js\?id=' \+ gaId/,
    );
    expect(baseLayout).toContain("gtag('config', gaId, { send_page_view: false });");
    expect(baseLayout).toContain("window.gtag?.('config', gaId);");
    expect((baseLayout.match(/googletagmanager\.com\/gtag\/js/g) ?? []).length).toBe(1);
    expect(baseLayout).not.toContain('G-3Z1JGZ32DC');
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

  it('uses a single square frame around the hero video', () => {
    expect(videoSection).toContain('hero-video-frame');
    expect(css).toMatch(/\.hero-video-frame\s*\{[\s\S]*border:\s*1px solid/);
    expect(css).toMatch(/\.hero-video-frame\s*\{[\s\S]*border-radius:\s*0/);
    expect(css).toMatch(/\.hero-video-frame::before[\s\S]*display:\s*none/);
    expect(css).toMatch(/\.hero-video-frame::after[\s\S]*display:\s*none/);
  });
});
