import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';
import { StaggerGroup, StaggerItem } from './ui/Stagger';

export function Projects() {
  return (
    <Section
      id="projects"
      index="02"
      eyebrow="Featured Projects"
      title="Selected case studies"
      intro="Academic and professional work, framed as case studies. Each expands into problem, approach, role, and what it demonstrates."
    >
      <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <StaggerItem key={p.id} className={i === 0 ? 'md:col-span-2' : ''}>
            <ProjectCard project={p} featured={i === 0} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
