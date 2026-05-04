"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";
import { COMPANY, KNOWLEDGE, QUICK_PROMPTS } from "@/lib/gorudoKnowledge";

/* -------------------------------------------------------------
   Smart matcher — tokenises the user's message, then scores
   each KB entry by whole-word and phrase overlap.
--------------------------------------------------------------*/
// Stop-words used only to measure whether the user asked anything "meaningful"
// beyond filler. Keep intent words (where/when/how/who) OUT of this list so
// they can still participate in KB keyword scoring.
const STOP = new Set([
  "a", "an", "the", "is", "are", "am", "to", "of", "on", "in", "for",
  "and", "or", "me", "my", "your", "please", "can", "could", "would",
  "should", "there", "that", "this", "it", "be", "have", "has", "had",
  "so", "with", "i", "you", "we", "do", "does", "did",
]);

function tokenize(raw) {
  return raw
    .toLowerCase()
    .replace(/[^a-z0-9\s\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function findAnswer(rawText) {
  if (!rawText) return null;
  const cleaned = rawText.toLowerCase().replace(/[^a-z0-9\s\-]/g, " ");
  const padded = ` ${cleaned} `;
  const userTokens = new Set(tokenize(rawText));
  const meaningfulTokens = [...userTokens].filter((t) => !STOP.has(t));

  let best = { score: 0, entry: null };

  for (const entry of KNOWLEDGE) {
    let score = 0;
    for (const kw of entry.keywords) {
      const k = kw.toLowerCase();
      if (k.includes(" ")) {
        // multi-word phrase → strong signal
        if (padded.includes(` ${k} `) || cleaned.includes(k)) score += 4;
      } else {
        // single word → must match as a whole token
        if (userTokens.has(k)) {
          score += 2;
        } else if (k.length >= 6 && cleaned.includes(k)) {
          // e.g. "procurement" inside "procurements" (length guard avoids "hi"→"shipping")
          score += 1;
        }
      }
    }
    if (score > best.score) best = { score, entry };
  }

  // Require at least a meaningful hit if the user actually asked something
  if (best.score === 0) return null;
  if (best.score < 2 && meaningfulTokens.length >= 2) return null;
  return best.entry;
}

function whatsappLink(prefill) {
  const base = `https://wa.me/${COMPANY.whatsappRaw}`;
  if (!prefill) return base;
  return `${base}?text=${encodeURIComponent(prefill)}`;
}

const FALLBACK_TEXT =
  "I don’t have a canned answer for that one — let me hand you over to our team on WhatsApp for a complete reply.";

/* -------------------------------------------------------------
   Component
--------------------------------------------------------------*/
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text:
        "Hi 👋 I’m the Gorudo assistant. Ask me about our divisions, products, procurement, locations — or tap a quick question below. For anything complex I’ll connect you to our team on WhatsApp.",
    },
  ]);

  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // lock body scroll while full-screen mobile sheet is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) {
      // slight delay so the sheet finishes animating before focusing
      const t = setTimeout(() => inputRef.current?.focus(), 280);
      return () => clearTimeout(t);
    }
  }, [open]);

  function send(text) {
    const userText = (text ?? input).trim();
    if (!userText) return;

    setMessages((m) => [...m, { role: "user", text: userText }]);
    setInput("");
    setTyping(true);

    // Small simulated thinking delay keeps it feeling natural
    window.setTimeout(() => {
      const match = findAnswer(userText);
      setTyping(false);
      if (match) {
        setMessages((m) => [...m, { role: "bot", text: match.answer }]);
      } else {
        setMessages((m) => [
          ...m,
          {
            role: "bot",
            text: FALLBACK_TEXT,
            escalate: true,
            prefill: userText,
          },
        ]);
      }
    }, 500);
  }

  function handleSubmit(e) {
    e.preventDefault();
    send();
  }

  return (
    <>
      {/* ---------- Launcher ---------- */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open chat with Gorudo Investments"
        className={`fixed bottom-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-4 py-3 text-white shadow-ring ring-1 ring-white/10 transition-all hover:scale-[1.03] sm:bottom-6 sm:right-6 sm:px-5 sm:py-3.5 ${
          open ? "pointer-events-none opacity-0 scale-90" : "opacity-100"
        }`}
      >
        <span className="relative inline-flex h-5 w-5 items-center justify-center">
          <MessageCircle className="h-5 w-5" />
          <span className="pointer-events-none absolute -right-1.5 -top-1.5 inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sun-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sun-400 ring-2 ring-brand-900" />
          </span>
        </span>
        <span className="hidden text-sm font-semibold sm:inline">
          Chat with us
        </span>
      </button>

      {/* ---------- Backdrop (mobile) ---------- */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[59] bg-ink/40 backdrop-blur-[2px] transition-opacity sm:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* ---------- Panel ---------- */}
      <div
        role="dialog"
        aria-label="Gorudo Investments chat"
        aria-modal="true"
        className={`fixed z-[60] transition-all duration-300 ease-out
          inset-x-0 bottom-0 sm:inset-auto sm:bottom-24 sm:right-6
          ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-6 opacity-0"
          }`}
      >
        <div
          className="mx-auto flex flex-col overflow-hidden border border-brand-900/10 bg-white shadow-ring
            h-[86vh] max-h-[86vh] w-full rounded-t-3xl
            sm:h-[600px] sm:max-h-[78vh] sm:w-[400px] sm:rounded-2xl"
        >
          {/* Header */}
          <div className="relative flex items-center gap-3 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-4 py-4 text-white">
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-lime-400/30 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-sun-400/25 blur-2xl" />
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
              <Bot className="h-5 w-5" />
            </span>
            <div className="relative leading-tight">
              <p className="font-display text-base font-semibold">
                Gorudo Assistant
              </p>
              <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-brand-100">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
                </span>
                Online · Replies instantly
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="relative ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-cream/60 px-4 py-4"
          >
            {messages.map((m, i) => (
              <Bubble key={i} m={m} />
            ))}
            {typing && <Typing />}
          </div>

          {/* Quick prompts (always visible but compact) */}
          <div className="flex gap-2 overflow-x-auto border-t border-brand-900/10 bg-white px-3 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {QUICK_PROMPTS.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                className="shrink-0 rounded-full border border-brand-900/10 bg-cream px-3 py-1.5 text-[12px] font-medium text-ink/80 transition hover:border-brand-700/40 hover:bg-white"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Composer */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-brand-900/10 bg-white px-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-2.5"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Gorudo anything…"
              enterKeyHint="send"
              inputMode="text"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-full border border-brand-900/10 bg-cream/80 px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 focus:border-brand-700/40 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-soft transition disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Trust footer */}
          <div className="flex items-center justify-between gap-2 border-t border-brand-900/10 bg-cream/60 px-4 py-2 text-[11px] text-ink/55">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-sun-500" />
              Trained on Gorudo Investments info
            </span>
            <a
              href={whatsappLink("Hi Gorudo, I'd like to chat.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-700 hover:text-brand-900"
            >
              WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/* -------------------------------------------------------------
   Sub-components
--------------------------------------------------------------*/
function Bubble({ m }) {
  if (m.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[82%] rounded-2xl rounded-tr-md bg-brand-700 px-4 py-2.5 text-[14px] leading-relaxed text-white shadow-soft">
          {m.text}
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-soft">
        <Bot className="h-4 w-4" />
      </span>
      <div className="max-w-[82%] space-y-2">
        <div className="whitespace-pre-line rounded-2xl rounded-tl-md border border-brand-900/5 bg-white px-4 py-2.5 text-[14px] leading-relaxed text-ink shadow-soft">
          {m.text}
        </div>
        {m.escalate && (
          <a
            href={whatsappLink(
              `Hi Gorudo, I asked the website chatbot: "${m.prefill}" — can someone help?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-[12px] font-semibold text-white shadow-soft transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Continue on WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-soft">
        <Bot className="h-4 w-4" />
      </span>
      <div className="flex items-center gap-1 rounded-2xl rounded-tl-md border border-brand-900/5 bg-white px-4 py-3 shadow-soft">
        <Dot delay="0ms" />
        <Dot delay="150ms" />
        <Dot delay="300ms" />
      </div>
    </div>
  );
}

function Dot({ delay }) {
  return (
    <span
      className="h-2 w-2 animate-bounce rounded-full bg-brand-700/70"
      style={{ animationDelay: delay }}
    />
  );
}

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M19.11 4.91A10 10 0 0 0 4.06 17.4L3 21l3.7-1.04A10 10 0 1 0 19.11 4.91Zm-7 15.1a8.04 8.04 0 0 1-4.1-1.13l-.3-.18-2.2.62.6-2.13-.2-.31a8 8 0 1 1 6.2 3.13Zm4.41-5.99c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.36.1-.48.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4l-.46-.02c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.24 1.02.38 1.36.5.58.18 1.1.16 1.52.1.46-.06 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
