import { useMemo } from "react"
import { useInView } from "../hooks/useInView"

/* Mathematics becoming intelligence, left to right: symbols feed a small
   network, the network resolves into a tight cluster of embeddings. The
   travelling signal is CSS dash-flow (.ht-edge) so it costs nothing when the
   section is off-screen or motion is reduced. */
const GLYPHS = ["∑", "π", "∫", "θ", "√"]
// Embeddings are the one place colour blooms fully — the "intelligence"
// that the quiet monochrome frame produces.
const EMB_COLORS = [
  "var(--data-a)",
  "var(--data-b)",
  "var(--data-c)",
  "var(--data-d)",
  "var(--data-e)",
  "var(--data-f)",
]

const MATH_X = 40
const IN_X = 168
const HID_X = 244
const OUT_X = 320
const EMB_X = 408

function buildNet() {
  const input = [110, 150, 190].map((y, i) => ({ x: IN_X, y, id: `i${i}` }))
  const hidden = [70, 123, 177, 230].map((y, i) => ({ x: HID_X, y, id: `h${i}` }))
  const output = [110, 150, 190].map((y, i) => ({ x: OUT_X, y, id: `o${i}` }))
  return { input, hidden, output }
}

function buildEmbeddings() {
  let seed = 42
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648
    return seed / 2147483648 - 0.5
  }
  const pts = []
  for (let i = 0; i < 12; i += 1) {
    pts.push({ x: EMB_X + rnd() * 26, y: 150 + rnd() * 92 })
  }
  return pts
}

export default function HeroTransform() {
  const [ref, inView] = useInView({ once: false, threshold: 0.1 })
  const net = useMemo(buildNet, [])
  const embeddings = useMemo(buildEmbeddings, [])

  const mathNodes = GLYPHS.map((g, i) => ({
    g,
    x: MATH_X,
    y: 66 + i * 47,
    id: `m${i}`,
  }))

  return (
    <figure
      ref={ref}
      className={`hero-transform ${inView ? "is-live" : ""}`}
      aria-label="Mathematics symbols flowing through a neural network into a cluster of embeddings"
    >
      <svg viewBox="0 0 460 300" className="w-full">
        <defs>
          <marker id="ht-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" className="ht-arrowhead" />
          </marker>
        </defs>

        {/* math → input */}
        {mathNodes.map((m, i) =>
          net.input
            .filter((_, k) => k === i % net.input.length)
            .map((n) => (
              <line key={`${m.id}-${n.id}`} className="ht-edge" x1={m.x} y1={m.y} x2={n.x} y2={n.y} />
            )),
        )}

        {/* input → hidden → output */}
        {net.input.map((a) =>
          net.hidden.map((b) => (
            <line key={`${a.id}-${b.id}`} className="ht-edge" x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          )),
        )}
        {net.hidden.map((a) =>
          net.output.map((b) => (
            <line key={`${a.id}-${b.id}`} className="ht-edge" x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          )),
        )}

        {/* output → embeddings */}
        {net.output.map((a, i) => (
          <line
            key={`emb-${a.id}`}
            className="ht-edge ht-edge-out"
            x1={a.x} y1={a.y}
            x2={embeddings[i * 3]?.x ?? EMB_X}
            y2={embeddings[i * 3]?.y ?? 150}
          />
        ))}

        {/* math glyph nodes */}
        {mathNodes.map((m) => (
          <text key={m.id} x={m.x} y={m.y + 6} textAnchor="middle" className="ht-glyph">
            {m.g}
          </text>
        ))}

        {/* neurons — input blue → hidden orange → output green */}
        {[
          ...net.input.map((n) => ({ ...n, fill: "var(--data-d)" })),
          ...net.hidden.map((n) => ({ ...n, fill: "var(--data-a)" })),
          ...net.output.map((n) => ({ ...n, fill: "var(--data-b)" })),
        ].map((n, i) => (
          <circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={6}
            className="ht-node"
            style={{ fill: n.fill, fillOpacity: 0.85, animationDelay: `${(i % 7) * 0.25}s` }}
          />
        ))}

        {/* embedding cluster */}
        <circle cx={EMB_X} cy={150} r={54} className="ht-emb-halo" />
        {embeddings.map((p, i) => (
          <circle
            key={`e${i}`}
            cx={p.x}
            cy={p.y}
            r={4}
            className="ht-embed"
            style={{ fill: EMB_COLORS[i % EMB_COLORS.length], animationDelay: `${(i % 6) * 0.3}s` }}
          />
        ))}

        {/* column labels */}
        <text x={MATH_X} y={292} textAnchor="middle" className="ht-label">mathematics</text>
        <text x={HID_X} y={292} textAnchor="middle" className="ht-label">learning</text>
        <text x={EMB_X} y={292} textAnchor="middle" className="ht-label">intelligence</text>
      </svg>
    </figure>
  )
}
