import { snapshotsContent } from '../data/about';
import { Card } from './ui/Card';
import { StaggerGroup, StaggerItem } from './ui/Stagger';
import { useLanguage } from '../i18n/LanguageContext';
import { uiStrings } from '../i18n/ui';

export function Snapshot() {
  const { lang } = useLanguage();
  const snapshots = snapshotsContent[lang];
  return (
    <section id="snapshot" aria-labelledby="snapshot-heading" className="pb-8">
      <div className="container">
        <h2 id="snapshot-heading" className="sr-only">
          {uiStrings[lang].sections.snapshot.srHeading}
        </h2>
        <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {snapshots.map((s, i) => {
            const wide = i === 0 || i === snapshots.length - 1;
            return (
              <StaggerItem key={s.label} className={wide ? 'col-span-2' : ''}>
                <Card hover className="h-full">
                  <h3 className="font-semibold">{s.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.detail}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
