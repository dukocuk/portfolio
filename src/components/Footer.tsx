import { profileContent } from '../data/profile';
import { useLanguage } from '../i18n/useLanguage';
import { uiStrings } from '../i18n/ui';

// No social links per request.
export function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const profile = profileContent[lang];
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-bold tracking-tight">
            Duran&nbsp;<span className="text-gradient">Köse</span>
          </p>
          <p className="mt-1 text-sm text-muted">{profile.tagline}</p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <a href="#home" className="text-sm font-medium text-muted transition-colors hover:text-accent">
            {uiStrings[lang].footer.backToTop}
          </a>
          <p className="text-xs text-muted">© {year} Duran Köse</p>
        </div>
      </div>
    </footer>
  );
}
