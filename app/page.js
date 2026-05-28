import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 px-6 text-center">
      {/* Glow blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-lime-400/10 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-lg">
        {/* Logo */}
        <span className="inline-flex h-20 w-20 items-center justify-center overflow-hidden rounded-[20px] bg-white shadow-ring p-2">
          <Image
            src="/logo.jpeg"
            alt="Gorudo Investments"
            width={160}
            height={160}
            className="h-16 w-16 object-contain"
            priority
          />
        </span>

        {/* Brand */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-300">
            Gorudo Investments
          </p>
          <p className="text-[11px] tracking-[0.2em] text-brand-400/70 mt-0.5">
            Harvesting Prosperity · Zimbabwe
          </p>
        </div>

        {/* Maintenance message */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-8 shadow-ring">
          <div className="inline-flex items-center gap-2 rounded-full bg-sun-400/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sun-400 mb-5">
            <span className="h-2 w-2 rounded-full bg-sun-400 animate-pulse" />
            Temporarily Unavailable
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight">
            We'll be back shortly.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-brand-200/70">
            Our website is currently undergoing scheduled maintenance.
            We apologise for the inconvenience and will be back online very soon.
          </p>
        </div>

        {/* Contact line */}
        <div className="text-sm text-brand-300/60 space-y-1">
          <p>For urgent enquiries please reach us directly:</p>
          <a
            href="tel:+263773733504"
            className="block font-semibold text-brand-200 hover:text-white transition-colors"
          >
            +263 77 373 3504
          </a>
          <a
            href="https://wa.me/263718668688"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold text-brand-200 hover:text-white transition-colors"
          >
            WhatsApp: +263 71 866 8688
          </a>
        </div>

        <p className="text-[11px] text-brand-500">
          © {new Date().getFullYear()} Gorudo Investments (Private) Limited
        </p>
      </div>
    </main>
  );
}
