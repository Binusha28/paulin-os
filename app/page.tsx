
"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { portfolioProjects } from "@/data/projects";

const filters = [
  "ALL SYSTEMS",
  ...Array.from(
    new Set(portfolioProjects.map((project) => project.category))
  ),
];

const principles = [
  {
    number: "01",
    title: "Design",
    description:
      "Architect intelligent systems around clearly defined problems.",
  },
  {
    number: "02",
    title: "Experiment",
    description:
      "Evaluate models through rigorous, reproducible analysis.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Translate research into maintainable software implementations.",
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("ALL SYSTEMS");

  const visibleProjects = portfolioProjects.filter(
    (project) =>
      activeFilter === "ALL SYSTEMS" ||
      project.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Shared responsive sidebar */}
        <Sidebar />

        {/* Main workspace */}
        <main className="workspace-grid min-w-0 flex-1">
          {/* Workspace status */}
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] px-6 py-5 lg:px-10">
            <span className="font-mono text-xs text-[var(--muted)]">
              WORKSPACE / OVERVIEW
            </span>

            <span className="font-mono text-xs text-[var(--signal)]">
              ● SYSTEM ONLINE
            </span>
          </header>

          <div className="mx-auto max-w-7xl space-y-14 px-6 py-12 lg:px-12 lg:py-16">
            {/* Introduction */}
            <section id="overview" className="scroll-mt-8">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#3a4c5a] bg-[#12242b] px-4 py-2 font-mono text-xs text-[var(--signal)]">
                AI ENGINEERING / APPLIED RESEARCH
              </div>

              <p className="mb-4 font-mono text-sm text-[var(--muted)]">
                PAULIN BINUSHA SAHAYARANJAN
              </p>

              <h1 className="max-w-4xl text-4xl leading-[1.12] font-semibold tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                Intelligence,
                <br />
                <span className="text-[#9b96ff]">
                  engineered.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#aab8ce] lg:text-lg">
                I develop and investigate intelligent systems
                across machine learning, computer vision,
                natural language processing, and generative AI.
                My work combines research-driven experimentation
                with practical software engineering.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#systems"
                  className="rounded-lg bg-[#9b96ff] px-6 py-3 text-sm font-semibold text-[#0b1020] transition-transform hover:-translate-y-0.5"
                >
                  Explore Engineering Systems
                </a>

                <Link
                  href="/contact"
                  className="rounded-lg border border-[#9b96ff] bg-[#292746] px-6 py-3 text-sm font-medium text-[#d0cdff] transition-colors hover:bg-[#37335c]"
                >
                  View CV ↗
                </Link>

                <a
                  href="https://github.com/Binusha28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[var(--border)] bg-[#151e2c] px-6 py-3 text-sm font-medium hover:bg-[#202c40]"
                >
                  GitHub ↗
                </a>
              </div>
            </section>

            {/* Engineering principles */}
            <section
              aria-label="Engineering disciplines"
              className="grid gap-4 md:grid-cols-3"
            >
              {principles.map((item) => (
                <div key={item.number} className="panel p-6">
                  <span className="font-mono text-xs text-[#9b96ff]">
                    {item.number} / PRINCIPLE
                  </span>

                  <h2 className="mt-5 text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </section>

            {/* Systems registry */}
            <section id="systems" className="scroll-mt-8">
              <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
                    SYSTEM REGISTRY
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                    Engineering Systems
                  </h2>
                </div>

                <span className="font-mono text-xs text-[var(--muted)]">
                  {String(visibleProjects.length).padStart(2, "0")} MODULES
                </span>
              </div>

              {/* Project filters */}
              <div
                aria-label="Filter projects"
                className="mb-6 flex flex-wrap gap-2"
              >
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-md border px-3 py-2 font-mono text-[11px] transition-colors ${
                      activeFilter === filter
                        ? "border-[#9b96ff] bg-[#292746] text-white"
                        : "border-[var(--border)] text-[var(--muted)] hover:border-[#7d83aa]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Project cards */}
              <div className="grid gap-4 xl:grid-cols-2">
                {visibleProjects.map((project) => (
                  <article
                    key={project.slug}
                    className="panel flex flex-col p-6 transition-colors hover:border-[#6971ad]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs text-[var(--signal)]">
                        SYS-
                        {String(
                          portfolioProjects.findIndex(
                            (item) => item.slug === project.slug
                          ) + 1
                        ).padStart(3, "0")}
                      </span>

                      <span className="text-right font-mono text-[10px] text-[var(--muted)]">
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-[#aab8ce]">
                      {project.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#344057] bg-[#1a2535] px-3 py-1.5 font-mono text-[11px] text-[#c0cbe0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-sm font-semibold text-[#aaa6ff] hover:underline"
                      >
                        Explore Case Study ↗
                      </Link>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[var(--muted)] hover:text-white"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/projects"
                  className="inline-flex rounded-lg border border-[var(--border)] bg-[#151e2c] px-6 py-3 text-sm font-medium transition-colors hover:bg-[#202c40]"
                >
                  Explore All Projects ↗
                </Link>
              </div>
            </section>

            {/* Research */}
            <section id="research" className="scroll-mt-8">
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
                RESEARCH ARCHIVE
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Research &amp; Innovation
              </h2>

              <div className="panel mt-6 divide-y divide-[var(--border)]">
                <div className="p-6">
                  <p className="font-mono text-xs text-[#9b96ff]">
                    PATENT APPLICATION
                  </p>

                  <h3 className="mt-2 font-semibold">
                    System and Method for Enhancing Elevator Efficiency
                  </h3>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Application No. 202441057715
                  </p>
                </div>

                <div className="p-6">
                  <p className="font-mono text-xs text-[#9b96ff]">
                    CONFERENCE PAPER · NCICT 2024
                  </p>

                  <h3 className="mt-2 font-semibold">
                    Autonomous Vehicle — Dynamic Cooperative
                    Routing Algorithm in Swarm Intelligence
                  </h3>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Best Paper recognition
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <Link
                  href="/research"
                  className="text-sm font-semibold text-[#aaa6ff] hover:underline"
                >
                  Explore Research &amp; Innovation ↗
                </Link>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-8">
              <div className="panel p-7 lg:p-10">
                <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
                  CONNECT / COLLABORATE
                </p>

                <h2 className="mt-4 text-3xl font-semibold">
                  Let&apos;s engineer what comes next.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
                  Interested in AI engineering, machine learning,
                  applied research, or technical collaboration?
                  Explore my work and connect with me.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/binusha028/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#9b96ff] px-5 py-3 text-sm font-semibold text-[#0b1020]"
                  >
                    LinkedIn ↗
                  </a>

                  <a
                    href="https://github.com/Binusha28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[var(--border)] px-5 py-3 text-sm"
                  >
                    GitHub ↗
                  </a>

                  <Link
                    href="/contact"
                    className="rounded-lg border border-[var(--border)] px-5 py-3 text-sm transition-colors hover:bg-[#202c40]"
                  >
                    Contact &amp; CV ↗
                  </Link>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[var(--border)] pt-6 font-mono text-xs text-[var(--muted)]">
              PAULIN.OS / ENGINEERING PORTFOLIO
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
