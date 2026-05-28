import { philosophyContent } from '../data/about';
import { Section } from './Section';
import { Card } from './ui/Card';
import { StaggerGroup, StaggerItem } from './ui/Stagger';
import { useLanguage } from '../i18n/LanguageContext';
import { uiStrings } from '../i18n/ui';

export function Philosophy() {
  const { lang } = useLanguage();
  const philosophy = philosophyContent[lang];
  const ui = uiStrings[lang].sections.philosophy;
  return (
    <Section id="philosophy" index="07" eyebrow={ui.eyebrow} title={ui.title}>
      <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {philosophy.points.map((p, i) =>
          i === 0 ? (
            <StaggerItem key={i}>
              <div className="flex h-full flex-col rounded-2xl bg-accent-gradient p-6 text-white shadow-lg shadow-accent/25">
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-white/85">{p.body}</p>
              </div>
            </StaggerItem>
          ) : (
            <StaggerItem key={i}>
              <Card hover className="h-full">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              </Card>
            </StaggerItem>
          ),
        )}
      </StaggerGroup>
    </Section>
  );
}
