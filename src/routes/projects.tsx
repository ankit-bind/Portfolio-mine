import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { LoanRecoveryIcon, StocksIcon } from "@/components/illustrations/Illustrations";
import { DiamondMarker, HairlineFrame, ZigzagDivider } from "@/components/decorative/Decorations";
import { PageTransition } from "@/components/layout/PageTransition";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ankit Bind" },
      { name: "description", content: "Selected data science projects: AI-Based Loan Recovery Prediction and Stock Market Predictive Analysis." },
      { property: "og:title", content: "Projects — Ankit Bind" },
      { property: "og:description", content: "Dashboards and predictive models, built with a bias toward data quality." },
    ],
  }),
  component: ProjectsPage,
});

const iconFor = (slug: string) => (slug === "loan-recovery" ? <LoanRecoveryIcon /> : <StocksIcon />);

function ProjectsPage() {
  return (
    <PageTransition>
      <section className="px-4 pb-20 pt-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[36px] bg-surface p-6 sm:p-10 lg:p-14">
            <div className="eyebrow flex items-center gap-2"><DiamondMarker size={6} className="text-accent-warm" /> Selected work</div>
            <h1 className="mt-3 font-display text-5xl uppercase leading-[1.05] tracking-[0.04em] text-ink sm:text-6xl">
              Projects.
            </h1>
            <div className="mt-5 text-ink"><ZigzagDivider /></div>
            <p className="mt-5 max-w-2xl text-ink/70">
              Two recent builds — each one chosen to show how I think about data quality, evaluation, and visual clarity.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="editorial-card group flex flex-col p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <HairlineFrame className="!p-2">
                    <motion.div className="h-20 w-20" whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                      {iconFor(p.slug)}
                    </motion.div>
                  </HairlineFrame>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/55">{p.year}</span>
                </div>

                <h2 className="mt-6 font-display text-3xl leading-tight text-ink">{p.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{p.blurb}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-ink/25 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink/70">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-2.5">
                  {p.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-[14px] text-ink/75">
                      <DiamondMarker size={6} className="mt-2 text-accent-warm" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-3 pt-2">
                  <a href={p.primary.href} target="_blank" rel="noreferrer" className="pill-btn-filled">
                    {p.primary.label} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  {p.secondary && (
                    <a href={p.secondary.href} target="_blank" rel="noreferrer" className="pill-btn">
                      {p.secondary.label}
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
