# Portfolio — Developer Documentation

Personal portfolio / case-study site for **Duran Köse**, deployed at
<https://dukocuk.github.io/portfolio/>.

A single-page **React 19 + Vite + TypeScript** SPA. All copy is data-driven and
bilingual (Danish default, English), all case-study imagery is auto-discovered
from the filesystem, and the theme is dark-only. There is no router and no test
suite.

> This `docs/` folder is the human-facing knowledge base. For Claude-specific
> guidance see [`../CLAUDE.md`](../CLAUDE.md); the root [`../README.md`](../README.md)
> is the short public blurb.

## Quick start

```bash
npm run dev       # start the Vite dev server
npm run build     # tsc -b && vite build (CI runs this exact command)
npm run lint      # ESLint (flat config)
npm run preview   # serve the production build locally
```

Scripts are defined in [`../package.json`](../package.json). There is **no test
suite** in this repo.

## Tech stack

| Area | Choice | Notes |
|------|--------|-------|
| UI framework | React `^19.2` | `StrictMode`, no router |
| Language | TypeScript `~6.0` | `tsc -b` typecheck gates the build |
| Build tool | Vite `^8.0` | `base: '/portfolio/'` for GitHub Pages |
| Styling | Tailwind CSS `^3.4` + PostCSS/autoprefixer | CSS-variable design tokens, dark-only |
| Animation | Framer Motion `^12.40` | scroll reveals, staggered lists |
| Images | `vite-imagetools` `^10` | auto WebP variants via `import.meta.glob` |
| Booking | `@calcom/embed-react` `^1.5` | lazy-loaded Cal.com popup |
| Lint | ESLint `^10` + typescript-eslint + react-hooks/react-refresh | flat config |

## Documentation map

| Doc | What's inside |
|-----|---------------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | How the app is wired: composition, scroll-spy nav, image pipeline, build & deploy |
| [PROJECT-STRUCTURE.md](./PROJECT-STRUCTURE.md) | Annotated directory tree of `src/` and root config files |
| [DATA-MODEL.md](./DATA-MODEL.md) | The bilingual content layer — every `src/data/*.ts` shape, plus "how to edit copy / add a project" |
| [COMPONENTS.md](./COMPONENTS.md) | Catalog of section components, `ui/` primitives, hooks, and lib helpers |
| [I18N-AND-THEMING.md](./I18N-AND-THEMING.md) | Language context/config, UI strings vs content, and the dark-only token theme |

## Where to make common changes

- **Change copy / add a project** → edit `src/data/*.ts` (see [DATA-MODEL.md](./DATA-MODEL.md)), not the JSX.
- **Add case-study screenshots** → drop images in `src/assets/case-studies/{project-id}/` (see [ARCHITECTURE.md](./ARCHITECTURE.md)).
- **Change section/button/label text** → edit `src/i18n/ui.ts` (see [I18N-AND-THEMING.md](./I18N-AND-THEMING.md)).
- **Adjust colors/spacing tokens** → edit the CSS variables in `src/index.css`.
