import { useEffect } from "react"

/*
 * One shared IntersectionObserver for the whole page. Components register
 * themselves when they mount (see Reveal.jsx) so content added later — filtered
 * project rows, for example — animates exactly like the static sections instead
 * of being missed by a scan that only ran once.
 */
let observer = null

function getObserver() {
  if (observer) return observer
  if (typeof IntersectionObserver === "undefined") return null
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  )
  return observer
}

/** Registers a single element for its one-shot reveal. */
export function observeReveal(el) {
  if (!el) return () => {}
  const io = getObserver()
  if (!io) {
    el.classList.add("is-visible")
    return () => {}
  }
  io.observe(el)
  return () => io.unobserve(el)
}

/**
 * Enables the hidden reveal state by adding .reveal-on to <html> — but only
 * when the browser can animate and the user has not asked for reduced motion,
 * so a JS or observer failure can never leave content invisible.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const root = document.documentElement

    if (typeof IntersectionObserver === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    root.classList.add("reveal-on")
    return () => root.classList.remove("reveal-on")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
