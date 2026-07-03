import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Snapshot } from './components/Snapshot';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Education } from './components/Education';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/ui/BackToTop';
import { FirstVisitModal } from './components/ui/FirstVisitModal';
import { useLanguage } from './i18n/useLanguage';
import { uiStrings } from './i18n/ui';

function App() {
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
      <FirstVisitModal />
    </>
  );
}

export default App;
