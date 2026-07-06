// Tier preset: Booking + AI Chatbot (see docs/TIERS.md)
// Everything in Pro, plus the AI chatbot (requires ANTHROPIC_API_KEY on
// Netlify — see docs/ADDON_CHATBOT.md).
import pro from "./pro.js";

const tier = {
  ...pro,
  id: "chatbot",
  label: "Booking + AI Chatbot",
  featureFlags: {
    ...pro.featureFlags,
    aiChatbot: true,
  },
};

export default tier;
