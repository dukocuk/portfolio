# Architecture

How the SPA is wired together. See also [PROJECT-STRUCTURE.md](./PROJECT-STRUCTURE.md)
for the file tree and [COMPONENTS.md](./COMPONENTS.md) for the component catalog.

## Entry & composition

- [`index.html`](../index.html) is the shell: SEO/Open-Graph/Twitter meta,
  JSON-LD `Person` structured data, Google Fonts loaded via `<link>` (not CSS
  `@import`) so the request starts as the HTML parses, and a **pre-paint inline
  script** that reads `localStorage['lang']` and sets `<html lang>` before React
  mounts (so the crawler-visible language matches the chosen one without a flash).
- [`src/main.tsx`](../src/main.tsx) mounts `<App/>` inside `<StrictMode>` and
  wraps it in `<LanguageProvider>` (see [I18N-AND-THEMING.md](./I18N-AND-THEMING.md)).
- [`src/App.tsx`](../src/App.tsx) composes every section in fixed order. There is
  **no router** — the whole site is one scrollable page:

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

Images are **not registered anywhere** — they are discovered from the filesystem
by [`src/lib/caseStudyImages.ts`](../src/lib/caseStudyImages.ts):

- `import.meta.glob('../assets/case-studies/*/*.{png,jpg,jpeg}', …)` eagerly
  imports two variants per raster image via `vite-imagetools` query params:
  a **full** `?w=1600&format=webp&quality=80` and a **thumb**
  `?w=480&format=webp&quality=75`.
- `.webp/.gif/.svg` files pass through untouched (used as both src and thumb).
- Files are bucketed by the `{project-id}` folder name and sorted by filename
  with **numeric collation** (so `image10` sorts after `image2`, not `image1`).
- `getCaseStudyImages(id, alt)` returns `ProjectImage[]` for a project; the
  data layer calls it to attach `images` to each `Project`
  (see [DATA-MODEL.md](./DATA-MODEL.md)).

**To add screenshots:** drop files into `src/assets/case-studies/{project-id}/`
where `{project-id}` matches that project's `id` in
[`src/data/projects.ts`](../src/data/projects.ts). No list to edit.

## Styling & theming

Dark-only, CSS-variable based. Design tokens live in
[`src/index.css`](../src/index.css) as **space-separated RGB channels** so
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

- `npm run build` = `tsc -b && vite build` — a typecheck failure fails the build.
- [`vite.config.ts`](../vite.config.ts) sets `base: '/portfolio/'` to match the
  GitHub Pages subpath and registers the `react()` and `imagetools()` plugins.
- CI (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every
  push to `main`. (The deploy step retries `deploy-pages` a few times due to a
  known upstream Pages flakiness.)
- Cal.com booking is lazy — nothing Cal-related loads until the visitor opens the
  booking chooser (see [`BookingButton`](../src/components/ui/BookingButton.tsx)
  in [COMPONENTS.md](./COMPONENTS.md)).
