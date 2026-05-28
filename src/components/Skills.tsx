import { languagesContent, skillGroupsContent } from '../data/skills';
import { Section } from './Section';
import { Card } from './ui/Card';
import { Tag } from './ui/Tag';
import { StaggerGroup, StaggerItem } from './ui/Stagger';
import { useLanguage } from '../i18n/LanguageContext';
import { uiStrings } from '../i18n/ui';

export function Skills() {
  const { lang } = useLanguage();
  const skillGroups = skillGroupsContent[lang];
  const languages = languagesContent[lang];
  const ui = uiStrings[lang].sections.skills;
  return (
    <Section
      id="skills"
      index="03"
      eyebrow={ui.eyebrow}
      title={ui.title}
      intro={ui.intro}
    >
      <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <StaggerItem key={group.category} className={group.skills.length >= 7 ? 'col-span-2' : ''}>
            <Card hover className="h-full">
              <h3 className="text-[11px] font-medium uppercase tracking-widest text-muted/50">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </Card>
          </StaggerItem>
        ))}
        <StaggerItem className="col-span-2 lg:col-span-4">
          <Card className="h-full">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-muted/50">{ui.languagesCard}</h3>
            <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              {languages.map((l) => (
                <li key={l.name} className="text-muted">
                  <span className="font-medium text-text">{l.name}</span> — {l.level}
                </li>
              ))}
            </ul>
          </Card>
        </StaggerItem>
      </StaggerGroup>
    </Section>
  );
}
