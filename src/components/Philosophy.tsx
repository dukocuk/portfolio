import { philosophy } from '../data/about';
import { Section } from './Section';
import { Card } from './ui/Card';
import { StaggerGroup, StaggerItem } from './ui/Stagger';

export function Philosophy() {
  return (
    <Section id="philosophy" index="07" eyebrow="Work Philosophy" title="How I work">
      <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {philosophy.points.map((p, i) =>
          i === 0 ? (
            <StaggerItem key={p.title}>
              <div className="flex h-full flex-col rounded-2xl bg-accent-gradient p-6 text-white shadow-lg shadow-accent/25">
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-white/85">{p.body}</p>
              </div>
            </StaggerItem>
          ) : (
            <StaggerItem key={p.title}>
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
