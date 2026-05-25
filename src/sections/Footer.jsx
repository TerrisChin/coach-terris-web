import { useState } from "react";
import { Waves, Instagram, Facebook, Youtube, Send } from "lucide-react";
import { COACH } from "../lib/data";

const NAV = [
  ["About", "about"], ["Services", "services"], ["Pricing", "pricing"],
  ["Gallery", "gallery"], ["Reviews", "testimonials"], ["Tips", "blog"], ["Contact", "contact"],
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative bg-navy-950 border-t border-white/10 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[60rem] rounded-full bg-aqua-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-aqua-400 to-aqua-600">
                <Waves className="h-5 w-5 text-navy-950" strokeWidth={2.5} />
              </span>
              <span className="font-display font-extrabold text-lg text-white">Coach<span className="text-aqua-400">Terris</span></span>
            </div>
            <p className="mt-4 text-white/55 max-w-sm">
              Premium mobile swimming coaching for kids and adults across KL, Cheras & Kajang. Certified, patient, and a fellow endurance athlete genuinely invested in your progress.
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">Get free swimming tips</p>
              <form onSubmit={(e) => { e.preventDefault(); setDone(true); setEmail(""); }} className="mt-3 flex gap-2 max-w-sm">
                <input
                  required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-aqua-500 focus:outline-none"
                />
                <button className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-r from-aqua-400 to-aqua-600 text-navy-950 hover:opacity-90 transition">
                  <Send className="h-4 w-4" />
                </button>
              </form>
              {done && <p className="mt-2 text-sm text-aqua-400">You're subscribed! 🏊</p>}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-2">
              {NAV.map(([label, id]) => (
                <li key={id}>
                  <button onClick={() => go(id)} className="text-white/55 hover:text-aqua-400 transition-colors text-sm">{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-white">Reach out</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/55">
              <li><a href={`tel:${COACH.phone}`} className="hover:text-aqua-400">{COACH.phone}</a></li>
              <li><a href={`mailto:${COACH.email}`} className="hover:text-aqua-400">{COACH.email}</a></li>
              <li>{COACH.location}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Instagram, href: COACH.socials.instagram, label: "Instagram" },
                { Icon: Facebook, href: COACH.socials.facebook, label: "Facebook" },
                { Icon: Youtube, href: COACH.socials.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/70 hover:bg-aqua-500 hover:text-navy-950 transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
              <a
                href={COACH.socials.xiaohongshu}
                target="_blank"
                rel="noreferrer"
                aria-label="Xiaohongshu (RED)"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-[#ff2442] font-display font-extrabold text-xs hover:bg-[#ff2442] hover:text-white transition-colors"
              >
                RED
              </a>
              <a
                href={COACH.socials.superprof}
                target="_blank"
                rel="noreferrer"
                aria-label="Superprof profile"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-aqua-300 font-display font-extrabold text-[11px] hover:bg-aqua-500 hover:text-navy-950 transition-colors"
              >
                SP
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Coach Terris Swim. All rights reserved.</p>
          <p>Built with care for swimmers everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
