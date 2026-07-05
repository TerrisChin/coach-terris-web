# 🚀 Deployment Guide — Demo Studio Template

This guide gets the website live, including the optional AI chatbot.
Recommended host: **Netlify** (free tier; hosts the site and the chatbot's
serverless function together).

Estimated time: ~15 minutes.

---

## What you'll need

1. This repository on **GitHub** → https://github.com
2. A free **Netlify** account → https://www.netlify.com (sign up with GitHub)
3. Only if the AI chatbot is enabled (`featureFlags.aiChatbot` in
   `src/lib/site.config.js`): an **Anthropic API key** →
   https://console.anthropic.com → "API Keys" → "Create Key"
   (starts with `sk-ant-...`; keep it private!)

---

## Step 1 — Deploy on Netlify

1. Log in to https://app.netlify.com with your GitHub account.
2. **Add new site → Import an existing project → GitHub** and pick this repo.
3. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `src/features/chatbot/api`
4. **Before deploying** (or afterwards under *Site configuration →
   Environment variables*), add — only if the chatbot is enabled:
   - `ANTHROPIC_API_KEY` = your `sk-ant-...` key
   - optionally `CHATBOT_MODEL` (see `docs/ADDON_CHATBOT.md`)
5. Click **Deploy**. Netlify gives you a live URL like
   `demo-studio.netlify.app`.

---

## Step 2 — Custom domain (optional)

Netlify → your site → **Domain management** → add your domain and follow the
DNS instructions. HTTPS is provisioned automatically.

---

## Updating the site

Push to the deployed branch on GitHub — Netlify rebuilds and redeploys
automatically within a minute or two.

---

## Notes

- The Anthropic key is stored server-side as a Netlify environment variable,
  used only by the serverless function `src/features/chatbot/api/chat.mjs` —
  it is never exposed to visitors. If you rotate the key: update the env var
  and redeploy.
- Chatbot not replying in production? Check that `featureFlags.aiChatbot` is
  `true` and `ANTHROPIC_API_KEY` is set, then redeploy.
- Local development: `npm run dev` serves the site (chatbot shows its offline
  fallback); `netlify dev` additionally serves the function using `.env`.
- See `docs/ADDON_CHATBOT.md` for chatbot details and per-conversation costs.
