import { useEffect, useState } from "react";
import { Section, Reveal, Eyebrow, Heading, Button } from "../../components/UI";
import { Users, Clock, Dumbbell, CheckCircle, MessageCircle } from "lucide-react";
import { booking } from "../../lib/site.config";
import { COACH } from "../../lib/data";
import { useCalendly } from "./useCalendly";

const CALENDLY_MODE = booking.mode === "calendly";

function CalendlyPanel({ openPopup, isLoaded }) {
  return isLoaded ? (
    <div
      className="calendly-inline-widget w-full h-full"
      data-url={`${booking.calendlyUrl}?embed_domain=&embed_type=Inline`}
    />
  ) : (
    <div className="text-center p-8">
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-aqua-500/15 mb-6">
        <Clock className="h-8 w-8 text-aqua-400" />
      </div>
      <h3 className="font-semibold text-white mb-2">Schedule Your Session</h3>
      <p className="text-white/60 text-sm mb-6">
        Click below to view available times and book your free trial session.
      </p>
      <Button onClick={openPopup}>Open Calendar</Button>
    </div>
  );
}

function WhatsAppPanel() {
  return (
    <div className="text-center p-8">
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-[#25D366]/15 mb-6">
        <MessageCircle className="h-8 w-8 text-[#25D366]" />
      </div>
      <h3 className="font-semibold text-white mb-2">Book via WhatsApp</h3>
      <p className="text-white/60 text-sm mb-6 max-w-xs mx-auto">
        Message us on WhatsApp with your preferred day and time — we usually
        confirm within a couple of hours.
      </p>
      <Button as="a" href={COACH.whatsapp} target="_blank" rel="noreferrer">
        <MessageCircle className="h-4 w-4" /> Book via WhatsApp
      </Button>
      <p className="mt-4 text-xs text-white/40">{COACH.phone}</p>
    </div>
  );
}

export default function BookingSection() {
  const { openPopup } = useCalendly(CALENDLY_MODE);
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    if (!CALENDLY_MODE) return undefined;
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        setIsCalendlyLoaded(true);
        clearInterval(checkCalendly);
      }
    }, 100);

    return () => clearInterval(checkCalendly);
  }, []);

  const features = [
    { icon: Users, label: "Private 1-on-1", desc: "Just you and your trainer" },
    { icon: Clock, label: "60 Minutes", desc: "Full comprehensive session" },
    { icon: Dumbbell, label: "Your Space", desc: "Our studio, or we come to you" },
    CALENDLY_MODE
      ? { icon: CheckCircle, label: "Instant Confirm", desc: "Availability calendar in real-time" }
      : { icon: CheckCircle, label: "Fast Confirm", desc: "Personal reply on WhatsApp" },
  ];

  return (
    <Section id="booking" className="bg-navy-950">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Info cards */}
        <div>
          <Reveal className="mb-8">
            <Eyebrow>Ready to start?</Eyebrow>
            <Heading className="mt-4 text-white">Book your free trial session</Heading>
            <p className="mt-4 text-white/70 text-lg leading-relaxed">
              Pick a time that works for you. No contracts, no commitment — just a free session to see if our coaching is right for you.
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

          {CALENDLY_MODE && !isCalendlyLoaded && (
            <Reveal delay={0.4} className="mt-8">
              <Button onClick={openPopup} className="w-full sm:w-auto">
                Book Now
              </Button>
            </Reveal>
          )}
        </div>

        {/* Right: Calendly embed, or WhatsApp fallback for Starter-tier clients */}
        <Reveal delay={0.2} className="relative">
          <div className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden min-h-[600px] flex items-center justify-center">
            {CALENDLY_MODE ? (
              <CalendlyPanel openPopup={openPopup} isLoaded={isCalendlyLoaded} />
            ) : (
              <WhatsAppPanel />
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
