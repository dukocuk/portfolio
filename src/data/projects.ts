// ============================================================
// FEATURED PROJECTS / CASE STUDIES. Localized: Danish (default) + English.
// No code/repo/demo links per request.
// id / icon / image / tech are neutral and identical across locales;
// title / type / summary / imageAlt / sections are translated.
// ============================================================

import type { Lang } from '../i18n/config';

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
  image: null | string;
  imageAlt: string;
  sections: CaseSection[];
};

const da: Project[] = [
  {
    id: 'vild-pluk',
    title: 'Vild Pluk — kort over vilde frugter til sankning i Danmark',
    type: 'Personligt projekt · Full-Stack · Mobil · GraphQL',
    icon: 'fullstack',
    summary:
      'En fællesskabsdrevet sanke-app til Danmark — en Flutter-mobilapp understøttet af et GraphQL-API med geospatial søgning, realtids-fællesskabsfunktioner og gamification.',
    image: null,
    imageAlt: 'Placeholder-mockup af Vild Pluk-sankekortet, der viser frugtsteder i hele Danmark',
    tech: ['Flutter', 'Dart', 'Riverpod', 'GraphQL', 'Node.js', 'TypeScript', 'Apollo Server', 'PostgreSQL', 'PostGIS', 'Prisma'],
    sections: [
      { heading: 'Problem', body: 'I Danmark er retten til at sanke bred, men at vide, hvor vilde frugter faktisk gror, er en anden sag. Den viden lever i folks hoveder, private notesbøger og spredte Facebook-grupper — uformel, let at miste og sjældent knyttet til en præcis placering. Et sted, én person finder om efteråret, er glemt næste sæson, og nytilkomne har intet pålideligt udgangspunkt og ingen fælles, kortbaseret måde at opdage steder i nærheden, se hvad der er i sæson eller bidrage med egne fund.' },
      { heading: 'Mål', body: 'Byg en mobilapp, der lader et fællesskab kortlægge, opdage og diskutere steder til sankning af vilde frugter, med placeringsbaseret søgning og incitamenter til at bidrage.' },
      { heading: 'Teknisk tilgang', body: [
        'Byggede en cross-platform Flutter-app (Riverpod-state management, GoRouter-navigation) med et interaktivt OpenStreetMap-kort og offline tile-caching.',
        'Designede og implementerede et GraphQL-API i Node.js/TypeScript (Apollo Server + Express) over PostgreSQL med PostGIS-udvidelsen via Prisma.',
        'Implementerede geospatiale “steder i nærheden”-forespørgsler med PostGIS ST_DWithin og et spatialt indeks til radius-søgning.',
        'Tilføjede JWT-autentificering (email/password + Google OAuth) og billedupload til stedfotos.',
      ] },
      { heading: 'Min rolle', body: 'Eneudvikler — designede og byggede hele stakken: Flutter-klienten, GraphQL-backenden, databaseskemaet, autentificeringen og deployment.' },
      { heading: 'Funktioner', body: [
        'Interaktivt kort over sankesteder med tilføj/opdag, favoritter og OSRM turn-by-turn-ruteplanlægning.',
        'Realtidskommentarer, statusopdateringer og upvotes på steder.',
        'Gamification: et pointsystem, syv niveauer og et sæt achievement-badges med en leaderboard.',
        'Offline kort-caching og lyst/mørkt tema.',
      ] },
      { heading: 'Teknologier & metoder', body: 'Flutter, Dart, Riverpod, GoRouter, flutter_map/OpenStreetMap; Node.js, TypeScript, Apollo GraphQL, Express, Prisma, PostgreSQL + PostGIS, JWT/OAuth-autentificering, Docker til lokal Postgres.' },
      { heading: 'Udfordringer', body: 'At modellere og forespørge geospatiale data effektivt med PostGIS, holde kortet brugbart offline og designe et gamification-system, der belønner ægte fællesskabsbidrag.' },
      { heading: 'Resultat', body: 'En fuldt fungerende GraphQL-backend og en feature-komplet Flutter-app, der dækker kortlægning, fællesskabsfunktioner og gamification.' },
      { heading: 'Hvad det demonstrerer', body: 'End-to-end solo-produktlevering — mobil frontend, GraphQL-backend, geospatiale data, autentificering og gamification — leveret som ét sammenhængende system.' },
    ],
  },
  {
    id: 'budget-tracker',
    title: 'Budget Tracker — offline-first budgettering med cloud-synkronisering',
    type: 'Personligt projekt · Full-Stack · Offline-First · React',
    icon: 'fullstack',
    summary:
      'En budget-app til at styre faste udgifter i DKK — offline-first med en PostgreSQL-database, der kører i browseren, automatisk Google Drive-synkronisering på tværs af enheder og budgetstyring over flere år.',
    image: null,
    imageAlt: 'Placeholder-mockup af Budget Tracker-dashboardet med udgiftsdiagrammer og årsbudgetter',
    tech: ['React', 'TypeScript', 'Vite', 'PGlite', 'PostgreSQL', 'Google Drive API', 'OAuth 2.0', 'Recharts', 'Vitest'],
    sections: [
      { heading: 'Problem', body: 'At holde styr på faste udgifter over flere år er besværligt i regneark, og de fleste budgetværktøjer kræver konstant netforbindelse og gemmer data på tredjepartsservere.' },
      { heading: 'Mål', body: 'Byg en budget-app, der fungerer helt offline, holder data under brugerens kontrol og alligevel synkroniserer problemfrit på tværs af enheder.' },
      { heading: 'Teknisk tilgang', body: [
        'Byggede en offline-first-arkitektur med PGlite — en fuld PostgreSQL-database, der kører i browseren — til øjeblikkelige læsninger og skrivninger uden ventetid.',
        'Implementerede cloud-synkronisering til en enkelt JSON-fil i brugerens eget Google Drive, debounced efter ændringer og pollet på tværs af enheder, med en last-write-wins-konfliktstrategi.',
        'Tilføjede Google OAuth 2.0-login, så hver brugers data holdes isoleret i deres eget Drive.',
        'Designede et budgetperiodesystem over flere år med automatisk saldooverførsel, arkivering og sammenligning år for år.',
      ] },
      { heading: 'Min rolle', body: 'Eneudvikler — designede og byggede hele stakken: React-klienten, det offline databaselag, Google Drive-synkroniseringsmotoren, autentificeringen og testsuiten.' },
      { heading: 'Funktioner', body: [
        'Budgetter over flere år med saldooverførsel, arkiverede skrivebeskyttede år og årssammenligning.',
        'Interaktive cirkel-, søjle- og kurvediagrammer; genbrugelige budgetskabeloner; søgning og filtrering.',
        'CSV-import/-eksport med validering og fuld fortryd/gentag med tastaturgenveje.',
        'Offline-first-drift med automatisk Google Drive-synkronisering; fuldt lokaliseret dansk brugerflade.',
      ] },
      { heading: 'Teknologier & metoder', body: 'React, TypeScript, Vite; PGlite (PostgreSQL i browseren); Google Drive API og OAuth 2.0 til synkronisering og autentificering; Recharts til visualisering; Vitest og Testing Library til en testsuite på 595+ tests.' },
      { heading: 'Udfordringer', body: 'At forene offline-ændringer på tværs af enheder med en enkel, forudsigelig synkroniseringsmodel og holde browser-databasen performant, mens tilstanden bevares på tværs af sessioner.' },
      { heading: 'Resultat', body: 'En feature-komplet, veltestet budget-app (595+ beståede tests), der dækker offline-lagring, cloud-synkronisering og budgettering over flere år.' },
      { heading: 'Hvad det demonstrerer', body: 'Offline-first produkttænkning og end-to-end-levering — local-first data, brugerejet cloud-synkronisering, autentificering og en disciplineret automatiseret testsuite.' },
    ],
  },
  {
    id: 'thermal-anomaly',
    title: 'Anomalidetektion i termiske overvågningsvideoer — syntetiske data til forebyggelse af drukneulykker',
    type: 'MSc-speciale · Computer Vision · Anomalidetektion',
    icon: 'vision',
    summary:
      'Et computer vision-forskningsprojekt, der detekterer drukne-relaterede anomalier i termisk overvågningsmateriale ved hjælp af convolutional autoencoders og CycleGAN-genererede syntetiske data for at forbedre anomalidetektion i scenarier fra Aalborg Havn.',
    image: null,
    imageAlt: 'Placeholder-visualisering af billeder fra termisk overvågningsvideo med fremhævede anomalier',
    tech: ['Convolutional Autoencoder', 'CycleGAN', 'Synthetic Data', 'Thermal Surveillance', 'Anomaly Detection', 'Computer Vision', 'ROC-AUC / PR-AUC Evaluation', 'Deep Learning'],
    sections: [
      { heading: 'Problem', body: [
        'Drukneulykker i Aalborg Havn er fortsat et alvorligt, uløst sikkerhedsproblem. Mellem 2001 og 2014 druknede 390 mennesker i Aalborg Havn, og ofre kan ofte ikke opdages eller reddes i tide.',
        'Termisk overvågning rummer potentiale, men virkelige anomalidata er begrænsede, vanskelige at indsamle og inkonsistente på tværs af lys-, temperatur- og miljøforhold.',
      ] },
      { heading: 'Mål', body: 'Byg og evaluér en anomalidetektions-tilgang til termiske overvågningsvideoer, der kan identificere unormale hændelser — såsom en person eller mannequin i vandet — samtidig med at det undersøges, om syntetiske og CycleGAN-genererede billeder kan forbedre modellens performance.' },
      { heading: 'Teknisk tilgang', body: [
        'Udviklede en convolutional autoencoder trænet til at rekonstruere normale termiske overvågningsbilleder og brugte rekonstruktionsfejlen til at detektere unormale scener.',
        'Skabte flere eksperimentelle konfigurationer med rigtige termiske billeder, syntetiske normale data og anomalidata, mannequin-anomalidata og CycleGAN-genererede style-transfer-billeder.',
        'Brugte CycleGAN til at overføre visuel stil mellem syntetiske og rigtige termiske domæner, med to generatorer og to diskriminatorer trænet med adversarial loss og forward/backward cycle-consistency loss.',
        'Evaluerede modellens performance på tværs af flere trænings- og testopsætninger med ROC-AUC, precision-recall-kurver, confusion matrices, catplots og sammenligninger af originale og rekonstruerede billeder.',
      ] },
      { heading: 'Min rolle', body: 'Specialeforsker og udvikler — designede anomalidetektions-pipelinen, klargjorde datasæt, trænede og evaluerede convolutional autoencoder-modeller, eksperimenterede med CycleGAN-genererede data og analyserede afvejningerne mellem rigtige, syntetiske og style-transfer-termiske billeder.' },
      { heading: 'Funktioner', body: [
        'Anomalidetektion i termisk video med rekonstruktionsbaseret deep learning.',
        'Flere datasæt-konfigurationer, der kombinerer rigtige normale data, syntetiske normale data, syntetiske anomalier, varme-temperatur-billeder, dagslysbilleder, mannequin-anomalier og CycleGAN-genererede billeder.',
        'CycleGAN style-transfer-eksperimenter til at generere mere realistiske syntetiske termiske billeder.',
        'Modelsammenligning med ROC-AUC, precision-recall-metrikker, confusion matrices og rekonstruktionsvisualiseringer.',
        'Fokuseret anvendelseskontekst: druknedetektion og havnesikkerhed.',
      ] },
      { heading: 'Teknologier & metoder', body: 'Convolutional autoencoder til anomalidetektion; CycleGAN til style transfer fra syntetiske til rigtige termiske billeder; adversarial learning; cycle-consistency loss; klassifikation baseret på rekonstruktionsfejl; ROC-AUC- og precision-recall-evaluering; termiske overvågningsdatasæt; eksperimenter med rigtige og syntetiske billeder.' },
      { heading: 'Udfordringer', body: [
        'Virkelige anomalidata var begrænsede, hvilket gjorde det svært at træne og evaluere modeller under realistiske forhold.',
        'Rent syntetiske træningsdata gav stærke resultater i kontrollerede opsætninger, men repræsenterede ikke fuldt ud den virkelige overvågnings kompleksitet.',
        'At kombinere syntetiske og rigtige data forbedrede ikke altid klassifikations-performancen, hvilket viste, at kvaliteten af de syntetiske data og domæne-alignment var afgørende.',
        'CycleGAN-genererede billeder krævede omhyggelig filtrering, da dårligt genererede billeder kunne reducere modellens pålidelighed i stedet for at forbedre den.',
      ] },
      { heading: 'Resultat', body: [
        'Flere modelkonfigurationer blev testet, hvor det stærkeste ROC-AUC-resultat nåede 0,9881, når træningen inkluderede rigtige normale data og dagslysbilleder.',
        'Eksperimenterne viste, at træning baseret på rigtige data generelt klarede sig bedre end simple kombinationer af rigtige og syntetiske data, mens CycleGAN havde potentiale, men krævede bedre billedkvalitet og mere omhyggeligt designede konfigurationer.',
      ] },
      { heading: 'Hvad det demonstrerer', body: 'Anvendt machine learning-forskning med et reelt sikkerhedsmål — anomalidetektion, termisk computer vision, generering af syntetiske data, modelevaluering og kritisk analyse af, hvornår syntetiske data hjælper eller skader performancen.' },
    ],
  },
  {
    id: 'iot-auth',
    title: 'Autentificering i cloud-baserede IoT-systemer — sikker adgang til enhedsdata',
    type: 'Bachelorprojekt · Sikkerhed · Cloud · IoT',
    icon: 'security',
    summary:
      'Et cloud-baseret IoT-autentificerings- og autorisationssystem designet til at forenkle adgangen til sensordata, centralisere enhedsstyring og give brugere sikker adgang til kun de data, de har tilladelse til at se.',
    image: null,
    imageAlt: 'Placeholder-diagram af cloud-baserede IoT-enheder, der forbinder gennem et autentificeringslag',
    tech: ['Node.js', 'OAuth 2.0', 'MongoDB', 'GraphQL', 'React', 'IoT', 'The Things Network', 'Authentication & Authorization'],
    sections: [
      { heading: 'Problem', body: [
        'IoT-platforme som The Things Network kan allerede håndtere enheder og data, men de kræver ofte teknisk viden fra brugeren.',
        'For ikke-tekniske brugere — såsom landmænd, der blot skal se fugtigheds- og temperaturdata fra flere enheder — kan det at oprette konti, styre enheder, håndtere applikationer og navigere direkte i TTN være overvældende.',
      ] },
      { heading: 'Mål', body: [
        'Byg en privat server, der autentificerer og autoriserer brugere og gør adgang til IoT-data enklere, mere sikker og lettere at administrere.',
        'Systemet skal lade almindelige brugere se kun deres egne enhedsdata, mens systemvedligeholdere kan administrere brugere, enheder og data på tværs af platformen.',
      ] },
      { heading: 'Teknisk tilgang', body: [
        'Designede et privat serverlag mellem brugere og The Things Network for at centralisere autentificering, autorisation og adgang til enhedsdata.',
        'Planlagde OAuth 2.0-autentificering, hvor brugere bytter gyldige credentials til access tokens, med forskellige tilladelsesniveauer for almindelige brugere og systemvedligeholdere.',
        'Foreslog Node.js som backend-runtime for at understøtte skalerbar server-side JavaScript-udvikling og reducere fremtidige performance-flaskehalse.',
        'Brugte MongoDB som en fleksibel NoSQL-database til at lagre dynamiske IoT-enhedsregistreringer, da forskellige enheder kan producere forskellige felter og datastrukturer.',
        'Designede GraphQL som API-laget for at reducere over-fetching og erstatte mange traditionelle REST-endpoints med ét enkelt søgbart endpoint.',
        'Planlagde en React-baseret webklient, så brugere kan logge ind og kun se de IoT-data, der er relevante for dem, gennem en enkel browser-grænseflade.',
      ] },
      { heading: 'Min rolle', body: 'Systemdesigner og udvikler — definerede arkitekturen for autentificering, autorisation, datalagring, API-design og den brugervendte webklient til en cloud-baseret IoT-dataplatform.' },
      { heading: 'Funktioner', body: [
        'Brugerautentificering via OAuth 2.0.',
        'Rollebaseret autorisation for almindelige brugere og systemvedligeholdere.',
        'Centraliseret adgang til IoT-data gennem en privat server.',
        'MongoDB-baseret lagring til fleksible enhedsregistreringer med dynamiske skemaer.',
        'GraphQL-endpoint til effektive klientforespørgsler og reduceret over-fetching.',
        'React-webklient til enkel login og datavisualisering.',
        'Mulig automatisering af TTN-enhedsregistrering og kobling mellem bruger og enhed.',
      ] },
      { heading: 'Teknologier & metoder', body: 'Node.js til backend-udvikling; OAuth 2.0 til sikker autentificering; MongoDB til NoSQL-datalagring; GraphQL til effektive API-forespørgsler; React til webklienten; The Things Network til IoT-enhedsforbindelse og sensordata.' },
      { heading: 'Udfordringer', body: [
        'Den største udfordring var at reducere den tekniske kompleksitet for slutbrugere, samtidig med at sikker adgangskontrol blev bevaret.',
        'En anden udfordring var at designe en datamodel, der var fleksibel nok til forskellige IoT-enheder, da sensorregistreringer ikke nødvendigvis følger ét fast skema.',
        'Systemet havde også brug for et renere alternativ til direkte TTN-adgang, så vedligeholdere kunne styre brugere, tilladelser og enhedsdata fra ét centraliseret lag.',
      ] },
      { heading: 'Resultat', body: [
        'Projektet foreslog en sikker og skalerbar arkitektur til cloud-baseret IoT-autentificering, hvor brugere kan tilgå sensordata gennem en forenklet webklient i stedet for at administrere enheder direkte i TTN.',
        'Designet forbedrer brugervenligheden for ikke-tekniske brugere og giver samtidig systemvedligeholdere stærkere kontrol over autentificering, autorisation og styring af enhedsdata.',
      ] },
      { heading: 'Hvad det demonstrerer', body: 'Backend-arkitektur, design af cloud-baserede IoT-systemer, autentificering og autorisation, API-design, NoSQL-datamodellering og brugercentreret tænkning til at forenkle tekniske platforme.' },
    ],
  },
  {
    id: 'mobile-xamarin',
    title: 'Cross-platform mobilapplikationsudvikling',
    type: 'Professionel erfaring · Accenture',
    icon: 'mobile',
    summary:
      'Videreudviklede en cross-platform app til kilometerregistrering for en kunde — en C#/Xamarin-mobilapp med et interaktivt kort og navigation, understøttet af en ASP.NET Core-backend, leveret i agile sprints.',
    image: null,
    imageAlt: 'Placeholder-mockup af en cross-platform mobilapplikation på telefon og tablet',
    tech: ['C#', 'Xamarin', 'ASP.NET Core', 'REST API', 'Maps & Navigation', 'Agile'],
    sections: [
      { heading: 'Kontekst', body: 'Arbejdede som applikationsudvikler hos Accenture og videreudviklede en cross-platform mobilapp for en kunde. Appen lod medarbejdere registrere de kilometer, de kørte under kundebesøg, og kombinerede et interaktivt kort med navigation i frontenden med en ASP.NET Core-backend.' },
      { heading: 'Ansvarsområder', body: [
        'Byggede mobile features med C# og Xamarin, herunder et interaktivt kort med navigation til registrering af kørte afstande.',
        'Udviklede og vedligeholdt ASP.NET Core-backenden og de REST-API’er, der drev appen.',
        'Fejlfandt problemer, optimerede performance og bidrog inden for agil levering.',
      ] },
      { heading: 'Teknisk stak', body: 'C# og Xamarin på klienten; en ASP.NET Core-backend, der eksponerer REST-API’er; interaktive kort med navigation; samt almindelige værktøjer til mobil fejlfinding og profilering.' },
      { heading: 'Samarbejde', body: 'Arbejdede sammen med design- og backend-teams om at afstemme UI-adfærd, datakontrakter og levering inden for sprint-cyklusser.' },
      { heading: 'Test & optimering', body: 'Fejlfinding, performance-optimering og test for at holde applikationerne stabile på tværs af enheder.' },
      { heading: 'Hvad det demonstrerer', body: 'Full-stack-levering af en rigtig kunde-app — en cross-platform mobil frontend og en ASP.NET Core-backend — i et professionelt agilt team.' },
    ],
  },
];

const en: Project[] = [
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
  // {
  //   id: 'enterprise-fullstack',
  //   title: 'Enterprise Full-Stack Development & System Integration',
  //   type: 'Professional Experience · Netcompany',
  //   icon: 'fullstack',
  //   summary:
  //     'Development and maintenance of full-stack solutions with secure access control, robust data handling, external integrations, testing, and scalable architecture.',
  //   image: null,
  //   imageAlt: 'Placeholder diagram of a full-stack enterprise application integrating external services',
  //   tech: ['TypeScript', 'React', 'Node.js', '.NET', 'REST API', 'SQL', 'Service Bus', 'Authentication'],
  //   sections: [
  //     { heading: 'Context', body: 'Worked as an IT consultant delivering and maintaining full-stack solutions in an enterprise setting, working across the frontend, backend, and integration layers. (No confidential client details included.)' },
  //     { heading: 'Responsibilities', body: [
  //       'Built and maintained frontend and backend features against shared, evolving requirements.',
  //       'Implemented authentication and access control and handled data robustly across the stack.',
  //       'Integrated external services and APIs, and contributed to a scalable, maintainable architecture.',
  //       'Wrote tests and documentation and carried out iterative improvements.',
  //     ] },
  //     { heading: 'Technical areas', body: 'Frontend and backend development, REST APIs, authentication and access control, data handling, service/message integration, automated testing, and documentation.' },
  //     { heading: 'Challenges', body: 'Keeping solutions stable and consistent while requirements evolved, and integrating reliably with external systems.' },
  //     { heading: 'Value delivered', body: 'Maintainable full-stack features with secure access handling and dependable integrations, supported by tests and documentation.' },
  //     { heading: 'What it demonstrates', body: 'End-to-end ownership in a professional enterprise environment — secure, integrated, and documented full-stack delivery.' },
  //   ],
  // },
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

export const projectsContent: Record<Lang, Project[]> = { da, en };
