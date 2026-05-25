import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Reveal, Eyebrow, Heading, Button } from "../components/UI";
import { PRICING, FAQS, COACH } from "../lib/data";
import { Check, Plus, Sparkles } from "lucide-react";

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <Section id="pricing" className="bg-navy-950">
      <Reveal className="text-center max-w-2xl mx-auto">
        <Eyebrow>Pricing</Eyebrow>
        <Heading className="mt-4">Simple, honest pricing</Heading>
        <p className="mt-4 text-white/60 text-lg">No contracts, no hidden fees. Start with a trial and upgrade whenever you're ready.</p>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {PRICING.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07}>
            <div className={`relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300 ${
              p.popular
                ? "bg-gradient-to-b from-aqua-500/20 via-navy-800 to-navy-900 ring-2 ring-aqua-400 lg:scale-[1.04] shadow-2xl shadow-aqua-500/20"
                : "bg-white/[0.04] ring-1 ring-white/10 hover:ring-aqua-500/30 hover:-translate-y-1"
            }`}>
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-aqua-400 to-aqua-600 px-4 py-1 text-xs font-bold text-navy-950 whitespace-nowrap">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </span>
              )}
              <h3 className="font-display font-bold text-lg text-white">{p.name}</h3>
              <p className="text-sm text-white/50">{p.desc}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display font-extrabold text-4xl text-white">{p.price}</span>
                <span className="mb-1 text-sm text-white/50">{p.per}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-aqua-500/20">
                      <Check className="h-3 w-3 text-aqua-400" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button as="a" href={COACH.booking} target="_blank" rel="noreferrer" variant={p.popular ? "primary" : "secondary"} className="mt-7 w-full">
                {p.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-28 max-w-3xl mx-auto">
        <Reveal className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <Heading className="mt-4">Questions, answered</Heading>
        </Reveal>
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={`rounded-2xl border transition-colors ${open ? "border-aqua-500/40 bg-white/[0.05]" : "border-white/10 bg-white/[0.02]"}`}>
                  <button onClick={() => setOpenFaq(open ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                    <span className="font-semibold text-white">{f.q}</span>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-aqua-500/15 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
                      <Plus className="h-4 w-4 text-aqua-400" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <p className="px-5 pb-5 text-white/65 leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
