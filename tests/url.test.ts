import { describe, it, expect } from 'vitest';
import {
  localizePath,
  listPath,
  detailPath,
  homeUrl,
  localeFromPath,
  slugifyTag,
  absoluteUrl,
  languageAlternates,
} from '~/lib/url';

describe('url helpers', () => {
  describe('localizePath', () => {
    it('returns the path unchanged for the default locale (en)', () => {
      expect(localizePath('/bosses', 'en')).toBe('/bosses');
      expect(localizePath('/bosses/emberfang', 'en')).toBe('/bosses/emberfang');
    });

    it('ensures leading slash on input without one', () => {
      expect(localizePath('about', 'en')).toBe('/about');
    });
  });

  describe('homeUrl', () => {
    it('returns / for default locale', () => {
      expect(homeUrl('en')).toBe('/');
    });
  });

  describe('listPath', () => {
    it('builds the correct English list URL', () => {
      expect(listPath('bosses', 'en')).toBe('/bosses');
      expect(listPath('codes', 'en')).toBe('/codes');
    });
  });

  describe('detailPath', () => {
    it('builds the correct English article URL', () => {
      expect(detailPath('bosses', 'emberfang', 'en')).toBe('/bosses/emberfang');
    });

    it('handles nested slugs', () => {
      expect(detailPath('guides', 'early-game/beginner', 'en')).toBe(
        '/guides/early-game/beginner',
      );
    });
  });

  describe('localeFromPath', () => {
    it('returns the default locale when no prefix is present', () => {
      expect(localeFromPath('/bosses/emberfang')).toBe('en');
      expect(localeFromPath('/')).toBe('en');
      expect(localeFromPath('')).toBe('en');
    });
  });
});

describe('slugifyTag (CJK / non-ASCII fallback)', () => {
  it('slugifies ASCII tags to lowercase kebab-case', () => {
    expect(slugifyTag('Boss Guide')).toBe('boss-guide');
    expect(slugifyTag('Fire_Warden')).toBe('fire-warden');
  });

  it('returns CJK tags raw instead of collapsing to empty', () => {
    // The ASCII branch strips every CJK char → '' → all such tags would
    // collide on /tags/. The raw fallback keeps them unique; Astro writes
    // params to disk verbatim, so the built directory is the raw tag and
    // browser-encoded links (/tags/%E7%84%B0…) resolve to it.
    const zh = slugifyTag('焰牙');
    expect(zh).toBe('焰牙');
    expect(zh).not.toBe('');
  });

  it('keeps two different CJK tags distinguishable', () => {
    expect(slugifyTag('焰牙')).not.toBe(slugifyTag('风暴召唤者'));
  });

  it('keeps pure-symbol tags non-empty', () => {
    // Whatever the exact characters, the slug is stable and distinct from ''
    // — the property the fallback exists to guarantee.
    expect(slugifyTag('!!!')).toBe('!!!');
    expect(slugifyTag('  ???  ')).toBe('???');
  });
});

describe('absoluteUrl', () => {
  it('prefixes siteUrl and applies the locale prefix rules', () => {
    expect(absoluteUrl('/bosses', 'en')).toMatch(/^https:\/\/[^/]+\/bosses$/);
  });
});

describe('languageAlternates', () => {
  it('builds absolute hreflang entries for exactly the given locales', () => {
    const alts = languageAlternates((loc) => detailPath('bosses', 'x', loc), ['en']);
    expect(alts).toHaveLength(1);
    expect(alts[0]).toEqual({ hreflang: 'en', href: expect.stringMatching(/\/bosses\/x$/) });
  });

  it('never emits x-default (BaseLayout derives it separately)', () => {
    const alts = languageAlternates((loc) => listPath('guides', loc), ['en']);
    expect(alts.some((a) => a.hreflang === 'x-default')).toBe(false);
  });

});
