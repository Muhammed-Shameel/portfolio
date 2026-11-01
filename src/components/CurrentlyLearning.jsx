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
    <Section id="learning" index="08" label="Currently learning" title="Not Finished" alternate rule>
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
            className="group flex items-baseline justify-between gap-6 border-b border-hairline py-5"
          >
            <span className="flex items-baseline gap-4">
              <span className="font-mono text-[0.68rem] tracking-[0.18em] text-ink-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.98rem] font-medium text-ink transition-colors group-hover:text-clay md:text-[1.1rem]">
                {area.title}
              </span>
            </span>
            <span className={`pill shrink-0 ${STATUS_CLASS[area.status] ?? "pill-build"}`}>
              {area.status}
            </span>
          </Reveal>
        ))}
      </ul>

      <Reveal
        as="p"
        variant="reveal-fade"
        className="mt-12 max-w-[640px] text-[0.95rem] leading-[1.9] text-ink-3"
      >
        The honest version of this section is the point of it. I would rather
        show you exactly where I am and let the work make the case, than list
        everything as mastered and have you find out otherwise in an interview.
      </Reveal>
    </Section>
  )
}
