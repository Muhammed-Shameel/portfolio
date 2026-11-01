import Section from "./Section"
import Reveal from "./Reveal"
import ProbabilityDist from "./math/ProbabilityDist"
import { equationToSystem } from "../data/portfolio"

/* The signature idea: a single equation, then zoom all the way out to a running
   system. The equation is the smallest thing here and the application the
   largest — the whole point is that ML lives in the space between them. */
export default function EquationToSystem() {
  const { seed, layers, point } = equationToSystem

  return (
    <Section
      id="systems"
      index="04"
      label="Equation → System"
      title="From Equation to System"
      alternate
      rule
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          {/* the seed equation */}
          <Reveal variant="reveal-fade" className="eq-seed">
            <span className="eq-glyph">{seed}</span>
            <span className="eq-tag">one line — everything it takes to make it real ↓</span>
          </Reveal>

          {/* zoom-out chain */}
          <Reveal variant="reveal-fade" delay={1} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-3">
            {layers.map((l, i) => (
              <span key={l.label} className="flex items-center gap-3">
                <span className={i === layers.length - 1 ? "text-clay" : "text-ink-2"}>
                  {l.label}
                </span>
                {i < layers.length - 1 && <span className="text-clay">→</span>}
              </span>
            ))}
          </Reveal>

          {/* expanding layer cards */}
          <ol className="eq-layers">
            {layers.map((l, i) => (
              <Reveal
                key={l.label}
                as="li"
                variant="reveal-rise"
                delay={i}
                className="eq-layer"
              >
                <span className="eq-layer-n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-[1.15rem] font-bold tracking-[-0.02em] text-ink md:text-[1.4rem]">
                    {l.label}
                  </h3>
                  <p className="mt-1 text-[0.86rem] leading-[1.7] text-ink-3">{l.note}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal
            as="p"
            variant="reveal-fade"
            className="mt-10 max-w-[560px] border-l-2 border-clay pl-5 text-[1.05rem] leading-[1.6] text-ink"
          >
            {point}
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal variant="reveal-right" className="md:sticky md:top-32">
            <div className="border border-hairline bg-card p-6">
              <p className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-3">
                The prediction is a distribution, not a number
              </p>
              <ProbabilityDist />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
