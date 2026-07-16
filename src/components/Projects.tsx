import { projectsContent } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';
import { StaggerGroup, StaggerItem } from './ui/Stagger';
import { useLanguage } from '../i18n/useLanguage';
import { uiStrings } from '../i18n/ui';

export function Projects() {
  const { lang } = useLanguage();
  const projects = projectsContent[lang];
  const ui = uiStrings[lang].sections.projects;
  return (
    <Section
      id="projects"
      index="02"
      eyebrow={ui.eyebrow}
      title={ui.title}
      intro={ui.intro}
    >
      <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <StaggerItem key={p.id} className="h-full">
            <ProjectCard project={p} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
