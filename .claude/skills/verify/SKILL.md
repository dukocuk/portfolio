---
name: verify
description: How to drive this portfolio site in a real browser to verify UI changes (Playwright + Next dev server)
---

# Verifying UI changes in this repo

Surface is a browser GUI (Next.js App Router, statically exported, no client router beyond the
two locale routes). Drive it with Playwright headless Chromium.

## Recipe that works

1. `npm run dev` in the background — note the port from the output (3000, or 3001+ if occupied).
   There are two pages to check, not one: `http://localhost:3000/` (Danish) and
   `http://localhost:3000/en/` (English). A change to a shared component affects both.
2. Playwright is NOT a dependency of this repo. `npm i -D playwright` temporarily.
   **Uninstall it afterwards** (`npm uninstall playwright`) so it doesn't land in the repo diff.
   Chromium builds are cached at `~/AppData/Local/ms-playwright`, but the cached revision only
   works if it matches the playwright version npm just resolved — if `launch()` complains the
   executable is missing, `npx playwright install chromium-headless-shell` and carry on.
3. Write the driver script in the scratchpad dir. The scratchpad is outside the repo tree, so a
   bare `import 'playwright'` fails — resolve via the repo:
   ```js
   import { createRequire } from 'node:module';
   const { chromium } = createRequire('C:/Users/duran/repos/portfolio/package.json')('playwright');
   ```
4. `browser.newPage({ viewport: { width, height } })` — the option is `viewport`, NOT
   `viewportSize` (which is silently ignored and leaves you at 1280×720).
5. Listen for `page.on('console')` and `page.on('pageerror')`. Because the page is pre-rendered
   and then hydrated, a React hydration mismatch shows up only as a console error — the UI still
   looks right. It is the single most likely way to break this site without noticing.

## Verifying the static export rather than the dev server

`next dev` and `output: 'export'` can disagree. For anything touching routing, metadata or the
image pipeline, also check the real build: `npm run build`, then `npm run preview` (serves `out/`)
and re-run the script against that port. To check what a crawler sees, read the built file
directly — `out/index.html` and `out/en/index.html` — rather than the hydrated DOM.

### …and for routing, not even that is enough

`npm run preview` is `npx serve out`, which **does not behave like production**. Given a path
that is not a file, `serve` returns 404; nginx runs `try_files`. That difference is not academic:
it hid the open question about the language switch through the whole Vite→Next migration, because
the failure mode only exists on one of the two servers.

For anything touching routing or 404s, serve `out/` with a ~15-line static server in the
scratchpad that mirrors `deploy/nginx.conf` instead:

- exact file → serve it
- directory → redirect to the trailing-slash form, then `<path>/index.html`
- neither → **`404.html` with status 404** (this is what nginx does now:
  `try_files $uri $uri/ =404` plus `error_page 404 /404.html`)
- `/_next/static/` and `/case-studies/` → file or 404, never the fallback

Make the last rule a flag if you need to compare against the pre-2026-07 behaviour, which fell
back to `/index.html` with a 200.

Settled by that harness, so you don't have to re-derive it: clicking the language switch makes
the client router fetch `/index.txt` or `/en/index.txt` — **real files the export writes**, 200
under any server — and then hard-load the document, because the two locales have different root
layouts. The `__next.*.__PAGE__.txt` names in the `LanguageToggle` comment are requested *only*
by prefetch, which is why `prefetch={false}` is set there. The switch is not fragile.

## Gotchas / useful selectors

- Wait for `document.fonts.ready` and ~1s after scrolling a section into view — Framer Motion
  reveal animations and the row-height measure pass (`useEqualRowHeights`) need to settle before
  reading `offsetHeight`.
- Project cards: `#projects article`; their expand toggles: `#projects article button[aria-expanded]`.
  Pinned row heights are inline `style.minHeight` on the `<article>`.
- Case-study screenshots render only inside an expanded panel — there are no `<img>` tags on a
  freshly loaded page, which is expected, not a broken image pipeline.
- The language switch is ONE segmented `<a>` in `nav` containing both "DA" and "EN" spans.
  Locate it with `page.locator('nav a[hreflang]')` — it is the only nav link with that attribute.
  Do **not** match on the text "DA": `hasText` is a case-insensitive substring, and the Danish
  nav label "Ud**da**nnelse" matches it, so you silently drive the Education anchor instead.
  Clicking it *navigates* between `/` and `/en/`; assert on `page.url()` and re-query any
  element handles afterwards.
- The hero headline is animated one word per `inline-block` `<span>` with no whitespace text
  nodes between them, so `innerText` returns `Jegbyggersoftware,...`. Strip whitespace from both
  sides before comparing.
- Two-column card grid starts at 768px; below that `useEqualRowHeights` must pin nothing (empty
  `style.minHeight`). `useColumns` starts at 1 and corrects in an effect, so give it a tick.
- Case-study panels animate open/closed over ~300ms — wait ≥600ms after a toggle before measuring.
