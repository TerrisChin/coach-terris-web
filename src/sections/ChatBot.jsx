import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";
import { COACH, SERVICES, PRICING, FAQS } from "../lib/data";

// Build a compact knowledge base from the site data so the assistant answers accurately.
const KNOWLEDGE = `
You are "Coach Terris's Assistant", a friendly, concise AI helper on the website of Terris Chin, a professional mobile swimming coach in Kuala Lumpur, Malaysia. You help visitors with questions about lessons and gently encourage them to book a trial. Keep replies short (2-4 sentences), warm, and helpful. You can reply in English or Simplified Chinese (简体中文) depending on the visitor's language.

COACH FACTS:
- Name: Terris Chin (Coach Terris). Young, energetic, ~3 years teaching experience, competitive triathlete (Asia Triathlon Cup 2026 finisher).
- Certifications: SWIM THE WORLD Certified Instructor (Kids & Adults), Bronze Medallion (Life Saving Society of Malaysia), Expired Air Resuscitation (EAR) / CPR trained.
- Languages: English and Simplified Chinese (中文) only.
- Service area: On-site mobile coaching (上门教学) — he travels to the student's condo or private home pool across KL, Cheras, and Kajang. Regularly coaches at You Residence (Cheras) and Pearl Avenue (Sungai Chua, Kajang).
- Phone/WhatsApp: ${COACH.phone}. Email: ${COACH.email}.
- Booking: via Google Calendar link on the site, or WhatsApp.
- Operating hours: Mon-Fri 6am-9pm, Sat 7am-6pm, Sun 8am-2pm.
- Rating: 5.0 with verified reviews on Superprof.

SERVICES: ${SERVICES.map((s) => `${s.title} (${s.duration}, ${s.level}, ${s.price})`).join("; ")}.

PRICING: ${PRICING.map((p) => `${p.name}: ${p.price} ${p.per} — ${p.features.join(", ")}`).join(" | ")}.

POLICIES: ${FAQS.map((f) => `Q: ${f.q} A: ${f.a}`).join(" ")}

RULES:
- Be honest. If you don't know something specific, suggest contacting Coach Terris on WhatsApp.
- For booking requests, point them to the "Book Now" button / Google Calendar or WhatsApp.
- Never invent prices or facts not listed above.
- Keep it encouraging and human. Don't use long bullet lists; speak naturally.
`;

const SUGGESTIONS = [
  "How much are lessons?",
  "Do you teach kids who fear water?",
  "Which areas do you cover?",
  "可以用中文教学吗？",
];

export default function ChatBot() {
  const [openChat, setOpenChat] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! 👋 I'm Coach Terris's assistant. Ask me anything about swimming lessons, pricing, or booking — in English or 中文!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text) => {
    const msg = (text ?? input).trim();
    if (!msg || loading) return;
    setInput("");
    const next = [...messages, { role: "user", content: msg }];
    setMessages(next);
    setLoading(true);

    try {
      // Calls our own serverless proxy (/api/chat), which holds the API key
      // securely on the server. See api/chat.js and DEPLOYMENT.md.
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: KNOWLEDGE,
          messages: next
            .filter((m) => m.role === "user" || m.role === "assistant")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = (data.content || [])
        .map((b) => (b.type === "text" ? b.text : ""))
        .filter(Boolean)
        .join("\n")
        .trim();
      setMessages((m) => [...m, { role: "assistant", content: reply || "Sorry, I didn't catch that — could you rephrase? Or message Coach Terris directly on WhatsApp." }]);
    } catch (e) {
      setMessages((m) => [...m, { role: "assistant", content: "I'm having trouble connecting right now. Please reach Coach Terris on WhatsApp and he'll reply personally!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Launcher — sits above the WhatsApp button */}
      <motion.button
        onClick={() => setOpenChat((o) => !o)}
        aria-label="Open AI assistant"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-5 left-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-aqua-400 to-aqua-600 text-navy-950 shadow-xl shadow-aqua-500/40"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={openChat ? "x" : "chat"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
            {openChat ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {openChat && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="fixed bottom-[5.5rem] left-5 z-50 flex h-[28rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-3xl bg-navy-800 ring-1 ring-white/15 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-aqua-500 to-aqua-600 px-5 py-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-950/20">
                <Sparkles className="h-5 w-5 text-navy-950" />
              </span>
              <div>
                <div className="font-display font-bold text-navy-950 leading-none">Coach Terris's Assistant</div>
                <div className="text-xs text-navy-950/70 mt-0.5">AI helper · usually instant</div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-aqua-500 text-navy-950 rounded-br-sm"
                      : "bg-white/10 text-white rounded-bl-sm"
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-white/10 px-3.5 py-2.5 text-sm text-white/70">
                    <Loader2 className="h-4 w-4 animate-spin" /> typing…
                  </div>
                </div>
              )}
              {messages.length <= 1 && !loading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button key={s} onClick={() => send(s)} className="rounded-full border border-aqua-500/30 bg-aqua-500/10 px-3 py-1.5 text-xs text-aqua-200 hover:bg-aqua-500/20 transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Ask about lessons…"
                  className="flex-1 rounded-full bg-navy-950/60 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-aqua-500 focus:outline-none"
                />
                <button
                  onClick={() => send()}
                  disabled={loading}
                  aria-label="Send message"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-r from-aqua-400 to-aqua-600 text-navy-950 disabled:opacity-50 hover:opacity-90 transition"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-white/30">AI assistant · for exact details, message Coach Terris</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
