# i18n & theming

Two cross-cutting conventions: bilingual content and a dark-only token theme.

## Internationalization (DA / EN)

### Config — [`src/i18n/config.ts`](../src/i18n/config.ts)
- `LANGS = ['da', 'en'] as const` and `type Lang = 'da' | 'en'`.
- `DEFAULT_LANG = 'da'` — Danish is the default because the crawler-visible
  `index.html` is Danish.
- `STORAGE_KEY = 'lang'` — the `localStorage` key.
- `isLang(value)` — type guard used when reading persisted/unknown values.

### State — [`LanguageContext.tsx`](../src/i18n/LanguageContext.tsx) + [`useLanguage.ts`](../src/i18n/useLanguage.ts)
- `LanguageProvider` (wrapping `<App/>` in `main.tsx`) holds the current `lang`.
  Initial value comes from `localStorage['lang']` (validated by `isLang`), else
  `DEFAULT_LANG`.
- On every language change it persists to `localStorage` **and** syncs the
  document: `document.documentElement.lang`, `document.title`, the
  `meta[name="description"]`, and `meta[property="og:locale"]` — all from the
  active language's `seo` strings, so bookmarks, tabs, and screen readers reflect
  the choice.
- `useLanguage()` returns `{ lang, setLang, toggleLang }` and throws if used
  outside the provider. `LanguageToggle` calls `toggleLang`.

### Pre-paint sync
An inline script in [`index.html`](../index.html) reads `localStorage['lang']`
and sets `<html lang>` **before React mounts**, so the crawler-visible language
matches the chosen one with no flash. The provider then keeps it in sync at
runtime.

### Two kinds of text — keep them separate
| Kind | Lives in | Examples |
|------|----------|----------|
| **UI chrome** | [`src/i18n/ui.ts`](../src/i18n/ui.ts) (`uiStrings: Record<Lang, UIStrings>`) | nav labels, section eyebrows/titles/intros, button text, aria labels, lightbox/contact/booking strings, SEO title/description/`ogLocale` |
| **Content** | [`src/data/*.ts`](../src/data) | profile, about, projects, experience, education, services, testimonials, languages, popup — see [DATA-MODEL.md](./DATA-MODEL.md) |

When editing either, update **both** `da` and `en` so the languages stay aligned.

## Theming (dark only)

There is **no light mode and no theme toggle**. Everything is expressed through
CSS variables defined in [`src/index.css`](../src/index.css).

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
Loaded via `<link>` in `index.html` (Inter + Space Grotesk) rather than a CSS
`@import`, so the font CSS downloads in parallel with the bundle. See
[ARCHITECTURE.md](./ARCHITECTURE.md).
