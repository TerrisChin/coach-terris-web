# Client Onboarding — Deposit → Live

Work top to bottom. Typical elapsed time: 1–2 days of waiting on content,
half a day of actual work (see hours per tier in [TIERS.md](TIERS.md)).

## 0. Kick off (5 min, day of deposit)

- [ ] Create the client project from `template-base`:
  ```
  git checkout template-base && git pull
  git checkout -b client/<name>
  npm run new-client -- --name=<Name> --tier=<starter|pro|chatbot|ecommerce>
  ```
- [ ] Send the content request form (below) via WhatsApp
- [ ] Calendly tiers (pro/chatbot): send the client the Calendly signup steps
      from [ADDON_BOOKING.md](ADDON_BOOKING.md) — this is the slowest item,
      start it first

## 1. Collect content — copy-paste WhatsApp form

Send both languages together (or only EN for Starter clients):

```
Hi! To build your website I need the following — reply here with text,
and send photos as "Document" in WhatsApp so quality isn't compressed:

1. Business name + tagline (one sentence)
2. Owner/lead name as it should appear on the site
3. Phone + WhatsApp number, business email
4. Address / service area, opening hours
5. Social media links (Instagram, Facebook, TikTok, 小红书 if any)
6. Your services: name, duration, price for each (3–6 services)
7. Package/pricing options if any
8. 3 customer reviews (name + what they said)
9. A short "about you" story (5–6 sentences: experience, certificates,
   why customers choose you)
10. Photos: 1 portrait of you, 6–8 action/workplace photos, logo if any
11. [Shop clients only] Product list: name, price, short description,
    1 square photo per product
```

```
您好！为了制作您的网站，我需要以下资料 — 文字直接回复，
照片请用 WhatsApp 的"文件/Document"方式发送以保证清晰度：

1. 商家名称 + 一句话标语
2. 负责人姓名（网站上显示的名字）
3. 电话 + WhatsApp 号码、商业邮箱
4. 地址/服务范围、营业时间
5. 社交媒体链接（Instagram、Facebook、TikTok、小红书等）
6. 服务项目：每项的名称、时长、价格（3–6 项）
7. 配套/价格方案（如有）
8. 3 条顾客好评（姓名 + 评价内容）
9. 简短的"关于我们"介绍（5–6 句：经验、证书、顾客为什么选择您）
10. 照片：1 张个人照、6–8 张工作/场地照、商标（如有）
11. 【网店客户】产品清单：名称、价格、简短介绍、每件 1 张正方形照片
```

- [ ] Form sent · - [ ] All answers received · - [ ] Photos received as documents

## 2. Configure the site (~1–2 h)

- [ ] `src/lib/site.config.js` — work top to bottom, every `// REPLACE`:
      tier line (done by the script), `WHATSAPP_URL`, Calendly username +
      event slug (calendly tiers), `BRAND`, all of `BUSINESS`
- [ ] `src/lib/data.js` — BENEFITS, STATS, SERVICES, PRICING, TESTIMONIALS,
      TIMELINE, CERTS, FAQS, SCHEDULE, GALLERY alts, BLOG (drop or rewrite),
      PRODUCTS (ecommerce tier — see [ADDON_ECOMMERCE.md](ADDON_ECOMMERCE.md))
      — Starter tier: English only; bilingual tiers: EN + 中文 mixed style
- [ ] `index.html` — `<title>`, meta description, canonical URL, OG tags,
      JSON-LD business name/phone/address
- [ ] Grep check before continuing: no `REPLACE`, `Demo Studio`, or
      `demostudio` left anywhere in `src/` or `index.html`

## 3. Replace images (~30 min)

- [ ] Portrait + gallery + hero → `public/images/` (JPG/WebP, <300 KB each),
      update paths in `data.js` and `About.jsx`/`Hero.jsx` if names differ
- [ ] Products → `public/products/` (square 800×800, <200 KB WebP)
- [ ] Favicon if the client has a logo (`public/favicon.svg` + link in
      `index.html`)
- [ ] Delete leftover placeholder files from `public/placeholders/`
- [ ] `npm run dev` — click every section, every Book button, test the
      chatbot and one WhatsApp order; check at 375 px in DevTools

## 4. Deploy (~30 min)

- [ ] Follow [DEPLOYMENT.md](DEPLOYMENT.md): push the client branch to its
      own private repo → Netlify import → env vars for the tier → deploy
- [ ] Chatbot tier: create a **client-specific Anthropic API key**, set spend
      limit in the Anthropic console, add `ANTHROPIC_API_KEY` in Netlify
- [ ] Test the live URL on your phone: booking flow, chatbot reply, WhatsApp
      order each open correctly

## 5. Custom domain (~15 min + DNS wait)

- [ ] Buy/receive the domain (client's own registrar account is preferable —
      they own it, you administer)
- [ ] Netlify → Domain management → add domain → set the DNS records shown
- [ ] Wait for HTTPS certificate (usually < 1 h), update `canonical` +
      JSON-LD URL in `index.html`, redeploy

## 6. Handover checklist

- [ ] Send the client: live URL, what's included in their tier, how to send
      content updates (WhatsApp you — see [MAINTENANCE.md](MAINTENANCE.md))
- [ ] Calendly tiers: confirm the client can log into their own Calendly
- [ ] Chatbot tier: explain the monthly API cost and the spend cap you set
- [ ] Record in your client sheet: repo URL, Netlify site name, domain
      registrar + renewal date, tier, API key name, go-live date
- [ ] Collect final payment 🎉
