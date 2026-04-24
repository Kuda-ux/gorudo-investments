"use client";
import { useRef, useState } from "react";
import { Play, Pause, Sparkles } from "lucide-react";

const clips = [
  {
    src: "/videos/gorudo-1.mp4",
    poster: "/images/gorudo-3.jpeg",
    label: "Greenhouse",
    title: "Organic, fresh from the greenhouse",
    body: "Climate-managed cultivation delivering consistent, premium produce — harvested at peak quality.",
  },
  {
    src: "/videos/gorudo-2.mp4",
    poster: "/images/gorudo-5.jpeg",
    label: "Livestock",
    title: "Poultry, piggery & more — professionally managed",
    body: "Disciplined husbandry and clean operations — dependable volumes for trade and institutional supply.",
  },
  {
    src: "/videos/gorudo-3.mp4",
    poster: "/images/gorudo-2.jpeg",
    label: "Farm Operations",
    title: "A farm built for serious supply",
    body: "From field to dispatch, every step is organised to meet the expectations of modern buyers.",
  },
];

function Clip({ clip, featured = false }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl shadow-ring ${
        featured ? "aspect-[16/10]" : "aspect-[4/5]"
      }`}
    >
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="metadata"
        poster={clip.poster}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
      >
        <source src={clip.src} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/30 to-transparent" />

      <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-soft">
        <Sparkles className="h-3.5 w-3.5 text-sun-500" />
        {clip.label}
      </span>

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-brand-800 shadow-ring backdrop-blur transition hover:bg-white"
      >
        {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <h3
          className={`font-display text-white ${
            featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
          }`}
        >
          {clip.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-50/85">
          {clip.body}
        </p>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="aurora -left-20 top-20 h-[420px] w-[420px] bg-lime-400/40" />
        <div className="aurora -right-10 bottom-10 h-[420px] w-[420px] bg-brand-300/50" />
      </div>

      <div className="container-xl container-px relative">
        <div className="reveal flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              In Motion · Live from the Farm
            </span>
            <h2 className="h-display mt-5 text-4xl sm:text-5xl">
              See Gorudo
              <span className="italic"> <span className="text-gradient">in action.</span></span>
            </h2>
          </div>
          <p className="max-w-md text-ink/70">
            Real footage from our operations in Harare and Marondera — from
            greenhouse rows to livestock and dispatch.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Clip clip={clips[0]} featured />
          </div>
          <div className="grid gap-6 lg:col-span-4">
            <Clip clip={clips[1]} />
          </div>
        </div>
        <div className="reveal mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-8 text-white shadow-ring sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-lime-400/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-10 h-56 w-56 rounded-full bg-sun-400/30 blur-3xl" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-200">
                Quality you can see
              </p>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl">
                Greenhouse-grown.
                <span className="block italic text-brand-200">
                  Standards you can trust.
                </span>
              </h3>
              <p className="mt-4 max-w-md text-brand-50/85">
                Every harvest is handled to commercial-grade standards —
                freshness, consistency and traceability from row to buyer.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 hover:bg-brand-50"
              >
                Request a site visit →
              </a>
            </div>
            <Clip clip={clips[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
