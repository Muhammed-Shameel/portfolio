import { useEffect, useRef } from "react"

/** Fine pointer and no reduced-motion preference — required for any of this. */
export function pointerMotionAllowed() {
  if (typeof window === "undefined") return false
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

/**
 * Writes normalised pointer offsets (--px / --py, each -1..1) on the element,
 * lerped in a single rAF loop. The CSS for .hero-grid / .glow-warm / .glow-amber
 * turns those numbers into small translations, so the layers drift apart.
 */
export function usePointerParallax(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el || !pointerMotionAllowed()) return

    let targetX = 0
    let targetY = 0
    let x = 0
    let y = 0
    let raf = null
    let running = false

    const loop = () => {
      x += (targetX - x) * 0.06
      y += (targetY - y) * 0.06
      el.style.setProperty("--px", x.toFixed(4))
      el.style.setProperty("--py", y.toFixed(4))

      const settled =
        Math.abs(targetX - x) < 0.002 && Math.abs(targetY - y) < 0.002
      if (settled && targetX === 0 && targetY === 0) {
        running = false
        raf = null
        return
      }
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (running) return
      running = true
      raf = requestAnimationFrame(loop)
    }

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      const halfW = rect.width / 2
      const halfH = rect.height / 2
      const clamp = (v) => Math.max(-1, Math.min(1, v))
      targetX = clamp((event.clientX - (rect.left + halfW)) / halfW)
      targetY = clamp((event.clientY - (rect.top + halfH)) / halfH)
      start()
    }

    const onLeave = () => {
      targetX = 0
      targetY = 0
      start()
    }

    el.addEventListener("mousemove", onMove, { passive: true })
    el.addEventListener("mouseleave", onLeave)
    start()

    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref])
}

/**
 * Magnetic pull: the element drifts a few px toward the cursor and springs back
 * on leave. Returns the ref to attach.
 */
export function useMagnetic(max = 3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !pointerMotionAllowed()) return

    let targetX = 0
    let targetY = 0
    let x = 0
    let y = 0
    let raf = null
    let running = false

    const loop = () => {
      x += (targetX - x) * 0.2
      y += (targetY - y) * 0.2
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`

      const settled = Math.abs(targetX - x) < 0.05 && Math.abs(targetY - y) < 0.05
      if (settled && targetX === 0 && targetY === 0) {
        el.style.transform = ""
        x = 0
        y = 0
        running = false
        raf = null
        return
      }
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (running) return
      running = true
      raf = requestAnimationFrame(loop)
    }

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      targetX =
        ((event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * max
      targetY =
        ((event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * max
      start()
    }

    const onLeave = () => {
      targetX = 0
      targetY = 0
      start()
    }

    el.addEventListener("mousemove", onMove, { passive: true })
    el.addEventListener("mouseleave", onLeave)

    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
      if (raf) cancelAnimationFrame(raf)
      el.style.transform = ""
    }
  }, [max])

  return ref
}
