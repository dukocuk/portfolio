import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { ThemeToggle } from './ui/ThemeToggle';
import { ScrollProgress } from './ui/ScrollProgress';

const sectionIds = navItems.map((n) => n.id);

export function Navbar() {
  const activeId = useScrollSpy(sectionIds);
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-base/95 shadow-sm shadow-black/10">
      <ScrollProgress />
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#home" className="font-display font-bold tracking-tight" onClick={() => setOpen(false)}>
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
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="container flex flex-col gap-1 overflow-hidden border-t border-border py-3 md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={activeId === item.id ? 'true' : undefined}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    activeId === item.id ? 'text-accent' : 'text-muted hover:text-text'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
