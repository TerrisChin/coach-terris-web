// Tier preset: Pro Booking Site (see docs/TIERS.md)
// Embedded Calendly booking, bilingual EN/中文, all sections.
const tier = {
  id: "pro",
  label: "Pro Booking Site",
  featureFlags: {
    booking: true,
    aiChatbot: false,
    ecommerce: false,
    bilingual: true,
  },
  booking: { mode: "calendly" },
  sections: null, // all sections
};

export default tier;
