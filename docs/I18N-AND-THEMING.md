# i18n & theming

Two cross-cutting conventions: bilingual content and a dark-only token theme.

## Internationalization (DA / EN)

**The language is the route, not client state.** Danish is at `/`, English at
`/en/`, and each is pre-rendered as its own HTML document at build time. That is
what makes both languages crawlable and shareable; before the Next migration only
Danish existed in the markup, and English was produced by JavaScript after load.

### Config — [`src/i18n/config.ts`](../src/i18n/config.ts)
- `LANGS = ['da', 'en'] as const` and `type Lang = 'da' | 'en'`.
- `DEFAULT_LANG = 'da'` — Danish is the default and holds the domain root.
- `LANG_PATHS` — `{ da: '/', en: '/en/' }`. Single source of truth for the
  language switch, the canonical/`hreflang` tags, and the sitemap. Trailing
  slashes match `trailingSlash: true` in `next.config.ts`.
- `LANG_META` — the BCP 47 (`<html lang>`) and Open Graph (`og:locale`) forms.
- `otherLang(lang)` — the one the switch points at.

### State — [`LanguageContext.tsx`](../src/i18n/LanguageContext.tsx) + [`useLanguage.ts`](../src/i18n/useLanguage.ts)
- `LanguageProvider` is a `'use client'` pass-through: the root layout knows the
  locale from the route and hands it down. It holds no state, reads no storage,
  and mutates no `<head>` — Next's `metadata` exports do that at build time.
- `useLanguage()` returns `{ lang }` and throws if used outside the provider.
  Every component reads the language exactly as it did before, so nothing else
  had to change when the language stopped being client state.
- [`LanguageToggle`](../src/components/ui/LanguageToggle.tsx) is a `next/link`
  `<Link>`, **not** a button: a crawler has to be able to follow it to the other
  locale. Clicking it navigates; there is no in-place language swap.

### Metadata — [`app/siteMetadata.ts`](../app/siteMetadata.ts)
`buildMetadata(lang)` produces the per-locale `<head>`: title and description from
`uiStrings[lang].seo`, a shorter social title/description pair, the canonical URL,
`hreflang` alternates for `da` / `en` / `x-default`, and OG/Twitter cards.
`buildPersonJsonLd(lang)` produces the schema.org `Person` block, with `url`
pointing at the locale being rendered. [`app/sitemap.ts`](../app/sitemap.ts) lists
both URLs with their alternates.

> **Persistence was dropped deliberately.** A returning visitor who previously
> chose English now lands on Danish, because the URL is the only thing that
> decides the language. Re-adding a `localStorage` preference would mean
> redirecting on the Danish route, and a visible flash of Danish before it fires.

### Two kinds of text — keep them separate
| Kind | Lives in | Examples |
|------|----------|----------|
| **UI chrome** | [`src/i18n/ui.ts`](../src/i18n/ui.ts) (`uiStrings: Record<Lang, UIStrings>`) | nav labels, section eyebrows/titles/intros, button text, aria labels, lightbox/contact/booking strings, SEO title/description/`ogLocale` |
| **Content** | [`src/data/*.ts`](../src/data) | profile, about, projects, experience, education, services, testimonials, languages, popup — see [DATA-MODEL.md](./DATA-MODEL.md) |

When editing either, update **both** `da` and `en` so the languages stay aligned.

## Theming (dark only)

There is **no light mode and no theme toggle**. Everything is expressed through
CSS variables defined in [`app/globals.css`](../app/globals.css).

### Tokens as RGB channels
Tokens are stored as **space-separated RGB channels** (not hex, not `rgb()`), so
they compose with Tailwind's alpha syntax `rgb(var(--token) / <alpha-value>)`:

```css
:root {
  --c-base: 9 13 18;         /* deep slate near-black */
  --c-surface: 16 21 30;
  --c-surface-2: 22 29 41;
  --c-border: 33 42 56;
  --c-text: 232 237 243;
  --c-muted: 139 151 168;
  --c-accent: 20 184 166;    /* teal */
  --c-accent-2: 34 211 238;  /* cyan */
}
```

Tailwind's config maps these to color utilities (`bg-base`, `text-text`,
`border-border`, `text-accent`, the `accent-gradient`, etc.), so changing a token
here re-themes the whole site.

### Base styles & component helpers
- `@layer base`: smooth scroll with `scroll-padding-top: 5rem` (offsets the
  sticky navbar on anchor jumps), body defaults, keyboard `:focus-visible` ring,
  and accent `::selection`.
- `@layer components`: `.text-gradient` / `.text-shimmer` (a one-time accent
  sweep that respects reduced motion), `.display-hero` (fluid `clamp()` hero
  heading in Space Grotesk), and `.grain` (subtle texture overlay).

### Fonts
Inter + Space Grotesk, self-hosted at build time by `next/font/google` in
[`app/fonts.ts`](../app/fonts.ts). It emits the `@font-face` rules into the
pre-rendered HTML and exposes `--font-sans` / `--font-display`, which
`tailwind.config.js` points `font-sans` / `font-display` at. No third-party
request, and no render-blocking stylesheet. See [ARCHITECTURE.md](./ARCHITECTURE.md).
