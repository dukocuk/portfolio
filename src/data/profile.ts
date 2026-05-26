// ============================================================
// CORE PROFILE — edit your headline / positioning / contact here.
// Per request: no social links, no CV download anywhere on the site.
// ============================================================

export const profile = {
  name: 'Duran Köse',
  title: 'MSc Software Technology · Software Engineer · Full-Stack Developer',
  // Chosen hero headline (alternatives kept in the project plan):
  headline: 'I build software that holds up in production.',
  positioning:
    'MSc Software Technology from DTU. I work across full-stack development, mobile, secure authentication, and system integration — translating complex requirements into maintainable solutions.',
  email: 'duran.kse@gmail.com',
  // Short tagline used in the footer
  tagline: 'Full-stack engineering with enterprise discipline.',
} as const;

// Navigation order is the single source of truth for the navbar + scroll-spy.
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
] as const;
