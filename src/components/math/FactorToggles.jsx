import { useState } from "react"
import { abilityFactors } from "../../data/portfolio"

/* 36 raw columns collapse to 5 latent abilities. Pick a player archetype and
   switch factors off — the representation physically changes shape. The point is
   the sentence under it: I don't just see columns, I look for structure. */
const CX = 150
const CY = 118
const R = 92

export default function FactorToggles() {
  const { factors, players } = abilityFactors
  const [pi, setPi] = useState(0)
  const [on, setOn] = useState(() => factors.map(() => true))

  const player = players[pi]
  const active = factors.filter((_, i) => on[i])
  const m = active.length

  const pointFor = (name, value) => {
    const idx = active.indexOf(name)
    const angle = (-90 + (idx * 360) / m) * (Math.PI / 180)
    const r = value * R
    return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) }
  }

  const poly = m >= 2
    ? active.map((f) => {
        const p = pointFor(f, player.values[f])
        return `${p.x.toFixed(1)},${p.y.toFixed(1)}`
      }).join(" ")
    : ""

  const toggle = (i) =>
    setOn((cur) => {
      const next = cur.map((v, j) => (j === i ? !v : v))
      // never leave fewer than two axes — a shape needs at least two
      if (next.filter(Boolean).length < 2) return cur
      return next
    })

  return (
    <div className="mathviz">
      <div className="flex flex-wrap items-center gap-3">
        {players.map((p, i) => (
          <button
            key={p.name}
            type="button"
            onClick={() => setPi(i)}
            aria-pressed={pi === i}
            className={`focus-ring border px-3 py-1.5 font-mono text-[0.68rem] transition-colors ${
              pi === i ? "border-ink bg-clay-soft text-ink" : "border-hairline text-ink-3 hover:text-ink"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="mt-3 grid gap-5 sm:grid-cols-2 sm:items-center">
        <svg viewBox="0 0 300 236" className="w-full" role="img" aria-label={`Radar of ${player.name}'s ability factors`}>
          {/* grid rings */}
          {[0.34, 0.67, 1].map((g) => (
            <circle key={g} cx={CX} cy={CY} r={R * g} className="fa-ring" fill="none" />
          ))}
          {/* axes */}
          {active.map((f) => {
            const p = pointFor(f, 1)
            return <line key={f} x1={CX} y1={CY} x2={p.x} y2={p.y} className="fa-axis" />
          })}
          {/* polygon */}
          {poly && <polygon points={poly} className="fa-poly" />}
          {active.map((f) => {
            const p = pointFor(f, player.values[f])
            return <circle key={`v-${f}`} cx={p.x} cy={p.y} r={3} fill="var(--data-b)" />
          })}
          {/* axis labels */}
          {active.map((f) => {
            const p = pointFor(f, 1.16)
            return (
              <text key={`l-${f}`} x={p.x} y={p.y} textAnchor="middle" className="fa-label">
                {f}
              </text>
            )
          })}
        </svg>

        <div>
          <p className="mb-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-3">
            Toggle the latent abilities
          </p>
          <div className="flex flex-wrap gap-2">
            {factors.map((f, i) => (
              <button
                key={f}
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={on[i]}
                className={`focus-ring border px-2.5 py-1 font-mono text-[0.66rem] transition-colors ${
                  on[i] ? "border-clay text-ink" : "border-hairline text-ink-4 line-through"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="mt-4 text-[0.82rem] leading-[1.7] text-ink-3">
            <span className="text-ink">“I don&apos;t just see columns. I look for structure.”</span>{" "}
            {m} of {factors.length} factors shown — a player is a position in a space the data
            defined, not a row of stats.
          </p>
        </div>
      </div>

      <p className="mt-3 text-[0.75rem] leading-[1.6] text-ink-4">{abilityFactors.note}</p>
    </div>
  )
}
