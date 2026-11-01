import { useState } from "react"
import { classifyDemo } from "../../data/portfolio"

/* A simplified, honest picture of what a CNN returns: pick an item, see it move
   through input → features → prediction, and read the top-3 probabilities as
   coloured bars. It is a visualisation of the output shape, not the live model
   running in the browser (§11) — the caption says so. */
const BAR_COLORS = ["var(--data-a)", "var(--data-d)", "var(--data-f)"]

export default function ClassifyViz() {
  const [ii, setIi] = useState(0)
  const item = classifyDemo.items[ii]

  return (
    <div className="mathviz">
      {/* item selector */}
      <div className="flex flex-wrap gap-2">
        {classifyDemo.items.map((it, i) => (
          <button
            key={it.label}
            type="button"
            onClick={() => setIi(i)}
            aria-pressed={ii === i}
            className={`focus-ring border px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-colors ${
              ii === i
                ? "border-ink bg-clay-soft text-ink"
                : "border-hairline text-ink-3 hover:text-ink"
            }`}
          >
            {it.label}
          </button>
        ))}
      </div>

      {/* the forward pass */}
      <div className="mt-4 flex flex-wrap items-stretch gap-3">
        <div className="cv-tile" aria-label={`Input: ${item.label}`}>
          <span className="cv-tile-k">Input</span>
          <span className="cv-tile-img" style={{ background: BAR_COLORS[ii % BAR_COLORS.length] }} aria-hidden="true" />
          <span className="cv-tile-cap">{item.label}</span>
        </div>

        <span className="cv-arrow" aria-hidden="true">→</span>

        <div className="cv-stage">
          <span className="cv-stage-k">Features</span>
          <div className="cv-feats" aria-hidden="true">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="cv-feat"
                style={{ opacity: 0.25 + ((i * 37) % 10) / 14 }}
              />
            ))}
          </div>
          <span className="cv-stage-cap">edges · colour · texture</span>
        </div>

        <span className="cv-arrow" aria-hidden="true">→</span>

        <div className="cv-stage">
          <span className="cv-stage-k">CNN</span>
          <div className="cv-layers" aria-hidden="true">
            {[6, 8, 8, 4].map((n, l) => (
              <span key={l} className="cv-cl" style={{ height: `${n * 4}px` }} />
            ))}
          </div>
          <span className="cv-stage-cap">conv → pool → dense</span>
        </div>
      </div>

      {/* probabilities */}
      <div className="mt-5">
        <p className="mb-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-3">
          Prediction probabilities
        </p>
        <ul className="cv-probs">
          {item.probs.map((pr, i) => (
            <li key={pr.c} className="cv-prob">
              <span className="cv-prob-c">{pr.c}</span>
              <span className="cv-prob-track">
                <span
                  className="cv-prob-fill"
                  style={{ width: `${pr.p * 100}%`, background: BAR_COLORS[i % BAR_COLORS.length] }}
                />
              </span>
              <span className="cv-prob-v tabular-nums">{pr.p.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-3 text-[0.75rem] leading-[1.6] text-ink-4">{classifyDemo.note}</p>
    </div>
  )
}
