import { useId, useState, type Ref } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Project } from '../data/projects';
import { Tag } from './ui/Tag';
import { ProjectHeader } from './ui/ProjectVisual';
import { CaseStudyContent } from './CaseStudyContent';
import { Lightbox } from './ui/Lightbox';
import { useLanguage } from '../i18n/useLanguage';
import { uiStrings } from '../i18n/ui';
import { prefetchImage } from '../lib/prefetchImage';
import { projectPath } from '../i18n/config';

// `open` and `minHeight` are controlled by <Projects>, which pins each grid row to a shared height.
// `onCollapsed` fires once the panel has finished animating shut — until then the card still measures
// at its expanded height.
export function ProjectCard({
  project,
  open,
  onToggle,
  onCollapsed,
  minHeight,
  ref,
  featured = false,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
  onCollapsed?: () => void;
  minHeight?: number;
  ref?: Ref<HTMLElement>;
  featured?: boolean;
}) {
  // Only for the hero-image button below (`showHero`, currently unused by any
  // caller — Projects.tsx never passes `featured`). The panel's own gallery
  // lightbox is self-contained inside CaseStudyContent, a separate instance.
  const [heroOpen, setHeroOpen] = useState(false);
  const reduced = useReducedMotion();
  const panelId = useId();
  const { lang } = useLanguage();
  const ui = uiStrings[lang].projectCard;
  const lightboxUi = uiStrings[lang].lightbox;
  const images = project.images ?? [];
  const hasImages = images.length > 0;
  const showHero = featured && hasImages;

  return (
    <article
      ref={ref}
      style={{ minHeight }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/20"
    >
      {showHero ? (
        <button
          type="button"
          onClick={() => setHeroOpen(true)}
          onPointerEnter={() => prefetchImage(images[0].src)}
          onFocus={() => prefetchImage(images[0].src)}
          onTouchStart={() => prefetchImage(images[0].src)}
          aria-label={`${lightboxUi.open}: ${images[0].alt}`}
          className="relative aspect-[16/9] w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>
      ) : (
        <ProjectHeader icon={project.icon} type={project.type} />
      )}

      <div className={`flex flex-1 flex-col p-6 ${featured ? 'md:p-8' : ''}`}>
        <h3 className={`font-display font-bold ${featured ? 'text-2xl' : 'text-xl'}`}>{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:opacity-80"
          >
            {open ? ui.hide : ui.read}
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              className={`transition-transform ${open ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          {/* Plain <a>, not next/link: this is one of nine identical links added to every
              homepage view. next/link's default prefetch would request an RSC payload filename
              the static export never writes for a route-group boundary (see the prefetch={false}
              comment on LanguageToggle) — nine bogus 404s per page load for zero benefit, since
              nothing here needs a client-side transition. This is also the internal link that
              makes /projekter/<id>/ actually crawl-discoverable from the homepage HTML. */}
          <a
            href={projectPath(lang, project.id)}
            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:opacity-80"
          >
            {ui.permalink}
          </a>
          {project.links && project.links.length > 0 && project.links.map((l, idx) => (
            <a
              key={idx}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:opacity-80"
            >
              {l.label}
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          ))}
        </div>

        {/* Always mounted, never unmounted — same shape as Navbar's mobile menu. The case-study
            prose is the longest-form writing on the site, and mounting it on click meant it was
            absent from the pre-rendered HTML: ~92% of the project copy no crawler ever saw.
            `initial={false}` makes Framer resolve its server-rendered styles from `animate`,
            which is the collapsed state at pre-render, so the content ships inside a height-0
            box rather than not shipping at all. `inert` keeps it out of the tab order and the
            a11y tree while collapsed — and it also makes the toggle's `aria-controls` point at
            an element that actually exists, which it did not before. */}
        <motion.div
          id={panelId}
          initial={false}
          animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={() => {
            if (!open) onCollapsed?.();
          }}
          inert={!open}
          className="overflow-hidden"
        >
          <div className="mt-5 space-y-4 border-t border-border pt-5">
            {/* The gallery stays mounted-on-open, unlike the prose above it (`mountGallery`).
                `loading="lazy"` does not save you inside a height-0 clipped parent: the thumbs
                keep their natural layout position, so Chrome fetched 16 of the 18 anyway — 11
                before the grid was even scrolled to. Images contribute only their alt text to
                what a crawler reads, which is not worth 16 WebP requests nobody asked for. */}
            <CaseStudyContent project={project} mountGallery={open} />
          </div>
        </motion.div>
      </div>

      {showHero && (
        <Lightbox
          images={images}
          initialIndex={0}
          open={heroOpen}
          onClose={() => setHeroOpen(false)}
        />
      )}
    </article>
  );
}
