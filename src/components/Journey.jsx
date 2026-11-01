import Section from "./Section"
import Reveal from "./Reveal"
import { journey } from "../data/portfolio"

/* The site's spine: not a job history, the order I reach for things in.
   Each stage carries its own vocabulary so the transition from pure maths to
   deployed systems is legible at a glance. */
export default function Journey() {
  return (
    <Section
      id="journey"
      index="01"
      label="Journey"
      title="Mathematics → Machine Learning"
      alternate
      rule
      wide={false}
    >
      <Reveal
        as="p"
        variant="reveal-fade"
        className="mb-14 max-w-[640px] text-[1.05rem] leading-[1.7] text-ink"
      >
        This is not a career timeline. It is the order I think in — how a
        function becomes a feature becomes a model becomes something a person can
        use.
      </Reveal>

      <ol className="journey-rail">
        {journey.map((stage, i) => (
          <Reveal
            key={stage.stage}
            as="li"
            variant="reveal-rise"
            delay={i}
            className="journey-step"
          >
            <span className="journey-index">{String(i + 1).padStart(2, "0")}</span>

            <div className="journey-body">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-[1.5rem] font-bold leading-none tracking-[-0.03em] text-ink md:text-[2rem]">
                  {stage.stage}
                </h3>
                <span className="font-mono text-[1.1rem] text-clay md:text-[1.4rem]">
                  {stage.glyph}
                </span>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {stage.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[0.88rem] leading-[1.8] text-ink-3">
                {stage.note}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal
        as="p"
        variant="reveal-fade"
        className="mt-12 font-mono text-[0.72rem] uppercase leading-[2] tracking-[0.16em] text-ink-3"
      >
        The foundation is fixed. <span className="text-clay">Everything to the
        right of it is where I am still building.</span>
      </Reveal>
    </Section>
  )
}
