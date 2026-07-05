import { profileContent, gpgKey, tox } from "../data/profile";
import { Section } from "./Section";
import { Card } from "./ui/Card";
import { useLanguage } from "../i18n/useLanguage";
import { uiStrings } from "../i18n/ui";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { BookingButton } from "./ui/BookingButton";

// Per request: contact is email-only — no form and no social links.
// The GPG public key below is offered alongside the email for encrypted
// contact — not a form, not a social link.
export function Contact() {
  const { lang } = useLanguage();
  const profile = profileContent[lang];
  const ui = uiStrings[lang];
  const c = ui.contact;
  const gpgKeyHref = `${import.meta.env.BASE_URL}${gpgKey.fileName}`;
  const toxQrHref = `${import.meta.env.BASE_URL}${tox.qrFileName}`;

  const email = useCopyToClipboard();
  const fingerprint = useCopyToClipboard();
  const toxId = useCopyToClipboard();

  return (
    <Section
      id="contact"
      index="08"
      eyebrow={ui.sections.contact.eyebrow}
      title={ui.sections.contact.title}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {/* Email tile */}
        <Card className="flex h-full flex-col md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            {c.emailLabel}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="text-lg font-semibold text-accent hover:opacity-80"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={() => email.copy(profile.email)}
              className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:text-text"
            >
              {email.copied ? c.copied : c.copy}
            </button>
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            {c.helper}
          </p>

          <div className="mt-5 border-t border-border pt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              {c.gpgLabel}
            </p>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
              {c.gpgHelper}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <code className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-text">
                {gpgKey.fingerprint}
              </code>
              <button
                type="button"
                onClick={() => fingerprint.copy(gpgKey.fingerprint)}
                className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:text-text"
              >
                {fingerprint.copied ? c.gpgFingerprintCopied : c.gpgCopyFingerprint}
              </button>
              <a
                href={gpgKeyHref}
                download
                className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:text-text"
              >
                {c.gpgDownload}
              </a>
            </div>
          </div>

          <div className="mt-5 border-t border-border pt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              {c.toxLabel}
            </p>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
              {c.toxHelper}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <code className="max-w-full break-all rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-text">
                {tox.id}
              </code>
              <button
                type="button"
                onClick={() => toxId.copy(tox.id)}
                className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:text-text"
              >
                {toxId.copied ? c.toxCopied : c.toxCopy}
              </button>
            </div>
            <div className="mt-3 w-40 max-w-full rounded-md bg-white p-2">
              <img
                src={toxQrHref}
                alt={c.toxQrAlt}
                width={144}
                height={144}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Card>

        {/* Availability tile (accent) */}
        <div className="flex h-full flex-col justify-between rounded-2xl bg-accent-gradient p-6 text-white shadow-lg shadow-accent/25 md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
            {c.availabilityLabel}
          </p>
          <p className="mt-2 font-display text-2xl font-bold leading-snug">
            {c.availability}
          </p>
          <div className="mt-4 font-mono text-xs leading-relaxed text-white/80">
            <p>
              <span className="text-white/55">{"> "}</span>whoami
            </p>
            <p className="mt-1 text-white/90">
              {c.whoami}
            </p>
          </div>
          <BookingButton className="mt-5 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-accent shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
            {c.book}
          </BookingButton>
        </div>
      </div>
    </Section>
  );
}
