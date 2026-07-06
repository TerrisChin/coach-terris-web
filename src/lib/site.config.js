// ============================================================================
// SITE CONFIG — the single place to customize this template for a new client.
// Everything here is PLACEHOLDER content for the fictional "Demo Studio".
// Search for "REPLACE" to find every value that must be changed per client.
// ============================================================================

// ═══════════════════════════════════════════════════════════════════════════
// TIER — THE SINGLE LINE TO CHANGE PER CLIENT (or run
//   npm run new-client -- --name=ClientName --tier=pro
// which changes it for you). Presets live in src/config/tiers/:
//   starter.js | pro.js | chatbot.js | ecommerce.js   (sellable tiers)
//   _demo.js                                          (template demo: all on)
// See docs/TIERS.md for what each tier includes.
// ═══════════════════════════════════════════════════════════════════════════
import tier from "../config/tiers/_demo.js";

export const TIER = tier;

// Feature flags come from the tier preset:
//   booking   — booking add-on (docs/ADDON_BOOKING.md)
//   aiChatbot — AI chatbot add-on, needs ANTHROPIC_API_KEY (docs/ADDON_CHATBOT.md)
//   ecommerce — shop add-on (docs/ADDON_ECOMMERCE.md)
//   bilingual — render 中文 alongside English in structured content (shop)
export const featureFlags = { ...tier.featureFlags };

// Which page sections render (tier.sections; null = all).
// IDs match the <Section id> values used in App.jsx and the nav.
export const hasSection = (id) => !tier.sections || tier.sections.includes(id);

// ---------------------------------------------------------------------------
// WhatsApp — REPLACE with the client's number (digits only, country code, no +)
// ---------------------------------------------------------------------------
const WHATSAPP_URL = "https://wa.me/60123456789"; // REPLACE

// ---------------------------------------------------------------------------
// Booking (see docs/ADDON_BOOKING.md)
// mode "calendly": embedded Calendly scheduling — set calendlyUrl below.
// mode "whatsapp": no Calendly account needed (Starter tier) — all booking
//                  buttons become "Book via WhatsApp" using WHATSAPP_URL.
// ---------------------------------------------------------------------------
export const PLACEHOLDER_CALENDLY_USERNAME = "your-calendly-username"; // REPLACE
export const CALENDLY_EVENT_SLUG = "free-trial-session"; // REPLACE if different

export const CALENDLY_URL = `https://calendly.com/${PLACEHOLDER_CALENDLY_USERNAME}/${CALENDLY_EVENT_SLUG}`;

export const booking = {
  mode: tier.booking?.mode ?? "calendly", // "calendly" | "whatsapp" — from the tier preset
  calendlyUrl: CALENDLY_URL,
};

// The link behind generic "Book Now" hrefs (Navbar, Contact, banners):
// Calendly when the add-on is active in calendly mode, WhatsApp otherwise.
export const BOOKING_LINK =
  featureFlags.booking && booking.mode === "calendly" ? booking.calendlyUrl : WHATSAPP_URL;

// ---------------------------------------------------------------------------
// Brand — the two-tone logo text used in the Navbar and Footer
// (renders as: Demo<accent>Studio</accent>)
// ---------------------------------------------------------------------------
export const BRAND = {
  first: "Demo", // REPLACE
  accent: "Studio", // REPLACE
};

// ---------------------------------------------------------------------------
// Business identity — consumed everywhere as `COACH` via src/lib/data.js
// ---------------------------------------------------------------------------
export const BUSINESS = {
  name: "Alex Rivera", // REPLACE — owner / lead trainer full name
  short: "Demo Studio", // REPLACE — public-facing business name
  tagline: "Professional Personal Training Studio · Bilingual EN/中文 · Kuala Lumpur.",
  phone: "+60 12-345 6789", // REPLACE
  whatsapp: WHATSAPP_URL,
  email: "hello@demostudio.example", // REPLACE
  location: "Train at our studio, or we come to you — Kuala Lumpur",
  venues: ["Demo Studio HQ, Jalan Contoh, KL", "Home & condo gyms across KL"],
  booking: BOOKING_LINK, // primary "Book Now" link (Navbar, Contact, banners)
  languages: "English & 简体中文 (Simplified Chinese)",
  hours: [
    { day: "Mon – Fri", time: "6:00 AM – 9:00 PM" },
    { day: "Saturday", time: "7:00 AM – 6:00 PM" },
    { day: "Sunday", time: "8:00 AM – 2:00 PM" },
  ],
  instagramHandle: "@demostudio.fit", // REPLACE
  socials: {
    instagram: "#", // REPLACE
    facebook: "#", // REPLACE
    youtube: "#", // REPLACE
    tiktok: "#", // REPLACE
    xiaohongshu: "#", // REPLACE
    superprof: "#", // REPLACE
  },
};
