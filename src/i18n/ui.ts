/**
 * UI message loader — runtime bridge between locale JSON files and components.
 *
 * Responsibilities:
 *   - Load the single English message object for every supported route.
 *
 * Only manages UI text (nav labels, buttons, home content). Article body translation
 * is handled by src/i18n/content.ts (MDX file-based, per-article fallback).
 */

import en from '~/locales/en.json';

/**
 * Get the full UI messages object for a locale, with English fallback.
 * Never throws — unknown locales return English.
 */
export function getUi(_locale: string): typeof en {
  return en;
}

/** Translation function: t('nav.bosses') → localized string. */
export function t(locale: string, key: string): unknown {
  const ui = getUi(locale);
  return key
    .split('.')
    .reduce<unknown>(
      (acc, k) =>
        acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[k] : undefined,
      ui,
    );
}
