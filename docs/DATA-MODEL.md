# Data model — the content layer

**This is the primary "edit here" guide.** All site copy lives in
[`src/data/*.ts`](../src/data) — change these files, not the JSX in
`src/components/`. UI chrome text (nav labels, buttons, section headers) is
separate; see [I18N-AND-THEMING.md](./I18N-AND-THEMING.md).

## The bilingual shape convention

Every content file is bilingual, keyed by language and typed as
`Record<Lang, …>` where `Lang` is `'da' | 'en'` from
[`src/i18n/config.ts`](../src/i18n/config.ts). **Danish (`da`) is the default**
because the crawler-visible `index.html` is Danish.

```ts
export const someContent: Record<Lang, Shape> = {
  da: { /* Danish */ },
  en: { /* English */ },
};
```

Components read the active language via `useLanguage()` and index in, e.g.
`servicesContent[lang]`.

## Files & shapes

### `profile.ts` — core profile + contact + nav
Exports several things beyond the profile text:

- `profileContent: Record<Lang, Profile>` — `{ name, title, headline, positioning, email, tagline }`. In the Danish `headline`, the last two words render with a gradient accent.
- `calLinks: Record<Lang, { inPerson; online }>` — Cal.com booking slugs (the part after `cal.com/`). Two event types per language: in-person (2h travel buffer each side) and online/Teams (no buffer).
- `gpgKey: { fingerprint, fileName }` — GPG public key metadata (file served from `public/`).
- `tox: { id, qrFileName }` — Tox ID for encrypted P2P chat + its QR image name.
- `navItems` — ordered `{ id }[]`; the **single source of truth** for the navbar + scroll-spy. IDs are stable scroll anchors; visible labels are localized in `src/i18n/ui.ts`.

> Deliberate constraint: no social links and no CV download anywhere. The GPG key
> and Tox ID are narrow, intentional exceptions for secure contact.

### `about.ts` — about, snapshot, philosophy
Three exports:
- `aboutContent: Record<Lang, { paragraphs: string[] }>`
- `snapshotsContent: Record<Lang, { label; detail }[]>`
- `philosophyContent: Record<Lang, { intro; points: { title; body }[] }>`

### `projects.ts` — case studies (most structured file)
The central types:

```ts
type CaseSection = { heading: string; body: string | string[] };
export type ProjectIcon = "vision" | "security" | "fullstack" | "mobile";
export type ProjectImage = { src: string; thumb: string; alt: string };

export type Project = {
  id: string;          // matches the assets/case-studies/{id}/ folder
  title: string;
  type: string;        // category line, e.g. "Personal · Full-Stack · Mobile"
  icon: ProjectIcon;   // domain chip in the card header
  summary: string;
  tech: string[];
  images?: ProjectImage[]; // injected from the filesystem, not hand-listed
  sections: CaseSection[]; // Problem / Goal / Role / …
};
```

- `id`, `icon`, and `tech` are language-neutral and identical across locales;
  `title`, `type`, `summary`, `sections`, and image `alt` are translated.
- **`images` are not written by hand.** They are attached from the auto-discovered
  filesystem via `getCaseStudyImages(id, alt)` from
  [`src/lib/caseStudyImages.ts`](../src/lib/caseStudyImages.ts) (see
  [ARCHITECTURE.md](./ARCHITECTURE.md)). For the featured (first) card the first
  image renders as a 16:9 hero; all imaged cards show the full set as a thumbnail
  strip in the expanded panel.

### `experience.ts` — timeline
`experienceContent: Record<Lang, Experience[]>` where
`Experience = { period, role, org, location, summary, highlights: string[] }`.

### `education.ts`
`educationContent: Record<Lang, Education[]>` where
`Education = { period, degree, org, highlightLabel, highlight }`.

### `services.ts`
`servicesContent: Record<Lang, { title; body }[]>`.

### `testimonials.ts`
`testimonialsContent: Record<Lang, { quote; author }[]>`. Quotes are translated
for readability; author attributions stay verbatim across locales.

### `languages.ts`
`languagesContent: Record<Lang, { name; level }[]>` — spoken languages shown in
About.

### `popup.ts`
`firstVisitContent: Record<Lang, { title; body; cta }>` — the once-per-browser
first-visit notice rendered by
[`FirstVisitModal`](../src/components/ui/FirstVisitModal.tsx).

## Recipes

### Change some copy
1. Find the relevant `src/data/*.ts` file (or `src/i18n/ui.ts` for chrome text).
2. Edit **both** the `da` and `en` entries so the languages stay in sync.
3. `npm run dev` and toggle DA/EN to verify.

### Add a new project / case study
1. Add a `Project` object to **both** the `da` and `en` arrays in
   [`src/data/projects.ts`](../src/data/projects.ts). Keep `id`, `icon`, and
   `tech` identical across locales; translate the rest.
2. Create `src/assets/case-studies/<id>/` and drop screenshots in (filenames sort
   numerically — `image1`, `image2`, … `image10`). They are picked up
   automatically; no image list to edit.
3. Confirm `icon` is one of the `ProjectIcon` values.
4. `npm run build` to typecheck, then `npm run dev` to review.
