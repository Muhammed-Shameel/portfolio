import Reveal from "./Reveal"
import { profile, socials } from "../data/portfolio"

const year = new Date().getFullYear()

const links = [
  { label: "GitHub", href: socials.github, icon: "fab fa-github" },
  { label: "LinkedIn", href: socials.linkedin, icon: "fab fa-linkedin-in" },
  { label: "Email", href: `mailto:${socials.email}`, icon: "fa fa-envelope" },
  { label: "Resume", href: profile.resumePath, icon: "fa fa-download", download: true },
]

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-paper-2 px-6 pb-10 pt-16 md:px-10 md:pt-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal
          as="p"
          variant="reveal-fade"
          className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-ink-3"
        >
          Thanks for visiting
        </Reveal>

        {/* giant email link */}
        <Reveal variant="reveal-fade" delay={1} className="mt-6">
          <a
            href={`mailto:${socials.email}`}
            className="group block max-w-full break-words font-display text-[clamp(1.15rem,5.5vw,3.8rem)] font-bold leading-none tracking-[-0.03em] text-ink transition-colors hover:text-clay"
          >
            <span className="relative inline break-words">
              {socials.email}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-clay transition-all duration-500 group-hover:w-full" />
            </span>
          </a>
        </Reveal>

        {/* mono link row */}
        <Reveal
          variant="reveal-fade"
          delay={2}
          className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-hairline pt-8"
        >
          {links.map(({ label, href, icon, download }) => (
            <a
              key={label}
              href={href}
              download={download}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group inline-flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-2 transition-colors hover:text-clay"
            >
              <span className="h-px w-8 bg-hairline transition-all group-hover:w-12 group-hover:bg-clay" />
              <i className={icon} aria-hidden="true" />
              {label}
            </a>
          ))}
        </Reveal>

        {/* bottom bar */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-hairline pt-8 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-4">
          <p>
            © {year} {profile.firstName} {profile.lastName} — All rights reserved
          </p>
          <a
            href="#hero"
            className="group inline-flex items-center gap-3 transition-colors hover:text-clay"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline transition-all group-hover:border-clay group-hover:bg-clay group-hover:text-paper">
              <i className="fa fa-arrow-up text-[0.6rem]" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
