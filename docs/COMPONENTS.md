# Components, hooks & helpers

Catalog of the React components, hooks, and lib helpers. Content itself lives in
the data layer ([DATA-MODEL.md](./DATA-MODEL.md)); these render it.

> **Before adding a new primitive, check `src/components/ui/` first** — most
> presentational needs (buttons, cards, tags, reveals, galleries) are already
> covered.

## Section components (`src/components/`)

Composed in order by [`App.tsx`](../src/App.tsx). Each renders one site section
and reads its copy from `src/data/` + `src/i18n/ui.ts`.

| Component | Renders |
|-----------|---------|
| `Navbar` | Sticky top nav; active pill driven by `useScrollSpy`. Also observes the Philosophy section so the pill goes neutral there instead of stuck on Testimonials. |
| `Hero` | Landing headline (`id="home"`) with gradient accent over `GradientMesh`. |
| `About` | About paragraphs + spoken languages. |
| `Snapshot` | "Professional snapshot" label/detail grid. |
| `Projects` | Case-study grid; maps `projectsContent[lang]` to `ProjectCard` (first card featured). |
| `ProjectCard` | One case study; header strip + summary + tech tags, expands into `sections` and an image gallery. Signature: `ProjectCard({ project, open, onToggle, minHeight, ref, featured })` — expansion and height are controlled by `Projects`, which measures each grid row's tallest collapsed card (`useEqualRowHeights`) and pins every card in that row to it, so expanding one card never resizes its neighbour. |
| `Timeline` | Experience timeline (`id="experience"`). |
| `Education` | Academic history. |
| `Services` | "What I can help with" grid. |
| `Testimonials` | Reference quotes. |
| `Philosophy` | Work-philosophy points — intentionally **not** a nav item. |
| `Contact` | Email-only contact (no form), GPG key download + fingerprint copy, and the booking CTA. |
| `Footer` | Footer; no social links. |
| `Section` | Shared wrapper: semantic `<section>` landmark with accessible heading and a reveal-on-scroll header. Props: `{ id, eyebrow, title, intro, index, children, className }`. |

## UI primitives (`src/components/ui/`)

| Primitive | Purpose |
|-----------|---------|
| `Button` | Styled anchor/button. Omits DOM drag/animation handlers that clash with Framer Motion. Props include `variant`. |
| `buttonStyles.ts` | `buttonClasses(variant, size)` + `ButtonVariant` (`primary`/`outline`/`ghost`), size (`md`/`sm`). Kept out of `Button.tsx` so non-anchor triggers (e.g. `BookingButton`) can share styles without breaking fast refresh. |
| `Card` | Surface card; with `hover` it lifts and accents the border without mousemove gradients (cheap hover in Brave). |
| `Tag` | Small pill for a tech/label string. |
| `Reveal` | Scroll-reveal wrapper; collapses to a static, fully-visible element under `prefers-reduced-motion`. Props: `{ variants, className, as, stagger }`. |
| `Stagger` | `StaggerGroup` (parent) + `StaggerItem` (child) for sequenced reveal of a list/grid. |
| `ImageGallery` | Thumbnail strip of case-study screenshots; `onOpen` hands off to the lightbox. |
| `Lightbox` | Full-size viewer with Escape/backdrop-click close and prev/next navigation; locks body scroll while open. |
| `ProjectVisual` | Exports `ProjectHeader({ icon, type })` — a domain icon chip + category strip for project cards. |
| `BookingButton` | Public booking CTA. On click opens a "How should we meet?" chooser (in-person vs online). **Lazy:** the Cal.com embed script is only fetched when the chooser opens, and its iframe loads on the choice click. Booker theme mirrors `src/index.css` tokens. |
| `LanguageToggle` | Segmented DA/EN switch; the whole control is one button that toggles language. |
| `GradientMesh` | Static teal/cyan mesh for the hero background (avoids costly large animated blur layers). |
| `ScrollProgress` | Thin progress bar pinned to the top of the viewport, tracking page scroll. |
| `BackToTop` | Floating back-to-top button (rendered at the app root). |
| `FirstVisitModal` | Blocking once-per-browser notice; the only exit is the CTA (no Escape / no backdrop dismissal). Copy from `src/data/popup.ts`. |

## Hooks (`src/hooks/`)

- **`useScrollSpy(sectionIds, rootMargin?)`** — returns the `id` of the section
  currently in view via `IntersectionObserver` (default `rootMargin`
  `-45% 0px -45% 0px`, thresholds `[0, 0.25, 0.5, 1]`), seeding from
  `sectionIds[0]`. Drives the navbar active state.
- **`useBodyScrollLock(active)`** — locks page scroll for modals/lightbox.
  **Ref-counted at module level** so overlapping locks share one counter. Uses
  `position: fixed` + saved offset (not `overflow: hidden`) to avoid broken
  mobile touch-scroll, and deliberately never touches `body.style.overflow`
  because the Cal.com embed manages that property itself.

## Lib helpers (`src/lib/`)

- **`caseStudyImages.ts`** — `getCaseStudyImages(id, alt)`. Auto-discovers +
  transforms case-study images; see [ARCHITECTURE.md](./ARCHITECTURE.md).
- **`motion.ts`** — shared Framer Motion `Variants`: `fadeUp`,
  `staggerContainer`, `staggerItem`, and the `viewportOnce` viewport config
  (reveals fire once, slightly before fully in view).
- **`prefetchImage.ts`** — `prefetchImage(url)`. Fire-and-forget prefetch that
  dedupes by URL (used to warm full-size images before the lightbox opens).
