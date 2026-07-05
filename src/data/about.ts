// ============================================================
// ABOUT + PROFESSIONAL SNAPSHOT + WORK PHILOSOPHY copy.
// Localized: Danish (default) + English.
// ============================================================

import type { Localized, TitleBody } from './types';

type About = { paragraphs: string[] };
type Snapshot = { label: string; detail: string };
type Philosophy = { intro: string; points: TitleBody[] };

export const aboutContent: Localized<About> = {
  da: {
    paragraphs: [
      'Jeg er softwareingeniør uddannet i Software Technology på Danmarks Tekniske Universitet (DTU), med konsulent- og udviklingserfaring inden for enterprise-systemer, full-stack-webudvikling og cross-platform mobilapplikationer. Mit arbejde ligger dér, hvor forretningskrav møder teknisk implementering — jeg oversætter, hvad et system skal kunne, til software, der er stabil, sikker og vedligeholdelsesvenlig.',
      'På tværs af roller hos Pearl Danmark, Netcompany og Accenture har jeg arbejdet med enterprise-processer, frontend- og backend-udvikling, autentificering og adgangskontrol, integration af eksterne services, test og teknisk dokumentation. Jeg er tryg ved at eje en feature fra krav til levering, og lige så tryg ved at forklare tekniske beslutninger til ikke-tekniske interessenter — en vane, der er styrket af flere års undervisning på DTU.',
    ],
  },
  en: {
    paragraphs: [
      'I am a software engineer educated in Software Technology at the Technical University of Denmark (DTU), with consulting and development experience spanning enterprise systems, full-stack web development, and cross-platform mobile applications. My work sits at the point where business requirements meet technical implementation — I translate what a system needs to do into software that is stable, secure, and maintainable.',
      'Across roles at Pearl Danmark, Netcompany, and Accenture I have worked on enterprise processes, frontend and backend development, authentication and access control, external service integration, testing, and technical documentation. I am comfortable owning a feature from requirement to delivery, and equally comfortable explaining technical decisions to non-technical stakeholders — a habit reinforced by years of teaching at DTU.',
    ],
  },
};

export const snapshotsContent: Localized<Snapshot[]> = {
  da: [
    { label: 'MSc i Software Technology, DTU', detail: 'Ingeniørmæssigt fundament på kandidatniveau med speciale i computer vision / anomalidetektion.' },
    { label: 'Full-stack-udvikling', detail: 'Frontend- og backend-levering med REST-API’er, datahåndtering og skalerbar arkitektur.' },
    { label: 'Mobiludvikling', detail: 'Cross-platform-applikationer bygget med C# og Xamarin i agile teams.' },
    { label: 'Sikkerhed & autentificering', detail: 'Adgangskontrol, autentificeringsmekanismer og dataintegritet på tværs af web- og IoT-kontekster.' },
    { label: 'Undervisning & kommunikation', detail: 'Flere år som hjælpelærer på DTU inden for systemer, netværk og UX-fag.' },
  ],
  en: [
    { label: 'MSc Software Technology, DTU', detail: 'Graduate-level engineering foundation with a thesis in computer vision / anomaly detection.' },
    { label: 'Full-stack development', detail: 'Frontend and backend delivery with REST APIs, data handling, and scalable architecture.' },
    { label: 'Mobile development', detail: 'Cross-platform applications built with C# and Xamarin in Agile teams.' },
    { label: 'Security & authentication', detail: 'Access control, authentication mechanisms, and data integrity across web and IoT contexts.' },
    { label: 'Teaching & communication', detail: 'Multiple years as a DTU teaching assistant across systems, networking, and UX courses.' },
  ],
};

export const philosophyContent: Localized<Philosophy> = {
  da: {
    intro: 'Sådan griber jeg ingeniørarbejde an:',
    points: [
      { title: 'Struktur først', body: 'Jeg bryder tvetydige krav ned i klare, testbare dele, før jeg skriver kode, så arbejdet forbliver forudsigeligt og gennemgåeligt.' },
      { title: 'Pålidelighed frem for smarte tricks', body: 'Jeg foretrækker løsninger, der er stabile og kan vedligeholdes af den næste udvikler, frem for løsninger, der blot virker imponerende.' },
      { title: 'Klar kommunikation', body: 'Jeg dokumenterer beslutninger og forklarer afvejninger i et klart sprog — både til tekniske og ikke-tekniske interessenter.' },
      { title: 'Praktisk problemløsning', body: 'Jeg afgrænser til det, problemet faktisk kræver, validerer mod reelle begrænsninger og itererer derfra.' },
    ],
  },
  en: {
    intro: 'How I approach engineering work:',
    points: [
      { title: 'Structure first', body: 'I break ambiguous requirements into clear, testable pieces before writing code, so the work stays predictable and reviewable.' },
      { title: 'Reliability over cleverness', body: 'I favour solutions that are stable and maintainable by the next engineer over ones that are merely impressive.' },
      { title: 'Clear communication', body: 'I document decisions and explain trade-offs plainly, to both technical and non-technical stakeholders.' },
      { title: 'Practical problem-solving', body: 'I scope to what the problem actually requires, validate against real constraints, and iterate from there.' },
    ],
  },
};
