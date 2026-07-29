// ============================================================
// i18n configuration — supported languages and their routes.
// ============================================================

export const LANGS = ['da', 'en'] as const;

export type Lang = (typeof LANGS)[number];

// Danish is the default per request, and holds the domain root.
export const DEFAULT_LANG: Lang = 'da';

// Each locale is a real, separately pre-rendered URL — this is the single
// source of truth for the language switch, the canonical/hreflang tags and the
// sitemap. Trailing slashes match `trailingSlash: true` in next.config.ts.
export const LANG_PATHS: Record<Lang, string> = {
  da: '/',
  en: '/en/',
};

// BCP 47 / Open Graph forms of the same two locales.
export const LANG_META: Record<Lang, { htmlLang: string; ogLocale: string }> = {
  da: { htmlLang: 'da', ogLocale: 'da_DK' },
  en: { htmlLang: 'en', ogLocale: 'en_US' },
};

export const otherLang = (lang: Lang): Lang => (lang === 'da' ? 'en' : 'da');
