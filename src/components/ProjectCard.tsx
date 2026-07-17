import { useId, useState, type Ref } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Project } from '../data/projects';
import { Tag } from './ui/Tag';
import { ProjectHeader } from './ui/ProjectVisual';
import { ImageGallery } from './ui/ImageGallery';
import { Lightbox } from './ui/Lightbox';
import { useLanguage } from '../i18n/useLanguage';
import { uiStrings } from '../i18n/ui';
import { prefetchImage } from '../lib/prefetchImage';

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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
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
          onClick={() => setLightboxIndex(0)}
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
          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:opacity-80"
            >
              {project.link.label}
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          )}
        </div>

        <AnimatePresence initial={false} onExitComplete={onCollapsed}>
          {open && (
            <motion.div
              id={panelId}
              initial={reduced ? false : { height: 0, opacity: 0 }}
              animate={reduced ? {} : { height: 'auto', opacity: 1 }}
              exit={reduced ? {} : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 space-y-4 border-t border-border pt-5">
                {hasImages && (
                  <ImageGallery images={images} onOpen={(i) => setLightboxIndex(i)} />
                )}
                <dl className="space-y-4">
                  {project.sections.map((s, i) => (
                    <div key={i}>
                      <dt className="text-sm font-semibold text-text">{s.heading}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted">
                        {Array.isArray(s.body) ? (
                          <ul className="list-disc space-y-1 pl-5">
                            {s.body.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          s.body
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {hasImages && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex ?? 0}
          open={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </article>
  );
}
