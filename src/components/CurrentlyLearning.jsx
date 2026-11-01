import Section from "./Section"
import Reveal from "./Reveal"
import { currentlyLearning } from "../data/portfolio"

/* Deliberately not a competency matrix. Each area carries a plain word for
   where I actually am with it — no invented percentages, no pretending the job
   is finished. */
const STATUS_CLASS = {
  deepening: "pill-run",
  "building with": "pill-valid",
  learning: "pill-build",
  exploring: "pill-build",
  "going deeper": "pill-run",
}

export default function CurrentlyLearning() {
  return (
    <Section id="learning" index="06" label="Currently learning" title="Not Finished" alternate rule>
      <Reveal
        as="p"
        variant="reveal-fade"
        className="mb-12 max-w-[640px] text-[1.05rem] leading-[1.7] text-ink"
      >
        {currentlyLearning.intro}
      </Reveal>

      <ul className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
        {currentlyLearning.areas.map((area, i) => (
          <Reveal
            key={area.title}
            as="li"
            variant="reveal-fade"
            delay={i % 4}
            className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-hairline py-5"
          >
            <span className="flex items-baseline gap-4">
              <span className="font-mono text-[0.68rem] tracking-[0.18em] text-ink-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.98rem] font-medium text-ink transition-colors group-hover:text-clay md:text-[1.1rem]">
                {area.title}
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-4">
              {/* qualitative depth — five blocks, no invented percentage */}
              <span
                className="depth-track"
                role="img"
                aria-label={`Depth: ${area.depth} of 5`}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className={`depth-cell${n <= area.depth ? " is-on" : ""}`}
                    aria-hidden="true"
                  />
                ))}
              </span>
              <span className={`pill ${STATUS_CLASS[area.status] ?? "pill-build"}`}>
                {area.status}
              </span>
            </span>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
