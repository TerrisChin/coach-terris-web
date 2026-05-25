import { Section, Reveal, Eyebrow, Heading } from "../components/UI";
import { BENEFITS } from "../lib/data";

export default function Benefits() {
  return (
    <Section id="why" className="bg-navy-950">
      <Reveal className="text-center max-w-2xl mx-auto">
        <Eyebrow>Why Choose Me</Eyebrow>
        <Heading className="mt-4">Coaching that actually sticks</Heading>
        <p className="mt-4 text-white/60 text-lg">
          No cookie-cutter drills. Every lesson is built around how you learn, what scares you, and where you want to go.
        </p>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08}>
            <div className="group h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 hover:border-aqua-500/40 hover:from-aqua-500/[0.08] transition-all duration-300 hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-aqua-400 to-aqua-600 shadow-lg shadow-aqua-500/30 group-hover:scale-110 transition-transform">
                <b.icon className="h-6 w-6 text-navy-950" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg text-white">{b.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
