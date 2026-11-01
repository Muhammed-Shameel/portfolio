import { useMemo, useState } from "react"

/* A tiny two-class problem where the boundary shape is the whole story. A
   straight line cannot separate a ring from its core; a radial boundary can.
   Same data, different model — which is exactly why I care about the decision
   surface and not just the accuracy number. Misclassified points are ringed. */
const C = { x: 170, y: 120 }
const R = 52
const W = 340
const H = 240

function rng(seed) {
  let s = seed
  return () => {
    s = (s * 1103515245 + 12345) % 2147483648
    return s / 2147483648 - 0.5
  }
}

function buildPoints() {
  const r = rng(11)
  const core = []
  const ring = []
  for (let i = 0; i < 16; i += 1) {
    const a = r() * Math.PI * 2
    const d = Math.abs(r()) * 34
    core.push({ x: C.x + Math.cos(a) * d, y: C.y + Math.sin(a) * d, truth: "A" })
  }
  for (let i = 0; i < 26; i += 1) {
    const a = r() * Math.PI * 2
    const d = R + 22 + Math.abs(r()) * 26
    ring.push({ x: C.x + Math.cos(a) * d, y: C.y + Math.sin(a) * d, truth: "B" })
  }
  return [...core, ...ring]
}

// Predicted class for a point under each boundary model.
function predict(p, mode) {
  if (mode === "linear") return p.x < C.x ? "A" : "B"
  const d = Math.hypot(p.x - C.x, p.y - C.y)
  return d < R ? "A" : "B"
}

export default function DecisionBoundary() {
  const [mode, setMode] = useState("radial")
  const points = useMemo(buildPoints, [])
  const wrong = points.filter((p) => predict(p, mode) !== p.truth).length

  // a straight boundary sits at x = C.x; radial is the circle of radius R
  const circlePts = []
  for (let i = 0; i <= 48; i += 1) {
    const a = (i / 48) * Math.PI * 2
    circlePts.push(`${(C.x + R * Math.cos(a)).toFixed(1)},${(C.y + R * Math.sin(a)).toFixed(1)}`)
  }

  return (
    <div className="mathviz">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Two classes separated by a toggleable decision boundary">
        {/* boundary */}
        {mode === "linear" ? (
          <line x1={C.x} y1={8} x2={C.x} y2={H - 8} className="db-boundary" />
        ) : (
          <polygon points={circlePts.join(" ")} className="db-boundary" fill="none" />
        )}

        {/* points */}
        {points.map((p, i) => {
          const mis = predict(p, mode) !== p.truth
          return (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={mis ? 6 : 4}
              fill={p.truth === "A" ? "var(--data-b)" : "var(--data-a)"}
              fillOpacity={0.85}
              stroke={mis ? "var(--color-ink)" : "none"}
              strokeWidth={mis ? 1.5 : 0}
            />
          )
        })}
      </svg>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        {["linear", "radial"].map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            className={`focus-ring border px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] transition-colors ${
              mode === m
                ? "border-ink bg-clay-soft text-ink"
                : "border-hairline text-ink-3 hover:text-ink"
            }`}
          >
            {m} boundary
          </button>
        ))}
        <span className="font-mono text-[0.72rem] text-ink-3">
          <span style={{ color: "var(--data-bad)" }}>{wrong} misclassified</span>
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.68rem] text-ink-3">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--data-b)" }} /> class A (core)
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--data-a)" }} /> class B (ring)
        </span>
      </div>

      <p className="mt-3 text-[0.8rem] leading-[1.7] text-ink-3">
        Identical data, two models. A line can only split left from right, so the
        ring leaks across the boundary; a radial decision surface wraps the core
        and the errors drop to almost nothing. Choosing the model is choosing the
        shape of the assumption.
      </p>
    </div>
  )
}
