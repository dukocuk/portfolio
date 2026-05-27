# Duran Köse — Portfolio

A premium personal-brand portfolio built with **Vite + React + TypeScript + Tailwind CSS**.
Dark-first design with a light-mode toggle, indigo→violet accent, accessible and responsive.

## Run it

```bash
npm install        # first time only
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build to dist/
npm run preview    # serve the production build locally
```

Node 18+ recommended (developed on Node 22 / npm 11).

## Project structure

```
src/
  data/         ← ALL editable content lives here (no need to touch components)
    profile.ts      name, title, headline, email, location, nav order
    about.ts        About paragraphs, Professional Snapshot, Work Philosophy
    projects.ts     5 project case studies
    experience.ts   experience timeline
    education.ts    education entries
    skills.ts       grouped skills + languages
    services.ts     service cards
  hooks/        useTheme, useScrollSpy, useSpotlight
  lib/          motion.ts (shared Framer Motion variants)
  components/   one file per section + ui/ primitives (Button, Tag, Card, ThemeToggle, BackToTop, Reveal, Stagger, GradientMesh, ScrollProgress, Stat, ProjectVisual)
  index.css     theme color tokens (dark + .light) and motion rules
index.html      SEO title, meta description, Open Graph/Twitter tags, theme bootstrap
```

## Customization checklist

- [ ] **Content** — edit the files in `src/data/`. Each is commented.
- [ ] **Email** — `src/data/profile.ts` (currently `duran.kse@gmail.com`).
- [ ] **Hero headline** — `profile.headline` (two alternatives are in the project plan).
- [ ] **Project screenshots** — replace the gradient placeholders: put images in `public/`
      and set `image` (and update `imageAlt`) for each project in `src/data/projects.ts`.
      Look for the `[Add project screenshot here]` placeholders.
- [ ] **Accent color** — change `--c-accent` / `--c-accent-2` (dark) and the `.light`
      overrides in `src/index.css`.
- [ ] **OG image** — add a 1200×630 `og-image.png` to `public/` (referenced in `index.html`).
- [ ] **Favicon** — `public/favicon.svg` is still the Vite default; replace it.
- [ ] **Canonical URL / OG url** — update the `https://durankose.dev/` placeholders in
      `index.html` once you have a domain.

## Intentional exclusions (per request)

- **No CV download** anywhere.
- **No contact form** — the Contact section shows the email only (with a `mailto:` link + copy button).
- **No social or code links** (no LinkedIn, no GitHub) anywhere on the site.

## SEO reference

- **Title:** Duran Köse — Software Engineer & Full-Stack Developer | MSc DTU
- **Meta description:** MSc Software Technology engineer (DTU) working across full-stack, mobile,
  enterprise/SAP systems, authentication, and integration. Based in Taastrup, Denmark.
- **OG title:** Duran Köse — Software Engineer & SAP/Enterprise Consultant
- **OG description:** Full-stack engineering with enterprise discipline — projects in computer
  vision, IoT security, system integration, and mobile.
- **Suggested URL slug:** `durankose.dev`
- **LinkedIn post text:** Launched my portfolio — full-stack, mobile, enterprise/SAP, security &
  integration work in one place.

## Accessibility

Semantic landmarks (`header`/`nav`/`main`/`section`/`footer`), skip-to-content link, visible
focus rings, keyboard-operable nav + mobile menu, alt text on placeholder images, and full
`prefers-reduced-motion` support (animations disabled). Color tokens target AA contrast in
both themes.

## Deploy

Standard root config (`base: '/'`) — works on Vercel/Netlify (point them at this repo, build
command `npm run build`, output `dist/`). For **GitHub Pages**, set `base: '/<repo-name>/'`
in `vite.config.ts`.

## Future improvements

- Add real project screenshots and a custom OG image.
- Decide which measurable outcomes to disclose and fill the placeholders.
- Add a custom domain + basic analytics (e.g. privacy-friendly Plausible).
- Optional: a short writing/notes section if you want to show thinking over time.
