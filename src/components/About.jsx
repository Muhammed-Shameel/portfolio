import Section from "./Section"
import Reveal from "./Reveal"
import { statement, terminalProfile, skillGroups } from "../data/portfolio"

const indentClass = ["", "pl-6", "pl-12"]
const tokenClass = {
  kw: "syn-kw",
  class: "syn-class",
  str: "syn-str",
  val: "syn-val",
  amber: "syn-amber",
  pine: "syn-pine",
  plain: "",
}

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title="Statement"
      alternate
      rule
      wide={false}
    >
      {/* two-column statement block */}
      <div className="mb-20 grid gap-10 md:grid-cols-12">
        <Reveal
          as="p"
          variant="reveal-left"
          className="text-[1.1rem] leading-[1.6] tracking-[-0.01em] text-ink md:col-span-7 md:text-[1.45rem]"
        >
          {statement.lead}
        </Reveal>
        <Reveal
          as="p"
          variant="reveal-right"
          delay={1}
          className="text-[0.95rem] leading-[1.9] text-ink-3 md:col-span-5"
        >
          {statement.body}
        </Reveal>
      </div>

      {/* terminal + capability rail */}
      <div className="grid gap-8 md:grid-cols-12">
        <Reveal variant="reveal-left" className="terminal md:col-span-7">
          <div className="terminal-header flex items-center gap-2 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-auto font-mono text-[0.72rem] text-terminal-meta">
              profile.py
            </span>
          </div>

          <div className="px-6 py-5 font-mono text-[0.82rem] leading-[2]">
            {terminalProfile.map((line, i) => (
              <span key={i} className={`block ${indentClass[line.indent] ?? ""}`}>
                {line.tokens.map(([type, value], j) => (
                  <span key={j} className={tokenClass[type]}>
                    {value}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 md:col-span-5">
          {skillGroups.slice(0, 4).map((group, i) => (
            <Reveal
              key={group.title}
              variant="reveal-fade"
              delay={i}
              className="flex items-baseline justify-between gap-6 border-b border-hairline pb-3"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-3">
                {group.title}
              </span>
              <span className="text-right text-[0.9rem] font-medium text-ink">
                {group.items.slice(0, 3).join(" · ")}
                {group.items.length > 3 && (
                  <span className="whitespace-nowrap text-ink-3">
                    {" "}
                    +{group.items.length - 3} more
                  </span>
                )}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
