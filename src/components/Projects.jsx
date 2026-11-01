import { useMemo, useState } from "react"
import Section from "./Section"
import Reveal from "./Reveal"
import CaseStudy from "./CaseStudy"
import { caseStudies, projects } from "../data/portfolio"

/* Two deep case studies carry the reasoning; the rest stay a scannable index.
   The rows are plain content — title is the anchor, the preview is a collapsed
   grid row, no control nested inside another. */
export default function Projects() {
  const [filter, setFilter] = useState("All")

  const { categories, counts, rows } = useMemo(() => {
    const cats = ["All", ...new Set(projects.flatMap((p) => p.categories))]
    const list = projects.map((project, i) => ({ ...project, n: i + 1 }))
    return {
      categories: cats,
      counts: Object.fromEntries(
        cats.map((c) => [
          c,
          c === "All"
            ? list.length
            : list.filter((p) => p.categories.includes(c)).length,
        ]),
      ),
      rows: list.filter((p) => filter === "All" || p.categories.includes(filter)),
    }
  }, [filter])

  return (
    <Section id="projects" index="07" label="Case Studies" title="Work, Worked Through">
      <Reveal
        as="p"
        variant="reveal-fade"
        className="mb-14 max-w-[680px] text-[1.02rem] leading-[1.7] text-ink-2"
      >
        The two below are shown the way I actually approached them — problem,
        data, reasoning, what failed, what changed, what it measured. The rest is
        an index you can filter.
      </Reveal>

      {/* featured case studies */}
      <div className="flex flex-col gap-20 md:gap-28">
        {caseStudies.map((study, i) => (
          <CaseStudy key={study.id} study={study} index={i + 1} />
        ))}
      </div>

      {/* the remaining index */}
      <div className="mt-24">
        <h3 className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-3">
          More work
        </h3>

        <div className="filter-bar mb-4 mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
          {categories.map((category) => {
            const isOn = filter === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isOn}
                onClick={() => setFilter(category)}
                className={`focus-ring group/chip relative font-mono text-[0.7rem] uppercase tracking-[0.16em] transition-colors ${
                  isOn ? "text-clay" : "text-ink-3 hover:text-ink"
                }`}
              >
                {category}
                <span className={isOn ? "text-clay" : "text-ink-3"}>
                  {" "}
                  ({counts[category]})
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1.5 left-0 h-[2px] bg-clay transition-all duration-300 ${
                    isOn ? "w-full" : "w-0 group-hover/chip:w-full"
                  }`}
                />
              </button>
            )
          })}

          <span className="ml-auto flex items-center gap-5 font-mono text-[0.7rem] uppercase tracking-[0.16em]">
            <span aria-live="polite" className="text-ink-3">
              Showing {rows.length} of {projects.length}
            </span>
            {filter !== "All" && (
              <button
                type="button"
                onClick={() => setFilter("All")}
                className="focus-ring text-ink-3 underline underline-offset-4 transition-colors hover:text-clay"
              >
                Reset
              </button>
            )}
          </span>
        </div>

        <div className="flex flex-col">
          {rows.map((project, i) => {
            const isLive = project.status === "run"
            return (
              <Reveal
                key={project.title}
                variant="reveal-fade"
                delay={i % 3}
                as="article"
                className="group border-t border-hairline last:border-b"
              >
                <div className="grid items-start gap-x-6 gap-y-3 px-2 py-7 transition-colors duration-300 group-hover:bg-clay-soft md:grid-cols-12 md:px-6">
                  <span className="font-display text-[2.2rem] font-bold leading-none tracking-[-0.04em] text-ink-4 transition-colors group-hover:text-clay md:col-span-2 md:text-[3.2rem]">
                    {String(project.n).padStart(2, "0")}
                  </span>

                  <h4 className="font-display text-[1.4rem] font-bold leading-tight tracking-[-0.03em] text-ink md:col-span-7 md:text-[2rem]">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor={isLive ? "LIVE" : "VIEW"}
                        className="focus-ring flex items-baseline gap-4"
                      >
                        <span className="relative inline-block">
                          {project.title}
                          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-clay transition-all duration-300 group-hover:w-full" />
                        </span>
                        <i
                          className="fa fa-arrow-up-right-from-square text-[0.55em] text-ink-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-clay"
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <span className="flex items-baseline gap-4">
                        {project.title}
                        <span className="font-mono text-[0.58rem] font-normal uppercase tracking-[0.18em] text-ink-4">
                          Client work
                        </span>
                      </span>
                    )}
                  </h4>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 md:col-span-3 md:justify-end">
                    <span className={`pill pill-${project.status}`}>
                      {project.statusLabel}
                    </span>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-3">
                      {project.categories.join(" · ")} — {project.period}
                    </p>
                  </div>

                  <div className="preview-row md:col-span-12">
                    <div>
                      <div className="grid gap-x-6 gap-y-5 border-t border-dashed border-hairline px-1 pb-7 pt-6 md:grid-cols-12 md:px-1">
                        <p className="text-[0.9rem] leading-[1.8] text-ink-3 md:col-span-5">
                          {project.description}
                        </p>

                        <div className="md:col-span-4">
                          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-3">
                            Stack
                          </span>
                          <ul className="mt-2.5 flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                              <li key={t} className="tag">
                                {t}
                              </li>
                            ))}
                          </ul>
                          <p className="mt-3 max-w-[420px] text-[0.82rem] leading-[1.7] text-ink-2">
                            {project.outcome}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:col-span-3 md:justify-end">
                          {isLive && (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="LIVE"
                              className="focus-ring inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-clay hover:text-clay-dark"
                            >
                              <i className="fa fa-arrow-up-right-from-square" aria-hidden="true" />
                              Live
                            </a>
                          )}
                          {project.href && (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="SOURCE"
                              className="focus-ring inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-3 hover:text-clay"
                            >
                              <i className="fab fa-github" aria-hidden="true" />
                              Source
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
