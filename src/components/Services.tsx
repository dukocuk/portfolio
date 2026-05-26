import { services } from '../data/services';
import { Section } from './Section';
import { Card } from './ui/Card';
import { StaggerGroup, StaggerItem } from './ui/Stagger';

export function Services() {
  return (
    <Section
      id="services"
      index="06"
      eyebrow="Services"
      title="What I can help with"
      intro="Areas where I deliver concrete value — across development, integration, security, and enterprise systems."
    >
      <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {services.map((s, i) => (
          <StaggerItem key={s.title} className={i === 0 ? 'col-span-2' : ''}>
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
