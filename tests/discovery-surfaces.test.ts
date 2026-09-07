import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const listPage = readFileSync(
  new URL('../src/components/article/ListPage.astro', import.meta.url),
  'utf8',
);
const tagsIndexPage = readFileSync(
  new URL('../src/components/article/TagsIndexPage.astro', import.meta.url),
  'utf8',
);
const homePage = readFileSync(
  new URL('../src/components/home/HomePage.astro', import.meta.url),
  'utf8',
);
const astroConfig = readFileSync(new URL('../astro.config.ts', import.meta.url), 'utf8');

describe('WARDOGS discovery surfaces', () => {
  it('labels category coverage and keeps media groups explicit', () => {
    expect(listPage).toContain('shared.categoryPages');
    expect(listPage).toContain('shared.withImages');
    expect(listPage).toContain('shared.withoutImages');
  });

  it('keeps the tag directory reachable without making it an index target', () => {
    expect(tagsIndexPage).toContain('noindex={true}');
  });

  it('gives database cards a direct category action label', () => {
    expect(homePage).toContain('database.browseCategory');
  });

  it('keeps the noindex tag directory out of the sitemap', () => {
    expect(astroConfig).toContain("noindexPaths.add('/tags')");
  });
});
