// Compact header strip for project cards: a domain icon chip plus the project
// category. Conveys what the project is at a glance, replacing the old
// decorative gradient cover.

import type { ReactNode } from 'react';
import type { ProjectIcon } from '../../data/projects';

const iconPaths: Record<ProjectIcon, ReactNode> = {
  // computer vision — scanning frame around a focal point
  vision: (
    <>
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  // security — shield with check
  security: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.5 12 2 2 3.5-3.5" />
    </>
  ),
  // full-stack — stacked layers
  fullstack: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  // mobile — phone
  mobile: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
};

export function ProjectHeader({ icon, type }: { icon: ProjectIcon; type: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-border bg-surface-2 px-6 py-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
        <svg
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
        >
          {iconPaths[icon]}
        </svg>
      </span>
      <span className="text-xs font-semibold uppercase tracking-wider text-accent">{type}</span>
    </div>
  );
}
