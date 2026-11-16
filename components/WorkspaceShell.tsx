
import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

type WorkspaceShellProps = {
  children: ReactNode;
  section: string;
};

export default function WorkspaceShell({
  children,
  section,
}: WorkspaceShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar />

        <main className="workspace-grid min-w-0 flex-1">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] px-6 py-5 lg:px-10">
            <span className="font-mono text-xs text-[var(--muted)]">
              WORKSPACE / {section.toUpperCase()}
            </span>
            <span className="font-mono text-xs text-[var(--signal)]">
              ● SYSTEM ONLINE
            </span>
          </header>

          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
