import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const articlePage = readFileSync(
  new URL('../src/components/article/ArticlePage.astro', import.meta.url),
  'utf8',
);
const contentConfig = readFileSync(
  new URL('../src/content.config.ts', import.meta.url),
  'utf8',
);

describe('source-aware article status', () => {
  it('defines optional status metadata in the content schema', () => {
    expect(contentConfig).toContain('status: z.string().max(80).optional()');
    expect(contentConfig).toContain('lastVerified: z.string().max(80).optional()');
    expect(contentConfig).toContain('primarySource: z.string().url().optional()');
    expect(contentConfig).toContain('nextAction: z.string().max(120).optional()');
  });

  it('renders a single status strip from frontmatter values', () => {
    expect(articlePage).toContain('data-article-status');
    expect(articlePage).toContain('entry.data.status');
    expect(articlePage).toContain('entry.data.lastVerified');
    expect(articlePage).toContain('entry.data.primarySource');
    expect(articlePage).toContain('entry.data.nextAction');
  });
});
