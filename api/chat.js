// Vercel Serverless Function — keeps your Anthropic API key secret on the server.
// The browser chatbot calls THIS endpoint (/api/chat); this function adds the key
// and forwards the request to Anthropic. Your key is NEVER exposed to visitors.
//
// SETUP: In your Vercel project settings → Environment Variables, add:
//   ANTHROPIC_API_KEY = sk-ant-...your key...
//
// Works the same on Netlify Functions / Cloudflare with minor signature changes.

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server is missing ANTHROPIC_API_KEY" });
  }

  try {
    const { system, messages } = req.body || {};

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "messages must be an array" });
    }

    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: system || "",
        messages,
      }),
    });

    const data = await anthropicRes.json();

    if (!anthropicRes.ok) {
      return res.status(anthropicRes.status).json({ error: data?.error?.message || "Anthropic API error" });
    }

    // Return only what the client needs
    return res.status(200).json({ content: data.content });
  } catch (err) {
    return res.status(500).json({ error: "Proxy failed: " + (err?.message || "unknown error") });
  }
}
