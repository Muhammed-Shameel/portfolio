import Section from "./Section"
import Reveal from "./Reveal"
import { statement, terminalProfile, aboutTimeline } from "../data/portfolio"

const indentClass = ["", "pl-6", "pl-12"]
const tokenClass = {
  kw: "syn-kw",
  class: "syn-class",
  str: "syn-str",
  val: "syn-val",
  amber: "syn-amber",
  pine: "syn-pine",
  plain: "",
}

/* §20 — understand the background in ten seconds: a timeline, then one short
   paragraph. No giant About Me block. The terminal sits alongside as the same
   story told as code (a data surface, so it keeps its colour). */
export default function About() {
  return (
    <Section
      id="about"
      index="01"
      label="How I got here"
      title="How I Got Here"
      rule
      wide={false}
    >
      <Reveal
        as="p"
        variant="reveal-fade"
        className="mb-14 max-w-[720px] text-[1.1rem] leading-[1.6] tracking-[-0.01em] text-ink md:text-[1.35rem]"
      >
        {statement.lead}
      </Reveal>

      <div className="grid gap-12 md:grid-cols-12">
        {/* the timeline */}
        <div className="md:col-span-7">
          <ol className="about-tl">
            {aboutTimeline.map((step, i) => (
              <Reveal
                key={step.title}
                as="li"
                variant="reveal-rise"
                delay={i}
                className="about-tl-item"
              >
                <span className="about-tl-dot" aria-hidden="true" />
                <div className="about-tl-body">
                  <span className="about-tl-when">{step.when}</span>
                  <h3 className="font-display text-[1.2rem] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[1.45rem]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[0.9rem] leading-[1.75] text-ink-3">{step.note}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* terminal — the same identity, as a running file */}
        <Reveal variant="reveal-right" delay={1} className="terminal md:col-span-5">
          <div className="terminal-header flex items-center gap-2 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-auto font-mono text-[0.72rem] text-terminal-meta">
              profile.py
            </span>
          </div>

          <div className="px-6 py-5 font-mono text-[0.8rem] leading-[2]">
            {terminalProfile.map((line, i) => (
              <span key={i} className={`block ${indentClass[line.indent] ?? ""}`}>
                {line.tokens.map(([type, value], j) => (
                  <span key={j} className={tokenClass[type]}>
                    {value}
                  </span>
                ))}
              </span>
            ))}
            <span className="block text-terminal-meta">
              <span className="syn-pine">&gt;&gt;&gt;</span>{" "}
              <span className="animate-blink">&#9613;</span>
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
