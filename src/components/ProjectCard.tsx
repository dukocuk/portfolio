import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Project } from '../data/projects';
import { Tag } from './ui/Tag';
import { ProjectHeader } from './ui/ProjectVisual';
import { useLanguage } from '../i18n/LanguageContext';
import { uiStrings } from '../i18n/ui';

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const panelId = useId();
  const { lang } = useLanguage();
  const ui = uiStrings[lang].projectCard;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/20">
      {project.image ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
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

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:opacity-80"
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

        <AnimatePresence initial={false}>
          {open && (
            <motion.dl
              id={panelId}
              initial={reduced ? false : { height: 0, opacity: 0 }}
              animate={reduced ? {} : { height: 'auto', opacity: 1 }}
              exit={reduced ? {} : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 space-y-4 border-t border-border pt-5">
                {project.sections.map((s) => (
                  <div key={s.heading}>
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
              </div>
            </motion.dl>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
