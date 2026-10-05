import { useEffect, useRef, useState } from "react"
import { stats } from "../data/portfolio"

function useInView(threshold = 0.35) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

function CountUp({ value, start, delay = 0, duration = 1100 }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!start) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value)
      return
    }

    let raf
    let timeout
    const run = () => {
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / duration)
        // ease-out cubic
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    timeout = setTimeout(run, delay)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [start, value, delay, duration])

  return <>{String(n).padStart(2, "0")}</>
}

export default function StatsBand() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className="border-y border-hairline bg-paper-2 py-16 md:py-20"
      aria-label="Career numbers"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-y-12 px-6 md:grid-cols-4 md:px-10">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-2 md:px-8 ${
              i % 2 === 1 ? "border-l border-hairline" : ""
            } md:border-l md:first:border-l-0`}
          >
            <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-3">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="font-display text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.85] tracking-[-0.05em] text-ink">
              <CountUp value={stat.value} start={inView} delay={i * 140} />
            </p>
            <p className="mt-5 text-[0.95rem] font-semibold text-ink">
              {stat.label}
            </p>
            <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-clay">
              {stat.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
