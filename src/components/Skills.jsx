import Section from "./Section"
import Reveal from "./Reveal"
import { useMagnetic } from "../hooks/usePointerMotion"
import { skillGroups, stackLine, marqueeWords } from "../data/portfolio"

/* One capability row. The arrow is magnetic, so the pointer has to be tracked
   per row — which means a component, not a map body. */
function SkillRow({ group, index }) {
  const pullRef = useMagnetic(3)

  return (
    <Reveal
      variant="reveal-fade"
      delay={index % 4}
      as="div"
      className="group border-b border-hairline"
    >
      <div className="flex cursor-default items-baseline gap-5 py-6 transition-colors group-hover:text-clay">
        <span className="font-mono text-[0.7rem] tracking-[0.18em] text-ink-3">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-[1.25rem] font-bold tracking-[-0.02em] text-ink transition-colors group-hover:text-clay md:text-[1.5rem]">
            {group.title}
          </h3>
          <p className="mt-2 text-[0.88rem] leading-[1.8] text-ink-3">
            {group.items.join(" · ")}
          </p>
        </div>
        <span ref={pullRef} className="self-center">
          <i
            className="fa fa-arrow-right -translate-x-2 self-center opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden="true"
          />
        </span>
      </div>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      label="Skills"
      title="Technical Arsenal"
      alternate
      rule
    >
      {/* marquee strip */}
      <Reveal variant="reveal-fade" className="marquee bleed-x mb-16 py-4">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {marqueeWords.map((word) => (
                <span
                  key={`${copy}-${word}`}
                  className="display-xl outline-ink flex items-center whitespace-nowrap px-6"
                >
                  {word}
                  <span className="ml-12 h-2 w-2 shrink-0 rounded-full bg-clay" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      {/* capabilities list */}
      <div className="grid md:grid-cols-2 md:gap-x-12">
        {skillGroups.map((group, i) => (
          <SkillRow key={group.title} group={group} index={i} />
        ))}
      </div>

      <Reveal
        as="p"
        variant="reveal-fade"
        className="mt-12 font-mono text-[0.75rem] uppercase leading-[2] tracking-[0.16em] text-ink-3"
      >
        <span className="text-clay">Core stack</span> — {stackLine}
      </Reveal>
    </Section>
  )
}
