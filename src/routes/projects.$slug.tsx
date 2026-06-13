import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { StocksIcon, LoanRecoveryIcon } from "@/components/illustrations/Illustrations";
import { DiamondMarker, HairlineFrame, ZigzagDivider } from "@/components/decorative/Decorations";
import { PageTransition } from "@/components/layout/PageTransition";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: p
        ? [
            { title: `${p.title} — Ankit Bind` },
            { name: "description", content: p.blurb },
            { property: "og:title", content: `${p.title} — Ankit Bind` },
            { property: "og:description", content: p.blurb },
          ]
        : [{ title: "Project — Ankit Bind" }],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="px-4 py-20 text-center">
      <h1 className="font-display text-4xl uppercase text-surface">Project not found</h1>
      <Link to="/projects" className="pill-btn mt-6 inline-flex">Back to projects</Link>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const Icon = project.slug === "loan-recovery" ? LoanRecoveryIcon : StocksIcon;

  return (
    <PageTransition>
      <section className="px-4 pb-20 pt-6">
        <div className="mx-auto max-w-4xl rounded-[36px] bg-surface p-6 sm:p-10 lg:p-14">
          <Link to="/projects" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink/60 hover:text-ink">
            <ArrowLeft className="h-3.5 w-3.5" /> All projects
          </Link>

          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <HairlineFrame className="!p-3"><div className="h-24 w-24"><Icon /></div></HairlineFrame>
            <span className="text-[11px] uppercase tracking-[0.22em] text-ink/55">{project.year}</span>
          </div>

          <h1 className="mt-8 font-display text-5xl uppercase leading-[1.05] tracking-[0.04em] text-ink sm:text-6xl">
            {project.title}
          </h1>
          <div className="mt-5 text-ink"><ZigzagDivider /></div>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink/80">{project.blurb}</p>

          <div className="mt-8">
            <div className="eyebrow">Tech</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full border border-ink/25 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink/70">{t}</span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="eyebrow">What it does</div>
            <ul className="mt-4 space-y-3">
              {project.achievements.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[16px] text-ink/80">
                  <DiamondMarker size={7} className="mt-2 text-accent-warm" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={project.primary.href} target="_blank" rel="noreferrer" className="pill-btn-filled">
              {project.primary.label} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <Link to="/contact" className="pill-btn">Discuss this project</Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
