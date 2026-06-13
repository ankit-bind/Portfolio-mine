import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { AboutIllustration } from "@/components/illustrations/Illustrations";
import { DiamondMarker, HairlineFrame, StampBadge, ZigzagDivider } from "@/components/decorative/Decorations";
import { PageTransition } from "@/components/layout/PageTransition";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ankit Bind" },
      { name: "description", content: "Ankit Bind's story: two parallel data science degrees, a focus on data quality, and a belief in ethical AI." },
      { property: "og:title", content: "About — Ankit Bind" },
      { property: "og:description", content: "How Ankit builds trustworthy data systems." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageTransition>
      <section className="px-4 pb-16 pt-6">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-surface p-6 sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[6fr_5fr]">
            <div>
              <div className="eyebrow flex items-center gap-2"><DiamondMarker size={6} className="text-accent-warm" /> About</div>
              <h1 className="mt-3 font-display text-5xl uppercase leading-[1.05] tracking-[0.04em] text-ink sm:text-6xl">
                Data, Designed
                <br />With Care.
              </h1>
              <div className="mt-5 text-ink"><ZigzagDivider /></div>
              <p className="mt-6 text-[17px] leading-[1.75] text-ink/80">{profile.story}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/projects" className="pill-btn-filled">See projects</Link>
                <a href={profile.resumeUrl} download="Ankit-Bind-Resume.pdf" target="_blank" rel="noreferrer" className="pill-btn">Download résumé</a>
              </div>
            </div>

            <div>
              <HairlineFrame>
                <AboutIllustration />
              </HairlineFrame>
            </div>
          </div>
        </div>
      </section>

      {/* Stats stamps on sage */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between text-ink">
            <h2 className="font-display text-3xl uppercase tracking-[0.04em] sm:text-4xl">By the numbers</h2>
            <div className="text-ink/80"><ZigzagDivider /></div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {profile.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col items-center gap-3 rounded-[28px] bg-surface p-8 text-center"
              >
                <span className="font-display text-4xl text-ink">{s.value}</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently exploring */}
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <StampBadge size={130}>Currently<br/>Exploring</StampBadge>
            <div>
              <h3 className="font-display text-3xl uppercase tracking-[0.04em] text-ink">What I'm learning right now</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {profile.currentlyExploring.map((t) => (
                  <span key={t} className="rounded-full border border-ink/30 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-ink">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini education preview */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-surface p-8 sm:p-12">
          <div className="flex items-end justify-between">
            <h3 className="font-display text-3xl uppercase tracking-[0.04em] text-ink">Education</h3>
            <Link to="/education" className="pill-btn">Full timeline</Link>
          </div>
          <ul className="mt-8 divide-y divide-ink/10">
            {education.slice(0, 2).map((e) => (
              <li key={e.degree} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <DiamondMarker size={7} className="mt-2 text-accent-warm" />
                  <div>
                    <p className="font-display text-xl text-ink">{e.degree}</p>
                    <p className="text-sm text-ink/65">{e.school}</p>
                  </div>
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink/55 sm:text-right">
                  <p>{e.period}</p>
                  <p className="mt-1 text-accent-cool">{e.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageTransition>
  );
}
