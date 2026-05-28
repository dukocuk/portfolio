import { testimonialsContent } from '../data/testimonials';
import { Section } from './Section';
import { Card } from './ui/Card';
import { StaggerGroup, StaggerItem } from './ui/Stagger';
import { useLanguage } from '../i18n/LanguageContext';
import { uiStrings } from '../i18n/ui';

export function Testimonials() {
  const { lang } = useLanguage();
  const testimonials = testimonialsContent[lang];
  const ui = uiStrings[lang].sections.testimonials;
  return (
    <Section
      id="testimonials"
      index="07"
      eyebrow={ui.eyebrow}
      title={ui.title}
      intro={ui.intro}
    >
      <StaggerGroup className="grid gap-4 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <StaggerItem key={`${t.author}-${i}`}>
            <Card hover className="flex h-full flex-col">
              <figure className="flex h-full flex-col border-l-2 border-accent/40 pl-4">
                <blockquote className="flex-1 text-lg leading-relaxed text-muted">
                  <span aria-hidden="true" className="mr-1 font-display text-2xl leading-none text-accent">
                    “
                  </span>
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-accent">— {t.author}</figcaption>
              </figure>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
