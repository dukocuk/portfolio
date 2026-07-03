// ============================================================
// LANGUAGES — spoken languages shown in the About section.
// Localized: Danish (default) + English.
// ============================================================

import type { Lang } from '../i18n/config';

export type Language = { name: string; level: string };

export const languagesContent: Record<Lang, Language[]> = {
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
