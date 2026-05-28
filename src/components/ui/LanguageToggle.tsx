import { useLanguage } from '../../i18n/LanguageContext';
import { uiStrings } from '../../i18n/ui';

// Segmented DA / EN switch, styled to match ThemeToggle. The whole control is a
// single button that toggles between the two languages.
export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleLang}
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
    </button>
  );
}
