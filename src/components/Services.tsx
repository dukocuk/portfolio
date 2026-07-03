import { servicesContent } from '../data/services';
import { Section } from './Section';
import { Card } from './ui/Card';
import { StaggerGroup, StaggerItem } from './ui/Stagger';
import { useLanguage } from '../i18n/useLanguage';
import { uiStrings } from '../i18n/ui';

export function Services() {
  const { lang } = useLanguage();
  const services = servicesContent[lang];
  const ui = uiStrings[lang].sections.services;
  return (
    <Section
      id="services"
      index="05"
      eyebrow={ui.eyebrow}
      title={ui.title}
      intro={ui.intro}
    >
      <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {services.map((s, i) => (
          <StaggerItem key={i} className={i === 0 ? 'col-span-2' : ''}>
            <Card hover className="flex h-full flex-col">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
