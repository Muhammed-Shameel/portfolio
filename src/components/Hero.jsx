import { useRef } from "react"
import Reveal from "./Reveal"
import { profile, socials } from "../data/portfolio"
import { useTypedText } from "../hooks/useTypedText"
import { usePointerParallax, useMagnetic } from "../hooks/usePointerMotion"

function HeroLink({ href, download, target, label, icon, magnetic }) {
  const ref = useMagnetic(4)
  return (
    <a
      ref={magnetic ? ref : undefined}
      href={href}
      download={download}
      target={target}
      rel={target ? "noreferrer" : undefined}
      className="focus-ring group inline-flex items-center gap-3 border-b border-hairline pb-2 font-mono text-[0.78rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-clay hover:text-clay"
    >
      {label}
      <i className={icon} aria-hidden="true" />
    </a>
  )
}

export default function Hero() {
  const typed = useTypedText(profile.typedRoles)
  const sectionRef = useRef(null)
  usePointerParallax(sectionRef)

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-paper pt-[72px]"
    >
      <div className="hero-grid" />
      <div className="hero-glow glow-warm animate-float-glow" />
      <div className="grain" />

      {/* corner meta — only when the display type has room for it */}
      <div className="absolute left-6 top-28 hidden max-w-[240px] font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-3 xl:left-8 xl:block">
        <p>Abu Dhabi, United Arab Emirates</p>
        <p className="mt-1 text-clay">{profile.availability}</p>
      </div>

      {/* same container as every Section, so the columns line up below */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10">
        <div className="max-w-[1160px]">
          <Reveal
            as="p"
            variant="reveal-fade"
            className="mb-6 flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-3"
          >
            <span className="h-px w-10 bg-clay" />
            Portfolio · 2026
          </Reveal>

          <h1 className="mb-10">
            <Reveal
              as="span"
              variant="reveal-rise"
              delay={1}
              className="block"
            >
              <span className="crossed outline-ink display-hero">
                {profile.firstName}
              </span>
            </Reveal>
            <Reveal as="span" variant="reveal-rise" delay={2} className="block">
              <span className="display-hero block text-ink">
                {profile.display}
              </span>
            </Reveal>
          </h1>

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal
              as="p"
              delay={3}
              className="max-w-[560px] text-[0.95rem] leading-[1.85] text-ink-2 md:col-span-7"
            >
              {profile.heroBio}
            </Reveal>

            <Reveal
              as="div"
              delay={4}
              className="font-mono md:col-span-5 md:text-right"
            >
              <p className="min-h-[1.5em] text-[0.9rem] text-clay">
                {typed}
                <span className="animate-blink ml-1">|</span>
              </p>
              <p className="mt-2 text-[0.72rem] uppercase tracking-[0.18em] text-ink-3">
                {profile.role}
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={5}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <HeroLink
              href="#projects"
              label="View projects"
              icon="fa fa-arrow-right transition-transform group-hover:translate-x-1"
              magnetic
            />
            <HeroLink
              href={profile.resumePath}
              download
              label="Download resume"
              icon="fa fa-arrow-down transition-transform group-hover:translate-y-1"
              magnetic
            />
            <HeroLink
              href={socials.github}
              target="_blank"
              label="GitHub"
              icon="fab fa-github"
            />
            <HeroLink
              href={`mailto:${socials.email}`}
              label="Email"
              icon="fa fa-envelope"
            />
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 hidden flex-col items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-4 md:right-8 md:flex [writing-mode:vertical-lr]">
        <span>scroll</span>
        <span className="animate-scroll-drop block h-[60px] w-px bg-gradient-to-b from-ink-4 to-transparent" />
      </div>
    </section>
  )
}
