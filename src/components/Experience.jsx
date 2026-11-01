import Section from "./Section"
import Reveal from "./Reveal"
import { experiences } from "../data/portfolio"

/* Read bottom-up like strata: the mathematics foundation, then cloud & data,
   then agentic, then applied AI. Same three months at one company, but the
   point is the climb through layers of the stack, not a job title. */
const chronological = [...experiences].reverse()

export default function Experience() {
  const years = experiences.flatMap((exp) => exp.period.match(/\d{4}/g) ?? [])
  const from = Math.min(...years.map(Number))
  const to = Math.max(...years.map(Number))

  return (
    <Section id="experience" index="05" label="Experience" title="Layers, Climbed" rule>
      <div className="grid gap-12 md:grid-cols-12">
        {/* sticky rail */}
        <div className="md:col-span-4">
          <Reveal variant="reveal-fade" className="md:sticky md:top-32">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-clay">
              {from} — {to}
            </p>
            <p className="mt-6 text-[0.9rem] leading-[1.9] text-ink-3">
              Four roles, one through-line: keep moving up the stack. Each layer
              taught me that the one below it is where the trust is won or lost.
            </p>

            {/* the progression, as a ladder */}
            <ul className="exp-ladder mt-8">
              {["Foundation", "Cloud & Data", "Agentic AI", "Applied AI"].map((step, i) => (
                <li key={step} className="exp-ladder-step" style={{ paddingLeft: `${i * 14}px` }}>
                  <span className="exp-ladder-n">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ul>

            <p className="mt-8 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-3">
              <i className="fa fa-location-dot mr-2" aria-hidden="true" />
              Kerala, India · Remote
            </p>
          </Reveal>
        </div>

        {/* the layers */}
        <div className="exp-strata relative md:col-span-8">
          {chronological.map((exp, i) => (
            <Reveal
              key={exp.role + exp.period}
              variant="reveal-right"
              delay={i}
              as="article"
              className="exp-layer group"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="exp-layer-tag">{exp.layer}</span>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-3">
                  {exp.period}
                </span>
              </div>

              <h3 className="mt-3 font-display text-[1.4rem] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[1.8rem]">
                {exp.role}
              </h3>
              <p className="mt-1 text-[0.95rem] text-clay">
                {exp.org} · {exp.location}
              </p>

              {exp.metric && (
                <p className="mt-4 inline-flex items-center gap-2 border border-hairline bg-card px-3 py-1.5 font-mono text-[0.72rem] text-ink-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pine" />
                  {exp.metric}
                </p>
              )}

              <ul className="mt-5 flex flex-col gap-2">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-4 text-[0.9rem] leading-[1.7] text-ink-2 before:absolute before:left-0 before:top-[0.6em] before:h-[5px] before:w-[5px] before:rounded-full before:bg-clay"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              {exp.stack?.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
