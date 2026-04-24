import Image from "next/image";
import { ArrowUpRight, Snowflake, Utensils, Drumstick } from "lucide-react";

const divisions = [
  {
    name: "Shashi Maputi",
    tag: "Food & Snack Line",
    icon: Utensils,
    image: "/images/gorudo-10.jpeg",
    description:
      "A carefully curated food product line delivering consistent quality, familiar taste, and dependable supply to retailers, vendors and institutional buyers across Zimbabwe.",
    points: ["Retail & wholesale ready", "Consistent quality control", "Zimbabwean taste, elevated"],
  },
  {
    name: "Shashi Ice",
    tag: "Ice Supply & Distribution",
    icon: Snowflake,
    image: "/images/gorudo-11.jpeg",
    description:
      "A specialised ice production and distribution unit supporting hospitality, events, cold-chain partners and commercial clients with reliable, hygienic supply.",
    points: ["Hygienic production", "Reliable distribution", "Commercial-grade capacity"],
  },
  {
    name: "Gorudo Poultry & Piggery",
    tag: "Livestock & Agribusiness",
    icon: Drumstick,
    image: "/images/gorudo-4.jpeg",
    description:
      "Our livestock division delivers premium poultry and piggery outputs managed under professional husbandry standards — supplying consistent volumes to trade partners.",
    points: ["Professional husbandry", "Volume consistency", "Trade & institutional supply"],
  },
];

export default function Divisions() {
  return (
    <section id="divisions" className="relative bg-white py-24 sm:py-32">
      <div className="container-xl container-px">
        <div className="reveal flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Our Divisions
            </span>
            <h2 className="h-display mt-5 text-4xl sm:text-5xl">
              Three business units.
              <span className="block italic">
                <span className="text-gradient">One standard of excellence.</span>
              </span>
            </h2>
          </div>
          <p className="max-w-md text-ink/70">
            Each division operates with its own focus and discipline, united by
            the Gorudo Investments commitment to quality, reliability and
            long-term partnership.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {divisions.map((d, i) => (
            <article
              key={d.name}
              className="reveal group relative overflow-hidden rounded-3xl border border-brand-900/5 bg-cream transition-all duration-500 hover:-translate-y-1 hover:shadow-ring"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(min-width:1024px) 30vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-brand-950/10 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                  <d.icon className="h-3.5 w-3.5" />
                  {d.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {d.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {d.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {d.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm text-ink/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 link-underline"
                >
                  Enquire about {d.name.split(" ")[0]}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
