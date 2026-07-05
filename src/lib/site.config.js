// ============================================================================
// SITE CONFIG — the single place to customize this template for a new client.
// Everything here is PLACEHOLDER content for the fictional "Demo Studio".
// Search for "REPLACE" to find every value that must be changed per client.
// ============================================================================

// ---------------------------------------------------------------------------
// Calendly — REPLACE with the client's Calendly username (calendly.com/<username>)
// and the event slug of the booking page you want to open.
// ---------------------------------------------------------------------------
export const PLACEHOLDER_CALENDLY_USERNAME = "your-calendly-username"; // REPLACE
export const CALENDLY_EVENT_SLUG = "free-trial-session"; // REPLACE if different

export const CALENDLY_URL = `https://calendly.com/${PLACEHOLDER_CALENDLY_USERNAME}/${CALENDLY_EVENT_SLUG}`;

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
  whatsapp: "https://wa.me/60123456789", // REPLACE
  email: "hello@demostudio.example", // REPLACE
  location: "Train at our studio, or we come to you — Kuala Lumpur",
  venues: ["Demo Studio HQ, Jalan Contoh, KL", "Home & condo gyms across KL"],
  booking: CALENDLY_URL, // primary "Book Now" link (Navbar, Contact, banners)
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
