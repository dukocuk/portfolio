// ============================================================
// EDUCATION.
// ============================================================

export type Education = {
  period: string;
  degree: string;
  org: string;
  highlightLabel: string;
  highlight: string;
};

export const education: Education[] = [
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
];
