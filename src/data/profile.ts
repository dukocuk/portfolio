// ============================================================
// CORE PROFILE — edit your headline / positioning / contact here.
// Per request: no social links, no CV download anywhere on the site
// (the GPG public key and Tox ID below are deliberate, narrow exceptions
// for secure contact — not CVs or social links).
// Localized: Danish (default) + English.
// ============================================================

import type { Lang } from '../i18n/config';

type Profile = {
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
    email: 'duran.kose@protonmail.com',
    tagline: 'Full-stack-udvikling med enterprise-disciplin.',
  },
  en: {
    name: 'Duran Köse',
    title: 'MSc Software Technology · Software Engineer · Full-Stack Developer',
    // Chosen hero headline (alternatives kept in the project plan):
    headline: 'I build software that holds up in production.',
    positioning:
      'MSc Software Technology from DTU. I work across full-stack development, mobile, secure authentication, and system integration — translating complex requirements into maintainable solutions.',
    email: 'duran.kose@protonmail.com',
    tagline: 'Full-stack engineering with enterprise discipline.',
  },
};

// Cal.com booking links — the part after cal.com/ in the booking URL.
// Two event types per language: an in-person event (2h travel buffer on each
// side) and an online/Teams event (no buffer). Each has its interface language
// fixed on the Cal.com side (da/en), so the popup always matches the site
// language. The booker picks in-person vs online via the BookingButton chooser.
export const calLinks: Record<Lang, { inPerson: string; online: string }> = {
  da: { inPerson: 'duran-kose-zuak8f/samtale', online: 'duran-kose-zuak8f/samtale-online' },
  en: { inPerson: 'duran-kose-zuak8f/interview', online: 'duran-kose-zuak8f/interview-online' },
};

// GPG public key for duran.kose@protonmail.com. Exported from
// ProtonMail (Settings → Encryption and keys → Export public key).
export const gpgKey = {
  fingerprint: '1AF3 8DAB B66E 33DA 8FE2  D989 CC63 B9EB 1913 6814',
  fileName: 'duran-kose-gpg-public-key.asc',
};

// Tox ID for encrypted peer-to-peer chat. QR image lives in public/
// (served via import.meta.env.BASE_URL), same pattern as the GPG key file.
export const tox = {
  id: '4D8A85A96BF24F0FBA0FFB6B6EDB36D1C23306B4754D961BECF399F02EAD563B97BD5CB514FC',
  qrFileName: 'tox-id-qr.png',
};

// Navigation order is the single source of truth for the navbar + scroll-spy.
// IDs are stable scroll anchors; the visible labels are localized in src/i18n/ui.ts.
export const navItems = [
  { id: 'home' },
  { id: 'about' },
  { id: 'projects' },
  { id: 'experience' },
  { id: 'education' },
  { id: 'services' },
  { id: 'testimonials' },
  { id: 'contact' },
] as const;
