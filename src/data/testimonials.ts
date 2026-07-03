// ============================================================
// REFERENCES — quotes from colleagues and employers. The quotes are
// translated for readability; author attributions stay verbatim.
// ============================================================

import type { Lang } from '../i18n/config';

type Testimonial = { quote: string; author: string };

export const testimonialsContent: Record<Lang, Testimonial[]> = {
  da: [
    {
      quote:
        'Han arbejder grundigt og samvittighedsfuldt. Han tager selv initiativ til at finde forbedringer og løsninger på problemer.',
      author: 'Jacob Nordfalk, Programudvikler og Lektor, Danmarks Tekniske Universitet',
    },
    {
      quote: 'Duran er nysgerrig af natur og jeg oplever ham som arbejdsom og videbegærlig.',
      author: 'Kristian Alban, Team Manager, Netcompany A/S',
    },
    {
      quote:
        'Duran bidrog væsentligt til projektets succes ved at arbejde selvstændigt, samarbejde tæt med backend-teamet og kommunikere effektivt med kunden.',
      author: 'Accenture A/S, Danmark',
    },
  ],
  en: [
    {
      quote:
        'He works thoroughly and conscientiously. He takes the initiative himself to find improvements and solutions to problems.',
      author: 'Jacob Nordfalk, Software Developer and Lecturer, Technical University of Denmark',
    },
    {
      quote: 'Duran is naturally curious, and I find him to be hardworking and eager to learn.',
      author: 'Kristian Alban, Team Manager, Netcompany A/S',
    },
    {
      quote:
        'Duran contributed greatly to the success of the project by working independently, collaborating closely with the backend team, and communicating effectively with the client.',
      author: 'Accenture A/S, Denmark',
    },
  ],
};
