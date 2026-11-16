
import type { Metadata } from "next";
import WorkspaceShell from "@/components/WorkspaceShell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Paulin Binusha Sahayaranjan's background in artificial intelligence, machine learning, and applied research.",
};

const expertise = [
  {
    title: "Machine Learning",
    description:
      "Predictive modelling, classification, model evaluation, and experimental analysis.",
  },
  {
    title: "Computer Vision",
    description:
      "Deep learning for medical images, microscopy, and visual recognition.",
  },
  {
    title: "Natural Language Processing",
    description:
      "Transformer architectures, sentiment analysis, sarcasm detection, and language modelling.",
  },
  {
    title: "Generative AI",
    description:
      "Retrieval-augmented generation, document intelligence, and evidence-grounded systems.",
  },
];

export default function AboutPage() {
  return (
    <WorkspaceShell section="About">
      <section className="max-w-4xl">
        <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
          PROFILE / ABOUT
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Engineering intelligence with purpose.
        </h1>

        <p className="mt-7 text-base leading-8 text-[#aab8ce]">
          I am an Artificial Intelligence postgraduate at the
          University of Surrey, with a background in Computer
          Science and Engineering. My technical interests span
          machine learning, computer vision, deep learning,
          natural language processing, and generative AI.
        </p>

        <p className="mt-5 text-base leading-8 text-[#aab8ce]">
          Through academic research and independent development,
          I have worked on intelligent systems for healthcare,
          biomedical imaging, language understanding, and
          evidence-grounded document analysis. I enjoy exploring
          how research ideas can be transformed into practical,
          reliable software.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">
          Areas of Expertise
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {expertise.map((item) => (
            <article key={item.title} className="panel p-6">
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Education</h2>

        <div className="panel mt-6 space-y-7 p-7">
          <div>
            <p className="font-mono text-xs text-[var(--signal)]">
              2025 — 2026
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              MSc Artificial Intelligence
            </h3>
            <p className="mt-1 text-[var(--muted)]">
              University of Surrey, United Kingdom
            </p>
          </div>

          <div className="border-t border-[var(--border)] pt-7">
            <h3 className="text-lg font-semibold">
              B.Tech Computer Science and Engineering
            </h3>
            <p className="mt-1 text-[var(--muted)]">
              Dr. M.G.R. Educational and Research Institute,
              India
            </p>
          </div>
        </div>
      </section>
    </WorkspaceShell>
  );
}
