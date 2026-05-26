// ============================================================
// FEATURED PROJECTS / CASE STUDIES.
// No code/repo/demo links per request. Replace [bracketed] placeholders
// and add real screenshots where indicated. Do not invent results.
// ============================================================

export type CaseSection = { heading: string; body: string | string[] };

export type ProjectIcon = 'vision' | 'security' | 'fullstack' | 'mobile';

export type Project = {
  id: string;
  title: string;
  type: string;
  // Domain icon shown in the card header strip.
  icon: ProjectIcon;
  summary: string;
  tech: string[];
  // [Add project screenshot here] — drop an image in /public and set its path.
  image: null | string;
  imageAlt: string;
  sections: CaseSection[];
};

export const projects: Project[] = [
  {
    id: 'vild-pluk',
    title: 'Vild Pluk — Wild Fruit Foraging Map for Denmark',
    type: 'Personal Project · Full-Stack · Mobile · GraphQL',
    icon: 'fullstack',
    summary:
      'A community-driven foraging app for Denmark — a Flutter mobile app backed by a GraphQL API with geospatial search, real-time community features, and gamification.',
    image: null,
    imageAlt: 'Placeholder mockup of the Vild Pluk foraging map showing fruit spots across Denmark',
    tech: ['Flutter', 'Dart', 'Riverpod', 'GraphQL', 'Node.js', 'TypeScript', 'Apollo Server', 'PostgreSQL', 'PostGIS', 'Prisma'],
    sections: [
      { heading: 'Problem', body: 'Knowledge of where wild fruit grows in Denmark is scattered and informal, with no shared, location-aware way for foragers to discover and contribute spots.' },
      { heading: 'Goal', body: 'Build a mobile app that lets a community map, discover, and discuss wild-fruit foraging spots, with location-based search and incentives to contribute.' },
      { heading: 'Technical approach', body: [
        'Built a cross-platform Flutter app (Riverpod state management, GoRouter navigation) with an interactive OpenStreetMap map and offline tile caching.',
        'Designed and implemented a GraphQL API in Node.js/TypeScript (Apollo Server + Express) over PostgreSQL with the PostGIS extension via Prisma.',
        'Implemented geospatial "spots nearby" queries using PostGIS ST_DWithin with a spatial index for radius search.',
        'Added JWT authentication (email/password + Google OAuth) and image uploads for spot photos.',
      ] },
      { heading: 'My role', body: 'Sole developer — designed and built the full stack: the Flutter client, the GraphQL backend, the database schema, authentication, and deployment.' },
      { heading: 'Features', body: [
        'Interactive map of foraging spots with add/discover, favorites, and OSRM turn-by-turn routing.',
        'Real-time comments, status updates, and upvotes on spots.',
        'Gamification: a points system, seven levels, and a set of achievement badges with a leaderboard.',
        'Offline map caching and light/dark themes.',
      ] },
      { heading: 'Technologies & methods', body: 'Flutter, Dart, Riverpod, GoRouter, flutter_map/OpenStreetMap; Node.js, TypeScript, Apollo GraphQL, Express, Prisma, PostgreSQL + PostGIS, JWT/OAuth auth, Docker for local Postgres.' },
      { heading: 'Challenges', body: 'Modelling and querying geospatial data efficiently with PostGIS, keeping the map usable offline, and designing a gamification system that rewards genuine community contribution.' },
      { heading: 'Outcome', body: 'A fully operational GraphQL backend and a feature-complete Flutter app covering mapping, community features, and gamification. [Add measurable result here if you wish to disclose usage or release details.]' },
      { heading: 'What it demonstrates', body: 'End-to-end solo product delivery — mobile frontend, GraphQL backend, geospatial data, authentication, and gamification — shipped as a cohesive system.' },
    ],
  },
  {
    id: 'thermal-anomaly',
    title: 'Anomaly Detection in Thermal Surveillance Video',
    type: 'MSc Thesis · Computer Vision · Anomaly Detection',
    icon: 'vision',
    summary:
      'A computer-vision system for detecting irregularities in thermal surveillance video through algorithmic analysis and optimized data processing.',
    image: null,
    imageAlt: 'Placeholder visualization of thermal surveillance video frames with highlighted anomalies',
    tech: ['Python', 'Computer Vision', 'Anomaly Detection', 'Data Processing', 'Algorithms'],
    sections: [
      { heading: 'Problem', body: 'Thermal surveillance footage contains large volumes of low-contrast, noisy frames in which genuinely anomalous events are rare and easily missed by manual review.' },
      { heading: 'Goal', body: 'Design an approach that automatically flags irregular patterns in thermal video while keeping the processing pipeline efficient enough to handle continuous footage.' },
      { heading: 'Technical approach', body: [
        'Built a processing pipeline to ingest and normalize thermal video frames for analysis.',
        'Applied anomaly-detection techniques to distinguish irregular patterns from normal scene activity.',
        'Optimized the data-processing stages to keep computation tractable across long sequences.',
      ] },
      { heading: 'My role', body: 'Sole author — responsible for problem framing, literature review, pipeline design, implementation, experimentation, and the written thesis.' },
      { heading: 'Technologies & methods', body: 'Python, computer-vision and anomaly-detection methods, structured experimentation, and performance-conscious data processing.' },
      { heading: 'Challenges', body: 'Working with noisy, low-contrast thermal data and balancing detection sensitivity against processing cost on continuous video.' },
      { heading: 'Outcome', body: 'Delivered as the completed MSc thesis at DTU. [Add measurable result here once you decide what to disclose, e.g. detection behaviour on the evaluated dataset.]' },
      { heading: 'What it demonstrates', body: 'Ability to take an open-ended research problem through to a working technical pipeline — comfort with data, algorithms, and disciplined experimentation.' },
    ],
  },
  {
    id: 'iot-auth',
    title: 'Authentication in Cloud-Based IoT Systems',
    type: 'Bachelor Project · Security · Cloud · IoT',
    icon: 'security',
    summary:
      'Identity management and access control for cloud-connected IoT systems, with a focus on secure authentication and an analysis of reliability and security.',
    image: null,
    imageAlt: 'Placeholder diagram of cloud-based IoT devices connecting through an authentication layer',
    tech: ['Authentication', 'Access Control', 'Cloud', 'IoT', 'Network Security'],
    sections: [
      { heading: 'Problem', body: 'Cloud-connected IoT devices expand the attack surface: many constrained devices need to prove identity and obtain access securely without a heavy authentication burden.' },
      { heading: 'Goal', body: 'Investigate and apply authentication and access-control mechanisms suited to cloud-based IoT, and analyse their security and reliability characteristics.' },
      { heading: 'Technical approach', body: [
        'Studied identity-management and access-control models applicable to constrained, cloud-connected devices.',
        'Implemented and examined secure authentication mechanisms for device-to-cloud communication.',
        'Analysed the trade-offs between security, reliability, and practical constraints.',
      ] },
      { heading: 'My role', body: 'Project author — responsible for research, design, implementation, and the security/reliability analysis.' },
      { heading: 'Security considerations', body: 'Identity verification, access control, data integrity, and the reliability of authentication under realistic operating conditions.' },
      { heading: 'Outcome', body: 'Delivered as the completed bachelor project at DTU. [Add measurable result here if you wish to disclose specific findings.]' },
      { heading: 'What it demonstrates', body: 'Foundational security engineering — reasoning about threats, authentication, and access control in distributed cloud/IoT systems.' },
    ],
  },
  {
    id: 'enterprise-fullstack',
    title: 'Enterprise Full-Stack Development & System Integration',
    type: 'Professional Experience · Netcompany',
    icon: 'fullstack',
    summary:
      'Development and maintenance of full-stack solutions with secure access control, robust data handling, external integrations, testing, and scalable architecture.',
    image: null,
    imageAlt: 'Placeholder diagram of a full-stack enterprise application integrating external services',
    tech: ['TypeScript', 'React', 'Node.js', '.NET', 'REST API', 'SQL', 'Service Bus', 'Authentication'],
    sections: [
      { heading: 'Context', body: 'Worked as an IT consultant delivering and maintaining full-stack solutions in an enterprise setting, working across the frontend, backend, and integration layers. (No confidential client details included.)' },
      { heading: 'Responsibilities', body: [
        'Built and maintained frontend and backend features against shared, evolving requirements.',
        'Implemented authentication and access control and handled data robustly across the stack.',
        'Integrated external services and APIs, and contributed to a scalable, maintainable architecture.',
        'Wrote tests and documentation and carried out iterative improvements.',
      ] },
      { heading: 'Technical areas', body: 'Frontend and backend development, REST APIs, authentication and access control, data handling, service/message integration, automated testing, and documentation.' },
      { heading: 'Challenges', body: 'Keeping solutions stable and consistent while requirements evolved, and integrating reliably with external systems.' },
      { heading: 'Value delivered', body: 'Maintainable full-stack features with secure access handling and dependable integrations, supported by tests and documentation. [Add measurable result here if available.]' },
      { heading: 'What it demonstrates', body: 'End-to-end ownership in a professional enterprise environment — secure, integrated, and documented full-stack delivery.' },
    ],
  },
  {
    id: 'mobile-xamarin',
    title: 'Cross-Platform Mobile Application Development',
    type: 'Professional Experience · Accenture',
    icon: 'mobile',
    summary:
      'Cross-platform mobile development with C# and Xamarin — building features with design and backend teams, optimizing performance, and delivering in Agile sprints.',
    image: null,
    imageAlt: 'Placeholder mockup of a cross-platform mobile application on phone and tablet',
    tech: ['C#', 'Xamarin', 'REST API', 'Agile', 'Debugging', 'Performance'],
    sections: [
      { heading: 'Context', body: 'Worked as an application developer building cross-platform mobile applications with C# and Xamarin, collaborating closely with design and backend teams.' },
      { heading: 'Responsibilities', body: [
        'Implemented application features across platforms using C# and Xamarin.',
        'Debugged issues and optimized performance.',
        'Wrote documentation and contributed within Agile delivery.',
      ] },
      { heading: 'Technical stack', body: 'C#, Xamarin, REST API integration, and standard mobile debugging and profiling tools.' },
      { heading: 'Collaboration', body: 'Worked with design and backend teams to align UI behaviour, data contracts, and delivery within sprint cycles.' },
      { heading: 'Testing & optimization', body: 'Debugging, performance optimization, and testing to keep the applications stable across devices.' },
      { heading: 'What it demonstrates', body: 'Practical cross-platform mobile delivery in a professional Agile team, with attention to performance and collaboration.' },
    ],
  },
];
