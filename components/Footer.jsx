import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-50/80">
      <div className="container-xl container-px py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-white/10">
                <Image
                  src="/logo.jpeg"
                  alt="Gorudo Investments"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-cover"
                />
              </span>
              <div>
                <p className="font-display text-xl font-semibold text-white">
                  Gorudo Investments
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-brand-200">
                  Zimbabwe
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed">
              Premium agribusiness and diversified supply — delivering fresh
              produce, greenhouse excellence, livestock outputs and reliable
              procurement solutions from Harare and Marondera.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-300" />
                Harare &middot; Marondera, Zimbabwe
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-300" />
                info@gorudoinvestments.co.zw
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
              Company
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/#about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#divisions" className="hover:text-white">
                  Divisions
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#procurement" className="hover:text-white">
                  Procurement
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
              Divisions
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>Shashi Maputi</li>
              <li>Shashi Ice</li>
              <li>Gorudo Poultry &amp; Piggery</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
              Get in touch
            </p>
            <p className="mt-5 text-sm leading-relaxed">
              For supply, procurement and partnership enquiries — our team
              responds within one business day.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 hover:bg-brand-50"
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-brand-100/60 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Gorudo Investments. All rights
            reserved.
          </p>
          <p>
            gorudoinvestments.co.zw &middot; Proudly Zimbabwean
          </p>
        </div>
      </div>
    </footer>
  );
}
