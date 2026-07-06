// Tier preset: TEMPLATE DEMO ONLY — not a sellable tier.
// Turns every add-on on so the demo site showcases the full template.
// Client projects should use starter / pro / chatbot / ecommerce instead
// (run `npm run new-client -- --name=X --tier=pro`).
const tier = {
  id: "_demo",
  label: "Template Demo (all features)",
  featureFlags: {
    booking: true,
    aiChatbot: true,
    ecommerce: true,
    bilingual: true,
  },
  booking: { mode: "calendly" },
  sections: null, // all sections
};

export default tier;
