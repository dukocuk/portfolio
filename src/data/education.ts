// ============================================================
// EDUCATION. Localized: Danish (default) + English.
// ============================================================

import type { Lang } from '../i18n/config';

type Education = {
  period: string;
  degree: string;
  org: string;
  highlightLabel: string;
  highlight: string;
};

export const educationContent: Record<Lang, Education[]> = {
  da: [
    {
      period: '2020 – 2023',
      degree: 'MSc i Software Technology',
      org: 'Danmarks Tekniske Universitet (DTU)',
      highlightLabel: 'Speciale',
      highlight: 'Anomalidetektion i termiske overvågningsvideoer',
    },
    {
      period: '2016 – 2020',
      degree: 'Diplomingeniør i Software Technology',
      org: 'Danmarks Tekniske Universitet (DTU)',
      highlightLabel: 'Bachelorprojekt',
      highlight: 'Autentificering i cloud-baserede IoT-systemer',
    },
  ],
  en: [
    {
      period: '2020 – 2023',
      degree: 'MSc in Software Technology',
      org: 'Technical University of Denmark (DTU)',
      highlightLabel: 'Thesis',
      highlight: 'Anomaly Detection in Thermal Surveillance Video',
    },
    {
      period: '2016 – 2020',
      degree: 'BEng / Diploma in Software Technology',
      org: 'Technical University of Denmark (DTU)',
      highlightLabel: 'Bachelor project',
      highlight: 'Authentication in Cloud-Based IoT Systems',
    },
  ],
};
