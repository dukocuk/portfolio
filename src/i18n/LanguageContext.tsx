'use client';

import { useMemo } from 'react';
import type { ReactNode } from 'react';
import type { Lang } from './config';
import { LanguageContext } from './useLanguage';

// The language is now a property of the route, not client state: each locale is
// pre-rendered at its own URL with its own <html lang> and metadata, so this
// provider only carries the layout's value down to the components that read it.
//
// Nothing here reads localStorage or mutates <head> any more — the former made
// the rendered language differ from the crawled one, and the latter is what
// Next's `metadata` exports do at build time.
export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const value = useMemo(() => ({ lang }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
