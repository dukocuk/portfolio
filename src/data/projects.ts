// ============================================================
// FEATURED PROJECTS / CASE STUDIES. Localized: Danish (default) + English.
// No code/repo/demo links per request.
// id / icon / tech are neutral and identical across locales;
// title / type / summary / images / sections are translated.
// ============================================================

import type { Lang } from "../i18n/config";
import { getCaseStudyImages } from "../lib/caseStudyImages";

export type CaseSection = { heading: string; body: string | string[] };

export type ProjectIcon = "vision" | "security" | "fullstack" | "mobile";

export type ProjectImage = { src: string; thumb: string; alt: string };

export type Project = {
  id: string;
  title: string;
  type: string;
  // Domain icon shown in the card header strip.
  icon: ProjectIcon;
  summary: string;
  tech: string[];
  // Optional screenshots / mockups. When the project is featured (first card),
  // the first image renders as a 16:9 hero. For all imaged cards, the full
  // set appears as a thumbnail strip inside the expanded case-study panel.
  images?: ProjectImage[];
  sections: CaseSection[];
};

const da: Project[] = [
  {
    id: "vild-pluk",
    title: "Vild Pluk — kort over vilde frugter til sankning i Danmark",
    type: "Personligt projekt · Full-Stack · Mobil · GraphQL",
    icon: "fullstack",
    summary:
      "En fællesskabsdrevet sanke-app til Danmark — en Flutter-mobilapp understøttet af et GraphQL-API med geospatial søgning, realtids-fællesskabsfunktioner og gamification.",
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "GraphQL",
      "Node.js",
      "TypeScript",
      "Apollo Server",
      "PostgreSQL",
      "PostGIS",
      "Prisma",
    ],
    sections: [
      {
        heading: "Problem",
        body: "I Danmark er retten til at sanke bred, men at vide, hvor vilde frugter faktisk gror, er en anden sag. Den viden lever i folks hoveder, private notesbøger og spredte Facebook-grupper — uformel, let at miste og sjældent knyttet til en præcis placering. Et sted, én person finder om efteråret, er glemt næste sæson, og nytilkomne har intet pålideligt udgangspunkt og ingen fælles, kortbaseret måde at opdage steder i nærheden, se hvad der er i sæson eller bidrage med egne fund.",
      },
      {
        heading: "Mål",
        body: "Byg en mobilapp, der lader et fællesskab kortlægge, opdage og diskutere steder til sankning af vilde frugter, med placeringsbaseret søgning og incitamenter til at bidrage.",
      },
      {
        heading: "Teknisk tilgang",
        body: [
          "Byggede en cross-platform Flutter-app (Riverpod-state management, GoRouter-navigation) med et interaktivt OpenStreetMap-kort og offline tile-caching.",
          "Designede og implementerede et GraphQL-API i Node.js/TypeScript (Apollo Server + Express) over PostgreSQL med PostGIS-udvidelsen via Prisma.",
          "Implementerede geospatiale “steder i nærheden”-forespørgsler med PostGIS ST_DWithin og et spatialt indeks til radius-søgning.",
          "Tilføjede JWT-autentificering (email/password + Google OAuth) og billedupload til stedfotos.",
        ],
      },
      {
        heading: "Min rolle",
        body: "Eneudvikler — designede og byggede hele stakken: Flutter-klienten, GraphQL-backenden, databaseskemaet, autentificeringen og deployment.",
      },
      {
        heading: "Funktioner",
        body: [
          "Interaktivt kort over sankesteder med tilføj/opdag, favoritter og OSRM turn-by-turn-ruteplanlægning.",
          "Realtidskommentarer, statusopdateringer og upvotes på steder.",
          "Gamification: et pointsystem, syv niveauer og et sæt achievement-badges med en leaderboard.",
          "Offline kort-caching og lyst/mørkt tema.",
        ],
      },
      {
        heading: "Teknologier & metoder",
        body: "Flutter, Dart, Riverpod, GoRouter, flutter_map/OpenStreetMap; Node.js, TypeScript, Apollo GraphQL, Express, Prisma, PostgreSQL + PostGIS, JWT/OAuth-autentificering, Docker til lokal Postgres.",
      },
      {
        heading: "Udfordringer",
        body: "At modellere og forespørge geospatiale data effektivt med PostGIS, holde kortet brugbart offline og designe et gamification-system, der belønner ægte fællesskabsbidrag.",
      },
      {
        heading: "Resultat",
        body: "En fuldt fungerende GraphQL-backend og en feature-komplet Flutter-app, der dækker kortlægning, fællesskabsfunktioner og gamification.",
      },
      {
        heading: "Hvad det demonstrerer",
        body: "End-to-end solo-produktlevering — mobil frontend, GraphQL-backend, geospatiale data, autentificering og gamification — leveret som ét sammenhængende system.",
      },
    ],
  },
  {
    id: "tvchat-ai",
    title: "TVChat AI — AI-chat på Samsung Tizen-tv drevet af Claude API",
    type: "Personligt projekt · Full-Stack · WebSocket · BYOK",
    icon: "fullstack",
    summary:
      "Et privat projekt, der bringer Claude-baseret AI-chat ind på Samsung Tizen-tv'er via en BYOK-model (bring your own key) helt uden brugerkonti. Tv'et viser en QR-kode, telefonen scannes for at parre, og derefter fungerer telefonen som fjern-tastatur, mens tv'et streamer Claudes svar. Relayet videresender beskeder mellem tv og telefon uden nogensinde at se hverken API-nøgle eller chatindhold.",
    tech: [
      "React",
      "Tizen",
      "WebSocket",
      "Claude API",
      "Node.js",
      "Vite",
      "npm workspaces",
      "Chromium M47 / ES5",
      "core-js",
      "QR-parring",
      "BYOK",
      "localStorage",
      "Render.com",
      "Vercel",
    ],
    sections: [
      {
        heading: "Problem",
        body: "Moderne AI-chat lever på telefonen og i browseren, men sjældent på tv'et — og slet ikke på de Samsung Tizen-tv'er, der står i mange stuer. Den oplagte forhindring er input: at skrive en prompt med en tv-fjernbetjening er langsomt og frustrerende. Dertil kommer en gammel webplatform: ældre Tizen-tv'er kører en Chromium M47-browser fra 2015, hvor mange moderne web-API'er og CSS-funktioner ganske enkelt ikke findes. Endelig er der et privatlivshensyn: en AI-tv-app bør ikke kræve en konto eller sende brugerens API-nøgle og samtaler gennem en server, der kan læse dem med.",
      },
      {
        heading: "Mål",
        body: "Byg en AI-chat-applikation til Samsung Tizen-tv, hvor telefonen fungerer som tastatur, og hvor brugeren selv medbringer sin Claude API-nøgle (BYOK) helt uden konti. Løsningen skulle parre tv og telefon hurtigt via en QR-kode, levere streamede svar direkte fra Claude, og være designet, så ingen mellemliggende server fik adgang til hverken nøgle eller chatindhold. Samtidig skulle tv-appen kunne køre på den gamle Chromium M47-motor i Tizen 3.0.",
      },
      {
        heading: "Teknisk tilgang",
        body: [
          "Byggede projektet som et npm-workspaces-monorepo med tre selvstændige enheder: en tv-app (React-SPA pakket som en Tizen .wgt), en companion-app (React-SPA, der kører i telefonens browser og bruges til indtastning af API-nøgle og som chat-tastatur) og et relay (en lille, tilstandsløs Node.js ws-server).",
          "Designede dataflowet, så tv-appen kalder api.anthropic.com direkte fra browseren og streamer svaret, mens relayet kun udfører blind, rum-baseret videresendelse mellem tv og telefon — det læser kun rum og rolle på join-beskeden og ser aldrig API-nøgle eller chatindhold.",
          "Implementerede parring via et 8-tegns sessionstoken, som tv'et genererer og viser som QR-kode; telefonen åbner companion-URL'en, begge tilslutter samme rum i relayet, og relayet udsender peer_joined, når begge er til stede. Rummet er begrænset til to klienter, beskeder maks. 5 MB (til base64-billeder) og holdes i live med 30-sekunders ping.",
          "Definerede en UTF-8 JSON-baseret WebSocket-protokol med klare beskedtyper begge veje — bl.a. api_key, chat_message, image_message og input_preview fra telefon til tv samt context, key_accepted, key_rejected og message_queued fra tv til telefon.",
          "Håndterede streaming via ReadableStream, hvor det er tilgængeligt, med automatisk fallback til en almindelig, ikke-streamende JSON-forespørgsel på M47, og med en hård 60-sekunders timeout. Tilstanden i tv-appen er samlet i ét useReducer-store, og samtaler persisteres i localStorage.",
        ],
      },
      {
        heading: "Min rolle",
        body: "TVChat AI er udviklet som et personligt soloprojekt, hvor jeg stod for hele løsningen: arkitektur, dataflow, WebSocket-protokol, implementering af alle tre pakker, kompatibilitetsarbejdet mod den gamle Tizen-browser samt opsætning af build- og deploy-flowet.",
      },
      {
        heading: "Funktioner",
        body: [
          "QR-parring mellem tv og telefon via et engangs-sessionstoken og rum-baseret relay.",
          "Telefonen som fjern-tastatur, inkl. live-preview hvor hvert tastetryk opdaterer inputfeltet på tv'et.",
          "BYOK — brugeren indtaster sin egen Claude API-nøgle på telefonen; ingen konti.",
          "Streamede svar direkte fra Claude med fallback til ikke-streaming på ældre browsere.",
          "Billedbeskeder, hvor base64-kodede billeder sendes fra telefonen og analyseres af Claude.",
          "Modelvælger, så brugeren kan skifte mellem tilgængelige Claude-modeller.",
          "Samtalehistorik gemt lokalt, hvor en ny chat opretter en post, og gamle samtaler kan genindlæses.",
          "System-prompt-presets til at styre Claudes adfærd.",
          "Robust fejlhåndtering, så en ugyldig nøgle viser en fejlbesked frem for at få appen til at gå ned.",
        ],
      },
      {
        heading: "Teknologier & metoder",
        body: "React, Vite og npm-workspaces-monorepo, en Node.js ws-server som relay, WebSocket med en egendefineret JSON-protokol, Claude API kaldt direkte fra browseren (anthropic-dangerous-direct-browser-access), ReadableStream-streaming med feature-detection, localStorage-persistens og QR-baseret parring. Til den gamle Tizen-platform anvendtes @vitejs/plugin-legacy (chrome >= 47) plus terser og core-js-polyfills. Deployment er tænkt med relay på Render.com og companion på Vercel, mens tv-appen pakkes som en .wgt og sideloades. Arbejdsprocessen var struktureret i faser fra projektoprydning og lokal end-to-end-test til deploy af relay og companion, produktionsbuild og endelig Tizen-pakning.",
      },
      {
        heading: "Udfordringer",
        body: "Den største udfordring var Chromium M47-kompatibilitet i tv-appen. Koden måtte skrives i ES5-stil — var og function-expressions, Object.assign frem for object spread og uden optional chaining eller nullish coalescing — mens transpilering og polyfills blev overladt til plugin-legacy og core-js. CSS måtte holdes til Flexbox uden CSS Grid og uden CSS-custom-properties, med hårdkodede farver og størrelser. DOM-API'er, som core-js ikke polyfiller (fx AbortController og ReadableStream), kunne ikke antages til stede og måtte feature-detekteres og guardes — hvilket netop er årsagen til streaming-fallbacken. En anden, mere lumsk udfordring lå i værktøjskæden: VS Code Tizen-udvidelsen bygger den første mappe i workspacet og kræver config.xml i roden af den, så workspace-rækkefølgen måtte fastholdes, ellers gjorde \"Build Signed Package\" lydløst ingenting. Endelig giver Render-gratisniveauet en cold-start på relayet efter inaktivitet, hvilket den første WebSocket-forbindelse skal kunne tåle.",
      },
      {
        heading: "Test",
        body: "Løsningen blev verificeret gennem et struktureret lokalt end-to-end-testforløb af det fulde flow tv ↔ relay ↔ telefon på samme WiFi-netværk: parring via QR, indsendelse og accept af API-nøgle, afsendelse af chatbesked og svar fra Claude, live-preview ved tastetryk, vedhæftning og analyse af billede, modelskift, samtalehistorik samt fejltilstand ved ugyldig nøgle. Produktionsbuildet blev røgtestet via Vite preview for at bekræfte, at QR-koden indkoder den rigtige companion-URL. Et udestående testpunkt er validering på en fysisk Tizen 3.0-enhed (2017-tv), da kerneflowet indtil videre er afprøvet på en moderne Chromium-browser; netop dette er prioriteret højt, fordi det er den eneste måde at bekræfte, at det legacy-transpilerede bundle reelt kører på M47.",
      },
      {
        heading: "Resultat",
        body: "Resultatet blev en fungerende, deploybar AI-chat-løsning til Samsung Tizen-tv: et monorepo med tre selvstændige enheder, et privatlivsbevarende relay, der aldrig ser nøgle eller indhold, og et komplet parrings- og chatflow drevet af Claude API. Løsningen demonstrerer hele vejen fra QR-parring og BYOK-nøgleindtastning til streamede svar, billedanalyse, modelskift og lokal samtalehistorik — alt sammen kørende på en bevidst begrænset, ældre webplatform.",
      },
      {
        heading: "Hvad det demonstrerer",
        body: "End-to-end produktudvikling på en udfordrende, begrænset platform med fokus på legacy-browser-engineering (ES5/Chromium M47), monorepo-arkitektur, realtids-WebSocket-kommunikation og privatlivsbevidst design, hvor ingen server får adgang til brugerens nøgle eller data. Projektet viser evnen til at omsætte en konkret idé til en fungerende løsning, hvor både arkitektur, tekniske platformsbegrænsninger og reelle brugerflows er tænkt ind fra starten.",
      },
    ],
  },
  {
    id: "budget-tracker",
    title:
      "Budget Tracker — offline-first budgettering med cloud-synkronisering",
    type: "Personligt projekt · Full-Stack · Offline-First · React",
    icon: "fullstack",
    summary:
      "En budget-app til at styre faste udgifter i DKK — offline-first med en PostgreSQL-database, der kører i browseren, automatisk Google Drive-synkronisering på tværs af enheder og budgetstyring over flere år.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "PGlite",
      "PostgreSQL",
      "Google Drive API",
      "OAuth 2.0",
      "Recharts",
      "Vitest",
    ],
    sections: [
      {
        heading: "Problem",
        body: "At holde styr på faste udgifter over flere år er besværligt i regneark, og de fleste budgetværktøjer kræver konstant netforbindelse og gemmer data på tredjepartsservere.",
      },
      {
        heading: "Mål",
        body: "Byg en budget-app, der fungerer helt offline, holder data under brugerens kontrol og alligevel synkroniserer problemfrit på tværs af enheder.",
      },
      {
        heading: "Teknisk tilgang",
        body: [
          "Byggede en offline-first-arkitektur med PGlite — en fuld PostgreSQL-database, der kører i browseren — til øjeblikkelige læsninger og skrivninger uden ventetid.",
          "Implementerede cloud-synkronisering til en enkelt JSON-fil i brugerens eget Google Drive, debounced efter ændringer og pollet på tværs af enheder, med en last-write-wins-konfliktstrategi.",
          "Tilføjede Google OAuth 2.0-login, så hver brugers data holdes isoleret i deres eget Drive.",
          "Designede et budgetperiodesystem over flere år med automatisk saldooverførsel, arkivering og sammenligning år for år.",
        ],
      },
      {
        heading: "Min rolle",
        body: "Eneudvikler — designede og byggede hele stakken: React-klienten, det offline databaselag, Google Drive-synkroniseringsmotoren, autentificeringen og testsuiten.",
      },
      {
        heading: "Funktioner",
        body: [
          "Budgetter over flere år med saldooverførsel, arkiverede skrivebeskyttede år og årssammenligning.",
          "Interaktive cirkel-, søjle- og kurvediagrammer; genbrugelige budgetskabeloner; søgning og filtrering.",
          "CSV-import/-eksport med validering og fuld fortryd/gentag med tastaturgenveje.",
          "Offline-first-drift med automatisk Google Drive-synkronisering; fuldt lokaliseret dansk brugerflade.",
        ],
      },
      {
        heading: "Teknologier & metoder",
        body: "React, TypeScript, Vite; PGlite (PostgreSQL i browseren); Google Drive API og OAuth 2.0 til synkronisering og autentificering; Recharts til visualisering; Vitest og Testing Library til en testsuite på 595+ tests.",
      },
      {
        heading: "Udfordringer",
        body: "At forene offline-ændringer på tværs af enheder med en enkel, forudsigelig synkroniseringsmodel og holde browser-databasen performant, mens tilstanden bevares på tværs af sessioner.",
      },
      {
        heading: "Resultat",
        body: "En feature-komplet, veltestet budget-app (595+ beståede tests), der dækker offline-lagring, cloud-synkronisering og budgettering over flere år.",
      },
      {
        heading: "Hvad det demonstrerer",
        body: "Offline-first produkttænkning og end-to-end-levering — local-first data, brugerejet cloud-synkronisering, autentificering og en disciplineret automatiseret testsuite.",
      },
    ],
  },
  {
    id: "thermal-anomaly",
    title:
      "Anomalidetektion i termiske overvågningsvideoer — syntetiske data til forebyggelse af drukneulykker",
    type: "MSc-speciale · Computer Vision · Anomalidetektion",
    icon: "vision",
    summary:
      "Et computer vision-forskningsprojekt, der detekterer drukne-relaterede anomalier i termisk overvågningsmateriale ved hjælp af convolutional autoencoders og CycleGAN-genererede syntetiske data for at forbedre anomalidetektion i scenarier fra Aalborg Havn.",
    tech: [
      "Convolutional Autoencoder",
      "CycleGAN",
      "Synthetic Data",
      "Thermal Surveillance",
      "Anomaly Detection",
      "Computer Vision",
      "ROC-AUC / PR-AUC Evaluation",
      "Deep Learning",
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Drukneulykker i Aalborg Havn er fortsat et alvorligt, uløst sikkerhedsproblem. Mellem 2001 og 2014 druknede 390 mennesker i Aalborg Havn, og ofre kan ofte ikke opdages eller reddes i tide.",
          "Termisk overvågning rummer potentiale, men virkelige anomalidata er begrænsede, vanskelige at indsamle og inkonsistente på tværs af lys-, temperatur- og miljøforhold.",
        ],
      },
      {
        heading: "Mål",
        body: "Byg og evaluér en anomalidetektions-tilgang til termiske overvågningsvideoer, der kan identificere unormale hændelser — såsom en person eller mannequin i vandet — samtidig med at det undersøges, om syntetiske og CycleGAN-genererede billeder kan forbedre modellens performance.",
      },
      {
        heading: "Teknisk tilgang",
        body: [
          "Udviklede en convolutional autoencoder trænet til at rekonstruere normale termiske overvågningsbilleder og brugte rekonstruktionsfejlen til at detektere unormale scener.",
          "Skabte flere eksperimentelle konfigurationer med rigtige termiske billeder, syntetiske normale data og anomalidata, mannequin-anomalidata og CycleGAN-genererede style-transfer-billeder.",
          "Brugte CycleGAN til at overføre visuel stil mellem syntetiske og rigtige termiske domæner, med to generatorer og to diskriminatorer trænet med adversarial loss og forward/backward cycle-consistency loss.",
          "Evaluerede modellens performance på tværs af flere trænings- og testopsætninger med ROC-AUC, precision-recall-kurver, confusion matrices, catplots og sammenligninger af originale og rekonstruerede billeder.",
        ],
      },
      {
        heading: "Min rolle",
        body: "Specialeforsker og udvikler — designede anomalidetektions-pipelinen, klargjorde datasæt, trænede og evaluerede convolutional autoencoder-modeller, eksperimenterede med CycleGAN-genererede data og analyserede afvejningerne mellem rigtige, syntetiske og style-transfer-termiske billeder.",
      },
      {
        heading: "Funktioner",
        body: [
          "Anomalidetektion i termisk video med rekonstruktionsbaseret deep learning.",
          "Flere datasæt-konfigurationer, der kombinerer rigtige normale data, syntetiske normale data, syntetiske anomalier, varme-temperatur-billeder, dagslysbilleder, mannequin-anomalier og CycleGAN-genererede billeder.",
          "CycleGAN style-transfer-eksperimenter til at generere mere realistiske syntetiske termiske billeder.",
          "Modelsammenligning med ROC-AUC, precision-recall-metrikker, confusion matrices og rekonstruktionsvisualiseringer.",
          "Fokuseret anvendelseskontekst: druknedetektion og havnesikkerhed.",
        ],
      },
      {
        heading: "Teknologier & metoder",
        body: "Convolutional autoencoder til anomalidetektion; CycleGAN til style transfer fra syntetiske til rigtige termiske billeder; adversarial learning; cycle-consistency loss; klassifikation baseret på rekonstruktionsfejl; ROC-AUC- og precision-recall-evaluering; termiske overvågningsdatasæt; eksperimenter med rigtige og syntetiske billeder.",
      },
      {
        heading: "Udfordringer",
        body: [
          "Virkelige anomalidata var begrænsede, hvilket gjorde det svært at træne og evaluere modeller under realistiske forhold.",
          "Rent syntetiske træningsdata gav stærke resultater i kontrollerede opsætninger, men repræsenterede ikke fuldt ud den virkelige overvågnings kompleksitet.",
          "At kombinere syntetiske og rigtige data forbedrede ikke altid klassifikations-performancen, hvilket viste, at kvaliteten af de syntetiske data og domæne-alignment var afgørende.",
          "CycleGAN-genererede billeder krævede omhyggelig filtrering, da dårligt genererede billeder kunne reducere modellens pålidelighed i stedet for at forbedre den.",
        ],
      },
      {
        heading: "Resultat",
        body: [
          "Flere modelkonfigurationer blev testet, hvor det stærkeste ROC-AUC-resultat nåede 0,9881, når træningen inkluderede rigtige normale data og dagslysbilleder.",
          "Eksperimenterne viste, at træning baseret på rigtige data generelt klarede sig bedre end simple kombinationer af rigtige og syntetiske data, mens CycleGAN havde potentiale, men krævede bedre billedkvalitet og mere omhyggeligt designede konfigurationer.",
        ],
      },
      {
        heading: "Hvad det demonstrerer",
        body: "Anvendt machine learning-forskning med et reelt sikkerhedsmål — anomalidetektion, termisk computer vision, generering af syntetiske data, modelevaluering og kritisk analyse af, hvornår syntetiske data hjælper eller skader performancen.",
      },
    ],
  },
  {
    id: "iot-auth",
    title:
      "Autentificering i cloud-baserede IoT-systemer — sikker adgang til enhedsdata",
    type: "Bachelorprojekt · Sikkerhed · Cloud · IoT",
    icon: "security",
    summary:
      "Et cloud-baseret IoT-autentificerings- og autorisationssystem designet til at forenkle adgangen til sensordata, centralisere enhedsstyring og give brugere sikker adgang til kun de data, de har tilladelse til at se.",
    tech: [
      "Node.js",
      "OAuth 2.0",
      "MongoDB",
      "GraphQL",
      "React",
      "IoT",
      "The Things Network",
      "Authentication & Authorization",
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "IoT-platforme som The Things Network kan allerede håndtere enheder og data, men de kræver ofte teknisk viden fra brugeren.",
          "For ikke-tekniske brugere — såsom landmænd, der blot skal se fugtigheds- og temperaturdata fra flere enheder — kan det at oprette konti, styre enheder, håndtere applikationer og navigere direkte i TTN være overvældende.",
        ],
      },
      {
        heading: "Mål",
        body: [
          "Byg en privat server, der autentificerer og autoriserer brugere og gør adgang til IoT-data enklere, mere sikker og lettere at administrere.",
          "Systemet skal lade almindelige brugere se kun deres egne enhedsdata, mens systemvedligeholdere kan administrere brugere, enheder og data på tværs af platformen.",
        ],
      },
      {
        heading: "Teknisk tilgang",
        body: [
          "Designede et privat serverlag mellem brugere og The Things Network for at centralisere autentificering, autorisation og adgang til enhedsdata.",
          "Planlagde OAuth 2.0-autentificering, hvor brugere bytter gyldige credentials til access tokens, med forskellige tilladelsesniveauer for almindelige brugere og systemvedligeholdere.",
          "Foreslog Node.js som backend-runtime for at understøtte skalerbar server-side JavaScript-udvikling og reducere fremtidige performance-flaskehalse.",
          "Brugte MongoDB som en fleksibel NoSQL-database til at lagre dynamiske IoT-enhedsregistreringer, da forskellige enheder kan producere forskellige felter og datastrukturer.",
          "Designede GraphQL som API-laget for at reducere over-fetching og erstatte mange traditionelle REST-endpoints med ét enkelt søgbart endpoint.",
          "Planlagde en React-baseret webklient, så brugere kan logge ind og kun se de IoT-data, der er relevante for dem, gennem en enkel browser-grænseflade.",
        ],
      },
      {
        heading: "Min rolle",
        body: "Systemdesigner og udvikler — definerede arkitekturen for autentificering, autorisation, datalagring, API-design og den brugervendte webklient til en cloud-baseret IoT-dataplatform.",
      },
      {
        heading: "Funktioner",
        body: [
          "Brugerautentificering via OAuth 2.0.",
          "Rollebaseret autorisation for almindelige brugere og systemvedligeholdere.",
          "Centraliseret adgang til IoT-data gennem en privat server.",
          "MongoDB-baseret lagring til fleksible enhedsregistreringer med dynamiske skemaer.",
          "GraphQL-endpoint til effektive klientforespørgsler og reduceret over-fetching.",
          "React-webklient til enkel login og datavisualisering.",
          "Mulig automatisering af TTN-enhedsregistrering og kobling mellem bruger og enhed.",
        ],
      },
      {
        heading: "Teknologier & metoder",
        body: "Node.js til backend-udvikling; OAuth 2.0 til sikker autentificering; MongoDB til NoSQL-datalagring; GraphQL til effektive API-forespørgsler; React til webklienten; The Things Network til IoT-enhedsforbindelse og sensordata.",
      },
      {
        heading: "Udfordringer",
        body: [
          "Den største udfordring var at reducere den tekniske kompleksitet for slutbrugere, samtidig med at sikker adgangskontrol blev bevaret.",
          "En anden udfordring var at designe en datamodel, der var fleksibel nok til forskellige IoT-enheder, da sensorregistreringer ikke nødvendigvis følger ét fast skema.",
          "Systemet havde også brug for et renere alternativ til direkte TTN-adgang, så vedligeholdere kunne styre brugere, tilladelser og enhedsdata fra ét centraliseret lag.",
        ],
      },
      {
        heading: "Resultat",
        body: [
          "Projektet foreslog en sikker og skalerbar arkitektur til cloud-baseret IoT-autentificering, hvor brugere kan tilgå sensordata gennem en forenklet webklient i stedet for at administrere enheder direkte i TTN.",
          "Designet forbedrer brugervenligheden for ikke-tekniske brugere og giver samtidig systemvedligeholdere stærkere kontrol over autentificering, autorisation og styring af enhedsdata.",
        ],
      },
      {
        heading: "Hvad det demonstrerer",
        body: "Backend-arkitektur, design af cloud-baserede IoT-systemer, autentificering og autorisation, API-design, NoSQL-datamodellering og brugercentreret tænkning til at forenkle tekniske platforme.",
      },
    ],
  },
  {
    id: "mobile-xamarin",
    title: "Cross-platform mobilapplikationsudvikling",
    type: "Professionel erfaring · Accenture",
    icon: "mobile",
    summary:
      "Videreudviklede en cross-platform app til kilometerregistrering for en kunde — en C#/Xamarin-mobilapp med et interaktivt kort og navigation, understøttet af en ASP.NET Core-backend, leveret i agile sprints.",
    tech: [
      "C#",
      "Xamarin",
      "ASP.NET Core",
      "REST API",
      "Maps & Navigation",
      "Agile",
    ],
    sections: [
      {
        heading: "Kontekst",
        body: "Arbejdede som applikationsudvikler hos Accenture og videreudviklede en cross-platform mobilapp for en kunde. Appen lod medarbejdere registrere de kilometer, de kørte under kundebesøg, og kombinerede et interaktivt kort med navigation i frontenden med en ASP.NET Core-backend.",
      },
      {
        heading: "Ansvarsområder",
        body: [
          "Byggede mobile features med C# og Xamarin, herunder et interaktivt kort med navigation til registrering af kørte afstande.",
          "Udviklede og vedligeholdt ASP.NET Core-backenden og de REST-API’er, der drev appen.",
          "Fejlfandt problemer, optimerede performance og bidrog inden for agil levering.",
        ],
      },
      {
        heading: "Teknisk stak",
        body: "C# og Xamarin på klienten; en ASP.NET Core-backend, der eksponerer REST-API’er; interaktive kort med navigation; samt almindelige værktøjer til mobil fejlfinding og profilering.",
      },
      {
        heading: "Samarbejde",
        body: "Arbejdede sammen med design- og backend-teams om at afstemme UI-adfærd, datakontrakter og levering inden for sprint-cyklusser.",
      },
      {
        heading: "Test & optimering",
        body: "Fejlfinding, performance-optimering og test for at holde applikationerne stabile på tværs af enheder.",
      },
      {
        heading: "Hvad det demonstrerer",
        body: "Full-stack-levering af en rigtig kunde-app — en cross-platform mobil frontend og en ASP.NET Core-backend — i et professionelt agilt team.",
      },
    ],
  },
  {
    id: "copenhagen-industries",
    title: "Copenhagen Industries — Bluetooth-styring af rekvisitvåben til filmproduktion",
    type: "Personligt projekt · Android · Bluetooth · UX-design · Safety-Critical Interface",
    icon: "mobile",
    summary:
      "En Android-applikation udviklet til Copenhagen Industries, der gør det muligt at forbinde til, overvåge og styre rekvisitvåben på et filmsæt via Bluetooth. Appen gør det muligt for special effects- eller stuntkoordinatorer at armere og desarmere våben, overvåge batteri-, oxygen- og propanniveauer samt justere skydeindstillinger direkte fra en mobil enhed.",
    tech: ["Android", "Bluetooth", "Arduino", "Material Design", "XML layouts", "Lollipin", "Crashlytics", "Fabric.io", "Monkey testing", "User stories", "MVP", "UX-validering"],
    sections: [
      {
        heading: "Problem",
        body: [
          "Filmproduktioner bruger ofte blank ammunition eller visuelle effekter til våbenscener. Blanke skud kan stadig være farlige, mens visuelle effekter ofte er dyre og mindre realistiske.",
          "Copenhagen Industries udviklede derfor et alternativ: rekvisitvåben, der simulerer effekten af skud ved hjælp af ufarlige gasser.",
          "For at gøre løsningen praktisk på et filmsæt var der behov for en mobilapplikation, hvor en koordinator hurtigt kunne forbinde til våbnene, overvåge deres status og styre dem sikkert under produktionen.",
        ],
      },
      {
        heading: "Mål",
        body: [
          "Byg en Android-applikation, der gør det muligt at styre Copenhagen Industries’ rekvisitvåben via Bluetooth på en enkel, sikker og effektiv måde.",
          "Appen skulle understøtte forbindelse til våben, armere og desarmere dem, vise vigtige sensorværdier og justere skydetilstande uden at brugerne skulle kæmpe med teknologien midt i en produktion.",
        ],
      },
      {
        heading: "Teknisk tilgang",
        body: [
          "Udviklede en native Android-applikation med Bluetooth-kommunikation mellem telefonen og våbnet, repræsenteret af en Arduino i projektets prototype.",
          "Definerede en simpel tekstbaseret kommunikationsprotokol, hvor beskeder starter med “<” og slutter med “>”, og hvor kommandoer bruges til at hente statusinformation, ændre armeringstilstand, skifte skydetilstand, justere rate of fire og opdatere våbennavne.",
          "Implementerede en singleton DeviceController til håndtering af tilsluttede enheder, så WeaponControlFragment kunne fokusere på visning af data og brugerinteraktioner frem for al enhedslogik.",
          "Designede brugerfladen ud fra Material Design-principper, herunder navigation drawer, tydelige statusindikatorer og Android toast-feedback ved brugerhandlinger.",
          "Tilføjede PIN-baseret autentificering med Lollipin som et let sikkerhedslag samt understøttelse af skift mellem dansk og engelsk.",
        ],
      },
      {
        heading: "Min rolle",
        body: "Projektet blev udviklet som et gruppeprojekt, hvor jeg bidrog til applikationens funktionalitet, designbeslutninger, brugerflows og test. Mit arbejde omfattede Bluetooth-baseret våbenstyring, implementering af brugergrænsefladen, kundevalidering og praktisk test på Android-enheder.",
      },
      {
        heading: "Funktioner",
        body: [
          "Bluetooth-forbindelse mellem Android-enheder og rekvisitvåben.",
          "Oversigt over tilsluttede våben med mulighed for at vælge og styre et aktivt våben.",
          "Armering og desarmering af våben direkte fra applikationen.",
          "Live-overvågning af batteri-, oxygen- og propanniveauer.",
          "Skift mellem skydetilstande som single/semi, burst og full-auto.",
          "Justerbar rate of fire for at matche den ønskede filmscene.",
          "Mulighed for navngivning af våben til identifikation efter scene, optagelse eller lokation.",
          "PIN-beskyttet adgang.",
          "Sprogskift mellem dansk og engelsk.",
          "Hjælpeside med fejlfinding og kontaktinformation.",
        ],
      },
      {
        heading: "Teknologier & metoder",
        body: "Android, Bluetooth, Arduino, XML-layouts, Material Design, Lollipin til PIN-autentificering, Crashlytics og Fabric.io til crashrapportering samt manuelle brugerscenarietests og Monkey testing til stresstest af applikationen. UX-processen var baseret på user stories, MVP-afgrænsning, papirskitser, JustInMind- og Sketch-prototyper samt løbende feedback fra Copenhagen Industries.",
      },
      {
        heading: "Udfordringer",
        body: [
          "Den største udfordring var at designe en sikker og intuitiv brugerflade til en applikation, der styrer noget potentielt farligt.",
          "Især arm/disarm-funktionaliteten krævede nøje overvejelse, da brugerne aldrig måtte være i tvivl om, hvorvidt et våben var sikkert eller armeret.",
          "Teamet ændrede derfor designet fra handlingsbaserede labels som “ARM” og “DISARM” til tilstandsbaserede labels som “SAFE” og “ARMED”, så brugerfladen altid tydeligt viste våbnets aktuelle status.",
          "En anden teknisk udfordring var Bluetooth-kommunikationen, hvor applikationen skulle håndtere asynkrone beskeder modtaget fra Arduinoen.",
        ],
      },
      {
        heading: "Test",
        body: [
          "Applikationen blev manuelt testet på flere Android-enheder, herunder HTC One med Android 5.0.2, Samsung SM-J530F med Android 7.0 og Huawei P9 Lite med Android 7.0.",
          "Use cases som arm/disarm, Bluetooth-forbindelse, sensorovervågning, skydetilstande, rate of fire, våbenoversigt, navngivning, tilføjelse af våben, sprogskift og PIN-autentificering blev testet på tværs af enheder.",
          "Derudover blev der udført Monkey testing med 5000 touch-events for at stressteste applikationen og identificere fejl, særligt i Bluetooth-håndteringen i WeaponControlFragment.",
        ],
      },
      {
        heading: "Resultat",
        body: [
          "Resultatet blev en funktionel Android-applikation, der opfyldte projektets MVP og gav Copenhagen Industries en praktisk mobil løsning til styring og overvågning af rekvisitvåben.",
          "Applikationen kunne forbinde til våben via Bluetooth, vise kritiske sensorværdier, armere og desarmere våben, justere skydetilstande og understøtte praktiske workflows til filmproduktion.",
          "Projektet demonstrerede også en komplet produktudviklingsproces fra kundeinterviews og user stories til UX-design, implementering, test, crashrapportering og evaluering.",
        ],
      },
      {
        heading: "Hvad det demonstrerer",
        body: "End-to-end Android-produktudvikling med fokus på Bluetooth-kommunikation, sikkerhedsorienteret UX, brugercentreret design, praktisk kundesamarbejde og systematisk test på rigtige enheder. Projektet demonstrerer evnen til at omsætte et konkret industriproblem til en funktionel mobil løsning, hvor både teknisk implementering og virkelige brugerflows blev tænkt ind fra starten.",
      },
    ],
  },
{
  id: "smartgurlz",
  title: "SmartGurlz - Gør kodning mere attraktiv end joystick-leg",
  type: "Personligt projekt · UX-research · Læringsteknologi",
  icon: "mobile",
  summary: "Et børnecentreret redesignkoncept for SmartGurlz/Siggy-appen, hvor programmering bliver den primære og mest attraktive måde at lege med produktet på. Projektet kombinerer feltobservationer, interviewspørgsmål til børn og forældre, en forenklet brugerflade, en interaktiv kodningsvejledning og gamification, så børn kan lære kodning gennem legende interaktion med robotten.",
  tech: [
    "UX-research",
    "Feltstudie",
    "Børnecentreret design",
    "Læringsteknologi",
    "Interaktiv tutorial",
    "Gamification",
    "Scratch-lignende kodeblokke",
    "Mobilapp-prototyping",
    "Interface redesign",
    "Brugertest"
  ],
  sections: [
    {
      heading: "Problem",
      body: [
        "SmartGurlz er attraktivt for forældre, fordi produktet lover, at børn kan lære at kode, men den eksisterende appoplevelse fik programmering til at virke som en sekundær funktion i forhold til fri kørsel med joystick.",
        "Under test endte brugerne ofte med at ignorere kodningsdelen og kørte i stedet Siggy tilfældigt rundt med joystick eller brugte de mere simple værktøjer til at tegne en rute.",
        "Børnene havde svært ved appens hovedmenu, fordi valgmulighederne primært var baseret på symboler uden tydelige labels. Derfor måtte de gætte sig frem til, hvad de forskellige aktiviteter betød."
      ]
    },
    {
      heading: "Mål",
      body: "Redesigne appoplevelsen, så kodning bliver den mest tiltrækkende og forståelige måde at interagere med Siggy på, samtidig med at produktets legende appel for børn bevares."
    },
    {
      heading: "Researchtilgang",
      body: [
        "Observerede børn, der brugte Siggy under et feltstudie på Ballerup Bibliotek, for at forstå om de foretrak joystick-styring frem for programmering, og om brugerfladen var let at navigere i.",
        "Brugte interviewspørgsmål til børn om legevaner, samarbejde, legetøj, tabletbrug og yndlingsaktiviteter for at forstå, hvordan børn normalt leger og lærer.",
        "Brugte interviewspørgsmål til forældre om valg af legetøj, læringspotentiale, undervisningslegetøj, digitale spil, fysisk legetøj og om legetøj bør kunne undervise barnet selvstændigt."
      ]
    },
    {
      heading: "Løsning",
      body: [
        "Introducere en interaktiv kodningstutorial med stemme og animation, som guider nye brugere gennem en simpel første mission.",
        "Bruge farvekodede, Scratch-lignende kodeblokke, så børn straks oplever kodning som den centrale interaktion og ikke som en skjult avanceret funktion.",
        "Forenkle brugerfladen i tydelige sektioner med klare valgmuligheder som Play, Drive og Story Time, så forvirringen fra abstrakte menuikoner reduceres.",
        "Tilføje gamification gennem point, levels, belønninger, oplåselige kodeblokke og positiv feedback efter gennemførte kodningsudfordringer."
      ]
    },
    {
      heading: "Min rolle",
      body: "Projektbidrager i en UX- og innovationsproces. Jeg var med til at identificere misforholdet mellem produktets læringsløfte og brugernes faktiske adfærd, støtte feltresearch, analysere brugerbehov og udvikle et prototypekoncept med fokus på tutorialbaseret kodning, gamification og tydeligere navigation."
    },
    {
      heading: "Funktioner",
      body: [
        "Startskærm med en stor play-knap, der gør det let for børn at komme i gang med appen.",
        "Guidet onboarding-mission, hvor børn lærer kodning gennem direkte interaktion med Siggy.",
        "Drag-and-drop kodningsinterface med et tydeligt arbejdsområde og legende kommandonavne.",
        "Tredelt navigationsstruktur, der adskiller kodning, kørsel og historiebaserede aktiviteter.",
        "Belønningsskærm, der fejrer fremskridt og styrker barnets oplevelse af kodningssucces.",
        "Lydguidet oplevelse, der fungerer godt med earbuds."
      ]
    },
    {
      heading: "Designbeslutninger",
      body: [
        "Kodning placeres visuelt og funktionelt foran joystick-leg, så den læringsmæssige værdi bliver sværere at overse.",
        "Brugerfladen får tydeligere labels og færre tvetydige symboler, fordi børnene i testen havde svært ved at forstå menufunktioner ud fra ikoner alene.",
        "Tutorialen starter med en lille kodningsmission i stedet for en passiv forklaring, fordi børnene havde brug for støtte til at komme i gang med programmering.",
        "Belønninger og positiv feedback bruges til at få kodningsfremskridt til at føles lige så legende som fri kørsel."
      ]
    },
    {
      heading: "Udfordringer",
      body: [
        "Børnene søgte naturligt mod den nemmeste og mest umiddelbart legende interaktion, nemlig joystick-styring frem for programmering.",
        "Den oprindelige apps abstrakte ikonbaserede navigation skabte forvirring og mindskede sandsynligheden for, at børn selv ville finde kodningsaktiviteten.",
        "Programmeringsopgaverne skulle forenkles uden at fjerne følelsen af kreativitet og kontrol.",
        "Redesignet skulle fungere for både børn, der ønsker legende interaktion, og forældre, der lægger vægt på læringspotentiale."
      ]
    },
    {
      heading: "Resultat",
      body: [
        "Det foreslåede prototypekoncept gentænker appen omkring tutorialstyret kodning, enklere navigation og spilbaserede belønninger.",
        "Konceptet gør kodning synligt fra første interaktion og giver børn en guidet vej ind i programmering, før de falder tilbage til kun at bruge joystick."
      ]
    },
    {
      heading: "Hvad projektet viser",
      body: "UX-research og produktinnovation inden for læringsteknologi til børn. Projektet viser, hvordan feltobservationer og interviewindsigter kan omsættes til en prototype, der bedre forbinder legende interaktion med læringsmål."
    }
  ]
}

];

const en: Project[] = [
  {
    id: "vild-pluk",
    title: "Vild Pluk — Wild Fruit Foraging Map for Denmark",
    type: "Personal Project · Full-Stack · Mobile · GraphQL",
    icon: "fullstack",
    summary:
      "A community-driven foraging app for Denmark — a Flutter mobile app backed by a GraphQL API with geospatial search, real-time community features, and gamification.",
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "GraphQL",
      "Node.js",
      "TypeScript",
      "Apollo Server",
      "PostgreSQL",
      "PostGIS",
      "Prisma",
    ],
    sections: [
      {
        heading: "Problem",
        body: "In Denmark, the legal right to forage is broad, but knowing where wild fruit actually grows is another matter. That knowledge lives in people's heads, private notebooks, and scattered Facebook groups — informal, easily lost, and rarely tied to a precise location. A spot one person finds in autumn is forgotten by the next season, and newcomers have no reliable starting point, with no shared, map-based way to discover spots nearby, see what's in season, or contribute their own finds.",
      },
      {
        heading: "Goal",
        body: "Build a mobile app that lets a community map, discover, and discuss wild-fruit foraging spots, with location-based search and incentives to contribute.",
      },
      {
        heading: "Technical approach",
        body: [
          "Built a cross-platform Flutter app (Riverpod state management, GoRouter navigation) with an interactive OpenStreetMap map and offline tile caching.",
          "Designed and implemented a GraphQL API in Node.js/TypeScript (Apollo Server + Express) over PostgreSQL with the PostGIS extension via Prisma.",
          'Implemented geospatial "spots nearby" queries using PostGIS ST_DWithin with a spatial index for radius search.',
          "Added JWT authentication (email/password + Google OAuth) and image uploads for spot photos.",
        ],
      },
      {
        heading: "My role",
        body: "Sole developer — designed and built the full stack: the Flutter client, the GraphQL backend, the database schema, authentication, and deployment.",
      },
      {
        heading: "Features",
        body: [
          "Interactive map of foraging spots with add/discover, favorites, and OSRM turn-by-turn routing.",
          "Real-time comments, status updates, and upvotes on spots.",
          "Gamification: a points system, seven levels, and a set of achievement badges with a leaderboard.",
          "Offline map caching and light/dark themes.",
        ],
      },
      {
        heading: "Technologies & methods",
        body: "Flutter, Dart, Riverpod, GoRouter, flutter_map/OpenStreetMap; Node.js, TypeScript, Apollo GraphQL, Express, Prisma, PostgreSQL + PostGIS, JWT/OAuth auth, Docker for local Postgres.",
      },
      {
        heading: "Challenges",
        body: "Modelling and querying geospatial data efficiently with PostGIS, keeping the map usable offline, and designing a gamification system that rewards genuine community contribution.",
      },
      {
        heading: "Outcome",
        body: "A fully operational GraphQL backend and a feature-complete Flutter app covering mapping, community features, and gamification.",
      },
      {
        heading: "What it demonstrates",
        body: "End-to-end solo product delivery — mobile frontend, GraphQL backend, geospatial data, authentication, and gamification — shipped as a cohesive system.",
      },
    ],
  },
  {
    id: "tvchat-ai",
    title: "TVChat AI — AI Chat on Samsung Tizen TVs Powered by the Claude API",
    type: "Personal Project · Full-Stack · WebSocket · BYOK",
    icon: "fullstack",
    summary:
      "A private project that brings Claude-based AI chat to Samsung Tizen TVs via a BYOK model (bring your own key), with no user accounts at all. The TV displays a QR code, the phone scans it to pair, and the phone then acts as a remote keyboard while the TV streams Claude's replies. The relay forwards messages between TV and phone without ever seeing the API key or chat content.",
    tech: [
      "React",
      "Tizen",
      "WebSocket",
      "Claude API",
      "Node.js",
      "Vite",
      "npm workspaces",
      "Chromium M47 / ES5",
      "core-js",
      "QR Pairing",
      "BYOK",
      "localStorage",
      "Render.com",
      "Vercel",
    ],
    sections: [
      {
        heading: "Problem",
        body: "Modern AI chat lives on the phone and in the browser, but rarely on the TV — and especially not on the Samsung Tizen TVs sitting in many living rooms. The obvious obstacle is input: typing a prompt with a TV remote is slow and frustrating. On top of that comes an old web platform: older Tizen TVs run a Chromium M47 browser from 2015, where many modern web APIs and CSS features simply don't exist. Finally, there's a privacy concern: an AI TV app shouldn't require an account or send the user's API key and conversations through a server that could read them.",
      },
      {
        heading: "Goal",
        body: "Build an AI chat application for Samsung Tizen TVs where the phone acts as a keyboard and the user brings their own Claude API key (BYOK), with no accounts at all. The solution needed to pair TV and phone quickly via a QR code, deliver streamed responses directly from Claude, and be designed so that no intermediary server ever got access to the key or chat content. At the same time, the TV app had to run on the old Chromium M47 engine in Tizen 3.0.",
      },
      {
        heading: "Technical approach",
        body: [
          "Built the project as an npm-workspaces monorepo with three independent units: a TV app (a React SPA packaged as a Tizen .wgt), a companion app (a React SPA running in the phone's browser, used for entering the API key and as the chat keyboard), and a relay (a small, stateless Node.js ws server).",
          "Designed the data flow so the TV app calls api.anthropic.com directly from the browser and streams the response, while the relay only performs blind, room-based forwarding between TV and phone — it only reads the room and role from the join message and never sees the API key or chat content.",
          "Implemented pairing via an 8-character session token that the TV generates and displays as a QR code; the phone opens the companion URL, both join the same room on the relay, and the relay emits peer_joined once both are present. The room is limited to two clients, messages are capped at 5 MB (for base64 images), and kept alive with a 30-second ping.",
          "Defined a UTF-8 JSON-based WebSocket protocol with clear message types in both directions — including api_key, chat_message, image_message, and input_preview from phone to TV, and context, key_accepted, key_rejected, and message_queued from TV to phone.",
          "Handled streaming via ReadableStream where available, with automatic fallback to a plain, non-streaming JSON request on M47, and a hard 60-second timeout. The TV app's state is consolidated into a single useReducer store, and conversations are persisted to localStorage.",
        ],
      },
      {
        heading: "My role",
        body: "TVChat AI was developed as a personal solo project, where I owned the entire solution: architecture, data flow, WebSocket protocol, implementation of all three packages, the compatibility work against the old Tizen browser, and setting up the build and deploy flow.",
      },
      {
        heading: "Features",
        body: [
          "QR pairing between TV and phone via a one-time session token and room-based relay.",
          "The phone as a remote keyboard, including a live preview where every keystroke updates the input field on the TV.",
          "BYOK — the user enters their own Claude API key on the phone; no accounts.",
          "Streamed responses directly from Claude, with fallback to non-streaming on older browsers.",
          "Image messages, where base64-encoded images are sent from the phone and analyzed by Claude.",
          "Model picker, letting the user switch between available Claude models.",
          "Conversation history stored locally, where a new chat creates an entry and old conversations can be reloaded.",
          "System prompt presets to steer Claude's behavior.",
          "Robust error handling, so an invalid key shows an error message instead of crashing the app.",
        ],
      },
      {
        heading: "Technologies & methods",
        body: "React, Vite, and an npm-workspaces monorepo, a Node.js ws server as relay, WebSocket with a custom JSON protocol, the Claude API called directly from the browser (anthropic-dangerous-direct-browser-access), ReadableStream streaming with feature detection, localStorage persistence, and QR-based pairing. For the old Tizen platform, used @vitejs/plugin-legacy (chrome >= 47) plus terser and core-js polyfills. Deployment is planned with the relay on Render.com and the companion on Vercel, while the TV app is packaged as a .wgt and sideloaded. The workflow was structured in phases, from project cleanup and local end-to-end testing to deploying the relay and companion, the production build, and finally Tizen packaging.",
      },
      {
        heading: "Challenges",
        body: "The biggest challenge was Chromium M47 compatibility in the TV app. The code had to be written in ES5 style — var and function expressions, Object.assign instead of object spread, and no optional chaining or nullish coalescing — while transpilation and polyfills were left to plugin-legacy and core-js. CSS had to stick to Flexbox without CSS Grid and without CSS custom properties, with hardcoded colors and sizes. DOM APIs that core-js doesn't polyfill (e.g. AbortController and ReadableStream) couldn't be assumed present and had to be feature-detected and guarded — which is exactly why the streaming fallback exists. Another, more subtle challenge was in the toolchain: the VS Code Tizen extension builds the first folder in the workspace and requires config.xml at its root, so the workspace order had to be kept fixed, or \"Build Signed Package\" would silently do nothing. Finally, Render's free tier gives the relay a cold start after inactivity, which the first WebSocket connection has to tolerate.",
      },
      {
        heading: "Testing",
        body: "The solution was verified through a structured local end-to-end test of the full TV ↔ relay ↔ phone flow on the same WiFi network: pairing via QR, submitting and accepting the API key, sending a chat message and receiving Claude's response, live preview on keystrokes, attaching and analyzing an image, switching models, conversation history, and the error state for an invalid key. The production build was smoke-tested via Vite preview to confirm the QR code encodes the correct companion URL. One outstanding test point is validation on a physical Tizen 3.0 device (a 2017 TV), since the core flow has so far only been tested on a modern Chromium browser; this is a high priority, since it's the only way to confirm the legacy-transpiled bundle actually runs on M47.",
      },
      {
        heading: "Outcome",
        body: "The result is a working, deployable AI chat solution for Samsung Tizen TVs: a monorepo with three independent units, a privacy-preserving relay that never sees the key or content, and a complete pairing and chat flow powered by the Claude API. The solution demonstrates the full path from QR pairing and BYOK key entry to streamed responses, image analysis, model switching, and local conversation history — all running on a deliberately constrained, older web platform.",
      },
      {
        heading: "What it demonstrates",
        body: "End-to-end product development on a challenging, constrained platform, with a focus on legacy browser engineering (ES5/Chromium M47), monorepo architecture, real-time WebSocket communication, and privacy-conscious design where no server gets access to the user's key or data. The project shows the ability to turn a concrete idea into a working solution, where architecture, technical platform constraints, and real user flows were all considered from the start.",
      },
    ],
  },
  {
    id: "budget-tracker",
    title: "Budget Tracker — Offline-First Budgeting with Cloud Sync",
    type: "Personal Project · Full-Stack · Offline-First · React",
    icon: "fullstack",
    summary:
      "A budgeting app for managing fixed expenses in DKK — offline-first with a PostgreSQL database running in the browser, automatic Google Drive sync across devices, and multi-year budget management.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "PGlite",
      "PostgreSQL",
      "Google Drive API",
      "OAuth 2.0",
      "Recharts",
      "Vitest",
    ],
    sections: [
      {
        heading: "Problem",
        body: "Tracking fixed expenses across years is awkward in spreadsheets, and most budgeting tools require constant connectivity and store data on third-party servers.",
      },
      {
        heading: "Goal",
        body: "Build a budgeting app that works fully offline, keeps data under the user’s control, and still syncs seamlessly across devices.",
      },
      {
        heading: "Technical approach",
        body: [
          "Built an offline-first architecture with PGlite — a full PostgreSQL database running in the browser — for instant, zero-latency reads and writes.",
          "Implemented cloud sync to a single JSON file in the user’s own Google Drive, debounced after changes and polled across devices, with a last-write-wins conflict strategy.",
          "Added Google OAuth 2.0 login so each user’s data stays isolated in their own Drive.",
          "Designed a multi-year budget-period system with automatic balance carryover, archiving, and year-over-year comparison.",
        ],
      },
      {
        heading: "My role",
        body: "Sole developer — designed and built the full stack: the React client, the offline database layer, the Google Drive sync engine, authentication, and the test suite.",
      },
      {
        heading: "Features",
        body: [
          "Multi-year budgets with balance carryover, archived read-only years, and year comparison.",
          "Interactive pie, bar, and line charts; reusable budget templates; search and filtering.",
          "CSV import/export with validation, and full undo/redo with keyboard shortcuts.",
          "Offline-first operation with automatic Google Drive sync; fully localized Danish UI.",
        ],
      },
      {
        heading: "Technologies & methods",
        body: "React, TypeScript, Vite; PGlite (in-browser PostgreSQL); Google Drive API and OAuth 2.0 for sync and auth; Recharts for visualization; Vitest and Testing Library for a 595+ test suite.",
      },
      {
        heading: "Challenges",
        body: "Reconciling offline edits across devices with a simple, predictable sync model, and keeping the in-browser database performant while persisting state across sessions.",
      },
      {
        heading: "Outcome",
        body: "A feature-complete, well-tested budgeting app (595+ passing tests) covering offline storage, cloud sync, and multi-year budgeting.",
      },
      {
        heading: "What it demonstrates",
        body: "Offline-first product thinking and end-to-end delivery — local-first data, user-owned cloud sync, authentication, and a disciplined automated test suite.",
      },
    ],
  },
  {
    id: "thermal-anomaly",
    title:
      "Anomaly Detection in Thermal Surveillance Videos — Synthetic Data for Drowning Prevention",
    type: "MSc Thesis · Computer Vision · Anomaly Detection",
    icon: "vision",
    summary:
      "A computer-vision research project detecting drowning-related anomalies in thermal surveillance footage, using convolutional autoencoders and CycleGAN-generated synthetic data to improve anomaly detection in Aalborg harbor scenarios.",
    tech: [
      "Convolutional Autoencoder",
      "CycleGAN",
      "Synthetic Data",
      "Thermal Surveillance",
      "Anomaly Detection",
      "Computer Vision",
      "ROC-AUC / PR-AUC Evaluation",
      "Deep Learning",
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Drowning incidents in Aalborg harbor remain a serious unresolved safety issue. Between 2001 and 2014, 390 people drowned in Aalborg harbor, and victims often cannot be detected or rescued in time.",
          "Thermal surveillance offers potential, but real-world anomaly data is limited, difficult to collect, and inconsistent across lighting, temperature, and environmental conditions.",
        ],
      },
      {
        heading: "Goal",
        body: "Build and evaluate an anomaly-detection approach for thermal surveillance videos that can identify abnormal events, such as a person or mannequin in the water, while exploring whether synthetic and CycleGAN-generated images can improve model performance.",
      },
      {
        heading: "Technical approach",
        body: [
          "Developed a convolutional autoencoder trained to reconstruct normal thermal surveillance frames, using reconstruction error to detect anomalous scenes.",
          "Created multiple experimental configurations using real thermal images, synthetic normal and anomaly data, mannequin anomaly data, and CycleGAN-generated style-transfer images.",
          "Used CycleGAN to transfer visual style between synthetic and real thermal domains, with two generators and two discriminators trained using adversarial loss and forward/backward cycle-consistency loss.",
          "Evaluated model performance across several training and testing setups using ROC-AUC, precision-recall curves, confusion matrices, catplots, and original-versus-reconstructed image comparisons.",
        ],
      },
      {
        heading: "My role",
        body: "Thesis researcher and developer — designed the anomaly-detection pipeline, prepared datasets, trained and evaluated convolutional autoencoder models, experimented with CycleGAN-generated data, and analyzed the tradeoffs between real, synthetic, and style-transferred thermal images.",
      },
      {
        heading: "Features",
        body: [
          "Thermal-video anomaly detection using reconstruction-based deep learning.",
          "Multiple dataset configurations combining real normal data, synthetic normal data, synthetic anomalies, hot-temperature images, daylight images, mannequin anomalies, and CycleGAN-generated images.",
          "CycleGAN style-transfer experiments for generating more realistic synthetic thermal images.",
          "Model comparison using ROC-AUC, precision-recall metrics, confusion matrices, and reconstruction visualizations.",
          "Focused application context: drowning detection and harbor safety.",
        ],
      },
      {
        heading: "Technologies & methods",
        body: "Convolutional autoencoder for anomaly detection; CycleGAN for synthetic-to-real thermal image style transfer; adversarial learning; cycle-consistency loss; reconstruction-error-based classification; ROC-AUC and precision-recall evaluation; thermal surveillance datasets; real and synthetic image experiments.",
      },
      {
        heading: "Challenges",
        body: [
          "Real anomaly data was limited, making it difficult to train and evaluate models under realistic conditions.",
          "Purely synthetic training data produced strong results in controlled settings but did not fully represent real-world surveillance complexity.",
          "Combining synthetic and real data did not always improve classification performance, showing that synthetic data quality and domain alignment were critical.",
          "CycleGAN-generated images required careful filtering, since poorly generated images could reduce model reliability instead of improving it.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Several model configurations were tested, with the strongest ROC-AUC result reaching 0.9881 when training included real normal data and daylight images.",
          "The experiments showed that real-data-based training generally outperformed simple combinations of real and synthetic data, while CycleGAN had potential but required better image quality and more carefully designed configurations.",
        ],
      },
      {
        heading: "What it demonstrates",
        body: "Applied machine-learning research with a real-world safety objective — anomaly detection, thermal computer vision, synthetic data generation, model evaluation, and critical analysis of when synthetic data helps or harms performance.",
      },
    ],
  },
  {
    id: "iot-auth",
    title:
      "Authentication in Cloud-Based IoT Systems — Secure Access for Device Data",
    type: "Bachelor Project · Security · Cloud · IoT",
    icon: "security",
    summary:
      "A cloud-based IoT authentication and authorization system designed to simplify access to sensor data, centralize device management, and give users secure access to only the data they are permitted to view.",
    tech: [
      "Node.js",
      "OAuth 2.0",
      "MongoDB",
      "GraphQL",
      "React",
      "IoT",
      "The Things Network",
      "Authentication & Authorization",
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "IoT platforms like The Things Network can already manage devices and data, but they often require technical knowledge from the user.",
          "For non-technical users, such as farmers who only need to view humidity and temperature data from multiple devices, creating accounts, managing devices, handling applications, and navigating TTN directly can be overwhelming.",
        ],
      },
      {
        heading: "Goal",
        body: [
          "Build a private server that authenticates and authorizes users, making IoT data access simpler, more secure, and easier to manage.",
          "The system should allow regular users to see only their own device data, while system maintainers can manage users, devices, and data across the platform.",
        ],
      },
      {
        heading: "Technical approach",
        body: [
          "Designed a private server layer between users and The Things Network to centralize authentication, authorization, and device-data access.",
          "Planned OAuth 2.0 authentication where users exchange valid credentials for access tokens, with different permission levels for regular users and system maintainers.",
          "Proposed Node.js as the backend runtime to support scalable server-side JavaScript development and reduce future performance bottlenecks.",
          "Used MongoDB as a flexible NoSQL database for storing dynamic IoT device records, since different devices may produce different fields and data structures.",
          "Designed GraphQL as the API layer to reduce over-fetching and replace many traditional REST endpoints with a single queryable endpoint.",
          "Planned a React-based web client so users can log in and view only the IoT data relevant to them through a simple browser interface.",
        ],
      },
      {
        heading: "My role",
        body: "System designer and developer — defined the architecture for authentication, authorization, data storage, API design, and the user-facing web client for a cloud-based IoT data platform.",
      },
      {
        heading: "Features",
        body: [
          "User authentication through OAuth 2.0.",
          "Role-based authorization for regular users and system maintainers.",
          "Centralized IoT data access through a private server.",
          "MongoDB-based storage for flexible device records with dynamic schemas.",
          "GraphQL endpoint for efficient client queries and reduced over-fetching.",
          "React web client for simple login and data visualization.",
          "Potential automation of TTN device registration and user-device mapping.",
        ],
      },
      {
        heading: "Technologies & methods",
        body: "Node.js for backend development; OAuth 2.0 for secure authentication; MongoDB for NoSQL data storage; GraphQL for efficient API queries; React for the web client; The Things Network for IoT device connectivity and sensor data.",
      },
      {
        heading: "Challenges",
        body: [
          "The main challenge was reducing technical complexity for end users while still preserving secure access control.",
          "Another challenge was designing a data model flexible enough for different IoT devices, since sensor records may not follow one fixed schema.",
          "The system also needed a cleaner alternative to direct TTN access, so maintainers could control users, permissions, and device data from one centralized layer.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The project proposed a secure and scalable architecture for cloud-based IoT authentication, where users can access sensor data through a simplified web client instead of managing devices directly in TTN.",
          "The design improves usability for non-technical users while giving system maintainers stronger control over authentication, authorization, and device-data management.",
        ],
      },
      {
        heading: "What it demonstrates",
        body: "Backend architecture, cloud-based IoT system design, authentication and authorization, API design, NoSQL data modeling, and user-centered thinking for simplifying technical platforms.",
      },
    ],
  },
  {
    id: "mobile-xamarin",
    title: "Cross-Platform Mobile Application Development",
    type: "Professional Experience · Accenture",
    icon: "mobile",
    summary:
      "Further developed a cross-platform mileage-tracking app for a client — a C#/Xamarin mobile app with an interactive map and navigation, backed by an ASP.NET Core backend, delivered in Agile sprints.",
    tech: [
      "C#",
      "Xamarin",
      "ASP.NET Core",
      "REST API",
      "Maps & Navigation",
      "Agile",
    ],
    sections: [
      {
        heading: "Context",
        body: "Worked as an application developer at Accenture, further developing a cross-platform mobile app for a client. The app let employees register the kilometres they drove during customer visits, combining an interactive map with navigation on the front end and an ASP.NET Core backend.",
      },
      {
        heading: "Responsibilities",
        body: [
          "Built mobile features with C# and Xamarin, including an interactive map with navigation for logging trip distances.",
          "Developed and maintained the ASP.NET Core backend and the REST APIs powering the app.",
          "Debugged issues, optimized performance, and contributed within Agile delivery.",
        ],
      },
      {
        heading: "Technical stack",
        body: "C# and Xamarin on the client; an ASP.NET Core backend exposing REST APIs; interactive maps with navigation; plus standard mobile debugging and profiling tools.",
      },
      {
        heading: "Collaboration",
        body: "Worked with design and backend teams to align UI behaviour, data contracts, and delivery within sprint cycles.",
      },
      {
        heading: "Testing & optimization",
        body: "Debugging, performance optimization, and testing to keep the applications stable across devices.",
      },
      {
        heading: "What it demonstrates",
        body: "Full-stack delivery of a real client app — a cross-platform mobile front end and an ASP.NET Core backend — in a professional Agile team.",
      },
    ],
  },
  {
    id: "copenhagen-industries",
    title: "Copenhagen Industries — Bluetooth Control for Film Prop Weapons",
    type: "Personal Project · Android · Bluetooth · UX Design · Safety-Critical Interface",
    icon: "mobile",
    summary:
      "An Android application developed for Copenhagen Industries that allows users to connect to, monitor, and control prop weapons on a film set via Bluetooth. The app enables special effects or stunt coordinators to arm and disarm weapons, monitor battery, oxygen, and propane levels, and adjust firing settings directly from a mobile device.",
    tech: [
      "Android",
      "Bluetooth",
      "Arduino",
      "Material Design",
      "XML layouts",
      "Lollipin",
      "Crashlytics",
      "Fabric.io",
      "Monkey testing",
      "User stories",
      "MVP",
      "UX validation",
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Film productions often rely on blank ammunition or visual effects for weapon scenes. Blank rounds can still be dangerous, while visual effects are often expensive and less realistic.",
          "Copenhagen Industries was therefore developing an alternative: prop weapons that simulate the effect of gunfire using harmless gases.",
          "To make the solution practical on a film set, there was a need for a mobile application where a coordinator could quickly connect to weapons, monitor their status, and control them safely during production.",
        ],
      },
      {
        heading: "Goal",
        body: [
          "Build an Android application that allows Copenhagen Industries’ prop weapons to be controlled via Bluetooth in a simple, safe, and efficient way.",
          "The app needed to support connecting to weapons, arming and disarming them, displaying important sensor values, and adjusting firing modes without forcing users to struggle with technology in the middle of a production.",
        ],
      },
      {
        heading: "Technical approach",
        body: [
          "Developed a native Android application with Bluetooth communication between the phone and the weapon, represented by an Arduino in the project prototype.",
          "Defined a simple text-based communication protocol where messages begin with “<” and end with “>”, using commands to retrieve status information, change arming state, switch firing modes, adjust rate of fire, and update weapon names.",
          "Implemented a singleton DeviceController responsible for managing connected devices, allowing WeaponControlFragment to focus on displaying data and handling interactions instead of managing all device logic.",
          "Designed the interface using Material Design principles, including a navigation drawer, clear status indicators, and Android toast feedback for user actions.",
          "Added PIN-based authentication using Lollipin to provide a lightweight security layer, along with support for switching between Danish and English.",
        ],
      },
      {
        heading: "My role",
        body: "The project was developed as a group project where I contributed to application functionality, design decisions, user flows, and testing. My work included Bluetooth-based weapon control, user interface implementation, customer validation, and practical testing on Android devices.",
      },
      {
        heading: "Features",
        body: [
          "Bluetooth connection between Android devices and prop weapons.",
          "Overview of connected weapons with the ability to select and control an active weapon.",
          "Arming and disarming weapons directly from the application.",
          "Live monitoring of battery, oxygen, and propane levels.",
          "Switching between firing modes such as single/semi, burst, and full-auto.",
          "Adjustable rate of fire to match the desired film sequence.",
          "Weapon naming functionality for identifying weapons by scene, recording, or location.",
          "PIN-protected access.",
          "Language switching between Danish and English.",
          "Help page with troubleshooting and contact information.",
        ],
      },
      {
        heading: "Technologies & methods",
        body: "Android, Bluetooth, Arduino, XML layouts, Material Design, Lollipin for PIN authentication, Crashlytics and Fabric.io for crash reporting, as well as manual user scenario testing and Monkey testing for stress testing the application. The UX process was based on user stories, MVP scoping, paper sketches, JustInMind and Sketch prototypes, and continuous feedback from Copenhagen Industries.",
      },
      {
        heading: "Challenges",
        body: [
          "The biggest challenge was designing a safe and intuitive interface for an application controlling something potentially dangerous.",
          "The arm/disarm functionality in particular required careful consideration, since users could never be uncertain whether a weapon was safe or armed.",
          "The team therefore changed the design from action-based labels such as “ARM” and “DISARM” to state-based labels such as “SAFE” and “ARMED”, ensuring the interface always reflected the weapon’s current state clearly.",
          "Another technical challenge was Bluetooth communication, where the application needed to handle asynchronous messages received from the Arduino.",
        ],
      },
      {
        heading: "Testing",
        body: [
          "The application was manually tested on multiple Android devices, including HTC One running Android 5.0.2, Samsung SM-J530F running Android 7.0, and Huawei P9 Lite running Android 7.0.",
          "Use cases such as arming/disarming, Bluetooth connectivity, sensor monitoring, firing modes, rate of fire, weapon overview, naming, adding weapons, language switching, and PIN authentication were tested across devices.",
          "Additionally, Monkey testing with 5000 touch events was performed to stress test the application and identify issues, particularly in Bluetooth handling within WeaponControlFragment.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The result was a functional Android application that fulfilled the project MVP and provided Copenhagen Industries with a practical mobile solution for controlling and monitoring prop weapons.",
          "The application could connect to weapons via Bluetooth, display critical sensor values, arm and disarm weapons, adjust firing modes, and support practical workflows for film production.",
          "The project also demonstrated a complete product development process from customer interviews and user stories to UX design, implementation, testing, crash reporting, and evaluation.",
        ],
      },
      {
        heading: "What it demonstrates",
        body: "End-to-end Android product development with a focus on Bluetooth communication, safety-oriented UX, user-centered design, practical customer collaboration, and systematic testing on real devices. The project demonstrates the ability to transform a concrete industry problem into a functional mobile solution where both technical implementation and real-world user workflows were considered from the beginning.",
      },
    ],
  },
  {
  id: "smartgurlz",
  title: "SmartGurlz — Making Coding More Appealing Than Joystick Play",
  type: "Personal Project · UX Research · Educational Technology",
  icon: "mobile",
  summary: "A child-centered redesign concept for the SmartGurlz/Siggy app that makes programming the main attraction instead of a hidden secondary feature. The project combines field observations, child and parent interview prompts, a simplified interface, an interactive coding tutorial, and gamification to help children learn coding through playful robot interaction.",
  tech: [
    "UX Research",
    "Field Study",
    "Child-Centered Design",
    "Educational Technology",
    "Interactive Tutorial",
    "Gamification",
    "Scratch-Style Coding Blocks",
    "Mobile App Prototyping",
    "Interface Redesign",
    "User Testing"
  ],
  sections: [
    {
      heading: "Problem",
      body: [
        "SmartGurlz is attractive to parents because it promises that children can learn how to code, but the existing app experience made programming feel secondary to free driving with the joystick.",
        "During testing, users often ignored the coding part and instead drove Siggy randomly with the joystick or used simpler path-drawing tools.",
        "Children struggled with the app's main menu because the options were symbol-based and not clearly labelled, forcing them to guess what each activity meant."
      ]
    },
    {
      heading: "Goal",
      body: "Redesign the app experience so coding becomes the most appealing and understandable way to interact with Siggy, while preserving the playful qualities that make the product attractive to children."
    },
    {
      heading: "Research approach",
      body: [
        "Observed children using Siggy during a field study at Ballerup public library to understand whether they preferred joystick control over programming and whether the interface was easy to navigate.",
        "Used child interview questions about play habits, collaboration, toys, tablet use, and favorite activities to understand how children normally play and learn.",
        "Used parent interview questions about toy selection, learning potential, educational toys, digital games, physical toys, and whether toys should teach children independently."
      ]
    },
    {
      heading: "Solution",
      body: [
        "Introduce an interactive coding tutorial with voice and animation that guides new users through a simple first mission.",
        "Use color-coded, Scratch-style coding blocks so children can immediately see coding as the core interaction rather than an advanced hidden feature.",
        "Simplify the interface into clear sections with obvious options such as Play, Drive, and Story Time, reducing confusion caused by abstract menu icons.",
        "Add gamification through points, levels, rewards, unlockable coding blocks, and positive feedback after completed coding challenges."
      ]
    },
    {
      heading: "My role",
      body: "Project contributor in a UX and innovation process — helped identify the mismatch between the product's educational promise and the actual user behavior, supported field research, analyzed user needs, and contributed to a prototype concept focused on tutorial-based coding, gamification, and clearer navigation."
    },
    {
      heading: "Features",
      body: [
        "Start screen with a large play button to make entry into the app simple for children.",
        "Guided onboarding mission that teaches coding through immediate interaction with Siggy.",
        "Drag-and-drop block coding interface with a clear working area and playful command names.",
        "Three-part navigation structure that separates coding, driving, and story-based activities.",
        "Reward screen that celebrates progress and reinforces coding achievements.",
        "Audio-guided experience intended to work well with earbuds."
      ]
    },
    {
      heading: "Design decisions",
      body: [
        "Coding is placed visually and functionally ahead of joystick play so the educational value is harder to ignore.",
        "The interface uses clearer labels and fewer ambiguous symbols because children in testing had trouble deducing menu functions from icons alone.",
        "The tutorial starts with a small coding mission instead of a passive explanation, because children needed support getting started with programming.",
        "Rewards and positive feedback are used to make coding progress feel as playful as free driving."
      ]
    },
    {
      heading: "Challenges",
      body: [
        "Children naturally gravitated toward the easiest and most immediately playful interaction, which was joystick driving rather than programming.",
        "The original app's abstract icon-based navigation caused confusion and reduced the chance that children would discover the coding activity on their own.",
        "Programming tasks needed to be simplified without removing the feeling of creativity and control.",
        "The redesign had to satisfy both children, who want playful interaction, and parents, who value educational potential."
      ]
    },
    {
      heading: "Outcome",
      body: [
        "The proposed prototype reframes the app around tutorial-led coding, simplified navigation, and game-like rewards.",
        "The concept makes coding visible from the first interaction and gives children a guided path into programming before they fall back into joystick-only play."
      ]
    },
    {
      heading: "What it demonstrates",
      body: "UX research and product innovation for children's educational technology — turning field observations and interview insights into a prototype that better aligns playful interaction with learning goals."
    }
  ]
}
];

// Descriptive alt text per case-study image, keyed by project id, in the
// folder's filename order (numeric: image2 before image10). Missing entries
// fall back to the generic "Screenshot N from …" string below.
const imageAlts: Record<Lang, Record<string, string[]>> = {
  da: {
    "vild-pluk": [
      "Kortvisning i Vild Pluk med klynger af sankesteder markeret på et Danmarkskort og et filter med 26 typer i sæson.",
      "Detaljeside for et blåbær-spot med sæson, verificeringsstatus og knapper til at bekræfte stedet eller vise rute.",
      "Rutevejledning til et blåbær-spot med valg mellem gang, cykling og kørsel samt start af navigation.",
    ],
    "tvchat-ai": [
      "TV-parringsskærm i TVChat AI med QR-kode, der forbinder til relay-serveren, og instruktion om at scanne med telefonen.",
      "Telefon-companion med modelvælger (Opus 4.8), TV-forbindelsesstatus og beskedfelt til at skrive til tv'et.",
      "Chatvisning på tv'et med samtaleliste i sidepanelet og et svar fra assistenten i en 'Hello world!'-samtale.",
    ],
    "budget-tracker": [
      "Budget Tracker-dashboardet med oversigtskort for årlige udgifter, månedlig balance og årlig reserve samt hurtig statistik og faner til udgifter og sammenligning.",
    ],
    "thermal-anomaly": [
      "Slide med syntetisk datasæt: to termiske gadebilleder genereret i simulering, hvor personer lyser op mod baggrunden.",
      "Slide med CycleGAN-genererede billeder: to termiske havnebilleder oversat fra det syntetiske domæne.",
      "Ægte termisk overvågningsbillede om natten med flere personer, der fremstår som lyse silhuetter på en havnefront.",
    ],
    "iot-auth": [
      "Arkitekturdiagram over dataflowet fra The Things Network gennem UFW-firewall og proxy til backend- og MongoDB-containere via TLS.",
      "Arkitekturdiagram over forbindelsen fra webbrowser gennem firewall og proxy til frontend-, backend- og MongoDB-containere.",
      "Login-side for sensorplatformen med e-mail- og adgangskodefelter ved siden af et foto af en mark.",
      "Datatabel med sensor-payloads: hardware-serienummer, batteri, temperatur, fugt og tidsstempler.",
      "Enhedsadministration med registreret sensor, antal payloads og knap til at tilføje nye enheder.",
    ],
    "copenhagen-industries": [
      "Weapon Control-skærmen i landskabsformat med batteri-, oxygen- og propanstatus, skydetilstand og skydehastighed for enheden HC-05.",
      "Statusvisning for rekvisitpistolen 'Peter' med batteri-, oxygen- og propanniveauer samt en grøn SAFE-knap, der viser våbnets tilstand.",
      "Forbindelsesdialog med 'Connecting…', mens appen kobler til enheden 'Min enhed' via Bluetooth.",
    ],
    smartgurlz: [
      "AR-scene hvor Siggy-dukken på sit blå segboard kører mod et lavpoly-hospital mellem virtuelle træer og gadelamper.",
      "AR-zoo på en plads: en realistisk elefant og en lavpoly-okse bag hegn, mens dukken står på sit segboard ved siden af.",
      "Indgangsporten til 'Smartboiz World' i AR med raket, hospital og indhegnede dyr bag porten.",
      "AR-giraf i en lille indhegning på fliserne, set gennem tablettens kamera.",
      "Nærbillede af en AR-elefant bag et træhegn på brosten.",
      "Overblik over hele den virtuelle AR-verden med tårne, raket, bjerg, badeand og hytter placeret på en plads.",
      "Aktivitetsvælgeren 'Vælg Aktivitet' på tablet med seks ikoner for bl.a. historie, fjernstyring, rute og kodeblokke.",
      "Barn holder en tablet og styrer robotten med appens joystick-skærm under feltstudiet.",
      "Den interaktive kodningsvejledning 'Learn to Code', hvor kodeblokke trækkes til arbejdsområdet for at få dukken til at danse.",
      "Redesignet startmenu med tre store valg: Play, Drive og Story Time.",
    ],
  },
  en: {
    "vild-pluk": [
      "Map view in Vild Pluk with clustered foraging spots across a map of Denmark and a filter showing 26 types in season.",
      "Detail page for a blueberry spot with season, verification status, and buttons to confirm the spot or get directions.",
      "Directions sheet for a blueberry spot with walking, cycling, and driving options and a start-navigation button.",
    ],
    "tvchat-ai": [
      "TV pairing screen in TVChat AI with a QR code connecting to the relay server and instructions to scan with your phone.",
      "Phone companion with a model picker (Opus 4.8), TV connection status, and a message field for typing to the TV.",
      "Chat view on the TV with the conversation list in the sidebar and an assistant reply in a 'Hello world!' conversation.",
    ],
    "budget-tracker": [
      "The Budget Tracker dashboard with overview cards for annual expenses, monthly balance, and annual reserve, plus quick stats and tabs for expenses and comparison.",
    ],
    "thermal-anomaly": [
      "Synthetic dataset slide: two simulated thermal street scenes where people glow against the background.",
      "CycleGAN-generated images slide: two thermal harbor scenes translated from the synthetic domain.",
      "Real nighttime thermal surveillance frame with several people appearing as bright silhouettes on a harbor front.",
    ],
    "iot-auth": [
      "Architecture diagram of the data flow from The Things Network through a UFW firewall and proxy to backend and MongoDB containers over TLS.",
      "Architecture diagram of the connection from the web browser through the firewall and proxy to the frontend, backend, and MongoDB containers.",
      "Sign-in page for the sensor platform with email and password fields next to a photo of a crop field.",
      "Data table of sensor payloads: hardware serial, battery, temperature, moisture, and timestamps.",
      "Device management page with a registered sensor, its total payload count, and an add-device button.",
    ],
    "copenhagen-industries": [
      "The Weapon Control screen in landscape with battery, oxygen, and propane status, firing mode, and rate of fire for the HC-05 device.",
      "Status view for the prop pistol 'Peter' with battery, oxygen, and propane levels and a green SAFE button showing the weapon's state.",
      "Connection dialog showing 'Connecting…' while the app pairs with the device 'Min enhed' over Bluetooth.",
    ],
    smartgurlz: [
      "AR scene where the Siggy doll on her blue segway rides toward a low-poly hospital between virtual trees and lampposts.",
      "AR zoo on a plaza: a realistic elephant and a low-poly ox behind fences while the doll stands on her segway nearby.",
      "The 'Smartboiz World' entrance gate in AR with a rocket, a hospital, and fenced animals beyond the gate.",
      "AR giraffe in a small enclosure on the pavement, seen through the tablet camera.",
      "Close-up of an AR elephant behind a wooden fence on cobblestones.",
      "Overview of the whole virtual AR world with towers, a rocket, a mountain, a rubber duck, and cabins placed on a plaza.",
      "The 'Choose Activity' screen on the tablet with six icons including story, remote control, route, and coding blocks.",
      "A child holding a tablet, driving the robot with the app's joystick screen during the field study.",
      "The interactive 'Learn to Code' tutorial where coding blocks are dragged into the working area to make the doll dance.",
      "Redesigned start menu with three big choices: Play, Drive, and Story Time.",
    ],
  },
};

for (const p of da)
  p.images = getCaseStudyImages(
    p.id,
    (n) => imageAlts.da[p.id]?.[n - 1] ?? `Skærmbillede ${n} fra ${p.title}`,
  );
for (const p of en)
  p.images = getCaseStudyImages(
    p.id,
    (n) => imageAlts.en[p.id]?.[n - 1] ?? `Screenshot ${n} from ${p.title}`,
  );

export const projectsContent: Record<Lang, Project[]> = { da, en };
