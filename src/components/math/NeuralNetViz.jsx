import { useMemo, useState } from "react"
import { useInView } from "../../hooks/useInView"

/* A small neural network used as a visual metaphor — signals travel the edges,
   and focusing or hovering a neuron surfaces what a neuron actually computes.
   The flow is CSS (see .nn-edge / .nn-node in index.css) so it pauses under
   reduced-motion with no JS timer running. */
const LAYERS = [3, 4, 2]
const W = 360
const H = 240
const XS = [54, 180, 306]

function buildNodes() {
  const nodes = []
  LAYERS.forEach((count, layer) => {
    const gap = H / (count + 1)
    for (let i = 0; i < count; i += 1) {
      nodes.push({ id: `${layer}-${i}`, layer, x: XS[layer], y: gap * (i + 1) })
    }
  })
  return nodes
}

function buildEdges(nodes) {
  const edges = []
  for (let l = 0; l < LAYERS.length - 1; l += 1) {
    const from = nodes.filter((n) => n.layer === l)
    const to = nodes.filter((n) => n.layer === l + 1)
    from.forEach((a) =>
      to.forEach((b) => edges.push({ key: `${a.id}_${b.id}`, a, b })),
    )
  }
  return edges
}

export default function NeuralNetViz() {
  const [ref, inView] = useInView()
  const [active, setActive] = useState(null)

  const nodes = useMemo(buildNodes, [])
  const edges = useMemo(() => buildEdges(nodes), [nodes])

  return (
    <figure ref={ref} className="mathviz" aria-label="A small neural network">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className={`nn-svg w-full ${inView ? "is-live" : ""}`}
        role="presentation"
      >
        {edges.map((e, i) => (
          <line
            key={e.key}
            className="nn-edge"
            x1={e.a.x}
            y1={e.a.y}
            x2={e.b.x}
            y2={e.b.y}
            style={{ animationDelay: `${(i % 9) * 0.18}s` }}
          />
        ))}

        {nodes.map((n) => {
          const isActive = active === n.id
          return (
            <g key={n.id}>
              <circle
                className={`nn-node ${isActive ? "is-active" : ""}`}
                cx={n.x}
                cy={n.y}
                r={isActive ? 15 : 11}
                tabIndex={0}
                role="button"
                aria-label={`Neuron in layer ${n.layer + 1}`}
                onMouseEnter={() => setActive(n.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(n.id)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(n.id)}
              />
            </g>
          )
        })}
      </svg>

      <figcaption className="nn-caption">
        {active ? (
          <span className="font-mono text-[0.78rem] text-clay">
            x&nbsp;&nbsp;→&nbsp;&nbsp;w·x + b&nbsp;&nbsp;→&nbsp;&nbsp;σ(&nbsp;)
          </span>
        ) : (
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-3">
            hover / tap a neuron
          </span>
        )}
      </figcaption>
    </figure>
  )
}
