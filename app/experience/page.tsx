
import type { Metadata } from "next";
import WorkspaceShell from "@/components/WorkspaceShell";
import {
  experiences,
  type ExperienceCategory,
  type ExperienceItem,
} from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience | PAULIN.OS",
  description:
    "Technical internships, leadership and professional experience of Paulin Binusha Sahayaranjan.",
};

const sections: {
  category: ExperienceCategory;
  number: string;
  heading: string;
  subtitle: string;
}[] = [
  {
    category: "Technical",
    number: "01",
    heading: "Technical Experience",
    subtitle:
      "Data science, artificial intelligence and cloud computing.",
  },
  {
    category: "Leadership",
    number: "02",
    heading: "Leadership & Community Impact",
    subtitle:
      "Sustainability, teamwork and community engagement.",
  },
  {
    category: "Professional",
    number: "03",
    heading: "Additional Professional Experience",
    subtitle:
      "Transferable skills developed in a professional environment.",
  },
];

function ExperienceCard({
  experience,
  compact = false,
}: {
  experience: ExperienceItem;
  compact?: boolean;
}) {
  return (
    <article className={`panel ${compact ? "p-5" : "p-7"}`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#eaf0fa]">
            {experience.role}
          </h3>

          <p className="mt-2 font-medium text-[#aaa6ff]">
            {experience.organisation}
          </p>

          <p className="mt-2 text-sm text-[var(--muted)]">
            {experience.location}
          </p>
        </div>

        <span className="rounded-md border border-[#344057] px-3 py-2 font-mono text-xs text-[#c0cbe0]">
          {experience.period}
        </span>
      </div>

      <p className="mt-5 leading-7 text-[#aab8ce]">
        {experience.description}
      </p>

      {!compact && (
        <ul className="mt-6 space-y-3">
          {experience.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-7 text-[#c0cbe0]"
            >
              <span
                aria-hidden="true"
                className="text-[var(--signal)]"
              >
                •
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <WorkspaceShell section="Experience">
      <div className="max-w-5xl">
        <header>
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
            CAREER / EXPERIENCE LOG
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Building expertise.
            <br />
            <span className="text-[#9b96ff]">
              Creating impact.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#aab8ce]">
            My experience combines applied data science,
            artificial intelligence, leadership and
            professional development. Each opportunity
            has strengthened my technical knowledge,
            analytical thinking and ability to collaborate.
          </p>
        </header>

        <div className="mt-14 space-y-16">
          {sections.map((section) => {
            const items = experiences.filter(
              (item) => item.category === section.category
            );

            if (items.length === 0) return null;

            return (
              <section key={section.category}>
                <div className="mb-7 flex items-start gap-4">
                  <span className="font-mono text-sm text-[var(--signal)]">
                    {section.number}
                  </span>

                  <div>
                    <h2 className="text-2xl font-semibold">
                      {section.heading}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                <div
                  className={
                    section.category === "Professional"
                      ? "grid gap-4 md:grid-cols-2"
                      : "space-y-5"
                  }
                >
                  {items.map((experience) => (
                    <ExperienceCard
                      key={experience.id}
                      experience={experience}
                      compact={
                        section.category === "Professional"
                      }
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </WorkspaceShell>
  );
}
