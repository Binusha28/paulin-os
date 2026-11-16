
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Overview", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "AI Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <aside className="border-b border-[var(--border)] bg-[#0d131e] p-5 lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:shrink-0 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:p-7">
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#292746] font-mono font-bold text-[#c4c0ff]">
            P.
          </span>

          <span className="text-xl font-semibold tracking-tight">
            PAULIN<span className="text-[#9b96ff]">.OS</span>
          </span>
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="portfolio-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#344057] bg-[#1a2535] text-[#d0cdff] transition-colors hover:bg-[#292746] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b96ff] lg:hidden"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      <p className="mt-3 font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">
        AI ENGINEERING ENVIRONMENT
      </p>

      <nav
        id="portfolio-navigation"
        aria-label="Main navigation"
        className={`mt-6 flex-col gap-2 lg:mt-8 lg:flex ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" &&
              pathname.startsWith(`${item.href}/`));

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b96ff] ${
                isActive
                  ? "bg-[#292746] font-medium text-[#d0cdff]"
                  : "text-[#aebbd0] hover:bg-[#202b40] hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
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
  );
}
