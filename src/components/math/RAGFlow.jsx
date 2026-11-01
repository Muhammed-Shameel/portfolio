import { useMemo, useState } from "react"
import { ragDemo } from "../../data/portfolio"

/* Making retrieval visible. Pick a question, watch it become a vector, hit the
   index, and return ranked chunks — each one coloured by how close it landed
   and clickable to see what actually went into the answer's context. The
   architecture and index numbers are real; the chunks are illustrative (§10). */

// A deterministic, clearly-labelled "embedding" so the vector step is tangible.
function embedVector(str) {
  let seed = 5
  for (let i = 0; i < str.length; i += 1) seed = (seed * 31 + str.charCodeAt(i)) % 2147483647
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648
    return seed / 2147483648
  }
  return Array.from({ length: 12 }, () => rnd())
}

function heatColor(s) {
  if (s >= 0.6) return "var(--data-good)"
  if (s >= 0.35) return "var(--data-c)"
  return "var(--data-bad)"
}

export default function RAGFlow() {
  const [qi, setQi] = useState(0)
  const [picked, setPicked] = useState(null) // index of a chunk the user opened
  const question = ragDemo.questions[qi]
  const vector = useMemo(() => embedVector(question.q), [question])

  const choose = (i) => {
    setQi(i)
    setPicked(null)
  }

  return (
    <div className="mathviz">
      {/* question selector */}
      <div className="flex flex-wrap gap-2">
        {ragDemo.questions.map((q, i) => (
          <button
            key={q.q}
            type="button"
            onClick={() => choose(i)}
            aria-pressed={qi === i}
            className={`focus-ring border px-3 py-1.5 text-left font-mono text-[0.7rem] transition-colors ${
              qi === i
                ? "border-ink bg-clay-soft text-ink"
                : "border-hairline text-ink-3 hover:text-ink"
            }`}
          >
            {q.q}
          </button>
        ))}
      </div>

      {/* pipeline */}
      <ol className="rag-flow">
        <li className="rag-step">
          <span className="rag-step-k">Question</span>
          <span className="rag-step-v text-ink">“{question.q}”</span>
        </li>
        <li className="rag-step">
          <span className="rag-step-k">Embedding</span>
          <span className="rag-vec" aria-hidden="true">
            {vector.map((v, i) => (
              <span
                key={i}
                className="rag-dim"
                style={{ height: `${6 + v * 26}px`, background: heatColor(0.3 + v * 0.6) }}
              />
            ))}
          </span>
        </li>
        <li className="rag-step">
          <span className="rag-step-k">Vector DB</span>
          <span className="rag-step-v">
            Chroma · {ragDemo.stats[0].v} chunks · {ragDemo.stats[1].v} subjects
          </span>
        </li>
      </ol>

      {/* retrieved chunks */}
      <div className="mt-2">
        <p className="mb-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-3">
          Top retrieved chunks — click to inspect (grounding ≥ {ragDemo.stats[2].v})
        </p>
        <ul className="rag-chunks">
          {question.chunks.map((c, i) => {
            const on = picked === i
            return (
              <li key={c.t}>
                <button
                  type="button"
                  onClick={() => setPicked(on ? null : i)}
                  aria-expanded={on}
                  className={`rag-chunk ${on ? "is-open" : ""}`}
                >
                  <span className="rag-score" style={{ color: heatColor(c.s) }}>
                    {c.s.toFixed(2)}
                  </span>
                  <span className="rag-bar">
                    <span
                      className="rag-bar-fill"
                      style={{ width: `${c.s * 100}%`, background: heatColor(c.s) }}
                    />
                  </span>
                  <span className="rag-chunk-t">{c.t}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* grounded answer */}
      <div className="rag-answer">
        <span className="rag-step-k">Context → Answer</span>
        <p className="mt-2 text-[0.92rem] leading-[1.75] text-ink">{question.a}</p>
      </div>
    </div>
  )
}
