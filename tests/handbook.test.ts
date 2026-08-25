/**
 * English handbook frontmatter and ordering gate (docs/handbook/en/*.md).
 *
 * Pure fs scan (no astro:content under Vitest — see lib/url notes).
 */
import { describe, expect, it } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  chaptersForLocale,
  handbookPath,
  parseHandbookId,
  prevNext,
  sortChapters,
  type ChapterLike,
} from '~/lib/handbook';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const HANDBOOK_DIR = path.resolve(ROOT, 'docs/handbook');

function listChapters(locale: string): string[] {
  const dir = path.join(HANDBOOK_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();
}

function readFrontmatter(locale: string, file: string): Record<string, string> {
  const raw = fs.readFileSync(path.join(HANDBOOK_DIR, locale, file), 'utf8');
  const fm = raw.split('---')[1] ?? '';
  const out: Record<string, string> = {};
  for (const line of fm.split('\n')) {
    const m = line.match(/^([a-zA-Z]+):\s*(.+)$/);
    if (m) out[m[1]] = m[2].trim();
  }
  return out;
}

describe('handbook: English-only frontmatter', () => {
  it('frontmatter carries the required fields', () => {
    for (const locale of ['en']) {
      for (const file of listChapters(locale)) {
        const fm = readFrontmatter(locale, file);
        for (const key of ['title', 'description', 'manual', 'order']) {
          expect(fm[key], `${locale}/${file}: missing "${key}"`).toBeTruthy();
        }
        expect(['learn', 'dev'], `${locale}/${file}: manual must be learn|dev`).toContain(
          fm.manual,
        );
      }
    }
  });

  it('order is unique within each manual', () => {
    for (const locale of ['en']) {
      const seen = new Map<string, string>();
      for (const file of listChapters(locale)) {
        const fm = readFrontmatter(locale, file);
        const key = `${fm.manual}:${fm.order}`;
        expect(seen.has(key), `${locale}/${file}: duplicate order ${key} (also ${seen.get(key)})`)
          .toBe(false);
        seen.set(key, file);
      }
    }
  });
});

describe('lib/handbook pure functions', () => {
  const mk = (id: string, manual: 'learn' | 'dev', order: number): ChapterLike => ({
    id,
    data: { manual, order },
  });
  const list = [
    mk('en/pick', 'learn', 1),
    mk('en/deploy', 'learn', 4),
    mk('en/customize', 'dev', 2),
    mk('en/pick2', 'learn', 2),
    mk('en/arch', 'dev', 1),
  ];

  it('parseHandbookId strips .md and rejects junk', () => {
    expect(parseHandbookId('en/pick-your-game.md')).toEqual({ locale: 'en', slug: 'pick-your-game' });
    expect(parseHandbookId('zh/launch')).toBeNull();
    expect(parseHandbookId('fr/launch')).toBeNull();
    expect(parseHandbookId('noseparator')).toBeNull();
    expect(parseHandbookId('en/')).toBeNull();
  });

  it('sortChapters: learn before dev, order ascending', () => {
    const sorted = sortChapters(list).map((c) => c.id);
    expect(sorted).toEqual(['en/pick', 'en/pick2', 'en/deploy', 'en/arch', 'en/customize']);
  });

  it('prevNext stays inside the same manual', () => {
    const en = chaptersForLocale(list, 'en');
    // Last learn chapter: has a dev chapter after it globally, but next must be null.
    expect(prevNext(en, 'en/deploy')).toEqual({
      prev: { id: 'en/pick2', data: { manual: 'learn', order: 2 } },
      next: null,
    });
    expect(prevNext(en, 'en/pick2').next?.id).toBe('en/deploy');
    expect(prevNext(en, 'en/customize').next).toBeNull();
    expect(prevNext(en, 'en/arch').prev).toBeNull();
    expect(prevNext(en, 'en/missing')).toEqual({ prev: null, next: null });
  });

  it('handbookPath builds locale-correct URLs', () => {
    expect(handbookPath('en', 'pick-your-game')).toBe('/landing/docs/pick-your-game');
    expect(handbookPath('en', '', true)).toBe('/landing/docs');
  });
});
