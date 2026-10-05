import { useTheme } from "../hooks/useTheme"

/**
 * Mono pill that swaps the paper / charcoal-night theme. Label shows the theme
 * you are going to, which is what the icon hints at too (sun -> light).
 */
export default function ThemeToggle({ className = "", full = false }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`focus-ring group inline-flex items-center gap-2.5 border border-hairline px-3.5 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-clay hover:text-clay ${
        full ? "w-full justify-between" : ""
      } ${className}`}
    >
      <span className="inline-flex items-center gap-2.5">
        <i
          className={`fa ${isDark ? "fa-sun" : "fa-moon"} text-[0.7rem]`}
          aria-hidden="true"
        />
        {isDark ? "Light" : "Dark"}
      </span>
      {full && (
        <span className="text-[0.6rem] tracking-[0.2em] text-ink-4">
          {isDark ? "CHARCOAL NIGHT" : "WARM PAPER"}
        </span>
      )}
    </button>
  )
}
