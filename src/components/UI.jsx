import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Section wrapper with consistent padding + id for nav
export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

// Scroll-triggered reveal
export function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Eyebrow label
export function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-aqua-500 dark:text-aqua-400">
      <span className="h-px w-8 bg-aqua-500/60" />
      {children}
    </span>
  );
}

// Heading
export function Heading({ children, className = "" }) {
  return (
    <h2 className={`font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-navy-900 dark:text-white text-balance ${className}`}>
      {children}
    </h2>
  );
}

// Primary / secondary buttons
export function Button({ children, variant = "primary", as = "button", className = "", ...props }) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
  const styles = {
    primary:
      "bg-gradient-to-r from-aqua-400 to-aqua-600 text-navy-950 shadow-lg shadow-aqua-500/30 hover:shadow-xl hover:shadow-aqua-500/40 hover:-translate-y-0.5",
    secondary:
      "glass text-white hover:bg-white/15 border-white/20",
    outline:
      "border-2 border-aqua-500 text-aqua-600 dark:text-aqua-400 hover:bg-aqua-500 hover:text-navy-950",
    ghost:
      "text-navy-700 dark:text-navy-100 hover:text-aqua-500",
  };
  const Comp = motion[as] || motion.button;
  return (
    <Comp whileTap={{ scale: 0.96 }} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  );
}

// Animated counter
export function Counter({ to, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return controls.stop;
    }
  }, [inView, to, count, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

// Level badge for service cards
export function Pill({ children, tone = "aqua" }) {
  const tones = {
    aqua: "bg-aqua-500/15 text-aqua-700 dark:text-aqua-300 ring-aqua-500/30",
    navy: "bg-navy-500/15 text-navy-700 dark:text-navy-200 ring-navy-500/30",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${tones[tone]}`}>
      {children}
    </span>
  );
}
