#!/usr/bin/env node
// Spin up a client project from a tier preset:
//   npm run new-client -- --name=ClientName --tier=pro
// Tiers: starter | pro | chatbot | ecommerce  (see docs/TIERS.md)
//
// What it does:  1. copies .env.example -> .env (if .env doesn't exist)
//                2. points src/lib/site.config.js at the chosen tier preset
//                3. prints the remaining manual onboarding checklist

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TIERS = ["starter", "pro", "chatbot", "ecommerce"];

// --- parse --name= / --tier= args -------------------------------------------
const args = {};
for (const arg of process.argv.slice(2)) {
  const m = arg.match(/^--([a-z]+)=(.+)$/i);
  if (m) args[m[1].toLowerCase()] = m[2];
}

const name = args.name;
const tier = (args.tier || "").toLowerCase();

if (!name || !TIERS.includes(tier)) {
  console.error("Usage: npm run new-client -- --name=ClientName --tier=<tier>");
  console.error(`Tiers: ${TIERS.join(" | ")}   (see docs/TIERS.md)`);
  process.exit(1);
}

// --- 1. copy .env.example -> .env --------------------------------------------
const envExample = path.join(root, ".env.example");
const envFile = path.join(root, ".env");
if (fs.existsSync(envFile)) {
  console.log("• .env already exists — left untouched.");
} else {
  fs.copyFileSync(envExample, envFile);
  console.log("• Copied .env.example -> .env");
}

// --- 2. set the tier import line in site.config.js ---------------------------
const configPath = path.join(root, "src", "lib", "site.config.js");
const config = fs.readFileSync(configPath, "utf8");
const tierImportRe = /(import tier from "\.\.\/config\/tiers\/)[\w-]+(\.js";)/;

if (!tierImportRe.test(config)) {
  console.error("✗ Could not find the tier import line in src/lib/site.config.js — aborting.");
  process.exit(1);
}
fs.writeFileSync(configPath, config.replace(tierImportRe, `$1${tier}$2`));
console.log(`• site.config.js now uses the "${tier}" tier preset`);

// --- 3. remaining manual steps ------------------------------------------------
const perTier = {
  starter: [
    "Set WHATSAPP_URL in site.config.js — it is the only booking channel on this tier",
    "Write data.js content in English only (bilingual is off on Starter)",
  ],
  pro: [
    "Fill in PLACEHOLDER_CALENDLY_USERNAME + CALENDLY_EVENT_SLUG (docs/ADDON_BOOKING.md)",
  ],
  chatbot: [
    "Fill in PLACEHOLDER_CALENDLY_USERNAME + CALENDLY_EVENT_SLUG (docs/ADDON_BOOKING.md)",
    "Put the client's ANTHROPIC_API_KEY in .env (local) AND Netlify env vars (docs/ADDON_CHATBOT.md)",
  ],
  ecommerce: [
    "Replace the PRODUCTS array in data.js with the client's products (docs/ADDON_ECOMMERCE.md)",
    "Add product photos to public/products/ (square 800x800, <200KB WebP)",
  ],
};

console.log(`
✅ "${name}" initialised on the ${tier} tier. Remaining manual steps:

  1. src/lib/site.config.js — business identity (BUSINESS, BRAND),
     WhatsApp number, socials, hours
  2. src/lib/data.js — services, pricing, testimonials, FAQs, gallery, blog
${perTier[tier].map((s, i) => `  ${i + 3}. ${s}`).join("\n")}
  ${perTier[tier].length + 3}. Replace placeholder images in public/placeholders/
  ${perTier[tier].length + 4}. index.html — <title>, meta description, canonical URL, JSON-LD
  ${perTier[tier].length + 5}. Netlify — create the site, set env vars, deploy (docs/DEPLOYMENT.md)

Run "npm run dev" to review, docs/TIERS.md for tier details.`);
