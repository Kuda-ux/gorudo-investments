"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, ShieldCheck, Sprout, PlayCircle, Sparkles } from "lucide-react";

const MARQUEE_TAGS = [
  "Fresh Farm Produce",
  "Greenhouse Grown",
  "Shashi Maputi",
  "Shashi Ice",
  "Poultry & Piggery",
  "Supply of Goods",
  "Procurement Ready",
  "Harare · Marondera",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Vibrant aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora -left-24 top-10 h-[420px] w-[420px] bg-brand-300/60" />
        <div className="aurora left-1/3 top-40 h-[360px] w-[360px] bg-lime-400/40" />
        <div className="aurora -right-20 top-1/2 h-[520px] w-[520px] bg-sun-400/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(23,64,39,0.08)_1px,transparent_0)] [background-size:22px_22px] [mask-image:linear-gradient(180deg,black,transparent_85%)]" />
      </div>

      <div className="container-xl container-px">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Harvesting Prosperity · Zimbabwe
            </span>
            <h1 className="h-display mt-5 text-5xl leading-[1.02] sm:text-6xl lg:text-[80px]">
              Fresh produce.
              <br />
              Trusted supply.
              <span className="block italic">
                <span className="text-gradient">Growing Zimbabwe.</span>
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70">
              Gorudo Investments is a diversified Zimbabwean company delivering
              greenhouse-grown produce, poultry and piggery excellence, and
              reliable supply of goods and services to institutions,
              businesses and procurement partners across Harare and Marondera.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#contact" className="btn-primary text-white shadow-ring">
                Partner with Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="#showcase" className="btn-secondary group">
                <PlayCircle className="h-5 w-5 text-brand-700 transition-transform group-hover:scale-110" />
                Watch the Farm
              </Link>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-brand-900/10 pt-8">
              {[
                { k: "3", v: "Business Divisions" },
                { k: "2", v: "Operating Hubs" },
                { k: "100%", v: "Zimbabwean" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-4xl font-semibold text-gradient">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-ink/60">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Video visual */}
          <div className="reveal lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-brand-500 via-lime-400 to-sun-400 opacity-70 blur-2xl" />
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 shadow-ring" />
              <div className="absolute inset-2 overflow-hidden rounded-[24px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/gorudo-3.jpeg"
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/gorudo-1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 via-transparent to-transparent" />
                {/* Sparkle corner */}
                <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-800 shadow-soft">
                  <Sparkles className="h-3.5 w-3.5 text-sun-500" />
                  Live at the farm
                </div>
              </div>

              {/* Floating card: Organic */}
              <div className="absolute -left-6 top-10 w-52 rounded-2xl bg-white/95 p-4 shadow-ring backdrop-blur animate-float">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-lime-500 text-white shadow-soft">
                    <Leaf className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-ink/60">
                      Greenhouse
                    </p>
                    <p className="font-display text-sm font-semibold">
                      Organic Fresh
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card: Trusted */}
              <div className="absolute -right-4 bottom-10 w-60 rounded-2xl bg-white/95 p-4 shadow-ring backdrop-blur animate-float-slow">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-soft">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-ink/60">
                      Procurement
                    </p>
                    <p className="font-display text-sm font-semibold">
                      Compliant & Reliable
                    </p>
                  </div>
                </div>
              </div>

              {/* Location chip */}
              <div className="absolute -bottom-4 left-10 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-white shadow-ring">
                <Sprout className="h-4 w-4 text-lime-400" />
                Harare · Marondera
              </div>
            </div>
          </div>
        </div>

        {/* Marquee trust strip */}
        <div className="reveal relative mt-20 overflow-hidden border-y border-brand-900/10 py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent z-10" />
          <div className="marquee-track">
            {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((t, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink/60"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {t}
                <span className="h-1.5 w-1.5 rounded-full bg-sun-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
