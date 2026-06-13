import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { skills, skillCategories, type Skill } from "@/data/skills";
import { DiamondMarker, ZigzagDivider } from "@/components/decorative/Decorations";
import { SkillIcon } from "@/components/illustrations/Illustrations";
import { PageTransition } from "@/components/layout/PageTransition";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Ankit Bind" },
      { name: "description", content: "Data science, visualization, and tooling skills with practical proficiency." },
      { property: "og:title", content: "Skills — Ankit Bind" },
      { property: "og:description", content: "Python, SQL, ML, Tableau, Power BI, Git." },
    ],
  }),
  component: SkillsPage,
});

const iconKind = (c: Skill["category"]) => (c === "Visualization" ? "viz" : c === "Tools" ? "tools" : "data");

function SkillsPage() {
  const [filter, setFilter] = useState<(typeof skillCategories)[number]>("All");
  const list = filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <PageTransition>
      <section className="px-4 pb-16 pt-6">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-surface p-6 sm:p-10 lg:p-14">
          <div className="eyebrow flex items-center gap-2"><DiamondMarker size={6} className="text-accent-warm" /> Skills</div>
          <h1 className="mt-3 font-display text-5xl uppercase leading-[1.05] tracking-[0.04em] text-ink sm:text-6xl">
            A working toolkit.
          </h1>
          <div className="mt-5 text-ink"><ZigzagDivider /></div>
          <p className="mt-5 max-w-2xl text-ink/70">
            Day-to-day tools and capabilities — chosen for clarity, reliability, and getting trustworthy answers out of messy data.
          </p>

          {/* category pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {skillCategories.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border-[1.5px] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    active ? "border-ink bg-ink text-surface" : "border-ink/30 text-ink hover:border-ink"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="editorial-card group p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0"><SkillIcon kind={iconKind(s.category)} /></div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl text-ink">{s.name}</h3>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-ink/50">{s.level}%</span>
                    </div>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink/55">{s.category}</p>
                    <div className="mt-4 h-px w-full bg-ink/15">
                      <motion.div
                        className="h-px bg-accent-warm"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
