import { useEffect, useState } from "react"
import { sectionIds } from "../data/portfolio"

/**
 * Scroll position as a 0..1 progress value, rAF-throttled so the spine bar
 * tracks the page without a layout read on every scroll event.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = null

    const read = () => {
      raf = null
      const max =
        document.documentElement.scrollHeight - window.innerHeight
      const next = max > 0 ? window.scrollY / max : 0
      setProgress(Math.min(1, Math.max(0, next)))
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read)
    }

    read()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    document.fonts?.ready.then(read).catch(() => {})

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return progress
}

/**
 * Section id currently owning the viewport. A single listener picks the last
 * section whose top has passed the reading line, so it costs nothing per
 * section and cannot drift between two observers.
 */
export function useActiveSection(ids = sectionIds) {
  const key = ids.join(",")
  const [active, setActive] = useState(() => ids[0] ?? null)

  useEffect(() => {
    const list = key.split(",").filter(Boolean)
    let raf = null

    const read = () => {
      raf = null
      const line = window.innerHeight * 0.32
      let current = list[0] ?? null
      for (const id of list) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      const bottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 8
      if (bottom) current = list[list.length - 1] ?? current
      setActive((prev) => (prev === current ? prev : current))
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read)
    }

    read()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [key])

  return active
}
