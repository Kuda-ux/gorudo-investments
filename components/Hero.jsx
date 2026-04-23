"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, ShieldCheck, Sprout } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl" />
        <div className="absolute -right-24 top-1/2 h-96 w-96 rounded-full bg-brand-100 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(23,64,39,0.06)_1px,transparent_0)] [background-size:22px_22px] [mask-image:linear-gradient(180deg,black,transparent_85%)]" />
      </div>

      <div className="container-xl container-px">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Zimbabwean Agribusiness · Supply · Procurement
            </span>
            <h1 className="h-display mt-5 text-5xl leading-[1.02] sm:text-6xl lg:text-[78px]">
              Fresh produce.
              <br />
              Trusted supply.
              <span className="block italic text-brand-700">
                Growing Zimbabwe.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70">
              Gorudo Investments is a diversified Zimbabwean company delivering
              greenhouse-grown produce, poultry and piggery excellence, and
              reliable supply of goods and services to institutions,
              businesses and procurement partners across Harare and Marondera.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#contact" className="btn-primary">
                Partner with Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="#divisions" className="btn-secondary">
                Explore Our Divisions
              </Link>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-brand-900/10 pt-8">
              {[
                { k: "3", v: "Business Divisions" },
                { k: "2", v: "Operating Hubs" },
                { k: "100%", v: "Zimbabwean" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-semibold text-ink">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-ink/60">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual composition */}
          <div className="reveal lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-brand-700 to-brand-900 shadow-ring" />
              <div className="absolute inset-2 overflow-hidden rounded-[24px]">
                <Image
                  src="/images/gorudo-3.jpeg"
                  alt="Fresh greenhouse produce from Gorudo Investments"
                  fill
                  priority
                  sizes="(min-width:1024px) 40vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating card: Organic */}
              <div className="absolute -left-6 top-10 w-48 rounded-2xl bg-white/95 p-4 shadow-ring backdrop-blur animate-float">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Leaf className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-ink/60">
                      Greenhouse
                    </p>
                    <p className="font-display text-sm font-semibold">
                      Organic Fresh
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card: Trusted */}
              <div className="absolute -right-4 bottom-8 w-56 rounded-2xl bg-white/95 p-4 shadow-ring backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-ink/60">
                      Procurement
                    </p>
                    <p className="font-display text-sm font-semibold">
                      Compliant & Reliable
                    </p>
                  </div>
                </div>
              </div>

              {/* Small chip */}
              <div className="absolute -bottom-4 left-10 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-white shadow-ring">
                <Sprout className="h-4 w-4 text-brand-300" />
                Harare · Marondera
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="reveal mt-20 grid grid-cols-2 gap-6 border-y border-brand-900/10 py-8 text-sm text-ink/60 sm:grid-cols-4">
          {[
            "Fresh Farm Produce",
            "Greenhouse Excellence",
            "Poultry & Piggery",
            "Reliable Supply Chain",
          ].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              <span className="font-medium uppercase tracking-[0.16em]">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
