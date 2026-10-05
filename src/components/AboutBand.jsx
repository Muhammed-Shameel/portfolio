import Reveal from "./Reveal"
import { profile, bandParagraphs } from "../data/portfolio"

/**
 * Full-bleed statement band: giant three-tone display lines over a
 * three-column paragraph rail.
 */
export default function AboutBand() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
        <div className="display-hero">
          <Reveal
            as="span"
            variant="reveal-fade"
            delay={0}
            className="block text-ink"
          >
            Grounding
          </Reveal>
          <Reveal
            as="span"
            variant="reveal-fade"
            delay={1}
            className="outline-clay block"
          >
            before
          </Reveal>
          <Reveal
            as="span"
            variant="reveal-fade"
            delay={2}
            className="block text-ink"
          >
            generation
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-10 md:mt-24 md:flex-row">
          <div className="grid max-w-[900px] gap-8 text-[0.85rem] leading-[1.9] text-ink-3 md:grid-cols-3">
            {bandParagraphs.map((para) => (
              <Reveal key={para.slice(0, 24)} variant="reveal-fade" as="p">
                {para}
              </Reveal>
            ))}
          </div>

          <Reveal
            as="div"
            variant="reveal-fade"
            className="hidden shrink-0 text-right font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-3 md:block"
          >
            <p>Abu Dhabi, United Arab Emirates</p>
            <p className="mt-2 text-clay">{profile.availability}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
