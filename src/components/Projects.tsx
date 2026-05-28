import { projectsContent } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';
import { StaggerGroup, StaggerItem } from './ui/Stagger';
import { useLanguage } from '../i18n/LanguageContext';
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
        {projects.map((p, i) => (
          <StaggerItem key={p.id} className={i === 0 ? 'md:col-span-2' : ''}>
            <ProjectCard project={p} featured={i === 0} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
