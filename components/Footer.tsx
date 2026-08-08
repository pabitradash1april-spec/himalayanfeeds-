import Link from "next/link";
import { NAV, CATEGORIES, BRAND } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="[&_span]:!text-cream">
            <Logo />
          </div>
          <p className="mt-4 text-sm text-cream/60 leading-relaxed">
            Premium poultry, fish, shrimp and cattle feed — nourishing livestock
            for optimal growth &amp; profitability.
          </p>
        </div>

        <div>
          <h4 className="font-display font-700 text-cream text-sm uppercase tracking-widest">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="hover:text-orange transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-700 text-cream text-sm uppercase tracking-widest">
            Products
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/products#${c.slug}`} className="hover:text-orange transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-700 text-cream text-sm uppercase tracking-widest">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={BRAND.phoneHref} className="hover:text-orange transition-colors">
                {BRAND.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${BRAND.email}`} className="hover:text-orange transition-colors">
                {BRAND.email}
              </a>
            </li>
          </ul>
          <a
            href={`https://wa.me/${BRAND.whatsapp}`}
            className="mt-5 inline-flex items-center gap-2 gradient-leaf text-white font-semibold text-sm px-4 py-2.5 rounded-full"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} {BRAND.full}. All rights reserved.</p>
          <p>Made for farmers, built to last.</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${BRAND.whatsapp}`}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lift hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1112 20zm4.5-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.5 6.5 0 01-1.9-1.2 7.2 7.2 0 01-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4a.5.5 0 000-.4c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a.9.9 0 00-.7.3 2.8 2.8 0 00-.9 2.1 4.9 4.9 0 001 2.6 11 11 0 004.3 3.8c1.5.6 1.8.5 2.2.5a2.5 2.5 0 001.6-1.2 2 2 0 00.2-1.2c-.1-.1-.3-.2-.5-.3z" />
      </svg>
    </a>
  );
}
