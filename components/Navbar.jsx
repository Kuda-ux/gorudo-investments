"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#showcase", label: "Showcase" },
  { href: "/#divisions", label: "Divisions" },
  { href: "/#products", label: "Products" },
  { href: "/#procurement", label: "Procurement" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(23,64,39,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl container-px">
        <nav className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ring-1 ring-brand-900/10 bg-white shadow-soft">
              <Image
                src="/logo.jpeg"
                alt="Gorudo Investments logo"
                width={44}
                height={44}
                className="h-11 w-11 object-cover"
                priority
              />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold tracking-tight text-ink">
                Gorudo Investments
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                Zimbabwe · Since Inception
              </span>
            </div>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="link-underline text-sm font-medium text-ink/80 hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/#contact" className="btn-primary">
              Request a Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-900/10 bg-white/80 backdrop-blur lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-cream shadow-ring transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpeg"
                alt="Gorudo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover ring-1 ring-brand-900/10"
              />
              <span className="font-display text-base font-semibold">
                Gorudo
              </span>
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-900/10 bg-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-4 pb-8 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium hover:bg-white"
                >
                  {l.label}
                  <ArrowUpRight className="h-4 w-4 text-brand-700" />
                </Link>
              </li>
            ))}
            <li className="mt-4 px-2">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
}
