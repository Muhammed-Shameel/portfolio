import { useRef } from "react"
import Reveal from "./Reveal"
import HeroTransform from "./HeroTransform"
import { profile, socials, heroIdentity } from "../data/portfolio"
import { useTypedText } from "../hooks/useTypedText"
import { usePointerParallax } from "../hooks/usePointerMotion"

function HeroLink({ href, download, target, label, icon }) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target ? "noreferrer" : undefined}
      className="focus-ring group inline-flex items-center gap-3 border-b border-hairline pb-2 font-mono text-[0.78rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink-2 hover:text-ink-2"
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
      <div className="grain" />

      {/* corner meta */}
      <div className="absolute left-6 top-28 hidden max-w-[240px] font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-3 xl:left-8 xl:block">
        <p>Abu Dhabi, United Arab Emirates</p>
        <p className="mt-1 text-ink-2">{profile.availability}</p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* left: the identity */}
          <div className="lg:col-span-7">
            <Reveal
              as="p"
              variant="reveal-fade"
              className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-3"
            >
              <span className="h-px w-10 bg-ink-3" />
              Data Scientist · BSc Mathematics → ML
            </Reveal>

            {/* the name leads — large */}
            <h1 className="display-xl">
              <Reveal as="span" variant="reveal-rise" delay={1} className="block text-ink">
                {profile.firstName}
              </Reveal>
              <Reveal as="span" variant="reveal-rise" delay={2} className="block text-ink">
                {profile.lastName}
              </Reveal>
            </h1>

            {/* role */}
            <Reveal
              as="div"
              variant="reveal-fade"
              delay={3}
              className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-2"
            >
              <span className="font-mono text-[0.95rem] uppercase tracking-[0.24em] text-ink">
                {profile.role}
              </span>
              <span className="min-h-[1.5em] font-mono text-[0.8rem] text-ink-3">
                <span className="text-ink-4">&gt;&nbsp;</span>
                {typed}
                <span className="animate-blink ml-1">|</span>
              </span>
            </Reveal>

            {/* the identity statement */}
            <Reveal
              as="p"
              variant="reveal-rise"
              delay={4}
              className="mt-9 font-display text-[1.6rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink md:text-[2.4rem]"
            >
              From Mathematics{" "}
              <span className="outline-clay">to Machine Learning.</span>
            </Reveal>

            {/* supporting line — the brief's exact positioning */}
            <Reveal
              as="p"
              variant="reveal-fade"
              delay={5}
              className="mt-5 max-w-[540px] text-[1rem] leading-[1.7] text-ink-2 md:text-[1.1rem]"
            >
              {heroIdentity.tagline}
            </Reveal>

            <Reveal
              as="p"
              delay={5}
              className="mt-5 max-w-[560px] text-[0.92rem] leading-[1.85] text-ink-3"
            >
              {profile.heroBio}
            </Reveal>

            <Reveal
              delay={6}
              className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <HeroLink
                href="#projects"
                label="Read the case studies"
                icon="fa fa-arrow-right transition-transform group-hover:translate-x-1"
              />
              <HeroLink
                href="#why"
                label="Why data science"
                icon="fa fa-arrow-down transition-transform group-hover:translate-y-1"
              />
              <HeroLink
                href={profile.resumePath}
                download
                label="Download resume"
                icon="fa fa-arrow-down transition-transform group-hover:translate-y-1"
              />
              <HeroLink href={socials.github} target="_blank" label="GitHub" icon="fab fa-github" />
              <HeroLink href={`mailto:${socials.email}`} label="Email" icon="fa fa-envelope" />
            </Reveal>
          </div>

          {/* right: mathematics becoming intelligence */}
          <Reveal
            as="div"
            variant="reveal-fade"
            delay={3}
            className="lg:col-span-5"
          >
            <div className="hero-transform-wrap">
              <HeroTransform />
            </div>
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
