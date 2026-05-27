import { useState } from "react";
import { profile } from "../data/profile";
import { Section } from "./Section";
import { Card } from "./ui/Card";

// Per request: contact is email-only — no form and no social links.
export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <Section
      id="contact"
      index="08"
      eyebrow="Contact"
      title="Let's build reliable software solutions."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {/* Email tile */}
        <Card className="flex h-full flex-col md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Email
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
              onClick={copyEmail}
              className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:text-text"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            For roles, consulting, or collaboration, the best way to reach me is
            by email.
          </p>
        </Card>

        {/* Availability tile (accent) */}
        <div className="flex h-full flex-col justify-between rounded-2xl bg-accent-gradient p-6 text-white shadow-lg shadow-accent/25 md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
            Availability
          </p>
          <p className="mt-2 font-display text-2xl font-bold leading-snug">
            Open to roles, consulting &amp; collaboration.
          </p>
          <div className="mt-4 font-mono text-xs leading-relaxed text-white/80">
            <p>
              <span className="text-white/55">{"> "}</span>whoami
            </p>
            <p className="mt-1 text-white/90">
              full-stack engineer · enterprise-grade · secure by default
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
