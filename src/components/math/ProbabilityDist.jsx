import { useState } from "react"

/* A likelihood curve the visitor can reshape. Widening σ spreads the
   distribution and lowers the peak — uncertainty made visible. It stands for
   P(y | x): how confident a model's prediction really is, not just which class
   it picks. */
const X0 = 24
const X1 = 324
const Ybase = 172
const Ytop = 26

const dx = (x) => X0 + (x / 100) * (X1 - X0)
const dy = (v) => Ybase - v * (Ybase - Ytop)

function curvePoints(mu, sigma) {
  const pts = []
  for (let x = 0; x <= 100; x += 2) {
    const v = Math.exp(-0.5 * ((x - mu) / sigma) ** 2)
    pts.push(`${dx(x).toFixed(1)},${dy(v).toFixed(1)}`)
  }
  return pts.join(" ")
}

function shadedPoints(mu, sigma) {
  const band = []
  for (let x = mu - sigma; x <= mu + sigma; x += 2) {
    if (x < 0 || x > 100) continue
    const v = Math.exp(-0.5 * ((x - mu) / sigma) ** 2)
    band.push(`${dx(x).toFixed(1)},${dy(v).toFixed(1)}`)
  }
  return `${dx(Math.max(0, mu - sigma)).toFixed(1)},${Ybase} ${band.join(" ")} ${dx(Math.min(100, mu + sigma)).toFixed(1)},${Ybase}`
}

export default function ProbabilityDist() {
  const [mu, setMu] = useState(50)
  const [sigma, setSigma] = useState(14)

  return (
    <div className="mathviz">
      <svg viewBox="0 0 348 200" className="w-full" role="img" aria-label="A probability distribution curve that reshapes with two sliders">
        {/* baseline */}
        <line x1={X0} y1={Ybase} x2={X1} y2={Ybase} className="axis-line" />

        {/* shaded ±1σ band ≈ 68% of the mass */}
        <polygon points={shadedPoints(mu, sigma)} className="prob-shade" />

        {/* mean marker */}
        <line x1={dx(mu)} y1={Ybase} x2={dx(mu)} y2={dy(1)} className="prob-mean" />

        {/* the curve */}
        <polyline points={curvePoints(mu, sigma)} className="prob-curve" fill="none" />

        <text x={X1 - 4} y={Ybase + 16} className="vec-label" textAnchor="end">x</text>
        <text x={dx(mu) + 6} y={dy(1) - 4} className="vec-label">μ</text>
      </svg>

      <div className="mt-3 space-y-3">
        <label className="block font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-3">
          μ — where the mass sits
          <input type="range" min="20" max="80" value={mu}
            onChange={(e) => setMu(Number(e.target.value))}
            className="math-range mt-2 w-full" aria-label="Mean of the distribution" />
        </label>
        <label className="block font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-3">
          σ — how uncertain it is — {sigma}
          <input type="range" min="6" max="26" value={sigma}
            onChange={(e) => setSigma(Number(e.target.value))}
            className="math-range mt-2 w-full" aria-label="Spread of the distribution" />
        </label>
        <p className="text-[0.8rem] leading-[1.7] text-ink-3">
          <span className="font-mono text-clay">P(y | x)</span> is not a single
          guess — it is a shape. Pull σ wider and the peak drops: the model still
          points somewhere, but believes it less.
        </p>
      </div>
    </div>
  )
}
