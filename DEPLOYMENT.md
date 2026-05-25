# 🚀 Deployment Guide — Coach Terris Website

This guide gets your website live on the internet, including the AI chatbot.
No coding required. Recommended host: **Vercel** (free, and it handles both the
website and the chatbot's secret API key in one place).

Estimated time: ~15 minutes.

---

## What you'll need
1. The project folder (unzip `swim-coach-website.zip`).
2. A free **GitHub** account → https://github.com
3. A free **Vercel** account → https://vercel.com (sign up with your GitHub)
4. Your **Anthropic API key** (for the chatbot) → https://console.anthropic.com
   → "API Keys" → "Create Key". It starts with `sk-ant-...`. Keep it private!

> 💡 If you don't want the AI chatbot at all, you can skip every step that mentions
> the API key — the rest of the site works perfectly without it.

---

## Step 1 — Put the code on GitHub

**Option A — easiest (web upload):**
1. Go to https://github.com/new and create a new repository (e.g. `coach-terris-web`). Leave it Public or Private — your choice.
2. On the new repo page, click **"uploading an existing file"**.
3. Drag in **all the files and folders** from the unzipped project
   (`src`, `public`, `api`, `index.html`, `package.json`, etc.).
   ⚠️ Do NOT upload the `node_modules` or `dist` folders.
4. Click **Commit changes**.

**Option B — if you know Git:**
```bash
cd swim-coach
git init && git add . && git commit -m "Initial commit"
git remote add origin https://github.com/YOURNAME/coach-terris-web.git
git push -u origin main
```

---

## Step 2 — Deploy on Vercel

1. Log in to https://vercel.com with your GitHub account.
2. Click **Add New… → Project**.
3. Find your `coach-terris-web` repo and click **Import**.
4. Vercel auto-detects it's a Vite app. Leave all build settings as default:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Before clicking Deploy**, expand **"Environment Variables"** and add:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** your `sk-ant-...` key
   - Click **Add**.
6. Click **Deploy**. Wait ~1 minute.

🎉 Done! Vercel gives you a live URL like `coach-terris-web.vercel.app`.
The website AND the chatbot both work immediately.

---

## Step 3 (optional) — Use your own domain

1. Buy a domain (e.g. `coachterris.com`) from any registrar (Namecheap, GoDaddy, etc.).
2. In Vercel → your project → **Settings → Domains** → add your domain.
3. Follow Vercel's instructions to point your domain's DNS to Vercel.
   It walks you through it. Allow up to a few hours for it to activate.

---

## Updating the site later

Whenever you want to change text, prices, photos, reviews, etc.:
1. Edit the relevant file (usually `src/lib/data.js` for content).
2. Upload the changed file to GitHub (or `git push`).
3. Vercel automatically rebuilds and redeploys within a minute. No extra steps.

Most things you'll want to change live in **`src/lib/data.js`**:
- Your name, phone, WhatsApp, email, booking link → `COACH`
- Services & prices → `SERVICES`, `PRICING`
- Reviews → `TESTIMONIALS`
- Blog tips → `BLOG`
- Schedule → `SCHEDULE`

Photos live in `public/images/` — replace a file with the same name to swap it.

---

## About the AI chatbot & costs

- The chatbot uses your Anthropic API key, billed per message by Anthropic
  (typically a fraction of a cent per reply). Set a monthly spend limit in the
  Anthropic console if you want a safety cap.
- Your key is stored as a secret on Vercel's server (via `api/chat.js`) and is
  **never** visible to website visitors.
- If you ever rotate/replace your key: Vercel → Settings → Environment Variables → edit → redeploy.

---

## Alternative host: Netlify

Netlify also works. The serverless function would move to
`netlify/functions/chat.js` with a slightly different signature, and you'd set
`ANTHROPIC_API_KEY` under Site settings → Environment variables. Vercel is
recommended because the existing `api/chat.js` works as-is.

---

## Troubleshooting

- **Chatbot says "having trouble connecting"** → Check the `ANTHROPIC_API_KEY`
  env var is set in Vercel and that you redeployed after adding it.
- **Map doesn't show** → It points to the Cheras/Kajang area via OpenStreetMap;
  it loads fine on the live site (it's only blocked in some previews).
- **Images missing** → Make sure the `public/images/` folder was uploaded to GitHub.

Need a hand? Re-open this project and ask — happy to help.
