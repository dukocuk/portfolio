import { aboutContent } from '../data/about';
import { languagesContent } from '../data/languages';
import { Section } from './Section';
import { useLanguage } from '../i18n/useLanguage';
import { uiStrings } from '../i18n/ui';

export function About() {
  const { lang } = useLanguage();
  const about = aboutContent[lang];
  const languages = languagesContent[lang];
  const ui = uiStrings[lang];
  return (
    <Section id="about" index="01" eyebrow={ui.sections.about.eyebrow} title={ui.sections.about.title}>
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">
        <span className="font-medium text-text/80">{ui.about.languagesLabel}</span>{' '}
        {languages.map((l, i) => (
          <span key={i}>
            {l.name} <span className="text-muted/70">({l.level})</span>
            {i < languages.length - 1 && ' · '}
          </span>
        ))}
      </p>
    </Section>
  );
}
