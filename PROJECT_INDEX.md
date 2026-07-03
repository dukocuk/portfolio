# Project Index: portfolio

Generated: 2026-05-27 · Personal portfolio site for Duran Köse (single-page React app)

## Project Structure

```
portfolio/
├── src/
│   ├── main.tsx              # React entry point
│   ├── App.tsx               # Page composition (section order)
│   ├── index.css             # Tailwind layers + global styles
│   ├── components/           # Section + UI components
│   │   └── ui/               # Reusable primitives (Button, Card, Tag, ...)
│   ├── data/                 # Content source-of-truth (typed consts)
│   ├── hooks/                # useTheme, useScrollSpy
│   ├── lib/                  # motion.ts (framer-motion variants)
│   └── assets/               # hero.png, vite.svg
├── public/                   # favicon.svg
├── dist/                     # build output
├── vite.config.ts            # Vite + React plugin
├── tsconfig*.json            # TS project refs (app + node)
└── eslint.config.js          # flat ESLint config
```

## Entry Points

- **App boot**: `src/main.tsx` — mounts `<App/>` in StrictMode into `#root`
- **Page layout**: `src/App.tsx` — orders all sections: Navbar → Hero → About → Snapshot → Projects → Skills → Timeline → Education → Services → Testimonials → Philosophy → Contact → Footer + BackToTop
- **Dev server**: `npm run dev` (Vite)

## Core Modules

### Section components (`src/components/`)
Navbar, Hero, About, Snapshot, Projects (+ ProjectCard), Skills, Timeline, Education, Services, Testimonials, Philosophy, Contact, Footer, Section (section wrapper).

### UI primitives (`src/components/ui/`)
Button, Card, Tag, Stat, Reveal, Stagger, ThemeToggle, BackToTop, ScrollProgress, GradientMesh, ProjectVisual.

### Content data (`src/data/`) — edit here to change site content
- `profile.ts` — `profile` (name/title/headline/email), `navItems` (nav + scroll-spy source of truth)
- `about.ts` — `about`, `snapshots` (+ `Snapshot` type), `philosophy`
- `projects.ts` — `projects` (+ `Project`, `CaseSection`, `ProjectIcon` types)
- `experience.ts` — `experience` (+ `Experience` type)
- `education.ts` — `education` (+ `Education` type)
- `skills.ts` — `skillGroups` (+ `SkillGroup`), `languages` (+ `Language`)
- `services.ts` — `services` (+ `Service` type)
- `testimonials.ts` — `testimonials` (+ `Testimonial` type)

### Hooks & lib
- `hooks/useTheme.ts` — dark/light theme state
- `hooks/useScrollSpy.ts` — active-section tracking for navbar
- `lib/motion.ts` — shared framer-motion animation variants

## Configuration

- `vite.config.ts` — Vite with `@vitejs/plugin-react`
- `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json` — TS project references
- `eslint.config.js` — flat config (typescript-eslint, react-hooks, react-refresh)
- Tailwind v3.4 + PostCSS + autoprefixer

## Key Dependencies

- `react` / `react-dom` ^19.2 — UI framework
- `framer-motion` ^12.40 — animations (see `lib/motion.ts`)
- `vite` ^8.0 + `typescript` ~6.0 — build/tooling
- `tailwindcss` ^3.4 — styling

## Quick Start

1. `npm install`
2. `npm run dev` — local dev server
3. `npm run build` — `tsc -b && vite build` (type-check then bundle)
4. `npm run lint` — ESLint

## Notes

- No tests present in repo.
- Content is fully data-driven: change `src/data/*` rather than editing JSX for copy.
- Per profile design: no social links / no CV download on the site.
- A separate project exists at `../vild-pluk/vild-pluk-api` (Node/Express + GraphQL/Apollo) — not part of this index.
