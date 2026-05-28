import { motion, useReducedMotion } from 'framer-motion';
import { experienceContent } from '../data/experience';
import { Section } from './Section';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/motion';
import { useLanguage } from '../i18n/LanguageContext';
import { uiStrings } from '../i18n/ui';

export function Timeline() {
  const reduced = useReducedMotion();
  const { lang } = useLanguage();
  const experience = experienceContent[lang];
  const ui = uiStrings[lang].sections.experience;

  return (
    <Section id="experience" index="04" eyebrow={ui.eyebrow} title={ui.title}>
      <div className="relative pl-8">
        {/* Accent line that draws in on scroll. */}
        <motion.span
          aria-hidden="true"
          className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-transparent"
          style={{ height: '100%' }}
          initial={reduced ? false : { scaleY: 0 }}
          whileInView={reduced ? {} : { scaleY: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.ol
          className="space-y-10"
          variants={reduced ? undefined : staggerContainer}
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? undefined : 'visible'}
          viewport={viewportOnce}
        >
          {experience.map((job, i) => (
            <motion.li
              key={i}
              className="relative"
              variants={reduced ? undefined : staggerItem}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[2.1rem] top-1.5 h-3.5 w-3.5 rounded-full bg-accent-gradient ring-4 ring-base"
              />
              <p className="text-sm font-semibold text-accent">{job.period}</p>
              <h3 className="mt-1 font-display text-lg font-bold">
                {job.role} <span className="text-muted">· {job.org}</span>
              </h3>
              <p className="text-sm text-muted">{job.location}</p>
              <p className="mt-3 max-w-2xl text-muted">{job.summary}</p>
              <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-sm text-muted">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Section>
  );
}
