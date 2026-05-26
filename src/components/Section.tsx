import type { ReactNode } from 'react';
import { Reveal } from './ui/Reveal';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  /** Editorial index shown beside the eyebrow, e.g. "01". */
  index?: string;
  children: ReactNode;
  className?: string;
};

// Shared section wrapper: semantic <section> landmark with an accessible
// heading and a reveal-on-scroll header.
export function Section({ id, eyebrow, title, intro, index, children, className = '' }: SectionProps) {
  return (
    <section id={id} aria-labelledby={title ? `${id}-heading` : undefined} className={`py-20 sm:py-28 ${className}`}>
      <div className="container">
        {(eyebrow || title || intro) && (
          <Reveal className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {index && <span className="font-mono text-muted/70">{index}</span>}
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 id={`${id}-heading`} className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
