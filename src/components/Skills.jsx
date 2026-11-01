import { useState } from "react"
import Section from "./Section"
import Reveal from "./Reveal"
import { skillTiers, stackLine, marqueeWords } from "../data/portfolio"

/* Not a logo wall and not a list of badges — a map of what I can currently do,
   grouped by where each skill sits in the work. Foundation supports models,
   models support AI, AI needs engineering to become anything. Click a band to
   open it. */
const FLOWS = ["Foundation", "Models", "AI", "Engineering"]

export default function Skills() {
  // which flow bands are open — Foundation by default
  const [open, setOpen] = useState(() => new Set(["Foundation"]))
  const toggle = (flow) =>
    setOpen((cur) => {
      const next = new Set(cur)
      next.has(flow) ? next.delete(flow) : next.add(flow)
      return next
    })

  return (
    <Section id="skills" index="04" label="Skills" title="The Data Science Toolbox" alternate rule>
      {/* marquee strip */}
      <Reveal variant="reveal-fade" className="marquee bleed-x mb-16 py-4">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {marqueeWords.map((word) => (
                <span
                  key={`${copy}-${word}`}
                  className="display-xl outline-ink flex items-center whitespace-nowrap px-6"
                >
                  {word}
                  <span className="ml-12 h-2 w-2 shrink-0 rounded-full bg-ink-4" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      {/* the flow line */}
      <Reveal
        variant="reveal-fade"
        className="mb-12 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-3"
      >
        {FLOWS.map((flow, i) => (
          <span key={flow} className="flex items-center gap-4">
            <span className="skill-flow-chip">{flow}</span>
            {i < FLOWS.length - 1 && <span className="text-ink-4">→</span>}
          </span>
        ))}
      </Reveal>

      {/* clickable capability bands */}
      <div className="flex flex-col gap-4">
        {FLOWS.map((flow, fi) => {
          const groups = skillTiers.filter((g) => g.flow === flow)
          const count = groups.reduce((n, g) => n + g.items.length, 0)
          const isOpen = open.has(flow)
          return (
            <Reveal key={flow} variant="reveal-fade" delay={fi} as="div" className="skill-band">
              <button
                type="button"
                onClick={() => toggle(flow)}
                aria-expanded={isOpen}
                className="focus-ring skill-band-head"
              >
                <span className="flex items-baseline gap-4">
                  <span className="skill-band-n">{String(fi + 1).padStart(2, "0")}</span>
                  <span className="skill-flow-label">{flow}</span>
                  <span className="hidden text-[0.85rem] text-ink-3 sm:inline">
                    {groups.map((g) => g.title).join(" · ")}
                  </span>
                </span>
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[0.68rem] text-ink-4">{count} tools</span>
                  <i className={`fa ${isOpen ? "fa-minus" : "fa-plus"} text-[0.7rem] text-ink-3`} aria-hidden="true" />
                </span>
              </button>

              {isOpen && (
                <div className="skill-band-body">
                  {groups.map((group) => (
                    <div key={group.title}>
                      <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-3">
                        {group.title}
                      </h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <li key={item} className="tag">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          )
        })}
      </div>

      <Reveal
        as="p"
        variant="reveal-fade"
        className="mt-14 font-mono text-[0.72rem] uppercase leading-[2] tracking-[0.14em] text-ink-3"
      >
        <span className="text-ink">The line</span> — {stackLine}
      </Reveal>
    </Section>
  )
}
