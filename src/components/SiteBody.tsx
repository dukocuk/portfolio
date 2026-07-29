'use client';

import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Snapshot } from './Snapshot';
import { Projects } from './Projects';
import { Timeline } from './Timeline';
import { Education } from './Education';
import { Services } from './Services';
import { Testimonials } from './Testimonials';
import { Philosophy } from './Philosophy';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { BackToTop } from './ui/BackToTop';
import { useLanguage } from '../i18n/useLanguage';
import { uiStrings } from '../i18n/ui';

// Every section below reads the active language from context and animates on
// scroll, so the whole page is one client component. The locale it renders is
// fixed by the route, which is what lets both languages be pre-rendered as
// static HTML at build time.
export function SiteBody() {
  const { lang } = useLanguage();
  return (
    <>
      {/* Skip link for keyboard / screen-reader users */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        {uiStrings[lang].skipLink}
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Snapshot />
        <Projects />
        <Timeline />
        <Education />
        <Services />
        <Testimonials />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
