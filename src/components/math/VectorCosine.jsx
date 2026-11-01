import { useMemo, useState } from "react"

/* Two vectors from a common origin. The slider rotates v2; the cosine of the
   angle between them updates live and is the same normalised dot product that
   ranks similarity between embeddings — which is why a semantic search can tell
   two different sentences are close. */
const O = { x: 74, y: 150 }
const L = 150

function arcPoints(rad, r = 46) {
  const steps = 24
  const pts = []
  for (let i = 0; i <= steps; i += 1) {
    const a = (rad * i) / steps
    pts.push(`${(O.x + r * Math.cos(a)).toFixed(1)},${(O.y - r * Math.sin(a)).toFixed(1)}`)
  }
  return pts.join(" ")
}

function wordFor(cos) {
  if (cos > 0.85) return "aligned"
  if (cos > 0.2) return "related"
  if (cos > -0.2) return "unrelated (orthogonal)"
  if (cos > -0.85) return "loosely opposed"
  return "opposed"
}

export default function VectorCosine() {
  const [angle, setAngle] = useState(38)
  const rad = (angle * Math.PI) / 180
  const cos = Math.cos(rad)

  const v2 = useMemo(
    () => ({ x: O.x + L * Math.cos(rad), y: O.y - L * Math.sin(rad) }),
    [rad],
  )

  // similarity bar: map cos ∈ [-1,1] → 0..100%
  const pct = ((cos + 1) / 2) * 100

  return (
    <div className="mathviz">
      <svg viewBox="0 0 320 210" className="w-full" role="img" aria-label="Two vectors and the cosine of the angle between them">
        <defs>
          <marker id="vhead" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 Z" className="fill-clay" />
          </marker>
          <marker id="vhead2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 Z" className="fill-ink-3" />
          </marker>
        </defs>

        {/* axes for a plane feel */}
        <line x1={20} y1={O.y} x2={300} y2={O.y} className="axis-line" />
        <line x1={O.x} y1={16} x2={O.x} y2={198} className="axis-line" />

        {/* angle arc + fill */}
        {angle > 0 && (
          <polygon
            points={`${O.x},${O.y} ${arcPoints(rad)}`}
            className="vec-arc-fill"
          />
        )}
        {angle > 0 && (
          <polyline points={arcPoints(rad)} className="vec-arc" fill="none" />
        )}

        {/* v1 — fixed */}
        <line x1={O.x} y1={O.y} x2={O.x + L} y2={O.y} className="vec-line-ink" markerEnd="url(#vhead2)" />
        {/* v2 — rotates */}
        <line x1={O.x} y1={O.y} x2={v2.x} y2={v2.y} className="vec-line-clay" markerEnd="url(#vhead)" />

        <circle cx={O.x} cy={O.y} r={4} className="fill-ink" />
        <text x={O.x + L - 6} y={O.y + 18} className="vec-label">v₁</text>
        <text x={v2.x + 6} y={v2.y - 6} className="vec-label">v₂</text>
      </svg>

      <div className="mt-4 space-y-3">
        <label className="block font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-3">
          angle between v₁ and v₂ — {angle}°
          <input
            type="range"
            min="0"
            max="180"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="math-range mt-2 w-full"
            aria-label="Angle between the two vectors"
          />
        </label>

        <div className="flex items-baseline justify-between font-mono text-[0.82rem]">
          <span className="text-ink-3">cos θ =</span>
          <span className="text-clay tabular-nums">{cos.toFixed(3)}</span>
          <span className="text-ink-2">{wordFor(cos)}</span>
        </div>

        {/* similarity bar */}
        <div className="sim-track" role="presentation">
          <span className="sim-center" />
          <span className="sim-fill" style={{ width: `${pct}%` }} />
        </div>
        <p className="text-[0.8rem] leading-[1.7] text-ink-3">
          Same cosine, different subject: two embeddings pointing the same way are
          close in meaning. This is the maths behind vector search.
        </p>
      </div>
    </div>
  )
}
