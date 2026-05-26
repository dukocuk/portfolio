import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/profile';
import { Button } from './ui/Button';
import { GradientMesh } from './ui/GradientMesh';

export function Hero() {
  const reduced = useReducedMotion();

  // Headline: keep the last two words on the accent gradient, like before.
  const words = profile.headline.split(' ');
  const lead = words.slice(0, -2);
  const accent = words.slice(-2);

  // Bento tiles cascade in; the headline words stagger on their own timeline.
  const grid = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.08, delayChildren: 0.1 } },
  };
  const tile = {
    hidden: { opacity: 0, y: reduced ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };
  const wordContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.06, delayChildren: 0.25 } },
  };
  const word = {
    hidden: { opacity: 0, y: reduced ? 0 : '0.6em' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="home" className="relative overflow-hidden grain">
      <GradientMesh />

      <div className="container flex min-h-[90vh] flex-col justify-center py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={grid}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {/* Headline tile */}
          <motion.div
            variants={tile}
            className="col-span-2 flex min-h-[24rem] flex-col justify-center rounded-2xl border border-border bg-surface/80 p-8 sm:p-10 lg:col-span-4"
          >
            <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-sm text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.title}
            </p>

            <motion.h1 variants={wordContainer} initial="hidden" animate="visible" className="display-hero">
              {lead.map((w, i) => (
                <motion.span key={`l-${i}`} variants={word} className="mr-[0.25em] inline-block">
                  {w}
                </motion.span>
              ))}
              <motion.span variants={word} className="mr-[0.25em] inline-block text-gradient">
                {accent.join(' ')}
              </motion.span>
            </motion.h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{profile.positioning}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#projects" variant="primary">
                View Projects
              </Button>
              <Button href="#skills" variant="outline">
                View Technical Background
              </Button>
              <Button href="#contact" variant="ghost">
                Contact Me
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
