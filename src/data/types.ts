// ============================================================
// Shared shapes for the data layer. Every content file is bilingual and
// wraps its rows in `Localized<T>`; a few share the same row shape.
// ============================================================

import type { Lang } from '../i18n/config';

/** A value supplied in every supported language (Danish default, English). */
export type Localized<T> = Record<Lang, T>;

/** A titled block of prose — shared by services and work-philosophy points. */
export type TitleBody = { title: string; body: string };
