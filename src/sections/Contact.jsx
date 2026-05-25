import { useState } from "react";
import { motion } from "framer-motion";
import { Section, Reveal, Eyebrow, Heading, Button } from "../components/UI";
import { COACH } from "../lib/data";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, CalendarCheck, Languages, Home } from "lucide-react";

const FIELDS = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
  { name: "email", label: "Email", type: "email", placeholder: "jane@email.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+1 555 000 0000" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Adult Beginner", message: "" });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", service: "Adult Beginner", message: "" });
  };

  return (
    <Section id="contact" className="bg-navy-900">
      <Reveal className="text-center max-w-2xl mx-auto">
        <Eyebrow>Get In Touch</Eyebrow>
        <Heading className="mt-4">Book your first lesson</Heading>
        <p className="mt-4 text-white/60 text-lg">Book your slot instantly on Google Calendar, fill out the form, or message me on WhatsApp — I usually reply within a couple of hours.</p>
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-5 gap-8">
        {/* Form */}
        <Reveal className="lg:col-span-3">
          <form onSubmit={submit} className="rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-7 sm:p-9">
            <div className="grid sm:grid-cols-3 gap-4">
              {FIELDS.map((f) => (
                <div key={f.name} className={f.name === "name" ? "sm:col-span-3" : ""}>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">{f.label}</label>
                  <input
                    required type={f.type} placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                    className="w-full rounded-xl bg-navy-950/60 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/30 transition"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-white/70 mb-1.5">Interested in</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full rounded-xl bg-navy-950/60 border border-white/10 px-4 py-3 text-white focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/30 transition"
              >
                {["Kids Lessons", "Adult Beginner", "Private 1-on-1", "Stroke Correction", "Water Confidence", "Competitive"].map((s) => (
                  <option key={s} className="bg-navy-900">{s}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-white/70 mb-1.5">Message</label>
              <textarea
                rows={4} placeholder="Tell me a little about your goals or your child's experience…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl bg-navy-950/60 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/30 transition resize-none"
              />
            </div>
            <Button type="submit" className="mt-5 w-full">
              {sent ? <><CheckCircle2 className="h-5 w-5" /> Message Sent!</> : <><Send className="h-4 w-4" /> Send Booking Request</>}
            </Button>
            {sent && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-center text-sm text-aqua-400">
                Thanks! I'll be in touch shortly to confirm your slot.
              </motion.p>
            )}
          </form>
        </Reveal>

        {/* Info + map */}
        <div className="lg:col-span-2 space-y-4">
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-6 space-y-4">
              {[
                { icon: Phone, label: "Call", value: COACH.phone, href: `tel:${COACH.phone}` },
                { icon: Mail, label: "Email", value: COACH.email, href: `mailto:${COACH.email}` },
                { icon: MapPin, label: "Location", value: COACH.location },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-start gap-3 group">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-aqua-500/15 text-aqua-400 group-hover:bg-aqua-500 group-hover:text-navy-950 transition-colors">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-white/40">{c.label}</div>
                    <div className="text-white font-medium">{c.value}</div>
                  </div>
                </a>
              ))}
              <div className="rounded-xl bg-aqua-500/10 ring-1 ring-aqua-500/20 p-4">
                <div className="flex items-center gap-2 text-aqua-400 text-xs uppercase tracking-wide font-semibold mb-2">
                  <Home className="h-4 w-4" /> Regularly Coaching At
                </div>
                <ul className="space-y-1">
                  {COACH.venues.map((v) => (
                    <li key={v} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-aqua-400" /> {v}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-white/50">Have a pool elsewhere in KL? I'll travel to you too.</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-wide mb-2">
                  <Clock className="h-4 w-4" /> Operating Hours
                </div>
                {COACH.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm py-0.5">
                    <span className="text-white/60">{h.day}</span>
                    <span className="text-white font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-aqua-500/15 text-aqua-400">
                  <Languages className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/40">Languages</div>
                  <div className="text-white font-medium">{COACH.languages}</div>
                </div>
              </div>
              <Button as="a" href={COACH.booking} target="_blank" rel="noreferrer" className="w-full">
                <CalendarCheck className="h-4 w-4" /> Book on Google Calendar
              </Button>
              <Button as="a" href={COACH.whatsapp} target="_blank" rel="noreferrer" variant="secondary" className="w-full">
                <MessageCircle className="h-4 w-4 text-aqua-400" /> Chat on WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-3xl ring-1 ring-white/10 h-56">
              <iframe
                title="Pool location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=101.72%2C2.96%2C101.82%2C3.06&layer=mapnik&marker=3.01,101.77"
                className="h-full w-full grayscale-[30%] contrast-110"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
