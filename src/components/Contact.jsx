import Reveal from "./Reveal"
import { profile, socials, statement } from "../data/portfolio"

const actions = [
  { label: "Email", href: `mailto:${socials.email}`, icon: "fa fa-envelope" },
  { label: "GitHub", href: socials.github, icon: "fab fa-github" },
  { label: "LinkedIn", href: socials.linkedin, icon: "fab fa-linkedin-in" },
  {
    label: "Resume",
    href: profile.resumePath,
    icon: "fa fa-download",
    download: true,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-paper pb-20 pt-24 md:pb-28 md:pt-32"
    >
      <div className="hero-glow glow-amber animate-float-glow" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10">
        {/* mono eyebrow row */}
        <Reveal
          variant="reveal-fade"
          className="mb-16 flex flex-wrap items-start justify-between gap-6 border-t border-hairline pt-6 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-3"
        >
          <p className="text-clay">{profile.availability}</p>
          <p>Open for 2026 · Abu Dhabi, United Arab Emirates</p>
        </Reveal>

        <h2 className="display-hero">
          <Reveal as="span" variant="reveal-rise" className="block text-ink">
            Let&apos;s make
          </Reveal>
          <Reveal as="span" variant="reveal-rise" delay={1} className="outline-clay block">
            something
          </Reveal>
        </h2>

        <Reveal
          as="p"
          variant="reveal-fade"
          delay={2}
          className="mt-10 max-w-[560px] text-[0.92rem] leading-[1.9] text-ink-3"
        >
          {statement.contact}
        </Reveal>

        {/* direct actions — the CTA is not the only thing to click here */}
        <Reveal
          variant="reveal-fade"
          delay={3}
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-hairline pt-8"
        >
          {actions.map(({ label, href, icon, download }) => (
            <a
              key={label}
              href={href}
              download={download}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="focus-ring group inline-flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-2 transition-colors hover:text-clay"
            >
              <span className="h-px w-8 bg-hairline transition-all group-hover:w-12 group-hover:bg-clay" />
              <i className={icon} aria-hidden="true" />
              {label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
