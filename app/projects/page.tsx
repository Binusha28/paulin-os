
import type { Metadata } from "next";
import Link from "next/link";
import WorkspaceShell from "@/components/WorkspaceShell";
import { portfolioProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "AI Projects",
  description:
    "Explore machine learning, computer vision, biomedical AI, NLP, and generative AI projects by Paulin Binusha Sahayaranjan.",
};

export default function ProjectsPage() {
  return (
    <WorkspaceShell section="Projects">
      <section>
        <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
          ENGINEERING / PROJECT REGISTRY
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Intelligent systems.
          <br />
          <span className="text-[#9b96ff]">
            Real engineering.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-[#aab8ce]">
          A collection of applied AI projects exploring
          computer vision, deep learning, natural language
          processing, generative AI, and healthcare analytics.
        </p>
      </section>

      <section className="mt-12 grid gap-5 xl:grid-cols-2">
        {portfolioProjects.map((project, index) => (
          <article
            key={project.slug}
            className="panel flex flex-col p-7 transition-colors hover:border-[#6971ad]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs text-[var(--signal)]">
                SYS-{String(index + 1).padStart(3, "0")}
              </span>

              <span className="text-right font-mono text-[10px] text-[var(--muted)]">
                {project.category.toUpperCase()}
              </span>
            </div>

            <h2 className="mt-6 text-xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-4 flex-1 text-sm leading-7 text-[#aab8ce]">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-[#344057] bg-[#1a2535] px-3 py-1.5 font-mono text-[11px] text-[#c0cbe0]"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-7 border-t border-[var(--border)] pt-5">
              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-medium text-[#aaa6ff] hover:underline"
              >
                Explore case study →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </WorkspaceShell>
  );
}
