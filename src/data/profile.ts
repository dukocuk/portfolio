// ============================================================
// CORE PROFILE — edit your headline / positioning / contact here.
// Per request: no social links, no CV download anywhere on the site.
// Localized: Danish (default) + English.
// ============================================================

import type { Lang } from '../i18n/config';

export type Profile = {
  name: string;
  title: string;
  headline: string;
  positioning: string;
  email: string;
  tagline: string;
};

export const profileContent: Record<Lang, Profile> = {
  da: {
    name: 'Duran Köse',
    title: 'MSc Software Technology · Softwareingeniør · Full-Stack-udvikler',
    // Hero-overskrift: de sidste to ord ("i produktion.") fremhæves med gradient.
    headline: 'Jeg bygger software, der holder i produktion.',
    positioning:
      'MSc i Software Technology fra DTU. Jeg arbejder med full-stack-udvikling, mobil, sikker autentificering og systemintegration — og oversætter komplekse krav til vedligeholdelsesvenlige løsninger.',
    email: 'duran.kse@gmail.com',
    tagline: 'Full-stack-udvikling med enterprise-disciplin.',
  },
  en: {
    name: 'Duran Köse',
    title: 'MSc Software Technology · Software Engineer · Full-Stack Developer',
    // Chosen hero headline (alternatives kept in the project plan):
    headline: 'I build software that holds up in production.',
    positioning:
      'MSc Software Technology from DTU. I work across full-stack development, mobile, secure authentication, and system integration — translating complex requirements into maintainable solutions.',
    email: 'duran.kse@gmail.com',
    tagline: 'Full-stack engineering with enterprise discipline.',
  },
};

// Navigation order is the single source of truth for the navbar + scroll-spy.
// IDs are stable scroll anchors; the visible labels are localized in src/i18n/ui.ts.
export const navItems = [
  { id: 'home' },
  { id: 'about' },
  { id: 'projects' },
  // { id: 'skills' },
  { id: 'experience' },
  { id: 'education' },
  { id: 'services' },
  { id: 'testimonials' },
  { id: 'contact' },
] as const;
