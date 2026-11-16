
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import WorkspaceShell from "@/components/WorkspaceShell";
import { portfolioProjects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = portfolioProjects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const projectIndex = portfolioProjects.findIndex(
    (item) => item.slug === slug
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolioProjects[projectIndex];

  return (
    <WorkspaceShell section="Project Case Study">
      <div className="max-w-5xl">
        <Link
          href="/projects"
          className="text-sm text-[#aaa6ff] hover:underline"
        >
          ← Back to all projects
        </Link>

        {/* Project introduction */}
        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-[#344057] bg-[#1a2535] px-3 py-2 font-mono text-xs text-[var(--signal)]">
              SYS-{String(projectIndex + 1).padStart(3, "0")}
            </span>

            <span className="font-mono text-xs tracking-wider text-[var(--muted)]">
              {project.category.toUpperCase()}
            </span>
          </div>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#aab8ce]">
            {project.summary}
          </p>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-lg bg-[#9b96ff] px-5 py-3 text-sm font-semibold text-[#0b1020] transition-transform hover:-translate-y-0.5"
            >
              View GitHub Repository ↗
            </a>
          )}
        </header>

        {/* Technology stack */}
        <section className="mt-14">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
            01 / TECHNOLOGY STACK
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Tools & Technologies
          </h2>

          <div className="panel mt-6 flex flex-wrap gap-3 p-6">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-[#344057] bg-[#1a2535] px-4 py-2 font-mono text-sm text-[#c0cbe0]"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Engineering highlights */}
        <section className="mt-14">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
            02 / ENGINEERING HIGHLIGHTS
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Technical Approach
          </h2>

          <div className="mt-6 grid gap-4">
            {project.highlights.map((highlight, index) => (
              <article
                key={highlight}
                className="panel flex items-start gap-5 p-6"
              >
                <span className="font-mono text-sm text-[#9b96ff]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="leading-7 text-[#c0cbe0]">
                  {highlight}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Project overview */}
        <section className="mt-14">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
            03 / PROJECT OVERVIEW
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Engineering Context
          </h2>

          <div className="panel mt-6 p-7">
            <p className="leading-8 text-[#aab8ce]">
              {project.summary}
            </p>

            <p className="mt-5 leading-8 text-[#aab8ce]">
              This project is part of my applied AI
              engineering portfolio. The technical
              highlights above summarise the main areas
              explored during development and evaluation.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-7">
          <Link
            href="/projects"
            className="text-sm font-medium text-[#aaa6ff] hover:underline"
          >
            ← All Projects
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-[#aaa6ff] hover:underline"
          >
            Connect With Me →
          </Link>
        </footer>
      </div>
    </WorkspaceShell>
  );
}
