// ============================================================
// i18n configuration — supported languages and defaults.
// ============================================================

export const LANGS = ['da', 'en'] as const;

export type Lang = (typeof LANGS)[number];

// Danish is the default per request — the crawler-visible index.html is also Danish.
export const DEFAULT_LANG: Lang = 'da';

export const STORAGE_KEY = 'lang';

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}
