import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { HeroIllustration } from "@/components/illustrations/Illustrations";
import { DiamondMarker, StampBadge, ZigzagDivider, HairlineFrame } from "@/components/decorative/Decorations";
import { PageTransition } from "@/components/layout/PageTransition";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ankit Bind — Turning Data Into Clarity" },
      { name: "description", content: "Data Science student, AI enthusiast, and analyst building accurate, ethical, human-centered data systems." },
      { property: "og:title", content: "Ankit Bind — Turning Data Into Clarity" },
      { property: "og:description", content: "Editorial portfolio of Ankit Bind. Dashboards, predictive models, and a strict bias toward data quality." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Data Science Student",
          address: { "@type": "PostalAddress", addressLocality: "Greater Noida", addressCountry: "India" },
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "NIET, Greater Noida" },
            { "@type": "CollegeOrUniversity", name: "IIT Madras" },
          ],
          sameAs: [profile.linkedin, profile.github],
        }),
      },
    ],
  }),
  component: Index,
});

function TypingRoles() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % profile.hero.roles.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex h-7 items-center font-sans text-sm uppercase tracking-[0.22em] text-ink/70">
      <DiamondMarker size={6} className="mr-2 text-accent-warm" />
      <motion.span key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        {profile.hero.roles[i]}
      </motion.span>
    </div>
  );
}

function Index() {
  return (
    <PageTransition>
      {/* HERO — sage canvas, inset cream card mirroring the reference */}
      <section className="px-4 pb-20 pt-8">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-surface p-6 sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[5fr_6fr]">
            {/* illustration */}
            <div className="relative">
              <HairlineFrame className="bg-surface">
                <div className="aspect-square w-full">
                  <HeroIllustration />
                </div>
              </HairlineFrame>
              {/* floating motifs */}
              <motion.div
                className="absolute -left-3 top-6 text-ink/40"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <DiamondMarker size={14} />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 right-6 text-ink/50"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ZigzagDivider width={90} />
              </motion.div>
            </div>

            {/* copy */}
            <div className="relative">
              <div className="absolute -right-2 -top-4 hidden lg:block">
                <StampBadge size={108}>{profile.hero.badge}</StampBadge>
              </div>
              <div className="lg:hidden">
                <StampBadge size={96}>{profile.hero.badge}</StampBadge>
              </div>

              <h1 className="mt-6 font-display text-5xl uppercase leading-[1.05] tracking-[0.04em] text-ink sm:text-6xl lg:text-[80px]">
                Turning Data
                <br />
                Into Clarity.
              </h1>

              <div className="mt-5 text-ink"><ZigzagDivider width={120} /></div>

              <div className="mt-5">
                <TypingRoles />
              </div>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/75 sm:text-[17px]">
                {profile.hero.body}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link to="/projects" className="pill-btn-filled">
                  View Projects <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link to="/contact" className="pill-btn">
                  <DiamondMarker size={6} /> Contact me
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-ink/60">
                <span className="flex items-center gap-2"><DiamondMarker size={5} /> NIET '27</span>
                <span className="flex items-center gap-2"><DiamondMarker size={5} /> IIT Madras</span>
                <span className="hidden sm:flex items-center gap-2"><DiamondMarker size={5} /> Greater Noida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick value strip on cream */}
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {[
            { eyebrow: "Focus", title: "Data quality first", body: "Every model I ship starts with cleaning, profiling, and a critical look at where the data came from." },
            { eyebrow: "Approach", title: "Decision-ready visuals", body: "Dashboards designed to answer a question — not just to look impressive on a slide." },
            { eyebrow: "Mindset", title: "Ethical & honest AI", body: "I prefer a smaller, well-evaluated model over an over-claimed one. Bias and overfit get caught early." },
          ].map((b) => (
            <div key={b.title}>
              <div className="eyebrow flex items-center gap-2"><DiamondMarker size={6} className="text-accent-warm" /> {b.eyebrow}</div>
              <h3 className="mt-3 font-display text-2xl leading-snug text-ink">{b.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{b.body}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
