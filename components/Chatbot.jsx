"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Bot, User2, Sparkles } from "lucide-react";
import { COMPANY, KNOWLEDGE, QUICK_PROMPTS } from "@/lib/gorudoKnowledge";

// Simple but smart-feeling matcher: tokenises the user's message,
// scores each KB entry by keyword overlap, and returns the best match.
function findAnswer(rawText) {
  const text = rawText.toLowerCase().trim();
  if (!text) return null;

  let best = { score: 0, entry: null };
  for (const entry of KNOWLEDGE) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (!kw) continue;
      // multi-word keyword match -> bigger weight
      if (kw.includes(" ") && text.includes(kw)) {
        score += 3;
      } else if (text.includes(kw)) {
        // word/substring presence
        score += 1;
      }
    }
    if (score > best.score) best = { score, entry };
  }
  // require at least 1 keyword hit
  return best.score > 0 ? best.entry : null;
}

function whatsappLink(prefill) {
  const base = `https://wa.me/${COMPANY.whatsappRaw}`;
  if (!prefill) return base;
  return `${base}?text=${encodeURIComponent(prefill)}`;
}

const FALLBACK_TEXT =
  "I’m not 100% sure on that one — let me connect you with the team on WhatsApp for a complete answer.";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: `Hi 👋 I’m the Gorudo Investments assistant. Ask me anything about our divisions, products, locations, or procurement. For complex requests I’ll hand you over to our team on WhatsApp.`,
    },
  ]);
  const [unread, setUnread] = useState(true);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) setUnread(false);
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function send(text) {
    const userText = (text ?? input).trim();
    if (!userText) return;
    const newMessages = [...messages, { role: "user", text: userText }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      const match = findAnswer(userText);
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
      // refocus input for fast follow-ups
      inputRef.current?.focus();
    }, 380);
  }

  function handleSubmit(e) {
    e.preventDefault();
    send();
  }

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat with Gorudo assistant"}
        className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 text-white shadow-ring ring-1 ring-white/10 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6" />
            {unread && (
              <span className="absolute right-1.5 top-1.5 inline-flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sun-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-sun-400 ring-2 ring-white" />
              </span>
            )}
          </>
        )}
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-24 right-3 z-[60] w-[min(94vw,380px)] origin-bottom-right transition-all duration-300 sm:right-6 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100 scale-100"
            : "pointer-events-none translate-y-3 opacity-0 scale-95"
        }`}
        role="dialog"
        aria-label="Gorudo Investments chat"
      >
        <div className="overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-ring">
          {/* Header */}
          <div className="relative flex items-center gap-3 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-4 py-3.5 text-white">
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-lime-400/30 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-sun-400/25 blur-2xl" />
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
              <Bot className="h-5 w-5" />
            </span>
            <div className="relative leading-tight">
              <p className="font-display text-base font-semibold">
                Gorudo Assistant
              </p>
              <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-brand-100">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime-400" />
                Online · Harare · Marondera
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Minimize chat"
              className="relative ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex h-[360px] flex-col gap-3 overflow-y-auto bg-cream/60 p-4"
          >
            {messages.map((m, i) => (
              <Message key={i} m={m} />
            ))}
          </div>

          {/* Quick prompts (only when conversation is short) */}
          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 border-t border-brand-900/10 bg-white px-3 py-3">
              {QUICK_PROMPTS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="rounded-full border border-brand-900/10 bg-cream px-3 py-1.5 text-[12px] font-medium text-ink/80 transition hover:border-brand-700/40 hover:bg-white"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Composer */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-brand-900/10 bg-white px-3 py-2.5"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Gorudo anything…"
              className="min-w-0 flex-1 rounded-full border border-brand-900/10 bg-cream/80 px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-brand-700/40 focus:outline-none"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-soft disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Footer hint */}
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

function Message({ m }) {
  if (m.role === "user") {
    return (
      <div className="flex items-start gap-2 self-end">
        <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-brand-700 px-3.5 py-2.5 text-sm leading-relaxed text-white shadow-soft">
          {m.text}
        </div>
        <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
          <User2 className="h-3.5 w-3.5" />
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-white">
        <Bot className="h-3.5 w-3.5" />
      </span>
      <div className="max-w-[82%] space-y-2">
        <div className="whitespace-pre-line rounded-2xl rounded-tl-sm border border-brand-900/5 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-ink shadow-soft">
          {m.text}
        </div>
        {m.escalate && (
          <a
            href={whatsappLink(
              `Hi Gorudo, I asked the chatbot: "${m.prefill}" — can someone help?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3.5 py-2 text-xs font-semibold text-white shadow-soft transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Talk on WhatsApp
          </a>
        )}
      </div>
    </div>
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
