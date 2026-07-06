// Tier preset: Simple E-commerce (see docs/TIERS.md)
// Product showcase with WhatsApp orders, bilingual, no booking system
// (book-style CTAs fall back to WhatsApp automatically).
const tier = {
  id: "ecommerce",
  label: "Simple E-commerce",
  featureFlags: {
    booking: false,
    aiChatbot: false,
    ecommerce: true,
    bilingual: true,
  },
  booking: { mode: "whatsapp" },
  sections: null, // all sections (booking section is off via its flag)
};

export default tier;
