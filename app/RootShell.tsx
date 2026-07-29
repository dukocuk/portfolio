import type { ReactNode } from 'react';
import { LANG_META, type Lang } from '../src/i18n/config';
import { LanguageProvider } from '../src/i18n/LanguageContext';
import { fontVariables } from './fonts';
import { buildPersonJsonLd } from './siteMetadata';
import './globals.css';

// Shared document shell for both locale root layouts. App Router root layouts
// own <html>, and <html lang> has to differ per locale, so there are two of
// them — this is the body they have in common.
//
// The pre-paint script that index.html used to run (reading localStorage to
// correct <html lang> before first paint) is gone: the server already renders
// the right language, because the language is the route.
export function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={LANG_META[lang].htmlLang} className={fontVariables}>
      <body>
        {/* Modals and the lightbox portal to document.body and mark everything
            else inert while open — useModalA11y finds "everything else" by this
            id. It is load-bearing, not a leftover from the Vite mount point. */}
        <div id="root">
          <LanguageProvider lang={lang}>{children}</LanguageProvider>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPersonJsonLd(lang)) }}
        />
      </body>
    </html>
  );
}
