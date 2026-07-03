import { type MouseEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { LanguageToggle } from './ui/LanguageToggle';
import { BookingButton } from './ui/BookingButton';
import { buttonClasses } from './ui/buttonStyles';
import { ScrollProgress } from './ui/ScrollProgress';
import { useLanguage } from '../i18n/useLanguage';
import { uiStrings } from '../i18n/ui';

const sectionIds = navItems.map((n) => n.id);

export function Navbar() {
  const activeId = useScrollSpy(sectionIds);
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const ui = uiStrings[lang];

  // Close the mobile menu on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Scroll to a section explicitly rather than leaning on native hash
  // navigation: closing the drawer would otherwise race the in-flight smooth
  // scroll and cancel it. scrollIntoView honors `scroll-padding-top` (5rem) so
  // the sticky-header offset is preserved.
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return; // fall back to native hash nav if the section is missing
    e.preventDefault();
    setOpen(false);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    history.pushState(null, '', `#${id}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-base/95 shadow-sm shadow-black/10">
      <ScrollProgress />
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#home" className="font-display font-bold tracking-tight" onClick={(e) => handleNavClick(e, 'home')}>
          Duran&nbsp;<span className="text-gradient">Köse</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  aria-current={active ? 'true' : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active ? 'text-accent' : 'text-muted hover:text-text'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-md bg-accent/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {ui.nav[item.id]}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <BookingButton className={`${buttonClasses('primary', 'sm')} hidden md:inline-flex`}>
            {ui.contact.book}
          </BookingButton>
          <LanguageToggle />
          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.aria.closeMenu : ui.aria.openMenu}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu — always mounted (never unmounted via AnimatePresence) so
          that BookingButton's own chooser modal isn't torn down along with
          the collapsing drawer when it triggers `onClick` to close this menu.
          Positioned absolute (overlaying content) rather than in normal flow so
          it doesn't push page content down while open. */}
      <motion.div
        id="mobile-menu"
        initial={false}
        animate={open ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        inert={!open}
        className={`container absolute inset-x-0 top-full overflow-hidden bg-base/95 md:hidden ${open ? 'border-t border-border' : ''}`}
      >
        <ul className="flex flex-col gap-1 py-3">
          <li>
            <BookingButton
              onClick={() => setOpen(false)}
              className={`${buttonClasses('primary')} w-full`}
            >
              {ui.contact.book}
            </BookingButton>
          </li>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={activeId === item.id ? 'true' : undefined}
                className={`block rounded-md px-3 py-2 text-sm font-medium ${
                  activeId === item.id ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {ui.nav[item.id]}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
