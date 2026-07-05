// Netlify serverless function — keeps the Anthropic API key secret on the
// server. The browser chatbot calls /api/chat; this function adds the key and
// forwards the request to Anthropic. The key is NEVER exposed to visitors.
//
// SETUP: In Netlify → Site configuration → Environment variables, add:
//   ANTHROPIC_API_KEY = sk-ant-...your key...
// Optional: CHATBOT_MODEL to override the default model.
//
// netlify.toml points the functions directory here; `config.path` below maps
// this function to the /api/chat route (Netlify Functions 2.0).

const DEFAULT_MODEL = "claude-opus-4-8";

export default async (req) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Server is missing ANTHROPIC_API_KEY" }, { status: 500 });
  }

  try {
    const { system, messages } = await req.json();

    if (!Array.isArray(messages)) {
      return Response.json({ error: "messages must be an array" }, { status: 400 });
    }

    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.CHATBOT_MODEL || DEFAULT_MODEL,
        max_tokens: 1000,
        system: system || "",
        messages,
      }),
    });

    const data = await anthropicRes.json();

    if (!anthropicRes.ok) {
      return Response.json(
        { error: data?.error?.message || "Anthropic API error" },
        { status: anthropicRes.status },
      );
    }

    // Return only what the client needs
    return Response.json({ content: data.content });
  } catch (err) {
    return Response.json(
      { error: "Proxy failed: " + (err?.message || "unknown error") },
      { status: 500 },
    );
  }
};

export const config = { path: "/api/chat" };
