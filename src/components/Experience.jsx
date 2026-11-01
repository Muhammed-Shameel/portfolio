import { useState } from "react"
import Section from "./Section"
import Reveal from "./Reveal"
import { experiences } from "../data/portfolio"

/* Read bottom-up like strata: mathematics foundation, then cloud & data, then
   agentic, then applied AI. Each layer is a click — open it for the problem,
   what I built, the stack and the result. The climb through the stack is the
   story, not the job title. */
const chronological = [...experiences].reverse()

export default function Experience() {
  const years = experiences.flatMap((exp) => exp.period.match(/\d{4}/g) ?? [])
  const from = Math.min(...years.map(Number))
  const to = Math.max(...years.map(Number))
  // newest layer open by default
  const [open, setOpen] = useState(() => new Set([chronological.length - 1]))

  const toggle = (i) =>
    setOpen((cur) => {
      const next = new Set(cur)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  return (
    <Section id="experience" index="03" label="Experience" title="Layers, Climbed" rule>
      <div className="grid gap-12 md:grid-cols-12">
        {/* sticky rail */}
        <div className="md:col-span-4">
          <Reveal variant="reveal-fade" className="md:sticky md:top-32">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-3">
              {from} — {to}
            </p>
            <p className="mt-6 text-[0.9rem] leading-[1.9] text-ink-3">
              Four roles, one through-line: keep moving up the stack. Each layer
              taught me that the one below it is where the trust is won or lost.
              Open any layer to see the problem, the build, the stack and the result.
            </p>

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

        {/* the layers — click to expand */}
        <div className="exp-strata relative md:col-span-8">
          {chronological.map((exp, i) => {
            const isOpen = open.has(i)
            return (
              <Reveal
                key={exp.role + exp.period}
                variant="reveal-right"
                delay={i}
                as="article"
                className="exp-layer"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="focus-ring group flex w-full flex-col gap-2 text-left"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="exp-layer-tag">{exp.layer}</span>
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-3">
                      {exp.period}
                    </span>
                    <i
                      className={`fa ${isOpen ? "fa-minus" : "fa-plus"} ml-auto text-[0.7rem] text-ink-4`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display text-[1.4rem] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[1.8rem]">
                    {exp.role}
                  </h3>
                  <p className="text-[0.95rem] text-ink-2">
                    {exp.org} · {exp.location}
                  </p>
                </button>

                {isOpen && (
                  <div className="exp-detail">
                    {exp.problem && (
                      <div className="exp-fact">
                        <span className="exp-fact-k">Problem</span>
                        <p>{exp.problem}</p>
                      </div>
                    )}

                    <div className="exp-fact">
                      <span className="exp-fact-k">What I built</span>
                      <ul className="flex flex-col gap-2">
                        {exp.bullets.map((bullet) => (
                          <li key={bullet} className="exp-bullet">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.metric && (
                      <div className="exp-fact">
                        <span className="exp-fact-k">Result</span>
                        <p className="inline-flex items-center gap-2 border border-hairline bg-card px-3 py-1.5 font-mono text-[0.74rem] text-ink-2">
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: "var(--data-b)" }}
                          />
                          {exp.metric}
                        </p>
                      </div>
                    )}

                    {exp.stack?.length > 0 && (
                      <div className="exp-fact">
                        <span className="exp-fact-k">Technology</span>
                        <ul className="flex flex-wrap gap-2">
                          {exp.stack.map((s) => (
                            <li key={s} className="tag">
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
