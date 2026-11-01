import { useState } from "react"
import Section from "./Section"
import Reveal from "./Reveal"
import { whyDataScience } from "../data/portfolio"
import VectorCosine from "./math/VectorCosine"
import ProbabilityDist from "./math/ProbabilityDist"
import DecisionBoundary from "./math/DecisionBoundary"
import NeuralNetViz from "./math/NeuralNetViz"
import SystemsPipeline from "./math/SystemsPipeline"

/* Not a career timeline — a stack you can click into. Each layer answers "what
   does this actually look like?" with a live, colourful visual inside a quiet
   monochrome frame. The interface stays gray; the data carries the colour. */
const VIZ = {
  vectors: VectorCosine,
  distribution: ProbabilityDist,
  boundary: DecisionBoundary,
  neural: NeuralNetViz,
  pipeline: SystemsPipeline,
}

export default function WhyDataScience() {
  const [active, setActive] = useState(0)
  const layer = whyDataScience.layers[active]
  const Viz = VIZ[layer.viz]

  return (
    <Section
      id="why"
      index="01"
      label="Why Data Science"
      title="Why Data Science"
      alternate
      rule
      wide={false}
    >
      <Reveal
        as="p"
        variant="reveal-fade"
        className="mb-12 max-w-[640px] text-[1.05rem] leading-[1.7] text-ink"
      >
        {whyDataScience.intro}
      </Reveal>

      <div className="why-grid">
        {/* the stack — click a layer */}
        <Reveal as="div" variant="reveal-fade">
          <ul className="why-layers" role="tablist" aria-label="From mathematics to systems">
            {whyDataScience.layers.map((l, i) => {
              const on = i === active
              return (
                <li key={l.key} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-controls="why-panel"
                    onClick={() => setActive(i)}
                    className={`why-layer ${on ? "is-active" : ""}`}
                  >
                    <span className="why-layer-n">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="why-layer-name">{l.name}</span>
                    </span>
                    <span className="why-layer-glyph">{l.glyph}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </Reveal>

        {/* the live panel */}
        <div
          id="why-panel"
          role="tabpanel"
          className="why-panel"
          key={layer.key}
        >
          <Reveal variant="reveal-fade">
            <ul className="why-panel-items">
              {layer.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
            <p className="why-panel-cap">{layer.caption}</p>
            <Viz />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
