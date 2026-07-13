// ============================================================
// UI STRINGS — all non-data, user-facing text that lives in
// components (section headers, buttons, labels, aria, SEO).
// Structured content lives in src/data/*.ts instead.
// ============================================================

import type { Lang } from './config';

type UIStrings = {
  nav: Record<string, string>;
  hero: { viewProjects: string; contactMe: string };
  sections: {
    about: { eyebrow: string; title: string };
    snapshot: { srHeading: string };
    projects: { eyebrow: string; title: string; intro: string };
    experience: { eyebrow: string; title: string };
    education: { eyebrow: string; title: string };
    services: { eyebrow: string; title: string; intro: string };
    testimonials: { eyebrow: string; title: string; intro: string };
    philosophy: { eyebrow: string; title: string };
    contact: { eyebrow: string; title: string };
  };
  about: { languagesLabel: string };
  projectCard: { read: string; hide: string };
  lightbox: {
    open: string;
    close: string;
    previous: string;
    next: string;
    counter: (n: number, total: number) => string;
    moreAria: (n: number) => string;
  };
  contact: {
    emailLabel: string;
    availabilityLabel: string;
    availability: string;
    whoami: string;
    copy: string;
    copied: string;
    helper: string;
    book: string;
    gpgLabel: string;
    gpgHelper: string;
    gpgDownload: string;
    gpgCopyFingerprint: string;
    gpgFingerprintCopied: string;
  };
  booking: {
    heading: string;
    subheading: string;
    inPerson: string;
    inPersonHint: string;
    online: string;
    onlineHint: string;
  };
  footer: { backToTop: string };
  skipLink: string;
  aria: { backToTop: string; openMenu: string; closeMenu: string; switchLanguage: string };
  seo: { title: string; description: string; ogLocale: string };
};

export const uiStrings: Record<Lang, UIStrings> = {
  da: {
    nav: {
      home: 'Hjem',
      about: 'Om',
      projects: 'Projekter',
      experience: 'Erfaring',
      education: 'Uddannelse',
      services: 'Ydelser',
      testimonials: 'Anbefalinger',
      contact: 'Kontakt',
    },
    hero: { viewProjects: 'Se projekter', contactMe: 'Kontakt mig' },
    sections: {
      about: { eyebrow: 'Om', title: 'Udvikling der bygger bro mellem systemer og forretning' },
      snapshot: { srHeading: 'Professionelt overblik' },
      projects: {
        eyebrow: 'Udvalgte projekter',
        title: 'Udvalgte case-studier',
        intro:
          'Akademisk og professionelt arbejde præsenteret som case-studier. Hver kan foldes ud til problem, tilgang, rolle og hvad det demonstrerer.',
      },
      experience: { eyebrow: 'Erfaring', title: 'Professionel tidslinje' },
      education: { eyebrow: 'Uddannelse', title: 'Akademisk fundament' },
      services: {
        eyebrow: 'Ydelser',
        title: 'Det kan jeg hjælpe med',
        intro:
          'Områder hvor jeg leverer konkret værdi — på tværs af udvikling, integration, sikkerhed og enterprise-systemer.',
      },
      testimonials: {
        eyebrow: 'Anbefalinger',
        title: 'Hvad andre siger',
        intro: 'Et par ord fra kolleger, mentorer og de teams, jeg har arbejdet med.',
      },
      philosophy: { eyebrow: 'Arbejdsfilosofi', title: 'Sådan arbejder jeg' },
      contact: { eyebrow: 'Kontakt', title: 'Lad os bygge pålidelige softwareløsninger.' },
    },
    about: { languagesLabel: 'Sprog —' },
    projectCard: { read: 'Læs case-studie', hide: 'Skjul case-studie' },
    lightbox: {
      open: 'Åbn billede i fuld størrelse',
      close: 'Luk',
      previous: 'Forrige billede',
      next: 'Næste billede',
      counter: (n, total) => `${n} af ${total}`,
      moreAria: (n) => `Vis ${n} flere billeder`,
    },
    contact: {
      emailLabel: 'E-mail',
      availabilityLabel: 'Tilgængelighed',
      availability: 'Åben for ansættelse, konsulentopgaver & samarbejde.',
      whoami: 'full-stack-udvikler · enterprise-niveau · sikker som standard',
      copy: 'Kopiér',
      copied: 'Kopieret',
      helper:
        'Til stillinger, konsulentopgaver eller samarbejde er den bedste måde at få fat i mig på via e-mail.',
      book: 'Book en samtale',
      gpgLabel: 'GPG-nøgle',
      gpgHelper: 'Vil du sende en krypteret e-mail? Brug min offentlige GPG-nøgle.',
      gpgDownload: 'Download offentlig nøgle',
      gpgCopyFingerprint: 'Kopiér fingerprint',
      gpgFingerprintCopied: 'Fingerprint kopieret',
    },
    booking: {
      heading: 'Hvordan skal vi mødes?',
      subheading: 'Vælg mødeform, så åbner kalenderen.',
      inPerson: 'Fysisk møde',
      inPersonHint: 'Jeg kommer ud til jer.',
      online: 'Online-møde (Teams)',
      onlineHint: 'Videomøde via Microsoft Teams.',
    },
    footer: { backToTop: 'Tilbage til toppen ↑' },
    skipLink: 'Spring til indhold',
    aria: {
      backToTop: 'Tilbage til toppen',
      openMenu: 'Åbn menu',
      closeMenu: 'Luk menu',
      switchLanguage: 'Skift til engelsk',
    },
    seo: {
      title: 'Duran Köse — Softwareingeniør & Full-Stack-udvikler | MSc DTU',
      description:
        'Softwareingeniør med MSc i Software Technology (DTU) — arbejder med full-stack, mobil, enterprise/SAP-systemer, autentificering og integration. Bosat i Taastrup, Danmark.',
      ogLocale: 'da_DK',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      services: 'Services',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: { viewProjects: 'View Projects', contactMe: 'Contact Me' },
    sections: {
      about: { eyebrow: 'About', title: 'Engineering that bridges systems and business' },
      snapshot: { srHeading: 'Professional snapshot' },
      projects: {
        eyebrow: 'Featured Projects',
        title: 'Selected case studies',
        intro:
          'Academic and professional work, framed as case studies. Each expands into problem, approach, role, and what it demonstrates.',
      },
      experience: { eyebrow: 'Experience', title: 'Professional timeline' },
      education: { eyebrow: 'Education', title: 'Academic foundation' },
      services: {
        eyebrow: 'Services',
        title: 'What I can help with',
        intro:
          'Areas where I deliver concrete value — across development, integration, security, and enterprise systems.',
      },
      testimonials: {
        eyebrow: 'Testimonials',
        title: 'What others say',
        intro: "A few words from colleagues, mentors, and the teams I've worked with.",
      },
      philosophy: { eyebrow: 'Work Philosophy', title: 'How I work' },
      contact: { eyebrow: 'Contact', title: "Let's build reliable software solutions." },
    },
    about: { languagesLabel: 'Languages —' },
    projectCard: { read: 'Read case study', hide: 'Hide case study' },
    lightbox: {
      open: 'Open image at full size',
      close: 'Close',
      previous: 'Previous image',
      next: 'Next image',
      counter: (n, total) => `${n} of ${total}`,
      moreAria: (n) => `Show ${n} more images`,
    },
    contact: {
      emailLabel: 'Email',
      availabilityLabel: 'Availability',
      availability: 'Open to roles, consulting & collaboration.',
      whoami: 'full-stack engineer · enterprise-grade · secure by default',
      copy: 'Copy',
      copied: 'Copied',
      helper:
        'For roles, consulting, or collaboration, the best way to reach me is by email.',
      book: 'Book an interview',
      gpgLabel: 'GPG key',
      gpgHelper: 'Want to send an encrypted email? Use my public GPG key.',
      gpgDownload: 'Download public key',
      gpgCopyFingerprint: 'Copy fingerprint',
      gpgFingerprintCopied: 'Fingerprint copied',
    },
    booking: {
      heading: 'How should we meet?',
      subheading: 'Pick a format and the calendar opens.',
      inPerson: 'In-person visit',
      inPersonHint: 'I come to you.',
      online: 'Online call (Teams)',
      onlineHint: 'Video call over Microsoft Teams.',
    },
    footer: { backToTop: 'Back to top ↑' },
    skipLink: 'Skip to content',
    aria: {
      backToTop: 'Back to top',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchLanguage: 'Switch to Danish',
    },
    seo: {
      title: 'Duran Köse — Software Engineer & Full-Stack Developer | MSc DTU',
      description:
        'MSc Software Technology engineer (DTU) working across full-stack, mobile, enterprise/SAP systems, authentication, and integration. Based in Taastrup, Denmark.',
      ogLocale: 'en_US',
    },
  },
};
