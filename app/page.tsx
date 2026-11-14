
"use client";

import { useState } from "react";

type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  github?: string;
};

const projects: Project[] = [
  {
    id: "SYS-001",
    name: "Evidence-Grounded RAG Assistant",
    category: "GENERATIVE AI",
    description:
      "A modular document intelligence system exploring retrieval-augmented generation, evidence verification, and grounded responses.",
    stack: ["Python", "RAG", "NLP"],
    github:
      "https://github.com/Binusha28/evidence-rag-assistant",
  },
  {
    id: "SYS-002",
    name: "Diabetic Retinopathy Grading",
    category: "COMPUTER VISION",
    description:
      "Deep learning for retinal disease severity classification using ConvNeXt-Tiny and class-imbalance-aware training.",
    stack: ["PyTorch", "ConvNeXt", "Medical AI"],
  },
  {
    id: "SYS-003",
    name: "Single-Cell Protein Localisation",
    category: "BIOMEDICAL AI",
    description:
      "Multi-label protein localisation in microscopy images using convolutional networks and vision transformers.",
    stack: ["ResNet-50", "SwinV2", "PyTorch"],
  },
  {
    id: "SYS-004",
    name: "Sentiment & Sarcasm Intelligence",
    category: "NATURAL LANGUAGE",
    description:
      "Cross-variety language classification using transformer architectures and parameter-efficient fine-tuning.",
    stack: ["DeBERTa", "RoBERTa", "LoRA"],
  },
];

const filters = [
  "ALL SYSTEMS",
  "GENERATIVE AI",
  "COMPUTER VISION",
  "BIOMEDICAL AI",
  "NATURAL LANGUAGE",
];

export default function Home() {
  const [activeFilter, setActiveFilter] =
    useState("ALL SYSTEMS");

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "ALL SYSTEMS" ||
      project.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Navigation rail */}
        <aside className="border-b border-[var(--border)] bg-[#0d131e] p-5 lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r lg:p-7">
          <a
            href="#overview"
            className="inline-flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#292746] font-mono font-bold text-[#c4c0ff]">
              P.
            </span>
            <span className="text-xl font-semibold tracking-tight">
              PAULIN<span className="text-[#9b96ff]">.OS</span>
            </span>
          </a>

          <p className="mt-3 font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">
            AI ENGINEERING ENVIRONMENT
          </p>

          <nav
            aria-label="Main navigation"
            className="mt-8 flex flex-wrap gap-2 lg:flex-col"
          >
            {[
              ["Overview", "#overview"],
              ["Engineering Systems", "#systems"],
              ["Research", "#research"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-4 py-3 text-sm text-[#aebbd0] transition-colors hover:bg-[#202b40] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b96ff]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-10 hidden border-t border-[var(--border)] pt-6 lg:block">
            <p className="font-mono text-xs text-[var(--signal)]">
              ● PORTFOLIO WORKSPACE
            </p>
            <p className="mt-2 text-xs text-[var(--muted)]">
              Research. Engineer. Evaluate. Improve.
            </p>
          </div>
        </aside>

        {/* Main workspace */}
        <main className="workspace-grid min-w-0 flex-1">
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
              {[
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
              ].map((item) => (
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

              <div className="grid gap-4 xl:grid-cols-2">
                {visibleProjects.map((project) => (
                  <article
                    key={project.id}
                    className="panel flex flex-col p-6 transition-colors hover:border-[#6971ad]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs text-[var(--signal)]">
                        {project.id}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--muted)]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-semibold">
                      {project.name}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-[#aab8ce]">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#344057] bg-[#1a2535] px-3 py-1.5 font-mono text-[11px] text-[#c0cbe0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 w-fit text-sm font-medium text-[#aaa6ff] hover:underline"
                      >
                        Inspect repository ↗
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {/* Research */}
            <section id="research" className="scroll-mt-8">
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
                RESEARCH ARCHIVE
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Research & Innovation
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
                </div>
              </div>
            </section>

            <footer className="border-t border-[var(--border)] pt-6 font-mono text-xs text-[var(--muted)]">
              PAULIN.OS / ENGINEERING PORTFOLIO
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
