import { useState } from "react"

/* One before → after metric the visitor can scrub through. The bar shrinks as
   the value drops toward the optimised number — the point is not the headline
   percentage, it is feeling how large the change actually is. */
function fmt(v, unit) {
  const rounded = unit === "ms" ? Math.round(v * 100) / 100 : Math.round(v)
  return rounded.toLocaleString("en-US", {
    minimumFractionDigits: unit === "ms" ? 2 : 0,
    maximumFractionDigits: 2,
  })
}

export default function BeforeAfterSlider({ metric }) {
  const { label, before, after, unit, note } = metric
  const [t, setT] = useState(0)

  const value = before + (after - before) * (t / 100)
  const widthPct = (value / before) * 100
  const cut = Math.round((1 - after / before) * 100)

  return (
    <div className="ba-card">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-3">
          {label}
        </p>
        <p
          className="font-mono text-[0.68rem] uppercase tracking-[0.16em]"
          style={{ color: "var(--data-good)" }}
        >
          −{cut}%
        </p>
      </div>

      <p className="ba-value">
        {fmt(value, unit)}
        <span className="ba-unit">{unit}</span>
      </p>

      <div className="ba-track">
        <span className="ba-fill" style={{ width: `${widthPct}%` }} />
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={t}
        onChange={(e) => setT(Number(e.target.value))}
        className="math-range mt-2 w-full"
        aria-label={`${label}: drag between before and after`}
      />

      <div className="flex justify-between font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink-4">
        <span>before {fmt(before, unit)} {unit}</span>
        <span>after {fmt(after, unit)} {unit}</span>
      </div>

      {note && <p className="mt-2 text-[0.78rem] leading-[1.6] text-ink-3">{note}</p>}
    </div>
  )
}
