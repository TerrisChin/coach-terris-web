# Template Conversion Audit — coach-terris-web

Audit of all hardcoded personal/business content, for converting this site into a
reusable client-site template. **No code changes yet — inventory only.**

Stack: React 18 + Vite + Tailwind, deployed on Vercel (serverless `api/chat.js`).
Audit date: 2026-07-05 · Branch: `template-base`

---

## (a) Already centralized — `src/lib/data.js`

Everything below lives in `src/lib/data.js` and is consumed via imports. This is the
foundation the template config should grow from.

- [x] `COACH` — name ("Terris Chin"), short name ("Coach Terris"), tagline, phone
      (+60 11-2623 9514), WhatsApp link (`wa.me/601126239514`), email
      (chinterris@gmail.com), location blurb, venues (You Residence Cheras, Pearl
      Avenue Kajang), **Google Calendar booking link** (`calendar.app.google/...`),
      languages, operating hours, socials (Instagram/FB/YouTube/TikTok are `"#"`
      placeholders; Xiaohongshu and Superprof are real URLs)
- [x] `BENEFITS` — 4 cards, swimming/mobile-coaching copy, bilingual EN/中文 titles
- [x] `STATS` — 100+ students, 3+ yrs, Asia Triathlon Cup 2026
- [x] `SERVICES` — 4 services with **RM prices** (RM88+, RM103+, RM100, Custom)
- [x] `PRICING` — 2 plans with **RM prices** (RM 130, RM 100) and package pricing
      (RM 460 / RM 888 / RM 1,030 / RM 552 / RM 880)
- [x] `TESTIMONIALS` — 3 Superprof reviews (Hyejin, Jorson, Wong); avatar images are
      `i.pravatar.cc` hotlinks
- [x] `TIMELINE` — career milestones 2024–2026
- [x] `CERTS` — 4 certifications (SWIM THE WORLD, Bronze Medallion, EAR, Triathlon)
- [x] `FAQS` — 6 Q&As, swimming-specific, one fully bilingual answer
- [x] `SCHEDULE` — weekly class timetable
- [x] `SAFETY_TIPS` — 3 water-safety tips
- [x] `GALLERY` — 8 image paths + alt text (alts mention "Coach Terris", KL/Cheras/Kajang)
- [x] `PARTNERS` — 6 affiliation names
- [x] `BLOG` — 3 full swimming articles written in Coach Terris's voice

Components that correctly consume `data.js` (no changes needed to their data flow):
`Contact.jsx`, `FloatingActions.jsx` (WhatsApp URL), `Hero.jsx` (tagline, WhatsApp),
`Extras.jsx` (booking link, socials), `Benefits/Services/Pricing/Testimonials/
Schedule/Blog/Gallery/About` (list data), `ChatBot.jsx` (interpolates COACH/SERVICES/
PRICING/FAQS into the prompt).

---

## (b) Needs extraction — hardcoded OUTSIDE `data.js`

### `index.html` (SEO/meta — nothing here is centralized)
- [ ] `<title>` — "Coach Terris | Mobile Swimming Lessons in KL, Cheras & Kajang" (line 6)
- [ ] `meta description` + `keywords` — swimming-specific (lines 7–8)
- [ ] `canonical` — `https://coachterrisswim.com/` (line 10)
- [ ] Open Graph title/description/image — OG image is an Unsplash hotlink (lines 12–15)
- [ ] Twitter card title/description (lines 17–19)
- [ ] JSON-LD `SportsActivityLocation` — business name, **phone +60-11-2623-9514**,
      address (KL / Cheras / Kajang) (lines 20–30)
- [ ] `theme-color` #061528 (brandable) (line 9)
- [ ] Note: **no favicon `<link>` and no web manifest exist at all** — `public/favicon.svg`
      is never referenced; add both as template slots

### Components / sections
- [ ] `src/components/Navbar.jsx:65` — logo text `Coach<span>Terris</span>`
- [ ] `src/components/FloatingActions.jsx:42` — tooltip "👋 Questions? Chat with Coach Terris!"
- [ ] `src/sections/Hero.jsx:42–52` — headline "Learn Swimming with Confidence",
      sub-copy (KL, Cheras & Kajang), image alt "Coach Terris diving…" (18)
- [ ] `src/sections/Hero.jsx:66–72` — `i.pravatar.cc` avatar strip + "Trusted by 100+
      happy swimmers"
- [ ] `src/sections/About.jsx:15–16` — photo `/images/coach-terris.jpeg` + alt
- [ ] `src/sections/About.jsx:42` — full bio paragraph (bilingual, triathlete story)
- [ ] `src/sections/About.jsx:49` — personal quote
- [ ] `src/sections/BookingSection.jsx:23,25` — "Just you and Coach Terris",
      "We come to you — KL, Cheras & Kajang"
- [ ] `src/sections/Contact.jsx:29` — intro copy (Google Calendar / WhatsApp)
- [ ] `src/sections/Contact.jsx:56` — service dropdown options (swimming-specific)
- [ ] `src/sections/Contact.jsx:111` — "Have a pool elsewhere in KL?…"
- [ ] `src/sections/Contact.jsx:144–149` — **OpenStreetMap iframe with hardcoded
      Cheras/Kajang bbox + marker coordinates**
- [ ] `src/sections/Extras.jsx:14–28` (TrialBanner) — copy incl. "**$25 trial session**"
      (⚠️ inconsistent currency — site is RM elsewhere)
- [ ] `src/sections/Extras.jsx:59` — Instagram handle "@coachterris.swim"
- [ ] `src/sections/Gallery.jsx:25–29` — before/after slider images + venue badges
      "Pearl Avenue, Kajang" / "You Residence, Cheras"
- [ ] `src/sections/Gallery.jsx:45–46` — heading "Moments in the water" + copy
- [ ] `src/sections/Blog.jsx:13,16` — "Swimming Tips" eyebrow + intro copy
- [ ] `src/sections/Schedule.jsx:15,47,51` — "This week at the pool", "Water Safety
      Tips", "Stay safe, swim smart"
- [ ] `src/sections/Testimonials.jsx:28` — "Loved by swimmers & parents"
- [ ] `src/sections/Footer.jsx:26,29,32,100–101` — logo text, blurb (KL/Cheras/Kajang),
      newsletter copy "Get free swimming tips", © "Coach Terris Swim"
- [ ] `src/sections/ChatBot.jsx` — see section (d); prompt facts, greeting (43),
      suggestions (33–38), error fallbacks (80,82), widget header (120), footnote (175)

### Docs (low priority, but ship with the repo)
- [ ] `README.md` — "Coach Terris" references
- [ ] `DEPLOYMENT.md` — written for this client ("Coach Terris Website", repo name)

### Bilingual EN/中文 status (question 6)
There is **no i18n framework and no locale files** — bilingual content is mixed
EN+中文 inside single strings. Centralized bilingual strings: `data.js` (tagline,
BENEFITS titles, FAQS, languages field). Hardcoded bilingual strings **outside**
data.js: `About.jsx:42` (简体中文 in bio), `ChatBot.jsx:8,13,14,37,43` (prompt,
suggestion "可以用中文教学吗？", greeting "…in English or 中文!"). A template needs a
decision here: keep the mixed-string style as a config value, or introduce real i18n.

---

## (c) Client-specific assets

### Client photos — all in `public/images/` (all referenced via data.js or sections)
- [ ] `coach-terris.jpeg` — personal photo; **filename itself is client-specific**
- [ ] `g1-lesson-poolside.jpeg`, `g2-kid-peace-sign.jpeg`, `g3-noodle-coaching.jpeg`,
      `g4-kickboard.jpeg`, `g5-condo-pool.jpeg`, `g6-dive.jpeg` — lesson photos
      (g6 doubles as the hero background)
- [ ] `medals.jpeg`, `team-photo.jpeg` — personal achievement photos

### Generic / scaffold assets
- [x] `public/favicon.svg` — abstract purple/blue mark, not personal (and currently
      unused — no link tag in index.html)
- [x] `public/icons.svg` — unreferenced anywhere; candidate for deletion
- [x] `src/assets/react.svg`, `src/assets/vite.svg` — Vite scaffold leftovers, unused
- [x] `src/assets/hero.png` — **unreferenced** (hero uses `/images/g6-dive.jpeg`);
      candidate for deletion or template placeholder

### Third-party hotlinked images (template should replace with local placeholders)
- [ ] `i.pravatar.cc` avatars — Hero trust row (Hero.jsx:67) + testimonial photos (data.js)
- [ ] Unsplash OG image (index.html:15)

---

## (d) Integration config

### Calendly (question 4) — username `chinterris` hardcoded in 2 places
- [ ] `src/useCalendly.js:28` — popup URL
      `https://calendly.com/chinterris/free-trial-class` (used by Hero, Services,
      Pricing "Book" buttons via `openPopup`)
- [ ] `src/sections/BookingSection.jsx:71` — inline embed
      `data-url="https://calendly.com/chinterris/free-trial-class?embed_domain=&embed_type=Inline"`
- Note: the site has **two booking systems** — Calendly (popup + inline embed) and the
  `COACH.booking` Google Calendar link (used in Contact.jsx:133 and Extras.jsx
  TrialBanner). The template should consolidate to one configurable booking URL.

### Anthropic chatbot (question 5)
- Frontend: `src/sections/ChatBot.jsx` — the whole widget. The **system prompt
  (`KNOWLEDGE`, lines 7–31) lives here in the client bundle**: it interpolates
  COACH/SERVICES/PRICING/FAQS from data.js but also hardcodes name, certifications,
  service area, venues, hours, and "5.0 on Superprof". Being client-side, the prompt
  is visible to any visitor and is sent with every request.
- Launcher: `ChatBot.jsx` renders its own floating button (bottom-left);
  `FloatingActions.jsx` renders the WhatsApp button (bottom-right).
- API route: `api/chat.js` — Vercel serverless function; proxies to
  `https://api.anthropic.com/v1/messages`, model **`claude-sonnet-4-20250514`**
  (dated pin — consider `claude-sonnet-4-6` for the template), max_tokens 1000,
  key from `ANTHROPIC_API_KEY` env var (correctly server-side only).
- Routing: `vercel.json` rewrites `/api/*` to the function.
- Template concerns: system prompt should be assembled from the central config
  (ideally server-side), and the model ID should be a config/env value.

### Netlify / deployment (question re: Netlify config)
- [ ] `vercel.json` — build command, output dir, `/api/*` rewrite. **This project is
      Vercel-shaped, not Netlify**: `api/chat.js` uses the Vercel `(req, res)`
      signature and would need conversion to Netlify Functions format.
- [ ] `.netlify/` folder exists locally (untracked, gitignored) — evidence of Netlify
      CLI experiments, but there is **no `netlify.toml`** and no Netlify functions dir.
- [ ] `DEPLOYMENT.md` — Vercel-only instructions, client-specific wording.
- Template decision needed: pick one host (or ship configs for both) and make
  `ANTHROPIC_API_KEY` the only required secret.

---

## Summary for the refactor

1. **Good news:** ~80% of the visible content is already in `src/lib/data.js`.
2. **Main extraction targets:** `index.html` meta/SEO block, section headings and
   narrative copy in 12 section/component files, the ChatBot system prompt, and the
   two hardcoded Calendly URLs.
3. **Asset strategy needed:** 9 client photos under `public/images/` with
   client-specific filenames (`coach-terris.jpeg`), plus pravatar/Unsplash hotlinks
   to replace with neutral placeholders.
4. **Integration config:** centralize Calendly URL, booking link, Anthropic model ID;
   decide Vercel vs Netlify; add favicon/manifest slots (currently missing entirely).
5. **Inconsistencies found along the way:** "$25 trial" vs RM pricing (Extras.jsx:20),
   unused assets (`hero.png`, `icons.svg`, `react.svg`, `vite.svg`), favicon never linked.
