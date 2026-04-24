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
              Gorudo Investments is a diversified Zimbabwean enterprise with
              interests spanning fresh farm produce, greenhouse-grown outputs,
              poultry and piggery, ice production and the professional supply
              of goods and services. We operate from Harare and Marondera,
              serving private businesses, institutional clients and
              government procurement partners.
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
            <div className="grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4">
              <div className="relative col-span-4 row-span-4 overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/images/gorudo-1.jpeg"
                  alt="Greenhouse operations"
                  fill
                  sizes="(min-width:1024px) 40vw, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 row-span-3 overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/images/gorudo-7.jpeg"
                  alt="Fresh produce"
                  fill
                  sizes="(min-width:1024px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 row-span-3 overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/images/gorudo-4.jpeg"
                  alt="Poultry operations"
                  fill
                  sizes="(min-width:1024px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-3 row-span-2 overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/images/gorudo-6.jpeg"
                  alt="Agricultural detail"
                  fill
                  sizes="(min-width:1024px) 30vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-3 row-span-2 overflow-hidden rounded-2xl bg-brand-700 p-5 text-white shadow-ring">
                <p className="font-display text-2xl leading-tight">
                  "Organic, fresh, greenhouse-grown — delivered with
                  professional discipline."
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-brand-100">
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
