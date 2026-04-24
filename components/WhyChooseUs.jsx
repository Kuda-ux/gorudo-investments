import { Award, Leaf, Network, Workflow } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Leaf,
    title: "Quality at the Source",
    body: "From greenhouse to gate, our produce is grown and handled with disciplined quality standards — delivering consistency clients can taste and trust.",
  },
  {
    icon: Network,
    title: "Diversified & Integrated",
    body: "Three focused divisions under one umbrella give us resilience, flexibility and the capacity to serve multiple supply categories under one relationship.",
  },
  {
    icon: Workflow,
    title: "Professional Execution",
    body: "Every order is managed as a process — scoped, documented and delivered to specification with communication every step of the way.",
  },
  {
    icon: Award,
    title: "Zimbabwean Excellence",
    body: "Proudly local, professionally run. We build long-term value for Zimbabwean clients, communities and institutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-xl container-px">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="reveal relative lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-[28px] shadow-ring">
              <Image
                src="/images/gorudo-3.jpeg"
                alt="Premium greenhouse pepper crop by Gorudo Investments"
                fill
                sizes="(min-width:1024px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 w-60 rounded-2xl bg-white p-5 shadow-ring">
              <p className="font-display text-3xl font-semibold text-gradient">
                100%
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink/60">
                Zimbabwean owned &amp; operated
              </p>
            </div>
          </div>

          <div className="reveal lg:col-span-7">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Why Choose Gorudo
            </span>
            <h2 className="h-display mt-5 text-4xl sm:text-5xl">
              Built on discipline.
              <span className="block italic">
                <span className="text-gradient">Trusted for delivery.</span>
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              We combine agricultural depth, operational discipline and a
              genuinely partnership-driven mindset — so every client we serve
              gets more than a supplier. They get a dependable growth partner.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="group flex gap-4 rounded-2xl p-4 transition-colors duration-500 hover:bg-white"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700 transition-colors duration-500 group-hover:bg-brand-700 group-hover:text-white">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">
                      {r.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
