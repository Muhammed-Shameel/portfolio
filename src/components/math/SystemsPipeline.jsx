import { useState } from "react"
import { useInView } from "../../hooks/useInView"

/* The last mile of every model: it means nothing until something can call it.
   Four stages, a signal that flows across while the diagram is on screen, and a
   caption that changes when you pick a stage. Kept deliberately light — CSS
   dash-flow, no WebGL. */
const STAGES = [
  {
    key: "model",
    label: "Model",
    dot: "var(--data-b)",
    note: "The fitted thing — a file of numbers and a set of weights. On its own it does nothing for anyone.",
  },
  {
    key: "api",
    label: "API",
    dot: "var(--data-a)",
    note: "A contract. FastAPI turns the model into a callable endpoint so any client can reach inference.",
  },
  {
    key: "app",
    label: "Application",
    dot: "var(--data-c)",
    note: "An interface a person opens — React/Vite on the front, retrieval and inference behind it.",
  },
  {
    key: "user",
    label: "User",
    dot: "var(--data-d)",
    note: "Someone gets an answer. Only here does the maths become value — and become measurable.",
  },
]

const NODE_X = [64, 176, 288, 400]
const Y = 92

export default function SystemsPipeline() {
  const [ref, inView] = useInView({ once: false, threshold: 0.2 })
  const [active, setActive] = useState("api")
  const current = STAGES.find((s) => s.key === active)

  return (
    <div ref={ref} className="mathviz">
      <svg
        viewBox="0 0 464 184"
        className={`w-full ${inView ? "is-live" : ""}`}
        role="group"
        aria-label="Model to API to application to user pipeline"
      >
        {/* connectors */}
        {NODE_X.slice(0, -1).map((x, i) => (
          <line
            key={x}
            className={`sp-edge ${inView ? "is-live" : ""}`}
            x1={x + 30}
            y1={Y}
            x2={NODE_X[i + 1] - 30}
            y2={Y}
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}

        {STAGES.map((s, i) => {
          const on = active === s.key
          return (
            <g
              key={s.key}
              className="sp-node"
              role="button"
              tabIndex={0}
              aria-pressed={on}
              onMouseEnter={() => setActive(s.key)}
              onFocus={() => setActive(s.key)}
              onClick={() => setActive(s.key)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setActive(s.key)
                }
              }}
            >
              <rect
                x={NODE_X[i] - 30}
                y={Y - 26}
                width={60}
                height={52}
                rx={4}
                className="sp-box"
                style={{
                  stroke: on ? "var(--color-ink)" : "var(--color-hairline-strong)",
                  fill: on ? "var(--color-clay-soft)" : "var(--color-card)",
                }}
              />
              <circle cx={NODE_X[i]} cy={Y - 10} r={3.5} fill={s.dot} />
              <text x={NODE_X[i]} y={Y + 14} textAnchor="middle" className="sp-label">
                {s.label}
              </text>
            </g>
          )
        })}
      </svg>

      <p className="mt-2 min-h-[2.8em] text-[0.82rem] leading-[1.7] text-ink-2">
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-3">
          {current.label} —{" "}
        </span>
        {current.note}
      </p>
    </div>
  )
}
