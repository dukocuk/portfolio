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
      { heading: 'Problem', body: 'In Denmark, the legal right to forage is broad, but knowing where wild fruit actually grows is another matter. That knowledge lives in people\'s heads, private notebooks, and scattered Facebook groups — informal, easily lost, and rarely tied to a precise location. A spot one person finds in autumn is forgotten by the next season, and newcomers have no reliable starting point, with no shared, map-based way to discover spots nearby, see what\'s in season, or contribute their own finds.' },
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
      { heading: 'Outcome', body: 'A fully operational GraphQL backend and a feature-complete Flutter app covering mapping, community features, and gamification.' },
      { heading: 'What it demonstrates', body: 'End-to-end solo product delivery — mobile frontend, GraphQL backend, geospatial data, authentication, and gamification — shipped as a cohesive system.' },
    ],
  },
  {
    id: 'budget-tracker',
    title: 'Budget Tracker — Offline-First Budgeting with Cloud Sync',
    type: 'Personal Project · Full-Stack · Offline-First · React',
    icon: 'fullstack',
    summary:
      'A budgeting app for managing fixed expenses in DKK — offline-first with a PostgreSQL database running in the browser, automatic Google Drive sync across devices, and multi-year budget management.',
    image: null,
    imageAlt: 'Placeholder mockup of the Budget Tracker dashboard with expense charts and yearly budgets',
    tech: ['React', 'TypeScript', 'Vite', 'PGlite', 'PostgreSQL', 'Google Drive API', 'OAuth 2.0', 'Recharts', 'Vitest'],
    sections: [
      { heading: 'Problem', body: 'Tracking fixed expenses across years is awkward in spreadsheets, and most budgeting tools require constant connectivity and store data on third-party servers.' },
      { heading: 'Goal', body: 'Build a budgeting app that works fully offline, keeps data under the user’s control, and still syncs seamlessly across devices.' },
      { heading: 'Technical approach', body: [
        'Built an offline-first architecture with PGlite — a full PostgreSQL database running in the browser — for instant, zero-latency reads and writes.',
        'Implemented cloud sync to a single JSON file in the user’s own Google Drive, debounced after changes and polled across devices, with a last-write-wins conflict strategy.',
        'Added Google OAuth 2.0 login so each user’s data stays isolated in their own Drive.',
        'Designed a multi-year budget-period system with automatic balance carryover, archiving, and year-over-year comparison.',
      ] },
      { heading: 'My role', body: 'Sole developer — designed and built the full stack: the React client, the offline database layer, the Google Drive sync engine, authentication, and the test suite.' },
      { heading: 'Features', body: [
        'Multi-year budgets with balance carryover, archived read-only years, and year comparison.',
        'Interactive pie, bar, and line charts; reusable budget templates; search and filtering.',
        'CSV import/export with validation, and full undo/redo with keyboard shortcuts.',
        'Offline-first operation with automatic Google Drive sync; fully localized Danish UI.',
      ] },
      { heading: 'Technologies & methods', body: 'React, TypeScript, Vite; PGlite (in-browser PostgreSQL); Google Drive API and OAuth 2.0 for sync and auth; Recharts for visualization; Vitest and Testing Library for a 595+ test suite.' },
      { heading: 'Challenges', body: 'Reconciling offline edits across devices with a simple, predictable sync model, and keeping the in-browser database performant while persisting state across sessions.' },
      { heading: 'Outcome', body: 'A feature-complete, well-tested budgeting app (595+ passing tests) covering offline storage, cloud sync, and multi-year budgeting.' },
      { heading: 'What it demonstrates', body: 'Offline-first product thinking and end-to-end delivery — local-first data, user-owned cloud sync, authentication, and a disciplined automated test suite.' },
    ],
  },
  {
    id: 'thermal-anomaly',
    title: 'Anomaly Detection in Thermal Surveillance Videos — Synthetic Data for Drowning Prevention',
    type: 'MSc Thesis · Computer Vision · Anomaly Detection',
    icon: 'vision',
    summary:
      'A computer-vision research project detecting drowning-related anomalies in thermal surveillance footage, using convolutional autoencoders and CycleGAN-generated synthetic data to improve anomaly detection in Aalborg harbor scenarios.',
    image: null,
    imageAlt: 'Placeholder visualization of thermal surveillance video frames with highlighted anomalies',
    tech: ['Convolutional Autoencoder', 'CycleGAN', 'Synthetic Data', 'Thermal Surveillance', 'Anomaly Detection', 'Computer Vision', 'ROC-AUC / PR-AUC Evaluation', 'Deep Learning'],
    sections: [
      { heading: 'Problem', body: [
        'Drowning incidents in Aalborg harbor remain a serious unresolved safety issue. Between 2001 and 2014, 390 people drowned in Aalborg harbor, and victims often cannot be detected or rescued in time.',
        'Thermal surveillance offers potential, but real-world anomaly data is limited, difficult to collect, and inconsistent across lighting, temperature, and environmental conditions.',
      ] },
      { heading: 'Goal', body: 'Build and evaluate an anomaly-detection approach for thermal surveillance videos that can identify abnormal events, such as a person or mannequin in the water, while exploring whether synthetic and CycleGAN-generated images can improve model performance.' },
      { heading: 'Technical approach', body: [
        'Developed a convolutional autoencoder trained to reconstruct normal thermal surveillance frames, using reconstruction error to detect anomalous scenes.',
        'Created multiple experimental configurations using real thermal images, synthetic normal and anomaly data, mannequin anomaly data, and CycleGAN-generated style-transfer images.',
        'Used CycleGAN to transfer visual style between synthetic and real thermal domains, with two generators and two discriminators trained using adversarial loss and forward/backward cycle-consistency loss.',
        'Evaluated model performance across several training and testing setups using ROC-AUC, precision-recall curves, confusion matrices, catplots, and original-versus-reconstructed image comparisons.',
      ] },
      { heading: 'My role', body: 'Thesis researcher and developer — designed the anomaly-detection pipeline, prepared datasets, trained and evaluated convolutional autoencoder models, experimented with CycleGAN-generated data, and analyzed the tradeoffs between real, synthetic, and style-transferred thermal images.' },
      { heading: 'Features', body: [
        'Thermal-video anomaly detection using reconstruction-based deep learning.',
        'Multiple dataset configurations combining real normal data, synthetic normal data, synthetic anomalies, hot-temperature images, daylight images, mannequin anomalies, and CycleGAN-generated images.',
        'CycleGAN style-transfer experiments for generating more realistic synthetic thermal images.',
        'Model comparison using ROC-AUC, precision-recall metrics, confusion matrices, and reconstruction visualizations.',
        'Focused application context: drowning detection and harbor safety.',
      ] },
      { heading: 'Technologies & methods', body: 'Convolutional autoencoder for anomaly detection; CycleGAN for synthetic-to-real thermal image style transfer; adversarial learning; cycle-consistency loss; reconstruction-error-based classification; ROC-AUC and precision-recall evaluation; thermal surveillance datasets; real and synthetic image experiments.' },
      { heading: 'Challenges', body: [
        'Real anomaly data was limited, making it difficult to train and evaluate models under realistic conditions.',
        'Purely synthetic training data produced strong results in controlled settings but did not fully represent real-world surveillance complexity.',
        'Combining synthetic and real data did not always improve classification performance, showing that synthetic data quality and domain alignment were critical.',
        'CycleGAN-generated images required careful filtering, since poorly generated images could reduce model reliability instead of improving it.',
      ] },
      { heading: 'Outcome', body: [
        'Several model configurations were tested, with the strongest ROC-AUC result reaching 0.9881 when training included real normal data and daylight images.',
        'The experiments showed that real-data-based training generally outperformed simple combinations of real and synthetic data, while CycleGAN had potential but required better image quality and more carefully designed configurations.',
      ] },
      { heading: 'What it demonstrates', body: 'Applied machine-learning research with a real-world safety objective — anomaly detection, thermal computer vision, synthetic data generation, model evaluation, and critical analysis of when synthetic data helps or harms performance.' },
    ],
  },
  {
    id: 'iot-auth',
    title: 'Authentication in Cloud-Based IoT Systems — Secure Access for Device Data',
    type: 'Bachelor Project · Security · Cloud · IoT',
    icon: 'security',
    summary:
      'A cloud-based IoT authentication and authorization system designed to simplify access to sensor data, centralize device management, and give users secure access to only the data they are permitted to view.',
    image: null,
    imageAlt: 'Placeholder diagram of cloud-based IoT devices connecting through an authentication layer',
    tech: ['Node.js', 'OAuth 2.0', 'MongoDB', 'GraphQL', 'React', 'IoT', 'The Things Network', 'Authentication & Authorization'],
    sections: [
      { heading: 'Problem', body: [
        'IoT platforms like The Things Network can already manage devices and data, but they often require technical knowledge from the user.',
        'For non-technical users, such as farmers who only need to view humidity and temperature data from multiple devices, creating accounts, managing devices, handling applications, and navigating TTN directly can be overwhelming.',
      ] },
      { heading: 'Goal', body: [
        'Build a private server that authenticates and authorizes users, making IoT data access simpler, more secure, and easier to manage.',
        'The system should allow regular users to see only their own device data, while system maintainers can manage users, devices, and data across the platform.',
      ] },
      { heading: 'Technical approach', body: [
        'Designed a private server layer between users and The Things Network to centralize authentication, authorization, and device-data access.',
        'Planned OAuth 2.0 authentication where users exchange valid credentials for access tokens, with different permission levels for regular users and system maintainers.',
        'Proposed Node.js as the backend runtime to support scalable server-side JavaScript development and reduce future performance bottlenecks.',
        'Used MongoDB as a flexible NoSQL database for storing dynamic IoT device records, since different devices may produce different fields and data structures.',
        'Designed GraphQL as the API layer to reduce over-fetching and replace many traditional REST endpoints with a single queryable endpoint.',
        'Planned a React-based web client so users can log in and view only the IoT data relevant to them through a simple browser interface.',
      ] },
      { heading: 'My role', body: 'System designer and developer — defined the architecture for authentication, authorization, data storage, API design, and the user-facing web client for a cloud-based IoT data platform.' },
      { heading: 'Features', body: [
        'User authentication through OAuth 2.0.',
        'Role-based authorization for regular users and system maintainers.',
        'Centralized IoT data access through a private server.',
        'MongoDB-based storage for flexible device records with dynamic schemas.',
        'GraphQL endpoint for efficient client queries and reduced over-fetching.',
        'React web client for simple login and data visualization.',
        'Potential automation of TTN device registration and user-device mapping.',
      ] },
      { heading: 'Technologies & methods', body: 'Node.js for backend development; OAuth 2.0 for secure authentication; MongoDB for NoSQL data storage; GraphQL for efficient API queries; React for the web client; The Things Network for IoT device connectivity and sensor data.' },
      { heading: 'Challenges', body: [
        'The main challenge was reducing technical complexity for end users while still preserving secure access control.',
        'Another challenge was designing a data model flexible enough for different IoT devices, since sensor records may not follow one fixed schema.',
        'The system also needed a cleaner alternative to direct TTN access, so maintainers could control users, permissions, and device data from one centralized layer.',
      ] },
      { heading: 'Outcome', body: [
        'The project proposed a secure and scalable architecture for cloud-based IoT authentication, where users can access sensor data through a simplified web client instead of managing devices directly in TTN.',
        'The design improves usability for non-technical users while giving system maintainers stronger control over authentication, authorization, and device-data management.',
      ] },
      { heading: 'What it demonstrates', body: 'Backend architecture, cloud-based IoT system design, authentication and authorization, API design, NoSQL data modeling, and user-centered thinking for simplifying technical platforms.' },
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
      { heading: 'Value delivered', body: 'Maintainable full-stack features with secure access handling and dependable integrations, supported by tests and documentation.' },
      { heading: 'What it demonstrates', body: 'End-to-end ownership in a professional enterprise environment — secure, integrated, and documented full-stack delivery.' },
    ],
  },
  {
    id: 'mobile-xamarin',
    title: 'Cross-Platform Mobile Application Development',
    type: 'Professional Experience · Accenture',
    icon: 'mobile',
    summary:
      'Further developed a cross-platform mileage-tracking app for a client — a C#/Xamarin mobile app with an interactive map and navigation, backed by an ASP.NET Core backend, delivered in Agile sprints.',
    image: null,
    imageAlt: 'Placeholder mockup of a cross-platform mobile application on phone and tablet',
    tech: ['C#', 'Xamarin', 'ASP.NET Core', 'REST API', 'Maps & Navigation', 'Agile'],
    sections: [
      { heading: 'Context', body: 'Worked as an application developer at Accenture, further developing a cross-platform mobile app for a client. The app let employees register the kilometres they drove during customer visits, combining an interactive map with navigation on the front end and an ASP.NET Core backend.' },
      { heading: 'Responsibilities', body: [
        'Built mobile features with C# and Xamarin, including an interactive map with navigation for logging trip distances.',
        'Developed and maintained the ASP.NET Core backend and the REST APIs powering the app.',
        'Debugged issues, optimized performance, and contributed within Agile delivery.',
      ] },
      { heading: 'Technical stack', body: 'C# and Xamarin on the client; an ASP.NET Core backend exposing REST APIs; interactive maps with navigation; plus standard mobile debugging and profiling tools.' },
      { heading: 'Collaboration', body: 'Worked with design and backend teams to align UI behaviour, data contracts, and delivery within sprint cycles.' },
      { heading: 'Testing & optimization', body: 'Debugging, performance optimization, and testing to keep the applications stable across devices.' },
      { heading: 'What it demonstrates', body: 'Full-stack delivery of a real client app — a cross-platform mobile front end and an ASP.NET Core backend — in a professional Agile team.' },
    ],
  },
];
