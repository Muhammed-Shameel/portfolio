import Reveal from "./Reveal"
import BeforeAfterSlider from "./math/BeforeAfterSlider"
import ClassifyViz from "./math/ClassifyViz"
import RAGFlow from "./math/RAGFlow"
import FactorToggles from "./math/FactorToggles"

/* A project rendered as the working-out it actually was: the problem, the data,
   the reasoning, what failed, what changed, and the measurable result — not a
   title, a blurb and a row of logos. */
const FIELDS = [
  ["problem", "Problem"],
  ["data", "Data"],
  ["reasoning", "Reasoning"],
  ["experiment", "Experiment"],
  ["failure", "Failure / limitation"],
  ["improvement", "Improvement"],
  ["result", "Result"],
  ["engineering", "Engineering"],
]

export default function CaseStudy({ study, index }) {
  const hasMetrics = Array.isArray(study.metrics) && study.metrics.length > 0

  return (
    <article className="case-study">
      {/* header */}
      <Reveal variant="reveal-fade" className="case-head">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="case-n">{String(index).padStart(2, "0")}</span>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-clay">
            {study.kicker}
          </span>
        </div>
        <h3 className="mt-3 font-display text-[1.9rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink md:text-[3rem]">
          {study.title}
        </h3>
        <p className="mt-3 max-w-[620px] text-[1rem] leading-[1.6] text-ink-2">
          {study.subtitle}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <span className={`pill pill-${study.status}`}>{study.statusLabel}</span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-3">
            {study.period}
          </span>
          {study.href && (
            <a
              href={study.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="LIVE"
              className="focus-ring inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-clay hover:text-clay-dark"
            >
              <i className="fa fa-arrow-up-right-from-square" aria-hidden="true" /> Live
            </a>
          )}
          {study.repo && (
            <a
              href={study.repo}
              target="_blank"
              rel="noreferrer"
              data-cursor="SOURCE"
              className="focus-ring inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-3 hover:text-clay"
            >
              <i className="fab fa-github" aria-hidden="true" /> Source
            </a>
          )}
        </div>
      </Reveal>

      {/* the measurable before → after, as interaction not a wall of numbers */}
      {hasMetrics && (
        <Reveal variant="reveal-fade" className="mt-10 grid gap-6 sm:grid-cols-3">
          {study.metrics.map((m) => (
            <BeforeAfterSlider key={m.label} metric={m} />
          ))}
        </Reveal>
      )}

      {/* Grocery AI: let the visitor actually SEE the two systems it is made of */}
      {study.id === "grocery-ai" && (
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal variant="reveal-fade" className="border border-hairline bg-card p-6">
            <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-3">
              Computer vision — what the classifier returns
            </p>
            <ClassifyViz />
          </Reveal>
          <Reveal variant="reveal-fade" delay={1} className="border border-hairline bg-card p-6">
            <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-3">
              Retrieval (RAG) — how an answer stays grounded
            </p>
            <RAGFlow />
          </Reveal>
        </div>
      )}

      {/* football: the relatable "structure in the data" interaction (§13) */}
      {study.id === "premier-league" && (
        <Reveal variant="reveal-fade" className="mt-10 border border-hairline bg-card p-6">
          <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-3">
            36 raw stats → 5 ability factors — toggle them, watch a player change shape
          </p>
          <FactorToggles />
        </Reveal>
      )}

      {/* fact chips */}
      {study.facts?.length > 0 && (
        <Reveal variant="reveal-fade" className="mt-8 flex flex-wrap gap-2">
          {study.facts.map((f) => (
            <span key={f} className="tag">
              {f}
            </span>
          ))}
        </Reveal>
      )}

      {/* the working-out */}
      <dl className="case-fields">
        {FIELDS.filter(([key]) => study[key]).map(([key, label], i) => (
          <Reveal
            key={key}
            variant="reveal-fade"
            delay={i % 4}
            as="div"
            className="case-field"
          >
            <dt className="case-field-label">{label}</dt>
            <dd className="case-field-body">{study[key]}</dd>
          </Reveal>
        ))}
      </dl>
    </article>
  )
}
