// ============================================================
// ABOUT + PROFESSIONAL SNAPSHOT + WORK PHILOSOPHY copy.
// ============================================================

export const about = {
  paragraphs: [
    'I am a software engineer educated in Software Technology at the Technical University of Denmark (DTU), with consulting and development experience spanning enterprise systems, full-stack web development, and cross-platform mobile applications. My work sits at the point where business requirements meet technical implementation — I translate what a system needs to do into software that is stable, secure, and maintainable.',
    'Across roles at Pearl Danmark, Netcompany, and Accenture I have worked on enterprise processes, frontend and backend development, authentication and access control, external service integration, testing, and technical documentation. I am comfortable owning a feature from requirement to delivery, and equally comfortable explaining technical decisions to non-technical stakeholders — a habit reinforced by years of teaching at DTU.',
  ],
} as const;

export type Snapshot = { label: string; detail: string };

export const snapshots: Snapshot[] = [
  { label: 'MSc Software Technology, DTU', detail: 'Graduate-level engineering foundation with a thesis in computer vision / anomaly detection.' },
  { label: 'Full-stack development', detail: 'Frontend and backend delivery with REST APIs, data handling, and scalable architecture.' },
  { label: 'Mobile development', detail: 'Cross-platform applications built with C# and Xamarin in Agile teams.' },
  { label: 'Security & authentication', detail: 'Access control, authentication mechanisms, and data integrity across web and IoT contexts.' },
  { label: 'Teaching & communication', detail: 'Multiple years as a DTU teaching assistant across systems, networking, and UX courses.' },
];

export const philosophy = {
  intro: 'How I approach engineering work:',
  points: [
    { title: 'Structure first', body: 'I break ambiguous requirements into clear, testable pieces before writing code, so the work stays predictable and reviewable.' },
    { title: 'Reliability over cleverness', body: 'I favour solutions that are stable and maintainable by the next engineer over ones that are merely impressive.' },
    { title: 'Clear communication', body: 'I document decisions and explain trade-offs plainly, to both technical and non-technical stakeholders.' },
    { title: 'Practical problem-solving', body: 'I scope to what the problem actually requires, validate against real constraints, and iterate from there.' },
  ],
} as const;
