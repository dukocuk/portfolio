// ============================================================
// SERVICES — what I can help with. Localized: Danish (default) + English.
// ============================================================

import type { Lang } from '../i18n/config';

type Service = { title: string; body: string };

export const servicesContent: Record<Lang, Service[]> = {
  da: [
    {
      title: 'Full-Stack-softwareudvikling',
      body: 'Frontend- og backend-features leveret fra ende til anden med REST-API’er, solid datahåndtering og en vedligeholdelsesvenlig arkitektur.',
    },
    {
      title: 'Mobiludvikling',
      body: 'Cross-platform mobilapplikationer med C# og Xamarin (og Flutter), bygget og optimeret til stabil adfærd på tværs af enheder.',
    },
    {
      title: 'API- & systemintegration',
      body: 'Pålidelig integration med eksterne services og beskedbaserede systemer, med fokus på datakontrakter og fejlhåndtering.',
    },
    {
      title: 'Autentificering & adgangskontrol',
      body: 'Autentificeringsmekanismer og adgangskontrolmodeller til web- og IoT-kontekster, med fokus på dataintegritet og pålidelighed.',
    },
    {
      title: 'Test, fejlfinding & dokumentation',
      body: 'Tests, systematisk fejlfinding og klar dokumentation, der holder løsninger stabile og vedligeholdelsesvenlige over tid.',
    },
    {
      title: 'Teknisk kommunikation',
      body: 'At forklare tekniske beslutninger og systemer klart til både tekniske og ikke-tekniske målgrupper, understøttet af flere års undervisning på DTU.',
    },
  ],
  en: [
    {
      title: 'Full-Stack Software Development',
      body: 'Frontend and backend features delivered end-to-end with REST APIs, solid data handling, and a maintainable architecture.',
    },
    {
      title: 'Mobile Application Development',
      body: 'Cross-platform mobile applications with C# and Xamarin (and Flutter), built and optimized for stable behaviour across devices.',
    },
    {
      title: 'API & System Integration',
      body: 'Reliable integration with external services and message-based systems, with attention to data contracts and failure handling.',
    },
    {
      title: 'Authentication & Access Control',
      body: 'Authentication mechanisms and access-control models for web and IoT contexts, with a focus on data integrity and reliability.',
    },
    {
      title: 'Testing, Debugging & Documentation',
      body: 'Tests, systematic debugging, and clear documentation that keep solutions stable and maintainable over time.',
    },
    {
      title: 'Technical Communication',
      body: 'Explaining technical decisions and systems clearly to technical and non-technical audiences, backed by years of teaching at DTU.',
    },
  ],
};
