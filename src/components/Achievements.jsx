import Section from "./Section"
import Reveal from "./Reveal"
import { achievements, certificates } from "../data/portfolio"

export default function Achievements() {
  return (
    <Section
      id="achievements"
      index="06"
      label="Achievements"
      title="Recognition & Certificates"
      wide={false}
    >
      <div className="grid gap-12 md:grid-cols-12">
        {/* featured block */}
        <Reveal
          variant="reveal-left"
          className="border border-hairline bg-card p-8 md:col-span-5 md:p-10"
        >
          <span className="pill pill-build">Featured project</span>
          <h3 className="mt-6 font-display text-[1.7rem] font-bold leading-tight tracking-[-0.03em] text-ink md:text-[2.1rem]">
            {achievements[0].title}
          </h3>
          <p className="mt-4 text-[0.9rem] leading-[1.8] text-ink-3">
            {achievements[0].detail} An AI showcase slot after the training
            hackathon — the retrieval pipeline held up in front of reviewers
            who asked where the numbers came from.
          </p>
        </Reveal>

        {/* certifications ledger */}
        <div className="md:col-span-7">
          {certificates.map((cert, i) => (
            <Reveal
              key={cert}
              variant="reveal-fade"
              delay={i % 4}
              as="div"
              className="group flex items-baseline justify-between gap-6 border-b border-hairline py-5 first:border-t"
            >
              <span className="font-mono text-[0.7rem] tracking-[0.18em] text-ink-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[0.95rem] font-medium text-ink transition-colors group-hover:text-clay md:text-[1.05rem]">
                {cert}
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-4">
                Certified
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
