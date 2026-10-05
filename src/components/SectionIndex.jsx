import { sectionIds } from "../data/portfolio"
import { useActiveSection } from "../hooks/useScrollProgress"

/**
 * Right-edge section spine: one dot per anchored section, with mono labels once
 * the viewport is wide enough (2xl) that they land in the gutter instead of on
 * top of the content. Desktop-only, pointer fine.
 */
export default function SectionIndex() {
  const ids = sectionIds.map((s) => s.id)
  const active = useActiveSection(ids)

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed right-7 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col gap-4">
        {sectionIds.map(({ id, label }) => {
          const isCurrent = active === id
          return (
            <li key={id} className="flex items-center justify-end gap-3">
              <a
                href={`#${id}`}
                aria-current={isCurrent ? "true" : undefined}
                className="focus-ring pointer-events-auto group flex items-center gap-3"
              >
                <span
                  className={`hidden font-mono text-[0.6rem] uppercase tracking-[0.2em] transition-all duration-300 2xl:inline ${
                    isCurrent
                      ? "text-clay opacity-100"
                      : "text-ink-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`block rounded-full border transition-all duration-300 ${
                    isCurrent
                      ? "h-2.5 w-2.5 border-clay bg-clay"
                      : "h-1.5 w-1.5 border-hairline-strong bg-transparent group-hover:border-clay"
                  }`}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
