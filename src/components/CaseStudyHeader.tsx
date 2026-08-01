'use client';

import { LANG_PATHS, otherLang, projectPath } from '../i18n/config';
import { LanguageToggle } from './ui/LanguageToggle';
import { useLanguage } from '../i18n/useLanguage';
import { uiStrings } from '../i18n/ui';

// Minimal chrome for a standalone case-study page. Navbar's desktop links are
// scroll-to-anchor (#experience, #testimonials, ...) that don't exist on this
// page, so this isn't a stripped Navbar — just a way back to the homepage's
// project grid and this project's translated twin.
export function CaseStudyHeader({ projectId }: { projectId: string }) {
  const { lang } = useLanguage();
  const ui = uiStrings[lang];

  return (
    <header className="border-b border-border/70 bg-base/95">
      <div className="container flex h-16 items-center justify-between">
        <a href={LANG_PATHS[lang]} className="font-display font-bold tracking-tight">
          Duran&nbsp;<span className="text-gradient">Köse</span>
        </a>
        <div className="flex items-center gap-4">
          <a
            href={`${LANG_PATHS[lang]}#projects`}
            aria-label={ui.caseStudyPage.backToProjects}
            className="text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            {/* Text label hidden below sm: — logo + label + LanguageToggle
                don't all fit on one line on narrow phones, and with no
                overflow-x containment elsewhere in this route that turned
                the whole page horizontally scrollable. */}
            <span aria-hidden="true">←</span>{' '}
            <span className="hidden sm:inline">{ui.caseStudyPage.backToProjects}</span>
          </a>
          <LanguageToggle altHref={projectPath(otherLang(lang), projectId)} />
        </div>
      </div>
    </header>
  );
}
