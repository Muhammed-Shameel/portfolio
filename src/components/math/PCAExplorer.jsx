import { useMemo, useState } from "react"

/* A point cloud with its principal direction drawn in. The cloud and its
   eigenvector share an orientation, so rotating the data rotates the principal
   component with it — the point of PCA: find the axis that explains the most
   variance, then look at the cloud edge-on. */
const C = { x: 170, y: 140 }
const S = 13

// Deterministic pseudo-random base cloud (major axis along x, minor along y).
function baseCloud() {
  let seed = 7
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648
    return seed / 2147483648 - 0.5
  }
  const pts = []
  for (let i = 0; i < 64; i += 1) {
    // sum of two uniforms ≈ a small gaussian
    const a = (rnd() + rnd()) * 5.2 // major
    const b = (rnd() + rnd()) * 1.7 // minor
    pts.push([a, b])
  }
  return pts
}

export default function PCAExplorer() {
  const [angle, setAngle] = useState(28)
  const [project, setProject] = useState(true)
  const cloud = useMemo(baseCloud, [])

  const rad = (angle * Math.PI) / 180
  const cos = Math.cos(rad)
  const sin = Math.sin(rad)

  const toScreen = (a, b) => ({
    x: C.x + (a * cos - b * sin) * S,
    y: C.y + (a * sin + b * cos) * S,
  })

  const pc1 = { x: C.x + 92 * cos, y: C.y + 92 * sin }
  const pc1n = { x: C.x - 92 * cos, y: C.y - 92 * sin }
  const pc2 = { x: C.x + 46 * -sin, y: C.y + 46 * cos }

  return (
    <div className="mathviz">
      <svg viewBox="0 0 340 280" className="w-full" role="img" aria-label="A point cloud with its principal component directions">
        {/* the two eigenvector axes */}
        <line x1={pc1n.x} y1={pc1n.y} x2={pc1.x} y2={pc1.y} className="pca-axis1" />
        <line x1={C.x} y1={C.y} x2={pc2.x} y2={pc2.y} className="pca-axis2" />

        {/* projection of each point onto PC1 */}
        {project &&
          cloud.map(([a], i) => {
            const scr = toScreen(a, 0)
            const src = toScreen(...cloud[i])
            return (
              <g key={`p${i}`}>
                <line x1={src.x} y1={src.y} x2={scr.x} y2={scr.y} className="pca-drop" />
                <circle cx={scr.x} cy={scr.y} r={2} className="pca-proj" />
              </g>
            )
          })}

        {/* the cloud */}
        {cloud.map(([a, b], i) => {
          const p = toScreen(a, b)
          return <circle key={i} cx={p.x} cy={p.y} r={3} className="pca-dot" />
        })}

        <circle cx={C.x} cy={C.y} r={3} className="fill-ink" />
        <text x={pc1.x + 6} y={pc1.y} className="vec-label">PC1</text>
        <text x={pc2.x + 6} y={pc2.y} className="vec-label">PC2</text>
      </svg>

      <div className="mt-3 space-y-3">
        <label className="block font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-3">
          rotate the data — {angle}°
          <input type="range" min="-90" max="90" value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="math-range mt-2 w-full" aria-label="Rotate the point cloud" />
        </label>
        <button
          type="button"
          onClick={() => setProject((v) => !v)}
          aria-pressed={project}
          className={`focus-ring border px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] transition-colors ${
            project ? "border-clay text-clay" : "border-hairline text-ink-3 hover:text-ink"
          }`}
        >
          {project ? "hide projection" : "show projection"}
        </button>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.72rem] text-ink-3">
          <span>X</span><span className="text-clay">→</span>
          <span>covariance</span><span className="text-clay">→</span>
          <span>eigenvectors</span><span className="text-clay">→</span>
          <span className="text-ink-2">principal components</span>
        </div>
        <p className="text-[0.8rem] leading-[1.7] text-ink-3">
          The solid axis is the direction of greatest variance; the dashed one is
          orthogonal to it. Project the cloud onto the first axis and 36 columns
          quietly become a handful — that reduction is the backbone of the Premier
          League factor analysis.
        </p>
      </div>
    </div>
  )
}
