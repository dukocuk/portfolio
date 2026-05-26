import { about } from '../data/about';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Engineering that bridges systems and business">
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
