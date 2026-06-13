import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { education } from "@/data/education";
import { DiamondMarker, ZigzagDivider } from "@/components/decorative/Decorations";
import { PageTransition } from "@/components/layout/PageTransition";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Ankit Bind" },
      { name: "description", content: "Education timeline: IIT Madras BS in Data Science, B.Tech CSE (Data Science) at NIET, and secondary schooling in Delhi." },
      { property: "og:title", content: "Education — Ankit Bind" },
      { property: "og:description", content: "Two parallel data science degrees and the path that led there." },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <PageTransition>
      <section className="px-4 pb-20 pt-6">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-surface p-6 sm:p-10 lg:p-14">
          <div className="eyebrow flex items-center gap-2"><DiamondMarker size={6} className="text-accent-warm" /> Education</div>
          <h1 className="mt-3 font-display text-5xl uppercase leading-[1.05] tracking-[0.04em] text-ink sm:text-6xl">
            A two-track path.
          </h1>
          <div className="mt-5 text-ink"><ZigzagDivider /></div>
          <p className="mt-5 max-w-2xl text-ink/70">
            From classrooms in Delhi to two parallel data science degrees — each milestone shaped how I think about evidence.
          </p>

          <div className="relative mt-14">
            {/* zigzag connecting line (decorative) */}
            <div className="absolute left-4 top-2 hidden -translate-x-1/2 sm:left-1/2 sm:block">
              <div className="flex flex-col gap-2 text-ink/30">
                {Array.from({ length: 6 }).map((_, i) => (
                  <ZigzagDivider key={i} width={36} />
                ))}
              </div>
            </div>

            <ul className="space-y-10">
              {education.map((e, i) => {
                const right = i % 2 === 1;
                return (
                  <motion.li
                    key={e.degree}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className={`relative grid items-center gap-6 sm:grid-cols-2 ${right ? "sm:[direction:rtl]" : ""}`}
                  >
                    <div className={`relative sm:[direction:ltr] ${right ? "sm:pl-12" : "sm:pr-12"}`}>
                      <div className="editorial-card p-6">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-ink/55">{e.period}</p>
                        <h3 className="mt-2 font-display text-2xl leading-snug text-ink">{e.degree}</h3>
                        <p className="mt-1 text-ink/70">{e.school}</p>
                        <p className="mt-3 inline-block rounded-full border border-accent-cool/50 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent-cool">
                          {e.detail}
                        </p>
                      </div>
                    </div>
                    {/* diamond node */}
                    <div className="absolute left-4 top-6 -translate-x-1/2 sm:left-1/2">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-surface text-ink ring-1 ring-ink/20">
                        <DiamondMarker size={10} className="text-accent-warm" />
                      </div>
                    </div>
                    <div className="hidden sm:block" />
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
