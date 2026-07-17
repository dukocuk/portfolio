---
name: verify
description: How to drive this portfolio site in a real browser to verify UI changes (Playwright + Vite dev server)
---

# Verifying UI changes in this repo

Surface is a browser GUI (Vite + React SPA, no router). Drive it with Playwright headless Chromium.

## Recipe that works

1. `npm run dev` in the background — note the port from the output (5173, or 5174+ if occupied). The app is served under `/portfolio/`, e.g. `http://localhost:5174/portfolio/`.
2. Playwright is NOT a dependency of this repo. `npm i -D playwright` temporarily (Chromium builds are already cached at `~/AppData/Local/ms-playwright`, so no browser download). **Uninstall it afterwards** (`npm uninstall playwright`) so it doesn't land in the repo diff.
3. Write the driver script in the scratchpad dir. The scratchpad is outside the repo tree, so a bare `import 'playwright'` fails — resolve via the repo:
   ```js
   import { createRequire } from 'node:module';
   const { chromium } = createRequire('C:/Users/duran/repos/portfolio/package.json')('playwright');
   ```
4. `browser.newPage({ viewport: { width, height } })` — the option is `viewport`, NOT `viewportSize` (which is silently ignored and leaves you at 1280×720).

## Gotchas / useful selectors

- Wait for `document.fonts.ready` and ~1s after scrolling a section into view — Framer Motion reveal animations and the row-height measure pass (`useEqualRowHeights`) need to settle before reading `offsetHeight`.
- Project cards: `#projects article`; their expand toggles: `#projects article button[aria-expanded]`. Pinned row heights are inline `style.minHeight` on the `<article>`.
- Language switcher is ONE segmented `<button>` in `nav` containing both "DA" and "EN" spans — locate with `page.locator('nav button', { hasText: 'DA' })`; clicking it toggles DA↔EN.
- Two-column card grid starts at 768px; below that `useEqualRowHeights` must pin nothing (empty `style.minHeight`).
- Case-study panels animate open/closed over ~300ms — wait ≥600ms after a toggle before measuring.
