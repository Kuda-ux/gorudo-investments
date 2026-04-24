import Image from "next/image";
import { Compass, Target, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Our Vision",
    body: "To be Zimbabwe's most trusted agribusiness and diversified supply partner — recognised for quality, integrity and the measurable value we deliver to every client we serve.",
  },
  {
    icon: Target,
    title: "Our Mission",
    body: "To grow, source and supply premium produce, goods and services with operational excellence — supporting institutions, enterprises and communities across Zimbabwe.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    body: "Integrity. Quality. Accountability. Partnership. Every decision, contract and delivery is anchored to standards that clients can rely on season after season.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-xl container-px">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="reveal lg:col-span-5">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              About Gorudo Investments
            </span>
            <h2 className="h-display mt-5 text-4xl sm:text-5xl">
              A Zimbabwean company built for
              <span className="italic"> <span className="text-gradient">serious growth.</span></span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Gorudo Investments (Private) Limited is a diversified Zimbabwean
              enterprise <em>harvesting prosperity</em> across fresh farm
              produce, greenhouse-grown outputs, poultry, piggery, ice
              production and the professional supply of goods and services.
              We operate from Harare and Marondera, serving private
              businesses, institutional clients and government procurement
              partners.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              Our model combines agricultural depth with disciplined business
              execution — enabling us to deliver consistently, scale
              responsibly and build long-term relationships rooted in trust.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#divisions" className="btn-secondary">
                Our Divisions
              </a>
              <a href="#contact" className="btn-ghost">
                Partner with us →
              </a>
            </div>
          </div>

          <div className="reveal lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {/* Tall feature image */}
              <div className="relative col-span-1 row-span-2 aspect-[3/5] overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/images/gorudo-3.jpeg"
                  alt="Greenhouse peppers — Gorudo Investments"
                  fill
                  sizes="(min-width:1024px) 30vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-soft">
                  Greenhouse
                </span>
              </div>

              {/* Top-right: tomatoes */}
              <div className="relative col-span-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/images/gorudo-10.jpeg"
                  alt="Fresh greenhouse tomatoes"
                  fill
                  sizes="(min-width:1024px) 30vw, 45vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-soft">
                  Fresh Produce
                </span>
              </div>

              {/* Middle-right: piggery */}
              <div className="relative col-span-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/images/gorudo-5.jpeg"
                  alt="Gorudo piggery division"
                  fill
                  sizes="(min-width:1024px) 30vw, 45vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-soft">
                  Piggery
                </span>
              </div>

              {/* Bottom-left: peppers */}
              <div className="relative col-span-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/images/gorudo-11.jpeg"
                  alt="Fresh bell peppers"
                  fill
                  sizes="(min-width:1024px) 30vw, 45vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-soft">
                  Sweet Peppers
                </span>
              </div>

              {/* Bottom-right: quote card */}
              <div className="relative col-span-1 flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-5 text-white shadow-ring sm:p-6">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-lime-400/30 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-sun-400/25 blur-2xl" />
                <p className="relative font-display text-base leading-snug sm:text-lg">
                  "Organic, fresh, greenhouse-grown — delivered with
                  professional discipline."
                </p>
                <p className="relative mt-3 text-[10px] uppercase tracking-[0.22em] text-brand-100">
                  — Gorudo Investments
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-20 grid gap-5 sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="card group p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-ring"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700 transition-colors duration-500 group-hover:bg-brand-700 group-hover:text-white">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
