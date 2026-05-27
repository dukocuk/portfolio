import { about } from '../data/about';
import { languages } from '../data/skills';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Engineering that bridges systems and business">
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted/60">
        <span className="font-medium text-muted">Languages —</span>{' '}
        {languages.map((l, i) => (
          <span key={l.name}>
            {l.name} <span className="text-muted/40">({l.level})</span>
            {i < languages.length - 1 && ' · '}
          </span>
        ))}
      </p>
    </Section>
  );
}
