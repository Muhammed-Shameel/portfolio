import Section from "./Section"
import Reveal from "./Reveal"
import { skillTiers, stackLine, marqueeWords } from "../data/portfolio"

/* Not a logo wall. The skills are ordered by where they sit in how I work —
   a foundation that supports models, that support AI, that need engineering to
   become anything. The flow line at the top is the point; the groups hang off it. */
const FLOWS = ["Foundation", "Models", "AI", "Engineering"]

export default function Skills() {
  return (
    <Section id="skills" index="06" label="Skills" title="How I Actually Work" alternate rule>
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
                  <span className="ml-12 h-2 w-2 shrink-0 rounded-full bg-clay" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      {/* the flow line */}
      <Reveal
        variant="reveal-fade"
        className="mb-14 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-3"
      >
        {FLOWS.map((flow, i) => (
          <span key={flow} className="flex items-center gap-4">
            <span className="skill-flow-chip">{flow}</span>
            {i < FLOWS.length - 1 && <span className="text-clay">→</span>}
          </span>
        ))}
      </Reveal>

      {/* tiers, grouped under each flow */}
      <div className="flex flex-col gap-12">
        {FLOWS.map((flow) => {
          const groups = skillTiers.filter((g) => g.flow === flow)
          return (
            <Reveal key={flow} variant="reveal-fade" as="div" className="skill-block">
              <div className="skill-block-head">
                <span className="skill-flow-label">{flow}</span>
                <span className="h-px flex-1 bg-hairline" />
              </div>
              <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                {groups.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-display text-[1.25rem] font-bold tracking-[-0.02em] text-ink md:text-[1.5rem]">
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
            </Reveal>
          )
        })}
      </div>

      <Reveal
        as="p"
        variant="reveal-fade"
        className="mt-14 font-mono text-[0.72rem] uppercase leading-[2] tracking-[0.14em] text-ink-3"
      >
        <span className="text-clay">The line</span> — {stackLine}
      </Reveal>
    </Section>
  )
}
