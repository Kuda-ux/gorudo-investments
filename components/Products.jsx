import Image from "next/image";
import { Leaf, Sprout, Truck, PackageCheck, Wheat, Egg } from "lucide-react";

const offerings = [
  {
    icon: Leaf,
    title: "Greenhouse Produce",
    body: "Organic, greenhouse-grown vegetables cultivated to exacting quality standards — delivered fresh from farm to market.",
  },
  {
    icon: Sprout,
    title: "Fresh Farm Produce",
    body: "Seasonal and staple farm produce sourced and managed with care to ensure consistent supply and premium freshness.",
  },
  {
    icon: Egg,
    title: "Poultry & Piggery Outputs",
    body: "Professionally reared livestock outputs for retail, trade and institutional partners across Zimbabwe.",
  },
  {
    icon: Wheat,
    title: "Agricultural Inputs & Commodities",
    body: "Sourcing and supply of agriculture-linked goods to support modern farms, cooperatives and agribusiness clients.",
  },
  {
    icon: PackageCheck,
    title: "Supply of Goods",
    body: "Reliable fulfilment of general supply contracts for businesses, institutions and procurement frameworks.",
  },
  {
    icon: Truck,
    title: "Services & Distribution",
    body: "Coordinated logistics, ice distribution and service delivery tailored to client timelines and specifications.",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="container-xl container-px">
        <div className="reveal grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Products & Services
            </span>
            <h2 className="h-display mt-5 text-4xl sm:text-5xl">
              From greenhouse to gate —
              <span className="block italic">
                <span className="text-gradient">premium supply, end to end.</span>
              </span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-ink/70">
            Our catalogue spans fresh agricultural produce, livestock outputs,
            ice supply, agriculture-linked goods and broader supply and
            service mandates — each delivered with professional discipline.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="reveal relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-ring">
              <Image
                src="/images/gorudo-10.jpeg"
                alt="Greenhouse-grown tomatoes from Gorudo Investments"
                fill
                sizes="(min-width:1024px) 35vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/80 via-brand-950/30 to-transparent p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-brand-100">
                  Fresh · Organic · Premium
                </p>
                <p className="font-display text-2xl text-white">
                  Greenhouse-grown quality, every harvest.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal lg:col-span-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {offerings.map((o) => (
                <li
                  key={o.title}
                  className="card group p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-ring"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700 transition-colors duration-500 group-hover:bg-brand-700 group-hover:text-white">
                      <o.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">
                      {o.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {o.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
