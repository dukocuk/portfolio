import { testimonials } from '../data/testimonials';
import { Section } from './Section';
import { Card } from './ui/Card';
import { StaggerGroup, StaggerItem } from './ui/Stagger';

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      index="07"
      eyebrow="Testimonials"
      title="What others say"
      intro="A few words from colleagues, mentors, and the teams I've worked with."
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
