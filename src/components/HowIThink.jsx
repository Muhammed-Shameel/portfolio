import { useState } from "react"
import Section from "./Section"
import Reveal from "./Reveal"
import NeuralNetViz from "./math/NeuralNetViz"
import VectorCosine from "./math/VectorCosine"
import { howIThink } from "../data/portfolio"

/* The method, made selectable. Clicking a stage brings its reasoning forward so
   the loop reads as a process I move through, not a static list — and two small
   maths toys carry the point better than a paragraph could. */
export default function HowIThink() {
  const [active, setActive] = useState(0)
  const stage = howIThink.stages[active]

  return (
    <Section id="thinking" index="03" label="How I think" title="Not just the model">
      <Reveal
        as="p"
        variant="reveal-left"
        className="mb-14 max-w-[760px] font-display text-[1.4rem] font-bold leading-[1.35] tracking-[-0.02em] text-ink md:text-[2.1rem]"
      >
        {howIThink.title}
      </Reveal>

      {/* the flow */}
      <Reveal variant="reveal-fade" className="think-flow" role="group" aria-label="My working process">
        {howIThink.stages.map((s, i) => (
          <span key={s.name} className="think-step-wrap">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`think-step focus-ring ${active === i ? "is-active" : ""}`}
            >
              <span className="think-step-n">{String(i + 1).padStart(2, "0")}</span>
              {s.name}
            </button>
            {i < howIThink.stages.length - 1 && (
              <span className="think-arrow" aria-hidden="true">↓</span>
            )}
          </span>
        ))}
      </Reveal>

      {/* the reasoning for the selected stage */}
      <div className="mt-8 border-l-2 border-clay bg-clay-soft px-6 py-5">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-clay">
          {String(active + 1).padStart(2, "0")} — {stage.name}
        </p>
        <p className="mt-2 text-[1.02rem] leading-[1.7] text-ink">{stage.note}</p>
      </div>

      {/* the honest contrast */}
      <Reveal
        as="div"
        variant="reveal-fade"
        className="mt-10 flex flex-col gap-4 border-y border-hairline py-7 md:flex-row md:items-center md:justify-between"
      >
        <p className="crossed font-mono text-[0.82rem] uppercase tracking-[0.14em] text-ink-4">
          {howIThink.anti}
        </p>
        <p className="font-mono text-[0.82rem] uppercase tracking-[0.14em] text-ink-2">
          {howIThink.loop.map((w, i) => (
            <span key={w}>
              {i > 0 && <span className="text-clay"> → </span>}
              {w}
            </span>
          ))}
        </p>
      </Reveal>

      {/* two maths toys */}
      <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
        <Reveal variant="reveal-left">
          <NeuralNetViz />
          <p className="mt-4 text-[0.85rem] leading-[1.8] text-ink-3">
            A neuron is a weighted sum and a bend. Nothing about it needs to be
            taken on faith — that is the part my mathematics background lets me
            read directly.
          </p>
        </Reveal>
        <Reveal variant="reveal-right" delay={1}>
          <VectorCosine />
        </Reveal>
      </div>
    </Section>
  )
}
