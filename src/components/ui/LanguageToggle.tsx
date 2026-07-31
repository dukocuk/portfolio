import Link from 'next/link';
import { LANG_META, LANG_PATHS, otherLang } from '../../i18n/config';
import { useLanguage } from '../../i18n/useLanguage';
import { uiStrings } from '../../i18n/ui';

// Segmented DA / EN switch. It is a link, not a button: each language is a
// separately pre-rendered URL, and a crawler has to be able to follow this to
// reach the other one.
//
// prefetch={false} because under `output: 'export'` the RSC payload names Next's
// client router asks for do not match the files the export writes for route
// groups — it requests `__next.!KGRhKQ.__PAGE__.txt` where the build emitted
// `__next.!KGRhKQ.txt`. Navigation works regardless (it falls back to a document
// load), but leaving prefetch on fires two 404s on every page view. With exactly
// two routes there is nothing to gain by prefetching anyway.
export function LanguageToggle({ altHref }: { altHref?: string } = {}) {
  const { lang } = useLanguage();
  const target = otherLang(lang);
  return (
    <Link
      href={altHref ?? LANG_PATHS[target]}
      prefetch={false}
      hrefLang={LANG_META[target].htmlLang}
      aria-label={uiStrings[lang].aria.switchLanguage}
      title={uiStrings[lang].aria.switchLanguage}
      className="inline-flex h-10 items-center gap-0.5 rounded-lg border border-border bg-surface p-0.5 text-xs font-semibold"
    >
      <span
        className={`flex h-full items-center rounded-md px-2 transition-colors ${
          lang === 'da' ? 'bg-accent/15 text-accent' : 'text-muted'
        }`}
      >
        DA
      </span>
      <span
        className={`flex h-full items-center rounded-md px-2 transition-colors ${
          lang === 'en' ? 'bg-accent/15 text-accent' : 'text-muted'
        }`}
      >
        EN
      </span>
    </Link>
  );
}
