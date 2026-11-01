import { useEffect, useRef, useState } from "react"

/**
 * True once the element has scrolled into view — used to start heavier SVG
 * animations only when they are actually on screen. Falls back to visible so a
 * missing IntersectionObserver can never leave a visual frozen in its start
 * state. `once` keeps it latched after the first intersection.
 */
export function useInView({ threshold = 0.25, once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, inView]
}

/** Motion is allowed unless the user asked for reduced motion. */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}
