// ============================================================
// EXPERIENCE TIMELINE — impact-focused, grounded in CV facts.
// Localized: Danish (default) + English.
// ============================================================

import type { Lang } from '../i18n/config';

export type Experience = {
  period: string;
  role: string;
  org: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experienceContent: Record<Lang, Experience[]> = {
  da: [
    {
      period: '2025 – 2026',
      role: 'Konsulent',
      org: 'Pearl Danmark',
      location: 'Danmark',
      summary:
        'Fokus på enterprise-systemer — opbygning af konsulentkompetencer til at oversætte forretningskrav til konkrete systemløsninger.',
      highlights: [
        'Gennemførte praktiske workshops på tværs af enterprise-moduler og implementeringsmetoder.',
        'Udviklede forståelse for forretningsprocesser og konsulentworkflowet for enterprise-systemer.',
        'Øvede at oversætte forretningskrav til implementerbare systemløsninger.',
      ],
    },
    {
      period: '2023 – 2024',
      role: 'IT-konsulent',
      org: 'Netcompany',
      location: 'Danmark',
      summary:
        'Leverede og vedligeholdt full-stack-løsninger med sikker adgangskontrol, pålidelig datahåndtering og eksterne integrationer.',
      highlights: [
        'Byggede frontend- og backend-features og integrerede eksterne services og API’er.',
        'Implementerede autentificering og adgangskontrol med robust datahåndtering.',
        'Bidrog til skalerbar arkitektur, understøttet af test, dokumentation og iterativ forbedring.',
      ],
    },
    {
      period: '2021 – 2023',
      role: 'Applikationsudvikler',
      org: 'Accenture',
      location: 'Danmark',
      summary:
        'Byggede cross-platform mobilapplikationer med C# og Xamarin i et agilt team i samarbejde med design og backend.',
      highlights: [
        'Udviklede mobile features med C# og Xamarin på tværs af platforme.',
        'Optimerede performance, fejlfandt problemer og skrev dokumentation.',
        'Leverede i agile sprints sammen med design- og backend-teams.',
      ],
    },
    {
      period: '2018 – 2021',
      role: 'Hjælpelærer',
      org: 'DTU (Danmarks Tekniske Universitet)',
      location: 'Danmark',
      summary:
        'Støttede undervisning inden for systemer, netværk, UX og mobilfag — styrkede fundamentet og udviklede kommunikationsevner.',
      highlights: [
        'Assisterede i Operativsystemer, Datakommunikation, Brugerinteraktion og Mobiludvikling.',
        'Dækkede systemadministration, proceskontrol og netværksprotokoller, herunder TCP/IP.',
        'Vejledte studerende i UX-principper og cross-platform app-udvikling.',
      ],
    },
  ],
  en: [
    {
      period: '2025 – 2026',
      role: 'Consultant',
      org: 'Pearl Danmark',
      location: 'Denmark',
      summary:
        'Focused on enterprise systems — building the consulting skill set to translate business requirements into concrete system solutions.',
      highlights: [
        'Completed practical workshops across enterprise modules and implementation methods.',
        'Developed business-process understanding and the consultant workflow for enterprise systems.',
        'Practised translating business requirements into implementable system solutions.',
      ],
    },
    {
      period: '2023 – 2024',
      role: 'IT Consultant',
      org: 'Netcompany',
      location: 'Denmark',
      summary:
        'Delivered and maintained full-stack solutions with secure access control, dependable data handling, and external integrations.',
      highlights: [
        'Built frontend and backend features and integrated external services and APIs.',
        'Implemented authentication and access control with robust data handling.',
        'Contributed to scalable architecture, supported by testing, documentation, and iterative improvement.',
      ],
    },
    {
      period: '2021 – 2023',
      role: 'Application Developer',
      org: 'Accenture',
      location: 'Denmark',
      summary:
        'Built cross-platform mobile applications with C# and Xamarin in an Agile team, collaborating with design and backend.',
      highlights: [
        'Developed mobile features with C# and Xamarin across platforms.',
        'Optimized performance, debugged issues, and wrote documentation.',
        'Delivered within Agile sprints alongside design and backend teams.',
      ],
    },
    {
      period: '2018 – 2021',
      role: 'Teaching Assistant',
      org: 'DTU (Technical University of Denmark)',
      location: 'Denmark',
      summary:
        'Supported teaching across systems, networking, UX, and mobile courses — reinforcing fundamentals while developing communication skills.',
      highlights: [
        'Assisted in Operating Systems, Data Communication, User Interaction, and Mobile Development.',
        'Covered system administration, process control, and networking protocols including TCP/IP.',
        'Guided students through UX principles and cross-platform app development.',
      ],
    },
  ],
};
