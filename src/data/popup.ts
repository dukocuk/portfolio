// ============================================================
// FIRST-VISIT NOTICE copy — shown once per browser before the
// rest of the site is reachable. Localized: Danish (default) + English.
// ============================================================

import type { Lang } from '../i18n/config';

export type PopupContent = { title: string; body: string; cta: string };

export const firstVisitContent: Record<Lang, PopupContent> = {
  da: {
    title: 'Før du kontakter mig',
    body: 'Tak, fordi du kigger forbi. Hvis du overvejer mig til en stilling, vil jeg bede dig om at bruge et par minutter på at gennemgå denne portfolio først. Den bør give dig et klart billede af mit arbejde, og om det er et match. Jeg vil desuden venligst bede om, at du kun inviterer mig til en samtale, hvis du reelt er åben over for muligheden for at ansætte mig. Det er med til at bruge begges tid bedst muligt.',
    cta: 'Det forstår jeg, fortsæt →',
  },
  en: {
    title: 'Before you reach out',
    body: "Thanks for stopping by. If you're considering me for a role, please take a few minutes to look through this portfolio first. It should give you a clear sense of my work and whether it's a fit. I'd also kindly ask that you only invite me to an interview if you're genuinely open to the possibility of hiring me. It helps make the best use of both our time.",
    cta: 'I understand, continue →',
  },
};
