import Reveal from "./Reveal"

/**
 * Section shell: giant uppercase heading with a `01 / LABEL` mono eyebrow on a
 * hairline rule. `alternate` flips the paper tone between sections.
 */
export default function Section({
  id,
  index,
  label,
  title,
  alternate = false,
  rule = false,
  wide = true,
  className = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`${alternate ? "bg-paper-2" : "bg-paper"} ${rule ? "rule-top" : ""} relative py-28 md:py-44`}
    >
      <div
        className={`mx-auto w-full ${wide ? "max-w-[1440px]" : "max-w-[1160px]"} px-6 md:px-10`}
      >
        {(title || label) && (
          <Reveal
            variant="reveal-fade"
            className="mb-16 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b border-hairline pb-7 md:mb-20"
          >
            {title && <h2 className="display-lg text-ink">{title}</h2>}
            {label && (
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-3">
                {index && <span className="text-clay">{index}</span>} {label}
              </span>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
