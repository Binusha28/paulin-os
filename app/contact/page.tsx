
import type { Metadata } from "next";
import WorkspaceShell from "@/components/WorkspaceShell";

export const metadata: Metadata = {
  title: "Contact | PAULIN.OS",
  description:
    "Connect with Paulin Binusha Sahayaranjan for opportunities in AI engineering, machine learning, computer vision, and research.",
};

const contactLinks = [
  {
    title: "LinkedIn",
    label: "Professional Network",
    description:
      "Explore my professional journey, academic achievements, projects, and career updates.",
    url: "https://www.linkedin.com/in/binusha028/",
    action: "Connect on LinkedIn",
  },
  {
    title: "GitHub",
    label: "Engineering Portfolio",
    description:
      "Explore my repositories, AI projects, technical experiments, and software development work.",
    url: "https://github.com/Binusha28",
    action: "Explore GitHub",
  },
];

const interests = [
  "AI Engineering",
  "Machine Learning",
  "Computer Vision",
  "Deep Learning",
  "Generative AI",
  "Research Engineering",
  "Python Development",
  "AI for Healthcare",
];

export default function ContactPage() {
  return (
    <WorkspaceShell section="Contact">
      <div className="max-w-5xl">
        {/* Introduction */}
        <header>
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
            NETWORK / CONTACT
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build
            <br />
            <span className="text-[#9b96ff]">
              something meaningful.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#aab8ce]">
            I&apos;m passionate about transforming complex
            challenges into practical AI solutions.
            With a background in Artificial Intelligence,
            machine learning, and software development,
            I enjoy building intelligent systems that
            solve real-world problems.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[#aab8ce]">
            I&apos;m interested in connecting with
            researchers, engineers, and organisations
            working on innovative technologies.
            Whether it&apos;s an opportunity to collaborate,
            contribute to a project, or discuss a
            potential role, I&apos;d be delighted to connect.
          </p>
        </header>

        {/* Contact links */}
        <section className="mt-12">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
            01 / CONNECT
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Find me online
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel group block p-7 transition-colors hover:border-[#9b96ff]"
              >
                <p className="font-mono text-xs tracking-wider text-[var(--signal)]">
                  {link.label.toUpperCase()}
                </p>

                <h3 className="mt-5 text-2xl font-semibold">
                  {link.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#aab8ce]">
                  {link.description}
                </p>

                <p className="mt-8 text-sm font-medium text-[#aaa6ff] group-hover:underline">
                  {link.action} ↗
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Career interests */}
        <section className="panel mt-12 p-7">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
            02 / OPPORTUNITIES
          </p>

          <h2 className="mt-4 text-2xl font-semibold">
            Where I want to contribute
          </h2>

          <p className="mt-4 leading-8 text-[#aab8ce]">
            I&apos;m particularly interested in graduate
            and junior-level opportunities where I can
            apply my knowledge of artificial intelligence,
            machine learning, and software engineering.
            I&apos;m motivated by collaborative environments
            that encourage innovation, continuous learning,
            and meaningful technical contributions.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-lg border border-[#344057] bg-[#1a2535] px-4 py-2 text-sm text-[#c0cbe0]"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Download CV */}
        <section className="panel mt-10 p-7 lg:p-10">
        <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
            03 / PROFESSIONAL RESUME
        </p>

        <h2 className="mt-4 text-2xl font-semibold">
            Explore My Professional Background
        </h2>

        <p className="mt-4 max-w-2xl leading-8 text-[#aab8ce]">
            Discover more about my academic journey, technical
            expertise, AI and machine learning projects,
            research achievements, and professional experience.
            Download my CV for a detailed overview.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
            <a
            href="/resume/Paulin_Binusha_CV.pdf"
            download="Paulin_Binusha_CV.pdf"
            className="inline-flex items-center justify-center rounded-lg bg-[#9b96ff] px-6 py-3 text-sm font-semibold text-[#0b1020] transition-colors hover:bg-[#b7b3ff]"
            >
            Download CV ↓
            </a>

            <a
            href="/resume/Paulin_Binusha_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-[#344057] bg-[#1a2535] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#253249]"
            >
            Preview CV ↗
            </a>
        </div>
        </section>

        {/* Professional availability */}
        <section className="mt-10 rounded-xl border border-[#344057] bg-[#101722] p-7">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)]">
            04 / AVAILABILITY
          </p>

          <h2 className="mt-4 text-2xl font-semibold">
            Open to opportunities
          </h2>

          <p className="mt-4 leading-8 text-[#aab8ce]">
            Based in the United Kingdom and open to
            opportunities across the UK, including
            on-site, hybrid, and remote roles.
            I&apos;m keen to contribute to teams building
            impactful AI-powered products and research
            solutions.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-[var(--border)] pt-7">
          <p className="font-mono text-xs text-[var(--muted)]">
            PAULIN.OS / OPEN TO PROFESSIONAL CONNECTIONS
          </p>

          <p className="mt-3 text-sm text-[#aab8ce]">
            Thank you for exploring my portfolio.
            I look forward to connecting and discovering
            opportunities to create meaningful impact
            through technology.
          </p>
        </footer>
      </div>
    </WorkspaceShell>
  );
}
