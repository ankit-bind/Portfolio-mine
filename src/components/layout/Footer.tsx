import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { StampBadge, ZigzagDivider } from "@/components/decorative/Decorations";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-background px-4 pb-10 pt-16 text-ink">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-ink/15 bg-surface p-8 sm:p-12">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-ink font-display text-base font-semibold text-ink">
                AB
              </span>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/80">
                Ankit Bind
              </span>
            </div>
            <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-3xl">
              Designed & built by Ankit Bind — Greater Noida, India.
            </p>
            <div className="mt-6 text-ink/80">
              <ZigzagDivider width={120} />
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 md:items-end">
            <div className="flex items-center gap-3 text-ink">
              <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border-[1.5px] border-ink/40 transition-colors hover:border-ink hover:bg-accent-warm/40">
                <Mail className="h-4 w-4" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border-[1.5px] border-ink/40 transition-colors hover:border-ink hover:bg-accent-warm/40">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border-[1.5px] border-ink/40 transition-colors hover:border-ink hover:bg-accent-warm/40">
                <Github className="h-4 w-4" />
              </a>
            </div>
            <div className="text-ink">
              <StampBadge size={104}>© 2026<br/>Ankit B.</StampBadge>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink/15 pt-6 text-[11px] uppercase tracking-[0.22em] text-ink/60 sm:flex-row sm:justify-between">
          <span>Editorial portfolio · 2026</span>
          <Link to="/contact" className="hover:text-ink">Let's talk →</Link>
        </div>
      </div>
    </footer>
  );
}
