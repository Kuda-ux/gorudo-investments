import { CheckCircle2, FileCheck2, Handshake, ShieldCheck, Timer } from "lucide-react";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Compliant & Registered",
    body: "Structured to meet formal procurement standards — ready for institutional, corporate and government tenders.",
  },
  {
    icon: FileCheck2,
    title: "Documented Processes",
    body: "Clear sourcing, quality control and delivery workflows that support auditability and accountability.",
  },
  {
    icon: Timer,
    title: "On-Time Fulfilment",
    body: "Disciplined scheduling and logistics to honour delivery windows, contract terms and volume commitments.",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    body: "We work as an extension of your team — transparent pricing, consistent communication, long-term reliability.",
  },
];

export default function Procurement() {
  return (
    <section
      id="procurement"
      className="relative overflow-hidden bg-brand-950 py-24 text-white sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/gorudo-2.jpeg"
          className="h-full w-full object-cover opacity-25"
        >
          <source src="/videos/gorudo-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/92 to-brand-950" />
        <div className="absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-lime-500/10 blur-3xl" />
        <div className="absolute right-10 top-1/2 h-72 w-72 rounded-full bg-sun-400/10 blur-3xl" />
      </div>

      <div className="container-xl container-px relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="reveal lg:col-span-6">
            <span className="eyebrow !text-brand-200">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-300" />
              Procurement & Business Capability
            </span>
            <h2 className="h-display mt-5 text-4xl text-white sm:text-5xl">
              A supply partner built for
              <span className="block italic text-brand-200">
                institutional trust.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-50/80">
              Gorudo Investments participates in formal procurement and
              institutional supply — bringing the discipline, documentation
              and delivery reliability that serious clients demand. We are
              positioned to support tenders, framework agreements and
              recurring supply mandates across Zimbabwe.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Government procurement ready",
                "Corporate supply contracts",
                "Institutional partnerships",
                "Recurring & framework orders",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 text-sm text-brand-50/90"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-300" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn bg-white text-brand-900 hover:bg-brand-50"
              >
                Request Capability Statement
              </a>
              <a
                href="#contact"
                className="btn border border-white/20 text-white hover:bg-white/10"
              >
                Submit an RFQ
              </a>
            </div>
          </div>

          <div className="reveal grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700 text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-50/75">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
