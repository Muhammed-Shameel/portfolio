import Section from "./Section"
import Reveal from "./Reveal"
import { interests, interestsExtra, languages } from "../data/portfolio"

export default function Interests() {
  return (
    <Section
      id="interests"
      index="07"
      label="Interests"
      title="Beyond the Deliverables"
      alternate
      rule
      wide={false}
    >
      <div className="mb-16 grid gap-10 md:grid-cols-3 md:gap-12">
        {interestsExtra.map((item, i) => (
          <Reveal key={item.title} variant="reveal-fade" delay={i} as="div">
            <h3 className="font-display text-[1.6rem] font-bold leading-none tracking-[-0.03em] text-ink">
              <span className="text-clay">/</span> {item.title}
            </h3>
            <p className="mt-4 text-[0.88rem] leading-[1.9] text-ink-3">
              {item.detail}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal
        variant="reveal-fade"
        className="flex flex-col gap-8 border-t border-hairline pt-8 md:flex-row md:items-baseline md:justify-between"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-3">
            Fields
          </span>
          {interests.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-3">
            Languages
          </span>
          {languages.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
