import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Waves, MessageCircle, CalendarCheck } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { COACH } from "../lib/data";
import { Button } from "./UI";

const LINKS = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Pricing", "pricing"],
  ["Gallery", "gallery"],
  ["Reviews", "testimonials"],
  ["Tips", "blog"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = LINKS.map(([, id]) => id);
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) { setActive(id); break; }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2.5 bg-navy-950/80 dark:bg-navy-950/80 backdrop-blur-xl border-b border-white/10"
            : "py-4 bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <button onClick={() => go("home")} className="flex items-center gap-2.5 group">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-aqua-400 to-aqua-600 shadow-lg shadow-aqua-500/30 group-hover:rotate-6 transition-transform">
              <Waves className="h-5 w-5 text-navy-950" strokeWidth={2.5} />
            </span>
            <span className="font-display font-extrabold text-lg leading-none text-white">
              Coach<span className="text-aqua-400">Terris</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {LINKS.map(([label, id]) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active === id ? "text-aqua-400" : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                  {active === id && (
                    <motion.span layoutId="navdot" className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-aqua-400" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-10 w-10 place-items-center rounded-full text-white/90 hover:bg-white/10 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={dark ? "moon" : "sun"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  {dark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
            <Button as="a" href={COACH.booking} target="_blank" rel="noreferrer" className="hidden sm:inline-flex !px-5 !py-2.5 text-sm">
              <CalendarCheck className="h-4 w-4" /> Book Now
            </Button>
            <button onClick={() => setOpen(true)} aria-label="Open menu" className="lg:hidden grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 z-[60] bg-navy-950/70 backdrop-blur-sm lg:hidden" />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-[70] h-full w-72 bg-navy-900 border-l border-white/10 p-6 lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold text-white">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="space-y-1">
                {LINKS.map(([label, id], i) => (
                  <motion.li key={id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                    <button onClick={() => go(id)} className={`block w-full rounded-xl px-4 py-3 text-left font-medium transition-colors ${active === id ? "bg-aqua-500/15 text-aqua-400" : "text-white/80 hover:bg-white/5"}`}>
                      {label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <Button as="a" href={COACH.booking} target="_blank" rel="noreferrer" className="mt-6 w-full">
                <CalendarCheck className="h-4 w-4" /> Book a Trial
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
