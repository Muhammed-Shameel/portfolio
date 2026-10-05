import { useEffect, useRef } from "react"

const SCALE_IDLE = 1
const SCALE_INTERACTIVE = 1.9
const SCALE_TAGGED = 2.6

/**
 * A single lagging clay ring that trails the pointer. The native cursor stays
 * visible so text and controls remain usable — this only adds a design accent.
 * Elements can opt into a mono tag with `data-cursor="VIEW"`: the wrapper
 * follows the pointer, the ring scales inside it and the label sits unscaled at
 * the same centre.
 */
export default function Cursor() {
  const wrapRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!wrap || !ring || !label) return

    const finePointer = window.matchMedia("(pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!finePointer || reduced) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let scale = SCALE_IDLE
    let raf

    const onMove = (event) => {
      x = event.clientX
      y = event.clientY
    }

    const onOver = (event) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const tagged = target.closest("[data-cursor]")
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea",
      )

      if (tagged) {
        scale = SCALE_TAGGED
        label.textContent = tagged.dataset.cursor
        label.style.opacity = "1"
        ring.style.borderColor = "var(--color-clay)"
      } else {
        scale = interactive ? SCALE_INTERACTIVE : SCALE_IDLE
        label.textContent = ""
        label.style.opacity = "0"
        ring.style.borderColor = interactive
          ? "var(--color-clay)"
          : "var(--cursor-ring)"
      }
    }

    const onLeave = () => {
      wrap.style.opacity = "0"
    }
    const onEnter = () => {
      wrap.style.opacity = "1"
    }

    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      wrap.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      ring.style.transform = `translate(-50%, -50%) scale(${scale})`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover", onOver)
    document.documentElement.addEventListener("mouseleave", onLeave)
    document.documentElement.addEventListener("mouseenter", onEnter)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      document.documentElement.removeEventListener("mouseenter", onEnter)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden opacity-0 transition-opacity duration-300 md:block"
    >
      <span
        ref={ringRef}
        className="absolute left-0 top-0 block h-8 w-8 rounded-full transition-[transform,border-color] duration-200 ease-out"
        style={{
          border: "1px solid var(--cursor-ring)",
        }}
      />
      <span
        ref={labelRef}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-clay opacity-0 transition-opacity duration-200"
      />
    </div>
  )
}
