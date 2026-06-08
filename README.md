# Coach Marcus — Freelance Swimming Coach Website

A premium, mobile-first swimming coach website built with **React + Vite + Tailwind CSS + Framer Motion**.

## Features
- Sticky animated navbar with scroll-spy + mobile drawer
- Animated underwater hero with layered SVG waves & CTAs
- Dark / light mode toggle
- Animated counters, scroll-reveal sections, smooth transitions
- Services & pricing cards with "most popular" highlighting
- FAQ accordion, weekly schedule table, water-safety tips
- Masonry gallery + draggable before/after slider
- Auto-rotating testimonials carousel with star ratings
- Booking form, embedded map, operating hours, newsletter
- Floating WhatsApp button + scroll-to-top
- Instagram feed strip, partner logos, free-trial banner
- SEO meta tags + JSON-LD structured data
- Loading screen, accessibility (aria labels, focus rings)

## Getting Started
```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Structure
```
src/
  components/   UI.jsx, Navbar.jsx, FloatingActions.jsx, Loader.jsx
  sections/     Hero, About, Benefits, Services, Pricing,
                Schedule, Gallery, Testimonials, Contact, Footer, Extras
  context/      ThemeContext.jsx
  lib/          data.js   ← all editable site content
```

## Customizing
Edit `src/lib/data.js` to change coach name, phone, WhatsApp link,
services, pricing, testimonials, schedule, FAQs, and images.
Colors live in `tailwind.config.js` (navy / aqua palettes).

## Optional advanced features (scaffolding hooks)
The architecture is ready to extend with: online booking/payment
integration (wire the Contact form to Stripe/Calendly), a student
dashboard, blog section, AI chatbot, and i18n multi-language support.

## AI Chatbot Assistant (important deployment note)

The site includes an AI chatbot (`src/sections/ChatBot.jsx`) powered by Claude.
It calls the Anthropic API from the browser. This works automatically inside
Claude's artifact preview, but **for your own live website you must NOT expose
an API key in the browser**. Instead:

1. Create a tiny serverless function (Vercel/Netlify/Cloudflare) that holds your
   `ANTHROPIC_API_KEY` as a secret and forwards requests to
   `https://api.anthropic.com/v1/messages`.
2. Change the `fetch("https://api.anthropic.com/v1/messages", …)` URL in
   ChatBot.jsx to point at your own function (e.g. `/api/chat`).

The chatbot's knowledge (services, pricing, FAQs, contact) is built
automatically from `src/lib/data.js`, so it stays accurate when you edit your data.

## Blog / Swimming Tips
Editable in `src/lib/data.js` under `BLOG`. Each post has a category, title,
excerpt, body paragraphs, and a "Coach's note" tip. Tips were researched from
reputable swim-coaching sources (US Masters Swimming, Effortless Swimming, etc.)
and written in Coach Terris's voice.
