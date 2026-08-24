import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const pageHeadingTargets = [
  ['src/components/home/HomePage.astro', '<h2 class="display-title'],
  ['src/components/home/QuickStart.astro', '<h2 class="display-title'],
  ['src/components/home/GameOverview.astro', '<h2 class="display-title'],
  ['src/components/article/ListPage.astro', '<h1 class="display-title'],
  ['src/components/article/RecentPage.astro', '<h1 class="display-title'],
  ['src/components/article/TagListPage.astro', '<h1 class="display-title'],
  ['src/components/article/TagsIndexPage.astro', '<h1 class="display-title'],
  ['src/components/article/ArticlePage.astro', '<h1 class="display-title'],
  ['src/components/home/FaqSection.astro', '<h1 class="display-title'],
  ['src/components/layout/LegalPage.astro', '<h1 class="display-title'],
] as const;

describe('WARDOGS display title consistency', () => {
  it('uses the Hero display face for homepage module and wiki page headings', () => {
    for (const [path, heading] of pageHeadingTargets) {
      const source = readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
      expect(source, path).toContain(heading);
    }
  });
});
