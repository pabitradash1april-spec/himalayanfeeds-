import Link from "next/link";
import { BRAND } from "@/lib/site";
import Reveal from "./Reveal";

/* ---------------- Trust strip ---------------- */
const STATS = [
  { k: "12+", v: "Years of feed expertise" },
  { k: "500+", v: "Active dealers" },
  { k: "4", v: "Species covered" },
  { k: "FSSAI", v: "Certified manufacturing" },
];

export function TrustStrip() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <Reveal key={s.v} delay={i * 0.08}>
            <div className="text-center">
              <div className="font-display font-800 text-3xl sm:text-4xl text-orange">
                {s.k}
              </div>
              <div className="mt-1 text-sm text-cream/70">{s.v}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Why choose us ---------------- */
const FEATURES = [
  {
    title: "Science-backed formulas",
    body: "Every recipe is balanced by nutritionists for optimal feed-conversion and growth.",
    icon: (
      <path d="M9 3v6l-5 9a2 2 0 002 3h12a2 2 0 002-3l-5-9V3M8 3h8M8 14h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Antibiotic-free",
    body: "Clean, residue-free nutrition that keeps your stock and your customers safe.",
    icon: (
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Consistent quality",
    body: "Batch-tested at every stage so the bag you open always performs the same.",
    icon: (
      <path d="M4 7l8-4 8 4-8 4-8-4zM4 7v10l8 4 8-4V7M12 11v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Dealer support",
    body: "Marketing material, field advice and reliable supply for every partner.",
    icon: (
      <path d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M10 10a3 3 0 100-6 3 3 0 000 6zM17 11l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-cream-deep/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-orange-light text-orange-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5">
              Why Himalayan
            </span>
            <h2 className="mt-5 font-display font-800 text-3xl sm:text-4xl tracking-tight text-ink text-balance">
              Feed that farmers come back for
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-white border border-cream-deep p-7 shadow-soft">
                <div className="grid place-items-center h-12 w-12 rounded-2xl gradient-leaf text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-display font-700 text-lg text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Dealership band ---------------- */
export function DealershipBand() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] gradient-orange text-white px-8 py-14 sm:px-14 shadow-lift">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10" />
            <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-white/10" />
            <div className="relative max-w-2xl">
              <h2 className="font-display font-800 text-3xl sm:text-4xl tracking-tight text-balance">
                Become a Himalayan dealer
              </h2>
              <p className="mt-4 text-white/90 text-lg">
                Attractive margins, dependable supply and full marketing support.
                Join a growing network of feed partners across India.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/dealership"
                  className="bg-white text-orange-dark font-semibold px-6 py-3 rounded-full shadow-soft hover:-translate-y-0.5 transition-all"
                >
                  Apply for dealership
                </Link>
                <a
                  href={BRAND.phoneHref}
                  className="border border-white/60 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all"
                >
                  Call {BRAND.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const REVIEWS = [
  {
    quote:
      "Switched my broiler farm to Nutri Choice and feed conversion improved within two batches. The margins speak for themselves.",
    name: "Ramesh Das",
    role: "Poultry farmer · Nadia, WB",
  },
  {
    quote:
      "Matsya Bandhu floats well and keeps my pond water clean. Fish growth has been steady and healthy all season.",
    name: "Sujit Mondal",
    role: "Fish farmer · Howrah, WB",
  },
  {
    quote:
      "As a dealer, the supply is reliable and the support team actually picks up the phone. That is rare in this trade.",
    name: "Anil Kumar",
    role: "Distributor · Patna, Bihar",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-cream-deep/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-leaf-light text-leaf-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5">
              Success Stories
            </span>
            <h2 className="mt-5 font-display font-800 text-3xl sm:text-4xl tracking-tight text-ink text-balance">
              Trusted on farms across the east
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <figure className="h-full rounded-3xl bg-white border border-cream-deep p-7 shadow-soft flex flex-col">
                <div className="text-gold text-xl">★★★★★</div>
                <blockquote className="mt-4 text-ink-soft leading-relaxed flex-1">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-cream-deep">
                  <div className="font-display font-700 text-ink">{r.name}</div>
                  <div className="text-xs text-ink-soft mt-0.5">{r.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
