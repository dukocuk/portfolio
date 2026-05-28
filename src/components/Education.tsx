import { educationContent } from '../data/education';
import { Section } from './Section';
import { Card } from './ui/Card';
import { StaggerGroup, StaggerItem } from './ui/Stagger';
import { useLanguage } from '../i18n/LanguageContext';
import { uiStrings } from '../i18n/ui';

export function Education() {
  const { lang } = useLanguage();
  const education = educationContent[lang];
  const ui = uiStrings[lang].sections.education;
  return (
    <Section id="education" index="05" eyebrow={ui.eyebrow} title={ui.title}>
      <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {education.map((e) => (
          <StaggerItem key={e.degree}>
            <Card hover className="h-full">
              <p className="text-sm font-semibold text-accent">{e.period}</p>
              <h3 className="mt-1 font-display text-lg font-bold">{e.degree}</h3>
              <p className="text-muted">{e.org}</p>
              <div className="mt-4 rounded-lg border border-border bg-surface-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">{e.highlightLabel}</p>
                <p className="mt-1 font-medium">{e.highlight}</p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
