import type { Metadata } from 'next';
import { LANG_PATHS } from '../src/i18n/config';
import { fontVariables } from './fonts';
import './globals.css';

// The 404 nginx serves for any path that isn't one of the two locale routes
// (`error_page 404 /404.html` in deploy/nginx.conf). Without this the export
// still writes a 404.html, but it is Next's stock unstyled one.
//
// This is `global-not-found` rather than `not-found` because a `not-found` file
// renders *inside* a root layout, and there is no root layout at app/ level —
// both live in route groups so that <html lang> can differ per locale.
// global-not-found owns its own <html>/<body>, which is exactly what is needed.
// It requires `experimental.globalNotFound` in next.config.ts.
//
// Both languages appear on one page: the requested URL matched no route, so
// there is no locale to infer. <html lang> is Danish, the site's x-default, and
// the English half is marked up with its own lang so screen readers switch voice.

// No `robots` here — Next already emits <meta name="robots" content="noindex">
// for this route, and a second tag would just be a duplicate.
export const metadata: Metadata = {
  title: '404 — Siden findes ikke | Page not found',
  // This page has its own <html>, so it inherits nothing from the locale
  // layouts — the icon has to be repeated or the tab falls back to a blank.
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
};

const linkClass =
  'inline-flex items-center rounded-lg border border-border bg-surface px-4 py-2 text-sm ' +
  'font-semibold text-text transition-colors hover:border-accent hover:text-accent ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

export default function GlobalNotFound() {
  return (
    <html lang="da" className={fontVariables}>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
          <p className="font-display text-6xl font-bold text-accent sm:text-7xl">404</p>

          <div className="space-y-1">
            <h1 className="text-xl font-semibold text-text sm:text-2xl">
              Siden findes ikke
            </h1>
            <p lang="en" className="text-xl font-semibold text-muted sm:text-2xl">
              This page could not be found
            </p>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted">
            Linket er sandsynligvis forældet eller skrevet forkert.{' '}
            <span lang="en">The link is probably outdated or mistyped.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={LANG_PATHS.da} className={linkClass} hrefLang="da">
              Til forsiden
            </a>
            <a href={LANG_PATHS.en} className={linkClass} hrefLang="en" lang="en">
              Go to homepage
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
