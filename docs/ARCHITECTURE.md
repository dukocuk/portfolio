# Architecture

How the site is wired together. See also [PROJECT-STRUCTURE.md](./PROJECT-STRUCTURE.md)
for the file tree and [COMPONENTS.md](./COMPONENTS.md) for the component catalog.

## Entry & composition

Next.js App Router, statically exported. `next build` writes `out/` — plain files,
no Node process at runtime.

- **Two locale routes, two pre-rendered documents.** Danish is at `/`, English at
  `/en/`. Root layouts own `<html>` and `<html lang>` differs per locale, so there
  are two of them, in route groups: [`app/(da)/layout.tsx`](../app/\(da\)/layout.tsx)
  and [`app/(en)/en/layout.tsx`](../app/\(en\)/en/layout.tsx). Each exports its own
  `metadata` — title, description, canonical, `hreflang` alternates, OG/Twitter —
  built by [`app/siteMetadata.ts`](../app/siteMetadata.ts). No pre-paint script is
  needed any more: the server already emits the right language.
- [`app/RootShell.tsx`](../app/RootShell.tsx) is the shared shell both layouts
  render: `<html>`/`<body>`, the `next/font` variables, JSON-LD `Person` structured
  data, `<LanguageProvider>` (see [I18N-AND-THEMING.md](./I18N-AND-THEMING.md)), and
  a `<div id="root">` wrapper that `useModalA11y` marks `inert` while a modal is open.
- [`src/components/SiteBody.tsx`](../src/components/SiteBody.tsx) composes every
  section in fixed order and carries the `'use client'` boundary. Within a locale
  there is **no router** — it is one scrollable page:

  ```
  Navbar
  main:
    Hero → About → Snapshot → Projects → Timeline → Education
    → Services → Testimonials → Philosophy → Contact
  Footer
  BackToTop      (floating)
  FirstVisitModal (once-per-browser gate)
  ```

  A `sr-only` skip link precedes the navbar for keyboard/screen-reader users.

## Navigation: hash anchors + scroll-spy (no router)

- Each section renders with a stable `id` used as a scroll anchor. The nav order
  is the single source of truth in `navItems` ([`src/data/profile.ts`](../src/data/profile.ts));
  visible labels are localized in [`src/i18n/ui.ts`](../src/i18n/ui.ts).
- [`src/hooks/useScrollSpy.ts`](../src/hooks/useScrollSpy.ts) drives the active
  nav state with an `IntersectionObserver` (default `rootMargin`
  `-45% 0px -45% 0px`, thresholds `[0, 0.25, 0.5, 1]`), picking the entry with
  the highest intersection ratio.
- [`Navbar`](../src/components/Navbar.tsx) also observes the **Philosophy**
  section even though it is intentionally *not* a nav item: when Philosophy is in
  view the active pill goes neutral instead of staying stuck on Testimonials.

## Case-study image pipeline (auto-discovery)

Images are **not registered anywhere** — they are discovered from the filesystem by
[`scripts/build-case-images.mjs`](../scripts/build-case-images.mjs), which runs
before `next dev` and `next build`:

- It walks `src/assets/case-studies/*/` and encodes two `sharp` variants per raster
  image into `public/case-studies/`: a **full** 1600px WebP at quality 80 and a
  **thumb** 480px WebP at quality 75 — the same sizes the `vite-imagetools` query
  params produced before the Next migration.
- Filenames carry a content hash, which is what lets nginx cache `/case-studies/`
  immutably (see [`deploy/nginx.conf`](../deploy/nginx.conf)). Encodes are cached
  under `node_modules/.cache/`, so an unchanged image is not re-encoded.
- `.webp/.gif/.svg` files pass through untouched (used as both src and thumb).
- Files are bucketed by the `{project-id}` folder name and sorted by filename
  with **numeric collation** (so `image10` sorts after `image2`, not `image1`).
- The result is written to `src/lib/caseStudyImages.generated.ts`. Both it and
  `public/case-studies/` are gitignored — they are derived from the sources.
- [`src/lib/caseStudyImages.ts`](../src/lib/caseStudyImages.ts) reads that manifest
  and exposes `getCaseStudyImages(id, alt)`, returning `ProjectImage[]` for a
  project; the data layer calls it to attach `images` to each `Project`
  (see [DATA-MODEL.md](./DATA-MODEL.md)).

**To add screenshots:** drop files into `src/assets/case-studies/{project-id}/`
where `{project-id}` matches that project's `id` in
[`src/data/projects.ts`](../src/data/projects.ts). No list to edit.

## Styling & theming

Dark-only, CSS-variable based. Design tokens live in
[`app/globals.css`](../app/globals.css) as **space-separated RGB channels** so
Tailwind's `rgb(var(--token) / <alpha-value>)` composes with opacity. There is no
light mode and no theme toggle. Details in [I18N-AND-THEMING.md](./I18N-AND-THEMING.md).

## Animation

Framer Motion scroll reveals. Shared variants live in
[`src/lib/motion.ts`](../src/lib/motion.ts) (`fadeUp`, `staggerContainer`,
`staggerItem`, `viewportOnce`) and are consumed through the
[`Reveal`](../src/components/ui/Reveal.tsx) / [`Stagger`](../src/components/ui/Stagger.tsx)
wrappers, which collapse to static, fully-visible output under
`prefers-reduced-motion`.

## Build & deploy

- `npm run build` generates the case-study images, then runs `next build`. Next
  typechecks as part of that, so a type error fails the build.
- [`next.config.ts`](../next.config.ts) sets `output: 'export'` (static files, no
  server), `trailingSlash: true` (so each locale is a directory with its own
  `index.html`, which is what nginx's `try_files $uri $uri/` resolves), and
  `images: { unoptimized: true }` (the default image optimizer is a server feature
  and hard-errors under export — the prebuild script covers that job instead).
- CI (`.github/workflows/deploy.yml`) has two independent jobs on every push to
  `main`: `vps` builds and rsyncs `out/` into nginx's root on the VPS, and `pages`
  publishes [`gh-pages/`](../gh-pages/) — a redirect stub — so the old
  `dukocuk.github.io/portfolio/` URL keeps working.
- The nginx server block lives in the repo at [`deploy/nginx.conf`](../deploy/nginx.conf)
  so it can't drift from the build it assumes — in particular the immutable cache
  rules for `/_next/static/` and `/case-studies/`, both content-hashed by the build.
- `eslint-config-next` is deliberately not installed: its bundled plugins don't
  support ESLint 10, which this repo is on. `next build` still catches type errors
  and client/server boundary violations.
- Cal.com booking is lazy — nothing Cal-related loads until the visitor opens the
  booking chooser (see [`BookingButton`](../src/components/ui/BookingButton.tsx)
  in [COMPONENTS.md](./COMPONENTS.md)).
