import Section from "./Section"
import Reveal from "./Reveal"
import { education } from "../data/portfolio"

export default function Education() {
  return (
    <Section
      id="education"
      index="05"
      label="Education"
      title="Academic Journey"
      alternate
      rule
      wide={false}
    >
      <div className="flex flex-col">
        {education.map((item, i) => (
          <Reveal
            key={item.degree}
            variant="reveal-fade"
            delay={i}
            as="article"
            className="group border-b border-hairline"
          >
            <div className="grid items-start gap-6 py-10 md:grid-cols-12 md:gap-8">
              <span className="font-display text-[2.2rem] font-bold leading-none tracking-[-0.04em] text-ink-4 transition-colors group-hover:text-clay md:col-span-2 md:text-[3.2rem]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="md:col-span-6">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-clay">
                  {item.tag}
                </p>
                <h3 className="mt-3 font-display text-[1.6rem] font-bold leading-tight tracking-[-0.03em] text-ink md:text-[2.3rem]">
                  {item.degree}
                </h3>
                <p className="mt-3 text-[0.95rem] text-ink-2">{item.institution}</p>
                <p className="mt-4 max-w-[560px] text-[0.85rem] leading-[1.8] text-ink-3">
                  {item.note}
                </p>
              </div>

              <div className="md:col-span-4 md:text-right">
                {item.meta && (
                  <p className="font-mono text-[0.8rem] text-ink-3">
                    <i className="fa fa-star mr-2 text-amber" aria-hidden="true" />
                    {item.meta}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
