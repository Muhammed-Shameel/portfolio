import Section from "./Section"
import Reveal from "./Reveal"
import { experiences } from "../data/portfolio"

export default function Experience() {
  const last = experiences[experiences.length - 1]
  const years = experiences.flatMap((exp) => exp.period.match(/\d{4}/g) ?? [])
  const from = Math.min(...years.map(Number))
  const ongoing = experiences.some((exp) => /present/i.test(exp.period))
  const to = ongoing ? "Present" : Math.max(...years.map(Number))

  return (
    <Section id="experience" index="02" label="Experience" title="Where I've Worked">
      <div className="grid gap-12 md:grid-cols-12">
        {/* sticky rail */}
        <div className="md:col-span-4">
          <Reveal variant="reveal-fade" className="md:sticky md:top-32">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-clay">
              {from} — {to}
            </p>
            <p className="mt-6 text-[0.9rem] leading-[1.9] text-ink-3">
              Three roles, one through-line: take a messy problem, model it
              properly, and hand back something that runs. Internships at
              InfoCreon plus two years teaching mathematics.
            </p>
            <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-3">
              {last.location ?? "Kerala, India"}
            </p>
          </Reveal>
        </div>

        {/* timeline */}
        <div className="relative md:col-span-8">
          <span className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline" aria-hidden="true" />

          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <Reveal
                key={exp.role + exp.period}
                variant="reveal-right"
                delay={i}
                as="article"
                className="group relative pb-14 pl-10 last:pb-0"
              >
                {/* node */}
                <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-clay bg-paper transition-colors group-hover:bg-clay">
                  <span className="h-1.5 w-1.5 rounded-full bg-clay group-hover:bg-paper" />
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-3">
                    {exp.period}
                  </span>
                  <span className={`pill pill-${exp.status}`}>
                    {exp.status === "run" ? "Current" : "Completed"}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-[1.5rem] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[1.9rem]">
                  {exp.role}
                </h3>
                <p className="mt-1 text-[0.95rem] text-clay">{exp.org}</p>

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

                {exp.location && (
                  <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-4">
                    <i className="fa fa-location-dot mr-2" aria-hidden="true" />
                    {exp.location}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
