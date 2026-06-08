import { Section, Reveal, Eyebrow, Heading, Button, Pill } from "../components/UI";
import { SERVICES } from "../lib/data";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import { useCalendly } from "../useCalendly";

export default function Services() {
  const { openPopup } = useCalendly();
  return (
    <Section id="services" className="bg-navy-900">
      <Reveal className="text-center max-w-2xl mx-auto">
        <Eyebrow>Lessons & Programs</Eyebrow>
        <Heading className="mt-4">Find the right class for you</Heading>
        <p className="mt-4 text-white/60 text-lg">
          From first splashes to race-day starts — six focused programs covering every stage of the journey.
        </p>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <div className={`group relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
              s.popular
                ? "bg-gradient-to-b from-aqua-500/15 to-navy-800 ring-2 ring-aqua-500/50"
                : "bg-white/[0.04] ring-1 ring-white/10 hover:ring-aqua-500/30"
            }`}>
              {s.popular && (
                <span className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-aqua-400 to-aqua-600 px-3 py-1 text-xs font-bold text-navy-950">
                  <Sparkles className="h-3 w-3" /> Most Booked
                </span>
              )}
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-aqua-400 to-aqua-600 shadow-lg shadow-aqua-500/30 group-hover:rotate-6 transition-transform">
                <s.icon className="h-7 w-7 text-navy-950" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed flex-1">{s.desc}</p>

              <div className="mt-5 flex items-center gap-2">
                <Pill><Clock className="mr-1 h-3 w-3" />{s.duration}</Pill>
                <Pill tone="navy">{s.level}</Pill>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                  <span className="font-display font-extrabold text-2xl text-white">{s.price}</span>
                  <span className="text-sm text-white/50"> /session</span>
                </div>
                <Button onClick={openPopup} variant={s.popular ? "primary" : "outline"} className="!px-5 !py-2.5 text-sm">
                  Book Now <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
