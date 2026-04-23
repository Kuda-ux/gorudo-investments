import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-xl container-px">
        <div className="relative overflow-hidden rounded-[28px] bg-brand-700 p-10 sm:p-14 lg:p-20">
          <div className="pointer-events-none absolute inset-0 -z-0 opacity-30">
            <Image
              src="/images/gorudo-1.jpeg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-800/80 to-transparent" />
          </div>
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                Ready when you are
              </span>
              <h3 className="h-display mt-4 text-4xl text-white sm:text-5xl">
                Source smarter. Supply stronger.
                <span className="block italic text-brand-200">
                  Partner with Gorudo.
                </span>
              </h3>
              <p className="mt-5 max-w-xl text-brand-50/85">
                From a single produce order to a multi-year supply mandate —
                we'd be glad to understand your requirements and show you how
                we deliver.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <a
                href="#contact"
                className="btn bg-white text-brand-900 hover:bg-brand-50"
              >
                Start a Conversation
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#divisions"
                className="btn border border-white/25 text-white hover:bg-white/10"
              >
                See Our Divisions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
