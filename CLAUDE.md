# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio / case-study site for Duran Köse, deployed at https://dukocuk.github.io/portfolio/.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — typecheck (`tsc -b`) then bundle (`vite build`); CI runs this exact command before deploying
- `npm run lint` — ESLint (flat config: typescript-eslint + react-hooks + react-refresh rules)
- `npm run preview` — serve the production build locally

No test suite exists in this repo.

## Architecture

Single-page Vite + React 19 + TypeScript SPA — no router. `src/App.tsx` composes all section components in order (Navbar, Hero, About, Snapshot, Projects, Timeline, Education, Services, Testimonials, Philosophy, Contact, Footer); navigation is hash-anchor + scroll-spy (`src/hooks/useScrollSpy.ts`), not route-based.

**Content is data-driven.** All copy lives in `src/data/*.ts` (profile, about, projects, experience, education, skills, services, testimonials) — edit these to change site content, not the JSX in `src/components/`. Each file is bilingual, shaped as `{ da: ..., en: ... }`; Danish is the default (`src/i18n/config.ts`) because the crawler-visible `index.html` is Danish. Language state lives in `src/i18n/LanguageContext.tsx`; UI chrome strings (nav, buttons, labels) are separate in `src/i18n/ui.ts`.

**Case-study images are auto-discovered, not registered.** Drop images into `src/assets/case-studies/{project-id}/` (sorted by filename) and `src/lib/caseStudyImages.ts` picks them up via `import.meta.glob` + `vite-imagetools`, generating 1600px full and 480px thumbnail WebP variants automatically. There is no image list to edit in `src/data/projects.ts` — `{project-id}` just needs to match that project's `id` field.

Reusable UI primitives live in `src/components/ui/` (Button, Card, Tag, Reveal/Stagger for Framer Motion scroll animation, ImageGallery/Lightbox for case-study screenshots) — check there before adding new ones.

**Theme** is dark-only and CSS-variable based: design tokens live in `src/index.css` as space-separated RGB channels so Tailwind's `rgb(var(--token) / <alpha-value>)` works. There is no light mode and no theme toggle. An inline script in `index.html` applies only the saved language (`localStorage` key `lang`) to `<html lang>` before paint, so the crawler-visible language matches the chosen one without a flash.

**Deployment**: GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push to `main`. `vite.config.ts` sets `base: '/portfolio/'` to match the GitHub Pages subpath.
