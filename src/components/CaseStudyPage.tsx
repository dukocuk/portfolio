import type { Project } from '../data/projects';
import { CaseStudyHeader } from './CaseStudyHeader';
import { CaseStudyContent } from './CaseStudyContent';
import { Footer } from './Footer';
import { ProjectHeader } from './ui/ProjectVisual';
import { Tag } from './ui/Tag';

// Server component — nothing here reads the active language directly.
// CaseStudyHeader, CaseStudyContent's gallery/lightbox, and Footer each pull
// `lang` from context themselves, same as every other component in this tree.
export function CaseStudyPage({ project }: { project: Project }) {
  return (
    <>
      <CaseStudyHeader projectId={project.id} />
      <main id="case-study-top" className="container max-w-3xl py-16 sm:py-20">
        <ProjectHeader icon={project.icon} type={project.type} />
        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {project.links.map((l, idx) => (
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
        )}

        <div className="mt-10 space-y-4 border-t border-border pt-10">
          <CaseStudyContent project={project} />
        </div>
      </main>
      <Footer homeHref="#case-study-top" />
    </>
  );
}
