import { Section, Reveal, Eyebrow, Heading } from "../components/UI";
import { SCHEDULE, SAFETY_TIPS } from "../lib/data";
import { LifeBuoy } from "lucide-react";

const DAYS = ["mon", "tue", "wed", "thu", "fri"];
const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default function Schedule() {
  return (
    <Section id="schedule" className="bg-navy-900">
      <div className="grid lg:grid-cols-5 gap-12">
        {/* Schedule table */}
        <div className="lg:col-span-3">
          <Reveal><Eyebrow>Weekly Schedule</Eyebrow></Reveal>
          <Reveal delay={0.05}><Heading className="mt-4">This week at the pool</Heading></Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-white/10">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 text-left font-semibold text-white/50">Time</th>
                    {DAY_LABELS.map((d) => (
                      <th key={d} className="p-4 text-left font-semibold text-aqua-400">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE.map((row, i) => (
                    <tr key={row.time} className={i % 2 ? "bg-white/[0.02]" : ""}>
                      <td className="p-4 font-semibold text-white whitespace-nowrap">{row.time}</td>
                      {DAYS.map((d) => (
                        <td key={d} className="p-4 text-white/65">{row[d]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-white/40">* Slots fill quickly — message to confirm availability.</p>
          </Reveal>
        </div>

        {/* Safety tips */}
        <div className="lg:col-span-2">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-aqua-400 font-semibold">
              <LifeBuoy className="h-5 w-5" /> Water Safety Tips
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="mt-3 font-display font-bold text-2xl text-white">Stay safe, swim smart</h3>
          </Reveal>
          <div className="mt-6 space-y-3">
            {SAFETY_TIPS.map((t, i) => (
              <Reveal key={t.title} delay={0.08 * i}>
                <div className="flex gap-4 rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/10">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-aqua-500/15 font-display font-bold text-aqua-400">{i + 1}</span>
                  <div>
                    <h4 className="font-semibold text-white">{t.title}</h4>
                    <p className="text-sm text-white/60">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
