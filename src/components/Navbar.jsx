import { useState } from "react"
import { navLinks, profile } from "../data/portfolio"
import { useScrolled } from "../hooks/useScrollState"
import { useScrollProgress, useActiveSection } from "../hooks/useScrollProgress"
import ThemeToggle from "./ThemeToggle"

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const progress = useScrollProgress()
  // hero is included so that nothing is underlined while it owns the viewport
  const active = useActiveSection(["hero", ...sectionIds])
  const close = () => setOpen(false)

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-colors duration-300 ${
        solid
          ? "border-b border-hairline bg-paper/90 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-6 px-6 md:px-10">
        {/* wordmark + year */}
        <a
          href="#hero"
          onClick={close}
          className="focus-ring flex shrink-0 items-baseline gap-3"
        >
          <span className="font-display text-lg font-bold uppercase tracking-[-0.02em] text-ink">
            {profile.lastName}
            <span className="text-clay">.</span>
          </span>
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-3 xl:inline">
            Portfolio · 2026
          </span>
        </a>

        {/* desktop nav — only from lg, where there is room for six mono links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={close}
                aria-current={active === id ? "true" : undefined}
                className={`focus-ring relative px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] transition-colors ${
                  active === id ? "text-clay" : "text-ink-2 hover:text-ink"
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-clay transition-transform duration-300 ${
                    active === id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle />

          {/* availability */}
          <a
            href={profile.resumePath}
            download
            className="focus-ring hidden items-center gap-2.5 border border-hairline px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-clay hover:text-clay xl:inline-flex"
          >
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-pine" />
            Available for work
            <i className="fa fa-arrow-down text-[0.6rem]" aria-hidden="true" />
          </a>

          {/* mobile / tablet toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring flex flex-col gap-[5px] border-0 bg-transparent p-1 lg:hidden"
          >
            <span
              className={`block h-[2px] w-6 bg-ink-2 transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-ink-2 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-ink-2 transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* drawer */}
        <ul
          className={`fixed inset-x-0 top-[72px] flex-col gap-1 border-b border-hairline bg-paper/95 p-6 backdrop-blur-xl transition-all duration-300 lg:hidden ${
            open
              ? "flex translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-full opacity-0"
          }`}
        >
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={close}
                className={`focus-ring block py-2.5 font-mono text-[0.8rem] uppercase tracking-[0.16em] ${
                  active === id ? "text-clay" : "text-ink-2"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumePath}
              download
              onClick={() => setOpen(false)}
              className="focus-ring mt-3 flex items-center gap-2 border border-clay-line bg-clay-soft px-4 py-2.5 font-mono text-[0.8rem] uppercase tracking-[0.16em] text-clay"
            >
              <i className="fa fa-download text-[0.7rem]" aria-hidden="true" />
              Resume
            </a>
          </li>
          <li className="mt-1">
            <ThemeToggle full className="mt-2 py-2.5 text-[0.8rem]" />
          </li>
        </ul>
      </nav>

      {/* scroll progress hairline, flush with the bottom of the bar */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-clay transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  )
}
