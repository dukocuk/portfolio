// ============================================================
// LANGUAGES — spoken languages shown in the About section.
// Localized: Danish (default) + English.
// ============================================================

import type { Localized } from './types';

type Language = { name: string; level: string };

export const languagesContent: Localized<Language[]> = {
  da: [
    { name: 'Dansk', level: 'Modersmål' },
    { name: 'Tyrkisk', level: 'Modersmål' },
    { name: 'Engelsk', level: 'Professionelt arbejdsniveau' },
  ],
  en: [
    { name: 'Danish', level: 'Native' },
    { name: 'Turkish', level: 'Native' },
    { name: 'English', level: 'Professional working proficiency' },
  ],
};
