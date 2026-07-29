import { useEffect, useState } from 'react';
import { projectsContent } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';
import { StaggerGroup, StaggerItem } from './ui/Stagger';
import { useEqualRowHeights } from '../hooks/useEqualRowHeights';
import { useLanguage } from '../i18n/useLanguage';
import { uiStrings } from '../i18n/ui';

// Matches the grid below: two columns from Tailwind's `md` up, one below it.
const TWO_COLUMN_QUERY = '(min-width: 768px)';

function useColumns() {
  // Starts at the grid's mobile-first default instead of reading matchMedia
  // during render: this page is pre-rendered on the server, where there is no
  // window. Nothing is pinned until useEqualRowHeights has measured, and that
  // can't happen before the effect below corrects the count, so the initial
  // value never reaches the markup.
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const query = window.matchMedia(TWO_COLUMN_QUERY);
    const update = () => setColumns(query.matches ? 2 : 1);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return columns;
}

export function Projects() {
  const { lang } = useLanguage();
  const projects = projectsContent[lang];
  const ui = uiStrings[lang].sections.projects;
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(new Set());
  // A card stays here until its panel has finished animating shut; it measures as expanded until then.
  const [collapsingIds, setCollapsingIds] = useState<ReadonlySet<string>>(new Set());
  const columns = useColumns();

  // Cards are pinned to their row's tallest collapsed height, so expanding one never moves the others.
  const { setRef, minHeightOf } = useEqualRowHeights({
    count: projects.length,
    columns,
    freeze: openIds.size > 0 || collapsingIds.size > 0,
    resetKey: lang,
  });

  const toggle = (id: string) => {
    const closing = openIds.has(id);
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (closing) next.delete(id);
      else next.add(id);
      return next;
    });
    if (closing) setCollapsingIds((prev) => new Set(prev).add(id));
  };

  const settle = (id: string) =>
    setCollapsingIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });

  return (
    <Section
      id="projects"
      index="02"
      eyebrow={ui.eyebrow}
      title={ui.title}
      intro={ui.intro}
    >
      <StaggerGroup className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <StaggerItem key={p.id}>
            <ProjectCard
              project={p}
              ref={setRef(i)}
              minHeight={minHeightOf(i)}
              open={openIds.has(p.id)}
              onToggle={() => toggle(p.id)}
              onCollapsed={() => settle(p.id)}
            />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
