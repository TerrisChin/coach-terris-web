import { useEffect, useState } from "react";
import { Section, Reveal, Eyebrow, Heading, Button } from "../components/UI";
import { Users, Clock, Waves, CheckCircle } from "lucide-react";
import { useCalendly } from "../useCalendly";

export default function BookingSection() {
  const { openPopup } = useCalendly();
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Check if Calendly is loaded
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        setIsCalendlyLoaded(true);
        clearInterval(checkCalendly);
      }
    }, 100);

    return () => clearInterval(checkCalendly);
  }, []);

  const features = [
    { icon: Users, label: "Private 1-on-1", desc: "Just you and Coach Terris" },
    { icon: Clock, label: "60 Minutes", desc: "Full comprehensive lesson" },
    { icon: Waves, label: "Your Pool", desc: "We come to you — KL, Cheras & Kajang" },
    { icon: CheckCircle, label: "Instant Confirm", desc: "Availability calendar in real-time" },
  ];

  return (
    <Section id="booking" className="bg-navy-950">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Info cards */}
        <div>
          <Reveal className="mb-8">
            <Eyebrow>Ready to start?</Eyebrow>
            <Heading className="mt-4 text-white">Book your free trial class</Heading>
            <p className="mt-4 text-white/70 text-lg leading-relaxed">
              Pick a time that works for you. No contracts, no commitment — just a free session to see if swimming lessons are right for you.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {features.map((feature, i) => (
              <Reveal key={feature.label} delay={i * 0.08}>
                <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 hover:border-aqua-500/30 transition-colors">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-aqua-500/15 mb-3">
                    <feature.icon className="h-6 w-6 text-aqua-400" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{feature.label}</h3>
                  <p className="text-xs text-white/50 mt-1">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {!isCalendlyLoaded && (
            <Reveal delay={0.4} className="mt-8">
              <Button onClick={openPopup} className="w-full sm:w-auto">
                Book Now
              </Button>
            </Reveal>
          )}
        </div>

        {/* Right: Calendly embed or fallback */}
        <Reveal delay={0.2} className="relative">
          <div className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden min-h-[600px] flex items-center justify-center">
            {isCalendlyLoaded ? (
              <div
                className="calendly-inline-widget w-full h-full"
                data-url="https://calendly.com/chinterris/free-trial-class?embed_domain=&embed_type=Inline"
              />
            ) : (
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-aqua-500/15 mb-6">
                  <Clock className="h-8 w-8 text-aqua-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Schedule Your Session</h3>
                <p className="text-white/60 text-sm mb-6">
                  Click below to view available times and book your free trial class.
                </p>
                <Button onClick={openPopup}>
                  Open Calendar
                </Button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
