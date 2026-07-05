import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { DEFAULT_LANG, isLang, STORAGE_KEY, type Lang } from './config';
import { uiStrings } from './ui';
import { LanguageContext } from './useLanguage';

function getInitialLang(): Lang {
  if (typeof localStorage !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isLang(saved)) return saved;
    } catch {
      /* storage unavailable — fall back to default */
    }
  }
  return DEFAULT_LANG;
}

function setMeta(selector: string, content: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.content = content;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  // Keep the document language, tab title, and key meta tags in sync so the
  // chosen language is reflected for the browser, screen readers, and bookmarks.
  useEffect(() => {
    const { seo } = uiStrings[lang];
    document.documentElement.lang = lang;
    document.title = seo.title;
    setMeta('meta[name="description"]', seo.description);
    setMeta('meta[property="og:locale"]', seo.ogLocale);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable — ignore */
    }
  }, [lang]);

  const toggleLang = useCallback(
    () => setLangState((l) => (l === 'da' ? 'en' : 'da')),
    [],
  );

  const value = useMemo(() => ({ lang, toggleLang }), [lang, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
