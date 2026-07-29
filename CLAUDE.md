# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio / case-study site for Duran Köse, deployed at https://whoisduran.com/.

## Commands

- `npm run dev` — build the case-study images, then start the Next dev server on :3000
- `npm run build` — build the case-study images, then `next build`; CI runs this exact command before deploying
- `npm run lint` — ESLint (flat config: typescript-eslint + react-hooks + react-refresh rules)
- `npm run preview` — serve the static export in `out/` locally

No test suite exists in this repo.

## Architecture

Next.js 16 App Router, React 19, TypeScript, statically exported (`output: 'export'` in
`next.config.ts`). There is no server: `npm run build` produces `out/`, a directory of plain
files. Anything that needs a request at runtime — middleware, server actions, ISR, `next/image`
optimization — is unavailable by construction, and none of it is used.

**Two locales, two pre-rendered documents.** Danish is at `/`, English at `/en/`. App Router
root layouts own `<html>`, and `<html lang>` differs per locale, so there are two root layouts
in route groups: `app/(da)/` and `app/(en)/en/`. Both render the shared `app/RootShell.tsx`,
and both pages render `src/components/SiteBody.tsx`. `src/i18n/config.ts` (`LANG_PATHS`,
`LANG_META`) is the single source of truth for which locale lives where — the language switch,
the canonical/`hreflang` tags in `app/siteMetadata.ts`, and `app/sitemap.ts` all read from it.

The language is a property of the route, not client state. `src/i18n/LanguageContext.tsx` is a
pass-through provider that hands the layout's `lang` down; `useLanguage()` still works exactly
as before in every component, so adding a locale-aware component needs no new plumbing. Nothing
reads `localStorage` or mutates `<head>` at runtime — Next's `metadata` exports do that at build
time, per locale.

**Content is data-driven.** All copy lives in `src/data/*.ts` (profile, about, projects,
experience, education, skills, services, testimonials) — edit these to change site content, not
the JSX in `src/components/`. Each file is bilingual, shaped as `{ da: ..., en: ... }`. UI chrome
strings (nav, buttons, labels) are separate in `src/i18n/ui.ts`, which also holds the per-locale
SEO title and description that `app/siteMetadata.ts` reads.

**Case-study images are auto-discovered, not registered.** Drop images into
`src/assets/case-studies/{project-id}/` (sorted by filename, numerically) and
`scripts/build-case-images.mjs` picks them up. It runs before `next dev` and `next build`,
encodes 1600px and 480px WebP variants with `sharp` into `public/case-studies/`, content-hashes
the filenames, and writes `src/lib/caseStudyImages.generated.ts`. Both outputs are gitignored —
they are derived from the sources. `{project-id}` just needs to match that project's `id` field
in `src/data/projects.ts`; there is no image list to edit.

**Client boundary.** `SiteBody` carries `'use client'`, so the whole visible tree is a client
component — every section reads the language from context and animates on scroll. This is
deliberate for now: the SEO win comes from pre-rendering, which happens regardless. Pushing the
boundary down (server components selecting `projectsContent[lang]` and passing it as props, so
only one locale's data reaches the browser) is the open follow-up.

Two things depend on the DOM shape rather than on React: `RootShell` renders a `<div id="root">`
around the app because `useModalA11y` marks it `inert` while a modal is open, and modals portal
to `document.body` outside it. Anything running during pre-render must not touch `window` at
module or render scope — `useColumns` in `src/components/Projects.tsx` is the worked example.

Reusable UI primitives live in `src/components/ui/` (Button, Card, Tag, Reveal/Stagger for
Framer Motion scroll animation, ImageGallery/Lightbox for case-study screenshots) — check there
before adding new ones.

**Theme** is dark-only and CSS-variable based: design tokens live in `app/globals.css` as
space-separated RGB channels so Tailwind's `rgb(var(--token) / <alpha-value>)` works. There is
no light mode and no theme toggle. Fonts are self-hosted via `next/font/google` (`app/fonts.ts`)
and exposed as the `--font-sans` / `--font-display` variables that `tailwind.config.js` points at.

**Linting**: `eslint-config-next` is deliberately absent. Its peer range allows ESLint 10, but it
pulls in `eslint-plugin-react` / `jsx-a11y` / `import`, none of which support ESLint 10 yet —
adding it turns `npm run lint` and therefore CI red. `next build` still catches type errors and
client/server boundary violations.

**Deployment**: GitHub Actions (`.github/workflows/deploy.yml`) runs two independent jobs on
every push to `main`. `vps` builds and rsyncs `out/` into nginx's root
(`/var/www/whoisduran/dist` — named from the Vite era, it is just a path) on the VPS behind
Cloudflare; host, user, port and key come from repository secrets, so the workflow itself holds
no connection details. `pages` publishes `gh-pages/`, a redirect stub keeping the old
`dukocuk.github.io/portfolio/` URL alive. The nginx server block lives at `deploy/nginx.conf` so
it can't drift from the build it assumes — in particular its immutable cache rules for
`/_next/static/` and `/case-studies/`, both of which are content-hashed.
