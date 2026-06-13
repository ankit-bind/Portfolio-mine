import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { certifications } from "@/data/certifications";
import { DiamondMarker, StampBadge, ZigzagDivider } from "@/components/decorative/Decorations";
import { PageTransition } from "@/components/layout/PageTransition";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Certifications — Ankit Bind" },
      { name: "description", content: "Infosys certifications across Python, SQL, machine learning, and data analytics." },
      { property: "og:title", content: "Certifications — Ankit Bind" },
      { property: "og:description", content: "Infosys-issued data science certifications." },
    ],
  }),
  component: CertsPage,
});

function CertsPage() {
  return (
    <PageTransition>
      <section className="px-4 pb-20 pt-6">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-surface p-6 sm:p-10 lg:p-14">
          <div className="eyebrow flex items-center gap-2"><DiamondMarker size={6} className="text-accent-warm" /> Certifications</div>
          <h1 className="mt-3 font-display text-5xl uppercase leading-[1.05] tracking-[0.04em] text-ink sm:text-6xl">
            Stamped & studied.
          </h1>
          <div className="mt-5 text-ink"><ZigzagDivider /></div>
          <p className="mt-5 max-w-2xl text-ink/70">
            Formal certifications from Infosys — proof of the foundations behind every project.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {certifications.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="editorial-card group flex items-center gap-6 p-7"
              >
                <motion.div whileHover={{ rotate: 6 }} transition={{ duration: 0.3 }} className="shrink-0">
                  <StampBadge size={104}>Infosys<br/>Certified</StampBadge>
                </motion.div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-ink/55">{c.issuer}</p>
                  <h3 className="mt-2 font-display text-2xl leading-snug text-ink">{c.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
