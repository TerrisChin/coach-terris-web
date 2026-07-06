// Tier preset: Starter Booking Site (see docs/TIERS.md)
// WhatsApp-only booking, English-only, trimmed to 4 sections.
const tier = {
  id: "starter",
  label: "Starter Booking Site",
  featureFlags: {
    booking: true,
    aiChatbot: false,
    ecommerce: false,
    bilingual: false,
  },
  booking: { mode: "whatsapp" },
  // Sections included on the page (null = all). IDs match <Section id>.
  // Starter is capped at 4 pages: Home, Services, About, Contact.
  sections: ["home", "services", "about", "contact"],
};

export default tier;
