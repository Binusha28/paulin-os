
import type { Metadata } from "next";
import WorkspaceShell from "@/components/WorkspaceShell";

export const metadata: Metadata = {
  title: "Research & Innovation",
  description:
    "Research, patent applications, and academic achievements of Paulin Binusha Sahayaranjan.",
};

const research = [
  {
    id: "R-001",
    type: "Patent Application",
    title: "System and Method for Enhancing Elevator Efficiency",
    detail: "Indian Patent Application No. 202441057715",
    description:
      "An engineering innovation exploring methods for improving elevator efficiency through intelligent system design.",
    highlights: [
      "Engineering innovation",
      "System efficiency",
      "Applied research",
    ],
  },
  {
    id: "R-002",
    type: "Conference Paper",
    title:
      "Autonomous Vehicle – Dynamic Cooperative Routing Algorithm in Swarm Intelligence",
    detail: "NCICT 2024 · Best Paper Award",
    description:
      "Research investigating cooperative routing strategies for autonomous vehicles using swarm intelligence principles.",
    highlights: [
      "Swarm intelligence",
      "Cooperative routing",
      "Autonomous systems",
    ],
  },
];

export default function ResearchPage() {
  return (
    <WorkspaceShell section="Research">
      <div className="max-w-5xl">
        <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
          RESEARCH / INNOVATION
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Research that moves
          <br />
          <span className="text-[#9b96ff]">
            ideas forward.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-[#aab8ce]">
          My academic research explores intelligent
          systems, optimisation, and engineering
          innovation, connecting theoretical ideas
          with practical applications.
        </p>

        <section className="mt-12 space-y-6">
          {research.map((item) => (
            <article key={item.id} className="panel p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs text-[var(--signal)]">
                  {item.id}
                </span>

                <span className="rounded-md border border-[#344057] px-3 py-1 text-xs text-[#aab8ce]">
                  {item.type}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h2>

              <p className="mt-3 text-sm font-medium text-[#aaa6ff]">
                {item.detail}
              </p>

              <p className="mt-5 leading-8 text-[#aab8ce]">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-md border border-[#344057] bg-[#1a2535] px-3 py-2 font-mono text-xs text-[#c0cbe0]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </WorkspaceShell>
  );
}
