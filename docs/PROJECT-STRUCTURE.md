# Project structure

Annotated layout of the repo. One line per file/folder; deeper detail lives in
[DATA-MODEL.md](./DATA-MODEL.md), [COMPONENTS.md](./COMPONENTS.md), and
[I18N-AND-THEMING.md](./I18N-AND-THEMING.md).

## Root

```
index.html            App shell — SEO/OG meta, JSON-LD, fonts, pre-paint lang script
vite.config.ts        Vite config — base '/portfolio/', react + imagetools plugins
tsconfig.json         TS project references root
tsconfig.app.json     TS config for the app sources
package.json          Scripts (dev/build/lint/preview) + dependencies
README.md             Short public blurb (marketing)
CLAUDE.md             Guidance for Claude Code
docs/                 This developer knowledge base
.github/workflows/    deploy.yml → build + deploy to GitHub Pages on push to main
```

> ESLint uses a flat config; there is no separate `.eslintrc`. There is no test
> suite and no test config.

## `src/`

```
src/
├── main.tsx                  Mounts <App/> in <StrictMode> under <LanguageProvider>
├── App.tsx                   Composes all sections in order (no router)
├── index.css                 Tailwind layers + dark-only CSS-variable design tokens
│
├── components/               Page section components (one per site section)
│   ├── Navbar.tsx            Sticky nav + scroll-spy active pill; observes Philosophy
│   ├── Hero.tsx              Landing headline (id="home") with gradient accent
│   ├── About.tsx             About paragraphs + spoken languages
│   ├── Snapshot.tsx          "Professional snapshot" label/detail grid
│   ├── Projects.tsx          Case-study grid; renders <ProjectCard>
│   ├── ProjectCard.tsx       Single case study, expandable into problem/approach/…
│   ├── Timeline.tsx          Experience timeline (id="experience")
│   ├── Education.tsx         Academic history
│   ├── Services.tsx          "What I can help with" grid
│   ├── Testimonials.tsx      Quotes from colleagues/employers
│   ├── Philosophy.tsx        Work-philosophy points (not a nav item)
│   ├── Contact.tsx           Email-only contact + GPG key + booking
│   ├── Footer.tsx            Footer, no social links
│   ├── Section.tsx           Shared <section> landmark w/ eyebrow/title/reveal header
│   └── ui/                   Reusable presentational primitives (see COMPONENTS.md)
│       ├── Button.tsx        Anchor/button styled via buttonStyles
│       ├── buttonStyles.ts   Shared button class tokens (variant/size)
│       ├── Card.tsx          Surface card with optional hover lift
│       ├── Tag.tsx           Small tech/label pill
│       ├── Reveal.tsx        Scroll-reveal wrapper (reduced-motion aware)
│       ├── Stagger.tsx       StaggerGroup + StaggerItem for sequenced reveals
│       ├── ImageGallery.tsx  Thumbnail strip for case-study screenshots
│       ├── Lightbox.tsx      Full-size image viewer (Escape/backdrop/arrow nav)
│       ├── ProjectVisual.tsx ProjectHeader — domain icon chip + category
│       ├── BookingButton.tsx Lazy Cal.com popup trigger + in-person/online chooser
│       ├── LanguageToggle.tsx Segmented DA/EN switch
│       ├── GradientMesh.tsx  Static teal/cyan hero background
│       ├── ScrollProgress.tsx Top-of-viewport scroll progress bar
│       ├── BackToTop.tsx     Floating back-to-top button
│       └── FirstVisitModal.tsx Once-per-browser blocking notice
│
├── data/                     Data-driven, bilingual site content (edit here — see DATA-MODEL.md)
│   ├── profile.ts            Core profile, calLinks, gpgKey, navItems
│   ├── about.ts              About paragraphs, snapshots, philosophy
│   ├── projects.ts           Case studies + Project/ProjectImage/ProjectIcon types
│   ├── experience.ts         Experience timeline entries
│   ├── education.ts          Education entries
│   ├── services.ts           Services list
│   ├── testimonials.ts       Reference quotes
│   ├── languages.ts          Spoken languages
│   └── popup.ts              First-visit notice copy
│
├── i18n/                     Language plumbing (see I18N-AND-THEMING.md)
│   ├── config.ts             LANGS, DEFAULT_LANG, STORAGE_KEY, isLang, Lang type
│   ├── LanguageContext.tsx   LanguageProvider — state, persistence, meta sync
│   ├── useLanguage.ts        LanguageContext + useLanguage() hook
│   └── ui.ts                 UI chrome strings (nav, buttons, labels, aria, SEO)
│
├── hooks/
│   ├── useScrollSpy.ts       IntersectionObserver active-section tracking
│   └── useBodyScrollLock.ts  Ref-counted scroll lock for modals/lightbox
│
├── lib/
│   ├── caseStudyImages.ts    Auto-discovers + transforms case-study images
│   ├── motion.ts             Shared Framer Motion variants
│   └── prefetchImage.ts      Fire-and-forget image prefetch (dedup by URL)
│
└── assets/
    └── case-studies/         One folder per project id; images auto-discovered
        ├── vild-pluk/
        ├── copenhagen-industries/
        ├── iot-auth/
        ├── smartgurlz/
        ├── thermal-anomaly/
        ├── tvchat-ai/
        └── budget-tracker/
```

## Key conventions

- **Content is data, not JSX.** Change site copy in `src/data/*.ts`, not in
  `src/components/`.
- **Case-study image folders are auto-discovered.** A folder named after a
  project's `id` under `src/assets/case-studies/` is picked up automatically —
  no registration. See [ARCHITECTURE.md](./ARCHITECTURE.md).
- **UI chrome strings vs content.** Section headers/buttons/labels live in
  `src/i18n/ui.ts`; structured content lives in `src/data/`.
